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
