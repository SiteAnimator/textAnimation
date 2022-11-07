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
        'id'                    :   'circleA1',     
        'target'                :   '<?php echo $key; ?>',         
        'duration'              :   65,  
        'startDelay'            :   24,             
        'trigger' : {                               
            'itemId'            :   'parentTop',      
            'at'                :   0,              
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
            'rotate' : {                         
                'path'          :   '0,360,0' 
            },                                      
            'parentTop' : {                         
                'path'          :   '20,30,55,80,80,80,80,55,20,20,20,20' 
            },                                      
            'parentLeft' : {                        
                'path'          :   '16,10,6,10,35,60,75,79,75,60,30,16' 
            },                                      
            'left' : {                        
                'path'          :   '<?php echo $options['left'] . ',' . $options['left'] / 2; ?>, 0, 0, 0, 0, 0, 0, 0, 0, <?php echo $options['left'] / 1.5 . ',' .  $options['left'] ?>' 
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



