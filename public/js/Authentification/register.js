$(function () {

    $('#registerButton ').on('click',function (event) {
        event.preventDefault();

        var $firstName = $('#firstName');
        var $lastName = $('#lastName');
        var $username = $('#username');
        var $password = $('#password');

        var key = document.getElementById('key');
        var pass1 = document.getElementById('password');
        var pass2 = document.getElementById('passwordMatch');

        var user = {
            firstName : $firstName.val(),
            lastName : $lastName.val(),
            user_name : $username.val(),
            password : $password.val(),
        };


                    $.ajax({
                        method: 'POST',
                        url:'/registry',
                        data: user,
                        success: function (value){
                            console.log(value);
                            //alert('Record Saved');
                            swal({
                                title: "Completed!",
                                text: "Account Created",
                                icon: "success",
                                button: "ok",
                            });
                            //the code


                        },
                        error: function (value) {
                            //alert('Data sending Failed');
                            swal("Oh No!", "The post request failed!", "error");
                        },
                    });
        /*




         */
    });
});