document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const username = loginForm.username.value;
            const password = loginForm.password.value;

            // Simple validation: You can set any username/password here
            if (username === 'admin' && password === 'password123') {
                loginMessage.textContent = 'Login successful! Redirecting...';
                loginMessage.className = 'message success';
                // Simulate a slight delay before redirecting for user to see the message
                setTimeout(() => {
                    window.location.href = 'index.html'; // Redirect to homepage
                }, 1500);
            } else {
                loginMessage.textContent = 'Invalid username or password. Please try again.';
                loginMessage.className = 'message error';
            }
        });
    }
});