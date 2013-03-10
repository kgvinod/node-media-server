/*!
 * Device and service description
 * Copyright(c) 2013 Vinod Gopalan <kgvinod@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */



/**
  * Description constructor.
  *
  * @param {String} iface_name
  * @param {Number} interval
  * @api public
  * @return {Function} Constructor for DeviceNotifier type.
  */

function Description () {

}



Description.prototype.getDeviceDescription = function (req, res) {

	res.sendfile('./description/xml/devicedescr.xml');
    console.log('Sent device description');

}


Description.prototype.connectionManagerServiceDescription = function (req, res) {

    res.sendfile('./description/xml/connectionmanager_scpd.xml');
    console.log('Sent service description');

}

Description.prototype.contentDirectoryServiceDescription = function (req, res) {

    res.sendfile('./description/xml/contentdirectory_scpd.xml');
    console.log('Sent service description');

}

/**
  * Exports.
  * Return the singleton instance
  */

module.exports = exports = new Description();




