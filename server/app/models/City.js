const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CitySchema = new Schema({
	cityId: Number,
	name: String,
	date_start: String,
	date_end: String
});

module.exports = mongoose.model('City', CitySchema);