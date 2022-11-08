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
        echo '"id" : "show' . $key . '",';  
        echo '"target" : "text' . $key . '",';  
        echo '"createElement" : true,';
        echo '"startDelay" : 0,';
        echo '"duration" : 40,';
        echo '"containerOptions" : {';
            echo '"text" : "' . $value['text'] . '",';  
            echo '"border" : true,';
            echo '"borderColor" : "transparent",';
            echo '"borderStyle" : "solid",';
            echo '"borderWidth" : "0px",';
            echo '"textShadow" : "5px 5px 1px #ff0000, 10px 10px 1px #0000ff"';
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
                echo '"effect" : "inOutBack"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "' . $value['landscapeHeight'] . '",';
                echo '"effect" : "inOutBack"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "' . $value['landscapeLeft'] . '",';
                echo '"effect" : "inOutBack"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "' . $value['landscapeTop'] . '",';
                echo '"effect" : "inOutBack"';
            echo '},';
            echo '"portretWidth" : {';
                echo '"path" : "' . $value['portretWidth'] . '",';
                echo '"effect" : "inOutBack"';
            echo '},';
            echo '"portretHeight" : {';
                echo '"path" : "' . $value['portretHeight'] . '",';
                echo '"effect" : "inOutBack"';
            echo '},';
            echo '"portretLeft" : {';
                echo '"path" : "' . $value['portretLeft'] . '",';
                echo '"effect" : "inOutBack"';
            echo '},';
            echo '"portretTop" : {';
                echo '"path" : "' . $value['portretTop'] . '",';
                echo '"effect" : "inOutBack"';
            echo '},';
            echo '"opacity" : {';
                echo '"path" : "0.4,1"';
            echo '},';
            echo '"skew" : {';
                echo '"path" : "' . $value['rotate'] . '"';
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
