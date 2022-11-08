<?php
/*
    @package    SiteAnimator\Modules\Animations\TextAnimation

    file:       minimized.php
    function:   Demonstrates an text animation created with Javascript modules.
                uses minimized Javascript

        author:     Rob Wolters
        company:    SiteAnimator
        email:      info@siteanimator.nl
        liscence:   GNU GENERAL PUBLIC LICENSE Version 3
 
    Last revision: 08-11-2022
  
*/
// create version
$version = '00002';

?>

<!DOCTYPE html>
<!--
 
-->
<html>
    <head>
        <title>Text Animation App</title>
        <link id="favicon" href="icon.ico" rel="shortcut icon" type="image/x-icon">
        <meta charset="UTF-8">
        
        <style>
            
            body {
                border: 0;
                margin: 0;
                background-color: black;
                color: DarkGreen;
                font-size: 18px;
                line-height: 22px;
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
        
        <div style='padding-top: 20px;max-width: 800px; margin: 0 auto;'>
            This is an example in the series of modules created for the Site Animator project.<br>
        </div>

        <div style='padding-top: 40px;max-width: 800px; margin: 0 auto;'>
            <img src="logo.png" alt="Site Animator">
        </div>
        
        <div style='padding-top: 40px;max-width: 800px; margin: 0 auto;'>
            
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
            './assets/animations/presentation/intro/showText/changeBackground.php',
            './assets/animations/presentation/intro/showText/createText.php',
            './assets/animations/presentation/intro/showText/moveText.php',
            './assets/animations/presentation/intro/showText/removeText.php'
        ],
        'repeatOptions' : {
            'repeat'    :   'forever',
            'from'      :   'createT1'
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

<script src="minimized.js<?php echo '?version=' . $version; ?>"></script>


    </body>
</html>
