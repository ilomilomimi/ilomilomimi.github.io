$(document).ready( function () {

    var file;
    var fileNew;

    $('.form__phone').mask("+7(999)999-99-99");
    $('[phone-mask]').mask("+7 999 999 99 99");

    $('.form__email').blur(function () {

        console.log($(this).val());

        if (!isEmail($(this).val())) {
            console.log('error');
        }

    });


    $('.modal__close').click(function () {

        $(this).closest('.modal').removeClass('modal_active');

    });

    $(document).on('click', '#menu-register, #mobile-registration',function () {
        $('.modal_register').addClass('modal_active');
    });

    $(document).on('click', '#faq-btn', function () {
        $('.modal_faq').addClass('modal_active');
    });

    $(document).on('click', '#profile-btn-get', function () {
        var apiKey = $(this).parent().data('key');

console.log(apiKey);
        $('.modal_profile-get [name="prizeId"]').val(apiKey);
        $('.modal_profile-get').addClass('modal_active');
    });

    $(document).on('click', '#menu-login, #mobile-login', function () {
        $('.modal_login').addClass('modal_active');
    });

    $(document).on('click', '#decision-login', function () {

        $(this).closest('.modal').removeClass('modal_active');

        $('.modal_login').addClass('modal_active');

    });

    $(document).on('click', '#login-recover', function () {

        $(this).closest('.modal').removeClass('modal_active');

        $('.modal_recover').addClass('modal_active');

    });

    $(document).on('click', '#decision-registration', function () {

        $(this).closest('.modal').removeClass('modal_active');

        $('.modal_register').addClass('modal_active');

    });
    $(document).on('click', '#receipt_rules', function () {
        $('.modal_receipts').addClass('modal_active');
    });

    $('.contest__item').click(function () {
        $('.contest__item').removeClass('contest__item_checked');
        $(this).addClass('contest__item_checked');
        $('.dropzone__error').removeClass('dropzone__error_visible');
        $('html, body').animate({
            scrollTop: $("#dropzone-scroll").offset().top
        }, 1000);
    });


    $(".dropzone__input-native").change(function () {
        readURL(this);
    });


    //добавление фото
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            file = input.files[0];

            reader.onload = function (e) {

                $('#regPhoto').attr('src', e.target.result);

                $('.dropzone').addClass('dropzone_filled');

                fileNew = reader.result;

            };

            reader.readAsDataURL(input.files[0]);
        }

        $('#delete_photo').click(function (event) {
            event.preventDefault();
            event.stopPropagation();

            $(".dropzone__input-native").val('');
        });

    }

    if($('.dropzone').length) {

        $('.dropzone')[0].ondragover = function () {
            $('.dropzone').addClass('dropzone_dragged-on');
            return false;
        };

        $('.dropzone')[0].ondragleave = function () {
        $('.dropzone').removeClass('dropzone_dragged-on');
        return false;
    }

    $('.dropzone')[0].ondrop = function (event) {
        event.preventDefault();

        $('.dropzone').removeClass('dropzone_dragged-on');

        file = event.dataTransfer.files[0];

        var reader = new FileReader();
        reader.onload = function (e) {

            $('#regPhoto').attr('src', e.target.result);

            $('.dropzone').addClass('dropzone_filled');

            fileNew = reader.result;

        };
        reader.readAsDataURL(file);

    };


    }




    $('.dropzone__send').click(function () {


        var name = file.name;
        var shop;
        var shopChecked = false;


        if ($('.contest__item').hasClass('contest__item_checked')) {

            shop = $('.contest__item_checked img').attr('data-shop');
            shopChecked = true;
        }

        var data = {
            name: name,
            file: fileNew,
            shop: shop
        };



        if ((shopChecked) && (name != undefined) && (fileNew != undefined)) {

            if ( window.isLoggedIn) {
                sendData('/ajax/loadCheck', data);
                clearDropzone();
            } else {
                $('.modal_decision').addClass('modal_active');
            }
        } else {
            $('.dropzone__error').addClass('dropzone__error_visible');
        }
    });


    function clearDropzone() {
        file = '';
        fileNew = '';
        $('.contest__item').removeClass('contest__item_checked');
        $('.dropzone__input-native').val("");
        $('.dropzone').removeClass('dropzone_filled');

    }

});



function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$(document).ready(function () {
    $(".faq-block__title").click(function () {
        $(this).toggleClass('faq-block__title--up');
    });

    function InitCalendar(nameOfCalendar) {
        // if (isMobile) {
        //     $(nameOfCalendar).prop('readonly', true);
        // }
        $('#' + nameOfCalendar).datepicker({
            showOtherMonths:true, selectOtherMonths:true,
            onClose: function () {
                showOverlay();
            },
            onSelect: picData,
        });
        $('#' + nameOfCalendar).datepicker( $.datepicker.regional[ "ru" ] );
        $('#' + nameOfCalendar).on('click', function () {
            showOverlay();
        });

        picData(null, {id: nameOfCalendar});
    }
    function showOverlay() {
        $('.overlayer').toggleClass('overlayer--active');
        $('body').toggleClass('lock-screen');
    }

    function picData(dateText, inst) {
        if (window.location.pathname == '/winners') {
            var formatedDate = new Date();

            if (dateText) {
                var date = dateText.split('.');
                var day = date[0];
                var month = date[1];
                var year = date[2];
                formatedDate = new Date(year, month - 1, day);
            }
            var ajaxdate = (formatedDate.getDate() + '.' + (formatedDate.getMonth() + 1) + '.' + formatedDate.getFullYear());

            console.log(ajaxdate);
            var text = formatedDate.toLocaleString('ru', {
                month: 'long',
                day: 'numeric'
            });
            $('#' + inst.id + '-date').html(text);

            var apiKey = $('#' + inst.id).data('key');
            winnersResult(apiKey, ajaxdate, '#' + inst.id + '-results');
            //$('#' + inst.id).parents('.winners-card__bottom').find('#' + inst.id + '-results').html(winnersResult(apiKey, ajaxdate));
        }
    }


    InitCalendar('ball-calendar');
    InitCalendar('bowl-calendar');
    InitCalendar('bag-calendar');

    function ShowBallCalendar() {
        $("#ball-calendar").datepicker('show');
        showOverlay();
    }
    function ShowBowlCalendar() {
        $('#bowl-calendar').datepicker('show');
        showOverlay();
    }
    function ShowBagCalendar() {
        $('#bag-calendar').datepicker('show');
        showOverlay();
    }


    $('.icon-calendar#ball').click(ShowBallCalendar);

    $('.icon-calendar#calendar-bowl').click(ShowBowlCalendar);

    $('.icon-calendar#calendar-bag').click(ShowBagCalendar);


    $('#menu-user').click(function() {
        $('.menu-dropdown').toggleClass('menu-dropdown--open');

    })

    $(document).mouseup(function (e) {
        var container = $("menu-dropdown");
        if (container.has(e.target).length === 0){
            $('.menu-dropdown').removeClass('menu-dropdown--open');
        }
    });

});

function winnersResult(prize, date,container) {



    $.ajax({
        type: 'POST',
        url: '/ajax/GetWinners',
        data: {
            prize: prize,
            date: date

        },

        dataType: "json",
        success: function (data) {
           $(container).html(data.message);
           console.log(data);

        }
    });

}
