<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       intro.php
        function:   containe the animations for the text animation.

        Last revision: 16-10-2022
 
*/  
?>

// add repeat
    textAnimation.repeatAnimations = {
        'repeat'    :   'forever',
        'from'      :   'showT1'
    };
// add repeat

// add animations
textAnimation.animations = [

<?php


require_once './assets/animations/parts/loopOnSpot/loopOnSpotcolum1.php';
 
// add separator
echo ',';

require_once './assets/animations/parts/loopOnSpot/loopOnSpotcolum2.php';


?>

];
// add animations

