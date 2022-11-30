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
        echo '"id" : "createOutroCreatedBy",';  
        echo '"target" : "outroCreatedBy",';  
        echo '"createElement" : true,';
        echo '"startDelay" : 0,';
        echo '"duration" : 20,';
        echo '"containerOptions" : {';
            echo '"text"    : "Created by:",';
            echo '"color"   : "orange"';
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
                echo '"path" : "10"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "0"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "0"';
            echo '},';
            echo '"portraitWidth" : {';
                echo '"path" : "40"';
            echo '},';
            echo '"portraitHeight" : {';
                echo '"path" : "10"';
            echo '},';
            echo '"portraitLeft" : {';
                echo '"path" : "0"';
            echo '},';
            echo '"portraitTop" : {';
                echo '"path" : "0"';
            echo '}';
        echo '}';
    echo '}';
        
// close array
echo "]";
