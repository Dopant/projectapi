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
        resp.sendFile(path.join(__dirname + '/stores/add/addConsumable.html'))
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
        resp.sendFile(path.join(__dirname + '/stores/add/addTyre.html'))
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
        resp.sendFile(path.join(__dirname + '/stores/add/addBattery.html'))
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
        resp.sendFile(path.join(__dirname + '/stores/add/addLubricant.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesAddStationery', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/add/addStationery.html'))
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
        resp.sendFile(path.join(__dirname + '/stores/update/updatePart.html'))
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
        resp.sendFile(path.join(__dirname + '/stores/update/updateConsumable.html'))
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
        resp.sendFile(path.join(__dirname + '/stores/update/updateTyre.html'))
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
        resp.sendFile(path.join(__dirname + '/stores/update/updateBattery.html'))
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
        resp.sendFile(path.join(__dirname + '/stores/update/updateLubricant.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesUpdateStationery', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/update/updateStationery.html'))
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
        resp.sendFile(path.join(__dirname + '/stores/delete/deletePart.html'))
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
        resp.sendFile(path.join(__dirname + '/stores/delete/deleteConsumable.html'))
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
        resp.sendFile(path.join(__dirname + '/stores/delete/deleteTyre.html'))
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
        resp.sendFile(path.join(__dirname + '/stores/delete/deleteBattery.html'))
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
        resp.sendFile(path.join(__dirname + '/stores/delete/deleteLubricant.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesDeleteStationery', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/delete/deleteStationery.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/checkStockAvailable', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/checkStockAvailable.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesDischarge', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/discharge.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesIntake', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/intake.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});


router.get('/displayStoresInventory', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/displayInventory.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/storesReport', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/report/storesReport.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/intakeReport', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/report/intakeReport.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/dischargeReport', function(req, resp, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        resp.sendFile(path.join(__dirname + '/stores/report/dischargeReport.html'))
    }
    else {
        resp.render('login', { title: 'Please Login' });
    }
    // return next();
});

router.get('/checkApi' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = "select part as name, parts_no as no ,cardex_no as cardex, price as price, quantity_in_stock as quantity from partlist_stores" +
                    "  Union select consumable as name, consumables_no as no,cardex_no as cardex, price as price, quantity_in_stock as quantity from consumablelist_stores " +
                    " Union select tyre as name, tyres_no as no ,cardex_no as cardex, price as price , quantity_in_stock as quantity from tyrelist_stores " +
                    " Union select battery as name, batteries_no as no,cardex_no as cardex, price as price , quantity_in_stock as quantity from batterylist_stores" +
                    " Union select stationery as name, stationery_no as no,cardex_no as cardex, price as price , quantity_in_stock as quantity from stationerylist_stores" +
                    " Union select lubricant as name, lubricants_no as no,cardex_no as cardex, price as price , quantity_in_stock as quantity from lubricantlist_stores order by name";
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


router.get('/partslist_stores' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = "select * from partlist_stores";
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

router.post('/partsStoresDelete',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.part);
                var sql = "delete from partlist_stores where part = '"+req.body.part+ "'";
                con.query(sql, function (err, rows,fields) {
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




router.post('/consumablesStoresDelete',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.part);
                var sql = "delete from consumablelist_stores where consumable = '"+req.body.consumable+ "'";
                con.query(sql, function (err, rows,fields) {
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




router.post('/tyresStoresDelete',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.tyre);
                var sql = "delete from tyrelist_stores where tyre = '"+req.body.tyre+ "'";
                con.query(sql, function (err, rows,fields) {
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

router.post('/batteriesStoresDelete',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.battery);
                var sql = "delete from batterylist_stores where battery = '"+req.body.battery+ "'";
                con.query(sql, function (err, rows,fields) {
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

router.post('/lubricantsStoresDelete',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.lubricant);
                var sql = "delete from lubricantlist_stores where lubricant = '"+req.body.lubricant+ "'";
                con.query(sql, function (err, rows,fields) {
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


router.post('/stationeriesStoresDelete',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.stationery);
                var sql = "delete from stationerylist_stores where stationery = '"+req.body.stationery+"'";
                con.query(sql, function (err, rows,fields) {
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


router.post('/storesPartUpdate',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.part);
                console.log(req.body.cost);
                var sql = "update partlist_stores set price = " + req.body.cost + " where part = '" + req.body.part + "'";
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

router.post('/storesConsumableUpdate',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.consumable);
                console.log(req.body.cost);
                var sql = "update consumablelist_stores set price = " + req.body.cost + " where consumable = '" + req.body.consumable + "'";
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

router.post('/storesTyreUpdate',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.tyre);
                console.log(req.body.cost);
                var sql = "update tyrelist_stores set price = " + req.body.cost + " where tyre = '" + req.body.tyre + "'";
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

router.post('/storesBatteryUpdate',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.battery);
                console.log(req.body.cost);
                var sql = "update batterylist_stores set price = " + req.body.cost + " where battery = '" + req.body.battery + "'";
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

router.post('/storesLubricantUpdate',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.lubricant);
                console.log(req.body.cost);
                var sql = "update lubricantlist_stores set price = " + req.body.cost + " where lubricant = '" + req.body.lubricant + "'";
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

router.post('/storesStationeryUpdate',function(req, resp, next){
    try {
        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                console.log(req.body.stationery);
                console.log(req.body.cost);
                var sql = "update stationerylist_stores set price = " + req.body.cost + " where stationery = '" + req.body.stationery + "'";
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


router.get('/storesIntakeReport' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql =  "select * from intake_stores where ( (item_type = '"+req.query.item_type+"') && (date BETWEEN'"
                    +req.query.from+"' AND '"+req.query.to+"')) order by date desc ";
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




router.get('/storesDischargeReport' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql =  "select * from discharge_stores where ( (item_type = '"+req.query.item_type+"') && (date BETWEEN'"
                    +req.query.from+"' AND '"+req.query.to+"')) order by date desc ";
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


router.get('/consumableslist_stores' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = "select * from consumablelist_stores";
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

router.get('/tyreslist_stores' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = "select * from tyrelist_stores";
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

router.get('/batterieslist_stores' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = "select * from batterylist_stores";
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

router.get('/lubricantslist_stores' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = "select * from lubricantlist_stores";
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

router.get('/stationerieslist_stores' , function (req, resp, next) {
    try {
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var sql = "select * from stationerylist_stores";
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

router.post('/storesPartAdd',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var myVal = {};
                // console.log(req.body);
                for (var nam in req.body) {
                    if (req.body.hasOwnProperty(nam)) {
                        if(!(req.body[nam] === '') ){
                            console.log(nam+':'+req.body[nam]);
                            myVal[nam] = req.body[nam];
                        }
                    }
                }
                var sql ="insert into partlist_stores set ?";

                con.query(sql,myVal, function (err, rows, fields) {
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


router.post('/storesConsumableAdd',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var myVal = {};
                // console.log(req.body);
                for (var nam in req.body) {
                    if (req.body.hasOwnProperty(nam)) {
                        if(!(req.body[nam] === '') ){
                            console.log(nam+':'+req.body[nam]);
                            myVal[nam] = req.body[nam];
                        }
                    }
                }
                var sql ="insert into consumablelist_stores set ?";

                con.query(sql,myVal, function (err, rows, fields) {
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

router.post('/storesTyreAdd',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var myVal = {};
                // console.log(req.body);
                for (var nam in req.body) {
                    if (req.body.hasOwnProperty(nam)) {
                        if(!(req.body[nam] === '') ){
                            console.log(nam+':'+req.body[nam]);
                            myVal[nam] = req.body[nam];
                        }
                    }
                }
                var sql ="insert into tyrelist_stores set ?";

                con.query(sql,myVal, function (err, rows, fields) {
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

router.post('/storesBatteryAdd',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var myVal = {};
                // console.log(req.body);
                for (var nam in req.body) {
                    if (req.body.hasOwnProperty(nam)) {
                        if(!(req.body[nam] === '') ){
                            console.log(nam+':'+req.body[nam]);
                            myVal[nam] = req.body[nam];
                        }
                    }
                }
                var sql ="insert into batterylist_stores set ?";

                con.query(sql,myVal, function (err, rows, fields) {
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

router.post('/storesLubricantAdd',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var myVal = {};
                // console.log(req.body);
                for (var nam in req.body) {
                    if (req.body.hasOwnProperty(nam)) {
                        if(!(req.body[nam] === '') ){
                            console.log(nam+':'+req.body[nam]);
                            myVal[nam] = req.body[nam];
                        }
                    }
                }
                var sql ="insert into lubricantlist_stores set ?";

                con.query(sql,myVal, function (err, rows, fields) {
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

router.post('/storesStationeryAdd',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var myVal = {};
                // console.log(req.body);
                for (var nam in req.body) {
                    if (req.body.hasOwnProperty(nam)) {
                        if(!(req.body[nam] === '') ){
                            console.log(nam+':'+req.body[nam]);
                            myVal[nam] = req.body[nam];
                        }
                    }
                }
                var sql ="insert into stationerylist_stores set ?";

                con.query(sql,myVal, function (err, rows, fields) {
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


router.post('/storesDischargeRecord',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            let newStock =0;
            let oldStock =0;
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var myVal = {};
                // console.log(req.body);
                for (var nam in req.body) {
                    if (req.body.hasOwnProperty(nam)) {
                        if(!(req.body[nam] === '') ){
                            console.log(nam+':'+req.body[nam]);
                            myVal[nam] = req.body[nam];
                        }
                    }
                }
                var sql ="insert into discharge_stores set ?";
                var sql1 = "select * from "+req.body.item_type+"list_stores where "+req.body.item_type+"='"+req.body.item+"'";



                con.query(sql,myVal, function (err, row, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }

                    var resEmp = [];
                    for (var newsIndex in row) {
                        var newsObj = row[newsIndex];
                        resEmp.push(newsObj);
                    }

                    con.query(sql1,myVal, function (err, rows, fields) {
                        if (err) {
                            console.error('SQL error: ', err);
                            return next(err);
                        }

                        var resEmp = [];
                        for (var newsIndex in rows) {
                            var newsObj = rows[newsIndex];
                            resEmp.push(newsObj);
                        }
                        oldStock = rows[0].quantity_in_stock;
                        newStock = +oldStock - +req.body.quantity;
                        console.log(newStock);

                        var sql2 = "update "+req.body.item_type+"list_stores set quantity_in_stock ="+
                            newStock+" where "+req.body.item_type+"='"+req.body.item+"'";

                        con.query(sql2, function (err, ro, fields) {
                            if (err) {
                                console.error('SQL error: ', err);
                                return next(err);
                            }

                            var resEmp = [];
                            for (var newsIndex in ro) {
                                var newsObj = ro[newsIndex];
                                resEmp.push(newsObj);
                            }
                            resp.redirect('/');
                        });
                    });
                });

            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return (ex);
    }
});


router.post('/storesIntakeRecord',function(req, resp, next){
    try {

        req.getConnection(function (err, con) {
            let newStock =0;
            let oldStock =0;
            if (err) {
                console.error('SQL Connection error: ', err);
                return (err);
            } else {
                var myVal = {};
                // console.log(req.body);
                for (var nam in req.body) {
                    if (req.body.hasOwnProperty(nam)) {
                        if(!(req.body[nam] === '') ){
                            console.log(nam+':'+req.body[nam]);
                            myVal[nam] = req.body[nam];
                        }
                    }
                }
                var sql ="insert into intake_stores set ?";
                var sql1 = "select * from "+req.body.item_type+"list_stores where "+req.body.item_type+"='"+req.body.item+"'";



                con.query(sql,myVal, function (err, row, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }

                    var resEmp = [];
                    for (var newsIndex in row) {
                        var newsObj = row[newsIndex];
                        resEmp.push(newsObj);
                    }

                    con.query(sql1,myVal, function (err, rows, fields) {
                        if (err) {
                            console.error('SQL error: ', err);
                            return next(err);
                        }

                        var resEmp = [];
                        for (var newsIndex in rows) {
                            var newsObj = rows[newsIndex];
                            resEmp.push(newsObj);
                        }
                        oldStock = rows[0].quantity_in_stock;
                        newStock = +oldStock + +req.body.quantity;
                        console.log(newStock);

                        var sql2 = "update "+req.body.item_type+"list_stores set quantity_in_stock ="+
                            newStock+" where "+req.body.item_type+"='"+req.body.item+"'";

                        con.query(sql2, function (err, ro, fields) {
                            if (err) {
                                console.error('SQL error: ', err);
                                return next(err);
                            }

                            var resEmp = [];
                            for (var newsIndex in ro) {
                                var newsObj = ro[newsIndex];
                                resEmp.push(newsObj);
                            }
                            resp.redirect('/');
                        });
                    });
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