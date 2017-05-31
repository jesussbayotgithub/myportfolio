var $ = jQuery.noConflict();

// Page Loader
$(window).load(function(){
    $('#loader').fadeOut();
});

$(document).ready(function($) {
    "use strict";



    /*----------------------------------------------------*/
    /*	Sticky Header
     /*----------------------------------------------------*/
    (function() {

        var docElem = document.documentElement,
            didScroll = false,
            changeHeaderOn = 100;
        document.querySelector( 'nav' );

        function init() {
            window.addEventListener( 'scroll', function() {
                if( !didScroll ) {
                    didScroll = true;
                    setTimeout( scrollPage, 250 );
                }
            }, false );
        }

        function scrollPage() {
            var sy = scrollY();
            if ( sy >= changeHeaderOn ) {
                //$('.top-bar').slideUp(300);
                $(".navbar").addClass("navbar-fixed-top);
                //$('.navbar-brand').css({ 'padding-top' : 19 + "px", 'padding-bottom' : 19 + "px" });
                /*
                if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479 ){
                    $('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 0 + "px", 'padding-bottom' : 0 + "px" })
                }else{
                    $('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 20 + "px", 'padding-bottom' : 20 + "px" })
                    $('.search-side').css({ 'margin-top' : -7 + "px" });
                };
                */

            }
            else {
                //$('.top-bar').slideDown(300);
                $(".navbar").removeClass("navbar-fixed-top");
                //$('.navbar-brand').css({ 'padding-top' : 27 + "px", 'padding-bottom' : 27 + "px" });
                /*
                if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479 ){
                    $('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 0 + "px", 'padding-bottom' : 0 + "px" })
                }else{
                    $('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 28 + "px", 'padding-bottom' : 28 + "px" })
                    $('.search-side').css({ 'margin-top' : 0  + "px" });
                };
                */

            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();



    })();


});