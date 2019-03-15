var express = require('express');
var app = express();

app.get('/', function (req, res) {

    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'a@12345',
        server: '10.11.2.89',
        database: 'linebot'
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from lineuser', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            // res.send(recordset);
            const response = recordset;
            res.send(response.recordset[0].userid);
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});
