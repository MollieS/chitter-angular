var express = require('express')
var app = express()
var path = require('path')
var ejs = require('ejs')

app.use(express.static(__dirname + '/public'))
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/js'));
app.set('port', 8000);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000)
