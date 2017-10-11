const ObjectID = require('mongodb').ObjectID;
const City = require('./../models/City');
const Time = require('./../models/Time');


function createCity(data) {
	const city = new City({
		cityId: data.cityId,
		name: data.name,
		date_start: data.date_start,
		date_end: data.date_end
	});

	return city;
}
function arriveTime(city) {
	const arriveTime = new Time({
		cityId: city.id,
		times: city.times
	});

	return arriveTime;
}
module.exports = function(app, db) {
	app.get('/cities', (req, res) => {
		const cities = db.collection('city').find().stream();
		let citiesArr = [];
		cities.on('data', function(doc) {
    		citiesArr.push(doc);
		});
		cities.on('error', function(err) {
		    console.log(err);
		});
		cities.on('end', function(doc) {
		    console.log('All done!');
		    res.send(citiesArr)
		});

	})
	app.delete('/cities/:id', (req, res) => {
		const id = req.params.id;
		const details = { 'cityId': parseInt(id) }
		db.collection('city').remove(details , (err, item) => {
			if(err){
				res.send({ 'error': 'an error has occured' });
			} else {
				res.send(id);
			}
		})
	})
	app.put('/cities/:id', (req, res) => {
		const id = req.params.id,
			  details = { 'cityId': parseInt(id) };
		const editedProp = { $set: { [req.body.nameProp]: [req.body.valueProp] }};
		db.collection('city').update(details , editedProp,  (err, result) => {
			if(err){
				res.send({ 'error': 'an error has occured' });
			} else {
				res.send(editedProp);
			}
		})
	})
	app.post('/', (req, res) => {
		const city = createCity(req.body);
		db.collection('city').insert(city, (err, result ) => {
			if(err){
				res.send({ 'error': 'an error has occured' });
			} else {
				res.send(result.ops[0]);
			}
		})
	});

	app.post('/cities/times/:id', (req, res) => {
		const id = req.params.id,
		      details = { 'cityId': parseInt(id) },
		      time = arriveTime(req.body);
		let item = null;
		      console.log('put work')
		      console.log(time)
		db.collection('cityInner').insert(time , (err, item) => {
			if(err){
				res.send({ 'error': 'an error has occured' });
			} else {
				res.send(item)
			}
		});
	})
};