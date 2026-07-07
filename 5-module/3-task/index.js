function initCarousel() {
  const carouselInner = document.querySelector(".carousel__inner");
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");

  let currentSlide = 0;
  const slideWidth = carouselInner.offsetWidth;

  function updateCarousel() {
    carouselInner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;

    arrowLeft.style.display = currentSlide === 0 ? "none" : "";
    arrowRight.style.display = currentSlide === 3 ? "none" : "";
  }

  updateCarousel();

  arrowRight.addEventListener("click", () => {
    if (currentSlide < 3) {
      currentSlide += 1;
      updateCarousel();
    }
  });

  arrowLeft.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide -= 1;
      updateCarousel();
    }
  });
}
