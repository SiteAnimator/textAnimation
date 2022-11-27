<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       create.php
        function:   creates the a tool to animation.

        Last revision: 19-11-2022
 
*/

// open array
echo "[";

    echo '{';
        echo '"id" : "createOutroLink",';  
        echo '"target" : "outroLink",';  
        echo '"createElement" : true,';
        echo '"startDelay" : 0,';
        echo '"duration" : 20,';
        echo '"containerOptions" : {';
            echo '"text"    : "www.siteanimator.nl",';
            echo '"color"   : "green"';
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"show"        : true';
        echo '},';
        echo '"items" : {';
            echo '"landscapeWidth" : {';
                echo '"path" : "30"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "9"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "70"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "80"';
            echo '},';
            echo '"portretWidth" : {';
                echo '"path" : "60"';
            echo '},';
            echo '"portretHeight" : {';
                echo '"path" : "5"';
            echo '},';
            echo '"portretLeft" : {';
                echo '"path" : "30"';
            echo '},';
            echo '"portretTop" : {';
                echo '"path" : "90"';
            echo '}';
        echo '}';
    echo '}';
        
// close array
echo "]";
