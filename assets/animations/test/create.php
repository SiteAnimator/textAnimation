<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       circle.php
        function:   containe the animations for the text animation.

        Last revision: 09-10-2022
 
*/

// open array
echo "[";

    echo '{';
        echo '"id" : "showTest",';  
        echo '"target" : "test",';  
        echo '"createElement" : true,';
        echo '"startDelay" : 0,';
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
                echo '"path" : "40, 4",';
                echo '"heightRatio" : 1';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "110,15"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "110,5"';
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
            echo '},';
            echo '"rotate" : {';
                echo '"path" : "0,3600"';
            echo '}';
        echo '}';
    echo '}';

    echo ',';
    
    echo '{';
        echo '"id" : "showText",';  
        echo '"target" : "text",';  
        echo '"createElement" : true,';
        echo '"startDelay" : 10,';
        echo '"duration" : 20,';
        echo '"containerOptions" : {';
            echo '"text" : "text",';
            echo '"color" : "red"';
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"show"        : true,';
            echo '"playNext"    : true';
        echo '},';
        echo '"items" : {';
            echo '"landscapeWidth" : {';
                echo '"path" : "10"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "5"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "110,21"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "110,5.5"';
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
            echo '},';
            echo '"opacity" : {';
                echo '"path" : "0,1"';
            echo '}';
        echo '}';
    echo '}';

    echo ',';
    
    echo '{';
        echo '"id" : "showTest2",';  
        echo '"target" : "test2",';  
        echo '"createElement" : true,';
        echo '"startDelay" : 10,';
        echo '"duration" : 20,';
        echo '"containerOptions" : {';
            echo '"borderRadius" : "50%",';
            echo '"background" : "linear-gradient(rgba(255,255,0,0.3), rgba(55,55,55,0.3))"';
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"show"        : true';
        echo '},';
        echo '"items" : {';
            echo '"landscapeWidth" : {';
                echo '"path" : "40, 4",';
                echo '"heightRatio" : 1';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "110,15"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "110,15"';
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
            echo '},';
            echo '"rotate" : {';
                echo '"path" : "0,3600"';
            echo '}';
        echo '}';
    echo '}';

    
// close array
echo "]";
