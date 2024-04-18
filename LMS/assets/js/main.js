$(document).ready(function () {

    function initMobileMenu () {
        $(".header-mobile-menu").on("click", function () {
            $(".header-mobile-menu__content").toggleClass("open");
            // $("body").toggleClass("hidden");
        })
    }

    function initReviewsSlider () {
        if ($('.reviews-slider').length > 0) {
            $('.reviews-slider').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                dots: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            // arrows: false,
                            // swipe: true,
                        }
                    },
                ]
            });

        } else {
        }
    }
    initMobileMenu();
    initReviewsSlider();
});
