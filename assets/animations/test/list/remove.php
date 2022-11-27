<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       remove.php
        function:   removes a list

        Last revision: 09-10-2022
 
*/


require_once "./removeOptions.php";

// open array
echo "[";

// create index
$i = 0;

// loop over list
foreach ( $list as $item => $options ) {
    
    $startDelay = $i == 0 ? 50 : 4;

    echo '{';
        echo '"removeElement" : true,';
        echo '"target" : "listPoint' . $item .'",';  
        echo '"startDelay" : ' . $startDelay . ',';
        echo '"duration" : 20,';
        echo '"trigger" : {';
            echo '"itemId" : "opacity",';
            echo '"at"      : 0,';
            echo '"playNext" : true';
        echo '},';
        echo '"items" : {';
            echo '"opacity" : {';
                echo '"path" : "1,0"';
            echo '}';
        echo '}';
    echo '},';
        
    echo '{';
        echo '"removeElement" : true,';
        echo '"target" : "listItem' . $item .'",';  
        echo '"startDelay" : ' . 4 . ',';
        echo '"duration" : 20,';
        echo '"trigger" : {';
            echo '"itemId" : "opacity",';
            echo '"at"      : 0';
    // ! last value
    if( $i < count( $list ) - 1 ){
        
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
    if( $i < count( $list ) - 1 ){
        
        // add seperator
        echo ',';
        
    }
    // ! last value

    // next index
    $i++;
    
}
// loop over list


// close array
echo "]";
