/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       animationsModule.js
    function:   loads the animations.
                
  
    Last revision: 01-11-2022
 
*/

// create module function
( function( textAnimation ){
    
    // create name space
    textAnimation.animations = textAnimation.animations ? textAnimation.animations : {};
    
    // MODULE: animationsModule( void ) void 
    textAnimation.animations.animationsModule = function( ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'AnimationAnimationsModule';      // string
        self.debugOn = true;                                // boolean
        self.animations = [];                               // array
        self.fileIndex = 0;                                 // integer
        self.callback = null;                               // function / null
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            self.debug( 'module construct' );
 
        // DONE FUNCTION: construct( void ) void
        };
        self.load = function( callback ) {
        // FUNCTION: load( function: callback ) void

            // save callback
            self.callback = callback;

            // validate
            if( !self.validate() ){

                // done
                return;
                
            }
            // validate

            // load next
            self.loadNext();
 
        // DONE FUNCTION: load( function: callback ) void
        };
        self.loadNext = function() {
        // FUNCTION: preLoadNext( void ) void

            // get animation files 
            let animationFiles = textAnimation.animationOptions['files'];

            // create options
            let options = {
                'file'      :   animationFiles[self.fileIndex],
                'callback'  :   self.loaded
            };
            // create options
            
            // load json
            textAnimation.loadJson( options );

        // DONE FUNCTION: loadNext( void ) void
        };
        self.loaded = function( animations ) {
        // FUNCTION: loaded( array: animations ) void

            // save result
            self.animations = self.animations.concat( animations );
            
            // next file index
            self.fileIndex++;
            
            // get animation files 
            let animationFiles = textAnimation.animationOptions['files'];
            
            // all animations loaded
            if( self.fileIndex >= animationFiles.length ){
                
                // load ready
                self.loadReady();
                
                // done
                return;
                
            }
            // all animations loaded
 
            // load next
            self.loadNext();
 
        // DONE FUNCTION: loaded( array: animations ) void
        };
        self.loadReady = function() {
        // FUNCTION: loadReady( void ) void
 
            // debug info
            self.debug( 'loadReady' );

            // get callback
            let callback = self.callback;
            
            // unset callback
            self.callback = null;
            
            // call callback
            callback( self.animations );

        // DONE FUNCTION: loadReady( void ) void
        };
        self.validate = function() {
        // FUNCTION: validate( void ) boolean

            // animations ! set
            if( !textAnimation.animationOptions ||
                !textAnimation.animationOptions['files'] ||
                !textAnimation.animationOptions['files'].length ){
                
                // debug info
                self.debug( 'textAnimation.animationOptions files not set' );
                
                // return invalid
                return false;
                
            }
            // animations ! set

            // return valid
            return true;

        // DONE FUNCTION: validate( void ) boolean
        };
        self.destruct = function() {
        // FUNCTION: destruct( void ) void
            
            // debug info
            self.debug( 'destruct' );

            // unset callback
            self.callback = null;
            
            // unset animations
            self.animations = null;
            
        // DONE FUNCTION: destruct( void ) void
        };
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void
            
            // debug on
            if( self.debugOn ) {
                
                // debug
                textAnimation.debug( self.moduleName + ' ' + message );
                
            }
            // done debug on
            
        // DONE FUNCTION: debug( string: message ) void
        };
        
        // initialize the class 
        self.construct();
        // DONE PRIVATE
        
        // PUBLIC
        return {
            
            // FUNCTION: load( function: callback ) void
            load : function( callback ){
                
                // call internal
                self.load( callback );
                
            },
            // FUNCTION: destruct( void ) void    
            destruct : function( ){
                
                // call internal
                self.destruct( );
                
            }
            
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: animationsModule( void ) void 
    
})( textAnimation );
// done create module function
