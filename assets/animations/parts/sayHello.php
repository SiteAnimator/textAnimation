<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       animations.php
        function:   containe the animations for the text animation.

        Last revision: 09-10-2022
 
*/  
?>

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
            'path'          :   '49' 
        },                                      
        'parentLeft' : {                        
            'path'          :   '49' 
        }                                       
    }                                           
},
{                                               
    'id'                    :   'turnClockwise',     
    'target'                :   'hello',         
    'startDelay'            :   10,             
    'duration'              :   70, 
    'items' : {                                 
        'rotate' : {                           
            'path'          :   '0,360' 
        },                                      
    },                                           
},
{                                               
    'id'                    :   'turnAntiClockwise',     
    'target'                :   'hello',         
    'startDelay'            :   10,             
    'duration'              :   70, 
    'items' : {                                 
        'rotate' : {                           
            'path'          :   '360,0' 
        },                                      
    },                                           
},
{                                               
    'id'                    :   'hideHello',     
    'target'                :   'hello',         
    'startDelay'            :   10,             
    'duration'              :   70, 
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '1,0' 
        }                                       
    },                                           
    'removeElement'         : true,                                          
}                                               