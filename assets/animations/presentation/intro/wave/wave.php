<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       create.php
        function:   example of a wave animation.

        Last revision: 25-11-2022
 
*/

require_once "./options.php";

$colors = array( 'blue', 'orange', 'green', 'violet', 'indigo' );

// open array
echo "[";

$repeat = 40;

// loop for repeat
for( $repeated = 0; $repeated <  $repeat; $repeated++ ) {

    // create index
    $i = 0;

    // loop over text array
    foreach ( $textArray as $key => $value ) {

        // get start delay
        $startDelay = $i == 0 ? 20 : 10;

        echo '{';
            echo '"id" : "showWave' . $key . $i . 'rep' . $repeated . '",';  
            echo '"target" : "waveText' . $key . $i . 'rep' . $repeated . '",';  
            echo '"createElement" : true,';
            echo '"removeElement" : true,';
            echo '"startDelay" : 1,';
            echo '"duration" : 42,';
            echo '"containerOptions" : {';
                echo '"text" : "' . $value['text'] . '",';  
                echo '"fontFamily" : "Impact",';
                echo '"color" : "' . $colors[$repeated%5] . '"';
            echo '},';
            echo '"trigger" : {';
                echo '"itemId"      : "landscapeWidth",';
                echo '"at"          : 0,';
                echo '"show"        : true';

                // ! last value
                if( $i < count( $textArray ) - 1 ||
                    $repeated < $repeat - 1 ){

                    // add seperator
                    echo ',';
                    echo '"playNext"    : true';

                }
                // ! last value

            echo '},';
            echo '"items" : {';
                echo '"landscapeWidth" : {';
                    echo '"path" : "' . $value['landscapeWidth'] . '"';
                echo '},';
                echo '"landscapeHeight" : {';
                    echo '"path" : "' . $value['landscapeHeight'] . '"';
                echo '},';
                echo '"landscapeLeft" : {';
                    echo '"path" : "' . $value['landscapeLeft'] . '"';
                echo '},';
                echo '"landscapeTop" : {';
                    echo '"path" : "' . $value['landscapeTop'] . '"';
                echo '},';
                echo '"portretWidth" : {';
                    echo '"path" : "' . $value['portretWidth'] . '"';
                echo '},';
                echo '"portretHeight" : {';
                    echo '"path" : "' . $value['portretHeight'] . '"';
                echo '},';
                echo '"portretLeft" : {';
                    echo '"path" : "' . $value['portretLeft'] . '"';
                echo '},';
                echo '"portretTop" : {';
                    echo '"path" : "' . $value['portretTop'] . '"';
                echo '}';
            echo '}';
        echo '}';

        // ! last value
        if( $i < count( $textArray ) - 1 ||
            $repeated < $repeat - 1 ){

            // add seperator
            echo ',';

        }
        // ! last value

        // next index
        $i++;

    }
    // loop over text array

}
// loop for repeat

// close array
echo "]";
