<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       loopOnSpotText.php
        function:   containe the animations for the text animation.

        Last revision: 09-10-2022
 
*/  

// create text
$text = 'animation';

// split text
$textArray = str_split( $text );

// create columns
$columns = 9;

// create distance
$distance = 40;

// create character
$character = 0;

// loop columns create element
for ( $column = 0; $column < $columns; $column++ ) {
?>

    {                                               
        'createElement'         :   true,           
        'text'                  :   '<?php echo $textArray[$column]; ?>',  
        'containerOptions' : {
            'color'             :   'blue',
            'fontSize'          :   '36px',
            'padding'           :   '14px 12px 12px 12px',
            'borderRadius'      :   '50%',
        },
        'id'                    :   'show<?php echo $column; ?>',     
        'target'                :   'animation<?php echo $column; ?>',         
        'trigger' : {                               
            'itemId'            :   'opacity',      
            'at'                :   0,              
            'show'              :   true,              
<?php
    // ! last column
    if( $column < $columns - 1 ){

        // add seperator
        echo "'playNext' : true,";

    }
    // ! last column
        
?>
        },                                          
        'startDelay'            :   1,             
        'duration'              :   4, 
        'items' : {                                 
            'opacity' : {                           
                'path'          :   '0,1' 
            },                                      
            'parentTop' : {                         
                'path'          :   '49' 
            },                                      
            'left' : {                        
                'path'          :   '<?php echo $column * $distance; ?>' 
            },                                      
            'parentLeft' : {                        
                'path'          :   '4' 
            },                                      
            'alignLeft' : {                        
                'path'          :   '0' 
            },                                      
            'alignTop' : {                        
                'path'          :   '50' 
            }                                      
        }                                           
    },

        
<?php
                
}
// loop columns create element

// loop columns remove element
for ( $column = 0; $column < $columns; $column++ ) {
?>


    {                                               
        'id'                    :   'hide<?php echo $column; ?>',     
        'target'                :   'animation<?php echo $column; ?>',         
        'startDelay'            :   7,             
        'duration'              :   4, 
        'trigger' : {                               
            'itemId'            :   'opacity',      
            'at'                :   0,              
<?php
    // ! last column
    if( $column < $columns - 1 ){

        // add seperator
        echo "'playNext' : true,";

    }
    // ! last column

?>
        },                                          
        'items' : {                                 
            'opacity' : {                           
                'path'          :   '1,0' 
            },                                      
        },                                           
        'removeElement'         : true,                                          
    }


<?php
    // ! last value
    if( $column < $columns - 1 ){

        // add seperator
        echo ',';

    }

}
// loop columns remove element
    


