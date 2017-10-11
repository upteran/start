const noteRouts = require('./note_routes');

module.exports = function(app, db) {
	noteRouts(app, db);
};
