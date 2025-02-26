$(document).ready(function(){

    // sliders
    $('.card__slider').each(function() {
        $(this).slick({
            slidesToShow: 1,
            infinite: false,
            dots: false,
            arrows: true,
        });
    });

});