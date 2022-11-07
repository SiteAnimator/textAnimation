/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       jsonLoaderModule.js
    function:   Adds the function:
                
                textAnimation.loadJson: loads a json file

                to the application

    Last revision: 01-11-2022
 
*/    

// create module function
( function( textAnimation ){
        
    // create name space
    textAnimation.service = textAnimation.service ? textAnimation.service : {};
            
    // MODULE: jsonLoaderModule( void ) void
    textAnimation.service.jsonLoaderModule = function( ) {
        // PRIVATE:

        // MEMBERS:
        var self = this;                                    // object
        self.debugOn = true;                               // boolean
        self.MODULE = 'JsonLoaderModule';                   // string
        self.options = null;                                // named array / null
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // add the extensions to the application
            self.addApplicationsExtensions();
                        
        // DONE FUNCTION: construct( void ) void
        };
        self.addApplicationsExtensions = function(){
        // FUNCTION addApplicationsExtensions( void ) void
        
            // add load json function
            textAnimation.loadJson = self.load;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.load = function( options ) {
        // FUNCTION: load( named array: options ) void
            
            // remember options
            self.options = options;
            
            // send request
            self.sendRequest( options['file'] );
            
        // DONE FUNCTION: load( named array: options ) void
        };
        self.sendRequest = function( file ) {
        // FUNCTION: sendRequest( string: file ) void
            
            // create request object
            let xObj = new XMLHttpRequest();
            
            // set mime type
            xObj.overrideMimeType( "application/json" );
            
            // get file
            xObj.open( 'GET', file, true );

            // catch result
            xObj.onreadystatechange = () => {
                
                // succes
                if ( xObj.readyState === 4 && xObj.status === 200 ) {
                
                    // ready
                    self.loadReady( xObj.responseText );

                    // done
                    return;
                }
                // succes
                
            };
            // catch result

            // make request
            xObj.send( null );
            
        // DONE FUNCTION: sendRequest( string: file ) void
        };
        self.loadReady = function( result ) {
        // FUNCTION: loadReady( string: result ) void
                        
            // get callback
            let callback = self.options['callback'];
            
            // unset options
            self.options = null;

            // get json
            let json = self.createJson( result );

            // create json
            if( json ){
                
                // call callback
                callback( json );
        
            }
            // create json
            
        // DONE FUNCTION: loadReady( string: result ) void
        };
        self.createJson = function( result ) {
        // FUNCTION: createJson( string: result ) boolean
            
            // create json
            let json = null;
            
            // try catch block
            try {

                // create json
                json = JSON.parse( result );
                
            } 
            catch (e) {
                
                // debug info
                self.debug( e.message );

                // return no result
                return null;
                
            }            
            // try catch block
            
            // return json
            return json;
            
        // DONE FUNCTION: createJson( string: result ) boolean
        };
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void
            
            // debug on
            if( self.debugOn ) {
                
                // call global debug
                textAnimation.debug( self.MODULE + ' ' + message );
                
            }
            // done debug on
            
        // DONE FUNCTION: debug( string: message ) void
        };
        
        // DONE FUNCTIONS

        // initialize the class 
        self.construct();
        // DONE PRIVATE
        
        // PUBLIC
        return {
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: setStyleModule( void ) void 
    
})( textAnimation );
// done create module function


