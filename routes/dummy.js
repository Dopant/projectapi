/*
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

 */