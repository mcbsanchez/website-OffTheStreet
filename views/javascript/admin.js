$(document).ready(function() {
    $('.status').change(function(){
        var orderId = $(this).attr('id')
        var status = $(this).val()

        var details = {
            id: orderId,
            status: status
        }

        $.post('/changeStatus', details, function() {})
    });
})