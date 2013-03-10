/*!
 * Configuration parameters
 * Copyright(c) 2013 Vinod Gopalan <kgvinod@gmail.com>
 * MIT Licensed
 */
 
var config = {

    // Server's name
    server_name : 'Ubuntu/12.04 UPnP/1.1 node-media-server/0.3',
    
    // Interface on which UPnP messages are sent and received
    network_interface_name : 'wlan0',

    // node=media-server UI is served on this port  
    web_server_port : 8084,
    
    // uuid  of root device
    root_uuid : '1eecac01-b4f5-4da3-a6f4-4696034c9ea8',

    // Device advertisement periodicity (seconds)
    device_notification_interval : 3
}

/**
  * Exports.
  */
module.exports  = exports = config;
    
