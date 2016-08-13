var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('./auth');
var app = express();

app.use(express.static( path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('view engine','pug');
app.set('views','./views/');

app.get('/home',function(req,res){
  // res.sendFile('index.html');
  console.log("/");
  res.render('index',{ titlePrefix: 'Home', message: 'Hello there!'});
});

app.get('/',function(req,res){
  // res.sendFile('index.html');
  console.log("/");
  res.render('index',{ titlePrefix: 'Home', message: 'Hello there!'});
});

app.get('/login', function(req,res){
  console.log('login');
  res.render('login',{ titlePrefix: 'Login', message:''});
});

app.post('/login',function(req,res){
  var uname = req.body.uname;
  var pwd = req.body.pwd;
  var authenticated = passport.auth(uname,pwd);
  if(authenticated){
    res.render('dashboard',{ titlePrefix: 'Dashboard', status:''});
  }else{
    res.render('login',{ titlePrefix: 'Login', status:'failed'});
  }
});

app.listen(8080,function(){
  console.log("Started FreezeSmart app");
  console.log("Listening on port 8080");
});
