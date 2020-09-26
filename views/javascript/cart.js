$(document).ready(function() {
    $('.btn-number').click(function(e){
        e.preventDefault();
        
        fieldName = $(this).attr('data-field');
        type = $(this).attr('data-type');
        var input = $("input[name='"+fieldName+"']");
        var currentVal = parseInt(input.val());
        var max = $(this).attr('max');

        if (!isNaN(currentVal)) {
            if(type == 'minus') {
                if(currentVal > 1) {
                    input.val(currentVal - 1).change();
                }
            }
            else if(type == 'plus' && currentVal < max) {
                input.val(currentVal + 1).change();
            }
        }
        else {
            input.val(0);
        }
    });

    $('.input-number').on('input', function() {
        var input = parseFloat($(this).val())
        var max = $(this).attr('max')

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
        var string = '#' + id;
        $(string).remove();
        $.ajax({
            type: "POST",
            url: "/removeItem/?id="+ id,  
        }).done(function (data) {
            
        })
        .fail(function()  {
            alert("Sorry. Server unavailable.");
        }); 

        return false;
    });
})