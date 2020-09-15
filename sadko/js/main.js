$(document).ready(function() {


    $('.quantity__minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.quantity__plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('#open-time').on("click", function () {
        $(".order-form-address__bottom").addClass("open");
    })

    $(function () {
        $('#datetimepicker1').datetimepicker({
            locale: 'ru',
            stepping:10,
            format: 'DD.MM.YYYY',
            defaultDate: moment('01.11.2017').format('DD.MM.YYYY'),
            daysOfWeekDisabled:[0,6]
        });
        $('#datetimepicker2').datetimepicker({
            locale: 'ru'
        });
    });

});
