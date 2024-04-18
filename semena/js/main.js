$(document).ready(function () {

    function smoothScroll () {
        // Добавить плавную прокрутку до всех ссылок
        $("a").on('click', function(event) {

            // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
            if (this.hash !== "") {
                // Запретить поведение щелчка якоря по умолчанию
                event.preventDefault();

                // Хранить хэш
                var hash = this.hash;

                // Использование метода animate() jQuery для добавления плавной прокрутки страницы
                // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){

                    // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
                    window.location.hash = hash;
                });
            } // Конец, если
        });
    }

    function mobileMenu () {
        $("#iconMenu").on("click", function () {
            $("#iconMenu").toggleClass("open");
            $("#menu").toggleClass("open");
            $("body").toggleClass("overflow");
            $("#overlay").toggleClass("active");
        })
    }

    function mobileMenuClose () {
        $(document).mouseup( function(e){
            var div = $( "#menu" );
            if ($(e.target).closest("#iconMenu").length) return;
            if ( !div.is(e.target) && div.has(e.target).length === 0) {
                $("#iconMenu").removeClass("open");
                $("#menu").removeClass("open");
                $("body").removeClass("overflow");
                $("#overlay").removeClass("active");
            }
        });
    }

    function initParallaxTop() {
        if ($('.top-info__icon').length > 0) {
            var parallaxTop = new Rellax('.top-info__icon', {
                speed: 8
            });
        } else {
        }
    }

    function initParallaxAbout() {
        if ($('.about__img').length > 0) {
            var parallaxTop = new Rellax('.about__img', {
                speed: 4,
                center:true
            });
        } else {
        }
    }

    function filters () {
        $("#filters > li > a").on("click", function (e) {
            e.preventDefault();
            $(this).toggleClass("open");
            $(this).next().slideToggle();
        });
    }

    function filtersMobile () {
        $("#filtersMobile").on("click", function (e) {
            $(this).toggleClass("open");
            $("#filters").toggleClass("open");
        });
    }

    function initProductsSlider () {
        if ($('#productsSlider').length > 0) {
            $('#productsSlider').slick({
                infinite: false,
                slidesToShow: 6,
                slidesToScroll: 1,
                swipe: true,
                arrows: true,
                dots: true,
                prevArrow: $('.products-slider-arrow__prev'),
                nextArrow: $('.products-slider-arrow__next'),
                responsive: [
                    {
                        breakpoint: 1450,
                        settings: {
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 4,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1.4,
                            swipe: true,
                        }
                    },
                ]
            });

        } else {
        }
    }

    function hideCookiePanel () {
        $("#cookieBtn").on("click", function (e) {
            $("#cookiePanel").addClass("hide");
        });
    }

    function closeModal () {
        $(".modal__close").on("click", function () {
            event.preventDefault();
            $(this).closest(".modal").removeClass("open");
            $("body").removeClass("overflow");
        });
    }

    function openModalThanks () {
        $('#anyButton').on("click", function () {
            event.preventDefault();
            $('body').addClass('overflow ');
            $('#modalThanks').addClass('open');
        });
    }

    function initCertificatesGallery () {
        if ($('#certificatesGallery').length > 0) {
            $('[data-fancybox="gallery"]').fancybox({
                buttons : [
                    'download',
                    'close'
                ]
            });
        }
    }

    function initCertificatesSlider () {
        if ($('#certificatesGallery').length > 0) {
            $window = $(window);
            $slick_slider = $('#certificatesGallery');
            settings = {
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                swipe: true,
                arrows: true,
                dots: true,
                prevArrow: $('.certificates-gallery-arrow__prev'),
                nextArrow: $('.certificates-gallery-arrow__next'),
                responsive: [
                    {
                        breakpoint: 499,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    },
                ],
            };
            $slick_slider.slick(settings);

            $window.on('resize', function() {
                if ($window.width() > 768) {
                    if ($slick_slider.hasClass('slick-initialized'))
                        $slick_slider.slick('unslick');
                    return
                }
                if ( ! $slick_slider.hasClass('slick-initialized'))
                    return $slick_slider.slick(settings);
            });

        } else {
        }
    }

    function initAdvantagesAnimation () {
        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('advantages--show');
                }
            });
        }
        let options = { threshold: [0.5] };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = document.querySelectorAll('.advantages');
        for (let elm of elements) {
            observer.observe(elm);
        }
    }

    smoothScroll ();
    mobileMenu ();
    mobileMenuClose ();
    initParallaxTop();
    initParallaxAbout();
    filters ();
    filtersMobile ();
    initProductsSlider ();
    hideCookiePanel ();
    closeModal ();
    openModalThanks ();
    initCertificatesGallery ();
    initCertificatesSlider ();
    initAdvantagesAnimation ();
});
