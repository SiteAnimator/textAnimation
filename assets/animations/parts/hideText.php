<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       animations.php
        function:   containe the animations for the text animation.

        Last revision: 09-10-2022
 
*/  
?>

{                                               
    'id'                    :   'hideT1',     
    'target'                :   't1',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'playNext'          :   true,              
    },                                          
    'startDelay'            :   50,             
    'duration'              :   70, 
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '1,0' 
        },                                      
        'parentTop' : {                         
            'path'          :   '49,-10' 
        },                                      
    },                                           
    'removeElement'         : true,                                          
},
{                                               
    'id'                    :   'hideE',     
    'target'                :   'e',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'playNext'          :   true,              
    },                                          
    'startDelay'            :   1,             
    'duration'              :   70, 
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '1,0' 
        },                                      
        'parentTop' : {                         
            'position'      :   'bottom',       
            'path'          :   '49,-10' 
        },                                      
    },                                           
    'removeElement'         : true,                                          
},
{                                               
    'id'                    :   'hideX',     
    'target'                :   'x',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'playNext'          :   true,              
    },                                          
    'startDelay'            :   1,             
    'duration'              :   70, 
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '1,0' 
        },                                      
        'parentTop' : {                         
            'path'          :   '49,-10' 
        },                                      
    },                                           
    'removeElement'         : true,                                          
},
{                                               
    'id'                    :   'hideT2',     
    'target'                :   't2',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
    },                                          
    'startDelay'            :   1,             
    'duration'              :   70, 
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '1,0' 
        },                                      
        'parentTop' : {                         
            'path'          :   '49,-10' 
        },                                      
    },                                           
    'removeElement'         : true,                                          
}                                               