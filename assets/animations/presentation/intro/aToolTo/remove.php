<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       remove.php
        function:   removes the a tool to animation.

        Last revision: 09-10-2022
 
*/


require_once "./removeOptions.php";

// open array
echo "[";

// create index
$i = 0;

// loop over text array
foreach ( $textArray as $key => $value ) {
    
    $startDelay = $i == 0 ? 30 : 4;
    
    echo '{';
        echo '"id" : "removeText",';  
        echo '"target" : "text' . $key . $i . '",';  
        echo '"removeElement" : true,';
        echo '"startDelay" : 2,';
        echo '"duration" : 6,';
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
                echo '"path" : "1,0"';
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
