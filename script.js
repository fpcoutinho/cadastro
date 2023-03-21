function phoneMask() { 
    var key = window.event.key;
    var element = window.event.target;
    var isAllowed = /\d|Backspace|Tab/;
    if(!isAllowed.test(key)) window.event.preventDefault();

    var inputValue = element.value;
    inputValue = inputValue.replace(/\D/g,'');
    inputValue = inputValue.replace(/(^\d{2})(\d)/,'($1) $2');
    inputValue = inputValue.replace(/(\d{4,5})(\d{4}$)/,'$1-$2');

    element.value = inputValue;
}
document.querySelector('[type="tel"]').addEventListener('keyup', phoneMask);


function validatePassword() {
    var password = document.getElementById("senha");
    var confirmPassword = document.getElementById("confirmar-senha");
    if (password.value != confirmPassword.value) {
        password.setCustomValidity('Senhas não conferem.');
        password.parentElement.classList.add('invalid');
        confirmPassword.parentElement.classList.add('invalid');
    } else {
        password.setCustomValidity('');
        password.parentElement.classList.remove('invalid');
        confirmPassword.parentElement.classList.remove('invalid');
    }
}
document.getElementById("senha").addEventListener('keyup', validatePassword);
document.getElementById("confirmar-senha").addEventListener('keyup', validatePassword);