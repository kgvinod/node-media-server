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

UPnPUtils.prototype.cleanXml = function (input_xml) {

    //console.log(input_xml);
    
    // Replace any " characters
    var op_xml1 = input_xml.replace(/\"/g, "&quot;");
 
	// Replace any " characters
    var op_xml2 = op_xml1.replace(/>/g, "&gt;");
    	
	// Replace any " characters
    var op_xml3 = op_xml2.replace(/</g, "&lt;");
    
    //console.log(input_xml1);
    
    return op_xml3;

}


/**
  * Exports.
  * Return the singleton instance
  */

module.exports = exports = new UPnPUtils();




