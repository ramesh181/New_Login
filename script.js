var msg_count = 0;

// getting the reggister form
var register = function () {
    document.getElementById("register").removeAttribute("hidden");
    document.getElementById("login").setAttribute("hidden", true);
    msg_count = 1;
}
var login = function () {
    document.getElementById("login").removeAttribute("hidden");
    document.getElementById("register").setAttribute("hidden", true);
    msg_count = 0;
}

var valid_msg = function () {
    document.getElementsByClassName("msg")[msg_count].removeAttribute("hidden");
}

var valid = function () {
    document.getElementsByClassName("msg")[msg_count].setAttribute("hidden", true);
}

var text_valid = function() {

    var myInput = document.getElementById("login_password").value;
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    

    // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

var stext_valid = function() {

    var myInput = document.getElementById("signup_password").value;
    var letter = document.getElementById("letter1");
    var capital = document.getElementById("capital1");
    var number = document.getElementById("number1");
    var length = document.getElementById("length1");

    

    // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

var confirm_password = function () {
    var password = document.getElementById("signup_password").value;
    var cfm_password = document.getElementById("cfm_password").value;

    if(password != cfm_password) {
        var cfmError = document.getElementById("cfm_error");
        cfmError.innerText = "Password is not matching with confirm password";
        cfmError.style.color = "red";
        cfmError.style.marginLeft = "15px";
    }
    else {
        document.getElementById("cfm_error").innerText = " ";
    }
}



//success mesage
// var success = function () {
//     var myInput = document.getElementById("login_password").value;

//     document.getElementById("success").style.display = "block";
//     myInput.innerHTML = "";

//     if((myInput != 0) && myInput.match(lowerCaseLetters) && myInput.match(upperCaseLetters) && myInput.match(numbers) && myInput.length >= 8) {
//         document.getElementById("success").style.display = "block";
//     }
//     else {
//         document.getElementById("warning").style.display = "block";
//     }
    
// }
