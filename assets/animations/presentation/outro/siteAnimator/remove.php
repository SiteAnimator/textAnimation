<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       remove.php
        function:   removes the a tool to animation.

        Last revision: 09-10-2022
 
*/


// open array
echo "[";

    echo '{';
        echo '"id" : "removeOutroSiteAnimatorS",';  
        echo '"target" : "outroSiteAnimatorS",';  
        echo '"removeElement" : true,';
        echo '"startDelay" : 2,';
        echo '"duration" : 6,';
        echo '"items" : {';
            echo '"opacity" : {';
                echo '"path" : "1,0"';
            echo '}';
        echo '}';
    echo '},';
    
    echo '{';
        echo '"id" : "removeOutroSiteAnimatorA",';  
        echo '"target" : "outroSiteAnimatorA",';  
        echo '"removeElement" : true,';
        echo '"startDelay" : 2,';
        echo '"duration" : 6,';
        echo '"items" : {';
            echo '"opacity" : {';
                echo '"path" : "1,0"';
            echo '}';
        echo '}';
    echo '},';
    
    echo '{';
        echo '"id" : "removeOutroSiteAnimatorIte",';  
        echo '"target" : "outroSiteAnimatorIte",';  
        echo '"removeElement" : true,';
        echo '"startDelay" : 2,';
        echo '"duration" : 6,';
        echo '"items" : {';
            echo '"opacity" : {';
                echo '"path" : "1,0"';
            echo '}';
        echo '}';
    echo '},';
    
    echo '{';
        echo '"id" : "removeOutroSiteAnimatorNimator",';  
        echo '"target" : "outroSiteAnimatorNimator",';  
        echo '"removeElement" : true,';
        echo '"startDelay" : 2,';
        echo '"duration" : 6,';
        echo '"items" : {';
            echo '"opacity" : {';
                echo '"path" : "1,0"';
            echo '}';
        echo '}';
    echo '}';
    
// close array
echo "]";
