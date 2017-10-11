const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TimeSchema = new Schema({
	cityId: Number,
	times: Object
});

module.exports = mongoose.model('Time', TimeSchema);