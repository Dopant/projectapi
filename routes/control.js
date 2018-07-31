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

router.get('/Tyre', function(req, resp, next) {
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

router.get('/controlTyreUpdate', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/control/tyresUpdate.html'))
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

router.get('/controlReport', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/control/Report/controlReport.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/controlSetup', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/control/controlSetup.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/AddControlTyre', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/control/addControlTyre.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/controlTyreReport', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/control/Report/controlTyreReport.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/controlRepairReport', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/control/Report/controlRepairReport.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});


router.get('/tyreslist_control',function(req, resp, next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from tyreslist_control order by brand', function(err, rows, fields) {
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



router.get('/controlOilReport', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/control/Report/controlOilReport.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/controlMonthlyReport', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/control/Report/controlMonthlyReport.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});


router.get('/tyreSearch' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql =  "select * from tyres_control where job_card ='"+req.query.jobCard+"'";
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

router.get('/controlOilReport1' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql =  "select * from date_of_oil_change where date BETWEEN'"
                    +req.query.from+"' AND '"+req.query.to+"' order by date desc ";
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

router.get('/controlMaintenanceReport1' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql =  "select * from repairs_and_maintenance where date BETWEEN'"
                    +req.query.from+"' AND '"+req.query.to+"' order by date desc ";
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


router.get('/controlParticularsView' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql =  "select * from particulars";
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


router.get('/controlMonthlyReport1' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql =  "select * from monthly_mileage where date BETWEEN'"
                    +req.query.from+"' AND '"+req.query.to+"' order by date desc ";
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


router.get('/controlTyreReport1' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql =  "select * from tyres_control where Fitted_on_Date BETWEEN'"
                    +req.query.from+"' AND '"+req.query.to+"' order by Fitted_on_Date desc ";
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



router.post('/particulars',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var data = {registry_no:req.body.busdropdown, engine_no:req.body.engine, chasis_no:req.body.chasis, make_and_year:req.body.make, gross_weight:req.body.permissible,
                net_weight:req.body.net, persons_allowed:req.body.person, amortised_life:req.body.amortised, rate_of_depreciation:req.body.rates, annual_licence:req.body.annual,
                invoice_no:req.body.indent, suppliers:req.body.suppliers, date_purchased: req.body.date_purchased, price_paid:req.body.price, cost_of_bodywork:req.body.cost,
                total_cost:req.body.total_cost, date_written_off:req.body.date_written, date_sold_or_dismantled:req.body.date_sold, amount_sold:req.body.amount_sold
                };
                var sql = "INSERT INTO particulars SET ?";
                con.query(sql, data, function (err, rows, fields) {
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

router.post('/controlTyreAdd',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = " insert into tyreslist_control( brand,price)values('" + req.body.tyre + "'," + req.body.price + ")" ;
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


router.post('/capacities',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = " insert into Capacities(registry_no,Engine,Gear_Box,Black_Axle,Radiator,Fuel_Tank)values('" + req.body.busdropdown +
                    "','" + req.body.engine_ + "','"  + req.body.gear + "','" + req.body.black +
                    "','"  + req.body.radiator +  "','" + req.body.fuel + "')";

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

router.post('/updateTyreRecord',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.mileageDiff);
                var sql = "update tyres_control set Taken_Off_Date ='" + req.body.date + "', Taken_Off_Mileage ='" +
                    req.body.mileage + "', total_mileage ='" + req.body.mileageDiff+ "' where job_card = '" + req.body.jobCard +"'";

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


router.post('/tyres_control',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = " insert into tyres_control(registry_no,job_card,brand,serial_no,fitted_on_date," +
                    "fitted_on_mileage,taken_off_date,taken_off_mileage,total_mileage,remarks)values('" + req.body.busdropdown  +
                    "','" + req.body.jobCard + "','"  + req.body.tyredropdown + "','" + req.body.serialNumber +
                    "','"  + req.body.onDate +  "','" +req.body.onMileage + "','" +req.body.offDate + "','" +
                      req.body.offMileage + "','" + req.body.totalMileage + "','" +req.body.remarks +  "')" ;

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


router.post('/repairs',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = " insert into repairs_and_maintenance(registry_no, Job_Number, Mileage, Material, Date, Labour, Nature_of_Repairs, Total) "+" values ('" +req.body.busdropdown+
                    "','" +req.body.jobNumber+ "','"  +req.body.mileage+ "','" + req.body.material+
                    "','"  +req.body.date+  "','" +req.body.labour+ "','" +req.body.nature+ "','" +req.body.total+  "')" ;

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

router.post('/oil',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = " insert into date_of_oil_change(registry_no, Engine, Mileage, Gear_Box, Back_Axle, Date, Steering,Remarks) "+" values ('" +req.body.busdropdown+
                    "','" +req.body.engine+ "','"  +req.body.mileage+ "','" + req.body.gearBox+
                    "','"  +req.body.backAxle+  "','" +req.body.date+ "','" +req.body.steering+ "','" +req.body.remarks+  "')" ;

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


router.post('/monthly',function(req, resp, next){
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

passport.serializeUser(function (user_id,done) {
    done(null, user_id)
});

passport.deserializeUser(function (user_id ,done) {
    // User.findById(id,function (err,user) {/*mongodb*/
    done(null,user_id);
    // });
});

module.exports = router;