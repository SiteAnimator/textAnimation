<?php
/*
 
        @package    SiteAnimator\Modules\Animations\TextAnimation

        file:       intro.php
        function:   containe the animations for the text animation.

        Last revision: 09-10-2022
 
*/  
?>

// add repeat
    textAnimation.repeatAnimations = {
        'repeat'    :   'forever',
        'from'      :   0
    };
// add repeat
    
    textAnimation.animations = [
<?php

require_once './assets/animations/parts/showText.php';




// add separator
echo ',';

require_once './assets/animations/parts/playText.php';

// add separator
echo ',';

require_once './assets/animations/parts/hideText.php';

// add separator
echo ',';

require_once './assets/animations/parts/showAnimationText.php';


// add separator
echo ',';

require_once './assets/animations/parts/playTextAnimation.php';

// add separator
echo ',';

require_once './assets/animations/parts/hideAnimationText.php';


?>
    ];
