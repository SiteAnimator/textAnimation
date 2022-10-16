# textAnimation
example of a text animation with Javascript modules.


view online: https://siteanimator.nl/github/animations/textAnimation/minimized.php

This is an example application in Javascript.  
The application contains several modules that create a text animation.  
  
Learn more about SiteAnimator: https://siteanimator.nl/en/about-site-animator  

Learn more about Javascript modules: https://siteanimator.nl/en/blog  


To create animations:

In the index file you can find:

// add animations
require_once './assets/animations/intro.php';

the file should provide an array of animations:

// add animations
textAnimation.animations = [/../]; 

example of an animation:

{                                               
    'createElement'         :   true,                   // creates an html element       
    'text'                  :   'Hello',                // Sets the text of the element
    'elementOptions' : {                                // initial styling of the element
        'color'             :   'blue',                 // same as css but in cammel-case
        'fontSize'          :   '66px',
        'padding'           :   '25px 23px 23px 23px',
        'borderRadius'      :   '50%',
        'backgroundColor'   :   'orange'
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
    'duration'              :   35, 
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '0,1' 
        },                                      
        'parentTop' : {                         
            'position'      :   'bottom',       
            'path'          :   '49' 
        },                                      
        'parentLeft' : {                        
            'position'      :   'right',        
            'path'          :   '49' 
        }                                       
    }                                           
},
