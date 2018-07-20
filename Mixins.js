
    var _ = require('underscore');
    // shared functionality encaspulated into a customlogger
    var logger = (function() {
        var CustomLogger = {
            log: function(message) {
                console.log(message);
            }
        };
        return CustomLogger;
    }());
    // All object that will need the custom to log system specific logs
    var Server = (function(Logger) {
        var CustomerServer = function() {
            this.init = function(){
                this.log("Initializing Server...");
                var date = new Date();console.log(date.getFullYear());
            };
        };
        // This copies/extends the members of the 'customlogger' into 'CustomerServer'
        _.extend(CustomerServer.prototype, Logger);
        return CustomerServer;
    }(logger));
    (new Server()).init(); // Initializing Server..
var date = function() {
    date = new Date();
    date = date.getFullYear();
    console.log(date);
}();