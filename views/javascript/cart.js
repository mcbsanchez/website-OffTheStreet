$(document).ready(function() {
    $('.btn-number').click(function(e){
        e.preventDefault();
        
        fieldName = $(this).attr('data-field');
        type = $(this).attr('data-type');
        var input = $("input[name='"+fieldName+"']");
        var currentVal = parseInt(input.val());

        if (!isNaN(currentVal)) {
            if(type == 'minus') {
                if(currentVal > 1) {
                    input.val(currentVal - 1).change();
                }
            }
            else if(type == 'plus') {
                input.val(currentVal + 1).change();
            }
        }
        else {
            input.val(0);
        }
    });

    $('.input-number').on('input', function() {
        var input = parseFloat($(this).val())
        var max = 99


        if(!isNaN(input)) {
            if(input > max) {
                $(this).val(max)
            }
            if(input < 1) {
                $(this).val(1)
            }
        }
        else {
            $(this).val(1)
        }
    })

    $(".add").click(function() {
        var link = $(this).val()
        $.post('/addToCart', {id: link}, function(){
            $('#cart-modal').modal('toggle');
        })
    });
    
    $(".cancel").click(function(){
        var id = $(this).parent().parent().attr("id")

        $.ajax({
            type: "POST",
            url: "/removeItem/?id="+ id,  
        }).done(function (data) {
            var string = '#' + id;
            $(string).remove();
        })
        .fail(function()  {
            alert("Sorry. Server unavailable.");
        }); 

        return false;
    });
})