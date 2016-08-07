var express = require('express');
var path = require('path');
var app = express();

app.use(express.static( path.join(__dirname, 'views')));
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

app.get('/pug', function(req,res){
  res.render('base',{ titlePrefix: 'Base', message: 'Hello there!'});
});

app.get('/login', function(req,res){
  console.log('login');
  res.render('login',{ titlePrefix: 'Login', message:''});
});

app.post('/login',function(req,res){
  res.render('login',{ titlePrefix: 'Login', status:'failed'});
});

app.listen(8080,function(){
  console.log("Started FreezeSmart app");
  console.log("Listening on port 8080");
});
