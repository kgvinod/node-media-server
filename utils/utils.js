// Utility functions

var Utility = function()
{
    var self = this;

    // Get the IP address of the interface
	this.getNetworkIP = function (iface_name) {

        var interfaces = require('os').networkInterfaces();
        for (var devName in interfaces) {
            var iface = interfaces[devName];
            console.log("Found interface " + devName);
            
            if (devName === iface_name)
            {
                for (var i = 0; i < iface.length; i++) 
                {
                    var alias = iface[i];
                    if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
                    {
                        console.log ('Found ipv4 address of ' + iface_name + ':' + alias.address);
                        return alias.address;
                    }
                }
            }
        }

        console.log ('Failed to find interface ' + iface_name);

        return '0.0.0.0';
    }
}

module.exports = new Utility();
