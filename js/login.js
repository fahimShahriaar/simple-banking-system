document.getElementById('login-btn').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    if (email === 'abc@gmail.com' && pass === 'abc123') {
        window.location.href = 'banking.html';
    }
})