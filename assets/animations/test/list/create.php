<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       create.php
        function:   creates a list.

        Last revision: 09-10-2022
 
*/

require_once "./createOptions.php"

?>


<?php

// open array
echo "[";

// create index
$i = 0;

// loop over list
foreach ( $list as $item => $options ) {

    // get start delay
    $startDelay = $i == 0 ? 0 : 20;
    
    echo '{';
        echo '"id" : "showListPoint' . $item . '",';  
        echo '"target" : "listPoint' . $item . '",';  
        echo '"createElement" : true,';
        echo '"startDelay" : ' . $startDelay . ',';
        echo '"duration" : 20,';
        echo '"containerOptions" : {';
            echo '"borderRadius" : "50%",';
            echo '"background" : "linear-gradient(rgba(255,255,0,0.3), rgba(55,55,55,0.3))"';
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"show"        : true,';
            echo '"playNext"    : true';
        echo '},';
        echo '"items" : {';
            echo '"landscapeWidth" : {';
                echo '"path" : "' . $options['point']['landscapeWidth'] . '",';
                echo '"heightRatio" : 1,';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "' . $options['point']['landscapeHeight'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "' . $options['point']['landscapeLeft'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "' . $options['point']['landscapeTop'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"portraitWidth" : {';
                echo '"path" : "' . $options['point']['portraitWidth'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"portraitHeight" : {';
                echo '"path" : "' . $options['point']['portraitHeight'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"portraitLeft" : {';
                echo '"path" : "' . $options['point']['portraitLeft'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"portraitTop" : {';
                echo '"path" : "' . $options['point']['portraitTop'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"rotate" : {';
                echo '"path" : "360,0",';
                echo '"effect" : "inBack"';
            echo '}';
        echo '}';
    echo '},';

    echo '{';
        echo '"id" : "showText' . $item . '",';  
        echo '"target" : "listItem' . $item . '",';  
        echo '"createElement" : true,';
        echo '"startDelay" : 20,';
        echo '"duration" : 20,';
        echo '"containerOptions" : {';
            echo '"text" : "' . $options['text']['text'] . '",';  
            echo '"border" : true,';
            echo '"padding" : "4px",';
            echo '"fontFamily" : "arial",';
            echo '"color" : "moccasin",';
            echo '"borderColor" : "lightGrey",';
            echo '"borderStyle" : "solid",';
            echo '"borderWidth" : "2px",';
            echo '"borderRadius" : "3px",';
            echo '"background" : "linear-gradient(grey, darkgrey)"';
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"show"        : true,';
            echo '"playNext"    : true';
        echo '},';
        echo '"items" : {';
            echo '"landscapeWidth" : {';
                echo '"path" : "' . $options['text']['landscapeWidth'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "' . $options['text']['landscapeHeight'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "' . $options['text']['landscapeLeft'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "' . $options['text']['landscapeTop'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"portraitWidth" : {';
                echo '"path" : "' . $options['text']['portraitWidth'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"portraitHeight" : {';
                echo '"path" : "' . $options['text']['portraitHeight'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"portraitLeft" : {';
                echo '"path" : "' . $options['text']['portraitLeft'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"portraitTop" : {';
                echo '"path" : "' . $options['text']['portraitTop'] . '",';
                echo '"effect" : "inBack"';
            echo '},';
            echo '"opacity" : {';
                echo '"path" : "0.4,1"';
            echo '}';
        echo '}';
    echo '},';
    
    echo '{';
        echo '"id" : "rotateListPoint' . $item . '",';  
        echo '"target" : "listPoint' . $item . '",';  
        echo '"startDelay" : 0,';
        echo '"duration" : 200,';
        echo '"trigger" : {';
            echo '"itemId"      : "rotate",';
            echo '"at"          : 0,';
            echo '"playNext"    : true';
        echo '},';
        echo '"items" : {';
            echo '"rotate" : {';
                echo '"path" : "' . $options['point']['rotate'] . '"';
            echo '}';
        echo '}';
    echo '}';
    
    
    // ! last value
    if( $i < count( $list ) - 1 ){
        
        // add seperator
        echo ',';
        
    }

    // next index
    $i++;
    
}
// loop over list

// close array
echo "]";
