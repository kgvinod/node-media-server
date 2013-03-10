/*!
 * Device Notifier
 * Copyright(c) 2013 Vinod Gopalan <kgvinod@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
var utils = require('../utils/utils')
  , config = require('../config/config')
  , dgram = require('dgram')
  , upnp_consts = require('../upnp/upnp_consts');


/**
  * Device notifier constructor.
  *
  * @param {String} iface_name
  * @param {Number} interval
  * @api public
  * @return {Function} Constructor for DeviceNotifier type.
  */

function DeviceNotifier () {

	this.server = undefined;	
	this.upnpNotifyMulticastAddress = '239.255.255.250';
	this.upnpNotifyMulticastPort = '1900';
}



DeviceNotifier.prototype.startAdvertisements = function (iface_name, interval) {	

	this.ipAddr = utils.getNetworkIP(iface_name);
    this.interval = interval;

	if (this.ipAddr === '0.0.0.0')
	{
		console.log ("No valid interfaces to run media server. Abort notifications");
		return;
	}

	this.server = dgram.createSocket("udp4"); 
	this.server.bind();
	this.server.setBroadcast(true);
	this.server.setMulticastTTL(128);
	this.server.addMembership(this.upnpNotifyMulticastAddress); 	
	
	
	this.notifyString =	upnp_consts.SSDP_START_LINE_NOTIFY + '\r\n' +
		'HOST: ' + upnp_consts.SSDP_DISCOVERY_MCAST_ADDRESS + ':' + 
            upnp_consts.SSDP_DISCOVERY_MCAST_PORT + '\r\n' +
		'CACHE-CONTROL: max-age = 100\r\n' +
		'LOCATION: http://' + this.ipAddr + ':' + config.web_server_port + '/upnp/description.xml\r\n' +
		'NT: upnp:rootdevice\r\n' +
		'NTS: ssdp:alive\r\n' +
		'SERVER: ' + config.server_name + '\r\n' +
		'USN: uuid:' + config.root_uuid + '::upnp:rootdevice\r\n\r\n';
	
	var self = this;

	var multicastNotify = function () {
		var message = new Buffer(self.notifyString);
		self.server.send(message, 0, message.length, self.upnpNotifyMulticastPort, self.upnpNotifyMulticastAddress);
		//console.log("Sent device NOTIFY");
		//console.log("Sent :" + message);
		//server.close();
	}
	
	setInterval(multicastNotify, this.interval*1000);
}



DeviceNotifier.prototype.stopAdvertisements = function (interval) {


}


/**
  * Exports.
  * Return the singleton instance
  */

module.exports = exports = new DeviceNotifier();

