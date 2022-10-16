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
        'text'                  :   'Text',         
        'id'                    :   'showText',     
        'target'                :   'text',         
        'trigger' : {                               
            'itemId'            :   'opacity',      
            'at'                :   0,              
            'playNext'          :   true,              
        },                                          
        'startDelay'            :   20,             
        'duration'              :   40,             
        'items' : {                                 
            'opacity' : {                           
                'path'          :   '1, 0.5, 0.6, 0.9, 1.0' 
            },                                      
            'rotate' : {                           
                'path'          :   '0, 55, 0, -50, 0' 
            },                                      
            'colorR' : {                            
                'path'          :   '100, 200, 149, 149, 200' 
            },                                      
            'colorG' : {                            
                'path'          :   '100, 200, 149, 149, 200' 
            },                                      
            'colorB' : {                            
                'path'          :   '10, 20, 49, 49, 20' 
            },                                      
            'fontSize' : {                          
                'units'         :   'em',           
                'path'          :   '8.2, 3.0' 
            },                                      
            'parentTop' : {                         
                'position'      :   'bottom',       
                'path'          :   '-30, 20, 40, 38, 49' 
            },                                      
            'parentLeft' : {                        
                'position'      :   'right',        
                'path'          :   '-30, 49' 
            }                                       
        }                                           
    },                                      
    {                                               
        'id'                    :   'showAnimationText', 
        'createElement'         :   true,           
        'text'                  :   'Animation',         
        'target'                :   'animationText',
        'trigger' : {                               
            'itemId'            :   'opacity',      
            'at'                :   0,              
        },                                          
        'duration'              :   50,             
        'items' : {                                 
            'opacity' : {                           
                'path'          :   '0, 1.0' 
            },                                      
            'fontSize' : {                          
                'units'         :   'em',           
                'path'          :   '2.2, 2.9, 3.1, 3.0' 
            },                                      
            'parentTop' : {                         
                'position'      :   'middle',       
                'path'          :   '45'            
            },                                      
            'parentLeft' : {                        
                'position'      :   'left',         
                'path'          :   '130, 120, 93, 60, 59'
            }                                       
        }                                           
    },                                              
    {                                               
        'id'                    :   'blinkText',    
        'target'                :   'text',         
        'duration'              :   30,             
        'items' : {                                 
            'colorR' : {                            
                'path'          :   '0, 200, 0, 149, 200' 
            },                                      
            'colorG' : {                            
                'path'          :   '0, 200, 0, 149, 200'
            },                                      
            'colorB' : {                            
                'path'          :   '0, 20, 0, 49, 20' 
            },                                      
        }                                           
    },                                              
    {                                               
        'id'                    :   'rotateAnimationText', 
        'target'                :   'animationText', 
        'duration'              :   20,            
        'items' : {                                
            'rotate' : {                           
                'path'          :   '0, 360, 0'    
            },                                     
        }                                          
    },                                              
    {                                               
        'id'                    :   'stretchAnimationText', 
        'target'                :   'animationText',
        'duration'              :   30,             
        'items' : {                                 
            'scaleX' : {                            
                'path'          :   '1, 0.7, 1, 1.2, 1'     
            },                                      
        }                                           
    },                                             
    {                                              
        'id'                    :   'stretchText', 
        'target'                :   'text', 
        'duration'              :   30,             
        'items' : {                                 
            'scaleX' : {                            
                'path'          :   '1, 0.7, 1, 1.2, 1'    
            },                                      
        }                                           
    }                                               
];
// add animations
