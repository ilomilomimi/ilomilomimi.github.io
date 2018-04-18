$(document).ready(function(){
    $('.slider-price__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect:true,
        arrows: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: false
                }
            }
        ]

    });




    $('.gallery__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,

        responsive: [{
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }

        }, {
            breakpoint: 768,

            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }

        }, {
            breakpoint: 320,
            settings: {
                arrows: false
            }
        }]
    });

    $('.gallery__slider-small').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [{
        }, {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }

        }, {
            breakpoint: 768,

            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }, {
            breakpoint: 320,
            settings: {
                arrows: false
            }
        }]

    });

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [{
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }

            }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }, {
            breakpoint: 320,
            settings: {
                arrows: false
            }
        }]
    });


    $("#icons-plus .tab-info__icon").on('click', function(e) {
        e.preventDefault();
        $("#icons-plus .tab-info__icon").removeClass('icon-plus--active');
        $(this).toggleClass('icon-plus--active');
    });

    $('.tab-info__icon--1').popover(
        {content: "<div class='tab-tooltip__icon'><img src='img/logo_kbe.png'></div> <div class='tab-tooltip__text'>пластиковый профиль KBE (Германия) шириной 58 мм, 70 мм или 127 мм (на выбор)</div> ", html: true, placement: "left"}
        );
    $('.tab-info__icon--2').popover(
        {content: "<div class='tab-tooltip__icon'><img src='img/logo_kbe.png'></div> <div class='tab-tooltip__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur at, debitis doloribus est facere impedit maxime natus numquam possimus quod quos rerum tempore voluptatem voluptates! Eveniet facilis quisquam voluptatibus.</div> ", html: true, placement: "right"}
        );
    $('.tab-info__icon--3').popover(
        {content: "<div class='tab-tooltip__icon'><img src='img/logo_kbe.png'></div> <div class='tab-tooltip__text'>test 3</div> ", html: true, placement: "left"}
        );
    $('.tab-info__icon--4').popover(
        {content: "<div class='tab-tooltip__icon'><img src='img/logo_kbe.png'></div> <div class='tab-tooltip__text'>test 4</div> ", html: true, placement: "right"}
        );
    $('.tab-info__icon').on('click', function (e) {
        $('.tab-info__icon').not(this).popover('hide');
    });

    // $(document).mouseup(function(e)
    // {
    //     var container = $(".tab-info__icon");
    //
    //     // if the target of the click isn't the container nor a descendant of the container
    //     if (!container.is(e.target) && container.has(e.target).length === 0)
    //     {
    //     popover.hide();
    //     }
    // });

});
