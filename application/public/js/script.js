
function checkpassword(){
    var input = document.getElementById("password").value;

    if(input.length >= 8){
        document.getElementById("check1").style.color = "green";
    }
    else{
        document.getElementById("check1").style.color = "red";
    }

    if(input.match(/[A-Z]+/)){
        document.getElementById("check2").style.color = "green"
    }
    else{
        document.getElementById("check2").style.color = "red";
    }

    if(input.match(/[0-9]/i)){
        document.getElementById("check3").style.color = "green"
    }
    else{
        document.getElementById("check3").style.color = "red";
    }

    if(input.match(/[^A-Za-z0-9-'']/i)){
        document.getElementById("check4").style.color = "green"
    }
    else{
        document.getElementById("check4").style.color = "red";
    }
}

function check(){
  if (document.getElementById('password').value ==
    document.getElementById('confirmPassword').value) {
    document.getElementById("check5").style.color = "green";
  } else {
    document.getElementById("check5").style.color = "red";
  }
}

function ValidateUsername() {
    var inputun = document.getElementById("username").value;

        if (inputun.match(/[a-zA-Z]+/)) {
            document.getElementById("check6").style.color = "green";
            }
        else{
            document.getElementById("check6").style.color = "red";
        }

        var alphanum = /[A-Za-z0-9]/; 
        if(inputun.match(alphanum) && inputun.length >= 3){
            document.getElementById("check7").style.color = "green";
        }
        else{
            document.getElementById("check7").style.color = "red";
        }
    }

function checkemail(){
    var inputem = document.getElementById("email").value;

    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputem.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)){
        document.getElementById("check8").style.color = "green"
    }
    else{
        document.getElementById("check8").style.color = "red";
    }
}

function requirecb() {
  var x = document.getElementById("TOSandPrivacyrules").required;
  document.getElementById("demo").innerHTML = x;
  var y = document.getElementById("13+age").required;
  document.getElementById("demo").innerHTML = y;
}