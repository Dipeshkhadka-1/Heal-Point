// Function to open the modal
function openModal() {
    const modal = document.getElementById('joinModal');
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('joinModal');
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('joinModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
