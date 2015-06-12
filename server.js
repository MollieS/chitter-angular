var express = require('express')
var app = express()
var path = require('path')
var ejs = require('ejs')
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'))
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/js'));
app.set('port', 8000);
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    req.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/peeps', function(req, res) {
    message = res.json({message: 'This is a peep'});
});

app.post('/peeps', function(req, res) {
      message = req.body.test
    req.on('data', function(data) {
        console.log(message)
    });
    req.on('end', function() {
      console.log(message);
    });
    res.send(message)
});



app.listen(8000)
