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

};

/* Sample response
<?xml version="1.0" encoding="utf-8"?>
<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><u:GetSortCapabilitiesResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><SortCaps>dc:title,dc:creator,upnp:album,upnp:genre</SortCaps></u:GetSortCapabilitiesResponse></s:Body></s:Envelope>
*/
ContentDirectoryService.GetSortCapabilities = function(req, res) {

    console.log('Inside GetSortCapabilities');

};

/* Sample response
<?xml version="1.0" encoding="utf-8"?>
<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><u:GetFeatureListResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><FeatureList>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;&lt;Features xmlns=&quot;urn:schemas-upnp-org:av:avs&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:schemaLocation=&quot;urn:schemas-upnp-org:av:avs http://www.upnp.org/schemas/av/avs.xsd&quot;&gt;&lt;/Features&gt;</FeatureList></u:GetFeatureListResponse></s:Body></s:Envelope>
*/
ContentDirectoryService.GetFeatureList = function(req, res) {

    console.log('Inside GetFeatureList');

};

/* Sample response
<?xml version="1.0" encoding="utf-8"?>
<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><u:GetSystemUpdateIDResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><Id>3</Id></u:GetSystemUpdateIDResponse></s:Body></s:Envelope>
*/
ContentDirectoryService.GetSystemUpdateID = function(req, res) {

    console.log('Inside GetSystemUpdateID');

};

/*

Sample Browse response at objId 0 (root)

<?xml version="1.0" encoding="utf-8"?>
<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
<s:Body>
<u:BrowseResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><Result>&lt;DIDL-Lite xmlns=&quot;urn:schemas-upnp-org:metadata-1-0/DIDL-Lite/&quot; xmlns:dc=&quot;http://purl.org/dc/elements/1.1/&quot; xmlns:upnp=&quot;urn:schemas-upnp-org:metadata-1-0/upnp/&quot; xmlns:dlna=&quot;urn:schemas-dlna-org:metadata-1-0/&quot;&gt;
&lt;container id=&quot;mal/C/BI2&quot; parentID=&quot;0&quot; restricted=&quot;1&quot; searchable=&quot;0&quot; childCount=&quot;1&quot;&gt;
&lt;dc:title&gt;All Media&lt;/dc:title&gt;
&lt;upnp:class&gt;object.container&lt;/upnp:class&gt;
&lt;dc:creator&gt;Unknown&lt;/dc:creator&gt;
&lt;dc:date&gt;2013-03-10T14:59:51&lt;/dc:date&gt;
&lt;upnp:genre&gt;Unknown&lt;/upnp:genre&gt;
&lt;upnp:album&gt;Unknown&lt;/upnp:album&gt;
&lt;upnp:artist&gt;Unknown&lt;/upnp:artist&gt;
&lt;/container&gt;
&lt;container id=&quot;mal/C/BI3&quot; parentID=&quot;0&quot; restricted=&quot;1&quot; searchable=&quot;0&quot; childCount=&quot;5&quot;&gt;
&lt;dc:title&gt;Music&lt;/dc:title&gt;
&lt;upnp:class&gt;object.container&lt;/upnp:class&gt;
&lt;dc:creator&gt;Unknown&lt;/dc:creator&gt;
&lt;dc:date&gt;2013-03-10T14:59:51&lt;/dc:date&gt;
&lt;upnp:genre&gt;Unknown&lt;/upnp:genre&gt;
&lt;upnp:album&gt;Unknown&lt;/upnp:album&gt;
&lt;upnp:artist&gt;Unknown&lt;/upnp:artist&gt;
&lt;/container&gt;
&lt;container id=&quot;mal/C/BI12&quot; parentID=&quot;0&quot; restricted=&quot;1&quot; searchable=&quot;0&quot; childCount=&quot;2&quot;&gt;
&lt;dc:title&gt;Picture&lt;/dc:title&gt;
&lt;upnp:class&gt;object.container&lt;/upnp:class&gt;
&lt;dc:creator&gt;Unknown&lt;/dc:creator&gt;
&lt;dc:date&gt;2013-03-10T14:59:51&lt;/dc:date&gt;
&lt;upnp:genre&gt;Unknown&lt;/upnp:genre&gt;
&lt;upnp:album&gt;Unknown&lt;/upnp:album&gt;
&lt;upnp:artist&gt;Unknown&lt;/upnp:artist&gt;
&lt;/container&gt;
&lt;container id=&quot;mal/C/BI15&quot; parentID=&quot;0&quot; restricted=&quot;1&quot; searchable=&quot;0&quot; childCount=&quot;2&quot;&gt;
&lt;dc:title&gt;Playlists&lt;/dc:title&gt;
&lt;upnp:class&gt;object.container&lt;/upnp:class&gt;
&lt;dc:creator&gt;Unknown&lt;/dc:creator&gt;
&lt;dc:date&gt;2013-03-10T14:59:51&lt;/dc:date&gt;
&lt;upnp:genre&gt;Unknown&lt;/upnp:genre&gt;
&lt;upnp:album&gt;Unknown&lt;/upnp:album&gt;
&lt;upnp:artist&gt;Unknown&lt;/upnp:artist&gt;
&lt;/container&gt;
&lt;container id=&quot;mal/C/BI9&quot; parentID=&quot;0&quot; restricted=&quot;1&quot; searchable=&quot;0&quot; childCount=&quot;2&quot;&gt;
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
<u:BrowseResponse xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><Result>&lt;DIDL-Lite xmlns=&quot;urn:schemas-upnp-org:metadata-1-0/DIDL-Lite/&quot; xmlns:dc=&quot;http://purl.org/dc/elements/1.1/&quot; xmlns:upnp=&quot;urn:schemas-upnp-org:metadata-1-0/upnp/&quot; xmlns:dlna=&quot;urn:schemas-dlna-org:metadata-1-0/&quot;&gt;
&lt;item id=&quot;mal/I/AM2/1&quot; parentID=&quot;mal/C/BI2&quot; refID=&quot;mal/I/AL10/1&quot; restricted=&quot;1&quot;&gt;
&lt;dc:title&gt;newmobcal1920_12mbps&lt;/dc:title&gt;
&lt;upnp:class&gt;object.item.videoItem&lt;/upnp:class&gt;
&lt;dc:creator&gt;Unknown&lt;/dc:creator&gt;
&lt;dc:date&gt;2012-11-18T07:06:15&lt;/dc:date&gt;
&lt;upnp:genre&gt;Unknown&lt;/upnp:genre&gt;
&lt;upnp:album&gt;Unknown&lt;/upnp:album&gt;
&lt;upnp:artist&gt;Unknown&lt;/upnp:artist&gt;
&lt;res protocolInfo=&quot;http-get:*:video/mpeg:DLNA.ORG_PN=MPEG_TS;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000&quot; bitrate=&quot;1503000&quot; resolution=&quot;1920x1080&quot; size=&quot;114082536&quot;&gt;http://192.168.1.68:62988/mal/I/AM2/1.tts&lt;/res&gt;
&lt;res protocolInfo=&quot;http-get:*:image/jpeg:DLNA.ORG_PN=JPEG_TN;DLNA.ORG_OP=01;DLNA.ORG_CI=1;DLNA.ORG_FLAGS=04F00000000000000000000000000000&quot; colorDepth=&quot;24&quot; resolution=&quot;160x160&quot;&gt;http://192.168.1.68:62988/thj_mal/I/AM2/1.jpg&lt;/res&gt;
&lt;res protocolInfo=&quot;http-get:*:image/png:DLNA.ORG_PN=PNG_TN;DLNA.ORG_OP=01;DLNA.ORG_CI=1;DLNA.ORG_FLAGS=04F00000000000000000000000000000&quot; colorDepth=&quot;32&quot; resolution=&quot;160x160&quot;&gt;http://192.168.1.68:62988/thp_mal/I/AM2/1.png&lt;/res&gt;
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
    
    var resp_str = 
    
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<DIDL-Lite xmlns="urn:schemas-upnp-org:metadata-1-0/DIDL-Lite/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:upnp="urn:schemas-upnp-org:metadata-1-0/upnp/" xmlns:dlna="urn:schemas-dlna-org:metadata-1-0/">' +
    '<item id="mal/I/MY11/1" parentID="mal/C/MY11/18" refID="mal/I/AL10/1" restricted="0" dlna:dlnaManaged="00000004">' +
    '<dc:title>newmobcal1920_12mbps</dc:title>' +
    '<upnp:class>object.item.videoItem</upnp:class>' +
    '<dc:creator>Unknown</dc:creator>' +
    '<dc:date>2012-11-18T07:06:15</dc:date>' +
    '<upnp:genre>Unknown</upnp:genre>' +
    '<upnp:album>Unknown</upnp:album>' +
    '<upnp:artist>Unknown</upnp:artist>' +
    '<res protocolInfo="http-get:*:video/mpeg:DLNA.ORG_PN=MPEG_TS;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000" bitrate="1503000" resolution="1920x1080" size="114082536">http://192.168.1.68:62988/mal/I/MY11/1.tts</res>' +
    '<res protocolInfo="http-get:*:image/jpeg:DLNA.ORG_PN=JPEG_TN;DLNA.ORG_OP=01;DLNA.ORG_CI=1;DLNA.ORG_FLAGS=04F00000000000000000000000000000" colorDepth="24" resolution="160x160">http://192.168.1.68:62988/thj_mal/I/MY11/1.jpg</res>' +
    '<res protocolInfo="http-get:*:image/png:DLNA.ORG_PN=PNG_TN;DLNA.ORG_OP=01;DLNA.ORG_CI=1;DLNA.ORG_FLAGS=04F00000000000000000000000000000" colorDepth="32" resolution="160x160">http://192.168.1.68:62988/thp_mal/I/MY11/1.png</res>' +
    '</item></DIDL-Lite>';
    
    console.log('Sending response' + resp_str);
    
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

