
//menu hamburger
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show'); // Toggle class 'show' untuk menu
});

const carousel = document.querySelector('.carousel');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarouselPosition() {
  const itemWidth = carouselItems[0].clientWidth;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function disableArrow(direction) {
  if (direction === 'left' && currentIndex === 0) {
    leftArrow.disabled = true;
    rightArrow.disabled = false;
  } else if (direction === 'right' && currentIndex === carouselItems.length - 1) {
    leftArrow.disabled = false;
    rightArrow.disabled = true;
  } else {
    leftArrow.disabled = false;
    rightArrow.disabled = false;
  }
}

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    disableArrow('left');
  }
  updateCarouselPosition();
});

rightArrow.addEventListener('click', () => {
  if (currentIndex < carouselItems.length - 1) {
    currentIndex++;
    disableArrow('right');
  }else{
    rightArrow.disabled = true;
  }
  updateCarouselPosition();
});

// Panggil fungsi updateCarouselPosition dan disableArrow secara awal
updateCarouselPosition();
disableArrow('both');


