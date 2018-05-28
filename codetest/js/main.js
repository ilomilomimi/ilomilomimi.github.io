$(document).ready(function(){
//
    $(function () {
        $('.menu').on('click', function () {
            $(this).closest('.menu').toggleClass('menu--open');
        });
    });

    $('.slider-first').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
        // asNavFor: '.slider-nav'
    });
});


