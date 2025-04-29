document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('li-username').value.trim();
    const password = document.getElementById('li-password').value;

    // Clear previous error
    errorMessage.textContent = '';

    if (!username || !password) {
      errorMessage.textContent = 'Please enter your username and password.';
      return;
    }

    const users = [{ "username": "admin", "password": "123" }];

    const user = users.find(u =>
      u.username === username && u.password === password
    );

    if (!user) {
      errorMessage.textContent = 'Incorrect username or password.';
      return;
    }

    // Optional: clear form
    form.reset();

    // Redirect after short delay
    window.location.href = 'forum.html';
  });
});
