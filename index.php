<?php
/*
    @package    SiteAnimator\Animations\TextAnimation

    file:       index.php
    function:   Demonstrates a text animation created with Javascript modules.

    author:     Rob Wolters
    company:    Site Animator
    email:      info@siteanimator.nl
    liscence:   GNU GENERAL PUBLIC LICENSE Version 3

    Last revision:  08-11-2022
  
*/

// create version
$version = '00006';

?>

<!DOCTYPE html>
<!--
 
-->
<html>
    <head>
        <title>Text Animation App</title>
        <link id="favicon" href="icon.ico" rel="shortcut icon" type="image/x-icon">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            
            body {
                border: 0;
                margin: 0;
                background-color: black;
                color: DarkGreen;
                font-size: 22px;
                line-height: 26px;
            }
            a:link {
                color: MediumAquaMarine;
            }
            a:visited {
                color: green;
            }
            a:hover {
                color: Gold;
            }
            a:active {
                color: DarkOrange;
            }            
            .animationDiv {
                min-height: 400px;
                overflow: hidden;
            }
            
        </style>
    </head>
    <body>
        
        <div class='animationDiv' id='animationDiv'>&nbsp;
        </div>
        
        <div style='padding: 20px;max-width: 800px; margin: 0 auto;'>
            This is an example in the series of modules created for the Site Animator project.<br>
        </div>

        <div style='padding: 40px;max-width: 800px; margin: 0 auto;'>
            <img src="logo.png" alt="Site Animator">
        </div>
        
        <div style='padding: 40px;max-width: 800px; margin: 0 auto;'>
            
            <a href='https://siteanimator.nl/en/blog'>Learn more about Javascript modules.</a><br>
            <br>
            <a href='https://siteanimator.nl/en/about-site-animator'>Learm more about SiteAnimator.</a><br>
            <br>    
        </div>
        
<script>
                 
    // set strict mode
    "use strict";      
    
    // add the app object to the window
    let textAnimation = new function(){};
   
    // add options
    textAnimation.options = {};
    
    // add version
    textAnimation.version = '<?php echo $version; ?>';

    // add container id
    textAnimation.options.containerId = 'animationDiv';
    
    // use full window
    textAnimation.options.useFullWindow = true;
    
    // add frame rate
    textAnimation.options.frameRate = 40;
    
    // add debug options    
    textAnimation.options.debug = {
        'on'            : false,
        'layoutOptions' : {
            'zIndex'    : 8000,
            'top'       : 180,
            'left'      : 120,
            'width'     : 400,
            'height'    : 300        
        }
    };
    // add debug options

    // create animation options
    textAnimation.animationOptions = {
        'files' : [
            
            './assets/animations/presentation/intro/welcome/createText.php',
            './assets/animations/presentation/intro/welcome/removeText.php',
            
            './assets/animations/presentation/intro/to/createText.php',
            './assets/animations/presentation/intro/to/removeText.php',
            
            './assets/animations/presentation/intro/textAnimation/createText.php',
            './assets/animations/presentation/intro/textAnimation/removeText.php',
            
            './assets/animations/presentation/intro/aToolTo/create.php',
            './assets/animations/presentation/intro/aToolTo/remove.php',
            
            './assets/animations/presentation/intro/bounce/create.php',
            './assets/animations/presentation/intro/bounce/remove.php',
            
            './assets/animations/presentation/intro/roll/create.php',
            './assets/animations/presentation/intro/roll/remove.php',

            './assets/animations/presentation/intro/fall/create.php',
            './assets/animations/presentation/intro/fall/fall.php',
            './assets/animations/presentation/intro/fall/fall.php',
            './assets/animations/presentation/intro/fall/remove.php',
            

            './assets/animations/presentation/intro/wave/wave.php',
            
            './assets/animations/presentation/intro/jump/create.php',
            './assets/animations/presentation/intro/jump/jumpStart.php',
            './assets/animations/presentation/intro/jump/jump.php',
            './assets/animations/presentation/intro/jump/remove.php',           
            
            './assets/animations/presentation/intro/spiral/create.php',

            './assets/animations/presentation/outro/createdBy/create.php',

            './assets/animations/presentation/outro/siteAnimator/create.php',
            './assets/animations/presentation/outro/link/create.php',
            
            './assets/animations/presentation/outro/createdBy/remove.php',
            './assets/animations/presentation/outro/siteAnimator/remove.php',
            './assets/animations/presentation/outro/link/remove.php'


        ],
        'repeatOptions' : {
            'repeat'    :   'forever',
            'from'      :   'showWelcome'
        }
    };
    // create animation options

    // add window onload event
    window.onload = function(){

        // create main
        textAnimation.main = new textAnimation.mainModule( );
        
        // start the application
        textAnimation.main.start();

    };
    // done add window onload event
    
</script>

<script src="main.js<?php echo '?version=' . $version; ?>"></script>

<script src="./service/debugModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./service/htmlGeneratorModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./service/extendModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./service/getUiIdModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./service/setStyleModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./service/getElementModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./service/eventManagerModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./service/jsonLoaderModule.js<?php echo '?version=' . $version; ?>"></script>

<script src="./ui/buttonModule.js<?php echo '?version=' . $version; ?>"></script>

<script src="./animations/loaderModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./animations/service/playerModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./animations/service/effectsModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./animations/text/textModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./animations/text/valuesModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./animations/text/animate/animateModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./animations/text/animate/transformModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./animations/text/animate/colorModule.js<?php echo '?version=' . $version; ?>"></script>

<script src="./content/contentModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./content/animation/animationModule.js<?php echo '?version=' . $version; ?>"></script>
<script src="./content/animation/elementsModule.js<?php echo '?version=' . $version; ?>"></script>


    </body>
</html>
