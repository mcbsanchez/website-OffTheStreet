$(document).ready(function() {
    function isFilled() {
        var firstname = validator.trim($("#firstname").val());
        var lastname = validator.trim($("#lastname").val());
        var email = validator.trim($("#email").val());
        var password = validator.trim($("#password").val());

        var firstnameEmpty = validator.isEmpty(firstname);
        var lastnameEmpty = validator.isEmpty(lastname);
        var emailEmpty = validator.isEmpty(email);
        var passwordEmpty = validator.isEmpty(password);

        return !emailEmpty && !passwordEmpty && !firstnameEmpty && !lastnameEmpty;
    }

    function isValidPassword(field) {
        var password = validator.trim($('#password').val());
        var confirmpassword = validator.trim($('#cpassword').val());
        if(password == confirmpassword && (!validator.isEmpty(password) && !validator.isEmpty(confirmpassword))){ // cpass matches pass
            if(field.is($('#cpassword'))) {
                $('#password').removeClass('is-invalid');
                $('#password').addClass('is-valid');
                $('#cpassword').removeClass('is-invalid');
                $('#cpassword').addClass('is-valid');
            }
            return true;
        }
        else{
            if(field.is($('#cpassword'))) {
                $('#password').removeClass('is-valid');
                $('#password').addClass('is-invalid');
                $('#cpassword').removeClass('is-valid');
                $('#cpassword').addClass('is-invalid');
            }
            return false;
        }
    }
    function validateField(field){
        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        if(!empty){
            field.removeClass('is-invalid');
            field.addClass('is-valid');
            var pass = isValidPassword(field);
            if(isFilled() && pass){
                $("#submitbtn").prop('disabled', false);
            }
            else {
                $("#submitbtn").prop('disabled', true);
            }

        }
        else{
            field.removeClass('is-valid');
            field.addClass('is-invalid');
        }
    }

    $("#firstname").keyup(function(){
        validateField($('#firstname'));
    })

    $("#lastname").keyup(function(){
        validateField($('#lastname'))
    })
    $("#email").keyup(function(){
        validateField($('#email'));
        var email = validator.trim($('#email').val());
        var isValidEmail = validator.isEmail(email);
        if(isValidEmail){
            $('#email').removeClass('is-invalid');
            $('#email').addClass('is-valid');
        }
        else{
            $('#email').removeClass('is-valid');
            $('#email').addClass('is-invalid');
        }
    })

    $("#password").keyup(function(){
        validateField($('#password'))
    })

    $("#cpassword").keyup(function(){
        validateField($('#cpassword'))
    })
});



