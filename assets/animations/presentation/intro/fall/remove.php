<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       remove.php
        function:   example of a fall animation

        Last revision: 21-11-2022
 
*/

// create rows
$rows = 5;

// create columns
$columns = 7;

// open array
echo "[";

// loop over columns
for( $column = 0; $column <  $columns; $column++ ) {

    // loop over rows
    for( $row = 0; $row <  $rows; $row++ ) {

    // create text item
        echo '{';
            echo '"id" : "removeText",';  
            echo '"target" : "fallText' . $column . 'r' .  $row . '",'; 
            echo '"removeElement" : true,';
            echo '"startDelay" : 0,';
            echo '"duration" : 2,';
            echo '"trigger" : {';
                echo '"itemId" : "opacity",';
                echo '"at"      : 0';

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
                echo '"opacity" : {';
                    echo '"path" : "1,0"';
                echo '}';
            echo '}';
        echo '}';
        // create text item

        // ! last column and ! last row
        if( $column != $columns - 1 ||
            $row != $rows - 1  ){

            // add seperator
            echo ',';

        }
        // ! last column and ! last row

    }
    // loop over rows

}
// loop over columns

// close array
echo "]";
