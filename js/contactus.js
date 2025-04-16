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
    if (!formData.name || !formData.surname || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Submit form data (mock implementation)
    $.ajax({
      type: "POST",
      url: "/submit-contact",
      data: formData,
      success: function(response) {
        $("#successMessage").show().delay(3000).fadeOut();
        $("#contactForm")[0].reset();
      },
      error: function() {
        alert("There was an error submitting your message. Please try again.");
      }
    });
  });
});
