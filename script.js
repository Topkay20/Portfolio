
  let currentIndex = 0;
  const items = document.querySelectorAll('.carouselBTS-item');

  function showSlide(index) {
    const inner = document.querySelector('.carouselBTS-inner');
    const total = items.length;
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    currentIndex = index;
    inner.style.transform = `translateX(-${index * 100}%)`;
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

