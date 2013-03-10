/*!
 * UPnP utils
 * Copyright(c) 2013 Vinod Gopalan <kgvinod@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */



/**
  * UPnPUtils constructor.
  *
  * @param {String} iface_name
  * @param {Number} interval
  * @api public
  * @return {Function} Constructor for DeviceNotifier type.
  */

function UPnPUtils () {

}



UPnPUtils.prototype.getActionFromSOAPACTION = function (soap_action) {

    // SOAPACTION: "urn:schemas-upnp-org:service:serviceType:v#actionName"
    
    //console.log(soap_action);
    
    
    // Remove any " characters
    cleaned_soap_action = soap_action.replace(/\"/g, "");
    
    //console.log(cleaned_soap_action);
    
    var action_array = cleaned_soap_action.split("#");
    return action_array[1];

}


/**
  * Exports.
  * Return the singleton instance
  */

module.exports = exports = new UPnPUtils();




