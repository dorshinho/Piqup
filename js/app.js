window.onload = app;

// runs when the DOM is loaded
function app() {
    "use strict";

    // uncomment the following line to cache CSS/JS files loaded by loader in localStorage
    // NOTE: you may need to turn this off while developing
    // loader.textInjection = true;

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {
            url: "./dist/style.css"
        },
        //js
        {
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/lodash.min.js"
        },


        // when using just Backbone, use this line
        {
            url: "./bower_components/backbone/backbone.js"
        },

        // other stuff
        {
            url: "./bower_components/pace/pace.min.js"
        }, {
            url: "./bower_components/bootstrap/dist/js/bootstrap.min.js"
        }, {
            url: "./js/jquery.parallax-0.2-min.js"
        }, {
            url: "./js/wow.min.js"
        }, {
            url: "./js/all_scr.js"
        }, {
            url: "./rs-plugin/js/jquery.themepunch.tools.min.js"
        }, {
            url: "./rs-plugin/js/jquery.themepunch.revolution.min.js"
        }, {
            url: "./js/TemplateView.js"
        }, {
            url: "./js/person.js"
        }, {
            url: "./js/piqup.js"
        },
        {
            url: "./js/gmaps.js"
        }

    ).then(function() {
        // if turning on JSnoX, uncommment the following line
        // window.d = jsnox(React);
        // if turning on React, uncomment the following line
        // React.initializeTouchEvents(true);

        document.querySelector("html").style.opacity = 1;
        // start app?
        new Backbone.PiqupRouter();

        jQuery('.tp-banner').show().revolution({
            dottedOverlay: "none",
            delay: 16000,
            startwidth: 1170,
            startheight: 700,
            hideThumbs: 200,
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,
            navigationType: "bullet",
            navigationArrows: "solo",
            navigationStyle: "preview4",
            touchenabled: "on",
            onHoverStop: "on",
            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,
            parallax: "scroll",
            parallaxBgFreeze: "on",
            parallaxLevels: [10, 7, 4, 3, 2, 5, 4, 3, 2, 1],
            keyboardNavigation: "off",
            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 20,
            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,
            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "off",
            spinner: "spinner4",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            forceFullWidth: "off",
            hideThumbsOnMobile: "off",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "off",
            hideArrowsOnMobile: "off",
            hideThumbsUnderResolution: 0,
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            videoJsPath: "rs-plugin/videojs/",
            fullScreenOffsetContainer: ""
        });
    })

}
