$(document).ready(function () {

    $('[name="City"]').kladr({
        type: $.kladr.type.city
    });

    var $zip = $('[name="Zip"]'),

        $city = $('[name="City"]'),
        $street = $('[name="Street"]'),
        $building = $('[name="Address"]');

    var $tooltip = $('.tooltip');

    $.kladr.setDefault({
        parentInput: '.js-form-address',
        verify: true

    });


    $city.kladr('type', $.kladr.type.city);
    $street.kladr('type', $.kladr.type.street);
    $building.kladr('type', $.kladr.type.building);

    // Отключаем проверку введённых данных для строений
    $building.kladr('verify', false);

    // Подключаем плагин для почтового индекса
    $zip.kladrZip();

    function setLabel($input, text) {
        text = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        $input.parent().find('label').text(text);
    }

    function showError($input, message) {
        $tooltip.find('span').text(message);

        var inputOffset = $input.offset(),
            inputWidth = $input.outerWidth(),
            inputHeight = $input.outerHeight();

        var tooltipHeight = $tooltip.outerHeight();

        $tooltip.css({
            left: (inputOffset.left + inputWidth + 10) + 'px',
            top: (inputOffset.top + (inputHeight - tooltipHeight) / 2 - 1) + 'px'
        });

        $tooltip.show();

    }


    $('#profile-get-form').on('submit', function (e) {
        e.preventDefault(e);


            var form = $(this);
            console.log(form.serialize());


            $.ajax({
                type: 'POST',
                url: '/ajax/SetOrderPrize',
                data: form.serialize(),

                dataType: "json",
                success: function (data) {
                    console.log(data);
                    if (data.code==200) {

                        location.reload();
                    }  else  showNoBgModal(data.message);
                }
            });

    });

    $('#faq-form').on('submit', function (e) {
        e.preventDefault(e);

        if(isEmail($('#faq-form .form__email').val())) {
        var form = $(this);
        console.log(form.serialize());


        $.ajax({
            type: 'POST',
            url: '/ajax/SaveFaq',
            data: form.serialize(),

            dataType: "json",
            success: function (data) {

                if (data.code==200) {
                    $('.modal__close').click();
                    showNoBgModal(data.message);

                }  else  showNoBgModal(data.message);
            }
        });
        } else  showNoBgModal("Email введен неправильно.");
    });




    $('#reg-form').on('submit', function (e) {
        e.preventDefault(e);
        if(isEmail($('#reg-form .form__email').val())) {

        var form = $(this);
        console.log(form.serialize());


        $.ajax({
            type: 'POST',
            url: '/ajax/register',
            data: form.serialize(),

            dataType: "json",
            success: function (data) {
                console.log(data);
                if (data.code==200) {
                    $('.modal__close').click();
                    showNoBgModal("Спасибо за регистрацию!<br>На Вашу почту выслан пароль.");
                    //location.reload();
                }  else  showNoBgModal(data.message);
            }
        });
        } else  showNoBgModal("Email введен неправильно.");
    });

    $('#check-status-check').on('click', function (e) {
        e.preventDefault(e);


        $.ajax({
            type: 'POST',
            url: '/ajax/getCheckStatus',


            dataType: "json",
            success: function (data) {
                console.log(data);
            }
        });

    });

    $('#menu-logout').on('click', function (e) {
        e.preventDefault(e);

        var form = $(this);


        $.ajax({
            type: 'POST',
            url: '/ajax/logout',


            dataType: "json",
            success: function (data) {
                location.reload();
            }
        });
    });





    $('#repass-form').on('submit', function (e) {
        e.preventDefault(e);
        if(isEmail($('#repass-form .form__email').val())) {
        var form = $(this);
        console.log(form.serialize());


        $.ajax({
            type: 'POST',
            url: '/ajax/recoverpassword',
            data: form.serialize(),

            dataType: "json",
            success: function (data) {
                $('.modal__close').click();
                 showNoBgModal(data.message);
            }
        });
        } else  showNoBgModal('Email введен неправильно.');
    });

    $('#login-form').on('submit', function (e) {
        e.preventDefault(e);
        if(isEmail($('#login-form .form__email').val())) {


            var form = $(this);
            console.log(form.serialize());


            $.ajax({
                type: 'POST',
                url: '/ajax/login',
                data: form.serialize(),

                dataType: "json",
                success: function (data) {
                    if (data.code == 200) {

                        location.reload();
                    } else  showNoBgModal(data.message);
                }
            });
        } else showNoBgModal('Email введен неправильно.');
    });

    $('.profile-form-edit-user').on('submit', function (e) {
        e.preventDefault(e);
        console.log($('.edit-profile-email').val());
        if(isEmail($('.edit-profile-email').val())) {
            var form = $(this);
            console.log(form.serialize());


            $.ajax({
                type: 'POST',
                url: '/ajax/edituser',
                data: form.serialize(),

                dataType: "json",
                success: function (data) {
                    // $('.modal__close').click();
                     showNoBgModal(data.message);
                    console.log(data);
                }
            });
        } else  showNoBgModal('Email введен неправильно.');
    });


});

function showNoBgModal(text) {
    $('.modal_custom .modal__text').html(text);
    $('.modal_custom').addClass('modal_active');


}






function sendData(URL, data){
    console.log(data);
    return $.ajax({
        cache: false,
        type: 'POST',
        data: data,
        async: false,
        timeout: 5000,
        url: URL,
        success: function (data) {

            console.log(data);

            if ((data.code == 200) && (data.info.status == 0))  {
                $('.dropzone__error').removeClass('dropzone__error_visible');
                $('.modal_thanks').addClass('modal_active');

            } else  showNoBgModal("Ошибка при загрузке. попробуйте повторить позже.");

        }
    });
}


