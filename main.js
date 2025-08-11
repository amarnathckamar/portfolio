'use strict';

/**
 * Custom Neon Laser Cursor
 */

// const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  // Update the position of the cursor
  // cursorDot.style.left = `${posX}px`;
  // cursorDot.style.top = `${posY}px`;

  // Smooth animation for the glowing outline (trailing effect)
  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 300, fill: 'forwards' }
  );
});
