/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       valuesModule.js
    function:   initializes, updates and evaluates the values 
                for the text animation. 

    Last revision: 17-10-2022

*/    

// create module function
( function( textAnimation ){
        
    // MODULE: valuesModule( html element id: callerId, 
    //                       named array: options ) named array        
    textAnimation.animations.text.valuesModule = function( callerId,
                                                           options ) {
        // PRIVATE:

        // MEMBERS:
        var self = this;                                    // object
        self.debugOn = false;                               // boolean
        self.MODULE = 'AnimationsTextValuesModule';         // string
        self.callerId = callerId;                           // html element id
        self.options = options;                             // named array / undefined 
        self.animationOptions = {                           // named array
            'startDelay'            :   0,                  // integer
            'delay'                 :   0,                  // integer
            'duration'              :   40,                 // integer
            'items'                 :   {},                 // named array
        };                                                  // done named array  
        self.initialOptions = {                             // named array 
            'step'                  :   0                   // integer
        };                                                  // done named array  
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // extend options
            self.extendOptions();
            
            // convert values
            self.convertValues( );
            
            // calculate steps
            self.calculateSteps( );
            
        // DONE FUNCTION: construct( void ) void
        };
        self.extendOptions = function() {
        // FUNCTION: extendOptions( void ) void

            // extend animation options
            self.animationOptions = textAnimation.extend( self.animationOptions, self.options );
                
            // trigger exists            
            if( self.animationOptions['trigger'] ){

                // add ! triggered
                self.animationOptions['trigger']['triggered'] = false;
                
            }
            // trigger exists            
            
            // add initial options
            self.animationOptions = textAnimation.extend( self.animationOptions, self.initialOptions );

        // FUNCTION: extendOptions( void ) void
        };
        self.convertValues = function( ) {
        // FUNCTION: convertValues( void ) void
        
            // get animation options
            let animationOptions = self.animationOptions;

            // convert start delay
            animationOptions['startDelay'] = parseInt( animationOptions['startDelay'] );

            // convert delay
            animationOptions['delay'] = parseInt( animationOptions['delay'] );

            // convert duration
            animationOptions['duration'] = parseInt( animationOptions['duration'] );

            // loop over items
            Object.entries( animationOptions['items'] ).forEach( ( [key, item] ) => {

                // convert item values
                self.convertItemValues( key, item );

            });
            // loop over items

            // trigger exists            
            if( animationOptions['trigger'] ){

                // convert at
                animationOptions['trigger']['at'] = parseInt( options['trigger']['at'] );
                
            }
            // trigger exists            

        // DONE FUNCTION: convertValues( void ) void
        };
        self.convertItemValues = function( itemIndex, item ) {
        // FUNCTION: convertItemValues( string: itemIndex, named array: item ) void

            // get animation options
            let animationOptions = self.animationOptions;

            // has path
            if( item['path'] && typeof item['path'] === 'string' ){

                // get path array
                let pathArray = item['path'].split( ',' );

                // loop over path array
                Object.entries( pathArray ).forEach( ( [key, value] ) => {

                    // convert value
                    pathArray[key] = parseFloat( value ); 

                });
                // loop over path array

                // set path
                animationOptions['items'][itemIndex]['path'] = pathArray;

            }
            // has path

        // DONE FUNCTION: convertItemValues( string: itemIndex, named array: item ) void
        };
        self.calculateSteps = function( ) {
        // FUNCTION: calculateSteps( void ) void
        
            // get animation options
            let animationOptions = self.animationOptions;

            // calculate steps
            animationOptions['steps'] = animationOptions['delay'] !== 0 ?
                                        animationOptions['duration'] / animationOptions['delay'] :
                                        animationOptions['duration'];
            // calculate steps

        // DONE FUNCTION: calculateSteps( void ) void
        };
        self.updateValues = function( ) {
        // FUNCTION: updateValues( void ) void

            // get animation options
            let animationOptions = self.animationOptions;

            // loop over items
            Object.entries( animationOptions['items'] ).forEach( ( [key, item] ) => {

                // update path values
                self.updatePathValue( item );

            });
            // loop over path array

            // next step
            animationOptions['step']++;

        // DONE FUNCTION: updateValues( void ) void
        };
        self.updatePathValue = function( item ) {
        // FUNCTION: updatePathValue( named array: item ) void

            // path ! exists
            if( !item['path'] ){

                // done
                return;
                
            }
            // path ! exists

            // get path
            let path = item['path'];

            // path length is 1
            if( path.length === 1 ){

                // set value
                item['value'] = path[0];

                // done 
                return;
                
            }
            // path length is 1
            
            // calculate value
            self.calculatePathValue( item );

        // DONE FUNCTION: updatePathValue( named array: item ) void
        };
        self.calculatePathValue = function( item ) {
        // FUNCTION: calculatePathValue( named array: item ) void
            
            // get path
            let path = item['path'];

            // get animation options
            let animationOptions = self.animationOptions;

            // get steps
            let steps = animationOptions['steps'];

            // get step
            let step = animationOptions['step'];

            // calculate path steps
            let pathSteps = path.length - 1;
            
            // steps per path step
            let stepsPerPathStep = steps / pathSteps;
            
            // calculate step distance
            let stepDistance = step % stepsPerPathStep;
            
            // get path position
            let pathPosition = parseInt( step / stepsPerPathStep );
            
            // get from
            let from = path[pathPosition];
            
            // get to
            let to = path[pathPosition + 1];

            // calculate distance
            let distance = ( ( to - from ) / stepsPerPathStep ) * ( stepDistance + 1 );
            
            // calculate value
            item['value'] = from + distance;
            
        // DONE FUNCTION: calculatePathValue( named array: item ) void
        };
        self.getValues = function( ) {
        // FUNCTION: getValues( void ) named array

            // get animation options
            let animationOptions = self.animationOptions;

            // create values
            let values = {};

            // loop over items
            Object.entries( animationOptions['items'] ).forEach( ( [key, item] ) => {

                // create value
                values[key] = {
                    'value'     :   item['value']
                };
                // create value

                // units exists
                if( item['units'] ){
                    
                    // add units
                    values[key]['units'] = item['units'];
                    
                }
                // units exists

            });
            // loop over items
            
            // return result
            return values;
            
        // DONE FUNCTION: getValues( void ) named array
        };
        self.setValues = function( values ) {
        // FUNCTION: setValues( named array: values ) void

            // get animation options
            let animationOptions = self.animationOptions;

            // loop over values
            Object.entries( values ).forEach( ( [key, item] ) => {

                // create item if ! exists
                animationOptions['items'][key] = animationOptions['items'][key] ?
                                                 animationOptions['items'][key] :
                                                 {};
                // create item if ! exists

                // add value
                animationOptions['items'][key]['value'] = item['value'];
                
                // units exists
                if( item['units'] ){
                    
                    // add units
                    animationOptions['items'][key]['units'] = item['units'];
                    
                }
                // units exists
                
            });
            // loop over values
            
        // DONE FUNCTION: setValues( named array: values ) void
        };
        self.getStartDelay = function( ) {
        // FUNCTION: getStartDelay( void ) integer

            // get animation options
            let animationOptions = self.animationOptions;

            // return result
            return animationOptions['startDelay'];
            
        // DONE FUNCTION: getStartDelay( void ) integer
        };
        self.getDelay = function( ) {
        // FUNCTION: getDelay( void ) integer

            // get animation options
            let animationOptions = self.animationOptions;

            // return result
            return animationOptions['delay'];
            
        // DONE FUNCTION: getDelay( void) integer
        };
        self.triggerReached = function( ) {
        // FUNCTION: triggerReached( void ) boolean
            
            // get animation options
            let animationOptions = self.animationOptions;
            
            // trigger ! exists or trigger triggered
            if( !animationOptions['trigger'] ||
                animationOptions['trigger']['triggered'] ){
                
                // return trigger ! reached
                return false;
                
            }
            // trigger ! exists or trigger triggered
            
            // get item id
            let itemId = animationOptions['trigger']['itemId'];    
            
            // get item
            let item = animationOptions['items'][itemId];    
                
            // get at
            let at = animationOptions['trigger']['at'];    
                
            // get path
            let path = item['path'];

            // get steps
            let steps = animationOptions['steps'];

            // calculate steps per path step
            let stepsPerPath = steps / path.length;

            // get step
            let step = animationOptions['step'];

            // step / steps per path step
            if( step / stepsPerPath >= at ){
                
                // set triggered
                self.animationOptions['trigger']['triggered'] = true;

                // return trigger reached
                return true;
            
            }
            // step / steps per path step
            
            // return trigger ! reached
            return false;
                
        // DONE FUNCTION: triggerReached( void ) boolean
        };
        self.isReady = function( ) {
        // FUNCTION: isReady( void ) boolean
            
            // create ready
            let ready = true;

            // get animation options
            let animationOptions = self.animationOptions;

            // last step reached
            if( animationOptions['step'] < animationOptions['steps'] ){

                // set ! ready
                ready = false;
                
            }
            // last step reached

            // return result
            return ready;
            
        // DONE FUNCTION: isReady( void ) boolean
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

            // FUNCTION: getValues( ) named array
            getValues : function( ){
                
                // return internal call
                return self.getValues( );
                
            },
            // FUNCTION: setValues( named array: values ) void    
            setValues : function( values ){
                
                // call internal
                self.setValues( values );
                
            },
            // FUNCTION: getStartDelay( void ) integer
            getStartDelay : function( ){
                
                // return internal call
                return self.getStartDelay( );
                
            },
            // FUNCTION: getDelay( void ) integer
            getDelay : function( ){
                
                // return internal call
                return self.getDelay( );
                
            },
            // FUNCTION: updateValues( void ) void    
            updateValues : function( ){
                
                // call internal
                self.updateValues( );
                
            },
            // FUNCTION: triggerReached( void ) boolean
            triggerReached : function( ){
                
                // return internal call
                return self.triggerReached( );
                
            },
            // FUNCTION: isReady( void ) boolean
            isReady : function( ){
                
                // return internal call
                return self.isReady( );
                
            },
            // FUNCTION: destruct( void ) void    
            destruct : function( ){
                
                // call internal
                self.destruct( );
                
            }
            
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: valuesModule( html element id: callerId, 
    //                            named array: options ) named array 
    
})( textAnimation );
// done create module function


