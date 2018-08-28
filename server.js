var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));



//set the port
app.set('port', 80);


// routes to serve the static HTML files
app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
});


// routes to serve the static HTML files
app.get('/contact', function (req, res) {
    res.sendfile('./contact.html');
});

// Note: route names need not match the file name
app.get('/careers', function (req, res) {
    res.sendfile('./careers.html');
});

// Listen for requests
var server = app.listen(app.get('port'), function () {
    console.log('The server is running on http://localhost:' + app.get('port'));
});