// const allBtn = document.querySelector('#all-btn')
const frontBtn = document.querySelector('#front-btn');
const backBtn = document.querySelector('#back-btn');
const projectsFront = document.querySelector('#projects-front');
const projectsBack = document.querySelector('#projects-back');


frontBtn.addEventListener('click', () => {
  projectsFront.style.display = 'flex';
  projectsBack.style.display = 'none';
})

backBtn.addEventListener('click', () => {
  projectsFront.style.display = 'none';
  projectsBack.style.display = 'flex';
})