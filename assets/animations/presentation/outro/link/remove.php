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
        echo '"id" : "removeOutroLink",';  
        echo '"target" : "outroLink",';  
        echo '"removeElement" : true,';
        echo '"startDelay" : 2,';
        echo '"duration" : 6,';
        echo '"trigger" : {';
            echo '"itemId" : "opacity",';
            echo '"at"      : 0';
        echo '},';
        echo '"items" : {';
            echo '"opacity" : {';
                echo '"path" : "1,0"';
            echo '}';
        echo '}';
    echo '}';
        


// close array
echo "]";
