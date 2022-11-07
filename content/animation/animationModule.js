/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       animationModule.js
    function:   plays the animations.
                Creates and removes elements.
  
    Last revision: 17-10-2022
 
*/

// create module function
( function( textAnimation ){
    
    // create name space
    textAnimation.content.animation = textAnimation.content.animation ? textAnimation.content.animation : {};
    
    // MODULE: animationModule( html element id: parentId ) void 
    textAnimation.content.animation.animationModule = function( parentId ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'ContentAnimationModule';         // string
        self.debugOn = true;                                // boolean
        self.parentId = parentId;                           // html element id
        self.animations = null;                             // array / null
        self.animationIndex = 0;                            // integer
        self.repeatOptions = {                              // named array
            'repeated'              :   0,                  // integer
        };                                                  // done named array
        self.modules = {};                                  // named array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            self.debug( 'module construct' );
 
            // create animations
            self.createAnimations();
 
            // create elements
            self.createElements();
 
            // load animations
            self.modules['animations'].load( self.start );
            
        // DONE FUNCTION: construct( void ) void
        };
        self.createAnimations = function() {
        // FUNCTION: createAnimations( void ) void

            // get animations module
            let animationsModule = textAnimation.animations.animationsModule;
            
            // create animations module
            self.modules['animations'] = new animationsModule( );

        // DONE FUNCTION: createAnimations( void ) void
        };
        self.createElements = function() {
        // FUNCTION: createElements( void ) void

            // create callbacks
            var callbacks = {
                'trigger'  :   self.trigger,
                'ready'    :   self.ready
            };
            // create callbacks

            // get elements module
            let elementsModule = textAnimation.content.animation.elementsModule;
            
            // create elements module
            self.modules['elements'] = new elementsModule( self.parentId,
                                                           callbacks );
            // create elements module

        // DONE FUNCTION: createElements( void ) void
        };
        self.start = function( animations ) {
        // FUNCTION: start( named array: animations ) void
 
            // set animations
            self.animations = animations;
 
            // get current animation
            let animationOptions = self.animations[self.animationIndex]; 

            // set index
            animationOptions['index'] = self.animationIndex;

            // create element
            self.modules['elements'].createElement( animationOptions );
            
            // create animation
            let animation = self.modules['elements'].createAnimation( animationOptions );

            // create failed
            if( !animation ){

                // done
                return;
                
            }
            // create failed

            // start animation
            animation.start( );

        // DONE FUNCTION: start( named array: animations ) void
        };
        self.trigger = function( options ) {
        // FUNCTION: trigger( named array: options ) void
         
            // debug info
            self.debug( 'trigger' );

            // show is set
            if( options['trigger']['show'] ){
                
                // show
                self.modules['elements'].show( options );
         
            }
            // show is set
                    
            // play next exists and can play next
            if( options['trigger']['playNext'] &&
                self.triggerCanPlayNext( options ) ){
                
                // set triggered
                options['triggered'] = true;
                
                // play next
                self.playNext();
                
            }
            // play next exists and can play next
         
        // DONE FUNCTION: trigger( named array: options ) void
        };
        self.ready = function( options ) {
        // FUNCTION: ready( named array: options ) void
         
            // debug info
            self.debug( 'ready' );
         
            // save values
            self.modules['elements'].saveValues( options );
            
            // remove element
            self.modules['elements'].removeElement( options );
            
            // was triggered
            if( options['triggered'] &&
                !self.modules.elements.allAnimationsPlayed() ){
                
                // done
                return;

            }
            // was triggered

            // play next is set
            if( options['playNext'] ){
                
                // play next
                self.playNext();
            
                // done
                return;

            }
            // play next is set

            // all playing animations played
            if( self.modules.elements.allAnimationsPlayed() ){
                
                // play next
                self.playNext();
            
            }
            // all playing animations played

        // DONE FUNCTION: ready( named array: options ) void
        };
        self.triggerCanPlayNext = function( options ) {
        // FUNCTION: triggerCanPlayNext( named array: options ) boolean

            // next index out of animations 
            if( options['index'] + 1 >= self.animations.length ){

                // return ! can play next
                return false;

            } 
            // next index out of animations 

            // get next animation
            let animationOptions = self.animations[options['index'] + 1]; 

            // target animation is playing
            if( self.modules['elements'].animationIsPlaying( animationOptions ) ){

                // return ! can play next
                return false;

            } 
            // ! same target
            
            // return can play next
            return true;

        // DONE FUNCTION: triggerCanPlayNext( named array: options ) boolean
        };
        self.playNext = function() {
        // FUNCTION: playNext( void ) void
            
            // get next animation index
            self.getNextAnimationIndex();
            
            // all animations played
            if( self.areAllAnimationsPlayed() ){
                               
                // repeat animations
                self.repeatAnimations();
                
                // done
                return;
                
            }
            // all animations played
            
            // get current animation
            let animationOptions = self.animations[self.animationIndex]; 

            // set index
            animationOptions['index'] = self.animationIndex;

            // call elements
            self.modules['elements'].createElement( animationOptions );
            
            // create animation
            let animation = self.modules['elements'].createAnimation( animationOptions );

            // create failed
            if( !animation ){

                // done
                return;
                
            }
            // create failed

            // set values
            self.modules['elements'].setValues( animationOptions );
            
            // start animation
            animation.start( );
            
        // DONE FUNCTION: playNext( void ) void
        };
        self.getNextAnimationIndex = function() {
        // FUNCTION: getNextAnimationIndex( void ) void
                        
            self.animationIndex++;
            
        // DONE FUNCTION: getNextAnimationIndex( void ) void
        };
        self.repeatAnimations = function() {
        // FUNCTION: repeatAnimations( void ) void
            
            // repeat animations ! set
            if( !textAnimation.animationOptions ||
                !textAnimation.animationOptions['repeatOptions'] ){
                
                // done
                return;
                
            }
            // repeat animations ! set

            // get repeat options
            let repeatOptions = textAnimation.animationOptions['repeatOptions'];

            // get repeat
            let repeat = repeatOptions['repeat'] ?
                         repeatOptions['repeat'] :
                         0;
            // get repeat
            
            // get repeated
            let repeated = self.repeatOptions['repeated'];
            
            // repeat ! forever or > repeated
            if( repeat !== 'forever' ||
                parseInt( repeat ) >= repeated ){
            
                // done
                return;
                
            }
            // repeat ! forever or > repeated
            
            // update repeated
            self.repeatOptions['repeated']++;
            
            // get from
            let from = repeatOptions['from'] ?
                       self.getAnimationIndexFromId( repeatOptions['from'] ):
                       0;
            // get from
            
            // reset index
            self.animationIndex = from ?
                                  from :
                                  0;
            // reset index
            
            // get current animation
            let animationOptions = self.animations[self.animationIndex]; 

            // set index
            animationOptions['index'] = self.animationIndex;

            // create element
            self.modules['elements'].createElement( animationOptions );
            
            // create animation
            let animation = self.modules['elements'].createAnimation( animationOptions );

            // start animation
            animation.start( );

        // DONE FUNCTION: repeatAnimations( void ) void
        };
        self.getAnimationIndexFromId = function( id ) {
        // FUNCTION: getAnimationIndexFromId( string: id ) integer / null

            // loop over animations
            for( let i = 0; i < self.animations.length; i++ ){

                // id is animation id
                if( id === self.animations[i]['id'] ){
  
                    // return resutl
                    return i;
                    
                }
                // id is animation id
                
            }
            // loop over animations

            // ! found
            return null;
            
        // DONE FUNCTION: getAnimationIndexFromId( string: id ) integer / null
        };
        self.areAllAnimationsPlayed = function() {
        // FUNCTION: areAllAnimationsPlayed( void ) boolean
           
            // animation index within animations
            if( self.animationIndex < self.animations.length ){
                
                // return ! ready
                return false;
                
            }
            // animation index within animations
            
            // debug info
            self.debug( 'All animations played' );
            
            // return animations ready
            return true;
            
        // DONE FUNCTION: areAllAnimationsPlayed( void ) boolean
        };
        self.layoutChange = function() {
        // FUNCTION: layoutChange( void ) void
            
            // call alements
            self.modules['elements'].layoutChange(  );
            
        // DONE FUNCTION: layoutChange( void ) void
        };
        self.destruct = function() {
        // FUNCTION: destruct( void ) void
            
            // debug info
            self.debug( 'destruct' );

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
    // DONE MODULE: animationModule( html element id: parentId ) void 
    
})( textAnimation );
// done create module function
