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
    console.log('Sent response to Connection Manager action');

}

/* GetCurrentConnectionInfo
<?xml version="1.0" encoding="utf-8"?>
<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><u:GetCurrentConnectionInfoResponse xmlns:u="urn:schemas-upnp-org:service:ConnectionManager:1"><RcsID>-1</RcsID><AVTransportID>-1</AVTransportID><ProtocolInfo></ProtocolInfo><PeerConnectionManager></PeerConnectionManager><PeerConnectionID>-1</PeerConnectionID><Direction>Output</Direction><Status>OK</Status></u:GetCurrentConnectionInfoResponse></s:Body></s:Envelope>
*/ 

/* GetProtocolInfo

<?xml version="1.0" encoding="utf-8"?>
<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><u:GetProtocolInfoResponse xmlns:u="urn:schemas-upnp-org:service:ConnectionManager:1"><Source>http-get:*:image/png:DLNA.ORG_PN=PNG_TN;DLNA.ORG_OP=01;DLNA.ORG_CI=1;DLNA.ORG_FLAGS=04F00000000000000000000000000000,http-get:*:image/jpeg:DLNA.ORG_PN=JPEG_TN;DLNA.ORG_OP=01;DLNA.ORG_CI=1;DLNA.ORG_FLAGS=04F00000000000000000000000000000,http-get:*:video/mpeg:DLNA.ORG_PN=MPEG_TS_NA_ISO;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/vnd.dlna.mpeg-tts:DLNA.ORG_PN=AVC_TS_NA_T;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/mpeg:DLNA.ORG_PN=AVC_TS_NA_ISO;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/mpeg:DLNA.ORG_PN=MPEG_TS_SD_KO_ISO;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/mpeg:DLNA.ORG_PN=MPEG_TS_HD_KO_ISO;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/vnd.dlna.mpeg-tts:DLNA.ORG_PN=MPEG_TS_HD_KO;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/vnd.dlna.mpeg-tts:DLNA.ORG_PN=MPEG_TS_SD_KO;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/vnd.dlna.mpeg-tts:DLNA.ORG_PN=MPEG_TS_SD_NA;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/vnd.dlna.mpeg-tts:DLNA.ORG_PN=MPEG_TS_HD_KO_T;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/vnd.dlna.mpeg-tts:DLNA.ORG_PN=MPEG_TS_SD_EU_T;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/vnd.dlna.mpeg-tts:DLNA.ORG_PN=MPEG_TS_SD_EU;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/vnd.dlna.mpeg-tts:DLNA.ORG_PN=MPEG_TS_SD_KO_T;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/vnd.dlna.mpeg-tts:DLNA.ORG_PN=MPEG_TS_SD_NA_T;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/vnd.dlna.mpeg-tts:DLNA.ORG_PN=MPEG_TS_HD_NA_T;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/vnd.dlna.mpeg-tts:DLNA.ORG_PN=MPEG_TS_HD_NA;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/mpeg:DLNA.ORG_PN=MPEG_TS_HD_NA_ISO;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/mpeg:DLNA.ORG_PN=MPEG_TS_SD_NA_ISO;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/mpeg:DLNA.ORG_PN=MPEG_TS_SD_EU_ISO;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/vnd.dlna.mpeg-tts:DLNA.ORG_PN=MPEG_TS_JP_T;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/mpeg:DLNA.ORG_PN=MPEG_PS_NTSC;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/mpeg:DLNA.ORG_PN=MPEG_PS_PAL;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/mp4:DLNA.ORG_PN=AVC_MP4_BL_CIF15_AAC_520;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:image/jps:DLNA.ORG_PN=JPEG_LRG;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=00F00000000000000000000000000000,http-get:*:image/jps:DLNA.ORG_PN=JPEG_MED;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=00F00000000000000000000000000000,http-get:*:image/jps:DLNA.ORG_PN=JPEG_SM;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=00F00000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_PN=WMDRM_WMVHIGH_PRO;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_PN=WMDRM_WMVHIGH_FULL;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_PN=WMDRM_WMVMED_PRO;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_PN=WMDRM_WMVMED_FULL;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_PN=WMDRM_WMVMED_BASE;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_PN=WMDRM_WMVSPML_BASE;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_PN=WMDRM_WMVSPLL_BASE;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/x-ms-wma:DLNA.ORG_PN=WMDRM_WMAFULL;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/x-ms-wma:DLNA.ORG_PN=WMDRM_WMABASE;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/x-ms-wma:DLNA.ORG_PN=WMDRM_WMAPRO;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_PN=WMVHIGH_PRO;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_PN=WMVHIGH_FULL;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_PN=WMVMED_PRO;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_PN=WMVMED_FULL;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_PN=WMVMED_BASE;DLNA.ORG_OP=11;DLNA.ORG_PS=-120\,-60\,-30\,-8\,-4\,-2\,-1\,-1/2\,-1/4\,1/4\,1/2\,2\,4\,8\,30\,60\,120;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_PN=WMVSPML_BASE;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_PN=WMVSPLL_BASE;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/x-ms-wma:DLNA.ORG_PN=WMAFULL;DLNA.ORG_OP=11;DLNA.ORG_PS=-8\,-4\,-2\,-1\,-1/2\,1/2\,2\,4\,8;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/x-ms-wma:DLNA.ORG_PN=WMABASE;DLNA.ORG_OP=11;DLNA.ORG_PS=-8\,-4\,-2\,-1\,-1/2\,1/2\,2\,4\,8;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/x-ms-wma:DLNA.ORG_PN=WMAPRO;DLNA.ORG_OP=11;DLNA.ORG_PS=-8\,-4\,-2\,-1\,-1/2\,1/2\,2\,4\,8;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:image/gif:DLNA.ORG_PN=GIF_LRG;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=00F00000000000000000000000000000,http-get:*:audio/vnd.dlna.adts:DLNA.ORG_PN=AAC_MULT5_ADTS;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/vnd.dlna.adts:DLNA.ORG_PN=AAC_ADTS_320;DLNA.ORG_OP=11;DLNA.ORG_PS=-8\,-4\,-2\,-1\,-1/2\,1/2\,2\,4\,8;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/vnd.dlna.adts:DLNA.ORG_PN=AAC_ADTS;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:image/mpo:DLNA.ORG_PN=JPEG_LRG;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=00F00000000000000000000000000000,http-get:*:image/mpo:DLNA.ORG_PN=JPEG_MED;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=00F00000000000000000000000000000,http-get:*:image/mpo:DLNA.ORG_PN=JPEG_SM;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=00F00000000000000000000000000000,http-get:*:audio/L16;rate=32000;channels=2:DLNA.ORG_PN=LPCM_low;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=32000;channels=1:DLNA.ORG_PN=LPCM_low;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=24000;channels=2:DLNA.ORG_PN=LPCM_low;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=24000;channels=1:DLNA.ORG_PN=LPCM_low;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=22050;channels=2:DLNA.ORG_PN=LPCM_low;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=22050;channels=1:DLNA.ORG_PN=LPCM_low;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=16000;channels=2:DLNA.ORG_PN=LPCM_low;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=16000;channels=1:DLNA.ORG_PN=LPCM_low;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=12000;channels=2:DLNA.ORG_PN=LPCM_low;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=12000;channels=1:DLNA.ORG_PN=LPCM_low;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=11025;channels=2:DLNA.ORG_PN=LPCM_low;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=11025;channels=1:DLNA.ORG_PN=LPCM_low;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=8000;channels=2:DLNA.ORG_PN=LPCM_low;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=8000;channels=1:DLNA.ORG_PN=LPCM_low;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=48000;channels=2:DLNA.ORG_PN=LPCM;DLNA.ORG_OP=11;DLNA.ORG_PS=-8\,-4\,-2\,-1\,-1/2\,1/2\,2\,4\,8;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=48000;channels=1:DLNA.ORG_PN=LPCM;DLNA.ORG_OP=11;DLNA.ORG_PS=-8\,-4\,-2\,-1\,-1/2\,1/2\,2\,4\,8;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=44100;channels=2:DLNA.ORG_PN=LPCM;DLNA.ORG_OP=11;DLNA.ORG_PS=-8\,-4\,-2\,-1\,-1/2\,1/2\,2\,4\,8;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/L16;rate=44100;channels=1:DLNA.ORG_PN=LPCM;DLNA.ORG_OP=11;DLNA.ORG_PS=-8\,-4\,-2\,-1\,-1/2\,1/2\,2\,4\,8;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:image/png:DLNA.ORG_PN=PNG_LRG;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=00F00000000000000000000000000000,http-get:*:image/jpeg:DLNA.ORG_PN=JPEG_LRG;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=00F00000000000000000000000000000,http-get:*:image/jpeg:DLNA.ORG_PN=JPEG_MED;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=00F00000000000000000000000000000,http-get:*:image/jpeg:DLNA.ORG_PN=JPEG_SM;DLNA.ORG_OP=01;DLNA.ORG_CI=1;DLNA.ORG_FLAGS=04F00000000000000000000000000000,http-get:*:audio/mpeg:DLNA.ORG_PN=MP3;DLNA.ORG_OP=11;DLNA.ORG_PS=-8\,-4\,-2\,-1\,-1/2\,1/2\,2\,4\,8;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/vnd.dolby.dd-raw:DLNA.ORG_PN=AC3;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/3gpp:DLNA.ORG_PN=MPEG4_P2_MP4_SP_L2_AMR;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/mp4:DLNA.ORG_PN=MPEG4_P2_MP4_SP_L2_AMR;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/3gpp:DLNA.ORG_PN=MPEG4_H263_MP4_P0_L10_AAC;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/mp4:DLNA.ORG_PN=MPEG4_H263_MP4_P0_L10_AAC;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/3gpp:DLNA.ORG_PN=AVC_MP4_BL_CIF30_AAC_940;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/mp4:DLNA.ORG_PN=AVC_MP4_BL_CIF30_AAC_940;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/3gpp:DLNA.ORG_PN=AAC_ISO;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/mp4:DLNA.ORG_PN=AAC_ISO;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/3gpp:DLNA.ORG_PN=AAC_ISO_320;DLNA.ORG_OP=11;DLNA.ORG_PS=-8\,-4\,-2\,-1\,-1/2\,1/2\,2\,4\,8;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/mp4:DLNA.ORG_PN=AAC_ISO_320;DLNA.ORG_OP=11;DLNA.ORG_PS=-8\,-4\,-2\,-1\,-1/2\,1/2\,2\,4\,8;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/3gpp:DLNA.ORG_PN=HEAAC_L2_ISO;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/mp4:DLNA.ORG_PN=HEAAC_L2_ISO;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/3gpp:DLNA.ORG_PN=HEAAC_L3_ADTS;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/mp4:DLNA.ORG_PN=HEAAC_L3_ADTS;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/3gpp:DLNA.ORG_PN=HEAAC_MULT5_ISO;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/mp4:DLNA.ORG_PN=HEAAC_MULT5_ISO;DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:image/bmp:DLNA.ORG_OP=01;DLNA.ORG_FLAGS=00F00000000000000000000000000000,http-get:*:audio/wav:DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/x-ms-wmv:DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/x-ms-wma:DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/mpeg:DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:audio/x-ogg:DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/x-ms-wmv:DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000,http-get:*:video/avi:DLNA.ORG_OP=01;DLNA.ORG_FLAGS=01700000000000000000000000000000</Source><Sink></Sink></u:GetProtocolInfoResponse></s:Body></s:Envelope>
*/

/*GetCurrentConnectionIDs
<?xml version="1.0" encoding="utf-8"?>
<s:Envelope s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body><u:GetCurrentConnectionIDsResponse xmlns:u="urn:schemas-upnp-org:service:ConnectionManager:1"><ConnectionIDs>0</ConnectionIDs></u:GetCurrentConnectionIDsResponse></s:Body></s:Envelope>
*/


/**
  * Exports.
  * Return the singleton i
  
  nstance
  */

module.exports = exports = new ConnectionManagerService();




