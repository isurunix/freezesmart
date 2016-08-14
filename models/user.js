var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  _id: String,
  pwd: String
});

var User = mongoose.model('user',userSchema,'user');
module.exports = User;
