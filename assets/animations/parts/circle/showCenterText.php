<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       showCenterText.php
        function:   containe the animations the center text
 *                  of the circle animation.

        Last revision: 16-10-2022
 
*/  
?>

{                                               
    'createElement'         :   true,           
    'text'                  :   'Text',         
    'elementOptions' : {
        'color'             :   'blue',
        'fontSize'          :   '57px',
        'display'           :   'block',
        'opacity'           :   0
    },
    'id'                    :   'showText',     
    'target'                :   'text',         
    'startDelay'            :   1,             
    'duration'              :   70, 
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '0,1' 
        },                                      
        'parentTop' : {                         
            'path'          :   '40' 
        },                                      
        'parentLeft' : {                        
            'path'          :   '28' 
        }                                       
    }                                           
}
