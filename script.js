var password= document.getElementById("password");
function genPassword(){
    var chars = "0123456789abcdefghigklmnopqrswxyz!@#$%^&*()ABCDEFGHIGKLMNOPQRSWXYZ";
    var passLength = 10;
    var password = "";
    for (var i = 0; i < passLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);

    }
    document.getElementById("password").value = password;
}

function copyPassword(){
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
}
