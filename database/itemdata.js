// set up.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

try {
    mongoose.connect('mongodb://localhost/lostandfound'); //- starting a db connection
}catch(err) {
    mongoose.createConnection('mongodb://localhost/lostandfound'); //- starting another db connection
}

var item = new Schema({
	location: [Number],
	name: String,
	color: String,
	questions: String,
	email: String,
	founder: String,
	img: String
});

var itemSchema = mongoose.model('items', item);

module.exports = itemSchema;