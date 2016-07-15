$(function () {

    //"use strict";

    //var topoffset = 50; //variable for menu height

    ////Activate Scrollspy
    //$('body').scrollspy({
    //    target: 'header .navbar',
    //    offset: topoffset
    //});

    //var hash = $(this).find('li.active a').attr('href');
    //if (hash !== '#featured') {
    //    $('header nav').addClass('inbody');
    //} else {
    //    $('header nav').removeClass('inbody');
    //}

    //console.log();
    //// Add an inbody class to nav when scrollspy event fires
    //$('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
    //    var hash = $(this).find('li.active a').attr('href');
    //    if (hash !== '#featured') {
    //        $('header nav').addClass('inbody');
    //    } else {
    //        $('header nav').removeClass('inbody');
    //    }
    //});
    var scrolled_val;
    $(window).scroll(function () {
        scrolled_val = $(document).scrollTop().valueOf();
        //console.log(scrolled_val + ' = scroll value');
        if (scrolled_val > 50) {
            $('header nav').addClass('inbody');
        }
        else {
            $('header nav').removeClass('inbody');
        }

    });
    $('.carousel').carousel({
        interval: false
    });

});