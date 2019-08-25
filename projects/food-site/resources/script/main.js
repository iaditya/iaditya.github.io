$(document).ready(function () {


    // For sticky navigation
    $('.js--section-features').waypoint(function (direction) {
        if (direction == 'down') {
            //display sticky nav
            $('nav').addClass('sticky');
        } else {
            //undo
            $('nav').removeClass('sticky');
        }
    }, { offset: '60px' });


    // For scrolling sections
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 0);
    })

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 0);
    })


    //Animation on scroll
    //js--wp-1
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, { offset: '50%' })

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, { offset: '50%' })

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, { offset: '50%' })

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, { offset: '50%' })

});