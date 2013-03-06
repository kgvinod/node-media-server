var express = require('express');
var app = express();

//var utils = require('./utils/utils');
//utils.getNetworkIP(require('./config/config').network_interface_name);

var deviceNotify = require('./discovery/deviceNotifier');
var deviceNotifier = new deviceNotify(require('./config/config').network_interface_name, 3000);
deviceNotifier.startAdvertisements();

app.listen(8080);
 
app.configure( function() {
    console.log('Node listening on: ' + '/');
});

app.get('/description.xml', function(req, res) {
	
	//var body = 'Hello World';
	//res.setHeader('Content-Type', 'text/plain');
	//res.setHeader('Content-Length', body.length);
	//res.end(body);

	res.sendfile('./description/xml/devicedescr.xml');
    console.log('Sent device description');
});
