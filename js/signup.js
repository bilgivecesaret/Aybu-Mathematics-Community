$(function () {
  $("#su-birthdate").datepicker();
});

const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Pakistan",
  "Brazil",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Ethiopia",
  "Philippines",
  "Egypt",
  "Vietnam",
  "DR Congo",
  "Türkiye",
  "Iran",
  "Germany",
  "Thailand",
  "United Kingdom",
  "France",
  "Italy",
  "Tanzania",
  "South Africa",
];

//  for auto complete country
$("#su-country").autocomplete({
  source: countries
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const errorMessage = document.getElementById('signup-error-message');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('su-name').value.trim();
      const surname = document.getElementById('su-surname').value.trim();      
      const country = document.getElementById('su-country').value.trim();
      const birthdate = document.getElementById('su-birthdate').value.trim();
      const username = document.getElementById('su-username').value.trim();
      const email = document.getElementById('su-email').value.trim();
      const password = document.getElementById('su-password').value;
      const confirm = document.getElementById('su-confirm').value;
  
      // Clear previous error
      errorMessage.textContent = '';
  
      if (password !== confirm) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
      }
  
      // Email format check: must include @ and .
      if (!email.includes('@') || !email.includes('.')) {
        errorMessage.textContent = 'Invalid email format. Please use a valid email address.';
        return;
      } 
  
      // Optional: clear form
      form.reset();
  
      // Redirect
      window.location.href = 'login.html';
    });
  });
