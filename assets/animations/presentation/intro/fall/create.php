<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       create.php
        function:   example of a fall animation.

        Last revision: 21-11-2022
 
*/

// create text array
$textArray = explode( ',', 'F,a,l,l' );

$char = 0;

    
// create rows
$rows = 5;

// create columns
$columns = 7;

$landscapeWidth = 100 / $columns;
$landscapeHeight = 100 / $rows;
$portretWidth = $landscapeHeight;
$portretHeight = $landscapeWidth;

// open array
echo "[";

// loop over columns
for( $column = 0; $column <  $columns; $column++ ) {

    // loop over rows
    for( $row = 0; $row <  $rows; $row++ ) {

        $landscapeTop = $row * $landscapeHeight;
        $landscapeLeft = $column * $landscapeWidth;
        $portretTop = $landscapeLeft;
        $portretLeft = $landscapeTop;
        
        // create text item
        echo '{';
            echo '"id" : "showFall' . $column . 'r' .  $row . '",';
            echo '"target" : "fallText' . $column . 'r' .  $row . '",';
            echo '"createElement" : true,';
            echo '"startDelay" : 0,';
            echo '"duration" : 1,';
            echo '"containerOptions" : {';
                echo '"text" : "' . $textArray[$char] . '",';  
                echo '"fontFamily" : "helvetica",';
                echo '"color" : "rgb(255,255,0)"';
            echo '},';
            echo '"trigger" : {';
                echo '"itemId"      : "landscapeWidth",';
                echo '"at"          : 0,';
                echo '"show"        : true';
                
            // ! last column and ! last row
            if( $column != $columns - 1 ||
                $row != $rows - 1  ){

                // add seperator
                    echo ',';
                    echo '"playNext" : true';

            }
            // ! last column and ! last row

            echo '},';
            echo '"items" : {';
                echo '"landscapeWidth" : {';
                    echo '"path" : "' . $landscapeWidth . '"';
                echo '},';
                echo '"landscapeHeight" : {';
                    echo '"path" : "' . $landscapeHeight . '"';
                echo '},';
                echo '"landscapeLeft" : {';
                    echo '"path" : "' . $landscapeLeft . '"';
                echo '},';
                echo '"landscapeTop" : {';
                    echo '"path" : "' . $landscapeTop . '"';
                echo '},';
                echo '"portretWidth" : {';
                    echo '"path" : "' . $portretWidth . '"';
                echo '},';
                echo '"portretHeight" : {';
                    echo '"path" : "' . $portretHeight . '"';
                echo '},';
                echo '"portretLeft" : {';
                    echo '"path" : "' . $portretLeft . '"';
                echo '},';
                echo '"portretTop" : {';
                    echo '"path" : "' . $portretTop . '"';
                echo '},';
                echo '"rotate" : {';
                    echo '"path" : "0,1"';
                echo '},';
                echo '"opacity" : {';
                    echo '"path" : "0.6,1"';
                echo '}';
            echo '}';
        echo '}';
        // create text item

        // ! last column and ! last row
        if( $column < $columns - 1 ||
            $row < $rows - 1 ){
            
            // add seperator
            echo ',';
            
        }
        // ! last column and ! last row
        
        $char++;

        if( $char >= count( $textArray ) ){

            $char = 0;

        }
    }
    // loop over rows

}
// loop over columns

// close array
echo "]";
