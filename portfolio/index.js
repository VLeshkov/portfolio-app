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