const frontBtn = document.querySelector('#front-btn');
const projectsFront = document.querySelector('#projects-front');

frontBtn.addEventListener('click', () => {
  projectsFront.classList.toggle('active');
})