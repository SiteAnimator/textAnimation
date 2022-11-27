<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       remove.php
        function:   example of a jump animation

        Last revision: 25-11-2022
 
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
        echo '"id" : "removeJump' . $key . '",';  
        echo '"target" : "jumpText' . $key . '",';  
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
