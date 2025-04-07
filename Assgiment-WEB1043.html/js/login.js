document.addEventListener('DOMContentLoaded', () => {
    const loginBox = document.querySelector('.login-box');
    const signupBox = document.querySelector('.signup-box');
    const loginLink = document.querySelector('.para-2'); 
    const signupLink = document.querySelector('#Dangkytaiday'); 

    signupBox.style.display = 'none';

    loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginBox.style.display = 'none';
        signupBox.style.display = 'block';
    });

    signupLink.addEventListener('click', (event) => {
        event.preventDefault();
        signupBox.style.display = 'none';
        loginBox.style.display = 'block';
        loginLink.style.display = 'none'; 
    });

    const loginForm = document.querySelector('.login-box form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const email = document.querySelector('.login-box input[type="email"]');
        const password = document.querySelector('.login-box input[type="password"]');

        let valid = true;

        email.classList.remove('error');
        password.classList.remove('error');

        if (email.value.trim() === '') {
            email.classList.add('error');
            valid = false;
        }

        if (password.value.trim() === '') {
            password.classList.add('error');
            valid = false;
        }

        if (!valid) return;

        const accounts = JSON.parse(localStorage.getItem('userAccounts')) || [];
        const account = accounts.find(acc => acc.email === email.value && acc.password === password.value);

        if (account) {
            alert('Đăng nhập thành công!');
            window.location.href = '/html-Sanphamchitiet/index.html'; 
        } else {
            alert('Email hoặc mật khẩu không chính xác.');
        }
    });

    const signupForm = document.querySelector('.signup-box form');
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');

        let valid = true;

        firstName.classList.remove('error');
        lastName.classList.remove('error');
        email.classList.remove('error');
        password.classList.remove('error');
        confirmPassword.classList.remove('error');

        if (firstName.value.trim() === '') {
            firstName.classList.add('error');
            valid = false;
        }

        if (lastName.value.trim() === '') {
            lastName.classList.add('error');
            valid = false;
        }

        if (email.value.trim() === '') {
            email.classList.add('error');
            valid = false;
        }

        if (password.value.trim() === '') {
            password.classList.add('error');
            valid = false;
        }

        if (confirmPassword.value.trim() === '') {
            confirmPassword.classList.add('error');
            valid = false;
        } else if (password.value !== confirmPassword.value) {
            confirmPassword.classList.add('error');
            alert('Mật khẩu xác nhận không khớp.');
            valid = false;
        }

        if (!valid) return;

        const account = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
        };

        const accounts = JSON.parse(localStorage.getItem('userAccounts')) || [];
        accounts.push(account);
        localStorage.setItem('userAccounts', JSON.stringify(accounts));

        alert('Đăng ký thành công!');
        window.location.href = '/AssgimentDangnhap.html'; 
    });
});