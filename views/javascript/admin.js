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

    $('.del-btn').click(function() {
        var id = $(this).attr('id')
        var string = '#' + id;
        $(string).remove();

        $.ajax({
            type: "POST",
            url: "/deleteProduct/?id="+ id,  
        }).done(function (data) {
            
        })
        .fail(function()  {
            alert("Sorry. Server unavailable.");
        }); 

        return false;
    })

    // $('.delete-button').click(function() {
        
    // })
})