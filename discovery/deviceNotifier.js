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
  , dgram = require('dgram');


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
	
	
	this.notifyString =	"NOTIFY * HTTP/1.1\r\n" +
		"HOST: 239.255.255.250:1900\r\n" +
		"CACHE-CONTROL: max-age = 100\r\n" +
		"LOCATION: http://" + this.ipAddr + ":" + config.web_server_port + "/upnp/description.xml\r\n" +
		"NT: upnp:rootdevice\r\n" +
		"NTS: ssdp:alive\r\n" +
		"SERVER: Ubuntu/12.04 UPnP/1.0 node-media-server/0.3\r\n" +
		"USN: uuid:1eecac01-b4f5-4da3-a6f4-4696034c9ea8::upnp:rootdevice\r\n\r\n";
	
	var self = this;

	var multicastNotify = function () {
		var message = new Buffer(self.notifyString);
		self.server.send(message, 0, message.length, self.upnpNotifyMulticastPort, self.upnpNotifyMulticastAddress);
		//console.log("Sent :" + message);
		//server.close();
	}
	
	setInterval(multicastNotify, this.interval);
}



DeviceNotifier.prototype.stopAdvertisements = function (interval) {


}


/**
  * Exports.
  * Return the singleton instance
  */

module.exports = exports = new DeviceNotifier();

