const http = require('http')
const port = process.env.PORT || 5000
const express = require('express')
const app = express()
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongodb = require('mongodb');

const MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';

var findDocuments = function(db, callback) {
    var collection = db.collection('enterprises');

    collection.find().toArray(function(err,docs){
        if (err) throw err;
        // console.log(docs);
        app.get('/api/enterprises', (req, res) => {
		  res.send( { docs } );
		});

        callback;
    })

    app.post('/api/search', (req, res) => {
        collection.find({"Название организации": { "$regex": eval('/^' + req.body.name + '/'), "$options": "i" }}).toArray(function(err,docs){
            if (err) throw err;
            res.send({docs})
            callback;
        })
    });

    app.post('/api/labels', (req, res) => {
        collection.aggregate([{$group: { _id: "$Разделы", count: { $sum: 1 } }},{$sort: { count: -1 }},{$limit: 10}]).toArray(function(err,docs){
            if (err) throw err;
            res.send({docs})
            console.log(docs)
            callback;
        })
    });

    app.post('/api/insert', (req, res) => {
        collection.aggregate([{$group: {_id: "$Разделы", count: {$sum: 1}}}]).toArray(function(err,docs){
            if (err) throw err;
            res.send({docs})
            callback;
        })
    });

    app.post('/api/section', (req, res) => {
        collection.find({"Разделы": req.body.sec}).toArray(function(err,docs){
            if (err) throw err;
            res.send({docs})
            callback;
        })
    });

    app.post('/api/area', (req, res) => {
        collection.aggregate([{$group: {_id: "$Район"}}]).toArray(function(err,docs){
            if (err) throw err;
            res.send({docs})
            callback;
        })
    });


    app.post('/api/add', (req, res) => {
    collection.insertOne({
        "Населенные пункты": req.body.city,
        "Почтовые индексы": req.body.index,
        "Адреса": req.body.address,
        "Название организации": req.body.name,
        "Разделы": req.body.section,
        "Телефоны": req.body.tel
        }, (err, docs) => {
            if (err) throw err;
            res.send({docs})
            callback;
        }
        )
    });

    app.post('/api/delete', (req, res) => {
        collection.deleteOne(
            {
                _id: new mongodb.ObjectID(req.body.id)
            },
            (err, docs) => {
                if (err) throw err;
                res.send({docs})
                callback;
            }
        )
    })
}


MongoClient.connect(url, function(err, client){
    if (err) throw err;
    // console.log("it is working");
    // db.close();
    findDocuments(client.db('test'), function(){
        db.close();
    });
})



app.listen(port, (err) => {
	if(err){
		return console.log('something bad happened', err)
	}

	console.log(`Server is listening on ${port}`)
})