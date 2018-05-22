const http = require('http')
const port = process.env.PORT || 5000
const express = require('express')
const app = express()
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';

var findDocuments = function(db, callback) {
    var collection = db.collection('data');

    collection.find().toArray(function(err,docs){
        if (err) throw err;
        app.get('/api/enterprises', (req, res) => {
		  res.send( { docs } );
		});

        callback;
    })

     app.post('/api/search', (req, res) => {
        collection.find({"Населенные пункты": req.body.city}).toArray(function(err,docs){
            if (err) throw err;
            res.send({docs})
            callback;
        })
    });
}


MongoClient.connect(url, function(err, client){
    if (err) throw err;
    // console.log("it is working");
    // db.close();
    findDocuments(client.db('test'), function(){
        db.close();
    });
})



app.get('/', (req, res) => {
	res.send("hello")
})



app.listen(port, (err) => {
	if(err){
		return console.log('something bad happened', err)
	}

	console.log(`Server is listening on ${port}`)
})