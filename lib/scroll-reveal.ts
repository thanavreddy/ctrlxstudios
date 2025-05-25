'use client';

export function initScrollReveal() {
  if (typeof window !== 'undefined') {
    const revealElements = document.querySelectorAll('.reveal');

    const revealHandler = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        } else {
          revealElements[i].classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', revealHandler);
    // Initial check
    revealHandler();

    return () => {
      window.removeEventListener('scroll', revealHandler);
    };
  }
}