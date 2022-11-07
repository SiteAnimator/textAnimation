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
        echo '"duration" : 100,';
        echo '"containerOptions" : {';
            echo '"backgroundColor" : "red",';  
            echo '"display" : "table"';  
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"playNext"    : true';
        echo '},';
        echo '"items" : {';
            echo '"backgroundColorR" : {';
                echo '"path" : "0,255"';
            echo '},';
            echo '"landscapeWidth" : {';
                echo '"path" : "100"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "100"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "0"';
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
