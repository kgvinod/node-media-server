/*!
 * Connection Manager service
 * Copyright(c) 2013 Vinod Gopalan <kgvinod@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */



/**
  * ConnectionManagerService constructor.
  *
  * @param {String} iface_name
  * @param {Number} interval
  * @api public
  * @return {Function} Constructor for DeviceNotifier type.
  */

function ConnectionManagerService () {

}



ConnectionManagerService.prototype.invokeAction = function (req, res) {

    console.log(req.get('SOAPACTION'));
    console.log(req.get('Content-Type'));
    console.log(req.get('User-Agent'));
    console.log(JSON.stringify(req.body));

	res.sendfile('./description/xml/contentdirectory_scpd.xml');
    console.log('Sent response to Connection Manager action');

}


/**
  * Exports.
  * Return the singleton instance
  */

module.exports = exports = new ConnectionManagerService();




