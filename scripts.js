// script.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from refreshing the page

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      console.log('Form submitted:', {
          name: name,
          email: email,
          message: message
      });

      alert('Your message has been sent!');
  });
});
