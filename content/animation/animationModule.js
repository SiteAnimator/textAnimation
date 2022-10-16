/*
        @package    SiteAnimator\Modules\Animations\TextAnimation
  
        file:       animationModule.js
        function:   creates the text animation.
  
        Last revision: 10-10-2022
 
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
        self.animations = textAnimation.animations;         // array
        self.elementOptions = {                             // named array 
            'element'               :   'div',              // html element type 
            'display'               :   'none',             // css
            'position'              :   'absolute',         // css
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array
        self.animationIndex = 0;                            // integer
        self.elements = {};                                 // named array
        self.repeatAnimationsOptions = {                    // named array
            'repeated'              :   0,                  // integer
        };                                                  // done named array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'content module construct' );
 
            // start
            self.start();
 
        // DONE FUNCTION: construct( void ) void
        };
        self.createElement = function() {
        // FUNCTION: createElement( void ) void

            // get current animation
            let animationOptions = self.animations[self.animationIndex]; 

            // get target
            let target = animationOptions['target']; 

            // create element
            self.elements[target] = self.elements[target] ?
                                    self.elements[target] :
                                    {};
            // create element
            
            // create element ! set
            if( !animationOptions['createElement'] ){
                
                // done 
                return;
                
            }
            // create element ! set

            // copy element options
            let elementOptions = textAnimation.extend( {}, self.elementOptions );

            // has specific options
            if( animationOptions['elementOptions'] ){
                
                // extend options
                elementOptions = textAnimation.extend( elementOptions, animationOptions['elementOptions'] );
                
            }
            // has specific options

            // set id
            elementOptions['id'] = textAnimation.getUiId( self.moduleName + target ); 
            
            // set text
            elementOptions['text'] = animationOptions['text']; 
            
            // create element
            textAnimation.appendContainer( self.parentId, elementOptions );

            // save element
            self.elements[target]['elementId'] = elementOptions['id'];
            
        // DONE FUNCTION: createElement( void ) void
        };
        self.removeElement = function( options ) {
        // FUNCTION: removeElement( named array: options ) void

            // ! remove element
            if( !options['removeElement'] ){

                // done
                return;
                
            }
            // ! remove element

            // get target
            let target = options['target']; 

            // get element
            let element = self.elements[target];
            
            // has animation
            if( element['animation'] ){

                // destroy animation
                element['animation'].destruct();
                
            }
            // has animation

            // remove html
            textAnimation.getElementById( element['elementId'] ).remove();
            
            // unset element
            delete self.elements[target];

        // DONE FUNCTION: removeElement( named array: options ) void
        };
        self.start = function() {
        // FUNCTION: start( void ) void
        
            // are all animations played
            if( self.areAllAnimationsPlayed() ){
                      
                // done
                return;
                
            }
            // are all animations played
            
            // create element
            self.createElement();

            // create animation
            let animation = self.createAnimation();

            // start animation
            animation.start( );

        // DONE FUNCTION: start( void ) void
        };
        self.createAnimation = function() {
        // FUNCTION: createAnimation( void ) module

            // get copy animation
            let animationOptions = textAnimation.extend( {}, self.animations[self.animationIndex] ); 

            // add index
            animationOptions['index'] = self.animationIndex;

            // add parent id
            animationOptions['parentId'] = self.parentId;

            // get target
            let target = animationOptions['target']; 

            // get element id
            let elementId = self.elements[target]['elementId']; 

            // remove animation
            self.removeAnimation( self.elements[target]['animation'] );

            // get animation module
            let animationModule = textAnimation.animations.text.textModule;

            // create callbacks
            var callbacks = {
                'trigger'  :   self.trigger,
                'ready'    :   self.ready
            };
            // create callbacks

            // create animation
            let animation = new animationModule( elementId,
                                                 animationOptions,
                                                 callbacks );
            // create animation
            
            // save animation
            self.elements[target]['animation'] = animation;

            // return result
            return animation;

        // DONE FUNCTION: createAnimation( void ) module
        };
        self.removeAnimation = function( animation ) {
        // FUNCTION: removeAnimation( module / null: animation ) void

            // animation ! exists
            if( !animation ){
                
                // done
                return;
                
            }
            // animation ! exists
            
            // destroy animation
            animation.destruct();

        // DONE FUNCTION: removeAnimation( module / null: animation ) void
        };
        self.trigger = function( options ) {
        // FUNCTION: trigger( named array: options ) void
         
            // debug info
            self.debug( 'trigger' );

            // show is set
            if( options['trigger']['show'] ){
                
                // show
                self.show( options );
         
            }
            // show is set
                    
            // play next exists and can play next
            if( options['trigger']['playNext'] &&
                self.triggerCanPlayNext( options ) ){
                
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
            self.saveValues( options );
            
            // remove element
            self.removeElement( options );
            
            // trigger exists and has play next and can play next
            if( options['trigger'] &&
                options['trigger']['playNext'] &&
                self.triggerCanPlayNext( options ) ){
                
                // done
                return;

            }
            // trigger exists and has play next and can play next

            // play next
            self.playNext();
            
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
            let nextAnimation = self.animations[options['index'] + 1];

            // ! same target
            if( nextAnimation['target'] !== options['target'] ){

                // return can play next
                return true;

            } 
            // ! same target
            
            // return ! can play next
            return false;

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
            
            // create element
            self.createElement();

            // create animation
            let animation = self.createAnimation();
            
            // set values
            self.setValues( animation );
            
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
            if( !textAnimation.repeatAnimations ){
                
                // done
                return;
                
            }
            // repeat animations ! set

            // get repeat
            let repeat = textAnimation.repeatAnimations['repeat'] ?
                         textAnimation.repeatAnimations['repeat'] :
                         0;
            // get repeat
            
            // get repeated
            let repeated = self.repeatAnimationsOptions['repeated'];
            
            // repeat ! forever or > repeated
            if( repeat !== 'forever' ||
                parseInt( repeat ) >= repeated ){
            
                // done
                return;
                
            }
            // repeat ! forever or > repeated
            
            // update repeated
            self.repeatAnimationsOptions['repeated']++;
            
            // get from
            let from = textAnimation.repeatAnimations['from'] ?
                       self.getAnimationIndexFromId( textAnimation.repeatAnimations['from'] ):
                       0;
            // get from
            
            // reset index
            self.animationIndex = from ?
                                  from :
                                  0;
            // reset index
            
            // create element
            self.createElement();

            // create animation
            let animation = self.createAnimation();

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
        self.show = function( options ) {
        // FUNCTION: show( named array: options ) void

            // target ! set
            if( !options['target'] ){
            
                // done
                return;
                
            }
            // target ! set
            
            // get target
            let target = options['target'];
            
            // get element id
            let elementId = self.elements[target]['elementId']; 

            // show text
            textAnimation.setStyle( elementId , 'display', 'table' ); 
         
        // DONE FUNCTION: show( named array: options ) void
        };
        self.saveValues = function( options ) {
        // FUNCTION: saveValues( named array: options ) void
            
            // get current animation
            let animationOptions = self.animations[options['index']]; 

            // get target
            let target = animationOptions['target'];

            // get element
            let element = self.elements[target];

            // get values
            let values = element['values'] ?
                         element['values'] :
                         {};
            // get values

            // get values
            element['values'] = textAnimation.extend( values, element['animation'].getValues() );
            
        // DONE FUNCTION: saveValues( named array: options ) void
        };
        self.setValues = function() {
        // FUNCTION: setValues( void ) void
            
            // get current animation
            let animationOptions = self.animations[self.animationIndex]; 

            // get target
            let target = animationOptions['target'];

            // get element
            let element = self.elements[target];

            // element['values'] ! set
            if( !element['values'] ){
                
                // done
                return;
                
            }
            // values ! set
            
            // set values
            element['animation'].setValues( element['values'] );

            // DONE FUNCTION: setValues( void ) void
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
            
            // loop over elements
            Object.entries( self.elements ).forEach( ( [key, element] ) => {

                // adjust element
                self.adjustElement( key, element );
                
            });
            // loop over elements
            
        // DONE FUNCTION: layoutChange( void ) void
        };
        self.adjustElement = function( key, element ) {
        // FUNCTION: adjustElement( string: key, named array: element ) void
            
            // no animation
            if( !element['animation'] ){
            
                // done
                return;
                
            }
            // no animation
            
            // call animation
            element['animation'].layoutChange();
            
        // DONE FUNCTION: adjustElement( string: key, named array: element ) void
        };
        self.removeAnimations = function() {
        // FUNCTION: removeAnimations( void ) void
            
            // loop over animation modules
            Object.entries( self.animationModules ).forEach( ( [key, module] ) => {

                // module exists
                if( module ){

                    // destroy module
                    module.destruct();
                    
                }
                // module exists
                
            });
            // loop over animation modules
                             
            // unset animation modules
            self.animationModules = null;
             
        // DONE FUNCTION: removeAnimations( void ) void
        };
        self.destruct = function() {
        // FUNCTION: destruct( void ) void
            
            // debug info
            self.debug( 'destruct' );

            // remove animations
            self.removeAnimations();

            // remove html
            self.removeHtml();

            // unset saved values
            self.savedValues = null;

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
