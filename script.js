
const wishButton = document.getElementById('wishButton');
const messageDiv = document.getElementById('message');

wishButton.addEventListener('click', () => {
    // Hide the button and show the message
    wishButton.style.display = 'none'; // Or fade it out with CSS
    messageDiv.classList.remove('hidden'); // Make it visible
    messageDiv.classList.add('show'); 
});