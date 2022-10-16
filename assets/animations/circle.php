<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       circle.php
        function:   containe the animations for the text animation.

        Last revision: 09-10-2022
 
*/  

// create text array
$textArray = array( 
        'a1' => array(
            'text'      =>  'A',
            'left'      =>  '0'
        ),
        'n1' => array(
            'text'      =>  'n',
            'left'      =>  '26'
        ),
        'i1' => array(
            'text'      =>  'i',
            'left'      =>  '44'
        ),
        'm' => array(
            'text'      =>  'm',
            'left'      =>  '56'
        ),
        'a2' => array(
            'text'      =>  'a',
            'left'      =>  '86'
        ),
        't' => array(
            'text'      =>  't',
            'left'      =>  '103'
        ),
        'i2' => array(
            'text'      =>  'i',
            'left'      =>  '114'
        ),
        'o' => array(
            'text'      =>  'o',
            'left'      =>  '124'
        ),
        'n2' => array(
            'text'      =>  'n',
            'left'      =>  '143'
        )
    );
// create text array


?>

// add repeat
    textAnimation.repeatAnimations = {
        'repeat'    :   'forever',
        'from'      :   'circleA1'
    };
// add repeat


// add animations
textAnimation.animations = [

<?php

    require_once './assets/animations/parts/circle/showCenterText.php';

// add separator
echo ',';

    require_once './assets/animations/parts/circle/showOuterText.php';
    
// add separator
echo ',';

    require_once './assets/animations/parts/circle/circleOuterText.php';
?>

];
// add animations
