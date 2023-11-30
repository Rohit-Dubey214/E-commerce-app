function validateLogin(event) {
    event.preventDefault();

    // Functionality for showing pop message while login

    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (email === 'admin@admin.com' && password === '123456') {
        alert('Login successful');
    } else {
        alert('Incorrect email or password');
    }
}