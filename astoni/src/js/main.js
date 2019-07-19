// open video modal
$(document).on('click', '#open-video', function () {
    $('.modal__video').addClass('open');
    $('body').addClass('hidden');
});

// close modal
$('.modal__close').on('click',function () {
    $(this).closest('.modal').removeClass('open');
    $('body').removeClass('hidden');
});

// open mobile menu
$('.menu-icon').click(function () {
    $(".header").toggleClass('open');
    $(".menu-icon").toggleClass('open');
    $("body").toggleClass('hidden');
});

// json
var data = {
    "links": [
        {
            "name": "Home",
            "url": "#"
        },
        {
            "name": "About",
            "url": "\/about"
        },
        {
            "name": "Pricing",
            "url": "\/pricing"
        },
        {
            "name": "Our drones",
            "url": "\/our-drones"
        },
        {
            "name": "Our realizations",
            "url": "\/our-realizations"
        },
        {
            "name": "Contact",
            "url": "http:\/\/ya.ru",
            "marked": true
        }
    ]
};
$(data.links).each(function(index, item) {
    if (item.marked == true) {
        $('#header-menu').append('<li class="menu__item"><a href="'+ item.url +'" class="menu__btn" target="_blank">' + item.name + '</a></li>');
    }
    else {
        $('#header-menu').append('<li class="menu__item"><a href="'+ item.url +'" class="menu__link">' + item.name + '</a></li>');
    }
});