# textAnimation
example of a text animation with Javascript modules.


view online: https://siteanimator.nl/github/animations/textAnimation/minimized.php

This is an example application in Javascript.  
The application contains several modules that create a text animation.  
  
Learn more about SiteAnimator: https://siteanimator.nl/en/about-site-animator  

Learn more about Javascript modules: https://siteanimator.nl/en/blog  


To add and repeat animations:

In the index file you can find:

    // create animation options
    textAnimation.animationOptions = {
        'files' : [
            
            './assets/animations/presentation/intro/welcome/createText.php',
            /.../
        ],
        'repeatOptions' : {
            'repeat'    :   'forever',
            'from'      :   'showWelcome'
        }
    };
    // create animation options

example of an animation:

    {                                               
        'id'                    :   'animation1',           // id of the animation ( used in the repeat ).
        'target'                :   'animation1',           // target element of the animation ( used to identify the HTML element ).
        'createElement'         :   true,                   // creates an html element       
        'removeElement'         :   true,                   // removes an html element       
        'text'                  :   'Hello',                // Sets the text of the element
        'elementOptions' : {                                // initial styling of the element
            'color'             :   'blue',                 // same as css but in cammel-case
            'fontSize'          :   '66px',                 // same as css but in cammel-case
            'padding'           :   '25px 23px 23px 23px',  // same as css but in cammel-case
            'borderRadius'      :   '50%',                  // same as css but in cammel-case
            'backgroundColor'   :   'orange'                // same as css but in cammel-case
        },
        'id'                    :   'showHello',            // id of this animation part
        'target'                :   'hello',                // a target can play one animation
                                                            // at a time    
        'trigger' : {                                       // triggers an event
            'itemId'            :   'opacity',              // item that triggers the event
            'at'                :   0,                      // index in path that triggers
            'show'              :   true,                   // show the element
            'playNext'          :   true,                   // play the next animation
        },                                          
        'startDelay'            :   1,                      // delay in frames
        'duration'              :   35,                     // duration of the animation in frames
        'items' : {                                         // changeable options of the animation. 
                                                            // An item is for example 'left', ''right', 'rotate', 'colorR'.
            'opacity' : {                                   // an item
                'path'          :   '0,1'                   // the path will determine the values of the item in the animation.
                                                            // When the path is an array of floats then steps in between the path are calculated.
                                                            // When the path is an array of strings then steps of the path are used literally.
                                                            // When the path is an array of 2 floats then an effect can be added.
            },                                       
            'landScapeLeft' : {                             // an item
                'path'          :   '-10,1',                // path to animate
                'effect'        :   'inOut'                 // the effect to animate   
            },                                       
            'rotate' : {                                    // an item
                'path'          :   '-10,10,0,-10,10,0',    // path to animate
                'units'         :   'deg'                   // units of the rotation
            }                                       
        }                                           
    };

The items that can be used:

left, top, width, height, 
landscapeLeft, landscapeTop, , landscapeHeight, landscapeWidth, 
portraitLeft, portraitTop, , portraitHeight, portraitWidth,

border, text, font, padding, 

rotate, rotateX, rotateY, rotateZ

skew, skewX, skewY

opacity, rgb, background rgb, border rgb, hsl, background hsl, border hsl,

color, backgroundColor, borderColor

the landscape and portrait dimensions are dependent on the dimensions of the container wherein the animations are dislayed.

The effects that can be used:

outQuad, inQuad, inOutQuad, 
inSine, outSine, inOutSine,
inElastic, outElastic, inOutElastic, 
inBack, outBack, inOutBack.

To set the container wherein the animations are displayed:

In the index file you can find:

// add container id
textAnimation.options.containerId = 'animationDiv';

if the option use full window is set 100% of the width and 100% of the height is used.

In the index file you can find:

// use full window
textAnimation.options.useFullWindow = true;
 

To set the frame rate of the animations:

In the index file you can find:

// add frame rate
textAnimation.options.frameRate = 40;
    

