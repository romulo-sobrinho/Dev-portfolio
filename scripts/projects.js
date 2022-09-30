const allBtn = document.querySelector('#all-btn')
const frontBtn = document.querySelector('#front-btn');
const backBtn = document.querySelector('#back-btn');
const projectsFront = document.querySelector('#projects-front');
const projectsBack = document.querySelector('#projects-back');

frontBtn.addEventListener('click', () => {
  projectsFront.classList.add('active');
  projectsBack.classList.remove('active');
})

backBtn.addEventListener('click', () => {
  projectsBack.classList.add('active');
  projectsFront.classList.remove('active');
})