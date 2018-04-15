$(document).ready(function(){
    $('.slider-price__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [{
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }

        }, {
            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });
    $('.gallery__slider').slick({
        infinite: true
    });
    $('.gallery__slider-small').slick({
        infinite: true
    });
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,

        responsive: [{
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            }, {
                breakpoint: 300,
                settings: "unslick" // destroys slick

            }]
    });
    $("#icons-plus .tab-info__icon").click(function(e) {
        e.preventDefault();
        $("#icons-plus .tab-info__icon").removeClass('icon-plus--active');
        $(this).addClass('icon-plus--active');
    });
});
