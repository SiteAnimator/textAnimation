/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       elementsModule.js
    function:   creates and removes html elements 
                and attaches animations to the elements. 
  
    Last revision: 01-11-2022
 
*/

// create module function
( function( textAnimation ){
    
    // MODULE: elementsModule( html element id: parentId,
    //                         named array: callbacks ) named array
    textAnimation.content.animation.elementsModule = function( parentId, callbacks ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'AnimationElementsModule';        // string
        self.debugOn = true;                                // boolean
        self.parentId = parentId;                           // html element id
        self.callbacks = callbacks;                         // named array
        self.containerOptions = {                           // named array 
            'element'               :   'div',              // html element type 
            'display'               :   'none',             // css
            'position'              :   'absolute',         // css
            'backgroundColor'       :   'transparent',      // css
        };                                                  // done named array
        self.elements = {};                                 // named array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // debug
            self.debug( 'module construct' );
 
        // DONE FUNCTION: construct( void ) void
        };
        self.createElement = function( options ) {
        // FUNCTION: createElement( named array: options ) void

            // create element ! set
            if( !options['createElement'] ){
                
                // done 
                return;
                
            }
            // create element ! set

            // target ! set
            if( !options['target'] ){
                
                // debug info
                self.debug( 'create element error target ! set.' );
                
                // done 
                return;
                
            }
            // target ! valid

            // get target
            let target = options['target'];

            // create element
            self.elements[target] = self.elements[target] ?
                                    self.elements[target] :
                                    {};
            // create element
            
            // get element
            let element = self.elements[target];

            // container exists
            if( textAnimation.getElementById( element['containerId'] ) ){

                // done
                return;

            }
            // container exists

            // create container
            element['containerId'] = self.createContainer( target, options );
                        
        // DONE FUNCTION: createElement( named array: options ) void
        };
        self.createContainer = function( target, options ) {
        // FUNCTION: createContainer( string: target, named array: options ) html element id

            // copy container options
            let containerOptions = textAnimation.extend( {}, self.containerOptions );

            // has specific options
            if( options['containerOptions'] ){
                
                // extend options
                containerOptions = textAnimation.extend( containerOptions, options['containerOptions'] );
                
            }
            // has specific options

            // set id
            containerOptions['id'] = textAnimation.getUiId( self.moduleName + 'Container' + target ); 
            
            // create html
            textAnimation.appendContainer( self.parentId, containerOptions );

            // return container id
            return containerOptions['id'];
            
        // DONE FUNCTION: createContainer( string: target, named array: options ) html element id
        };
        self.removeElement = function( options ) {
        // FUNCTION: removeElement( named array: options ) void

            // ! remove element
            if( !options['removeElement'] ){

                // done
                return;
                
            }
            // ! remove element

            // target ! valid
            if( !self.validateTargetElement( 'remove element', options ) ){
                
                // done 
                return;
                
            }
            // target ! valid

            // get target
            let target = options['target'];

            // get element
            let element = self.elements[target];
        
            // remove html
            self.removeHtml( element );
            
            // has animation
            if( element['animation'] ){

                // destroy animation
                element['animation'].destruct();
                
            }
            // has animation

            // unset element
            delete self.elements[target];

        // DONE FUNCTION: removeElement( named array: options ) void
        };
        self.removeHtml = function( element ) {
        // FUNCTION: removeHtml( named array: element ) void

            // container exists
            if( textAnimation.getElementById( element['containerId'] ) ){

                // remove container
                textAnimation.getElementById( element['containerId'] ).remove();

            }
            // container exists
                
        // DONE FUNCTION: removeHtml( named array: element ) void
        };
        self.createAnimation = function( options ) {
        // FUNCTION: createAnimation( named array: options ) module

            // target ! valid
            if( !self.validateTargetElement( 'create animation', options ) ){
                
                // return create failed
                return null;
                
            }
            // target ! valid

            // get target
            let target = options['target'];

            // remove animation
            self.removeAnimation( target );

            // get element
            let element = self.elements[target];

            // get animation module
            let animationModule = textAnimation.animations.text.textModule;

            // create callbacks
            var callbacks = {
                'trigger'  :   self.callbacks['trigger'],
                'ready'    :   self.callbacks['ready']
            };
            // create callbacks

            // add parent id
            options['parentId'] = self.parentId;

            // add container id
            options['containerId'] = element['containerId'];

            // set ! triggered
            options['triggered'] = false;

            // create animation
            let animation = new animationModule( options,
                                                 callbacks );
            // create animation
            
            // save animation
            element['animation'] = animation;

            // return result
            return animation;

        // DONE FUNCTION: createAnimation( void ) module
        };
        self.animationIsPlaying = function( options ) {
        // FUNCTION: animationIsPlaying( named array: options ) boolean

            // get target
            let target = options['target'];
            
            // target ! exists
            if( !target ||
                !self.elements[target] ){
                
                // return ! playing
                return false;
                
            }
            // target ! exists
            
            // get animation
            let animation = self.elements[target]['animation'];
            
            // animation ! exists
            if( !animation ){
                
                // return ! playing
                return false;
                
            }
            // animation ! exists
            
            // return result
            return animation.isPlaying();

        // DONE FUNCTION: animationIsPlaying( named array: options ) boolean
        };
        self.allAnimationsPlayed = function( ) {
        // FUNCTION: allAnimationsPlayed( void ) boolean

            // create all animation played
            let allAnimationsPlayed = true;

            // loop over elements
            Object.entries( self.elements ).forEach( ( [key, element] ) => {

                // animation ! exists or ! playing 
                if( element['animation'] &&
                    element['animation'].isPlaying() ){

                    // set ! all animation played
                    allAnimationsPlayed = false;
                    
                }
                // animation ! exists or ! playing 
                
            });
            // loop over animation modules

            // return result
            return allAnimationsPlayed;
            
        // DONE FUNCTION: allAnimationsPlayed( void ) boolean
        };
        self.removeAnimation = function( target ) {
        // FUNCTION: removeAnimation( string: target ) void

            // get animation
            let animation = self.elements[target]['animation'];
            
            // animation ! exists
            if( !animation ){
                
                // done
                return;
                
            }
            // animation ! exists
            
            // destroy animation
            animation.destruct();
            
            // unset animation
            delete self.elements[target]['animation'];

        // DONE FUNCTION: removeAnimation( string: target ) void
        };
        self.validateTargetElement = function( caller, options ) {
        // FUNCTION: validateTargetElement( string: caller, named array: options ) boolean

            // element exists
            if( self.elements[options['target']] ){
                
                // return valid
                return true;
                
            }
            // element exists

            // debug info
            self.debug( caller + 'element ! found target: ' + options['target'] );
                
            // return ! valid
            return false;

        // DONE FUNCTION: validateTargetElement( string: caller, options ) boolean
        };
        self.show = function( options ) {
        // FUNCTION: show( named array: options ) void

            // target ! valid
            if( !self.validateTargetElement( 'show', options ) ){
                
                // done 
                return;
                
            }
            // target ! valid

            // get target
            let target = options['target'];

            // get container id
            let containerId = self.elements[target]['containerId']; 

            // show text
            textAnimation.setStyle( containerId , 'display', 'table' ); 
         
        // DONE FUNCTION: show( named array: options ) void
        };
        self.saveValues = function( options ) {
        // FUNCTION: saveValues( named array: options ) void
            
            // get target
            let target = options['target'];

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
        self.setValues = function( options ) {
        // FUNCTION: setValues( named array: options ) void

            // target ! valid
            if( !self.validateTargetElement( 'setValues', options ) ){
                
                // done 
                return;
                
            }
            // target ! valid
            
            // get target
            let target = options['target'];

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

        // DONE FUNCTION: setValues( named array: options ) void
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
            
            // loop over elements
            Object.entries( self.elements ).forEach( ( [key, element] ) => {

                // animation exists
                if( element['animation'] ){

                    // destroy animation
                    element['animation'].destruct();
                    
                    // unset entry
                    delete element['animation'];
                    
                }
                // module exists
                
            });
            // loop over animation modules
                             
        // DONE FUNCTION: removeAnimations( void ) void
        };
        self.removeElements = function() {
        // FUNCTION: removeElements( void ) void
            
            // loop over elements
            Object.entries( self.elements ).forEach( ( [key, element] ) => {

                // container exists
                if( textAnimation.getElementById( element['containerId'] ) ){
                    
                    // remove container
                    textAnimation.getElementById( element['containerId'] ).remove();

                }
                // container exists

            });
            // loop over elements
                             
            // unset elements
            self.elements = null;
                
        // DONE FUNCTION: removeElements( void ) void
        };
        self.destruct = function() {
        // FUNCTION: destruct( void ) void
            
            // debug info
            self.debug( 'destruct' );

            // remove animations
            self.removeAnimations();

            // remove elements
            self.removeElements();

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
            
            // FUNCTION: createElement( named arrray: options ) void    
            createElement : function( options ){
                
                // call internal
                self.createElement( options );
                
            },
            // FUNCTION: removeElement( named arrray: options ) void    
            removeElement : function( options ){
                
                // call internal
                self.removeElement( options );
                
            },
            // FUNCTION: createAnimation( named arrray: options ) module    
            createAnimation : function( options ){
                
                // return internal call
                return self.createAnimation( options );
                
            },
            // FUNCTION: animationIsPlaying( named arrray: options ) boolean
            animationIsPlaying : function( options ){
                
                // return internal call
                return self.animationIsPlaying( options );
                
            },
            // FUNCTION: allAnimationsPlayed( void ) boolean
            allAnimationsPlayed : function( ){
                
                // return internal call
                return self.allAnimationsPlayed( );
                
            },
            // FUNCTION: saveValues( named arrray: options ) void    
            saveValues : function( options ){
                
                // call internal
                self.saveValues( options );
                
            },
            // FUNCTION: setValues( named arrray: options ) void    
            setValues : function( options ){
                
                // call internal
                self.setValues( options );
                
            },
            // FUNCTION: show( named arrray: options ) void    
            show : function( options ){
                
                // call internal
                self.show( options );
                
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
    // DONE MODULE: elementsModule( html element id: parentId,
    //                              named array: callbacks ) named array 
    
})( textAnimation );
// done create module function
