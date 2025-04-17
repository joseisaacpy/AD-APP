const loading_background = document.querySelector('.loading_background');
const usuarioInput = document.getElementById('user');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('password');
const confirmarsenhaInput = document.getElementById('password_confirm');
const submitButton = document.querySelector('button[type="submit"]');
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

emailInput.addEventListener('blur', function () {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!regex.test(emailInput.value)) {
        emailInput.classList.add('invalid');
    } else {
        emailInput.classList.remove('invalid');
    }
});

senhaInput.addEventListener('blur', function() {
    if (this.value.length <= 5) {
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
    }
});


confirmarsenhaInput.addEventListener('blur', function () {
    if (senhaInput.value !== confirmarsenhaInput.value) {
        confirmarsenhaInput.classList.add('invalid');
    } else {
        confirmarsenhaInput.classList.remove('invalid');
    }
});

usuarioInput.addEventListener('input', function() {
    if (this.value.length === 0) {
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
    }
});

emailInput.addEventListener('input', function () {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!regex.test(emailInput.value)) {
        emailInput.classList.add('invalid');
    } else {
        emailInput.classList.remove('invalid');
    }
});

senhaInput.addEventListener('input', function() {
    if (this.value.length <= 5) {
        this.classList.add('invalid');
    } else {
        this.classList.remove('invalid');
    }
});


confirmarsenhaInput.addEventListener('input', function () {
    if (senhaInput.value !== confirmarsenhaInput.value) {
        confirmarsenhaInput.classList.add('invalid');
    } else {
        confirmarsenhaInput.classList.remove('invalid');
    }
});

document.addEventListener('input', function() {
    const invalid = document.querySelector('.invalid');
    const inputs = document.querySelectorAll('input');
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
