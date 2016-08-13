
var authenticate = function(uname,pwd){
  if(uname==='isuru' && pwd=='isuru') return true;
  return false;
}

exports.auth = authenticate;
