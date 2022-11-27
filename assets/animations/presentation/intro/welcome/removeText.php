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
        echo '"target" : "text' . $key . $i .'",';  
        echo '"startDelay" : 5,';
        echo '"duration" : 20,';
        echo '"trigger" : {';
            echo '"itemId" : "landscapeLeft",';
            echo '"at"      : 0';
    // ! last value
    if( $i < count( $textArray ) - 1 ){
        
        // add seperator
            echo ',';
            echo '"playNext" : true';
        
    }
    // ! last value
        echo '},';
        echo '"items" : {';
            echo '"landscapeLeft" : {';
                echo '"path" : "' . $value['landscapeLeft'] . '",';
                echo '"effect" : "outBack"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "' . $value['landscapeTop'] . '",';
                echo '"effect" : "outBack"';
            echo '},';
            echo '"portretLeft" : {';
                echo '"path" : "' . $value['portretLeft'] . '",';
                echo '"effect" : "outBack"';
            echo '},';
            echo '"portretTop" : {';
                echo '"path" : "' . $value['portretTop'] . '",';
                echo '"effect" : "outBack"';
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
