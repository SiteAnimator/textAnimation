<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       remove.php
        function:   example of a fall animation

        Last revision: 21-11-2022
 
*/

// create text array
$textArray = explode( ',', 'F,a,l,l' );

// create color array
$colorArray = explode( ',', 'red,blue,orange,green' );

$char = 0;

// create rows
$rows = 5;

// create columns
$columns = 7;

$repeat = 19;

// open array
echo "[";

// loop over columns
for( $column = 0; $column <  $columns; $column++ ) {

    // loop over rows
    for( $row = 0; $row <  $rows; $row++ ) {

    // create text item
        echo '{';
            echo '"target" : "fallText' . $column . 'r' .  $row . '",'; 
            echo '"startDelay" : 0,';
            echo '"duration" : 80,';
            echo '"trigger" : {';
                echo '"itemId" : "text",';
                echo '"at"      : 0';
                echo ',';
                echo '"playNext" : true';
            echo '},';
            echo '"items" : {';
                echo '"text" : {';
                    echo '"path" : [';
                    
                    // loop for repeat
                    for( $repeated = 0; $repeated <  $repeat; $repeated++ ) {

                        // add char
                        echo '"' . $textArray[$char] . '"';

                        if( $repeated != $repeat - 1  ){

                            // add seperator
                            echo ',';

                        }
                        // ! last column and ! last row

                        
                        $char++;
                        
                        if( $char >= count( $textArray ) ){
                            
                            $char = 0;
                            
                        }
                        
                    }                    
                    echo ']';
                echo '},';
                echo '"colorR" : {';
                    echo '"path" : [';
                        echo  '255';
                    echo ']';
                echo '},';
                echo '"colorG" : {';
                    echo '"path" : [';
                        echo  '255';
                    echo ']';
                echo '},';
                echo '"colorB" : {';
                    echo '"path" : [';
                        echo  '0,255';
                    echo ']';
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
