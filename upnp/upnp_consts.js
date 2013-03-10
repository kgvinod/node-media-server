/*!
 * UPnP constants
 * Based on UPnP device architecture 1.1 
 * Copyright(c) 2013 Vinod Gopalan <kgvinod@gmail.com>
 * MIT Licensed
 */
 
var upnp_consts = {

    // Each SSDP message MUST have exactly one start-line, which should be 
    // one among the 3 given below.
    // SSDP start line 1
    SSDP_START_LINE_NOTIFY : 'NOTIFY * HTTP/1.1',

    // SSDP start line 2
    SSDP_START_LINE_MSEARCH : 'M-SEARCH * HTTP/1.1',
    
    // SSDP start line 3
    SSDP_START_LINE_OK_RESPONSE : 'HTTP/1.1 200 OK',
    
    // SSDP advertisement/discovery multicast port
    SSDP_DISCOVERY_MCAST_ADDRESS : '239.255.255.250',
    
    // SSDP advertisement/discovery multicast port
    SSDP_DISCOVERY_MCAST_PORT : '1900'
    

}

/**
  * Exports.
  */
module.exports  = exports = upnp_consts;
    
