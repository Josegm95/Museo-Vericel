const submenuItems = document.querySelector('.submenu-items');
let display = false;

function displaySubmenu() {
  submenuItems.classList.toggle('hide');
  if (display) {
    display = false;
  } else {
    display = true;
  }
}

document.querySelector('#navtitle').addEventListener('click', displaySubmenu);
document.querySelector('main').addEventListener('click', () => {
  if (display) {
    displaySubmenu();
  }
});
