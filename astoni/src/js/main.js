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