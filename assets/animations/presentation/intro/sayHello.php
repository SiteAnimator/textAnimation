<?php
/*
 
        @package    SiteAnimator\Animations\TextAnimation

        file:       sayHello.php
        function:   containe the say hello animations 
                    for the intro of the presentation.

        Last revision: 19-10-2022
 
*/  

?>

{                                               
    'createElement'         :   true,           
    'text'                  :   'Hello',           
    'containerOptions' : {
        'backgroundColor'   :   'green'
    },
    'textOptions' : {
        'backgroundColor'   :   'red'
    },
    'id'                    :   'backgroundShowGreen',     
    'target'                :   'backgroundGreen',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'show'              :   true,              
//        'playNext'          :   true,              
    },                                          
    'startDelay'            :   1,             
    'duration'              :   35, 
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '1' 
        },                                      
        'parentWidth' : {                         
            'path'          :   '0,100' 
        },                                      
        'parentHeight' : {                        
            'path'          :   '0,100' 
        },                                      
        'parentLeft' : {                         
            'path'          :   '50,0' 
        },                                      
        'parentTop' : {                        
            'path'          :   '50,0' 
        },                                      
        'textFit' : {                           
            'path'          :   '90' 
        },                                      
    },                                           
//    'removeElement'         :   true,           
}

                                               