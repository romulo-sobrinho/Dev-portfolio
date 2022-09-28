const html = document.querySelector('html');
const changeThemeBtn = document.querySelector('#change-theme');
const biSun = document.querySelector('.bi-sun');
const biMoon = document.querySelector('.bi-moon');


// Toggle dark mode
function toggleDarkMode() {
  html.classList.toggle('dark-mode');
}

// Load light or dark mode
function loadTheme() {
  const darkMode = localStorage.getItem('dark-mode');
  if(darkMode) {
    toggleDarkMode();
  }
}

// Call loadTheme function
loadTheme();

// Change dark mode
changeThemeBtn.addEventListener('change', () => {
  toggleDarkMode();

  // Save or remove dark mode
  if(html.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 1);
  } else {
    localStorage.removeItem('dark-mode');
  }
})