/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       getElementModule.js
    function:   Adds the function:
    
                textAnimation.getElement: tries to get the element from given id 
                
                to the application

    Last revision: 08-11-2022
 
*/    

// create module function
( function( textAnimation ){
        
    // create name space
    textAnimation.service = textAnimation.service ? textAnimation.service : {};
            
    // MODULE: getElementModule( void ) void
    textAnimation.service.getElementModule = function( ) {
        // PRIVATE:

        // MEMBERS:
        let self = this;                                    // object
        self.debugOn = false;                               // boolean
        self.MODULE = 'GetElementModule';                   // string
        self.index = null;                                  // integer / null
        self.hideNames = true;                              // boolean
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
        
            // add get element function
            textAnimation.getElementById = self.getById;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.getById = function( id ) {
        // FUNCTION: getById( string: id ) html element / null
            
            // get the element
            return document.getElementById( id );
            
        // DONE FUNCTION: getById( string: id ) html element / null
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
    // DONE MODULE: getElementModule( void ) void 
    
})( textAnimation );
// done create module function


