/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       textModule.js
    function:   handels a text animation 

    Last revision: 17-10-2022

*/    

// create module function
( function( textAnimation ){
        
    // create name spaces
    textAnimation.animations = textAnimation.animations ? textAnimation.animations : {};
    textAnimation.animations.text = textAnimation.animations.text ? textAnimation.animations.text : {};
    // create name spaces    
    
    // MODULE: textModule( html element id: callerId, 
    //                     named array / undefined: options, 
    //                     named array / undefined: callbacks ) named array         
    textAnimation.animations.text.textModule = function( callerId,
                                                         options,
                                                         callbacks) {
        // PRIVATE:

        // MEMBERS:
        var self = this;                                    // object
        self.debugOn = true;                               // boolean
        self.MODULE = 'AnimationsTextModule';              // string
        self.callerId = callerId;                           // html element id
        self.options = options;                             // named array / undefined 
        self.callbacks = callbacks;                         // named array / undefined 
        self.animationOptions = {};                         // named array
        self.initialOptions = {                             // named array 
            'frameId'               :   null,               // boolean
            'ready'                 :   false               // boolean
        };                                                  // done named array  
        self.modules = {};                                  // named array                                                          
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // create values
            self.createValues();
                        
            // create animate
            self.createAnimate();
                        
        // DONE FUNCTION: construct( void ) void
        };
        self.createValues = function() {
        // FUNCTION: createValues( void ) void

            // get values module
            let valuesModule = textAnimation.animations.text.valuesModule;

            // create module
            self.modules['values'] = new valuesModule( self.callerId,
                                                       self.options );

        // DONE FUNCTION: createValues( void ) void
        };
        self.createAnimate = function() {
        // FUNCTION: createAnimate( void ) void

            // get animate module
            let animateModule = textAnimation.animations.text.animateModule;

            // create module
            self.modules['animate'] = new animateModule( self.callerId,
                                                         self.options );
            // create module

        // DONE FUNCTION: createAnimate( void ) void
        };
        self.startAnimation = function() {
        // FUNCTION: startAnimation( void ) void

            // get animation options
            let animationOptions = self.animationOptions;

            // set ! ready
            animationOptions['ready'] = false;

            // create options
            let options = {
                'frameDelay'    :   self.modules['values'].getStartDelay( ),
                'callback'      :   self.animate
            };
            // create options
        
            // add animation frame
            animationOptions['frameId'] = textAnimation.animations.addFrame( options );

        // DONE FUNCTION: startAnimation( void ) void
        };
        self.animate = function() {
        // FUNCTION: animate( void ) void

            // get animation options
            let animationOptions = self.animationOptions;

            // unset frame id
            self.animationOptions['frameId'] = null;

            // play animation
            self.playAnimation();
            
            // animation ! ready
            if( !animationOptions['ready'] ){

                // get direction
                let direction = animationOptions['direction'];

                // create options
                let options = {
                    'frameDelay'    :   self.modules['values'].getDelay( direction ),
                    'callback'      :   self.animate
                };
                // create options

                // add animation frame
                animationOptions['frameId'] = textAnimation.animations.addFrame( options );

            }
            // animation ! ready
            
        // DONE FUNCTION: animate( void ) void
        };
        self.playAnimation = function() {
        // FUNCTION: playAnimation( void ) void

            // get animation options
            let animationOptions = self.animationOptions;

            // update values
            self.modules['values'].updateValues( );
                
            // animate caller
            self.animateCaller();
            
            // check trigger
            self.checkTrigger( );
            
            // ! ready
            if( !self.modules['values'].isReady( ) ){

                // done
                return;
                
            }
            // ! ready
            
            // set ready
            animationOptions['ready'] = true;

            // ready
            self.ready();
                
        // DONE FUNCTION: animateShow( void ) void
        };
        self.animateCaller = function() {
        // FUNCTION: animateCaller( void ) void
            
            // get values
            let values = self.modules['values'].getValues( );
            
            // call animate
            self.modules.animate.animate( values );
            
        // DONE FUNCTION: animateCaller( void ) void
        };
        self.checkTrigger = function() {
        // FUNCTION: checkTrigger( void ) void
            
            // trigger reached
            if( self.modules['values'].triggerReached( ) ){

                // call callback
                self.callbacks['trigger']( self.options );
                
            }
            // trigger reached

        // DONE FUNCTION: checkTrigger( void ) void
        };
        self.ready = function( ) {
        // FUNCTION: ready( void ) void
   
           // call callback
            self.callbacks['ready']( self.options );
                                
        // DONE FUNCTION: ready( void ) void
        };
        self.removeModules = function() {
        // FUNCTION: removeModules( void ) void
            
            // loop over modules
            Object.entries( self.modules ).forEach( ( [key, module] ) => {

                // destroy module
                module.destruct( );

            });
            // loop over modules
            
            // reset modules
            self.modules = {};
            
        // DONE FUNCTION: removeModules( void ) void
        };
        self.start = function( ) {
        // FUNCTION: start( void ) void

            // stop 
            self.stop();
            
            // start animation
            self.startAnimation();
            
        // DONE FUNCTION: start( void ) void
        };
        self.isPlaying = function( ) {
        // FUNCTION: isPlaying( void ) boolean

            // get animation options
            let animationOptions = self.animationOptions;

            // animation ready
            if( animationOptions['ready'] ){
            
                // return ! ready
                return false;

            }
            // animation ready
            
            // return ready
            return true;

        // DONE FUNCTION: isPlaying( void ) boolean
        };
        self.stop = function() {
        // FUNCTION: stop( void ) void

            // get animation options
            let animationOptions = self.animationOptions;

            // frame exists
            if( animationOptions['frameId'] !== null ){

                // remove frame
                textAnimation.animations.removeFrame( animationOptions['frameId'] );
                
                // unset frame id
                animationOptions['frameId'] = null;

            }
            // frame exists
            
        // DONE FUNCTION: stop( void ) void
        };
        self.layoutChange = function( ) {
        // FUNCTION: layoutChange( void ) void

            // get values
            let values = self.modules['values'].getValues( );
            
            // call animate
            self.modules.animate.animate( values );
                            
        // DONE FUNCTION: layoutChange( void ) void
        };
        self.destruct = function() {
        // FUNCTION: destruct( void ) void
            
            // stop 
            self.stop();
            
            // remove modules
            self.removeModules();
            
            // unset options
            self.options = null;
        
            // unset callbacks
            self.callbacks = null;
            
        // DONE FUNCTION: destruct( void ) void
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

            // FUNCTION: start( void ) void    
            start : function( ){
                
                // call internal
                self.start( );
                
            },
             // FUNCTION: isPlaying( void ) boolean    
            isPlaying : function( ){
                
                // return internal call
                return self.isPlaying( );
                
            },
            // FUNCTION: stop( void ) void    
            stop : function( ){
                
                // call internal
                self.stop( );
                
            },
            // FUNCTION: getValues( ) named array
            getValues : function( ){
                
                // return values call
                return self.modules.values.getValues( );
                
            },
            // FUNCTION: setValues( named array: values ) void    
            setValues : function( values ){
                
                // call values
                self.modules.values.setValues( values );
                
            },
            // FUNCTION: layoutChange( void ) void    
            layoutChange : function( ){
                
                // call internal
                self.layoutChange( );
                
            },
            // FUNCTION: destruct( void ) void    
            destruct : function( ){
                
                // call internal
                self.destruct( );
                
            }
            
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: textModule( html element id: callerId, 
    //                          named array / undefined: options, 
    //                          named array / undefined: callbacks ) named array 
    
})( textAnimation );
// done create module function


