let isMobile = false;

$(document).ready(function () {

    function openMobileMenu () {
        $("#menu-mobile-open").on("click", function () {
            $("#header-menu").addClass("open");
        })
    }

    function closeMobileMenu () {
        $("#menu-mobile-close").on("click", function () {
            $("#header-menu").removeClass("open");
        })
    }

    function initMobileSubmenu() {
        if ($('body').width() <= 576) {
            isMobile = true;
        }
        if (isMobile) {
            $('.header-menu-dropdown').on("click", function () {
                $(".header-menu-dropdown-content").toggleClass("open");
            })
        }
        if (!isMobile) {}
    }



    function initMainSlider () {
        $('#mainSlider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            prevArrow: $('.slider__arrow-prev'),
            nextArrow: $('.slider__arrow-next'),
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        arrows: false,
                        swipe: true,
                    }
                },
            ]
        });
    }

    openMobileMenu ();
    closeMobileMenu ();
    initMobileSubmenu();
    initMainSlider();
});
