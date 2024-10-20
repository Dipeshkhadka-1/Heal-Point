// No specific JavaScript is required for this static contact page, 
// but here you can handle form validation or interaction if necessary.

document.addEventListener('DOMContentLoaded', function () {
    // Example: Handle form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Your message has been sent!');
      form.reset();
    });
  });
  