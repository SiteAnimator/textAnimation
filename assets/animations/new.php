<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       animations.php
        function:   containe the animations for the text animation.

        Last revision: 16-10-2022
 
*/  
?>
// add animations
textAnimation.animations = [
{                                               
    'createElement'         :   true,           
    'text'                  :   'Hello',  
    'textOptions' : {
        'color'             :   'blue',
        'fontSize'          :   '66px',
        'padding'           :   '25px 23px 23px 23px',
        'borderRadius'      :   '50%',
        'backgroundColor'   :   'orange'
    },
    'id'                    :   'showHello',     
    'target'                :   'hello',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'show'              :   true,              
        'playNext'          :   true,              
    },                                          
    'startDelay'            :   1,             
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
}
];
// add animations
