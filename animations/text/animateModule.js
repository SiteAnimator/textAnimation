/*
    @package    SiteAnimator\Modules\Animations\TextAnimation

    file:       animateModule.js
    function:   handels animate of a text animation 

    Last revision: 26-09-2022
 
*/    

// create module function
( function( textAnimation ){
        
   // MODULE: animateModule( html element id: callerId, 
    //                       named array / undefined: options ) named array
        
    textAnimation.animations.text.animateModule = function( callerId,
                                                            options ) {
        // PRIVATE:

        // MEMBERS:
        var self = this;                                    // object
        self.debugOn = true;                               // boolean
        self.MODULE = 'AnimationsTextAnimateModule';        // string
        self.callerId = callerId;                           // html element id
        self.options = options;                             // named array / undefined 
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
        // DONE FUNCTION: construct( void ) void
        };
        self.animate = function( values ) {
        // FUNCTION: animate( named array: values ) void
            
            // element ! exists
            if( !document.getElementById( self.callerId ) ){
                
                // debug info
                self.debug( 'animate: element ! found' + self.options['target'] );
                
                // done
                return;
                
            }
            // element ! exists
            
            // animate font size
            self.animateFontSize( values );
            
            // animate opacity
            self.animateOpacity( values );
            
            // animate rgb
            self.animateRgb( values );
            
            // animate transform
            self.animateTransform( values );
            
        // DONE FUNCTION: animate( named array: values ) void
        };
        self.animateFontSize = function( values ) {
        // FUNCTION: animateFontSize( named array: values ) void
            
            // font size ! exists
            if( !values['fontSize'] ){

                // done
                return;
                
            }
            // font size ! exists

            // get units
            let units = values['fontSize']['units'] ?
                        values['fontSize']['units'] :
                        'px';        

            // set font size
            textAnimation.setStyle( self.callerId, 'font-size', parseInt( values['fontSize']['value'] ) + units ); 
                
        // DONE FUNCTION: animateOpacity( named array: values ) void
        };
        self.animateOpacity = function( values ) {
        // FUNCTION: animateOpacity( named array: values ) void
            
            // opacity ! exists
            if( !values['opacity'] ){

                // done
                return;
                
            }
            // opacity ! exists

            // set opacity
            textAnimation.setStyle( self.callerId , 'opacity', values['opacity']['value'] ); 
                
        // DONE FUNCTION: animateOpacity( named array: values ) void
        };
        self.animateRgb = function( values ) {
        // FUNCTION: animateRgb( named array: values ) void

            // rgb ! exists
            if( !values['colorR'] || !values['colorG'] || !values['colorB'] ){

                // done
                return;
                
            }
            // rgb ! exists
            
            // create color
            let color = 'rgb(' +
                        values['colorR']['value'] + ',' +
                        values['colorG']['value'] + ',' +
                        values['colorB']['value'] + ')';
            // create color
            
            // set color
            textAnimation.setStyle( self.callerId , 'color', color ); 
            
        // DONE FUNCTION: animateRgb( named array: values ) void
        };
        self.animateTransform = function( values ) {
        // FUNCTION: animateTransform( named array: values ) void

            // create transform
            let transform = '';
                
            
            // left exists
            if( values['left'] ){
                
                // add translate x
                transform += 'translateX( ' + 
                                parseInt( values['left']['value'] ) + 'px' +
                             ') ';
                // add translate x
                
            }
            // left exists
            
            // top exists
            if( values['top'] ){
                
                // add translate y
                transform += 'translateY( ' + 
                                parseInt( values['top']['value'] ) + 'px' +
                             ') ';
                // add translate y
                
            }
            // top exists

            // animate parent based transforms
            transform += self.animateParentBasedTransform( values );
            
            // scale exists
            if( values['scale'] ){
                
                // add scale
                transform += 'scale( ' + 
                                values['scale']['value'] +
                             ') ';
                // add scale
                
            }
            // scale exists
            
            // scale X exists
            if( values['scaleX'] ){
                
                // add scale
                transform += 'scaleX( ' + 
                                values['scaleX']['value'] +
                             ') ';
                // add scale X
                
            }
            // scale X exists
            
            // scale Y exists
            if( values['scaleY'] ){
                
                // add scale
                transform += 'scaleY( ' + 
                                values['scaleY']['value'] +
                             ') ';
                // add scale Y
                
            }
            // scale Y exists
                
            // rotate exists
            if( values['rotate'] ){
                
                // add rotate
                transform += 'rotate( ' + 
                                parseInt( values['rotate']['value'] ) +
                             'deg ) ';
                // add rotate
                
            }
            // rotate exists
            
            // transform found 
            if( transform !== '' ){
                
                textAnimation.setStyle( self.callerId , 'transform', transform ); 
                
            } 
            // transform found 

        // DONE FUNCTION: animateTransform( named array: values ) void
        };
        self.animateParentBasedTransform = function( values ) {
        // FUNCTION: animateParentBasedTransform( named array: values ) void

            // create transform
            let transform = '';
                
            // parent left ! exists and parent top ! exists
            if( !values['parentLeft'] && 
                !values['parentTop'] ){
                
                // done
                return;
                
            }   
            // parent left ! exists and parent top ! exists
            
            // get parent layout
            let parentLayout = textAnimation.getElementById( self.options['parentId'] ).getBoundingClientRect();
                
            // parent left exists    
            if( values['parentLeft'] ){

                // caculate left
                let left = ( parentLayout['width'] / 100 ) * values['parentLeft']['value'];        
               
                // get position
                let leftPosition = values['parentLeft']['position'] ?
                                   values['parentLeft']['position'] :
                                   'left';        
                
                // position is middle
                if( leftPosition === 'middle' ){
                    
                    // subtract half width
                    left -= textAnimation.getElementById( self.callerId ).offsetWidth / 2;
                    
                }
                // position is middle
                
                // position is right
                if( leftPosition === 'right' ){
                    
                    // subtract width
                    left -= textAnimation.getElementById( self.callerId ).offsetWidth;
                    
                }
                // position is right
                
                // get offset
                let offsetX = values['parentLeft']['offset'] &&
                              values['parentLeft']['offset'] ?
                              values['parentLeft']['offset'] :
                              0;        
                // get offset

                // add offset
                left += offsetX;
                
                // add translate x
                transform += 'translateX( ' + 
                                parseInt( left ) + 'px' +
                             ') ';
                // add translate x


            }
            // parent left exists    
                
            // parent top exists    
            if( values['parentTop'] ){

                // caculate top
                let top = ( parentLayout['height'] / 100 ) * values['parentTop']['value'];        
                
                // get position
                let topPosition = values['parentTop']['position'] ?
                                  values['parentTop']['position'] :
                                  'top';        
                
                // position is middle
                if( topPosition === 'middle' ){
                    
                    // subtract half height
                    top -= textAnimation.getElementById( self.callerId ).offsetHeight / 2;
                    
                }
                // position is middle
                
                // position is bottom
                if( topPosition === 'bottom' ){
                    
                    // subtract height
                    top -= textAnimation.getElementById( self.callerId ).offsetHeight;
                    
                }
                // position is bottom
                
                // get offset
                let offsetY = values['parentTop']['offset'] ?
                              values['parentTop']['offset'] :
                              0;        
                // get offset

                // add offset
                top += offsetY;
                
                // add translate y
                transform += 'translateY( ' + 
                                parseInt( top ) + 'px' +
                             ') ';
                // add translate y

            }
            // parent top exists    
            
            // return result
            return transform;
                
        // DONE FUNCTION: animateParentBasedTransform( named array: values ) void
        };
        self.layoutChange = function( values ) {
        // FUNCTION: layoutChange( named array: values ) void
            
            // re animate
            self.animate( values );
            
        // DONE FUNCTION: layoutChange( named array: values ) void
        };
        self.destruct = function() {
        // FUNCTION: destruct( void ) void
            
            // unset options
            self.options = null;
        
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

            // FUNCTION: animate( named array: values ) void    
            animate : function( values ){
                
                // call internal
                self.animate( values );
                
            },
            // FUNCTION: layoutChange( named array: values ) void    
            layoutChange : function( values ){
                
                // call internal
                self.layoutChange( values );
                
            },
            // FUNCTION: destruct( void ) void    
            destruct : function( ){
                
                // call internal
                self.destruct( );
                
            }
            
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: pathModule( html element id: callerId, 
    //                          named array / undefined: options ) named array 
    
})( textAnimation );
// done create module function


