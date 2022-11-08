/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       animateModule.js
    function:   animates an element.

    Last revision: 08-11-2022
 
*/    

// create module function
( function( textAnimation ){
        
    // create name space
    textAnimation.animations.text.animate = 
    textAnimation.animations.text.animate ? 
    textAnimation.animations.text.animate : {};
    // create name space    
    
    // MODULE: animateModule( named array / undefined: options ) named array        
    textAnimation.animations.text.animate.animateModule = function( options ) {
        // PRIVATE:

        // MEMBERS:
        let self = this;                                    // object
        self.debugOn = false;                               // boolean
        self.MODULE = 'AnimationsTextAnimateModule';        // string
        self.options = options;                             // named array / undefined 
        self.modules = {};                                  // named array                                                          
        self.containerId = options['containerId'];          // html element id
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void

            // create modules
            self.createModules();
            
        // DONE FUNCTION: construct( void ) void
        };
        self.createModules = function() {
        // FUNCTION: createModules( void ) void

            // get transform module
            let transformModule = textAnimation.animations.text.animate.transformModule;

            // create module
            self.modules['transform'] = new transformModule( self.options );

            // get color module
            let colorModule = textAnimation.animations.text.animate.colorModule;

            // create module
            self.modules['color'] = new colorModule( self.options );

        // DONE FUNCTION: createModules( void ) void
        };
        self.animate = function( values ) {
        // FUNCTION: animate( named array: values ) void
            
            // animate border
            self.animateBorder( values );
            
            // set text
            self.setText( values );
            
            // animate font
            self.animateFont( values );
            
            // animate padding
            self.animatePadding( values );
            
            // create layout
            let layout = {};
            
            // get parent layout
            layout['parent'] = textAnimation.getElementById( self.options['parentId'] ).getBoundingClientRect();
            
            // set landscape
            layout['parent']['landscape'] = layout['parent']['width'] > layout['parent']['height'] ?
                                            true :
                                            false;
            // set landscape
            
            // call transform
            self.modules['transform'].animate( layout, values );

            // call color
            self.modules['color'].animate( values );

            // set background
            self.setBackground( values );
            
            // set background image
            self.setBackgroundImage( values );
            
        // DONE FUNCTION: animate( named array: values ) void
        };
        self.setBackgroundImage = function( values ) {
        // FUNCTION: setBackgroundImage( named array: values ) void
            
            // background image ! exists
            if( !values['backgroundImage'] ){
                
                // done
                return;
                
            }
            // background image ! exists

            // set style
            textAnimation.setStyle( self.containerId , 'background-image', values['backgroundImage']['value'] ); 
            
        // DONE FUNCTION: setBackgroundImage( named array: values ) void
        };
        self.setBackground = function( values ) {
        // FUNCTION: setBackground( named array: values ) void
            
            // background ! exists
            if( !values['background'] ){
                
                // done
                return;
                
            }
            // background ! exists

            // set style
            textAnimation.setStyle( self.containerId , 'background', values['background']['value'] ); 
            
        // DONE FUNCTION: setBackground( named array: values ) void
        };
        self.setText = function( values ) {
        // FUNCTION: setText( named array: values ) void
            
            // text ! exists
            if( !values['text'] ){
                
                // done
                return;
                
            }
            // text ! exists

            // set text
            textAnimation.getElementById( self.containerId ).innerHTML = values['text']['value']; 
                        
        // DONE FUNCTION: setText( named array: values ) void
        };
        self.animateFont = function( values ) {
        // FUNCTION: animateFont( named array: values ) void
            
            // set font
            self.setFont( values );
            
            // set font style
            self.setFontStyle( values );
            
            // animate font weight
            self.animateFontWeight( values );
            
        // DONE FUNCTION: animateFont( named array: values ) void
        };
        self.setFont = function( values ) {
        // FUNCTION: setFont( named array: values ) void
            
            // font ! exists
            if( !values['font'] ){
                
                // done
                return;
                
            }
            // font ! exists

            // set style
            textAnimation.setStyle( self.containerId , 'font-family', values['font']['value'] ); 
                        
        // DONE FUNCTION: setFont( named array: values ) void
        };
        self.setFontStyle = function( values ) {
        // FUNCTION: setFontStyle( named array: values ) void
            
            // font style ! exists
            if( !values['fontStyle'] ){
                
                // done
                return;
                
            }
            // font style ! exists

            // set style
            textAnimation.setStyle( self.containerId , 'font-style', values['fontStyle']['value'] ); 
                        
        // DONE FUNCTION: setFont( named array: values ) void
        };
        self.animateFontWeight = function( values ) {
        // FUNCTION: animateFontWeight( named array: values ) void
            
            // font weight ! exists
            if( !values['fontWeight'] ){
                
                // done
                return;
                
            }
            // font weight ! exists

            // set style
            textAnimation.setStyle( self.containerId , 'font-weight', values['fontWeight']['value'] ); 
                        
        // DONE FUNCTION: animateFontWeight( named array: values ) void
        };
        self.animatePadding = function( values ) {
        // FUNCTION: animatePadding( named array: values ) void
            
            // padding ! exists
            if( !values['padding'] ){
                
                // done
                return;
                
            }
            // padding ! exists

            // get units
            let units = self.getUnits( 'padding', values, 'px' );
                
            // set style
            textAnimation.setStyle( self.containerId , 'padding', values['padding']['value'] + units ); 
                        
        // DONE FUNCTION: animatePadding( named array: values ) void
        };
        self.animateBorder = function( values ) {
        // FUNCTION: animateBorder( named array: values ) void
            
            // set animate border width
            self.animateBorderWidth( values );
            
            // set animate border radius
            self.animateBorderRadius( values );
            
        // DONE FUNCTION: animateBorder( named array: values ) void
        };
        self.animateBorderWidth = function( values ) {
        // FUNCTION: animateBorderWidth( named array: values ) void
            
            // border width is set
            if( !values['borderWidth'] ){
                
                // done
                return;
                
            }
            // border width is set

            // get units
            let units = self.getUnits( 'borderWidth', values, 'px' );
                
            // set style
            textAnimation.setStyle( self.containerId , 'border-width', values['borderWidth']['value'] + units ); 
            
        // DONE FUNCTION: animateBorderRadius( named array: values ) void
        };
        self.animateBorderRadius = function( values ) {
        // FUNCTION: animateBorderRadius( named array: values ) void
            
            // border radius is set
            if( !values['borderRadius'] ){
                
                // done
                return;
                
            }
            // border radius is set

            // get units
            let units = self.getUnits( 'borderRadius', values, 'px' );
                
            // set background
            textAnimation.setStyle( self.containerId , 'border-radius', values['borderRadius']['value'] + units  ); 
            
        // DONE FUNCTION: animateBorderRadius( named array: values ) void
        };
        self.getUnits = function( itemId, values, defaultValue ) {
        // FUNCTION: getUnits( string: itemId, named array: values, string: defaultValue ) string
            
            // get units
            let units = values[itemId]['units'] ?
                        values[itemId]['units'] :
                        defaultValue;
            // get units

            // return result
            return units;

        // DONE FUNCTION: getUnits( string: itemId, named array: values, string: defaultValue ) string
        };
        self.layoutChange = function( values ) {
        // FUNCTION: layoutChange( named array: values ) void
            
            // call container
            self.animate( values );
            
        // DONE FUNCTION: layoutChange( named array: values ) void
        };
        self.removeModules = function() {
        // FUNCTION: removeModules( void ) void

            // destroy transform
            self.modules['transform'].destruct();
            
            // reset modules
            self.modules = {};
            
        // DONE FUNCTION: removeModules( void ) void
        };
        self.destruct = function() {
        // FUNCTION: destruct( void ) void
            
            // remove modules
            self.removeModules();
            
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
    // DONE MODULE: animateModule( named array / undefined: options ) named array 
    
})( textAnimation );
// done create module function


