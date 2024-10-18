// JavaScript for Dark/Light Mode Toggle

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');  // Toggle the dark-mode class

    // Log the current mode for debugging
    console.log('Dark mode active:', body.classList.contains('dark-mode'));

    // Change button text based on mode
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Light Mode';
    } else {
        themeToggleButton.textContent = 'Dark Mode';
    }
});
