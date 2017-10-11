import mongoose from 'mongoose';
import "../models/City";

const City = mongoose.model('City');

export function listCities(id) {
	return City.find();
}

export function createCity(data) {
	const city = new City({
		cityId: data.cityId,
		name: data.name,
		date_start: data.date_start,
		date_end: data.date_end
	});

	return city;
}

export function deleteCity (id){
	return City.findById(id).remove();
}
