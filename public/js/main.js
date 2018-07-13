$(function () {
    var $fname = $('#fname');
    var $lname = $('#lname');
    var $username = $('#username');
    var $password = $('#password');
    var $email = $('#email');

    $('#submit').on('click', function(){
        var register = {
            FirstName:$fname.val(),
            LastName: $lname.val(),
            UserName: $username.val(),
            Password: $password.val(),
            Email :   $email.val(),
        };


    $.ajax({
type :'POST',
url:'',
data:register ,
success:function(newRegister){

console.log('success');
},
error :function(){
    alert('Something went wrong');
}
    });
    
});
});




/*
$(function (){
    var $fname = $('#fname');
    var $lname = $('#lname');
    var $username = $('#username');
    var $password = $('#password');
    var $email = $("#email");

    $('#submit').on('click', function(){
        var register = {
            FirstName: $fname.val(),
            LastName: $lname.val(),
            UserName: $username.val(),
            Password: $password.val(),
            Email : $email.val()
        };

        $.ajax({
            type:'POST',
            url:'https://fingerapi20180423093629.azurewebsites.net/postUsers/signups',
            data: register,
            success: function(newRegister){
                //console.log('success' + newRegister);
                JSON.stringify(newRegister);
                alert(newRegister.Message);
            },
            error: function(){
                alert("Something HappenedS");
            },
            headers : {

            }
        });
    });

    $('#login').on('click', function(){
        var login={
            UserName: $username.val(),
            Password: $password.val()
        }
        $.ajax({
            type:'POST',
            url:'https://fingerapi20180423093629.azurewebsites.net/postUsers/login',
            data: login,
            success: function(newlogin){
                JSON.stringify(newlogin);
                alert(newlogin.Message);
            },
            error:function(){
                alert("something");
            }
        });
    });
});

    */