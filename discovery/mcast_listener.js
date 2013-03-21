/*!
 * Multicast listener
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
  * Multicast listener constructor.
  *
  * @param {String} iface_name
  * @param {Number} interval
  * @api public
  * @return {Function} Constructor for DeviceNotifier type.
  */

function MultiCastListener () {

	this.client = undefined;
	this.upnpSearchMulticastAddress = '239.255.255.250';
	this.upnpSearchMulticastPort = '1900';
}



MultiCastListener.prototype.startListening = function (iface_name) {	

	this.ipAddr = utils.getNetworkIP(iface_name);

	if (this.ipAddr === '0.0.0.0')
	{
		console.log ("No valid interfaces to run media server. Abort notifications");
		return;
	}

	this.client = dgram.createSocket("udp4"); 

	var self = this;

	this.client.on('listening', function () {
		console.log('UPnP client listening on ' + self.ipAddr + ":" + self.upnpSearchMulticastPort);
		self.client.setBroadcast(true)
		self.client.setMulticastTTL(128); 
		self.client.addMembership(self.upnpSearchMulticastAddress);
	});

	this.client.on('message', function (message, remote) { 
		console.log('UPnP message received from : ' + remote.address + ':' + remote.port);
		console.log('Message : ' + message);
	});

	this.client.bind(this.upnpSearchMulticastPort);
	
}



MultiCastListener.prototype.stopListening = function (interval) {


}


/**
  * Exports.
  * Return the singleton instance
  */

module.exports = exports = new MultiCastListener();

