
(function ($) {

    $(".owl-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0:{
                items: 1,
                dots: false
            },
            768: {
                items: 2
            }
        }
    });
})(jQuery); 