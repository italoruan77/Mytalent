let btnMenu = document.querySelector('.btn-menu');
let btnmenuClose = document.querySelector('.btn-menu-close');
let body = document.getElementById('body');

btnMenu.addEventListener('click', openMenu);
btnmenuClose.addEventListener('click', closeMenu);

function openMenu() {
  body.classList.add('menu-expanded');
}

function closeMenu() {
  body.classList.remove('menu-expanded');
}
