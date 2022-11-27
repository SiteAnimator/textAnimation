<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       circle.php
        function:   containe the animations for the text animation.

        Last revision: 09-10-2022
 
*/

require_once "./createOptions.php"

?>


<?php

// open array
echo "[";

    echo '{';
        echo '"id" : "showImage",';  
        echo '"target" : "image",';  
        echo '"createElement" : true,';
        echo '"startDelay" : 0,';
        echo '"duration" : 20,';
        echo '"containerOptions" : {';
            echo '"border" : true,';
            echo '"padding" : "4px",';
            echo '"borderColor" : "lightGrey",';
            echo '"borderStyle" : "solid",';
            echo '"borderWidth" : "2px",';
            echo '"borderRadius" : "3px",';
            echo '"background" : "linear-gradient(grey, darkgrey)"';
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"show"        : true';
        echo '},';
        echo '"items" : {';
            echo '"landscapeWidth" : {';
                echo '"path" : "20"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "20"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "20"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "20"';
            echo '},';
            echo '"portretWidth" : {';
                echo '"path" : "20"';
            echo '},';
            echo '"portretHeight" : {';
                echo '"path" : "20"';
            echo '},';
            echo '"portretLeft" : {';
                echo '"path" : "20"';
            echo '},';
            echo '"portretTop" : {';
                echo '"path" : "20"';
            echo '}';
        echo '}';
    echo '}';
    
// close array
echo "]";
