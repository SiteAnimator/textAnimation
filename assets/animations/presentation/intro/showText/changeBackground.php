<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       changeBackground.php
        function:   containe change background animation of the show text animation

        Last revision: 06-11-2022
 
*/

?>


<?php

// open array
echo "[";

    echo '{';
        echo '"id" : "showBackground",';  
        echo '"target" : "background",';  
        echo '"createElement" : true,';
        echo '"duration" : 60,';
        echo '"containerOptions" : {';
            echo '"background" : "linear-gradient(red, yellow)",';  
            echo '"display" : "table"';  
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"playNext"    : true';
        echo '},';
        echo '"items" : {';
            echo '"background" : {';
                echo '"path" : ["linear-gradient(red, yellow)","linear-gradient(red, orange)","linear-gradient(red, red)"]';
            echo '},';
            echo '"landscapeWidth" : {';
                echo '"path" : "100"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "100"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "100, 0"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "0"';
            echo '},';
            echo '"portretWidth" : {';
                echo '"path" : "100"';
            echo '},';
            echo '"portretHeight" : {';
                echo '"path" : "100"';
            echo '},';
            echo '"portretLeft" : {';
                echo '"path" : "0"';
            echo '},';
            echo '"portretTop" : {';
                echo '"path" : "0"';
            echo '}';
        echo '}';
    echo '}';
    
    echo ',';

    echo '{';
        echo '"id" : "showBackground2",';  
        echo '"target" : "background2",';  
        echo '"createElement" : true,';
        echo '"duration" : 100,';
        echo '"containerOptions" : {';
            echo '"background" : "linear-gradient(blue, yellow)",';  
            echo '"display" : "table"';  
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"playNext"    : true';
        echo '},';
        echo '"items" : {';
            echo '"background" : {';
                echo '"path" : ["linear-gradient(blue, yellow)","linear-gradient(blue, orange)","linear-gradient(blue, red)"]';
            echo '},';
            echo '"landscapeWidth" : {';
                echo '"path" : "100"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "100"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "0,-100"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "0"';
            echo '},';
            echo '"portretWidth" : {';
                echo '"path" : "100"';
            echo '},';
            echo '"portretHeight" : {';
                echo '"path" : "100"';
            echo '},';
            echo '"portretLeft" : {';
                echo '"path" : "0"';
            echo '},';
            echo '"portretTop" : {';
                echo '"path" : "0"';
            echo '}';
        echo '}';
    echo '}';
    
// close array
echo "]";
