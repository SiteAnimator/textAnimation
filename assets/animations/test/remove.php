<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       removeText.php
        function:   removes the text

        Last revision: 09-10-2022
 
*/

// open array
echo "[";

    echo '{';
        echo '"id" : "remove",';  
        echo '"target" : "test",';  
        echo '"removeElement" : true,';
        echo '"startDelay" : 50';
    echo '}';
        
    echo ',';
    
    echo '{';
        echo '"id" : "remove",';  
        echo '"target" : "text",';  
        echo '"removeElement" : true,';
        echo '"startDelay" : 0';
    echo '}';
        
    echo ',';
    
    echo '{';
        echo '"id" : "remove",';  
        echo '"target" : "test2",';  
        echo '"removeElement" : true,';
        echo '"startDelay" : 0';
    echo '}';
        
// close array
echo "]";
