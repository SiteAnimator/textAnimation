<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       create.php
        function:   example of a roll animation.

        Last revision: 19-11-2022
 
*/

require_once "./createOptions.php";

// open array
echo "[";

// create index
$i = 0;

// loop over text array
foreach ( $textArray as $key => $value ) {

    // get start delay
    $startDelay = $i == 0 ? 20 : 10;
    
    echo '{';
        echo '"id" : "showText' . $key . $i . '",';  
            echo '"target" : "text' . $key . $i . '",';  
        echo '"createElement" : true,';
        echo '"startDelay" : 2,';
        echo '"duration" : 30,';
        echo '"containerOptions" : {';
            echo '"text" : "' . $value['text'] . '",';  
            echo '"fontFamily" : "Impact",';
            echo '"color" : "green"';
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"show"        : true';
        echo '},';
        echo '"items" : {';
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
            echo '},';
            echo '"opacity" : {';
                echo '"path" : "0.6,1"';
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
