// JavaScript for Dark/Light Mode Toggle

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Change button text based on mode
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Light Mode';
    } else {
        themeToggleButton.textContent = 'Dark Mode';
    }
});
