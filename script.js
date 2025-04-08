// Get references to form elements
const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const statusMessage = document.createElement('div'); // Status message container

// Add the status message div to the form section
form.appendChild(statusMessage);

// Function to show status messages (success or error)
function showStatusMessage(message, isSuccess) {
    statusMessage.textContent = message;
    statusMessage.classList.remove('success', 'error'); // Clear previous classes
    if (isSuccess) {
        statusMessage.classList.add('success');
    } else {
        statusMessage.classList.add('error');
    }
    statusMessage.style.display = 'block'; // Show the message
}

// Function to clear form fields after submission
function clearForm() {
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
}

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Validate form fields
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === '' || email === '' || message === '') {
        showStatusMessage('Please fill in all fields.', false);
        return;
    }

    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showStatusMessage('Please enter a valid email address.', false);
        return;
    }

    // If validation passes, simulate a successful submission (you can implement actual submission here)
    showStatusMessage('Thanks for reaching out! I will be in touch with you soon!', true);

    // Clear form fields after success
    clearForm();
});