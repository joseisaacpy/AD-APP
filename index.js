const loading_background = document.querySelector('.loading_background');
const logo = document.querySelector('.logo');
const loginForm = document.getElementById('login-form');
const usuarioInput = document.getElementById('user');
const senhaInput = document.getElementById('password');
const submitButton = loginForm.querySelector('button[type="submit"]');
const passwordRevealButton = document.querySelectorAll('.password_reveal');

// Se a página estiver carregando então fazer a logo ter a classe logo_carregando e quando terminar de carregar remover a classe
window.addEventListener('load', function() {
    loading_background.style.display = 'none';
    usuarioInput.focus();
});

usuarioInput.addEventListener('blur', function() {
    if (this.value.length === 0) {
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
    }
});

senhaInput.addEventListener('blur', function() {
    if (this.value.length <= 5) {
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
    }
});

usuarioInput.addEventListener('input', function() {
    if (this.value.length === 0) {
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
    }
});

senhaInput.addEventListener('input', function() {
    if (this.value.length <= 5) {
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
    }
});

document.addEventListener('input', function() {
    const invalid = document.querySelector('.invalid');
    const inputs = loginForm.querySelectorAll('input');
    const allValid = Array.from(inputs).every(input => input.checkValidity());
    if (!invalid && allValid) {
        submitButton.classList.remove('disabled');
    } else {
        submitButton.classList.add('disabled');
    }
});

passwordRevealButton.forEach(button => {
    button.addEventListener('click', function() {
        const passwordInput = this.previousElementSibling;
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });
});