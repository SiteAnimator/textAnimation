/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       eventManagerModule.js
    function:   Adds the functions:

                textAnimation.subscribeToEvent: adds a subscription 
                textAnimation.unsubscribeFromEvent: removes a subscription
                textAnimation.callEvent: will call all subscribed functions 

                to the application

    Last revision: 08-11-2022
 
*/    

// create module function
( function( textAnimation ){
        
    // create name space
    textAnimation.service = textAnimation.service ? textAnimation.service : {};
            
    // MODULE: eventManagerModule( void ) void
    textAnimation.service.eventManagerModule = function( ) {
        // PRIVATE:

        // MEMBERS:
        let self = this;                                    // object
        self.debugOn = false;                               // boolean
        self.MODULE = 'EventManagerModule';                 // string
        self.events = {};                                   // named array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // add the extensions to the application
            self.addApplicationsExtensions();
            
        // DONE FUNCTION: construct( void ) void
        };
        self.addApplicationsExtensions = function(){
        // FUNCTION addApplicationsExtensions( void ) void
        
            // add functions
            textAnimation.subscribeToEvent = self.subscribe;
            textAnimation.unSubscribeFromEvent = self.unSubscribe;
            textAnimation.callEvent = self.call;
            // add functions
            
        // DONE FUNCTION: addApplicationsExtensions( void ) void
        };
        self.subscribe = function( eventId, callback ) {
        // FUNCTION: subscribe( string: eventId, function: callback ) void
            
            // eventId ! exists
            if( !self.events[eventId] ){
                
                // create subscription list
                self.events[eventId] = new Array();
                
            }
            // eventId ! exists
            
            // create the subscription 
            let subscription = {
                'callback'  :   callback
            };
            // create the subscription 
            
            // add subscription
            self.events[eventId].push( subscription );
            
        // DONE FUNCTION: subscribe( string: eventId, function: callback ) void
        };
        self.unSubscribe = function( eventId, callback ) {
        // FUNCTION: unSubscribe( string: eventId, function: callback ) void
            
            // event ! exists
            if( !self.events[eventId] ){
            
                // done
                return;
            
            }
            // event ! exists
 
            // loop over subsciptions
            for( var i = self.events[eventId].length - 1; i >= 0 ; i-- ) {
                
                // check if the callback matches
                if( self.events[eventId][i]['callback'] === callback ) {
                    
                    // remove the subscription from the list 
                    self.events[eventId].splice( i, 1 );
                    
                }
                // check if the callback matches
                
            }
            // loop over subsciptions

        // DONE FUNCTION: unSubscribe( string: eventId, function: callback ) void
        };
        self.call = function( eventId, options ) {
        // FUNCTION: call( string: eventId, var: options ) void
            
            // event ! exists
            if( !self.events[eventId] ){
            
                // done
                return;
            
            }
            // event ! exists

            // create callbacks
            let callbacks = [];
            
            // loop over subscriptions
            for( var i = 0; i < self.events[eventId].length; i++ ) {
                
                // add callback
                callbacks.push( self.events[eventId][i]['callback'] );
                
            }
            // loop over subscriptions
                
            // loop over callbacks
            for( var i = 0; i < callbacks.length; i++ ) {
                
                // call callback
                callbacks[i]( options );
                
            }
            // loop over callbacks
            
        // DONE FUNCTION: call( string: eventId, var: options ) void
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
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: eventManagerModule( void ) void 
    
})( textAnimation );
// done create module function


