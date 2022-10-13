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
    'text'                  :   'T',  
    'elementOptions' : {
        'color'             :   'blue',
        'fontSize'          :   '36px',
        'padding'           :   '8px 4px 4px 4px',
        'borderRadius'      :   '50%',
        'backgroundColor'   :   'orange'
    },
    'id'                    :   'showT1',     
    'target'                :   't1',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'show'              :   true,              
        'playNext'          :   true,              
    },                                          
    'startDelay'            :   1,             
    'duration'              :   70, 
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '0,1' 
        },                                      
        'parentTop' : {                         
            'position'      :   'bottom',       
            'path'          :   '110,49' 
        },                                      
        'parentLeft' : {                        
            'position'      :   'right',        
            'path'          :   '49' 
        }                                       
    }                                           
},                                               
{                                               
    'createElement'         :   true,           
    'text'                  :   'e',         
    'elementOptions' : {
        'color'             :   'blue',
        'fontSize'          :   '36px',
        'padding'           :   '1px 4px 5px 4px',
        'borderRadius'      :   '50%',
        'backgroundColor'   :   'orange'
    },
    'id'                    :   'showE',     
    'target'                :   'e',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'playNext'          :   true,              
        'show'              :   true,              
    },                                          
    'startDelay'            :   1,             
    'duration'              :   70, 
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '0,1' 
        },                                      
        'parentTop' : {                         
            'position'      :   'bottom',       
            'path'          :   '110,49' 
        },                                      
        'parentLeft' : {                        
            'position'      :   'right',        
            'path'          :   '49',
            'offset'        :   27
        }                                       
    }                                           
},                                               
{                                               
    'createElement'         :   true,           
    'text'                  :   'x',         
    'elementOptions' : {
        'color'             :   'blue',
        'fontSize'          :   '36px',
        'padding'           :   '0px 6px 6px 6px',
        'borderRadius'      :   '50%',
        'backgroundColor'   :   'orange'
    },
    'id'                    :   'showX',     
    'target'                :   'x',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'playNext'          :   true,              
        'show'              :   true,              
    },                                          
    'startDelay'            :   1,             
    'duration'              :   70, 
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '0,1' 
        },                                      
        'parentTop' : {                         
            'position'      :   'bottom',       
            'path'          :   '110,49' 
        },                                      
        'parentLeft' : {                        
            'position'      :   'right',        
            'path'          :   '49',
            'offset'        :   60 
        }                                       
    }                                           
},                                               
{                                               
    'createElement'         :   true,           
    'text'                  :   't',         
    'elementOptions' : {
        'color'             :   'blue',
        'fontSize'          :   '36px',
        'padding'           :   '0px 6px 6px 6px',
        'borderRadius'      :   '50%',
        'backgroundColor'   :   'orange'
    },
    'id'                    :   'showT2',     
    'target'                :   't2',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'show'              :   true,              
    },                                          
    'startDelay'            :   1,             
    'duration'              :   70, 
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '0,1' 
        },                                      
        'parentTop' : {                         
            'position'      :   'bottom',       
            'path'          :   '110,49' 
        },                                      
        'parentLeft' : {                        
            'position'      :   'right',        
            'path'          :   '49',
            'offset'        :   83 
        }                                       
    }                                           
}                                               