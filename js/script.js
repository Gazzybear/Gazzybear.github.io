// Theme Switcher Functionality
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// Check if user has previously set a preference
if (localStorage.getItem('theme')) {
    document.body.className = localStorage.getItem('theme');
    // Update toggle state if light mode is active
    if (localStorage.getItem('theme') === 'light-mode') {
        toggleSwitch.checked = true;
    }
}

// Function to toggle between light and dark mode
function switchTheme(e) {
    if (e.target.checked) {
        document.body.className = 'light-mode';
        localStorage.setItem('theme', 'light-mode');
    } else {
        document.body.className = 'dark-mode';
        localStorage.setItem('theme', 'dark-mode');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Update the Last Updated date in the footer
document.addEventListener('DOMContentLoaded', function() {
    const lastUpdatedElement = document.getElementById('lastUpdated');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const lastUpdatedDate = new Date().toLocaleDateString('en-GB', options);
    
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = lastUpdatedDate;
    }
});