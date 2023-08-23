var slideIndex = 0;
var slides = document.querySelectorAll('.slider img');

function showSlide() {
  slides.forEach(function(slide) {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide();
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide();
}

showSlide();
