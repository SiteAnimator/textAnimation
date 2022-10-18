/*
    @package    SiteAnimator\Modules\Animations\TextAnimation

    file:       main.js
    function:   This file contains the main application module.  
                creates service modules
                handels start after page load
                
    Last revision: 17-10-2022
 
*/    

// create module function
( function( textAnimation ){
    
    // MODULE: mainModule( void ) named array 
    textAnimation.mainModule = function( ) {
    
        // PRIVATE:
        
        // MEMBERS
        var self = this;                        // object
        self.moduleName = 'mainModule';         // string
        self.modules = {};                      // named array
    
        self.start = function() {
        // FUNCTION: start( void ) void

            // create services
            self.createServices();

            // create content
            self.createContent();

        // DONE FUNCTION: start( void ) void
        };
        self.createServices = function() {
        // FUNCTION: createServices( void ) void

            // get debug options
            let debugOptions = textAnimation.options && textAnimation.options.debug ?
                               textAnimation.options.debug :
                               {};
            // get debug options

            // create debug module
            self.modules.debug = new textAnimation.service.debugModule( debugOptions );

            // create extend module
            self.modules.extend = new textAnimation.service.extendModule( );

            // create get ui id module
            self.modules.getUiId = new textAnimation.service.getUiIdModule( );

            // create set style module
            self.modules.setStyle = new textAnimation.service.setStyleModule( );
            
            // create html generator module
            self.modules.htmlGenerator = new textAnimation.service.htmlGeneratorModule( );

            // create get element module
            self.modules.getElement = new textAnimation.service.getElementModule( );
            
            // create event manager module
            self.modules.eventManager = new textAnimation.service.eventManagerModule( );

            // create animation services
            self.createAnimationServices();

        // DONE FUNCTION: createServices( void ) void
        };
        self.createAnimationServices = function() {
        // FUNCTION: createAnimationServices( void ) void

            // add name space
            self.modules.animations = {};

            // get player module
            let playerModule = textAnimation.service.animations.playerModule;

            // create player module
            self.modules.animations.player = new playerModule( );

        // DONE FUNCTION: createAnimationServices( void ) void
        };
        self.createContent = function() {
        // FUNCTION: createContent( void ) void

            // get content module
            let contentModule = textAnimation.content.contentModule;

            // create content module
            self.modules.content = new contentModule();

        // DONE FUNCTION: createContent( void ) void
        };

        // PUBLIC
        return {
            
            // FUNCTION: start( void ) void    
            start : function( ){
                
                // call internal
                self.start( );
                
            }
            
        };
        // DONE PUBLIC
                
    };
    // DONE MODULE: mainModule( named array: options ) void
    
})( textAnimation );
// done create module function
        
