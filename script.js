const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Initially set first circle as active
circles[currentIndex].classList.add('active');

// Event listener for next button
nextButton.addEventListener('click', () => {
  if (currentIndex < circles.length - 1) {
    // circles[currentIndex].classList.remove('active');
    circles[++currentIndex].classList.add('active');
    prevButton.disabled = false;
  }
  if (currentIndex === circles.length - 1) {
    nextButton.disabled = true;
  }
});

// Event listener for previous button
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    circles[currentIndex].classList.remove('active');
    circles[--currentIndex].classList.add('active');
    nextButton.disabled = false;
  }
  if (currentIndex === 0) {
    prevButton.disabled = true;
  }
});