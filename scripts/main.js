const keys = document.getElementsByClassName('key-img');
const modal = document.getElementById('modal-img');

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', () => {
    modal.setAttribute('src', keys[i].getAttribute('src'));
    modal.className = 'modal-img';
  });
}

document.getElementById('close-modal').addEventListener('click', () => {
  modal.setAttribute('src', '');
  modal.className = 'hide';
});
