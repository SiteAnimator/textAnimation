<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       animations.php
        function:   containe the animations for the text animation.

        Last revision: 09-10-2022
 
*/  
?>

{                                               
    'id'                    :   'blinkT1',     
    'target'                :   't1',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'playNext'          :   true,              
    },                                          
    'startDelay'            :   10,             
    'duration'              :   25,  
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '1,0,1,0,1' 
        }                                       
    },                                                                                  
},
{                                               
    'id'                    :   'blinkE',     
    'target'                :   'e',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'playNext'          :   true,              
    },                                          
    'startDelay'            :   1,             
    'duration'              :   25,  
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '1,0,1,0,1' 
        }                                       
    },                                           
},
{                                               
    'id'                    :   'blinkX',     
    'target'                :   'x',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'playNext'          :   true,              
    },                                          
    'startDelay'            :   1,             
    'duration'              :   25,  
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '1,0,1,0,1' 
        }                                       
    },                                           
},
{                                               
    'id'                    :   'blinkT2',     
    'target'                :   't2',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
    },                                          
    'startDelay'            :   1,             
    'duration'              :   25,  
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '1,0,1,0,1' 
        }                                       
    },                                           
}                                               