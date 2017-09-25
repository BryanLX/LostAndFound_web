// set up.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

try {
    mongoose.connect('mongodb://localhost/lostandfound'); //- starting a db connection
}catch(err) {
    mongoose.createConnection('mongodb://localhost/lostandfound'); //- starting another db connection
}

var user = new Schema({
  email: { // username of this user
    type: String,
    required: true,
    unique: true
  },
  password: String,
  fullname: String
});

var userSchema = mongoose.model('users', user);

module.exports = userSchema;