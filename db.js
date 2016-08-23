var mongoose = require('mongoose');
var user = require('./models/user');
var snap = require('./models/snap');
mongoose.connect('mongodb://localhost:27017/smart-ref');
var db = mongoose.connection;

//on db connection error
db.on('error',console.error.bind(console,'db connecttion error'));
//on successfull connection
db.once('open',function(){
  console.log('DB connected');
});

//Read user from database
//if user found return user, else return null
var getUser = function(uid,upwd,callback) {
  user.findOne({_id:uid,pwd:upwd},function(err,user){
    callback(err,user);
  });
}

var getLastSnapUpdate = function(uid,callback){
  var query =snap.find({user:uid}).sort({_id:-1}).limit(1);
  var docs = query.find(function (err,results) {
    if(err) return console.error(err);
    return results;
  });
}

var s = getLastSnapUpdate("default_usr");
console.log(s);
module.exports.getUser = getUser;
