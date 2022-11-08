/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       effectsModule.js
    function:   Adds the function:
                
                textAnimation.calculateEffect: calculates an effect on a path 

                to the application

    Last revision: 08-11-2022
 
*/    

// create module function
( function( textAnimation ){
        
    // create name spaces
    textAnimation.animations = textAnimation.animations ? textAnimation.animations : {};
    textAnimation.animations.service = textAnimation.animations.service ? textAnimation.animations.service : {};
    // create name spaces
                        
    // MODULE: effectsModule( void ) void
    textAnimation.animations.service.effectsModule = function( ) {
        // PRIVATE:

        // MEMBERS:
        let self = this;                                    // object
        self.debugOn = false;                               // boolean
        self.MODULE = 'AnimationsEffectsModule';            // string
        self.effects = {                                    // named array
            'outQuad'       :   {},                         // named array
            'inQuad'        :   {},                         // named array
            'inOutQuad'     :   {},                         // named array
            'inOutBack'     :   {}                          // named array
        };                                                  // done named array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // link the functions to the effects
            self.linkFunctions();
            
            // add the extensions to the application
            self.addApplicationsExtensions();
            
        // DONE FUNCTION: construct( void ) void
        };
        self.linkFunctions = function(){
        // FUNCTION linkFunctions( void ) void
        
            // link functions
            self.effects['outQuad']['function'] = self.calculateOutQuad;
            self.effects['inQuad']['function'] = self.calculateInQuad;
            self.effects['inOutQuad']['function'] = self.calculateInOutQuad;
            self.effects['inOutBack']['function'] = self.calculateInOutBack;
            // link functions
            
        // DONE FUNCTION: linkFunctions( void ) void
        };
        self.addApplicationsExtensions = function(){
        // FUNCTION addApplicationsExtensions( void ) void
        
            // add get ui id function
            textAnimation.calculateEffect = self.calculate;
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.calculate = function( steps, step, item ) {
        // FUNCTION: calculate( integer: steps, integer: step, named array: item ) float
            
            // effect ! exists
            if( !item ||
                !item['effect'] ||        
                !self.effects[item['effect']] ){
            
                // return no effect
                return 0;
                
            }
            // effect ! exists
            
            // return result
            return self.effects[item['effect']].function( steps, step, item );
            
        // DONE FUNCTION: calculate( integer: steps, integer: step, named array: item ) float
        };
        self.calculateInQuad = function( steps, step, item ) {
        // FUNCTION: calculateInQuad( integer: steps, integer: step, named array: item ) float

            // path length < 2
            if( item['path'].length < 2 ){

                // return no effect
                return item['path'][0];
                
            }
            // path length < 2

            // calculate change
            let change = item['path'][1] - item['path'][0];
            
            // create moment
            let moment = step / steps;
            
            // calculate result
            let result = ( change * moment * moment  ) + item['path'][0];
            
            // return result
            return result;
                
        // DONE FUNCTION: calculateInQuad( integer: steps, integer: step, named array: item ) float
        };
        self.calculateOutQuad = function( steps, step, item ) {
        // FUNCTION: calculateOutQuad( integer: steps, integer: step, named array: item ) float

            // path length < 2
            if( item['path'].length < 2 ){

                // return no effect
                return item['path'][0];
                
            }
            // path length < 2

            // calculate change
            let change = item['path'][1] - item['path'][0];
            
            // create moment
            let moment = step / steps;
            
            // calculate result  
            let result = ( -change * moment * ( moment - 2 ) ) + item['path'][0];
            
            // return result
            return result;
                
        // DONE FUNCTION: calculateOutQuad( integer: steps, integer: step, named array: item ) float
        };
        self.calculateInOutQuad = function( steps, step, item ) {
        // FUNCTION: calculateInOutQuad( integer: steps, integer: step, named array: item ) float

            // path length < 2
            if( item['path'].length < 2 ){

                // return no effect
                return item['path'][0];
                
            }
            // path length < 2

            // calculate change
            let change = item['path'][1] - item['path'][0];
            
            // create moment
            let moment = step / steps;
            
            // moment before half duration
            if( moment / 2 < 1 ){
                
                // calculate result
                let result = ( change / 2 * moment * moment  ) + item['path'][0];
                
                // return result
                return result;
                
            }
            // moment before half duration
            
            // calculate result
            let result = ( -change / 2 * ( ( --moment ) * ( moment - 2) ) - 1 ) + item['path'][0];

            // return result
            return result;
                
        // DONE FUNCTION: calculateInOutQuad( integer: steps, integer: step, named array: item ) float
        };
        self.calculateInOutBack = function( steps, step, item ) {
        // FUNCTION: calculateInOutBack( integer: steps, integer: step, named array: item ) float

            // path length < 2
            if( item['path'].length < 2 ){

                // return no effect
                return item['path'][0];
                
            }
            // path length < 2

            // calculate change
            let change = item['path'][1] - item['path'][0];
            
            // create moment
            let moment = step / steps;
            
            let s = 1.70158;
            
            // moment before half duration
            if( moment / 2 < 1 ){
                
                // calculate result 
                let result = ( change / 2 * ( moment * moment * ( ( ( s *= ( 1.525 ) ) + 1 ) * moment - s ) ) ) + item['path'][0];
                
                // return result
                return result;
                
            }
            // moment before half duration
            
            // calculate result
            let result = ( change / 2 * ( ( moment -= 2 ) * moment * ( ( ( s *= ( 1.525 ) ) + 1 ) * moment + s ) + 2 ) ) + item['path'][0];

            // return result
            return result;
                
        // DONE FUNCTION: calculateInOutBack( integer: steps, integer: step, named array: item ) float
        };
        self.destruct = function() {
        // FUNCTION: destruct( void ) void
            
            // debug info
            self.debug( 'destruct' );

            // unset effects
            self.effects = null;
            
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
            
            // FUNCTION: destruct( void ) void    
            destruct : function( ){
                
                // call internal
                self.destruct( );
                
            }
            
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: effectsModule( void ) void 
    
})( textAnimation );
// done create module function


