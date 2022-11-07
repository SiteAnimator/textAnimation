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
        echo '"duration" : 20,';
        echo '"containerOptions" : {';
            echo '"text" : "' . $value['text'] . '"';  
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"show"        : true,';
            echo '"playNext"    : true';
        echo '},';
        echo '"items" : {';
            echo '"setText" : {';
                echo '"path" : [' . $value['setText'] . ']';
            echo '},';
            echo '"landscapeWidth" : {';
                echo '"path" : "' . $value['landscapeWidth'] . '"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "' . $value['landscapeHeight'] . '"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "' . $value['landscapeLeft'] . '"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "' . $value['landscapeTop'] . '"';
            echo '},';
            echo '"portretWidth" : {';
                echo '"path" : "' . $value['portretWidth'] . '"';
            echo '},';
            echo '"portretHeight" : {';
                echo '"path" : "' . $value['portretHeight'] . '"';
            echo '},';
            echo '"portretLeft" : {';
                echo '"path" : "' . $value['portretLeft'] . '"';
            echo '},';
            echo '"portretTop" : {';
                echo '"path" : "' . $value['portretTop'] . '"';
            echo '},';
            echo '"rotate" : {';
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
