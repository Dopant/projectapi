function formValidation() {
    var firstname = document.getElementById('fname');
    var lastname = document.getElementById('lname');
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var cpassword = document.getElementById('cpassword');
    var form = document.getElementById('form');

    if (form.value.length == 0) {
        document.getElementById('head').innerText = "* All fields are mandatory *"; // This segment displays the validation rule for all fields
        firstname.focus();
        return false;
        }

        if (inputAlphabet(firstname, "* For your name please use alphabets only *")) {
            if (inputAlphabet(lastname, "*For your last name please use alphabets only*")) {
            if (lengthDefine(username, 10,12)) {
            if (emailValidation(email, "*Please enter valid email address*")) {
            return true;
            }
            }
            }
            }
            return false;
        }
        // Function that checks whether input text is an alphabetic character or not.
function inputAlphabet(inputtext, alertMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
    return true;
    } else {
    document.getElementById('p1').innerText = alertMsg; // This segment displays the validation rule for name.
    //alert(alertMsg);
    inputtext.focus();
    return false;
    }
    }
    function lengthDefine(inputtext, min, max) {
        var uInput = inputtext.value;
        if (uInput.length >= min && uInput.length <= max) {
        return true;
        } else {
        document.getElementById('p3').innerText = "* Please enter between " + min + " and " + max + " characters *"; // This segment displays the validation rule for username
        inputtext.focus();
        return false;
        }
        }
       // Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
function emailValidation(inputtext, alertMsg) {
    var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
    if (inputtext.value.match(emailExp)) {
    return true;
    } else {
    document.getElementById('p4').innerText = alertMsg; // This segment displays the validation rule for email.
    inputtext.focus();
    return false;
    }
    }