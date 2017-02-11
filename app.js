var express = require('express');
var app = express();
var path = require('path');
var appToken = '1712033829059939|jpXedFRa9IXBjiTQlFXSVjD3Fm0';

var request = require('request');
var htmlencode = require('htmlencode');

app.use(express.static('build'));
app.use(express.static('view'));
app.use(express.static('icons'));

app.get('/', function(req, res) {
    res.sendFile('index.html')
});

app.get('/APIRequest', function(req, res) {
    console.log(req.query.type);
    if (req.query.type == 'facebook') {
        request('https://graph.facebook.com/search?q=' + htmlencode.htmlEncode(req.query.name) + '&type=place&center=' +
            req.query.lat + ',' + req.query.lng + '&distance=5000&access_token=' + appToken,
            function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    res.send(JSON.parse(body).data[0]);
                }
            });
    } else {
        res.send({
            error: req.query.type + 'is not implemented'
        });
    }
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
