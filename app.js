var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var hbs = require('express-handlebars');
var ath = require('./routes/index');
var expressValidator = require('express-validator');
var logger = require('morgan');


//var cons = require('consolidate');

var session = require('express-session');
var passport = require('passport');
var MySQLStore = require('express-mysql-session')(session);
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var control = require('./routes/control');
var stores = require('./routes/stores');

var mysql = require('mysql');

var app = express();


app.engine('hbs', hbs({extname: 'hbs',}));
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//app.engine('html', cons.swig);

//app.set('view engine', 'html');




 connection =  require('express-myconnection');
  db = {
      host:'den1.mysql4.gear.host',
      user:'stcdb2',
      password:'Nm09fI-71-6X',
      database:'stcdb2',

   //   host:'127.0.0.1',
   //   user:'root',
   //   password:'',
   //   database:'stcdb'

};
app.use(connection(mysql,db,'request'));

var options = db;

var sessionStore = new MySQLStore(options);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(expressValidator());



//app.use( express.static(path.join(__dirname, '/routes/homepage.html')));

app.use( express.static(path.join(__dirname, 'public')));

app.use(session({
    secret : 'knbvtffcbnnnnugvfxdxzxz',
    resave : false,
    store : sessionStore,
    saveUninitialized : false,
   // cookie : { secure : true }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use( '/',control);
app.use( '/',stores);
app.use('/', indexRouter);

app.use('/users', usersRouter);

app.use(function(req, resp, next) {

    var err = new Error('Not Found');
    err.status = 404;
    next(err);

});
module.exports = app;

