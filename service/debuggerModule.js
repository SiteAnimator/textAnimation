/*
        @package    SiteAnimator\Modules\Animations\TextAnimation
  
        file:       debuggerModule.js
        function:   Displays a debug window
                    adds the funtion: 'debug' to the application;
                    displays messages send through the debug function
  
        Last revision: 14-09-2022
 
*/

// create module function
( function( textAnimation ){
    
    // create name space
    textAnimation.service = textAnimation.service ? textAnimation.service : {};
    
    // MODULE: debuggerModule( named array / undefined: options ) void 
    textAnimation.service.debuggerModule = function( options ) {        
        // PRIVATE:
        
        // MEMBERS
        var self = this;                                    // object
        self.moduleName = 'debuggerModule';                 // string
        self.options = options;                             // named array / undefined
        self.on = true;                                     // boolean
        self.elementIds = {                                 // named array 
            'container'         :   self.moduleName + '_Container', // string
            'dragHandle'        :   self.moduleName + '_DragHandle', // string
            'content'           :   self.moduleName + '_Content', // string
        };                                                  // done named array  
        self.layoutOptions = {                              // named array 
            'zIndex'            :   8000,                   // integer
            'top'               :   120,                    // integer
            'left'              :   600,                    // integer
            'width'             :   900,                    // integer
            'height'            :   200                     // integer            
        };                                                  // done named array  
        self.colors = {                                     // named array 
            'background'        :   'black',                // color
            'border'            :   'lightBlue',            // color
            'dragHandle' : {                                // named array 
                'background'    :   'green',                // color
                'highlight'     :   'lightgreen',           // color
            },                                              // done named array  
            'content' : {                                   // named array 
                'background'    :   'black',                // color
                'color'         :   'lightgrey',            // color
            }                                               // done named array  
        };                                                  // done named array 
        self.lastPosition = null;                           // named array / null
        self.lineCounter = 0;                               // integer
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void            
            
            // extend options
            self.extendOptions();
            
            // create html
            self.createHtml();
            
            // add events
            self.addEvents();

            // add application extensions
            self.addApplicationExtensions();
            
        // DONE FUNCTION: construct( void ) void
        };        
        self.addApplicationExtensions = function() {
        // FUNCTION: addApplicationExtensions( void ) void

            // add debug function
            textAnimation.debug = self.debug;

        // DONE FUNCTION: addApplicationExtensions( void ) void
        };        
        self.debug = function( message ) {
        // FUNCTION: debug( string: message ) void

            // debug ! on
            if( !self.on ){

                // done
                return;
                
            }
            // debug ! on

            // get element
            let content = document.getElementById( self.elementIds['content'] );

            // create the line
            let line = document.createElement( 'div' );
            line.textContent = self.lineCounter + '  ' + message ;

            // show message
            content.prepend( line );
                
            // update line counter
            self.lineCounter++;
            
            // reset line counter
            self.lineCounter %= 10;             

        // DONE FUNCTION: debug( string: message ) void
        };        
        self.extendOptions = function() {
        // FUNCTION: extendOptions( void ) void

            // get options
            let options = self.options;

            // set on
            self.on = options['on'] !== undefined && options['on'] === true ? true : false; 
            
            // loop over layout options
            for( let index of Object.keys( self.layoutOptions ) ){
            
                // over ride option exists
                if( options['layoutOptions'][index] !== undefined ){
            
                    // set value
                    self.layoutOptions[index] = options['layoutOptions'][index];
                    
                }
                // over ride option exists
                
            }
            // loop over layout options
            
        // DONE FUNCTION: extendOptions( void ) void
        };
        self.createHtml = function() {
        // FUNCTION: createHtml( void ) void

            // debug ! on
            if( !self.on ){

                // done
                return;
                
            }
            // debug ! on

            // create container
            self.createContainer();

            // create drag handle
            self.createDragHandle();

            // create content
            self.createContent();

        // DONE FUNCTION: createHtml( void ) void
        };
        self.createContainer = function() {
        // FUNCTION: createContainer( void ) void

            // get element ids
            let elementIds = self.elementIds;

            // get colors
            let colors = self.colors;

            // get layout options
            let layoutOptions = self.layoutOptions;

            // create style
            let style = 'position:absolute; ' +
                        'top: ' + layoutOptions['top'] + 'px; ' +
                        'left: ' + layoutOptions['left'] + 'px;' + 
                        'z-index: ' + layoutOptions['zIndex'] + ';' +
                        'background-color: ' + colors['background'] + ';' +
                        'border: ' + colors['border'] + ' 1px groove;' +
                        'border-radius: 5px;';
            // create style
            
            // create the div
            let div = document.createElement('div');
            
            // set id
            div.id = elementIds['container'];
            
            // set style
            div.setAttribute ( 'style', style );
            
            // add child
            document.body.appendChild( div );
            
        // DONE FUNCTION: createContainer( void ) void
        };
        self.createDragHandle = function() {
        // FUNCTION: createDragHandle( void ) void

            // get element ids
            let elementIds = self.elementIds;

            // get colors
            let colors = self.colors;

            // create style
            let style = 'height:24px;' +
                        'padding-left: 4px; ' +
                        'padding-top: 1px;' +
                        'background-color:' + colors['dragHandle']['background'] + ';' +
                        'font-size:14px;font-family:times new roman';
            // create style
                
            // create the div
            let div = document.createElement('div');
            
            // set id
            div.id = elementIds['dragHandle'];
            
            // set style
            div.setAttribute ( 'style', style );
            
            // set text
            div.innerHTML = 'Debugger';
            
            // get container
            let container = document.getElementById( self.elementIds['container'] );
            
            // add child
            container.appendChild( div );
            
        // DONE FUNCTION: createDragHandle( void ) void
        };
        self.createContent = function() {
        // FUNCTION: createContent( void ) void

            // get element ids
            let elementIds = self.elementIds;

            // get colors
            let colors = self.colors;

            // get layout options
            let layoutOptions = self.layoutOptions;

            // create style
            let style = 'overflow: auto;' +
                        'width: ' + layoutOptions['width'] + 'px;' +
                        'height: ' + layoutOptions['height'] + 'px;' +
                        'background-color:' + colors['content']['background'] + ';' +
                        'color:' + colors['content']['color'] + ';' +
                        'font-size:18px;font-family:times new roman';
            // create style
                        
            // create the div
            let div = document.createElement('div');
            
            // set id
            div.id = elementIds['content'];
            
            // set style
            div.setAttribute ( 'style', style );
            
            // get container
            let container = document.getElementById( self.elementIds['container'] );
            
            // add child
            container.appendChild( div );
            
        // DONE FUNCTION: createContent( void ) void
        };
        self.addEvents = function() {
        // FUNCTION: addEvents( void ) void

            // debug ! on
            if( !self.on ){

                // done
                return;
                
            }
            // debug ! on

            // get drag handle
            let dragHandle = document.getElementById( self.elementIds['dragHandle'] );

            // add drag events
            dragHandle.addEventListener( 'mouseenter', self.dragHandleMouseIn );
            dragHandle.addEventListener( 'mouseout', self.dragHandleMouseOut );
            dragHandle.addEventListener( 'mousedown', self.dragHandleMouseDown );
            // add drag events

        // DONE FUNCTION: addEvents( void ) void
        };
        self.dragHandleMouseIn = function( ) {
        // FUNCTION: dragHandleMouseIn( void ) void

            // get drag handle colors
            let colors = self.colors['dragHandle'];
            
            // get drag handle
            let dragHandle = document.getElementById( self.elementIds['dragHandle'] );

            // highlight draghandle
            dragHandle.style.backgroundColor = colors['highlight'];
            
        // DONE FUNCTION: dragHandleMouseIn( void ) void
        };
        self.dragHandleMouseOut = function( ) {
        // FUNCTION: dragHandleMouseOut( void ) void
            
            // get drag handle colors
            let colors = self.colors['dragHandle'];
            
            // get drag handle
            let dragHandle = document.getElementById( self.elementIds['dragHandle'] );

            // reset draghandle
            dragHandle.style.backgroundColor = colors['background'];
            
        // DONE FUNCTION: dragHandleMouseOut( void ) void
        };
        self.dragHandleMouseDown = function( event ) {
        // FUNCTION: dragHandleMouseDown( void ) void
            
            // remember position
            self.lastPosition = { 'x' : event.pageX, 'y' : event.pageY };
            
            // add events
            document.addEventListener( 'mousemove', self.move );
            document.addEventListener( 'mouseup', self.up );
            // add events
            
        // DONE FUNCTION: dragHandleMouseDown( void ) void
        };
        self.move = function( event ) {
            
            // create positions change
            self.positionChange = { 
                'x' : 0, 
                'y' : 0 
            };
            // create positions change
            
            self.positionChange['y'] = self.lastPosition['y'] - event.pageY;
            self.positionChange['x'] = self.lastPosition['x'] - event.pageX;
            
            // get container
            let container = document.getElementById( self.elementIds['container'] );
            
            // subtract change x
            let left = parseInt( container.style.left.replace( 'px', '' ) ) - parseInt( self.positionChange['x'] );
                    
            // set left 
            container.style.left = Math.max( 0, left ) + 'px';

            // get top
            let top = parseInt( container.style.top.replace( 'px', '' ) ) - parseInt( self.positionChange['y'] );
            
            // set minimum 
            top = Math.max( 0, top );
            
            // set top
            container.style.top = Math.max( 0, top ) + 'px';
            
            // remember last position
            self.lastPosition = { 'x' : event.pageX, 'y' : event.pageY };
            
        }; 
        self.up = function( event ) { 
            
            // remove events
            document.removeEventListener( 'mousemove', self.move );
            document.removeEventListener( 'mouseup', self.up );
            // remove events
            
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
    // DONE MODULE: debuggerModule( named array / undefined: options ) void 
    
})( textAnimation );
// done create module function
