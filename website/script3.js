// Function to open the booking modal
function openModal() {
    document.getElementById('bookingModal').style.display = "block";
}

// Function to close the booking modal
function closeModal() {
    document.getElementById('bookingModal').style.display = "none";
}

// Function to set the service type in the modal
function bookNow(service) {
    document.getElementById('serviceType').textContent = service;
    openModal();
}

// Event listener for closing the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Form submission (optional functionality)
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Booking Confirmed! Thank you for reaching out.');
    closeModal();
    this.reset(); // Reset the form fields
});
