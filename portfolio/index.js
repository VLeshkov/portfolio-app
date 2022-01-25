// Self-assessment
console.log(`Оценка ... / ... баллов:`);

// Page translation

import i18Obj from './translate.js';

const switchEng = document.getElementById('switch-en');
const switchRu = document.getElementById('switch-ru');

const textNodes = document.querySelectorAll('[data-i18n]');

function translatePage(lang) {
  textNodes.forEach(node => {
    const currentAttribute = node.getAttribute('data-i18n');
    if (node.placeholder) {
      node.placeholder = i18Obj[lang][currentAttribute];
    } else {
      node.textContent = i18Obj[lang][currentAttribute];
    }
  });
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



// code for portfolio buttons

let portfolioButtons = document.querySelector('.portfolio-controls').
  querySelectorAll('button');

function getSelectedButton(buttonList) {
  for (let i = 0; i < buttonList.length; i++) {
    if (buttonList[i].classList.contains('button-checked')) {
      return buttonList[i];
    }
  }
}

function changeCheckedButton(event) {
  let clickedIndex = Array.from(portfolioButtons).indexOf(event.target);
  let currentButton = portfolioButtons[clickedIndex];

  if (!currentButton.classList.contains('button-checked')) {
    getSelectedButton(portfolioButtons).classList.remove('button-checked');
    currentButton.classList.add('button-checked');
  }
}

portfolioButtons.forEach(btn => {
  btn.addEventListener('click', changeCheckedButton);
})