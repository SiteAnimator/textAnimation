/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       setStyleModule.js
    function:   Adds the function:
                
                textAnimation.setStyle: sets the a style of an element

                to the application

    Last revision: 17-10-2022
 
*/    

// create module function
( function( textAnimation ){
        
    // create name space
    textAnimation.service = textAnimation.service ? textAnimation.service : {};
            
    // MODULE: setStyleModule( void ) void
    textAnimation.service.setStyleModule = function( ) {
        // PRIVATE:

        // MEMBERS:
        var self = this;                                    // object
        self.debugOn = false;                               // boolean
        self.MODULE = 'SetStyleModule';                     // string
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
        
            // add get ui id function
            textAnimation.setStyle = self.setStyle;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.setStyle = function( elementId, style, value ) {
        // FUNCTION: setStyle( html element id: elementId, string: style, var value ) void
            
            // set style
            textAnimation.getElementById( elementId ).style[style] = value;
            
        // DONE FUNCTION: setStyle( html element id: elementId, string: style ) void
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


