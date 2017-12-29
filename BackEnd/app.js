var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://bytemail:bytemail@bytemailcluster-shard-00-00-ftob0.mongodb.net:27017,bytemailcluster-shard-00-01-ftob0.mongodb.net:27017,bytemailcluster-shard-00-02-ftob0.mongodb.net:27017/test?ssl=true&replicaSet=ByteMailCluster-shard-0&authSource=admin',{useMongoClient: true});


var config = require('./config');
app.set('superSecret', config.secret);

Login = require('./API/Login');
Auth = require('./Repository/Authentication');
Register = require('./API/Register');
Mails = require('./API/MailBox');
SendEmail = require('./API/sendmail');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//routing
app.get('/',function(req, res){

  res.send("Hello world!");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('', Login);
app.use('',Register);
app.use('/api/', Auth);
app.use('',Mails);
app.use('',SendEmail);
//app.use('/', index);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
