$('.info-card-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
});

$('.drop-down').on('click', function () {
    $(this).find(".drop-down__inner").toggleClass("drop-down__inner--open");
    $(this).find(".drop-down__text").toggleClass("drop-down__text--open");
});