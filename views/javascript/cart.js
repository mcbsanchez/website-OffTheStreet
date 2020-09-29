$(document).ready(function() {
    $('.btn-number').click(function(e){
        e.preventDefault();
        
        var id = $(this).attr('data-field');
        type = $(this).attr('data-type');
        var input = $("input[name='"+id+"']");
        var currentVal = parseInt(input.val());
        var max = $(this).attr('max');

        if (!isNaN(currentVal)) {
            if(type == 'minus') {
                if(currentVal > 1) {
                    input.val(currentVal - 1).change();
                    currentVal -= 1;
                }
            }
            else if(type == 'plus' && currentVal < max) {
                input.val(currentVal + 1).change();
                currentVal += 1;
            }
        }
        else {
            input.val(1);
        }

        $.ajax({
            type: "POST",
            url: "/changeQuantity/?id=" + id + "&quantity=" + currentVal,
        }).done(function(data) {
            location.reload()
        }).fail(function() {
            alert("Sorry. Server unavailable.");
        });

        return false;
    });

    // $('.input-number').on('input', function() {
    //     var id = $(this).attr('name')
    //     var input = parseFloat($(this).val())
    //     var max = $(this).attr('max')
        
    //     if(!isNaN(input)) {
    //         if(input > max) {
    //             $(this).val(max)
    //         }
    //         if(input < 1) {
    //             $(this).val(1)
    //         }
    //     }
    //     else {
    //         $(this).val(1)
    //     }

    //     $.ajax({
    //         type: "POST",
    //         url: "/changeQuantity/?id=" + id + "&quantity=" + $(this).val(),
    //     }).done(function(data) {
    //         location.reload()
    //     }).fail(function() {
    //         alert("Sorry. Server unavailable.");
    //     });

    //     return false;
    // })

    $(".add").click(function() {
        var link = $(this).val()
        $.post('/addToCart', {id: link}, function(){
            $('#cart-modal').modal('toggle');
        })
    });
    
    $(".cancel").click(function(){
        var id = $(this).parent().parent().attr("id")
        var string = '#' + id;
        $(string).remove();
        $.ajax({
            type: "POST",
            url: "/removeItem/?id="+ id,  
        }).done(function (data) {
            location.reload()
        })
        .fail(function()  {
            alert("Sorry. Server unavailable.");
        }); 

        return false;
    });
})