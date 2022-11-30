/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       transformModule.js
    function:   handels the transforms of the animations.

    Last revision: 08-11-2022
 
*/    

// create module function
( function( textAnimation ){
        
    // MODULE: transformModule( named array / undefined: options ) named array        
    textAnimation.animations.text.animate.transformModule = function( options ) {
        // PRIVATE:

        // MEMBERS:
        let self = this;                                    // object
        self.debugOn = false;                                // boolean
        self.MODULE = 'AnimationsTextAnimateTransformModule'; // string
        self.options = options;                             // named array / undefined 
        self.containerId = options['containerId'];          // html element id
        // DONE MEMBERS     
        
        // FUNCTIONS
        self.construct = function() {
        // FUNCTION: construct( void ) void
            
        // DONE FUNCTION: construct( void ) void
        };
        self.animate = function( layout, values ) {
        // FUNCTION: animate( named array: layout, named array: values ) void
            
            // add container to layout
            layout['container'] = {
                'dimensions'    : {
                    'scale'     :   {}
                },
                'positions'     : {}
            };
            // add container to layout
            
            // calculate dimensions 
            self.calculateDimensions( layout, values );
            
            // calculate scale
            self.calculateScale( layout );
            
            // calculate positions
            self.calculatePositions( layout, values );
            
            // adjust scaling positions
            self.adjustScalingPositions( layout );
            
            // transform
            self.transform( layout, values );
            
            // get container layout
            layout['container'] = textAnimation.getElementById( self.containerId ).getBoundingClientRect();
            
        // DONE FUNCTION: animate( named array: layout, named array: values ) void
        };
        self.calculateDimensions = function( layout, values ) {
        // FUNCTION: calculateDimensions( named array: layout, named array: values ) void

            // calculate width
            self.calculateWidth( 'width', layout, values );

            // calculate height
            self.calculateHeight( 'height', layout, values );

            // layout is landscape    
            if( layout['parent']['landscape'] ){
                
                // calculate landscape width
                self.calculateWidth( 'landscapeWidth', layout, values );

                // calculate landscape based height
                self.calculateHeight( 'landscapeHeight', layout, values );

            }
            // layout is landscape    

            // layout ! landscape    
            if( !layout['parent']['landscape'] ){
                
                // calculate portrait width
                self.calculateWidth( 'portraitWidth', layout, values );

                // calculate portrait height
                self.calculateHeight( 'portraitHeight', layout, values );

            }
            // layout ! landscape    

        // DONE FUNCTION: calculateDimensions( named array: layout, named array: values ) void
        };
        self.calculateWidth = function( itemId, layout, values ) {
        // FUNCTION: calculateWidth( string: itemId, named array: layout, named array: values ) void

            // item id ! set
            if( values[itemId] === undefined ){
            
                // done
                return;
                
            }
            // item id ! set

            // get dimensions
            let dimensions = layout['container']['dimensions'];
            
            // get item height
            let item = values[itemId];
            
            // calculate width
            dimensions['width'] = ( layout['parent']['width'] / 100 ) * item['value'];

            // height ratio is set
            if( item['heightRatio'] !== undefined ){
                
                // calculate height
                dimensions['height'] = dimensions['width'] * item['heightRatio'];

            }
            // height ratio is set
            
        // DONE FUNCTION: calculateWidth( string: itemId, named array: layout, named array: values ) void
        };
        self.calculateHeight = function( itemId, layout, values ) {
        // FUNCTION: calculateHeight( string: itemId, named array: layout, named array: values ) void

            // item id ! set
            if( values[itemId] === undefined ){
            
                // done
                return;
                
            }
            // item id ! set

            // get dimensions
            let dimensions = layout['container']['dimensions'];
            
            // get item height
            let item = values[itemId];
            
            // calculate height
            dimensions['height'] = ( layout['parent']['height'] / 100 ) * item['value'];

            // width ratio is set
            if( item['widthRatio'] !== undefined ){
                
                // calculate width
                dimensions['width'] = dimensions['height'] * item['widthRatio'];

            }
            // width ratio is set
            
        // DONE FUNCTION: calculateHeight( string: itemId, named array: layout, named array: values ) void
        };
        self.calculatePositions = function( layout, values ) {
        // FUNCTION: calculatePositions( named array: layout, named array: values ) void

            // calculate left
            self.calculateLeft(  'left', layout, values );

            // calculate top
            self.calculateTop( 'top', layout, values );

            // layout is landscape    
            if( layout['parent']['landscape'] ){
                
                // calculate landscape left
                self.calculateLeft( 'landscapeLeft', layout, values );

                // calculate landscape top
                self.calculateTop( 'landscapeTop', layout, values );

            }
            // layout is landscape    

            // layout ! landscape    
            if( !layout['parent']['landscape'] ){
                
                // calculate portrait left
                self.calculateLeft( 'portraitLeft', layout, values );

                // calculate portrait top
                self.calculateTop( 'portraitTop', layout, values );

            }
            // layout ! landscape    

        // DONE FUNCTION: calculatePositions( named array: layout, named array: values ) void
        };
        self.calculateLeft = function( itemId, layout, values ) {
        // FUNCTION: calculateLeft( string: itemId, named array: layout, named array: values ) void

            // item id ! exists
            if( !values[itemId] ){
                
                // done
                return '';
                
            }   
            // item id ! exists

            // get positions
            let positions = layout['container']['positions'];
            
            // get item
            let item = values[itemId];
            
            // calculate left
            positions['left'] = ( layout['parent']['width'] / 100 ) * item['value'];        

        // DONE FUNCTION: calculateLeft( string: itemId, named array: layout, named array: values ) void
        };
        self.calculateTop = function( itemId, layout, values ) {
        // FUNCTION: calculateTop( string: itemId, named array: layout, named array: values ) void

            // item id ! exists
            if( !values[itemId] ){
                
                // done
                return '';
                
            }   
            // item id ! exists

            // get positions
            let positions = layout['container']['positions'];
            
            // get item
            let item = values[itemId];
            
            // calculate top
            positions['top'] = ( layout['parent']['height'] / 100 ) * item['value'];        

        // DONE FUNCTION: calculateTop( string: itemId, named array: layout, named array: values ) void
        };
        self.calculateScale = function( layout ) {
        // FUNCTION: calculateScale( named array: layout ) void

            // get dimensions
            let dimensions = layout['container']['dimensions'];
            
            // get scale
            let scale = dimensions['scale'];
            
            // get width
            dimensions['initialWidth'] = self.getInitialWidth();
                                
            // get height
            dimensions['initialHeight'] = self.getInitialHeight();
            
            // calculate scale x
            scale['x'] = dimensions['width'] / dimensions['initialWidth'];

            // calculate scale y
            scale['y'] = dimensions['height'] / dimensions['initialHeight'];

        // DONE FUNCTION: calculateScale( named array: layout ) void
        };
        self.getInitialWidth = function( ) {
        // FUNCTION: getInitialWidth( void ) integer

            // get width
            let initialWidth = textAnimation.getElementById( self.containerId ).offsetWidth;
            
            // initial width is 0
            if( initialWidth === 0 ){
                
                // set minimum
                initialWidth = 10;    
                
                // set minimum
                textAnimation.setStyle( self.containerId , 'width', initialWidth + 'px' ); 
                
            }
            // initial width is 0
                        
            // return result
            return initialWidth;

        // DONE FUNCTION: getInitialWidth( void ) integer
        };
        self.getInitialHeight = function( ) {
        // FUNCTION: getInitialHeight( void ) integer

            // get height
            let initialHeight = textAnimation.getElementById( self.containerId ).offsetHeight;
            
            // initial height is 0
            if( initialHeight === 0 ){
                
                // set minimum
                initialHeight = 10;    
                
                // set minimum
                textAnimation.setStyle( self.containerId , 'height', initialHeight + 'px' ); 
                
            }
            // initial height is 0
                        
            // return result
            return initialHeight;

        // DONE FUNCTION: getInitialHeight( void ) integer
        };
        self.adjustScalingPositions = function( layout ) {
        // FUNCTION: adjustScalingPositions( named array: layout ) void

            // get dimensions
            let dimensions = layout['container']['dimensions'];
            
            // calculate adjust left
            let left = ( dimensions['width'] - dimensions['initialWidth'] ) / 2;
                       
            // calculate adjust top
            let top = ( dimensions['height'] - dimensions['initialHeight'] ) / 2;
            
            // get positions
            let positions = layout['container']['positions'];
            
            // add left 
            positions['left'] += left;
            
            // add top
            positions['top'] += top;
            
        // DONE FUNCTION: adjustScalingPositions( named array: layout ) void
        };
        self.transform = function( layout, values ) {
        // FUNCTION: transform( named array: layout, named array: values ) void

            // create transform
            let transform = '';
            
            // get positions
            let positions = layout['container']['positions'];
            
            // left exists
            if( positions['left'] ){
            
                // add translate x
                transform += 'translateX(' + positions['left'] + 'px )';
                
            }
            // left exists
            
            // top exists
            if( positions['top'] ){
            
                // add translate y
                transform += 'translateY(' + positions['top'] + 'px )';
                
            }
            // top exists
            
            // get scale
            let scale = layout['container']['dimensions']['scale'];
            
            // scale exists
            if( scale ){
                
                // add scale x
                transform += 'scaleX(' + scale['x'] + ')';
                        
                // add scale y
                transform += 'scaleY(' + scale['y'] + ')';
                        
            }
            // scale exists
            
            // get rotate transforms
            transform += self.getRotateTransform( values );
            
            // get skew transforms
            transform += self.getSkewTransform( values );
            
            // set style
            textAnimation.setStyle( self.containerId , 'transform', transform ); 

        // DONE FUNCTION: transform( named array: layout, named array: values ) void
        };
        self.getRotateTransform = function( values ) {
        // FUNCTION: getRotateTransform( named array: values ) string
            
            // create transform
            let transform = '';
                
            // add rotate
            transform += self.getRotate( 'rotate', values );
                
            // add rotate
            transform += self.getRotate( 'rotateX', values );
                
            // add rotate
            transform += self.getRotate( 'rotateY', values );
                
            // add rotate
            transform += self.getRotate( 'rotateZ', values );
                
            // return result
            return transform;
            
        // DONE FUNCTION: getRotateTransform( named array: values ) string
        };
        self.getRotate = function( itemId, values ) {
        // FUNCTION: getRotate( string: itemId, named array: values ) string
            
            // item id ! exists
            if( !values[itemId] ){
                
                // done
                return '';
                
            }   
            // item id ! exists

            // create transform
            let transform = '';
                
            // get units
            let units = self.getUnits( itemId, values, 'deg' );
                
            // add rotate
            transform += itemId + '( ' + 
                            parseInt( values[itemId]['value'] ) +
                         units + ' ) ';
            // add rotate
                
            // return result
            return transform;
            
        // DONE FUNCTION: getRotate( string: itemId, named array: values ) string
        };
        self.getSkewTransform = function( values ) {
        // FUNCTION: getSkewTransform( named array: values ) string
            
            // create transform
            let transform = '';
                
            // add rotate
            transform += self.getSkew( 'skew', values );
                
            // add rotate
            transform += self.getSkew( 'skewX', values );
                
            // add rotate
            transform += self.getSkew( 'skewY', values );
                
            // return result
            return transform;
            
        // DONE FUNCTION: getSkewTransform( named array: values ) string
        };
        self.getSkew = function( itemId, values ) {
        // FUNCTION: getSkew( string: itemId, named array: values ) string
            
            // item id ! exists
            if( !values[itemId] ){
                
                // done
                return '';
                
            }   
            // item id ! exists

            // create transform
            let transform = '';
                
            // get units
            let units = self.getUnits( itemId, values, 'deg' );
                
            // add rotate
            transform += itemId + '( ' + 
                            parseInt( values[itemId]['value'] ) +
                         units + ' ) ';
            // add rotate
                
            // return result
            return transform;
            
        // DONE FUNCTION: getSkew( string: itemId, named array: values ) string
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

            // FUNCTION: animate( named array: layout, named array: values ) void    
            animate : function( layout, values ){
                
                // call internal
                self.animate( layout, values );
                
            },
            // FUNCTION: destruct( void ) void    
            destruct : function( ){
                
                // call internal
                self.destruct( );
                
            }
            
        };
        // DONE PUBLIC
        
    };
    // DONE MODULE: transformModule( named array / undefined: options ) named array 
    
})( textAnimation );
// done create module function


