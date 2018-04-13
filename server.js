const http = require('http')
const port = process.env.PORT || 5000
const express = require('express')
const app = express()


app.get('/', (req, res) => {
	res.send('Hello world')
})

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, (err) => {
	if(err){
		return console.log('something bad happened', err)
	}

	console.log(`Server is listening on ${port}`)
})