var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var app = require('../app');
var url = require ('url');
var path = require('path');

var expressValidator = require('express-validator');
var passport = require('passport');

var session = require('express-session');
/* GET home page. */
router.get('/', function(req, res, next) {

    console.log(req.user);
    console.log(req.isAuthenticated());

    res.sendFile(path.join(__dirname + '/index.html'))
});

router.get('/engineering', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/homepage.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
       // return next();
});

router.get('/register', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());

        resp.render('index', { title: 'Please Register' });

    // return next();
});


/* routes */
router.get('/login', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    resp.render('login', { title: 'Please Login' });

});
router.get('/Add', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());

    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/Add.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});

router.get('/Add1', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/Add1.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/AddBattery', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/AddBattery.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/AddConsumer', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/AddConsumer.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/AddLubricant', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/AddLubricant.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/AddPart', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/AddPart.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/AddType', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/AddType.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/AddTyre', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/AddTyre.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/BusReport', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/BusReport.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});

router.get('/grid', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/grid.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/gridview', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/grid.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/Maintenance', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/Maintenance.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
});
router.get('/MaintenanceForm', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/MaintenanceForm.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/MaintenanceReport', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/MaintenanceReport.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/Report', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/Report.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
});
router.get('/Setup', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/Setup.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/StationReport', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/StationReport.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});

router.get('/BusesTotal', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/BusesTotal.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});

router.get('/StationsTotal', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/StationsTotal.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});

router.get('/test', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/test.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/addNew', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/addNew.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
});
router.get('/deleteNew', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/deleteNew.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
});
router.get('/updateNew', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/updateNew.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/deletePart', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/delete/deletePart.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/deleteConsumable', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/delete/deleteConsumable.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/deleteTyre', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/delete/deleteTyre.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/deleteBattery', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/delete/deleteBattery.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/deleteLubricant', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/delete/deleteLubricant.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/deleteBus', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/delete/deleteBus.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});
router.get('/deleteType', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/delete/deleteType.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }

});

router.get('/deleteStation', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/delete/deleteStation.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
});


router.get('/updatePart', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/update/updatePart.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
});

router.get('/updateConsumable', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/update/updateConsumable.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
});

router.get('/updateTyre', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/update/updateTyre.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
});

router.get('/updateBattery', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/update/updateBattery.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
});

router.get('/updateLubricant.js', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/update/updateLubricant.js.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
});


//select * for viewing
router.get('/partsview',function(req, resp, next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from parts order by date desc', function(err, rows, fields) {
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

router.get('/consumablesview' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from consumables order by date desc', function(err, rows, fields) {
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

router.get('/tyresview', function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from tyres order by date desc', function(err, rows, fields) {
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

router.get('/batteriesview' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from batteries order by date desc', function(err, rows, fields) {
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

router.get('/lubricantsview' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from lubricants order by date desc', function(err, rows, fields) {
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

router.get('/maintenanceview' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from maintenance order by date desc', function(err, rows, fields) {
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

router.get('/maintenanceRecord',function(req, resp, next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query("select id,registry_no,maintenance_type,station,current_milleage,extra_contract,date_format(date,'%Y-%m-%d') as date" +
                    " from maintenance where date BETWEEN '"+req.query.from+"'AND'"+req.query.to+"'order by date desc", function(err, rows, fields) {
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

router.get('/parts',function(req, resp,next){
    try {
        req.getConnection(function(err, conn ) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return(err);
            } else {
                conn.query("select id,registry_no,station,parts,quantity,total_cost,date_format(date,'%Y-%m-%d') as date" +
                    " from parts where date BETWEEN '"+req.query.from+"'AND'"+req.query.to+"'order by date desc", function(err, rows, fields) {
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

router.get('/consumables',function(req, resp ,next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query("select  id,registry_no,station,consumables,quantity,total_cost,date_format(date,'%Y-%m-%d') as date" +
                    " from consumables where date BETWEEN '"+req.query.from+"'AND'"+req.query.to+"'order by date desc", function(err, rows, fields) {
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

router.get('/batteries',function(req, resp, next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query("select  id,registry_no,station,batteries,quantity,total_cost,date_format(date,'%Y-%m-%d') as date" +
                    " from batteries where date BETWEEN '"+req.query.from+"'AND'"+req.query.to+"'order by date desc", function(err, rows, fields) {
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

router.get('/tyres',function(req, resp, next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query("select  id,registry_no,station,tyres,quantity,total_cost,date_format(date,'%Y-%m-%d') as date" +
                    " from tyres where date BETWEEN '"+req.query.from+"'AND'"+req.query.to+"'order by date desc", function(err, rows, fields) {
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

router.get('/lubricants',function(req, resp, next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query("select  id,registry_no,station,lubricants,quantity,total_cost,date_format(date,'%Y-%m-%d') as date" +
                    " from lubricants where date BETWEEN '"+req.query.from+"'AND'"+req.query.to+"'order by date desc", function(err, rows, fields) {
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


router.get('/buslist',function(req, resp, next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from buslist ', function(err, rows, fields) {
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

router.get('/stationlist',function(req, resp, next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from stationlist order by station', function(err, rows, fields) {
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

router.get('/partslist',function(req, resp, next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from partslist order by parts', function(err, rows, fields) {
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


router.get('/consumableslist',function(req, resp, next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from consumableslist order by consumables', function(err, rows, fields) {
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


router.get('/tyreslist',function(req, resp, next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from tyreslist order by tyres', function(err, rows, fields) {
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


router.get('/batterieslist',function(req, resp, next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from batterieslist order by batteries', function(err, rows, fields) {
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


router.get('/lubricantslist',function(req, resp, next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from lubricantslist order by lubricants', function(err, rows, fields) {
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


router.get('/maintenance_typelist',function(req, resp, next){
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                conn.query('select * from  maintenance_typelist order by maintenance_type', function(err, rows, fields) {
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

router.post('/partsadd',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = "insert into partslist ( parts,price) values ('" + req.body.part + "'," + req.body.price + ")";
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

router.post('/partsdelete',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.part);
                var sql = "delete from partslist where parts = '" + req.body.part + "'";
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

router.post('/partupdate',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.part);
                console.log(req.body.cost);
                var sql = "update partslist set price = " + req.body.cost + " where parts = '" + req.body.part + "'";
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

router.post('/tyresadd',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = " insert into tyreslist( tyres,price) values ('" + req.body.tyre + "'," + req.body.price + ")" ;
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

router.post('/tyresdelete',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.part);
                var sql = "delete from tyreslist where tyres = '" + req.body.tyre + "'";
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

router.post('/tyreupdate',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.tyre);
                console.log(req.body.cost);
                var sql = "update tyreslist set price = " + req.body.cost + " where tyres = '" + req.body.tyre + "'";
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


router.post('/lubricantsadd',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql =  " insert into lubricantslist ( lubricants,price) values ('" + req.body.lubricant + "',"
                    + req.body.price + ")";
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

router.post('/lubricantsdelete',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.battery);
                var sql = "delete from lubricantslist where lubricants = '" + req.body.lubricant + "'";
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

router.post('/lubricantupdate',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.lubricant);
                console.log(req.body.cost);
                var sql = "update lubricantslist set price = " + req.body.cost + " where lubricants = '" + req.body.lubricant + "'";
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

router.post('/batteriesadd',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = " insert into batterieslist ( batteries,price) values ('" + req.body.battery + "',"
                    + req.body.price + ")";
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

router.post('/batteriesdelete',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.battery);
                var sql = "delete from batterieslist where batteries = '" + req.body.battery + "'";
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

router.post('/batteryupdate',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.battery);
                console.log(req.body.cost);
                var sql = "update batterieslist set price = " + req.body.cost + " where batteries = '" + req.body.battery + "'";
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

router.post('/stationadd',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = " insert into stationlist( station ) values('"
                    + req.body.station + "')" ;
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

router.post('/stationdelete',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.station);
                var sql = "delete from stationlist where station = '" + req.body.station + "'";
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


router.post('/consumablesadd',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = " insert into consumableslist ( consumables, price) values('"
                    + req.body.consumable + "'," + req.body.price + ")" ;
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

router.post('/consumablesdelete',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.consumable);
                var sql = "delete from consumableslist where consumables = '" + req.body.consumable + "'";
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

router.post('/consumableupdate',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.consumable);
                console.log(req.body.cost);
                var sql = "update consumableslist set price = " + req.body.cost + " where consumables = '" + req.body.consumable + "'";
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

/*partsDelete*/

router.post('/busadd',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = " insert into buslist( registry_no,category,type ) values('" +
                    req.body.registry_no + "','" + req.body.category + "','" + req.body.type + "')";
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

router.post('/busdelete',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.registry_no);
                var sql = "delete from buslist where registry_no = '" + req.body.registry_no + "'";
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

router.post('/maintenance_typeadd',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = " insert into maintenance_typelist(maintenance_type) values (' "
                    + req.body.maintenance_type + "')";
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


router.post('/typedelete',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.maintenance_type);
                var sql = "delete from maintenance_typelist where maintenance_type = '" + req.body.maintenance_type + "'";
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

router.post('/maintenance',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return  (err);
            } else {
                var sql = " insert into maintenance( registry_no, maintenance_type,station, current_milleage," +
                    "extra_contract,date ) values ('" + req.body.bus_dropdown + "','" +
                    req.body.type_dropdown + "','"  + req.body.station_dropdown + "','" + req.body.current_milleage +
                    "','" + req.body.extra_contract +  "','" + req.body.date +  "')";
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

router.post('/parts',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = " insert into parts(registry_no,station,parts,quantity,total_cost, date)values('"
                    + req.body.partbus+ "','" + req.body.partstation + "','" + req.body.partdropdown + "'," + req.body.part_quantity +
                    "," + req.body.part_total + ",'" + req.body.partDate + "')";
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

router.post('/consumables',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return  (err);
            } else {
                var sql = "insert into consumables(registry_no,station,consumables,quantity,total_cost, date)values('"
                    +  req.body.consumablebus + "','" + req.body.consumablestation + "','" + req.body.consumabledropdown + "'," + req.body.consumable_quantity+
                    "," + req.body.consumable_total + ",'" + req.body.consumableDate +  "')";
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

router.post('/tyres',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = "insert into tyres(registry_no,station,tyres,quantity,total_cost, date)values('"
                    +  req.body.tyrebus + "','" + req.body.tyrestation + "','" + req.body.tyredropdown + "'," + req.body.tyre_quantity+
                    "," + req.body.tyre_total + ",'" + req.body.tyreDate +  "')";
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

router.post('/batteries',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = "insert into batteries(registry_no,station,batteries,quantity,total_cost, date)values('"
                    +  req.body.batterybus + "','"+ req.body.batterystation + "','" + req.body.batterydropdown + "'," + req.body.battery_quantity+
                    "," + req.body.battery_total + ",'" +  req.body.batteryDate +  "')";
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

router.post('/lubricants',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = "insert into lubricants(registry_no,station,lubricants,quantity,total_cost, date)values('"
                    +  req.body.lubricantbus + "','"+ req.body.lubricantstation + "','" + req.body.lubricantdropdown + "'," + req.body.lubricant_quantity+
                    "," + req.body.lubricant_total + ",'"+ req.body.lubricantDate + "')";
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



router.get('/logout',function(req, resp, next){
    try {
        req.logout();
        req.session.destroy();
        resp.render('login', { title: 'Please Login' });
        console.log('Logging out...')

    } catch (ex) {
        console.error("Internal error:" + ex);
        return (ex);
    }
});




router.post('/log_in',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = "select password from registry where username = '" + req.body.user_name +"'" ;
                console.log(req.body.user_name);
                con.query(sql, function (err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);

                    }
                    if (rows.length == 0){
                        var error = [{"location":"body","param":"userName","msg":"No user found","value":""}];
                        resp.render('login', {
                            title: 'Please Login',
                            errors: error,
                        });
                    }else{

                        const hash = rows[0].password;
                        console.log(hash);
                        var pass = req.body.password;
                        console.log(pass);

                            if (hash === pass ){
                                const user_id = rows[0];
                                console.log(rows[0]);
                                req.login(user_id,function (err) {
                                    resp.redirect('/grid');

                                });
                            }
                            else {
                                console.log('false');
                                var error = [{"location":"body","param":"userName","msg":"Incorrect Username or password","value":""}];
                                resp.render('login', {
                                    title: 'Please Login',
                                    errors: error,
                                });
                            }

                    }
                });

            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return (ex);
    }
});




router.post('/registry',function(req, resp, next){
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
                            var sql = "insert into registry(first_name,last_name,username,password)values('"
                                +  req.body.firstName + "','"+ req.body.lastName +
                                "','" + req.body.userName + "','"+ userPassword + "')";

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
function authenticationMiddleware() {
    return(req,resp,next) => {
        console.log(`
        req.session.passport.user: $(JSON.
            stringify(req.session.passport)}`);
        if (req.isAuthenticated())
            return next();

    }

}
