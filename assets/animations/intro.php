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




require_once './assets/animations/parts/showText.php';
 
// add separator
echo ',';

require_once './assets/animations/parts/playText.php';

// add separator
echo ',';

require_once './assets/animations/parts/hideText.php';

/*
  
  
 
require_once './assets/animations/parts/sayHello.php';

// add separator
echo ',';


// add separator
echo ',';

require_once './assets/animations/parts/showAnimationText.php';


// add separator
echo ',';

require_once './assets/animations/parts/playTextAnimation.php';

// add separator
echo ',';

require_once './assets/animations/parts/hideAnimationText.php';

*/
?>

];
// add animations

