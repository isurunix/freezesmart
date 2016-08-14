var db = require('./db');

var authenticate = function(uname,pwd,callback){
  db.getUser(uname,pwd,callback);
}

exports.auth = authenticate;
