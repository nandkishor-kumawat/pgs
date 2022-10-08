var lowercase = "abcdefghijklmnopqrstuvwxyz",
uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
numbers = "0123456789",
punctuation = "!@#$%&*()[]{}|?/<>^~",
lowercaseInput = document.getElementById("lowercase"),
uppercaseInput = document.getElementById("uppercase"),
punctuationInput = document.getElementById("punctuation"),
numbersInput = document.getElementById("numbers"),
lengthInput = document.getElementById("length"),
passwordFeild = document.getElementById("password-here"),
plength,
userPassword,
passwordCharSet;

function generate() {
userPassword = "";
passwordCharSet = "";
if (lowercaseInput.checked) {
    passwordCharSet += lowercase;
}
if (uppercaseInput.checked) {
    passwordCharSet += uppercase;
}
if (punctuationInput.checked) {
    passwordCharSet += punctuation;
}
if (numbersInput.checked) {
    passwordCharSet += numbers;
}
plength = Number(lengthInput.value);

for (let i = 0; i < plength; i++) {
    userPassword += passwordCharSet.charAt(
        Math.floor(Math.random() * passwordCharSet.length)
    );
}
if (userPassword == "") {
    passwordFeild.innerHTML = "select atleast one option"

} else {
    passwordFeild.innerHTML = userPassword;
    passwordFeild.setAttribute('onclick', 'copy(this)')
    document.querySelector('.result__info.right').style.opacity = '1';
    document.querySelector('.result__info.right').style.bottom = '35px';
}
}

function myFunction(val) {
document.querySelector('.length__title.field-title').setAttribute('data-length', val);
}

function copy(that) {
var inp = document.createElement('input');
document.body.appendChild(inp)
inp.value = that.textContent
inp.select();
document.execCommand('copy');
document.querySelector('.result__info.left').classList.add('success');
setTimeout(function() {
    document.querySelector('.result__info.left').classList.remove('success');
}, 2000);
inp.remove();
}