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
/*
router.get('/storesAuthentificate', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        let key = '1234';
        if ( req.query.key === key){
            console.log(req.query.key);
            resp.redirect('/');
           // resp.sendFile(path.join(__dirname + '/stores/storesSetup.html'))
        }
        else{
            console.log(req.query.key);
            resp.redirect('/');
        }

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
                var sql = "" ;

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


router.post('/',function(req, resp, next){
    try {
        let  cumMileage;
        let cumId;
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {

                var sql1 = "select cumulative_mileage from monthly_mileage where id = (select max(id) from monthly_mileage where registry_no ='"+req.body.busdropdown+"')";

                con.query(sql1, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resEmp = [];
                    for (var newsIndex in rows) {
                        var newsObj = rows[newsIndex];
                        resEmp.push(newsObj);
                    }
                    if (rows.length === 0 ){

                        cumMileage = 0;
                    }else {
                        console.log(rows[0]);
                        cumMileage = rows[0].cumulative_mileage;
                        console.log(cumMileage);
                        console.log(req.body.oil);
                    }


                    var sql2 = " insert into monthly_mileage(registry_no,current_mileage,cumulative_mileage,fuel,fuel_rate,oil,oil_rate,date,Remarks)"
                        + " values ('" + req.body.busdropdown + "'," + req.body.currentKm + "," + (+cumMileage + +req.body.currentKm)  +
                        "," + req.body.fuelL + ","  + req.body.fuelLk + "," + req.body.oilL +
                        ","  + req.body.oil +  ",'" + req.body.date + "','" + req.body.remarks + "')" ;

                    con.query(sql2, function (err, rows, fields) {
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


                });





            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return (ex);
    }
});



router.post('/jjgfj',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {

                try{
                    var key = '1234';
                    req.checkBody('userName' ,'username field cannot be empty').notEmpty();
                    req.checkBody('firstName' ,'First name field cannot be empty').notEmpty();
                    req.checkBody('lastName' ,'Last name field cannot be empty').notEmpty();
                    req.checkBody('password' ,'password must be between 8-100 characters long').len(8,100);
                    req.checkBody('passwordMatch' ,'passwords do not match').equals(req.body.password);
                    req.checkBody('key' ,'Incorrect authentification key').equals(key);
                    const errors = req.validationErrors();
                    if(errors){
                        console.log(`errors: ${JSON.stringify(errors)}`);

                        resp.render('index', {
                            title: 'Registration Error',
                            errors: errors
                        });

                    }
                    else{
                        const userPassword = req.body.password;
                        bcrypt.hash(userPassword,saltRounds,function (err,hash) {
                            var sql = "insert into registry(first_name,last_name,username,password)values('"
                                +  req.body.firstName + "','"+ req.body.lastName +
                                "','" + req.body.userName + "','"+ hash + "')";

                            var sql2 = "SELECT LAST_INSERT_ID() as user_id";

                            con.query(sql, function (err, rows, fields) {
                                if (err) {
                                    console.error('SQL error: ', err);
                                    var error = [{"location":"body","param":"userName","msg":"Username already used, please pick another","value":""}];
                                    resp.render('index', {
                                        title: 'Registration Error',
                                        errors: error,
                                    });
                                }else {

                                    var resEmp = [];
                                    for (var newsIndex in rows) {
                                        var newsObj = rows[newsIndex];
                                        resEmp.push(newsObj);
                                    }

                                    con.query(sql2, function (err, rows, fields) {
                                        if (err) {
                                            console.error('SQL error: ', err);
                                            return next(err);
                                        }
                                        var resEmp = [];
                                        for (var newsIndex in rows) {
                                            var newsObj = rows[newsIndex];
                                            resEmp.push(newsObj);
                                        }
                                        const user_id = rows[0];
                                        console.log(rows[0]);
                                        req.login(user_id,function (err) {
                                            resp.redirect('/grid');

                                        });

                                    });

                                }


                            });

                        });

                    }
                }catch (ex){
                    console.error("Internal error:" + ex);

                }


            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return (ex);
    }
});
*/

passport.serializeUser(function (user_id,done) {
    done(null, user_id)
});

passport.deserializeUser(function (user_id ,done) {
    // User.findById(id,function (err,user) {/*mongodb*/
    done(null,user_id);
    // });
});

module.exports = router;