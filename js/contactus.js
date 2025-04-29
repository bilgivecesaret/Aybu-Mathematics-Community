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
$("#country").autocomplete({
  source: countries
});


$(document).ready(function () {
  $("#contactForm").submit(function(e) {
    e.preventDefault();
    
    const formData = {
      name: $("#name").val().trim(),
      surname: $("#surname").val().trim(),
      country: $("#country").val().trim(),
      email: $("#email").val().trim(),
      message: $("#message").val().trim()
    };

    // Validate required fields
    if (!formData.name) {
      $("#dialog").dialog();
      $("#dialog").html("Please fill in the NAME fields");
      return;
    }
    if (!formData.surname) {
      $("#dialog").dialog();
      $("#dialog").html("Please fill in the SURNAME fields");
      return;
    }

    if (!formData.country) {
      $("#dialog").dialog();
      $("#dialog").html("Please fill in the COUNTRY fields");
      return;
    }

    if (!formData.email) {
      $("#dialog").dialog();
      $("#dialog").html("Please fill in the EMAIL fields");
      return;
    }
    if (!formData.message) {
      $("#dialog").dialog();
      $("#dialog").html("Please fill in the MESSAGE fields");
      return;
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      $("#dialog").dialog();
      $("#dialog").html("Please enter a valid email address. \nFor example:  user@example.com");
      return;
    }  
    
    $("#successMessage").css("display", "block");
  });
});
