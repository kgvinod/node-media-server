/*!
 * Content Directory service
 * Copyright(c) 2013 Vinod Gopalan <kgvinod@gmail.com>
 * MIT Licensed
 */
 
 /*
 Poster settings for service invocation
 URL: http://192.168.1.68:62988/MediaServer_ContentDirectory/control
 
 HEADERS:
 
 SOAPACTION :  "urn:schemas-upnp-org:service:ContentDirectory:2#GetSortCapabilities"
 
 Content:
 <?xml version="1.0"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body><u:GetSortCapabilities xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:2"></u:GetSortCapabilities></s:Body></s:Envelope>
 */

/**
 * Module dependencies.
 */
var upnp_utils = require('../utils/upnp_utils');


/**
 * ContentDirectoryService constructor.
 *
 * @param {String} iface_name
 * @param {Number} interval
 * @api public
 * @return {Function} Constructor for DeviceNotifier type.
 */

function ContentDirectoryService() {

}



ContentDirectoryService.prototype.invokeAction = function(req, res) {

    console.log(req.get('SOAPACTION'));
    console.log(req.get('Content-Type'));
    console.log(req.get('User-Agent'));
    console.log(JSON.stringify(req.body));

    // Get the service action
    serviceAction = upnp_utils.getActionFromSOAPACTION(req.get('SOAPACTION'));

    console.log('Service action = ' + serviceAction);

    switch (serviceAction) {

        case "GetSearchCapabilities":
            ContentDirectoryService.GetSearchCapabilities(req, res);
            break;

        case "GetSortCapabilities":
            ContentDirectoryService.GetSortCapabilities(req, res);
            break;

        case "GetFeatureList":
            ContentDirectoryService.GetFeatureList(req, res);
            break;

        case "GetSystemUpdateID":
            ContentDirectoryService.GetSystemUpdateID(req, res);
            break;

        case "Browse":
            ContentDirectoryService.Browse(req, res);
            break;

        case "Search":
            ContentDirectoryService.Search(req, res);
            break;

        default:
            console.log('Invalid action ' + serviceAction);
            break;
    }

    //res.sendfile('./description/xml/contentdirectory_scpd.xml');
    console.log('Sent response to Content Directory action');

};

/* Sample response
<?xml version="1.0" encoding="utf-8"?>
<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><u:GetSearchCapabilitiesResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><SearchCaps>dc:title,dc:creator,upnp:album,upnp:genre,dc:date,upnp:class,@refID</SearchCaps></u:GetSearchCapabilitiesResponse></s:Body></s:Envelope>
*/
ContentDirectoryService.GetSearchCapabilities = function(req, res) {

    console.log('Inside GetSearchCapabilities');
    
    var resp_str = '<?xml version="1.0" encoding="utf-8"?><s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><u:GetSearchCapabilitiesResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><SearchCaps>dc:title,dc:creator,upnp:album,upnp:genre,dc:date,upnp:class,@refID</SearchCaps></u:GetSearchCapabilitiesResponse></s:Body></s:Envelope>'
 
    console.log('Sending response' + resp_str);
     
    res.send(resp_str);
    

};

/* Sample response
<?xml version="1.0" encoding="utf-8"?>
<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><u:GetSortCapabilitiesResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><SortCaps>dc:title,dc:creator,upnp:album,upnp:genre</SortCaps></u:GetSortCapabilitiesResponse></s:Body></s:Envelope>
*/
ContentDirectoryService.GetSortCapabilities = function(req, res) {

    console.log('Inside GetSortCapabilities');
    
    var resp_str = '<?xml version="1.0" encoding="utf-8"?><s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><u:GetSortCapabilitiesResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><SortCaps>dc:title,dc:creator,upnp:album,upnp:genre</SortCaps></u:GetSortCapabilitiesResponse></s:Body></s:Envelope>'
 
    console.log('Sending response' + resp_str);
     
    res.send(resp_str);    

};

/* Sample response
<?xml version="1.0" encoding="utf-8"?>
<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><u:GetFeatureListResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><FeatureList>&lt;?xml version="1.0" encoding="UTF-8"?&gt;&lt;Features xmlns="urn:schemas-upnp-org:av:avs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:schemas-upnp-org:av:avs http://www.upnp.org/schemas/av/avs.xsd"&gt;&lt;/Features&gt;</FeatureList></u:GetFeatureListResponse></s:Body></s:Envelope>
*/
ContentDirectoryService.GetFeatureList = function(req, res) {

    console.log('Inside GetFeatureList');
    
    var result_str =         
    
        '<?xml version="1.0" encoding="UTF-8"?>' +
        '<Features xmlns="urn:schemas-upnp-org:av:avs" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="urn:schemas-upnp-org:av:avs http://www.upnp.org/schemas/av/avs.xsd"></Features>';
        
	var cleaned_result_str = upnp_utils.cleanXml(result_str);        
        
    var resp_str = 
        '<?xml version="1.0" encoding="utf-8"?>' + 
        '<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<s:Body>' +
        '<u:GetFeatureListResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">' +
        '<FeatureList>' +
        
        cleaned_result_str +
        
        '</FeatureList>' + 
        '</u:GetFeatureListResponse>' +
        '</s:Body>' +
        '</s:Envelope>';
 
    console.log('Sending response' + resp_str);
     
    res.send(resp_str);    

};

/* Sample response
<?xml version="1.0" encoding="utf-8"?>
<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><u:GetSystemUpdateIDResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><Id>3</Id></u:GetSystemUpdateIDResponse></s:Body></s:Envelope>
*/
ContentDirectoryService.GetSystemUpdateID = function(req, res) {

    console.log('Inside GetSystemUpdateID');
    
    var result_str = '3';
        
	var cleaned_result_str = upnp_utils.cleanXml(result_str);        
    
    var resp_str = 
        '<?xml version="1.0" encoding="utf-8"?>' + 
        '<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<s:Body>' + 
        '<u:GetSystemUpdateIDResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">' + 
        '<Id>' +
        cleaned_result_str + 
        '</Id>' +
        '</u:GetSystemUpdateIDResponse>' + 
        '</s:Body>'+ 
        '</s:Envelope>';
 
    console.log('Sending response' + resp_str);
     
    res.send(resp_str);      

};

/*

Sample Browse response at objId 0 (root)

<?xml version="1.0" encoding="utf-8"?>
<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
<s:Body>
<u:BrowseResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><Result>&lt;DIDL-Lite xmlns="urn:schemas-upnp-org:metadata-1-0/DIDL-Lite/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:upnp="urn:schemas-upnp-org:metadata-1-0/upnp/" xmlns:dlna="urn:schemas-dlna-org:metadata-1-0/"&gt;
&lt;container id="mal/C/BI2" parentID="0" restricted="1" searchable="0" childCount="1"&gt;
&lt;dc:title&gt;All Media&lt;/dc:title&gt;
&lt;upnp:class&gt;object.container&lt;/upnp:class&gt;
&lt;dc:creator&gt;Unknown&lt;/dc:creator&gt;
&lt;dc:date&gt;2013-03-10T14:59:51&lt;/dc:date&gt;
&lt;upnp:genre&gt;Unknown&lt;/upnp:genre&gt;
&lt;upnp:album&gt;Unknown&lt;/upnp:album&gt;
&lt;upnp:artist&gt;Unknown&lt;/upnp:artist&gt;
&lt;/container&gt;
&lt;container id="mal/C/BI3" parentID="0" restricted="1" searchable="0" childCount="5"&gt;
&lt;dc:title&gt;Music&lt;/dc:title&gt;
&lt;upnp:class&gt;object.container&lt;/upnp:class&gt;
&lt;dc:creator&gt;Unknown&lt;/dc:creator&gt;
&lt;dc:date&gt;2013-03-10T14:59:51&lt;/dc:date&gt;
&lt;upnp:genre&gt;Unknown&lt;/upnp:genre&gt;
&lt;upnp:album&gt;Unknown&lt;/upnp:album&gt;
&lt;upnp:artist&gt;Unknown&lt;/upnp:artist&gt;
&lt;/container&gt;
&lt;container id="mal/C/BI12" parentID="0" restricted="1" searchable="0" childCount="2"&gt;
&lt;dc:title&gt;Picture&lt;/dc:title&gt;
&lt;upnp:class&gt;object.container&lt;/upnp:class&gt;
&lt;dc:creator&gt;Unknown&lt;/dc:creator&gt;
&lt;dc:date&gt;2013-03-10T14:59:51&lt;/dc:date&gt;
&lt;upnp:genre&gt;Unknown&lt;/upnp:genre&gt;
&lt;upnp:album&gt;Unknown&lt;/upnp:album&gt;
&lt;upnp:artist&gt;Unknown&lt;/upnp:artist&gt;
&lt;/container&gt;
&lt;container id="mal/C/BI15" parentID="0" restricted="1" searchable="0" childCount="2"&gt;
&lt;dc:title&gt;Playlists&lt;/dc:title&gt;
&lt;upnp:class&gt;object.container&lt;/upnp:class&gt;
&lt;dc:creator&gt;Unknown&lt;/dc:creator&gt;
&lt;dc:date&gt;2013-03-10T14:59:51&lt;/dc:date&gt;
&lt;upnp:genre&gt;Unknown&lt;/upnp:genre&gt;
&lt;upnp:album&gt;Unknown&lt;/upnp:album&gt;
&lt;upnp:artist&gt;Unknown&lt;/upnp:artist&gt;
&lt;/container&gt;
&lt;container id="mal/C/BI9" parentID="0" restricted="1" searchable="0" childCount="2"&gt;
&lt;dc:title&gt;Video&lt;/dc:title&gt;
&lt;upnp:class&gt;object.container&lt;/upnp:class&gt;
&lt;dc:creator&gt;Unknown&lt;/dc:creator&gt;
&lt;dc:date&gt;2013-03-10T14:59:51&lt;/dc:date&gt;
&lt;upnp:genre&gt;Unknown&lt;/upnp:genre&gt;
&lt;upnp:album&gt;Unknown&lt;/upnp:album&gt;
&lt;upnp:artist&gt;Unknown&lt;/upnp:artist&gt;
&lt;/container&gt;&lt;/DIDL-Lite&gt;</Result>
<NumberReturned>5</NumberReturned>
<TotalMatches>5</TotalMatches>
<UpdateID>3</UpdateID>
</u:BrowseResponse>
</s:Body>
</s:Envelope>
*/

/*

<?xml version="1.0" encoding="utf-8"?>
<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
<s:Body>
<u:BrowseResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><Result>&lt;DIDL-Lite xmlns="urn:schemas-upnp-org:metadata-1-0/DIDL-Lite/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:upnp="urn:schemas-upnp-org:metadata-1-0/upnp/" xmlns:dlna="urn:schemas-dlna-org:metadata-1-0/"&gt;
&lt;item id="mal/I/AM2/1" parentID="mal/C/BI2" refID="mal/I/AL10/1" restricted="1"&gt;
&lt;dc:title&gt;newmobcal1920_12mbps&lt;/dc:title&gt;
&lt;upnp:class&gt;object.item.videoItem&lt;/upnp:class&gt;
&lt;dc:creator&gt;Unknown&lt;/dc:creator&gt;
&lt;dc:date&gt;2012-11-18T07:06:15&lt;/dc:date&gt;
&lt;upnp:genre&gt;Unknown&lt;/upnp:genre&gt;
&lt;upnp:album&gt;Unknown&lt;/upnp:album&gt;
&lt;upnp:artist&gt;Unknown&lt;/upnp:artist&gt;
&lt;res protocolInfo="http-get:*:video/mpeg:DLNA.ORG_PN=MPEG_TS;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000" bitrate="1503000" resolution="1920x1080" size="114082536"&gt;http://192.168.1.68:62988/mal/I/AM2/1.tts&lt;/res&gt;
&lt;res protocolInfo="http-get:*:image/jpeg:DLNA.ORG_PN=JPEG_TN;DLNA.ORG_OP=01;DLNA.ORG_CI=1;DLNA.ORG_FLAGS=04F00000000000000000000000000000" colorDepth="24" resolution="160x160"&gt;http://192.168.1.68:62988/thj_mal/I/AM2/1.jpg&lt;/res&gt;
&lt;res protocolInfo="http-get:*:image/png:DLNA.ORG_PN=PNG_TN;DLNA.ORG_OP=01;DLNA.ORG_CI=1;DLNA.ORG_FLAGS=04F00000000000000000000000000000" colorDepth="32" resolution="160x160"&gt;http://192.168.1.68:62988/thp_mal/I/AM2/1.png&lt;/res&gt;
&lt;/item&gt;&lt;/DIDL-Lite&gt;</Result>
<NumberReturned>1</NumberReturned>
<TotalMatches>1</TotalMatches>
<UpdateID>3</UpdateID>
</u:BrowseResponse>
</s:Body>
</s:Envelope>

*/

ContentDirectoryService.Browse = function(req, res) {

    console.log('Inside Browse');
    
    var result_str = 
        '<DIDL-Lite xmlns="urn:schemas-upnp-org:metadata-1-0/DIDL-Lite/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:upnp="urn:schemas-upnp-org:metadata-1-0/upnp/" xmlns:dlna="urn:schemas-dlna-org:metadata-1-0/">'+
        
        '<container id="1000" parentID="0" restricted="1" searchable="0" childCount="1">'+
        '<dc:title>All Media</dc:title>'+
        '<upnp:class>object.container</upnp:class>'+
        '<dc:date>2013-03-10T14:59:51</dc:date>'+
        '</container>'+
        
        '<container id="2000" parentID="0" restricted="1" searchable="0" childCount="5">'+
        '<dc:title>Music</dc:title>'+
        '<upnp:class>object.container</upnp:class>'+
        '<dc:date>2013-03-10T14:59:51</dc:date>'+
        '</container>'+
        
        '<container id="3000" parentID="0" restricted="1" searchable="0" childCount="2">'+
        '<dc:title>Picture</dc:title>'+
        '<upnp:class>object.container</upnp:class>'+
        '<dc:date>2013-03-10T14:59:51</dc:date>'+
        '</container>'+
        
        '<container id="4000" parentID="0" restricted="1" searchable="0" childCount="2">'+
        '<dc:title>Playlists</dc:title>'+
        '<upnp:class>object.container</upnp:class>'+
        '<dc:date>2013-03-10T14:59:51</dc:date>'+
        '</container>'+
        
        '<container id="5000" parentID="0" restricted="1" searchable="0" childCount="2">'+
        '<dc:title>Video</dc:title>'+
        '<upnp:class>object.container</upnp:class>'+
        '<dc:date>2013-03-10T14:59:51</dc:date>'+
        '</container>' +
        
        '</DIDL-Lite>';

	var cleaned_result_str = upnp_utils.cleanXml(result_str);
        
    var resp_str = 
        '<?xml version="1.0" encoding="utf-8"?>'+
        '<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">'+
        '<s:Body>'+
        '<u:BrowseResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1">' + 
        '<Result>' +
        cleaned_result_str +
        '</Result>'+
        '<NumberReturned>5</NumberReturned>'+
        '<TotalMatches>5</TotalMatches>'+
        '<UpdateID>3</UpdateID>'+
        '</u:BrowseResponse>'+
        '</s:Body>'+
        '</s:Envelope>';

    
    //console.log('Sending response' + cleaned_xml);
    
    res.send(resp_str);
    

};

ContentDirectoryService.Search = function(req, res) {

    console.log('Inside Search');

};
/**
 * Exports.
 * Return the singleton instance
 */

module.exports = exports = new ContentDirectoryService();

