<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       remove.php
        function:   example of a roll animation

        Last revision: 19-11-2022
 
*/


require_once "./removeOptions.php";

// open array
echo "[";

// create index
$i = 0;

// loop over text array
foreach ( $textArray as $key => $value ) {
    
    $startDelay = $i == 0 ? 50 : 4;
    
    echo '{';
        echo '"id" : "removeText",';  
        echo '"target" : "text' . $key . $i . '",';  
        echo '"removeElement" : true,';
        echo '"startDelay" : ' . $startDelay . ',';
        echo '"duration" : 30,';
        echo '"trigger" : {';
            echo '"itemId" : "opacity",';
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
                echo '"path" : "1,0.6"';
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
