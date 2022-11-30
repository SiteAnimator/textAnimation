<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       create.php
        function:   creates the a tool to animation.

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
    
    // get line options
    $lineOptions = $value['line'];
    
    echo '{';
    
        echo '"id" : "showLine' . $key . $i . '",';  
        echo '"target" : "line' . $key . $i . '",';  
        echo '"createElement" : true,';
        echo '"removeElement" : true,';
        echo '"startDelay" : ' . $startDelay . ',';
        echo '"duration" : 22,';
        echo '"containerOptions" : {';
            echo '"backgroundColor" : "green"';
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"show"        : true,';
            echo '"playNext"    : true';
        echo '},';
        echo '"items" : {';
            echo '"landscapeWidth" : {';
                echo '"path" : "' . $lineOptions['landscapeWidth'] . '"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "' . $lineOptions['landscapeHeight'] . '"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "' . $lineOptions['landscapeLeft'] . '"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "' . $lineOptions['landscapeTop'] . '"';
            echo '},';
            echo '"portraitWidth" : {';
                echo '"path" : "' . $lineOptions['portraitWidth'] . '"';
            echo '},';
            echo '"portraitHeight" : {';
                echo '"path" : "' . $lineOptions['portraitHeight'] . '"';
            echo '},';
            echo '"portraitLeft" : {';
                echo '"path" : "' . $lineOptions['portraitLeft'] . '"';
            echo '},';
            echo '"portraitTop" : {';
                echo '"path" : "' . $lineOptions['portraitTop'] . '"';
            echo '},';
            echo '"opacity" : {';
                echo '"path" : "' . $lineOptions['opacity'] . '"';
            echo '}';
        echo '}';
    echo '},';
        
    // get text options
    $textOptions = $value['text'];
    
    echo '{';
        echo '"id" : "showText' . $key . $i . '",';  
        echo '"target" : "text' . $key . $i . '",';  
        echo '"createElement" : true,';
        echo '"startDelay" : 8,';
        echo '"duration" : 20,';
        echo '"containerOptions" : {';
            echo '"text" : "' . $textOptions['text'] . '",';  
            echo '"fontFamily" : "Verdana",';
            echo '"color" : "green"';
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"show"        : true';
        echo '},';
        echo '"items" : {';
            echo '"landscapeWidth" : {';
                echo '"path" : "' . $textOptions['landscapeWidth'] . '"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "' . $textOptions['landscapeHeight'] . '"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "' . $textOptions['landscapeLeft'] . '"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "' . $textOptions['landscapeTop'] . '"';
            echo '},';
            echo '"portraitWidth" : {';
                echo '"path" : "' . $textOptions['portraitWidth'] . '"';
            echo '},';
            echo '"portraitHeight" : {';
                echo '"path" : "' . $textOptions['portraitHeight'] . '"';
            echo '},';
            echo '"portraitLeft" : {';
                echo '"path" : "' . $textOptions['portraitLeft'] . '"';
            echo '},';
            echo '"portraitTop" : {';
                echo '"path" : "' . $textOptions['portraitTop'] . '"';
            echo '},';
            echo '"opacity" : {';
                echo '"path" : "' . $textOptions['opacity'] . '"';
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
