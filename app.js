// Main app

var express = require('express')
  , deviceNotifier = require('./discovery/deviceNotifier')
  , config = require('./config/config');


var app = express();
//var utils = require('./utils/utils');
//utils.getNetworkIP(require('./config/config').network_interface_name);



deviceNotifier.startAdvertisements(config.network_interface_name, 3000);

app.listen(8080);


 
app.configure( function() {
    console.log('Node listening on: ' + '/');
    app.use(express.bodyParser());
});

app.get('/description.xml', function(req, res) {
	
	//var body = 'Hello World';
	//res.setHeader('Content-Type', 'text/plain');
	//res.setHeader('Content-Length', body.length);
	//res.end(body);

	res.sendfile('./description/xml/devicedescr.xml');
    console.log('Sent device description');
});

app.get('/connectionmanagerSCPD.xml', function(req, res) {
	
	//var body = 'Hello World';
	//res.setHeader('Content-Type', 'text/plain');
	//res.setHeader('Content-Length', body.length);
	//res.end(body);

	res.sendfile('./description/xml/connectionmanagerSCPD.xml');
    console.log('Sent service description');
});

app.get('/contentdirectorySCPD.xml', function(req, res) {
	
	//var body = 'Hello World';
	//res.setHeader('Content-Type', 'text/plain');
	//res.setHeader('Content-Length', body.length);
	//res.end(body);

	res.sendfile('./description/xml/contentdirectorySCPD.xml');
    console.log('Sent service description');
});

app.post('/upnp/control/ConnectionManager', function(req, res) {
	
	//var body = 'Hello World';
	//res.setHeader('Content-Type', 'text/plain');
	//res.setHeader('Content-Length', body.length);
	//res.end(body);
	
    console.log(req.get('SOAPACTION'));
    console.log(req.get('Content-Type'));
    console.log(req.get('User-Agent'));
    console.log(req.body);

	res.sendfile('./description/xml/contentdirectorySCPD.xml');
    console.log('Sent response to Connection Manager action');
});


