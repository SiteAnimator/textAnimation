/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       contentModule.js
    function:   Generates the HTML for the content.
                Handles window resizing events.

    Last revision: 17-10-2022
 
*/

// create module function
( function( textAnimation ){
    
    // create name space
    textAnimation.content = textAnimation.content ? textAnimation.content : {};
    
    // MODULE: contentModule( void ) void 
    textAnimation.content.contentModule = function( ) {
        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'ContentModule';                  // string
        self.debugOn = true;                                // boolean
        self.containerOptions = {                           // named array 
            'id'                    :   textAnimation.getUiId( self.moduleName + 'Container' ), // string 
            'element'               :   'div',              // html element type 
            'position'              :   'absolute',         // css
            'backgroundColor'       :   'transparent',      // css
            'overflow'              :   'hidden',           // css
        };                                                  // done named array  
        self.contentOptions = {                             // named array 
            'id'                    :   textAnimation.getUiId( self.moduleName + 'Content' ), // string 
            'element'               :   'div',              // html element type 
            'position'              :   'relative',         // css
            'backgroundColor'       :   'transparent',      // css
            'top'                   :   '0px',              // css
            'left'                  :   '0px',              // css
            'width'                 :   '100%',              // css
            'height'                :   '100%',              // css
        };                                                  // done named array
        self.layoutOptions = {                              // named array 
            'maximumWidth'          :   1200,               // integer
            'height'                :   70,                 // integer
            'width'                 :   70,                 // integer
        };                                                  // done named array  
        self.modules = {};                                  // named array
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
            // create html
            self.createHtml();
 
            // add events
            self.addEvents();
 
            // adjust layout
            self.layoutChange();

        // DONE FUNCTION: construct( void ) void
        };
        self.createHtml = function() {
        // FUNCTION: createHtml( void ) void

            // get container id
            let containerId = textAnimation.options &&
                              textAnimation.options.containerId ?
                              textAnimation.options.containerId :
                              null;
            // get container id

            // app container id is set
            if( containerId ){
          
                // create container
                textAnimation.appendContainer( containerId, self.containerOptions );
                    
                // create content
                textAnimation.appendContainer( self.containerOptions['id'], self.contentOptions );

                // done
                return;
                
            }
            // app container id is set

            // create container
            textAnimation.appendContainer( document.body, self.containerOptions );
                    
            // create content
            textAnimation.appendContainer( self.containerOptions['id'], self.contentOptions );
                    
        // DONE FUNCTION: createHtml( void ) void
        };
        self.addEvents = function() {
        // FUNCTION: addEvents( void ) void

            // add window.orientationchange 
            addEventListener( 'orientationchange', self.layoutChange );

            // add window.onresize
            addEventListener( 'resize', self.layoutChange );

        // DONE FUNCTION: addEvents( void ) void
        };
        self.removeEvents = function() {
        // FUNCTION: removeEvents( void ) void

            // remove window.orientationchange 
            removeEventListener( 'orientationchange', self.layoutChange );

            // remove window.onresize
            removeEventListener( 'resize', self.layoutChange );

        // DONE FUNCTION: removeEvents( void ) void
        };
        self.startAnimation = function() {
        // FUNCTION: startAnimation( void ) void

            // get animation module
            let animationModule = textAnimation.content.animation.animationModule;

            // create animation module
            self.modules.animation = new animationModule( self.contentOptions['id'] );

        // DONE FUNCTION: startAnimation( void ) void
        };
        self.layoutChange = function() {
        // FUNCTION: layoutChange( void ) void
            
            // create layout
            let layout = {
                'window'    : {},
                'parent'    : {},
                'container' : {}
            };
            // create layout
            
            // get window dimensions
            self.getWindowDimensions( layout );
            
            // get parent dimensions
            self.getParentDimensions( layout );
            
            // set full window dimensions
            self.setFullWindowDimensions( layout );

            // get dimensions
            self.getDimensions( layout );

            // get positions
            self.getPositions( layout );

            // set positions
            self.setPositions( layout );

            // set dimensions
            self.setDimensions( layout );

            // animation exists
            if( self.modules.animation ){

                // call animation
                self.modules.animation.layoutChange( );
                
            }
            // animation exists

        // DONE FUNCTION: layoutChange( void ) void
        };
        self.getWindowDimensions = function( layout ) {
        // FUNCTION: getWindowDimensions( named array: layout ) void

            // create dimensions
            layout['window']['dimensions'] = {
                'width'     :   window.innerWidth,
                'height'    :   window.innerHeight
            };
            // create dimensions

        // DONE FUNCTION: getWindowDimensions( named array: layout ) void
        };
        self.getParentDimensions = function( layout ) {
        // FUNCTION: getParentDimensions( named array: layout ) void

            // get parent id
            let parentId = textAnimation.options.containerId;

            // create dimensions
            layout['parent']['dimensions'] = {
                'width'     :   textAnimation.getElementById( parentId ).offsetWidth,
                'height'    :   textAnimation.getElementById( parentId ).offsetHeight
            };
            // create dimensions

        // DONE FUNCTION: getParentDimensions( named array: layout ) void
        };
        self.setFullWindowDimensions = function( layout ) {
        // FUNCTION: setFullWindowDimensions( named array: layout ) void

            // use full window ! set
            if( !textAnimation.options.useFullWindow ){

                // done
                return;
                
            }
            // use full window ! set

            // get window dimensions
            let windowDimensions = layout['window']['dimensions'];

            // get parent id
            let parentId = textAnimation.options.containerId;

            // set width
            textAnimation.setStyle( parentId, 'width', windowDimensions['width'] + 'px' );
            
            // set height
            textAnimation.setStyle( parentId, 'height', windowDimensions['height'] + 'px' );

        // DONE FUNCTION: setFullWindowDimensions( named array: layout ) void
        };
        self.getDimensions = function( layout ) {
        // FUNCTION: getDimensions( named array: layout ) void

            // get dimensions
            let dimensions = textAnimation.options.useFullWindow ?
                             layout['window']['dimensions'] :
                             layout['parent']['dimensions'];
            // get dimensions

            // calculate height
            let height = ( dimensions['height'] / 100 ) * self.layoutOptions['height'];

            // calculate width
            let width = ( dimensions['width'] / 100 ) * self.layoutOptions['width'];

            // set maximum
            width = Math.min( width,
                              self.layoutOptions['maximumWidth'] );
            // set maximum
            
            // get container dimensions
            layout['container']['dimensions'] = {
                'width'     :   width,
                'height'    :   height
            };
            // create container dimensions
            
        // DONE FUNCTION: getDimensions( named array: layout ) void
        };
        self.setDimensions = function( layout ) {
        // FUNCTION: setDimensions( named array: layout ) void

            // get container dimensions
            let dimensions = layout['container']['dimensions'];

            // set width
            textAnimation.setStyle( self.containerOptions['id'], 'width', dimensions['width'] + 'px' );
            
            // set height
            textAnimation.setStyle( self.containerOptions['id'], 'height', dimensions['height'] + 'px' );
                
        // DONE FUNCTION: setDimensions( named array: layout ) void
        };
        self.getPositions = function( layout ) {
        // FUNCTION: getPositions( named array: layout ) void

            // get dimensions
            let dimensions = textAnimation.options.useFullWindow ?
                             layout['window']['dimensions'] :
                             layout['parent']['dimensions'];
            // get dimensions

            // get dimensions
            let containerDimensions = layout['container']['dimensions'];
            
            // calculate top
            let top = ( dimensions['height'] - containerDimensions['height'] ) / 2;
            
            // calculate left
            let left = ( dimensions['width'] - containerDimensions['width'] ) / 2;
            
            // create positions
            let containerPositions = {
                'top'   :   top,
                'left'  :   left
            };
            // create positions
            
            // set container positions
            layout['container']['positions'] = containerPositions;

        // DONE FUNCTION: getPositions( named array: layout ) void
        };
        self.setPositions = function( layout ) {
        // FUNCTION: setPositions( named array: layout ) void

            // get positions
            let positions = layout['container']['positions'];

            // set left
            textAnimation.setStyle( self.containerOptions['id'], 'left', positions['left'] + 'px' );
            
            // set top
            textAnimation.setStyle( self.containerOptions['id'], 'top', positions['top'] + 'px' );
                
        // DONE FUNCTION: setPositions( named array: layout ) void
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
            // FUNCTION: startAnimation( void ) void
            startAnimation : function( ){
                
                // call internal
                self.startAnimation( );
                
            },
            // FUNCTION: destruct( void ) void    
            destruct : function( ){
                
                // call internal
                self.destruct( );
                
            }
            
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: contentModule( void ) void 
    
})( textAnimation );
// done create module function
