<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       showCenterText.php
        function:   containe the animations the center text
 *                  of the circle animation.

        Last revision: 16-10-2022
 
*/  

// create index
$i = 0;

// loop text array create element
foreach ( $textArray as $key => $options ) {
    
?>

    {                                               
        'createElement'         :   true,           
        'text'                  :   '<?php echo $options['text']; ?>',         
        'textOptions' : {
            'color'             :   'moccasin',
            'fontSize'          :   '36px'
        },
        'id'                    :   'showA1',     
        'target'                :   '<?php echo $key; ?>',         
        'duration'              :   35,  
        'trigger' : {                               
            'itemId'            :   'opacity',      
            'at'                :   0,              
            'show'              :   true,              
<?php
    // ! last character
    if( $i < count( $textArray ) - 1 ){

        // add seperator
        echo "'playNext' : true,";

    }
    // ! last character
?>
        },                                          
        'items' : {                                 
            'opacity' : {                           
                'path'          :   '0,1' 
            },                                      
            'parentTop' : {                         
                'path'          :   '20' 
            },                                      
            'parentLeft' : {                        
                'path'          :   '120,16' 
            },                                       
            'parentHeight' : {                        
                'path'          :   '16' 
            },                                       
            'left' : {                        
                'path'          :   '<?php echo $options['left']; ?>' 
            },                                       
            'alignTop' : {                         
                'path'          :   '100' 
            }                                       
        }                                           
    }

<?php
    // ! last character
    if( $i < count( $textArray ) - 1 ){

        // add seperator
        echo ",";

    }
    // ! last character
        
    $i++;
    
}
// loop text array create element



/*
,
{                                               
    'createElement'         :   true,           
    'text'                  :   'n',         
    'textOptions' : {
        'color'             :   'moccasin',
        'fontSize'          :   '36px'
    },
    'id'                    :   'shown1',     
    'target'                :   'n1',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'show'              :   true,              
        'playNext'          :   true,              
    },                                          
    'startDelay'            :   4,             
    'duration'              :   35,  
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '0,1' 
        },                                      
        'parentTop' : {                         
            'path'          :   '20' 
        },                                      
        'parentLeft' : {                        
            'path'          :   '120,16' 
        },                                       
        'alignTop' : {                         
            'path'          :   '100' 
        },                                       
        'left' : {                        
            'path'          :   '24' 
        }                                       
    }                                           
},
{                                               
    'createElement'         :   true,           
    'text'                  :   'i',         
    'textOptions' : {
        'color'             :   'moccasin',
        'fontSize'          :   '36px'
    },
    'id'                    :   'showI1',     
    'target'                :   'i1',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'show'              :   true,              
    },                                          
    'startDelay'            :   4,             
    'duration'              :   35,  
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '0,1' 
        },                                      
        'parentTop' : {                         
            'path'          :   '20' 
        },                                      
        'parentLeft' : {                        
            'path'          :   '120,16' 
        },                                       
        'alignTop' : {                         
            'path'          :   '100' 
        },                                       
        'left' : {                        
            'path'          :   '42' 
        }                                       
    }                                           
}

*/