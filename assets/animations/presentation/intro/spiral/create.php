<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       create.php
        function:   example of a fall animation.

        Last revision: 21-11-2022
 
*/



// create text array
$textArray = explode( ',', 'l,a,r,i,p,S' );

$char = 0;
    
// create rows
$rows = 9;

// create columns
$columns = 11;

// create path
$path = array();

$currentSquare = intval( ( $rows * $columns ) / 2 );

// add to path
array_push( $path, $currentSquare );

// create iterator
$i = 1;

// loop while current square > 0
for( $tile = 0; $tile < $rows * $columns; ){

    // go left
    for( $left = 0; $left < $i; $left++ ){
        
        // go left
        $currentSquare++;
        
        // add to path
        array_push( $path, $currentSquare );

        // add to tiles
        $tile++;
        
    }
    // go left
    
    // go down
    for( $down = 0; $down < $i; $down++ ){
        
        // go down
        $currentSquare += $columns;
        
        // add to path
        array_push( $path, $currentSquare );
        
        // add to tiles
        $tile++;
        
    }
    // go down
    
    // next iterator
    $i++;
    
    // go right
    for( $right = 0; $right < $i; $right++ ){
        
        // go right
        $currentSquare--;
        
        // add to path
        array_push( $path, $currentSquare );
        
        // add to tiles
        $tile++;
        
    }
    // go right
    
    // go up
    for( $up = 0; $up < $i; $up++ ){
        
        // go up
        $currentSquare -= $columns;
        
        // add to path
        array_push( $path, $currentSquare );
        
        // add to tiles
        $tile++;
        
    }
    // go up
    
    // next iterator
    $i++;
    
}
// loop while current square > 0


$landscapeWidth = 100 / $columns;
$landscapeHeight = 100 / $rows;
$portretWidth = $landscapeHeight;
$portretHeight = $landscapeWidth;

// create landscape top
$landscapeTopPath = '';
$landscapeLeftPath = '';
$portretTopPath = '';
$portretLeftPath = '';

// loop over path
for( $i = 0; $i < count( $path ); $i++ ){

    $landscapeTop = $landscapeHeight * ( $path[$i] / $columns );
    $landscapeLeft = $landscapeWidth * ( $path[$i] % $columns );
    $portretTop = $landscapeWidth * ( $path[$i] / $columns );
    $portretLeft = $landscapeHeight * ( $path[$i] % $columns );

    $landscapeTopPath .= $landscapeTop;
    $landscapeLeftPath .= $landscapeLeft;
    $portretTopPath .= $portretTop;
    $portretLeftPath .= $portretLeft;

    // ! last path value
    if( $i < count( $path ) - 1 ){
        
        $landscapeTopPath .= ',';
        $landscapeLeftPath .= ',';
        $portretTopPath .= ',';
        $portretLeftPath .= ',';
        
    }
    // ! last path value

}
// loop over path


// open array
echo "[";


// loop over text
for( $i = 0; $i < count( $textArray ); $i++ ){
 
    echo '{';
        echo '"id" : "showSpiral",';  
        echo '"target" : "spiralText'. $i . '",';  
        echo '"createElement" : true,';
        echo '"removeElement" : true,';
        echo '"startDelay" : 4,';
        echo '"duration" : 285,';
        echo '"containerOptions" : {';
            echo '"text" : "' . $textArray[$i] . '",';  
            echo '"fontFamily" : "verdana",';
            echo '"color" : "green"';
        echo '},';
        echo '"trigger" : {';
            echo '"itemId"      : "landscapeWidth",';
            echo '"at"          : 0,';
            echo '"show"        : true';

            // ! last value
            if( $i < count( $textArray ) - 1 ){

                // add separator
                echo ',';

                // add play next
                echo '"playNext"        : true';
                
            }
            // ! last value
            
            echo '},';
        echo '"items" : {';
            echo '"landscapeWidth" : {';
                echo '"path" : "' . $landscapeWidth . '"';
            echo '},';
            echo '"landscapeHeight" : {';
                echo '"path" : "' . $landscapeHeight . '"';
            echo '},';
            echo '"landscapeLeft" : {';
                echo '"path" : "' . $landscapeLeftPath . '"';
            echo '},';
            echo '"landscapeTop" : {';
                echo '"path" : "' . $landscapeTopPath . '"';
            echo '},';
            echo '"portretWidth" : {';
                echo '"path" : "' . $portretWidth . '"';
            echo '},';
            echo '"portretHeight" : {';
                echo '"path" : "' . $portretHeight . '"';
            echo '},';
            echo '"portretLeft" : {';
                echo '"path" : "' . $portretLeftPath . '"';
            echo '},';
            echo '"portretTop" : {';
                echo '"path" : "' . $portretTopPath . '"';
            echo '}';
        echo '}';
    echo '}';
    
    // ! last value
    if( $i < count( $textArray ) - 1 ){
        
        // add separator
        echo ',';
        
    }
    // ! last value
    
}




// close array
echo "]";
