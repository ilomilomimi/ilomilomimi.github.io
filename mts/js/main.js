$(function () {
    $('[data-popup]').each(function () {
        $(this).on('click', function () {
            const target = $(this).data('popup');
            $('#' + target).addClass('popup--open');
            $('body').addClass('lock');
        });
    });

    $('.popup__close').on('click', function () {
        $(this).parent('.popup').removeClass('popup--open');
        $('body').removeClass('lock');
    });

    $('.slide-menu').each(function (_, el) {
        const element = $(el);

        element.find('.slide-menu__container').each(function () {
            const nextLink = $(this).find('.slide-menu__item a.slide-menu__link--next');

            $(nextLink).on('click', function () {
                const container = $(this).next('.slide-menu__container');
                container.addClass('slide-menu__container--open');

                const backLink = container.find('a.slide-menu__link--back')[0];
                $(backLink).on('click', function () {
                    container.removeClass('slide-menu__container--open');
                });
            });
        });
    });

    $('[data-login]').on('click', function () {
        $(this).hide().next().show();
    });

    $('.drop').on('click', function () {
        $(this).toggleClass('drop--open');
    });

    $('[data-open]').each(function () {
        $(this).on('click', function () {
            const target = $(this).data('open');

            $('#' + target).toggleClass('collapse--open');
        })
    });



    $('.offers-drop').each(function (_, el) {
        var container = $(el).find('.offers-drop-card');
        container.on('click', function (e) {
            e.preventDefault();
            $(el).removeClass('offers-drop--open');
        });

        function handlerClick(e) {
            if ($(el).has(e.target).length === 0){
                $(el).removeClass('offers-drop--open');
                $(document).off('click', handlerClick);
            }
        }

        $(el).find('.offers-drop__container').on('click', function (e) {
            console.log('click');
            e.preventDefault();
            $(el).toggleClass('offers-drop--open');

            $(document).on('click', handlerClick);
        });
    });
});

// $('.offers-drop__arrow').click(function() {
//     $('.offers-drop-card').toggleClass('offers-drop-card--open');
// });
//
// $(document).mouseup(function (e) {
//     var container = $("offers-drop-card");
//     if (container.has(e.target).length === 0){
//         $('.offers-drop-card').removeClass('.offers-drop-card--open');
//     }
// });
//
//
// $('.menu-user-info__arrow').click(function() {
//     $('.user-card').toggleClass('user-card--open');
// });
//
// $(document).mouseup(function (e) {
//     var container = $("user-card");
//     if (container.has(e.target).length === 0){
//         $('.user-card').removeClass('user-card--open');
//     }
// });
