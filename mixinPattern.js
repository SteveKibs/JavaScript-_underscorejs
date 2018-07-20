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

        //An object that will need the custom logger to log system
        var Server = (function(Logger) {
            var CustomerServer = function() {
                this.init = function() {
                    this.log("Initializing Server....");
                };
            };

            // This copies/extends the members of the 'CustomLogger' into 'CustomServer'
            _.extend(CustomerServer.prototype, Logger);
            return CustomerServer;
        }(logger));

        (new Server()).init(); //Initializing server...