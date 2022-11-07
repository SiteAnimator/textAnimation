<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       removeText.php
        function:   removes the text

        Last revision: 09-10-2022
 
*/


require_once "./removeTextOptions.php";

// open array
echo "[";

// create index
$i = 0;

// loop over text array
foreach ( $textArray as $key => $value ) {
    
    echo '{';
        echo '"removeElement" : true,';
        echo '"target" : "text' . $key . '",';  
        echo '"startDelay" : 0,';
        echo '"duration" : 0,';
        echo '"trigger" : {';
            echo '"itemId" : "opacity",';
            echo '"at"      : 0,';
            echo '"playNext" : true';
        echo '},';
        echo '"items" : {';
            echo '"opacity" : {';
                echo '"path" : "1,0"';
            echo '}';
        echo '}';
    echo '}';
        
    // ! last value
    if( $i < count( $textArray ) - 1 ){
        
        // add seperator
        echo ',';
        
    }
    // ! last value

    // next index
    $i++;
    
}
// loop over text array


// close array
echo "]";
