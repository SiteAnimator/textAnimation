/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       getUiIdModule.js
    function:   Adds the function: 

                textAnimation.getUniqueId: generates an unique id from a string.

                to the application

    Last revision: 08-11-2022
 
*/    

// create module function
( function( textAnimation ){
        
    // create name space
    textAnimation.service = textAnimation.service ? textAnimation.service : {};
            
    // MODULE: getUiIdModule( void ) void
    textAnimation.service.getUiIdModule = function( ) {
        // PRIVATE:

        // MEMBERS:
        var self = this;                                    // object
        self.debugOn = false;                               // boolean
        self.MODULE = 'GetUiIdModule';                      // string
        self.index = null;                                  // integer / null
        self.hideNames = false;                              // boolean
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // create buffer
            var array = new Uint32Array(10);
            
            // create random values 
            window.crypto.getRandomValues( array );
            
            // get random id
            var id = Math.floor( Math.random() * 10 );
            
            // set initial index
            self.index = array[id] % 1024;
            
            // add the extensions to the application
            self.addApplicationsExtensions();
            
        // DONE FUNCTION: construct( void ) void
        };
        self.addApplicationsExtensions = function(){
        // FUNCTION addApplicationsExtensions( void ) void
        
            // add get ui id function
            textAnimation.getUiId = self.getId;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.getId = function( name ) {
        // FUNCTION: getId( string: name ) string
            
            // hide id / else
            if( self.hideNames ){
                
                // return and increment
                return 'element_' + self.index++;
                
            }
            else {
                
                // return and increment
                return name + '_' + self.index++;

            }
            // hide id / else
            
        // DONE FUNCTION: getId( string: name ) string
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
    // DONE MODULE: getUiIdModule( void ) void 
    
})( textAnimation );
// done create module function


