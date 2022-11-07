<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       circle.php
        function:   containe the animations for the text animation.

        Last revision: 09-10-2022
 
*/

require_once './assets/animations/test/testPositionsText.php';

?>

<?php

// create index
$i = 0;

// loop over text array
foreach ( $textArray as $key => $value ) {
    
?>
   {                                               
        'id'                    :   'show',     
        'target'                :   'text<?php echo $i; ?>',
        'startDelay'            :   0,             
        'duration'              :   12, 
        'trigger' : {                               
            'itemId'            :   'landscapeHeight',      
            'at'                :   0,              
            'show'              :   true,              
            'playNext'          :   true,              
        },                                          
        'items' : {                                 
            'landscapeHeight' : {                         
                'path'          :   '<?php echo $value['landscapeHeight']; ?>' 
            },                                       
            'landscapeWidth' : {                         
                'path'          :   '<?php echo $value['landscapeWidth']; ?>' 
            },                                       
            'landscapeLeft' : {                         
                'path'          :   '<?php echo $value['landscapeLeft']; ?>' 
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



