// Device advertisement

var DeviceNotifier = function()
{
	var self = this;

	this.upnpNotifyMulticastAddress = '239.255.255.250';
	this.upnpNotifyMulticastPort = '1900';
    
    var utils = require('../utils/utils');
    this.localIpAddress = utils.getNetworkIP(require('../config/config').network_interface_name);

	this.notifyString =	"NOTIFY * HTTP/1.1\r\n" +
		"HOST: 239.255.255.250:1900\r\n" +
		"CACHE-CONTROL: max-age = 100\r\n" +
		"LOCATION: http://" + this.localIpAddress + ":8080/description.xml\r\n" +
		"NT: upnp:rootdevice\r\n" +
		"NTS: ssdp:alive\r\n" +
		"SERVER: Ubuntu/12.04 UPnP/1.0 node-media-server/0.3\r\n" +
		"USN: uuid:1eecac01-b4f5-4da3-a6f4-4696034c9ea8::upnp:rootdevice\r\n\r\n";


	this.startAdvertisements = function (interval) {	

        if (this.localIpAddress === '0.0.0.0')
        {
            console.log ("No valid interfaces to run media server. Abort notifications");
            return;
        }

		var dgram = require('dgram'); 
		this.server = dgram.createSocket("udp4"); 
		this.server.bind();
		this.server.setBroadcast(true);
		this.server.setMulticastTTL(128);
		this.server.addMembership(this.upnpNotifyMulticastAddress); 

		setInterval(this.multicastNotify, interval);
	}

	this.stopAdvertisements = function (interval) {


	}


	this.multicastNotify = function () {
		var message = new Buffer(self.notifyString);
		self.server.send(message, 0, message.length, self.upnpNotifyMulticastPort, self.upnpNotifyMulticastAddress);
		//console.log("Sent :" + message);
		//server.close();
	}
}
 
module.exports = new DeviceNotifier();
