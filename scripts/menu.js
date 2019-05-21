const menuItems = document.querySelector('#menu-items');

document.querySelector('.menu_title').addEventListener('click', () => {
  menuItems.classList.toggle('hide');
});
