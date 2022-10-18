/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       extendModule.js
    function:   Adds the function:

                textAnimation.extend:  extends an array or object

                to the application

    Last revision: 17-10-2022

*/    

// create module function
( function( textAnimation ){
        
    // create name space
    textAnimation.service = textAnimation.service ? textAnimation.service : {};
            
    // MODULE: extendModule( void ) void
    textAnimation.service.extendModule = function( ) {
        // PRIVATE:

        // MEMBERS:
        var self = this;                                    // object
        self.debugOn = true;                               // boolean
        self.MODULE = 'ExtendModule';                       // string
        self.initial = null;                                // array / named array / null
        self.overRide = null;                               // array / named array / null
        self.result = null;                                 // array / named array / null
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
        
            // add extend function
            textAnimation.extend = self.extend;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.extend = function( initial, overRide ) {
        // FUNCTION: extend( named array / array: initial, named array / array: overRide ) named array / array / var

            // input ! valid
            if( !self.validateInput( initial, overRide ) ){
                
                // done
                return initial;
                
            }
            // input ! valid

            // extend
            self.createResult( initial, overRide );
            
            // return result
            return self.result;
            
        // DONE FUNCTION: extend( named array / array: initial, named array / array: overRide ) named array / array / var
        };
        self.validateInput = function( initial, overRide ) {
        // FUNCTION: validateInput( named array: initial, named array: overRide ) boolean

            // ! initial or ! over ride
            if( !initial || !overRide ){

                // debug info
                self.debug( 'invalid array extend.' );
            
                // invalid
                return false;
                
            }
            // ! initial or ! over ride
            
            // both objects
            if( typeof initial === 'object' &&
                typeof overRide === 'object' ){
            
                // valid
                return true;
                
            }    
            // both objects
            
            // both arrays
            if( Array.isArray( initial ) &&
                Array.isArray( overRide ) ){
            
                // valid
                return true;
                
            }    
            // both arrays
            
            // debug info
            self.debug( 'invalid array extend.' );
            
            // input invalid
            return false;

        // DONE FUNCTION: validateInput( named array: initial, named array: overRide ) boolean
        };
        self.createResult = function( initial, overRide ) {
        // FUNCTION: createResult named array: initial, named array: overRide ) void
        
            // is array
            if( Array.isArray( initial ) ){

                // copy array
                self.result = [[], ...initial, ...overRide];
                
                // done
                return;
                
            }
            // is array
            
            // is object
            if( typeof initial === 'object' ){
                
                // copy object
                self.result = { ...initial, ...overRide };
                
                // done
                return;
                
            }
            // is object
        
            // set result
            self.result = self.overRide;
        
        // DONE FUNCTION: createResult( named array: initial, named array: overRide ) void
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
    // DONE MODULE: extendModule( void ) void 
    
})( textAnimation );
// done create module function


