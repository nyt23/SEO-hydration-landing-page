// Cursor movement
document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.droplet-cursor');
  cursor.style.left = `${e.clientX - 10}px`;
  cursor.style.top = `${e.clientY - 10}px`;
});

// Click effects
document.addEventListener('click', (e) => {
  // Create splash
  const splash = document.createElement('div');
  splash.className = 'splash';
  splash.style.left = `${e.clientX - 10}px`;
  splash.style.top = `${e.clientY - 10}px`;

  // Create ripple
  const ripple = document.createElement('div');
  ripple.className = 'ripple-effect';
  ripple.style.left = `${e.clientX - 10}px`;
  ripple.style.top = `${e.clientY - 10}px`;

  document.body.appendChild(splash);
  document.body.appendChild(ripple);

  // Cleanup
  setTimeout(() => {
    splash.remove();
    ripple.remove();
  }, 600);
});

// flip card
document.addEventListener('DOMContentLoaded', function() {
  // Get all flip cards
  const flipCards = document.querySelectorAll('.flip-card');

  // Add event listeners to each card
  flipCards.forEach(card => {
    // For desktop - mouse events
    card.addEventListener('mouseenter', function() {
      this.classList.add('is-flipped');
    });

    card.addEventListener('mouseleave', function() {
      this.classList.remove('is-flipped');
    });

    // For mobile - touch events
    card.addEventListener('touchstart', function(e) {
      e.preventDefault(); // Prevent scrolling on touch
      this.classList.toggle('is-flipped');
    }, {passive: false});
  });
});
