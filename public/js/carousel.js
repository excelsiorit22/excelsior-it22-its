$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoWidth: true,
        margin: 30,
        center: true,
        autoplayHoverPause: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});