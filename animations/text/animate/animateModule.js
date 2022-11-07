/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       animateModule.js
    function:   animates an element.

    Last revision: 01-11-2022
 
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
        var self = this;                                    // object
        self.debugOn = true;                               // boolean
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
            
            // set text
            self.setText( values );
            
        // DONE FUNCTION: animate( named array: values ) void
        };
        self.setBackground = function( values ) {
        // FUNCTION: setBackground( named array: values ) void
            
            // set text ! exists
            if( !values['setBackground'] ){
                
                // done
                return;
                
            }
            // set text ! exists

            // set background
            textAnimation.setStyle( self.containerId , 'background-image', values['setBackground']['value'] ); 
            
        // DONE FUNCTION: setBackground( named array: values ) void
        };
        self.setText = function( values ) {
        // FUNCTION: setText( named array: values ) void
            
            // set text ! exists
            if( !values['setText'] ){
                
                // done
                return;
                
            }
            // set text ! exists

            // set style
            textAnimation.getElementById( self.containerId ).innerHTML = values['setText']['value']; 
            
            
        // DONE FUNCTION: setText( named array: values ) void
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


