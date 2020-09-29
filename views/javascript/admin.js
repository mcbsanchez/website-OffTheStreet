$(document).ready(function() {
    var status = $('.status')
    for(var i = 0 ; i<status.length ; i++){        
        var id = $(status[i]).attr('id');

        var path = "#" + id + ' option:selected';
        var value = $(path).text();
        if(value == "Pending"){
            $(status[i]).find('option:contains("Pending")').hide(); 
        }
        else if(value == "Confirmed"){
            $(status[i]).find('option:contains("Pending")').hide(); 
            $(status[i]).find('option:contains("Cancelled")').hide(); 
        }
        else if(value == "Cancelled"){
            $(status[i]).prop('disabled', true);
        }
        else if(value == "Completed"){
            $(status[i]).prop('disabled', true);
        }
    }
    $('.status').change(function(){
        var orderId = $(this).attr('id')
        var status = $(this).val()

        var details = {
            id: orderId,
            status: status
        }

        $.post('/changeStatus', details, function() {})

        if(status == "Pending"){
            $(this).find('option:contains("Pending")').hide(); 
        }
        else if(status == "Confirmed"){
            $(this).find('option:contains("Pending")').hide(); 
            $(this).find('option:contains("Cancelled")').hide(); 
        }
        else if(status == "Cancelled"){
            $(this).prop('disabled', true);
        }
        else if(status == "Completed"){
            $(this).prop('disabled', true);
        }
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