// Self-assessment
console.log(`Оценка 85 / 85 баллов:
- Смена изображений в секции portfolio 25
- Перевод страницы на два языка 25
- Переключение светлой и тёмной темы 25
- Дополнительный функционал 10`);

// Local storage
let pageLanguage = 'en';
let pageTheme = 'dark';

function setLocalStorage() {
  localStorage.setItem('lang', pageLanguage);
  localStorage.setItem('theme', pageTheme);
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    document.getElementById(`switch-${lang}`).click();
  }
  if (localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    if (theme !== pageTheme) {
      changeTheme();
    }
  }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

// Burger menu

import './js/hamburger.js';

// Page translation

import i18Obj from './js/translate.js';

const switchEng = document.getElementById('switch-en');
const switchRu = document.getElementById('switch-ru');

const textNodes = document.querySelectorAll('[data-i18n]');

function translatePage(lang) {
  textNodes.forEach(node => {
    const currentAttribute = node.dataset.i18n;
    if (node.placeholder) {
      node.placeholder = i18Obj[lang][currentAttribute];
    } else {
      node.textContent = i18Obj[lang][currentAttribute];
    }
  });

  pageLanguage = lang;
}

function langSelect(selectedSwitch) {

  if (!selectedSwitch.target.classList.contains('switch-selected')) {
    switchEng.classList.toggle('switch-selected');
    switchRu.classList.toggle('switch-selected');

    translatePage(selectedSwitch.target.textContent.toLowerCase());
  }
}

[switchEng, switchRu].forEach(langSwitch => 
  langSwitch.addEventListener('click', langSelect)
);

// Dark-light theme switch

const themeSwitcher = document.querySelector('.theme-switch');
const themeElements = [
  ...document.querySelectorAll('button'),
  ...document.querySelectorAll('.section-title'),
  document.querySelector('.menu-bg'),
  document.querySelector('body'),
  document.querySelector('header'),
  document.querySelector('.hero'),
  document.querySelector('.skills'),
  document.querySelector('.portfolio'),
  document.querySelector('.price'),
  document.querySelector('.contacts'),
  document.querySelector('footer')
];

function changeTheme() {
  themeElements.forEach(element => element.classList.toggle('light-theme'));

  if (document.querySelector('header').classList.contains('light-theme')) {
    pageTheme = 'light';
  } else {
    pageTheme = 'dark';
  }
}

themeSwitcher.addEventListener('click', changeTheme);


// Images cache

function preloadImages(season) {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${season}/${i}.jpg`;
  }
}

['winter', 'spring', 'summer', 'autumn'].forEach(season => 
  preloadImages(season));

// Portfolio switch

const portfolioButtons = document.querySelector('.portfolio-controls').
  querySelectorAll('button');

portfolioButtons.forEach(btn => {
  btn.addEventListener('click', clickButton);
});

function changeSeasonImages(season) {
  const portfolioImages = document.querySelectorAll('.portfolio-image');
  portfolioImages.forEach((img, index) => 
    img.src = `./assets/img/${season}/${index + 1}.jpg`);
}

function selectButton(clickedButton) {
  const selectedButton = document.querySelector('.button-checked');
  selectedButton.classList.remove('button-checked');
  clickedButton.classList.add('button-checked');
}

function clickButton(event) {
  const currentButton = event.target;

  if (!currentButton.classList.contains('button-checked')) {
    selectButton(currentButton);
    changeSeasonImages(currentButton.dataset.season);
  }
}

// Ripple button

function createRipple(e) {
  const x = e.clientX;
  const y = e.clientY;

  console.log(x, y)

  const buttonTop = e.target.offsetTop - window.scrollY;
  const buttonLeft = e.target.offsetLeft;

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.top = yInside + 'px';
  circle.style.left = xInside + 'px';

  this.appendChild(circle);

  setTimeout(() => circle.remove(), 500);
}

const rippleButton = document.querySelectorAll('.ripple');
rippleButton.forEach(btn => btn.addEventListener('click', createRipple));