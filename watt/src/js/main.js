
// скролл по экранам
$(".main").onepage_scroll();


// мобильное меню
$(function(){
    $('.header__menu-icon').click(function(){
        $('.header').toggleClass('open');
        $('body').toggleClass ('fixed');
        $('.header__menu-icon').toggleClass('open');
    });
});