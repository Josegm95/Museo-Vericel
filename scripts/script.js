/* eslint-env browser */
const slider = document.querySelector('.slider');
const nroImages = document.querySelectorAll('.slider img').length;
const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');
let timer = null;
let counter = 0;

function nextImg() {
  clearInterval(timer);
  if (counter === nroImages - 1) {
    counter = 0;
  } else {
    counter += 1;
  }
  const size = slider.offsetWidth;
  slider.style.transition = 'transform 1s ease-in-out';
  slider.style.transform = `translateX(${-size * counter}px)`;
  timer = setInterval(nextImg, 5000);
}

function previousImg() {
  clearInterval(timer);
  if (counter === 0) {
    counter = nroImages - 1;
  } else {
    counter -= 1;
  }
  const size = slider.offsetWidth;
  slider.style.transition = 'transform 1s ease-in-out';
  slider.style.transform = `translateX(${-size * counter}px)`;
  timer = setInterval(nextImg, 5000);
}

timer = setInterval(nextImg, 5000);
nextButton.addEventListener('click', nextImg);
prevButton.addEventListener('click', previousImg);
