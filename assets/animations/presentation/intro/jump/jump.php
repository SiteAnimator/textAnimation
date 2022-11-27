<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       jump.php
        function:   example of a jump animation.

        Last revision: 25-11-2022
 
*/

require_once "./jumpOptions.php";

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
        echo '"startDelay" : 6,';
        echo '"duration" : 35,';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeLeft",';
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
            echo '"landscapeLeft" : {';
                echo '"path" : "' . $value['landscapeLeft'] . '"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "' . $value['landscapeTop'] . '"';
            echo '},';
            echo '"portretLeft" : {';
                echo '"path" : "' . $value['portretLeft'] . '"';
            echo '},';
            echo '"portretTop" : {';
                echo '"path" : "' . $value['portretTop'] . '"';
            echo '},';
            echo '"rotate" : {';
                echo '"units" : "deg",';
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
