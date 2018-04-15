$(document).ready(function(){
    $('.slider-price__slider').slick({
        infinite: true
        // variableWidth: true
        // prevArrow: $('.prev'),
        // nextArrow: $('.next')
    });
    $('.gallery__slider').slick({
        infinite: true
    });
    $('.gallery__slider-small').slick({
        infinite: true
    });
    $('.reviews__slider').slick({
        infinite: true
    });
    $("#icons-plus .tab-info__icon").click(function(e) {
        e.preventDefault();
        $("#icons-plus .tab-info__icon").removeClass('icon-plus--active');
        $(this).addClass('icon-plus--active');
    });
});
