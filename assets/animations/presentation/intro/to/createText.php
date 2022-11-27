<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       circle.php
        function:   containe the animations for the text animation.

        Last revision: 09-10-2022
 
*/

require_once "./createTextOptions.php"

?>


<?php

// open array
echo "[";

// create index
$i = 0;

// loop over text array
foreach ( $textArray as $key => $value ) {
    
    echo '{';
        echo '"id" : "show' . $key . $i . '",';  
        echo '"target" : "text' . $key . $i . '",';  
        echo '"createElement" : true,';
        echo '"startDelay" : 0,';
        echo '"duration" : 20,';
        echo '"containerOptions" : {';
            echo '"text" : "' . $value['text'] . '",';  
            echo '"border" : true,';
            echo '"padding" : "4px",';
            echo '"fontFamily" : "Fantasy",';
            echo '"color" : "moccasin",';
            echo '"borderColor" : "lightGrey",';
            echo '"borderStyle" : "solid",';
            echo '"borderWidth" : "2px",';
            echo '"borderRadius" : "3px",';
            echo '"background" : "linear-gradient(grey, darkgrey)"';
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"show"        : true,';
            echo '"playNext"    : true';
        echo '},';
        echo '"items" : {';
            echo '"landscapeWidth" : {';
                echo '"path" : "' . $value['landscapeWidth'] . '",';
                echo '"effect" : "outBack"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "' . $value['landscapeHeight'] . '",';
                echo '"effect" : "outBack"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "' . $value['landscapeLeft'] . '",';
                echo '"effect" : "outBack"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "' . $value['landscapeTop'] . '",';
                echo '"effect" : "outBack"';
            echo '},';
            echo '"portretWidth" : {';
                echo '"path" : "' . $value['portretWidth'] . '",';
                echo '"effect" : "outBack"';
            echo '},';
            echo '"portretHeight" : {';
                echo '"path" : "' . $value['portretHeight'] . '",';
                echo '"effect" : "outBack"';
            echo '},';
            echo '"portretLeft" : {';
                echo '"path" : "' . $value['portretLeft'] . '",';
                echo '"effect" : "outBack"';
            echo '},';
            echo '"portretTop" : {';
                echo '"path" : "' . $value['portretTop'] . '",';
                echo '"effect" : "outBack"';
            echo '},';
            echo '"opacity" : {';
                echo '"path" : "0.4,1"';
            echo '}';
        echo '}';
    echo '}';
    
    // ! last value
    if( $i < count( $textArray ) - 1 ){
        
        // add seperator
        echo ',';
        
    }

    // next index
    $i++;
    
}
// loop over text array

// close array
echo "]";
