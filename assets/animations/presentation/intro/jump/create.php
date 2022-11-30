<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       create.php
        function:   example of a jump animation.

        Last revision: 25-11-2022
 
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
        echo '"id" : "showJump' . $key . '",';  
        echo '"target" : "jumpText' . $key . '",';  
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
            
            // ! last value
            if( $i < count( $textArray ) - 1 ){
        
            // add seperator
            echo ',';
            echo '"playNext"    : true';
        
            }
            // ! last value
            
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
            echo '"portraitWidth" : {';
                echo '"path" : "' . $value['portraitWidth'] . '"';
            echo '},';
            echo '"portraitHeight" : {';
                echo '"path" : "' . $value['portraitHeight'] . '"';
            echo '},';
            echo '"portraitLeft" : {';
                echo '"path" : "' . $value['portraitLeft'] . '"';
            echo '},';
            echo '"portraitTop" : {';
                echo '"path" : "' . $value['portraitTop'] . '"';
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
