<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       circle.php
        function:   containe the animations for the text animation.

        Last revision: 09-10-2022
 
*/

require_once './assets/animations/test/testDimensionsText.php';

?>

<?php

// create index
$i = 0;

// loop over text array
foreach ( $textArray as $key => $value ) {
    
?>
   {                                               
        'createElement'         :   true,           
        'containerOptions' : {
            'text'              :   '<?php echo $value['text']; ?>',  
        },
        'id'                    :   'show',     
        'target'                :   'text<?php echo $i; ?>',
        'startDelay'            :   3,             
        'duration'              :   22, 
        'trigger' : {                               
            'itemId'            :   'landscapeWidth',      
            'at'                :   0,              
            'show'              :   true,              
            'playNext'          :   true,              
        },                                          
        'items' : {                                 
            'landscapeWidth' : {                         
                'path'          :   '<?php echo $value['landscapeWidth']; ?>'
            },                                      
            'landscapeHeight' : {                         
                'path'          :   '<?php echo $value['landscapeHeight']; ?>'
            },                                      
            'landscapeLeft' : {                         
                'path'          :   '<?php echo $value['landscapeLeft']; ?>' 
            },                                      
            'landscapeTop' : {                         
                'path'          :   '<?php echo $value['landscapeTop']; ?>' 
            },                                      
            'portretWidth' : {                         
                'path'          :   '<?php echo $value['portretWidth']; ?>'
            },                                      
            'portretHeight' : {                         
                'path'          :   '<?php echo $value['portretHeight']; ?>'
            },                                      
            'portretLeft' : {                         
                'path'          :   '<?php echo $value['portretLeft']; ?>' 
            },                                      
            'portretTop' : {                         
                'path'          :   '<?php echo $value['portretTop']; ?>' 
            },                                      
            'rotate' : {                         
                'path'          :   '<?php echo $value['rotate']; ?>' 
            }                                       
        }                                           
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
   


