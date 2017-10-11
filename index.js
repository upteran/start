const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./server/config/db');
const app = express();
const port = 6000;

app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
MongoClient.connect(db.url, (err, database) => {
	if (err) return console.log(err);
	require('./server/app/routs')(app, database);
	app.listen(port, () => {
		console.log('port number ' + port + ' here !');
	});
});
