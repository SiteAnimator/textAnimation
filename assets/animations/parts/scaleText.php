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
        'itemId'            :   'scale',      
        'at'                :   3,              
        'playNext'          :   true,              
    },                                          
    'startDelay'            :   10,             
    'duration'              :   15,  
    'items' : {                                 
        'scale' : {                           
            'path'          :   '1,1.2,0.9,1' 
        }                                       
    },                                                                                  
},
{                                               
    'id'                    :   'blinkE',     
    'target'                :   'e',         
    'trigger' : {                               
        'itemId'            :   'scale',      
        'at'                :   3,              
        'playNext'          :   true,              
    },                                          
    'duration'              :   15,  
    'items' : {                                 
        'scale' : {                           
            'path'          :   '1,1.2,0.9,1' 
        }                                       
    },                                           
},
{                                               
    'id'                    :   'blinkX',     
    'target'                :   'x',         
    'trigger' : {                               
        'itemId'            :   'scale',      
        'at'                :   3,              
        'playNext'          :   true,              
    },                                          
    'duration'              :   15,  
    'items' : {                                 
        'scale' : {                           
            'path'          :   '1,1.2,0.9,1' 
        }                                      
    },                                           
},
{                                               
    'id'                    :   'blinkT2',     
    'target'                :   't2',         
    'duration'              :   15,  
    'items' : {                                 
        'scale' : {                           
            'path'          :   '1,1.2,0.9,1' 
        }                                      
    },                                           
}                                               