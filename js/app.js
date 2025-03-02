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


// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.scroll-animate');

  const updateObserveOptions = () => {
    let threshold = 0.02;
    let rootMargin = '0px 0px -20px 0px';

    // Check the screen size (1024px is the breakpoint)
    if (window.innerWidth >= 1024)  {
      threshold = 0.1;
      rootMargin = '0px 0px -100px 0px';
    }
    // Create the observer with the updated options
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // If the element is in view, add the animation class
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            // If the element is out of view, remove the animation class
            entry.target.classList.remove('animate');
          }
        });
    }
    , {
      threshold: threshold,
      rootMargin: rootMargin
    });

    // observe each element
    animateElements.forEach(element => {
      observer.observe(element);
    });
  };

  updateObserveOptions();

  // update the observer options when the window is resized
  window.addEventListener('resize', updateObserveOptions);
});


// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 20; // Adjust this value to match your scroll-margin-top

    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});
