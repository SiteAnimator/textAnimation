<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       removeText.php
        function:   removes the text

        Last revision: 09-10-2022
 
*/


require_once "./removeOptions.php";

// open array
echo "[";

    echo '{';
        echo '"id" : "removeImage",';  
        echo '"target" : "image",';  
        echo '"removeElement" : true,';
        echo '"startDelay" : 50';
    echo '}';
        
// close array
echo "]";
