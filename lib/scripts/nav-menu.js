const hamburger = document.querySelector('.menu');
const navBar = document.querySelector('.nav-menu');
const closeBtn = document.querySelector('.close');
const navItems = document.querySelectorAll('.nav-item');

let isNavVisible = false;

function onClick() {
  if (isNavVisible) {
    navBar.style.display = 'none';
    hamburger.style.display = 'block';
    isNavVisible = false;
  } else {
    navBar.style.display = 'flex';
    hamburger.style.display = 'none';
    isNavVisible = true;
  }
}
hamburger.addEventListener('click', onClick);
closeBtn.addEventListener('click', onClick);
navItems.forEach((e) => {
  e.addEventListener('click', onClick);
});