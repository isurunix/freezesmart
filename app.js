var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('./auth');
var app = express();

app.use(express.static( path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({secret:'s3cr3tk3yr4nd0m',resave:false,saveUninitialized:true}));
app.set('view engine','pug');
app.set('views','./views/');

app.get('/home',function(req,res){
  console.log("GET /home");
  res.render('index',{ titlePrefix: 'Home', message: 'Hello there!'});
});

app.get('/',function(req,res){
  console.log("GET /");
  res.render('index',{ titlePrefix: 'Home', message: 'Hello there!'});
});

app.get('/login', function(req,res){
  console.log('GET /login');
  var sess = req.session;
  if(sess.isLogged){
    res.redirect('/dashboard');
  }else{
    res.render('login',{ titlePrefix: 'Login', message:''});
  }
});

app.post('/login',function(req,res){
  var sess = req.session;
  var uname = req.body.uname;
  var pwd = req.body.pwd;
  console.log('POST /login {'+uname+','+pwd+'}');
  var authenticated = passport.auth(uname,pwd);
  if(authenticated){
    sess.isLogged=true;
    sess.uname=uname;
    sess.pwd=pwd;
    res.render('login',{ titlePrefix: 'Login', status:'success'});
  }else{
    res.render('login',{ titlePrefix: 'Login', status:'failed'});
  }
});

app.get('/logout',function(req,res){
  req.session.destroy(function(err){
    if(err){
      console.log(err);
    }else{
      res.redirect('/');
    }
  })
});

app.get('/dashboard',function(req,res){
  console.log('GET /dashboard');
  var sess = req.session;
  if(sess.isLogged){
    res.render('dashboard',{ titlePrefix: 'Dashboard', isLogged:'success'});
  }else{
    res.redirect('/');
  }
});

app.listen(8080,function(){
  console.log("Started FreezeSmart app");
  console.log("Listening on port 8080");
});
