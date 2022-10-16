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
        'text'                  :   'T',         
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
                'offset'        :   10
            }                                       
        }                                           
    },                                               
    {                                               
        'createElement'         :   true,           
        'text'                  :   'x',         
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
                'offset'        :   22 
            }                                       
        }                                           
    },                                               
    {                                               
        'createElement'         :   true,           
        'text'                  :   't',         
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
                'offset'        :   30 
            }                                       
        }                                           
    },
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
                'position'      :   'bottom',       
                'path'          :   '49,-10' 
            },                                      
        }                                           
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
            'parentLeft' : {                        
                'position'      :   'right',        
                'path'          :   '49',
                'offset'        :   10
            }                                       
        }                                           
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
                'position'      :   'bottom',       
                'path'          :   '49,-10' 
            },                                      
            'parentLeft' : {                        
                'position'      :   'right',        
                'path'          :   '49',
                'offset'        :   22 
            }                                       
        }                                           
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
                'position'      :   'bottom',       
                'path'          :   '49,-10' 
            },                                      
            'parentLeft' : {                        
                'position'      :   'right',        
                'path'          :   '49',
                'offset'        :   30 
            }                                       
        }                                           
    }                                               
];
// add animations
