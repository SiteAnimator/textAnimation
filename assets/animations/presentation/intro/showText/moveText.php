<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       circle.php
        function:   containe the animations for the text animation.

        Last revision: 09-10-2022
 
*/

require_once './moveTextOptions.php';

?>

<?php

// open array
echo "[";

// create index
$i = 0;

// loop over text array
foreach ( $textArray as $key => $value ) {
    
    echo '{';
        echo '"id" : "move' . $key . '",';  
        echo '"target" : "text' . $key . '",';  
        echo '"startDelay" : 0,';
        echo '"duration" : 52,';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeHeight",';
            echo '"at"          : 0,';
            echo '"show"        : true,';
            echo '"playNext"    : true';
        echo '},';
        echo '"items" : {';
            echo '"borderColor" : {';
                echo '"path" : ["blue"]';
            echo '},';
            echo '"borderRadius" : {';
                echo '"path" : [0,5]';
            echo '},';
    if( isset( $value['color'] ) ){
            echo '"color" : {';
                echo '"path" : ' . $value['color'] . '';
            echo '},';
    }
            echo '"landscapeWidth" : {';
                echo '"path" : "' . $value['landscapeWidth'] . '"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "' . $value['landscapeHeight'] . '"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "' . $value['landscapeLeft'] . '"';
            echo '},';
            echo '"padding" : {';
                echo '"path" : "0, 4"';
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



