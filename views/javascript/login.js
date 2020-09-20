$(document).ready(function() {
    function isFilled() {
        var email = validator.trim($("#email").val());
        var password = validator.trim($("#password").val());

        var emailEmpty = validator.isEmpty(email);
        var passwordEmpty = validator.isEmpty(password);

        return !emailEmpty && !passwordEmpty;
    }

    function isValidUser(callback) {
        var email = validator.trim($('#email').val());
        var password = validator.trim($('#password').val());


        $.get('/getCheckLogin', {email: email, password: password}, function (result) {
            return callback(result);
        });
    }

    function validateField(field){
        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);
        if(empty){
            $("#msg").text("The username or password is not valid");
        }
        else
            $("#msg").text("");

        isValidUser(function (validUser){
            if(validUser && isFilled()){
                $("#submitlogin").prop('disabled', false);
            }
            else {
                $("#submitlogin").prop('disabled', true);
                
            }
        })
    }

    $("#email").keyup(function(){
        validateField($('#email'));
    })

    $("#password").keyup(function(){
        validateField($('#password'));
    })
});



