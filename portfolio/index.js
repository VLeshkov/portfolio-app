// Self-assessment
console.log(`Оценка 85 / 85 баллов:
- Вёрстка соответствует макету (48/48)
- Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки (15/15)
- На ширине экрана 768рх и меньше реализовано адаптивное меню (22/22)`);

// Add change color function for the en/ru switch

let switchEng = document.getElementById('switch-en');
let switchRu = document.getElementById('switch-ru');

switchEng.addEventListener('click', () => {
  if (!switchEng.classList.contains('switch-selected')) {
    switchEng.classList.add('switch-selected');
    switchRu.classList.remove('switch-selected');
  }
});

switchRu.addEventListener('click', () => {
  if (!switchRu.classList.contains('switch-selected')) {
    switchRu.classList.add('switch-selected');
    switchEng.classList.remove('switch-selected');
  }
});

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