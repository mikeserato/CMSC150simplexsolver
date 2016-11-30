var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var server = app.listen(5000, "localhost",
    function(){
        console.log('Example app is listening at localhost:%s', server.address().port);
    });

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('method-override')()); //to use put and delete HTTP requests
app.use(express.static(__dirname + '/public'));
