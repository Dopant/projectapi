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
router.get('/stores', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/stores.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});


router.get('/storesSetup', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesSetup.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});


router.get('/storesAdd', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesAdd.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesDelete', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesDelete.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesUpdate', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesAddPart', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/add/addPart.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesAddConsumable', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesAddBattery', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesAddTyre', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesAddLubricant', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesUpdatePart', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesUpdateConsumable', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesUpdateTyre', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesUpdateBattery', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesUpdateLubricant', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesDeletePart', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesDeleteConsumable', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesDeleteTyre', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});


router.get('/storesDeleteBattery', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesDeleteLubricant', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/storesUpdate.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});


router.get('/ll' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql =  "";
                conn.query(sql, function(err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var newsIndex in rows) {
                        var newsObj = rows[newsIndex];
                        resEmp.push(newsObj);
                    }
                    resp.json(resEmp);
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return (ex);
    }
});




router.post('/',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql =

                con.query(sql, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var newsIndex in rows) {
                        var newsObj = rows[newsIndex];
                        resEmp.push(newsObj);
                    }
                    resp.redirect('/');
                });

            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return (ex);
    }
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