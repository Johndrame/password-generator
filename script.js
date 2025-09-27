let password= document.getElementById("password");
function genPassword(){
    let chars = "0123456789abcdefghigklmnopqrswxyz!@#$%^&*()ABCDEFGHIGKLMNOPQRSWXYZ";
     passLength = 10;
     password = "";
    for (let i = 0; i < passLength; i++){
         randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
}
function copyPassword(){
    let copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
}
>>>>>>> dec5d45 (changed the variables in javascript)
