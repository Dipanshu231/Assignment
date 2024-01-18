let currentIndex = 0;
let totalCards = document.querySelectorAll('.carousel-card').length;

function scrollCarousel(direction) {
  currentIndex = (currentIndex + direction + totalCards) % totalCards;
  updateCarousel();
}

function updateCarousel() {
  const cardWidth = document.querySelector('.carousel-card').offsetWidth;
  const translateValue = -currentIndex * cardWidth;
  document.querySelector('.carousel').style.transform = `translateX(${translateValue}px)`;
}

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);
