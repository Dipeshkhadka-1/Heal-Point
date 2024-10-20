// Function to open modal
function openModal() {
    document.getElementById('joinModal').style.display = 'flex';
  }
  
  // Function to close modal
  function closeModal() {
    document.getElementById('joinModal').style.display = 'none';
  }
  
  // Smooth scroll to section
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  // Close modal on outside click
  window.onclick = function(event) {
    const modal = document.getElementById('joinModal');
    if (event.target == modal) {
      closeModal();
    }
  };
  
  // Simple fade-in effect on page load
  document.addEventListener('DOMContentLoaded', function () {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    });
  });
  