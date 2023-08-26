const headerMenuList = document.querySelector('.header-menu-list');
const burgerBtn = document.querySelector('.burgerBtn');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const reseauxMobile = document.querySelector('.header-container-reseaux-mobile');
const liIcon = document.querySelector('.linkedIn');

const cards = document.querySelectorAll('.cardContainer');
const modal = document.querySelector('.modal');

burgerBtn.addEventListener('click', burgerBtnMode);
window.addEventListener('resize', screenMode);

cards.forEach(card => {
  const closeModal = document.querySelector('.modaleBtn');
  card.addEventListener('click', modaleOuverture);
  closeModal.addEventListener('click', modaleFermeture)
});

function screenMode() {
  if (window.innerWidth <= 768) {
    headerMenuList.classList.add('hidden');
    main.classList.remove('hidden');
    reseauxMobile.classList.add('hidden');
    burgerBtn.textContent = 'menu';    
  }
};

function burgerBtnMode() {
  if (burgerBtn.textContent === 'menu') {
    headerMenuList.classList.remove('hidden');
    main.classList.add('hidden');
    reseauxMobile.classList.remove('hidden');
    burgerBtn.textContent = 'close';
  } else {
    headerMenuList.classList.add('hidden');
    main.classList.remove('hidden');
    reseauxMobile.classList.add('hidden');
    burgerBtn.textContent = 'menu';
  }
};

screenMode();

