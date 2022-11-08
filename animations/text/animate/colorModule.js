/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       colorModule.js
    function:   handels the color transformations of the animations.

    Last revision: 08-11-2022
 
*/    

// create module function
( function( textAnimation ){
        
    // MODULE: colorModule( named array / undefined: options ) named array        
    textAnimation.animations.text.animate.colorModule = function( options ) {
        // PRIVATE:

        // MEMBERS:
        let self = this;                                    // object
        self.debugOn = false;                                // boolean
        self.MODULE = 'AnimationsTextAnimateColorModule';   // string
        self.options = options;                             // named array / undefined 
        self.containerId = options['containerId'];          // html element id
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
        // DONE FUNCTION: construct( void ) void
        };
        self.animate = function( values ) {
        // FUNCTION: animate( named array: values ) void

            // animate opacity
            self.animateOpacity( values );
            
            // animate rgb
            self.animateRgb( values );
            
            // animate background rgb
            self.animateBackgroundRgb( values );
            
            // animate border rgb
            self.animateBorderRgb( values );
            
            // animate hsl
            self.animateHsl( values );
            
            // animate background hsl
            self.animateBackgroundHsl( values );
            
            // animate border hsl
            self.animateBorderHsl( values );
            
            // animate color
            self.animateColor( values );
            
            // animate background color
            self.animateBackgroundColor( values );
            
            // animate border color
            self.animateBorderColor( values );
            
        // DONE FUNCTION: animate( named array: values ) void
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
            textAnimation.setStyle( self.containerId , 'opacity', values['opacity']['value'] ); 
                
        // DONE FUNCTION: animateOpacity( named array: values ) void
        };
        self.animateRgb = function( values ) {
        // FUNCTION: animateRgb( named array: values ) void

            // rgb ! exists
            if( !values['colorR'] && 
                !values['colorG'] && 
                !values['colorB'] ){

                // done
                return;
                
            }
            // rgb ! exists
            
            // get values
            let rValue = values['colorR'] ? values['colorR']['value'] : 0;
            let gValue = values['colorG'] ? values['colorG']['value'] : 0;
            let bValue = values['colorB'] ? values['colorB']['value'] : 0;
            // get values
            
            // create color
            let color = 'rgb(' +
                        parseInt( rValue ) + ',' +
                        parseInt( gValue ) + ',' +
                        parseInt( bValue ) + ')';
            // create color
            
            // set color
            textAnimation.setStyle( self.containerId, 'color', color ); 
            
        // DONE FUNCTION: animateRgb( named array: values ) void
        };
        self.animateBackgroundRgb = function( values ) {
        // FUNCTION: animateBackgroundRgb( named array: values ) void

            // background rgb ! exists
            if( !values['backgroundColorR'] && 
                !values['backgroundColorG'] && 
                !values['backgroundColorB'] ){

                // done
                return;
                
            }
            // background rgb ! exists
            
            // get values
            let rValue = values['backgroundColorR'] ? values['backgroundColorR']['value'] : 0;
            let gValue = values['backgroundColorG'] ? values['backgroundColorG']['value'] : 0;
            let bValue = values['backgroundColorB'] ? values['backgroundColorB']['value'] : 0;
            // get values
            
            // create color
            let color = 'rgb(' +
                        parseInt( rValue ) + ',' +
                        parseInt( gValue ) + ',' +
                        parseInt( bValue ) + ')';
            // create color
            
            // set color
            textAnimation.setStyle( self.containerId, 'background-color', color ); 
            
        // DONE FUNCTION: animateBackgroundRgb( named array: values ) void
        };
        self.animateBorderRgb = function( values ) {
        // FUNCTION: animateBorderRgb( named array: values ) void

            // border rgb ! exists
            if( !values['borderColorR'] && 
                !values['borderColorG'] && 
                !values['borderColorB'] ){

                // done
                return;
                
            }
            // border rgb ! exists
            
            // get values
            let rValue = values['borderColorR'] ? values['borderColorR']['value'] : 0;
            let gValue = values['borderColorG'] ? values['borderColorG']['value'] : 0;
            let bValue = values['borderColorB'] ? values['borderColorB']['value'] : 0;
            // get values
            
            // create color
            let color = 'rgb(' +
                        parseInt( rValue ) + ',' +
                        parseInt( gValue ) + ',' +
                        parseInt( bValue ) + ')';
            // create color
            
            // set color
            textAnimation.setStyle( self.containerId, 'border-color', color ); 
            
        // DONE FUNCTION: animateBorderRgb( named array: values ) void
        };
        self.animateHsl = function( values ) {
        // FUNCTION: animateHsl( named array: values ) void

            // rgb ! exists
            if( !values['colorH'] && 
                !values['colorS'] && 
                !values['colorL'] ){

                // done
                return;
                
            }
            // rgb ! exists
            
            // get values
            let hValue = values['colorH'] ? values['colorH']['value'] : 0;
            let sValue = values['colorS'] ? values['colorS']['value'] : 0;
            let lValue = values['colorL'] ? values['colorL']['value'] : 0;
            // get values
            
            // create color
            let color = 'hsl(' +
                        parseInt( hValue ) + ',' +
                        parseInt( sValue ) + ',' +
                        parseInt( lValue ) + ')';
            // create color
            
            // set color
            textAnimation.setStyle( self.containerId, 'color', color ); 
            
        // DONE FUNCTION: animateHsl( named array: values ) void
        };
        self.animateBackgroundHsl = function( values ) {
        // FUNCTION: animateBackgroundHsl( named array: values ) void

            // background hsl ! exists
            if( !values['backgroundColorH'] && 
                !values['backgroundColorS'] && 
                !values['backgroundColorL'] ){

                // done
                return;
                
            }
            // background hsl ! exists
            
            // get values
            let hValue = values['backgroundColorH'] ? values['backgroundColorH']['value'] : 0;
            let sValue = values['backgroundColorS'] ? values['backgroundColorS']['value'] : 0;
            let lValue = values['backgroundColorL'] ? values['backgroundColorL']['value'] : 0;
            // get values
            
            // create color
            let color = 'hsl(' +
                        parseInt( hValue ) + ',' +
                        parseInt( sValue ) + ',' +
                        parseInt( lValue ) + ')';
            // create color
            
            // set color
            textAnimation.setStyle( self.containerId, 'background-color', color ); 
            
        // DONE FUNCTION: animateBackgroundHsl( named array: values ) void
        };
        self.animateBorderHsl = function( values ) {
        // FUNCTION: animateBorderHsl( named array: values ) void

            // border hsl ! exists
            if( !values['borderColorH'] && 
                !values['borderColorS'] && 
                !values['borderColorL'] ){

                // done
                return;
                
            }
            // border hsl ! exists
            
            // get values
            let hValue = values['borderColorH'] ? values['borderColorH']['value'] : 0;
            let sValue = values['borderColorS'] ? values['borderColorS']['value'] : 0;
            let lValue = values['borderColorL'] ? values['borderColorL']['value'] : 0;
            // get values
            
            // create color
            let color = 'hsl(' +
                        parseInt( hValue ) + ',' +
                        parseInt( sValue ) + ',' +
                        parseInt( lValue ) + ')';
            // create color
            
            // set color
            textAnimation.setStyle( self.containerId, 'border-color', color ); 
            
        // DONE FUNCTION: animateBorderHsl( named array: values ) void
        };
        self.animateColor = function( values ) {
        // FUNCTION: animateColor( named array: values ) void

            // color ! exists
            if( !values['color'] ){

                // done
                return;
                
            }
            // color ! exists
            
            // create color
            let color = values['color']['value'];
            
            // set color
            textAnimation.setStyle( self.containerId, 'color', color ); 
            
        // DONE FUNCTION: animateColor( named array: values ) void
        };
        self.animateBackgroundColor = function( values ) {
        // FUNCTION: animateBackgroundColor( named array: values ) void

            // background rgb ! exists
            if( !values['backgroundColor'] ){

                // done
                return;
                
            }
            // background rgb ! exists
            
            // create color
            let color = values['backgroundColor']['value'];
            
            // set color
            textAnimation.setStyle( self.containerId, 'background-color', color ); 
            
        // DONE FUNCTION: animateBackgroundColor( named array: values ) void
        };
        self.animateBorderColor = function( values ) {
        // FUNCTION: animateBorderColor( named array: values ) void

            // border rgb ! exists
            if( !values['borderColor'] ){

                // done
                return;
                
            }
            // border rgb ! exists
            
            // create color
            let color = values['borderColor']['value'];
            
            // set color
            textAnimation.setStyle( self.containerId, 'border-color', color ); 
            
        // DONE FUNCTION: animateBorderColor( named array: values ) void
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
            // FUNCTION: destruct( void ) void    
            destruct : function( ){
                
                // call internal
                self.destruct( );
                
            }
            
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: colorModule( named array / undefined: options ) named array 
    
})( textAnimation );
// done create module function


