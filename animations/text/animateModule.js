/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       animateModule.js
    function:   handels the styling of the text animation.

    Last revision: 17-10-2022
 
*/    

// create module function
( function( textAnimation ){
        
    // MODULE: animateModule( html element id: callerId, 
    //                        named array / undefined: options ) named array        
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
            
            // animate background rgb
            self.animateRgb( values );
            
            // animate hsl
            self.animateHsl( values );
            
            // animate background hsl
            self.animateBackgroundHsl( values );
            
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
            // get units

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
                        parseInt( values['colorR']['value'] ) + ',' +
                        parseInt( values['colorG']['value'] ) + ',' +
                        parseInt( values['colorB']['value'] ) + ')';
            // create color
            
            // set color
            textAnimation.setStyle( self.callerId , 'color', color ); 
            
        // DONE FUNCTION: animateRgb( named array: values ) void
        };
        self.animateBackgroundRgb = function( values ) {
        // FUNCTION: animateBackgroundRgb( named array: values ) void

            // background rgb ! exists
            if( !values['backgroundColorR'] || !values['backgroundColorG'] || !values['backgroundColorB'] ){

                // done
                return;
                
            }
            // background rgb ! exists
            
            // create color
            let color = 'rgb(' +
                        parseInt( values['backgroundColorR']['value'] ) + ',' +
                        parseInt( values['backgroundColorG']['value'] ) + ',' +
                        parseInt( values['backgroundColorB']['value'] ) + ')';
            // create color
            
            // set background color
            textAnimation.setStyle( self.callerId , 'background-color', color ); 
            
        // DONE FUNCTION: animateBackgroundRgb( named array: values ) void
        };
        self.animateHsl = function( values ) {
        // FUNCTION: animateHsl( named array: values ) void

            // hsl ! exists
            if( !values['colorH'] || !values['colorS'] || !values['colorL'] ){

                // done
                return;
                
            }
            // hsl ! exists
            
            // create color
            let color = 'hsl(' +
                        parseInt( values['colorH']['value'] ) + ',' +
                        parseInt( values['colorS']['value'] ) + '%,' +
                        parseInt( values['colorL']['value'] ) + '% )';
            // create color
            
            // set color
            textAnimation.setStyle( self.callerId , 'color', color ); 
            
        // DONE FUNCTION: animateHsv( named array: values ) void
        };
        self.animateBackgroundHsl = function( values ) {
        // FUNCTION: animateBackgroundHsl( named array: values ) void

            // background hsl ! exists
            if( !values['backgroundColorH'] || !values['backgroundColorS'] || !values['backgroundColorL'] ){

                // done
                return;
                
            }
            // background hsl ! exists
            
            // create color
            let color = 'hsl(' +
                        parseInt( values['backgroundColorH']['value'] ) + ',' +
                        parseInt( values['backgroundColorS']['value'] ) + '%,' +
                        parseInt( values['backgroundColorL']['value'] ) + '% )';
            // create color
            
            // set background color
            textAnimation.setStyle( self.callerId , 'background-color', color ); 
            
        // DONE FUNCTION: animateBackgroundHsv( named array: values ) void
        };
        self.animateTransform = function( values ) {
        // FUNCTION: animateTransform( named array: values ) void

            // create transform
            let transform = '';
            
            // animate left transforms
            transform += self.animateLeftTransform( values );
            
            // animate top transforms
            transform += self.animateTopTransform( values );
            
            // animate align transforms
            transform += self.animateAlignTransform( values );
            
            // animate parent based transforms
            transform += self.animateParentBasedTransform( values );
            
            // animate scale transforms
            transform += self.animateScaleTransform( values );
            
            // animate rotate transforms
            transform += self.animateRotateTransform( values );
            
            // transform found 
            if( transform !== '' ){
                
                textAnimation.setStyle( self.callerId , 'transform', transform ); 
                
            } 
            // transform found 

        // DONE FUNCTION: animateTransform( named array: values ) void
        };
        self.animateTopTransform = function( values ) {
        // FUNCTION: animateTopTransform( named array: values ) string

            // top ! exists
            if( !values['top'] ){
                
                // done
                return '';
                
            }   
            // top ! exists

            // create transform
            let transform = '';
                
            // get units
            let units = values['top']['units'] ?
                        values['top']['units'] :
                        'px';
            // get units

            // add translate y
            transform += 'translateY( ' + 
                            parseInt( values['top']['value'] ) + units +
                         ') ';
            // add translate y
                
            // return result    
            return transform;
                
        // DONE FUNCTION: animateTopTransform( named array: values ) string
        };
        self.animateLeftTransform = function( values ) {
        // FUNCTION: animateLeftTransform( named array: values ) string

            // left ! exists
            if( !values['left'] ){
                
                // done
                return '';
                
            }   
            // left ! exists

            // create transform
            let transform = '';
                
            // get units
            let units = values['left']['units'] ?
                        values['left']['units'] :
                        'px';
            // get units

            // add translate x
            transform += 'translateX( ' + 
                            parseInt( values['left']['value'] ) + units +
                         ') ';
            // add translate x
                
            // return result
            return transform;
                
        // DONE FUNCTION: animateLeftTransform( named array: values ) string
        };
        self.animateParentBasedTransform = function( values ) {
        // FUNCTION: animateParentBasedTransform( named array: values ) string

            // parent left ! exists and parent top ! exists
            if( !values['parentLeft'] && 
                !values['parentTop'] ){
                
                // done
                return '';
                
            }   
            // parent left ! exists and parent top ! exists

            // create transform
            let transform = '';
                
            // get parent layout
            let parentLayout = textAnimation.getElementById( self.options['parentId'] ).getBoundingClientRect();
                
            // parent left exists    
            if( values['parentLeft'] ){

                // caculate left
                let left = ( parentLayout['width'] / 100 ) * values['parentLeft']['value'];        
               
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
                                
                // add translate y
                transform += 'translateY( ' + 
                                parseInt( top ) + 'px' +
                             ') ';
                // add translate y

            }
            // parent top exists    
            
            // return result
            return transform;
                
        // DONE FUNCTION: animateParentBasedTransform( named array: values ) string
        };
        self.animateAlignTransform = function( values ) {
        // FUNCTION: animateAlignTransform( named array: values ) string

            // create transform
            let transform = '';
                
            // add align top
            transform += self.animateAlignTopTransform( values );

            // add align left
            transform += self.animateAlignLeftTransform( values );

            // return result
            return transform;
                
        // DONE FUNCTION: animateAlignTransform( named array: values ) string
        };
        self.animateAlignTopTransform = function( values ) {
        // FUNCTION: animateAlignTopTransform( named array: values ) string

            // align top ! exists
            if( !values['alignTop'] ){
                
                // done
                return '';
                
            }   
            // align top ! exists

            // create transform
            let transform = '';
                
            // get caller height
            let callerHeight = textAnimation.getElementById( self.callerId ).offsetHeight;
            
            // get align
            let align = ( callerHeight / 100 ) * values['alignTop']['value'];
            
            // add align
            transform += 'translateY( ' + 
                            parseInt( -align ) +
                         'px ) ';
            // add align
            
            // return result
            return transform;
            
        // DONE FUNCTION: animateAlignTopTransform( named array: values ) string
        };
        self.animateAlignLeftTransform = function( values ) {
        // FUNCTION: animateAlignLeftTransform( named array: values ) string

            // align left ! exists
            if( !values['alignLeft'] ){
                
                // done
                return '';
                
            }   
            // align left ! exists

            // create transform
            let transform = '';

            // get caller width
            let callerWidth = textAnimation.getElementById( self.callerId ).offsetWidth;
            
            // get align
            let align = ( callerWidth / 100 ) * values['alignLeft']['value'];
            
            // add align
            transform += 'translateX( ' + 
                            parseInt( -align ) +
                         'px ) ';
            // add align
            
            // return result
            return transform;
            
        // DONE FUNCTION: animateAlignLeftTransform( named array: values ) string
        };
        self.animateRotateTransform = function( values ) {
        // FUNCTION: animateRotateTransform( named array: values ) string

            // rotate ! exists
            if( !values['rotate'] ){
                
                // done
                return '';
                
            }   
            // rotate ! exists

            // create transform
            let transform = '';
                
            // add rotate
            transform += 'rotate( ' + 
                            parseInt( values['rotate']['value'] ) +
                         'deg ) ';
            // add rotate
                
            // return result
            return transform;
            
        // DONE FUNCTION: animateRotateTransform( named array: values ) string
        };
        self.animateScaleTransform = function( values ) {
        // FUNCTION: animateScaleTransform( named array: values ) string

            // scale ! exists
            if( !values['scale'] ){
                
                // done
                return '';
                
            }   
            // scale ! exists

            // create transform
            let transform = '';
                
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
                
            // return result
            return transform;
            
        // DONE FUNCTION: animateScaleTransform( named array: values ) string
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
    // DONE MODULE: animateModule( html element id: callerId, 
    //                             named array / undefined: options ) named array 
    
})( textAnimation );
// done create module function


