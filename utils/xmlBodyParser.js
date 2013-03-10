/*!
 * XML body parser
 * Copyright(c) 2013 Vinod Gopalan <kgvinod@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
var connect_utils = require('express/node_modules/connect/lib/utils')
    , fs = require('fs')
    , xml2js = require('xml2js');

function xmlBodyParser(req, res, next) {

    console.log ("Inside xmlBodyParser");
    
    if (req._body) return next();
    req.body = req.body || {};

    // ignore GET
    if ('GET' == req.method || 'HEAD' == req.method) return next();

    // check Content-Type
    if ('text/xml' != connect_utils.mime(req)) return next();

    // flag as parsed
    req._body = true;

    // parse
    var buf = '';
    req.setEncoding('utf8');
    
    req.on('data', 
            function(chunk) { 
                console.log ("req.on = " + chunk);
                buf += chunk 
            });

    req.on('end', function() {  
    
        console.log ("req.body = " + buf);
        var parser = new xml2js.Parser();
        
        parser.parseString(buf, 
            function(err, json) {
                if (err) {
                    console.log ("parser.parseString error");
                    err.status = 400;
                    next(err);
                } else {
                    console.log ("parser.parseString json =" + JSON.stringify(json));
                    req.body = json;
                    next();
                }
            });
    });
}

/**
  * Exports.
  * Return the singleton instance
  */

module.exports = exports = xmlBodyParser;
