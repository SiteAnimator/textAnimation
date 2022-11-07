<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       circle.php
        function:   containe the animations for the text animation.

        Last revision: 09-10-2022
 
*/  

require_once './assets/animations/test/testFlyInText.php';


?>

// add repeat
    textAnimation.repeatAnimations = {
        'repeat'    :   'forever',
        'from'      :   'showT1'
    };
// add repeat


// add animations
textAnimation.animations = [

<?php

// create index
$i = 0;

// loop over text array
foreach ( $textArray as $key => $value ) {
    
?>

{                                               
        'createElement'         :   true,           
        'text'                  :   '<?php echo $value['text']; ?>',  
        'textOptions' : {
            'color'             :   'blue',
            'fontSize'          :   '36px',
        },
        'containerOptions' : {
            'backgroundColor'   :   'yellow',
            'borderRadius'      :   '50%',
            'border'            :   'true',
            'borderColor'       :   'green',
            'borderWidth'       :   '2px',
            'borderStyle'       :   'solid',
        },
        'id'                    :   'show',     
        'target'                :   'text<?php echo $i; ?>',         
        'trigger' : {                               
            'itemId'            :   'opacity',      
            'at'                :   0,              
            'show'              :   true,              
            'playNext'          :   true,              
        },                                          
        'startDelay'            :   <?php 
                                        $startDelay = isset( $value['startDelay'] ) ?
                                                      $value['startDelay'] :
                                                      0; 
                                        echo $startDelay; ?>,             
        'duration'              :   12, 
        'items' : {                                 
            'textFit' : {                           
                'path'          :   '65' 
            },                                       
            'opacity' : {                           
                'path'          :   '0,1' 
            },                                       
            'parentTop' : {                         
                'path'          :   '50' 
            },                                      
            'parentLeft' : {                        
                'path'          :   '50' 
            },                                      
            'parentHeight' : {                        
                'path'          :   '0,70' 
            },                                       
            'parentWidth' : {                        
                'path'          :   '0,70' 
            },                                       
            'alignTop' : {                         
                'path'          :   '50' 
            },                                       
            'alignLeft' : {                         
                'path'          :   '50' 
            }                                      
        }                                           
    },
    {                                               
        'id'                    :   'flyAway',     
        'target'                :   'text<?php echo $i; ?>',         
        'trigger' : {                               
            'itemId'            :   'parentTop',      
            'at'                :   0,              
            'playNext'          :   true,              
        },                                          
        'startDelay'            :   3,             
        'duration'              :   5,  
        'items' : <?php echo $value['flyAwayItems']; ?>,                                           
        'removeElement'         : true,                                                                                  
    }    

<?php
    // ! last value
    if( $i < count( $textArray ) - 1 ){
        
        // add seperator
        echo ',';
        
    }

    // next index
    $i++;
    
}

?>
    
];
// add animations


