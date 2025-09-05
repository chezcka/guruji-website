// Mobile hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('show');
});

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const dots = document.querySelectorAll('.carousel-indicators .dot');

let currentIndex = 0;
const totalSlides = slides.length;

// Update carousel position
function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update active dot
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

// Next slide
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

// Previous slide
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

// Dot navigation
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    updateCarousel();
  });
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}, 5000);

updateCarousel();


// Smooth scroll for "View Full Menu" button
document.querySelector('.btn-modern').addEventListener('click', function(e) {
  e.preventDefault();
  const menuSection = document.getElementById('menu');
  menuSection.scrollIntoView({ behavior: 'smooth' });
});
