// JavaScript code for form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform validation or further processing
    // ...

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Display success message
    alert("Form submitted successfully!");
  });
