$(function() {
  $("#contactForm").submit(function(e) {
    e.preventDefault();
    
    const formData = {
      name: $("#name").val().trim(),
      surname: $("#surname").val().trim(),
      email: $("#email").val().trim(),
      message: $("#message").val().trim()
    };

    // Validate required fields
    if (!formData.name) {
      alert("Please fill in the name fields");
      return;
    }
    if (!formData.surname) {
      alert("Please fill in the surname fields");
      return;
    }
    if (!formData.email) {
      alert("Please fill in the email fields");
      return;
    }
    if (!formData.message) {
      alert("Please fill in the message fields");
      return;
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }  
    
    $("#successMessage").css("display", "block");
  });
});
