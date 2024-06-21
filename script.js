const loginForm = document.getElementById('loginForm');
const logoutButton = document.getElementById('logoutButton');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Normally, you'd handle authentication here
    // For simplicity, let's assume successful login
    handleLogin();
});

logoutButton.addEventListener('click', function() {
    handleLogout();
});

function handleLogin() {
    // Mock authentication (in a real application, use backend validation)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example: Check if username and password are valid
    if (username === '21IT026' && password === 'charusat') {
        // Successful login
        loginForm.reset();
        showLogoutButton();
    } else {
        alert('Invalid username or password');
    }
}

function handleLogout() {
    // Perform logout actions
    hideLogoutButton();
}

function showLogoutButton() {
    logoutButton.style.display = 'inline-block';
    loginForm.style.display = 'none';
}

function hideLogoutButton() {
    logoutButton.style.display = 'none';
    loginForm.style.display = 'block';
}
