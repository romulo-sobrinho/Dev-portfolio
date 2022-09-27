const navMenu = document.querySelector('.nav-menu');
const menuHamburger = document.querySelector('.menu-hamburger');

menuHamburger.addEventListener('click', () => {
  menuHamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})