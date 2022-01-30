const hamburgerButton = document.querySelector('.hamburger');
const blackout = document.querySelector('.blackout');
const menuBg = document.querySelector('.menu-bg');

function createMenu() {
  if (menuBg.classList.contains('open')) {
    // menuBg.innerHTML = `
    // <nav class = "burger-menu-list">
    //   <ul>
    //     <li>
    //       <a href="#skills" data-i18n="skills" class="nav-link">Skills</a>
    //     </li>
    //     <li>
    //       <a href="#portfolio" data-i18n="portfolio" class="nav-link">Portfolio</a>
    //     </li>
    //     <li>
    //       <a href="#video" data-i18n="video" class="nav-link">Video</a>
    //     </li>
    //     <li>
    //       <a href="#price" data-i18n="price" class="nav-link">Price</a>
    //     </li>
    //     <li>
    //       <a href="#contacts" data-i18n="contacts" class="nav-link">Contacts</a>
    //     </li>
    //   </ul>
    // </nav>`;

    document.querySelector('body').style.overflow = 'hidden';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(element => element.addEventListener('click', closeMenu));
  } else {
    closeMenu();
  }
}

function closeMenu() {
  // menuBg.innerHTML = ``;
  hamburgerButton.classList.remove('open');
  menuBg.classList.remove('open');
  blackout.classList.remove('open');
  document.querySelector('body').style.overflow = 'initial';
}

hamburgerButton.addEventListener('click', function() {
  hamburgerButton.classList.toggle('open');
  menuBg.classList.toggle('open');
  blackout.classList.toggle('open');

  createMenu();
});