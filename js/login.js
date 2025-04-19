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
  
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u =>
        (u.username === username || u.email === username) && u.password === password
      );
  
      if (!user) {
        errorMessage.textContent = 'Incorrect username or password.';
        return;
      }
  
      // Start session
      sessionStorage.setItem('currentUser', user.username);
  
      // Optional: Clear form fields (not required)
      form.reset();
  
      // Redirect after short delay
      window.location.href = 'forum.html';
    });
  });
  