/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       effectsModule.js
    function:   Adds the function:
                
                textAnimation.calculateEffect: calculates an effect on a path 

                to the application

    Last revision: 12-11-2022
 
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
            'inSine'        :   {},                         // named array
            'outSine'       :   {},                         // named array
            'inOutSine'     :   {},                         // named array
            'inElastic'     :   {                           // named array
                'seed'      :   1.70158                     // float
            },                                              // done named array
            'outElastic'    :   {                           // named array
                'seed'      :   1.70158                     // float
            },                                              // done named array
            'inOutElastic'    :   {                         // named array
                'seed'      :   1.70158                     // float
            },                                              // done named array
            'inBack'     :   {                              // named array
                'seed'      :   1.70158,                    // float
            },                                              // done named array
            'outBack'    :   {                              // named array
                'seed'      :   1.70158,                    // float
            },                                              // done named array
            'inOutBack'     :   {                           // named array
                'seed'      :   1.70158,                    // float
                'factor'    :   1.525                       // float
            }                                               // done named array
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
            self.effects['inSine']['function'] = self.calculateInSine;
            self.effects['outSine']['function'] = self.calculateOutSine;
            self.effects['inOutSine']['function'] = self.calculateInOutSine;
            self.effects['inElastic']['function'] = self.calculateInElastic;
            self.effects['outElastic']['function'] = self.calculateOutElastic;
            self.effects['inOutElastic']['function'] = self.calculateInOutElastic;
            self.effects['inBack']['function'] = self.calculateInBack;
            self.effects['outBack']['function'] = self.calculateOutBack;
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
            
            // path length < 2
            if( item['path'].length < 2 ){

                // return no effect
                return item['path'][0];
                
            }
            // path length < 2

            // create options
            let options = {
                'steps'     :   steps,
                'change'    :   item['path'][1] - item['path'][0]
            };
            // create options

            // no change
            if( options['change'] === 0 ){

                // return no effect
                return item['path'][0];
                
            }
            // no change

            // effect ! exists
            if( !item ||
                !item['effect'] ||        
                !self.effects[item['effect']] ){
            
                // return no effect
                return item['path'][0];
                
            }
            // effect ! exists

            // create moment
            options['moment'] = step / steps;
            
            // return result
            return self.effects[item['effect']]['function']( item, options );
            
        // DONE FUNCTION: calculate( integer: steps, integer: step, named array: item ) float
        };
        self.calculateInQuad = function( item, options ) {
        // FUNCTION: calculateInQuad( named array: item, named array: options ) float

            // get change
            let change = options['change'];
            
            // get moment
            let moment = options['moment'];
            
            // calculate result
            let result = ( change * moment * moment  ) + item['path'][0];
            
            // return result
            return result;
                
        // DONE FUNCTION: calculateInQuad( named array: item, named array: options ) float
        };
        self.calculateOutQuad = function( item, options ) {
        // FUNCTION: calculateOutQuad( named array: item, named array: options ) float

            // get change
            let change = options['change'];
            
            // get moment
            let moment = options['moment'];
            
            // calculate result  
            let result = ( -change * moment * ( moment - 2 ) ) + item['path'][0];
            
            // return result
            return result;
                
        // DONE FUNCTION: calculateOutQuad( named array: item, named array: options ) float
        };
        self.calculateInOutQuad = function( item, options ) {
        // FUNCTION: calculateInOutQuad( named array: item, named array: options ) float

            // get change
            let change = options['change'];
            
            // get moment
            let moment = options['moment'];
            
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
                
        // DONE FUNCTION: calculateInOutQuad( named array: item, named array: options ) float
        };
        self.calculateInSine = function( item, options ) {
        // FUNCTION: calculateInSine( named array: item, named array: options ) float

            // get change
            let change = options['change'];
            
            // get moment
            let moment = options['moment'];
            
            // calculate result
            let result = -change * Math.cos( moment * ( Math.PI / 2 ) ) + change + item['path'][0];          

            // return result
            return result;
                
        // DONE FUNCTION: calculateInSine( named array: item, named array: options ) float
        };
        self.calculateOutSine = function( item, options ) {
        // FUNCTION: calculateOutSine( named array: item, named array: options ) float

            // get change
            let change = options['change'];
            
            // get moment
            let moment = options['moment'];
            
            // calculate result
            let result = change * Math.sin( moment * ( Math.PI / 2 ) ) + item['path'][0];          

            // return result
            return result;

        // DONE FUNCTION: calculateOutSine( named array: item, named array: options ) float
        };
        self.calculateInOutSine = function( item, options ) {
        // FUNCTION: calculateInOutSine( named array: item, named array: options ) float

            // get change
            let change = options['change'];
            
            // get moment
            let moment = options['moment'];
            
            // calculate result
            let result = -change / 2 * ( Math.cos( Math.PI * moment ) - 1 ) + item['path'][0];          

            // return result
            return result;

        // DONE FUNCTION: calculateInOutSine( named array: item, named array: options ) float
        };
        self.calculateInElastic = function( item, options ) {
        // FUNCTION: calculateInElastic( named array: item, named array: options ) float

            // get steps
            let steps = options['steps'];
            
            // get change
            let change = options['change'];
            
            // get moment
            let moment = options['moment'];
            
            // first step
            if ( moment === 0 ){
                
                // return first value
                return item['path'][0];
                
            }
            // first step

            // mid step
            if ( moment === 1 ){
                
                // return first value
                return item['path'][0] + change;
                
            }
            // mid step
            
            // get seed
            let seed = self.effects['inElastic']['seed'];
            
            // create interim vars
            let p = steps * 0.3;
            var a = change;
            // create interim vars

            //
            if( a < Math.abs( change )) {
                // 
                a = change;
                
                seed = p / 4;
                
            }
            else {
                
                seed = p / ( 2 * Math.PI ) * Math.asin( change / a );
                
            }
            //
  
            // calculate result
            let result = -( a * Math.pow( 2, 10 * ( moment -= 1 ) ) * 
                           Math.sin( ( moment * steps - seed ) * 
                           ( 2 * Math.PI ) / p ) ) + item['path'][0];
            // calculate result
    
            // return result
            return result;

        // DONE FUNCTION: calculateInElastic( named array: item, named array: options ) float
        };
        self.calculateOutElastic = function( item, options ) {
        // FUNCTION: calculateOutElastic( named array: item, named array: options ) float

            // get steps
            let steps = options['steps'];
            
            // get change
            let change = options['change'];
            
            // get moment
            let moment = options['moment'];
            
            // first step
            if ( moment === 0 ){
                
                // return first value
                return item['path'][0];
                
            }
            // first step

            // mid step
            if ( moment === 1 ){
                
                // return first value
                return item['path'][0] + change;
                
            }
            // mid step
            
            // get seed
            let seed = self.effects['inElastic']['seed'];
            
            // create interim vars
            let p = steps * 0.3;
            var a = change;
            // create interim vars

            //
            if( a < Math.abs( change )) {
                // 
                a = change;
                
                seed = p / 4;
                
            }
            else {
                
                seed = p / ( 2 * Math.PI ) * Math.asin( change / a );
                
            }
            //
  
            // calculate result
            let result = a * Math.pow( 2, -10 * moment ) * 
                         Math.sin( ( moment * steps - seed ) * 
                         ( 2 * Math.PI ) / p ) + change + item['path'][0];
            // calculate result

            // return result
            return result;

        // DONE FUNCTION: calculateOutElastic( named array: item, named array: options ) float
        };
        self.calculateInOutElastic = function( item, options ) {
        // FUNCTION: calculateInOutElastic( named array: item, named array: options ) float

            // get steps
            let steps = options['steps'];
            
            // get change
            let change = options['change'];
            
            // get moment
            let moment = options['moment'];
            
            
            // first step
            if ( moment === 0 ){
                
                // return first value
                return item['path'][0];
                
            }
            // first step

            // mid step
            if( ( moment / steps / 2 ) === 2 ){
                
                // return first value
                return item['path'][0] + change;
                
            }
            // mid step
            
            // get seed
            let seed = self.effects['inOutElastic']['seed'];
            
            // create interim vars
            let p = steps * ( 0.3 * 1.5 );
            var a = change;
            // create interim vars

            //
            if( a < Math.abs( change )) {
                // 
                a = change;
                
                seed = p / 4;
                
            }
            else {
                
                seed = p / ( 2 * Math.PI ) * Math.asin( change / a );
                
            }
            //

            // before mid
            if ( moment < 1 ){
                
                // calculate result
                let result = -.5 * ( a * Math.pow( 2, 10 * ( moment -= 1 ) ) * 
                             Math.sin( ( moment * steps - seed ) * 
                             ( 2 * Math.PI ) / p ) ) + item['path'][0];
                // calculate result

                // return result
                return result;

            } 
            // before mid

            // calculate result
            let result = a * Math.pow( 2, -10 * ( moment -= 1 ) ) * 
                         Math.sin( ( moment * steps - seed ) * 
                         ( 2 * Math.PI ) / p ) * 0.5 + change + item['path'][0];
            // calculate result

            // return result
            return result;

        // DONE FUNCTION: calculateInOutElastic( named array: item, named array: options ) float
        };
        self.calculateInBack = function( item, options ) {
        // FUNCTION: calculateInBack( named array: item, named array: options ) float
        
            // get change
            let change = options['change'];
            
            // get moment
            let moment = options['moment'];
            
            // get seed
            let seed = self.effects['inBack']['seed'];
            
            // calculate result
            let result = change * moment * moment * 
                         ( ( seed + 1 ) * moment - seed ) + item['path'][0];
            // calculate result

            // return result
            return result;
        
        // DONE FUNCTION: calculateInBack( named array: item, named array: options ) float
        };
        self.calculateOutBack = function( item, options ) {
        // FUNCTION: calculateOutBack( named array: item, named array: options ) float

            // get change
            let change = options['change'];
            
            // get moment
            let moment = options['moment'];
            
            moment--;
            
            // get seed
            let seed = self.effects['outBack']['seed'];
            
            // calculate result
            let result = change * ( ( moment ) * moment * 
                         ( ( seed + 1 ) * moment + seed ) + 1 ) + 
                         item['path'][0];
            // calculate result

            // return result
            return result;
        
        // DONE FUNCTION: calculateOutBack( named array: item, named array: options ) float
        };
        self.calculateInOutBack = function( item, options ) {
        // FUNCTION: calculateInOutBack( named array: item, named array: options ) float

            // get change
            let change = options['change'];
            
            // get moment
            let moment = options['moment'];
            
            // get seed
            let seed = self.effects['inOutBack']['seed'];
            
            // get factor
            let factor = self.effects['inOutBack']['factor'];
            
            // moment before half duration
            if( moment / 2 < 1 ){
                
                // calculate result 
                let result = ( change / 2 * ( moment * moment * ( ( ( seed *= ( factor ) ) + 1 ) * moment - seed ) ) ) + item['path'][0];
                
                // return result
                return result;
                
            }
            // moment before half duration
            
            // calculate result
            let result = ( change / 2 * ( ( moment -= 2 ) * moment * ( ( ( seed *= ( factor ) ) + 1 ) * moment + seed ) + 2 ) ) + item['path'][0];

            // return result
            return result;
                
        // DONE FUNCTION: calculateInOutBack( named array: item, named array: options ) float
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


