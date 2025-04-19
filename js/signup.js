document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const errorMessage = document.getElementById('signup-error-message');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const username = document.getElementById('su-username').value.trim();
      const email = document.getElementById('su-email').value.trim();
      const password = document.getElementById('su-password').value;
      const confirm = document.getElementById('su-confirm').value;
  
      // Clear previous error
      errorMessage.textContent = '';
  
      // Basic validation
      if (!username || !email || !password || !confirm) {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
      }
  
      if (password !== confirm) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
      }
  
      // Email format check: must include @ and .
      if (!email.includes('@') || !email.includes('.')) {
        errorMessage.textContent = 'Invalid email format. Please use a valid email address.';
        return;
      }
  
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.some(u => u.username === username || u.email === email)) {
        errorMessage.textContent = 'This username or email is already registered.';
        return;
      }
  
      // Register user
      users.push({ username, email, password });
      localStorage.setItem('users', JSON.stringify(users));
  
      // Optional: clear form
      form.reset();
  
      // Redirect
      window.location.href = 'login.html';
    });
  });
