import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

/**
 * Custom hook: creates a smooth, interactive custom cursor
 * with magnetic effect on hoverable elements.
 */
export function useCustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorTextRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  const onMouseMove = useCallback((e) => {
    posRef.current = { x: e.clientX, y: e.clientY };

    /* Dot follows instantly */
    gsap.to(cursorDotRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: 'power2.out',
    });

    /* Ring follows with elastic lag */
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.6,
      ease: 'power3.out',
    });
  }, []);

  const onMouseEnterInteractive = useCallback(() => {
    isHovering.current = true;
    gsap.to(cursorRef.current, {
      scale: 2.5,
      opacity: 0.6,
      duration: 0.4,
      ease: 'power2.out',
    });
    gsap.to(cursorDotRef.current, {
      scale: 0,
      duration: 0.3,
    });
  }, []);

  const onMouseLeaveInteractive = useCallback(() => {
    isHovering.current = false;
    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    });
    gsap.to(cursorDotRef.current, {
      scale: 1,
      duration: 0.3,
    });
  }, []);

  const onMouseEnterCTA = useCallback(() => {
    gsap.to(cursorRef.current, {
      scale: 3.5,
      opacity: 0.15,
      duration: 0.4,
      ease: 'power2.out',
    });
    gsap.to(cursorDotRef.current, {
      scale: 0,
      duration: 0.3,
    });
    if (cursorTextRef.current) {
      gsap.to(cursorTextRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
      });
    }
  }, []);

  const onMouseLeaveCTA = useCallback(() => {
    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    });
    gsap.to(cursorDotRef.current, {
      scale: 1,
      duration: 0.3,
    });
    if (cursorTextRef.current) {
      gsap.to(cursorTextRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    /* Attach hover listeners to interactive elements */
    const interactives = document.querySelectorAll(
      'a, button, [data-cursor="pointer"]'
    );
    const ctas = document.querySelectorAll('[data-cursor="cta"]');

    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    ctas.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterCTA);
      el.addEventListener('mouseleave', onMouseLeaveCTA);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
      ctas.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterCTA);
        el.removeEventListener('mouseleave', onMouseLeaveCTA);
      });
    };
  }, [onMouseMove, onMouseEnterInteractive, onMouseLeaveInteractive, onMouseEnterCTA, onMouseLeaveCTA]);

  return { cursorRef, cursorDotRef, cursorTextRef };
}
