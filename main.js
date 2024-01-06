function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

function submitForm() {
    const emailInput = document.getElementById('email');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    // Reset messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      errorMessage.textContent = 'Please insert a valid email.';
      errorMessage.style.display = 'block';
      emailInput.classList.add("myStyle");
      return;
    }

    // Display success message
    successMessage.textContent = `Successfully signed in with email: ${emailInput.value}`;
    successMessage.style.display = 'block';
    emailInput.value = ''; // Clear the email input
}