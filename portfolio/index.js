// Self-assessment
// console.log('Вёрстка валидная +10\nВёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css + 12\nИнтерактивность, реализуемая через css +20\nВсего: 110 баллов');

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

// hamburger menu

let hamburgerButton = document.querySelector('.hamburger');
let blackout = document.querySelector('.blackout');
let hamburgerSelected = false;
let menuBg = document.querySelector('.menu-bg');

function closeMenu() {
  document.querySelector('.container').style.height = 'initial';
  menuBg.innerHTML = ``;
  blackout.style.display = 'none';
  hamburgerButton.style.backgroundImage = 'url("assets/svg/hamburger.svg")';
  hamburgerSelected = false;
}

hamburgerButton.addEventListener('click', function() {
  if (hamburgerSelected) {
    closeMenu();
  } else {
    menuBg.innerHTML = `
      <nav class = "burger-menu-list">
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#video">Video</a></li>
          <li><a href="#price">Price</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>`;

    document.querySelector('.container').style.height = '100vh';

    blackout.style.display = 'block';
    hamburgerButton.style.zIndex = 3;
    hamburgerButton.style.backgroundImage = 'url("assets/svg/close.svg")';
    hamburgerSelected = true;
  }
});

blackout.addEventListener('click', () => {
  closeMenu();
});