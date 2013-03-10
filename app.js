/*!
 * Main app
 * Copyright(c) 2013 Vinod Gopalan <kgvinod@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
var express = require('express')
  , deviceNotifier = require('./discovery/device_notifier')
  , config = require('./config/config')
  , xmlBodyParser = require('./utils/xml_body_parser')
  , connectionManagerService = require('./services/connection_manager')
  , contentDirectoryService = require('./services/content_directory')
  , description = require('./description/description');  


var app = express();

app.listen(config.web_server_port);
 
app.configure( function() {
    console.log('Node listening on: ' + '/');
    app.use(xmlBodyParser);
});


/**
 * Configure routes - device and service description
 */
app.get('/upnp/description.xml', description.getDeviceDescription);
app.get('/upnp/connectionmanagerSCPD.xml', description.connectionManagerServiceDescription);
app.get('/upnp/contentdirectorySCPD.xml', description.contentDirectoryServiceDescription);    

/**
 * Configure routes - Service control (actions)
 */

app.post('/upnp/control/ConnectionManager', connectionManagerService.invokeAction);
app.post('/upnp/control/ContentDirectory', contentDirectoryService.invokeAction);


/**
 * Start device advertisements
 */
console.log('Starting devide advertisements ..');
deviceNotifier.startAdvertisements(config.network_interface_name, config.device_notification_interval);

