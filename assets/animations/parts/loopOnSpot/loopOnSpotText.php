<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       loopOnSpotText.php
        function:   containe the animations for the text animation.

        Last revision: 09-10-2022
 
*/  

// create text
$text = 'Text-animation';

// split text
$textArray = str_split( $text );


// loop over text array
for ( $i = 0; $i < count( $textArray ); $i++ ) {
    

?>

{                                               
    'createElement'         :   true,           
    'text'                  :   '<?php echo $textArray[$i]; ?>',  
    'elementOptions' : {
        'color'             :   'blue',
        'fontSize'          :   '36px',
        'padding'           :   '14px 12px 12px 12px',
        'borderRadius'      :   '50%',
        'backgroundColor'   :   'orange'
    },
    'id'                    :   'show<?php echo $textArray[$i]; ?>1',     
    'target'                :   '<?php echo $textArray[$i]; ?>1',         
    'trigger' : {                               
        'itemId'            :   'opacity',      
        'at'                :   0,              
        'show'              :   true,              
        'playNext'          :   true,              
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
        'parentLeft' : {                        
            'path'          :   '12' 
        },                                      
        'alignLeft' : {                        
            'path'          :   '50' 
        },                                      
        'alignTop' : {                        
            'path'          :   '50' 
        }                                      
    }                                           
},
{                                               
    'id'                    :   'hide<?php echo $textArray[$i]; ?>1',     
    'target'                :   '<?php echo $textArray[$i]; ?>1',         
    'startDelay'            :   7,             
    'duration'              :   4, 
    'items' : {                                 
        'opacity' : {                           
            'path'          :   '1,0' 
        },                                      
    },                                           
    'removeElement'         : true,                                          
}


<?php
    // ! last value
    if( $i < count( $textArray ) - 1 ){
        
        // add seperator
        echo ',';
        
    }

}

