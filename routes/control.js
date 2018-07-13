var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var app = require('../app');
var url = require ('url');
var path = require('path');

var expressValidator = require('express-validator');
var passport = require('passport');

var session = require('express-session');
/*control Homepage */
router.get('/control', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/control/Control.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});
router.get('/Particulars', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/control/Particulars.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/Tyres', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/control/Tyres.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});


router.get('/Repairs', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/control/Repairs.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});


router.get('/Oil', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/control/Oil.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/Monthly', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/control/Monthly.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});



passport.serializeUser(function (user_id,done) {
    done(null, user_id)
});

passport.deserializeUser(function (user_id ,done) {
    // User.findById(id,function (err,user) {/*mongodb*/
    done(null,user_id);
    // });
});

module.exports = router;