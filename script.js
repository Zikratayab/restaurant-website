// Script for form validation
(function () {
    'use strict';
  
    // Fetch the form to apply custom Bootstrap validation
    const form = document.querySelector('#contactForm');
  
    form.addEventListener('submit', function (event) {
      // Check if the form is valid
      if (!form.checkValidity()) {
        event.preventDefault();  // Prevent form submission
        event.stopPropagation(); // Stop event propagation
      }
  
      form.classList.add('was-validated');
    }, false);
  })();
  