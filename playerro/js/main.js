$(document).ready(function(){

    // gallery
    if ($('.card').length > 1) { // если больше 1 карточки, показать галерею

        $('[data-fancybox="gallery"]').fancybox({
            buttons : [
                'close'
            ]
        });
    }

    else {
        $('.card').removeAttr('href'); // если меньше 1 карточки, не показывать галерею
        $.fancybox.destroy();
    }

});