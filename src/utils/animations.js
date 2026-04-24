import gsap from 'gsap';

/**
 * Utility: split a text string into individual <span> wrapped words
 * for per-word GSAP animation.
 */
export function splitTextToWords(text) {
  return text.split(' ').map((word, i) => (
    `<span class="word inline-block" style="display:inline-block; transform:translateY(100%); opacity:0;" key="${i}">${word}&nbsp;</span>`
  )).join('');
}

/**
 * Utility: animate words inside a container with staggered reveal.
 */
export function animateWords(container, options = {}) {
  const {
    delay = 0,
    duration = 0.8,
    stagger = 0.05,
    ease = 'power3.out',
    y = 100,
  } = options;

  const words = container.querySelectorAll('.word');
  return gsap.fromTo(
    words,
    { y, opacity: 0 },
    { y: 0, opacity: 1, duration, stagger, ease, delay }
  );
}

/**
 * Utility: animate a line draw (e.g. underline or divider).
 */
export function animateLineReveal(el, options = {}) {
  const { delay = 0, duration = 1.2 } = options;
  return gsap.fromTo(
    el,
    { scaleX: 0 },
    {
      scaleX: 1,
      duration,
      ease: 'power2.inOut',
      delay,
      transformOrigin: 'left center',
    }
  );
}
