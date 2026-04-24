import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * Preloader component — award-winning style loading screen
 * with animated counter, logo reveal, and curtain exit.
 */
export default function Preloader({ onComplete }) {
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);
  const barRef = useRef(null);
  const counterRef = useRef(null);
  const curtainTopRef = useRef(null);
  const curtainBottomRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      },
    });

    /* Animate counter from 0 → 100 */
    tl.to(
      { val: 0 },
      {
        val: 100,
        duration: 2.4,
        ease: 'power2.inOut',
        onUpdate: function () {
          const value = Math.round(this.targets()[0].val);
          setCount(value);
        },
      },
      0
    );

    /* Progress bar */
    tl.to(
      barRef.current,
      {
        width: '100%',
        duration: 2.4,
        ease: 'power2.inOut',
      },
      0
    );

    /* Logo shimmer */
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      0.2
    );

    /* Curtain reveal — split open */
    tl.to(curtainTopRef.current, {
      yPercent: -100,
      duration: 1,
      ease: 'power4.inOut',
    }, 2.8);

    tl.to(curtainBottomRef.current, {
      yPercent: 100,
      duration: 1,
      ease: 'power4.inOut',
    }, 2.8);

    /* Fade out entire preloader */
    tl.to(preloaderRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = 'none';
        }
      },
    }, 3.6);

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader" id="preloader">
      {/* Top curtain */}
      <div
        ref={curtainTopRef}
        className="absolute top-0 left-0 w-full h-1/2 z-10"
        style={{ background: 'var(--color-espresso)' }}
      />
      {/* Bottom curtain */}
      <div
        ref={curtainBottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2 z-10"
        style={{ background: 'var(--color-espresso)' }}
      />

      {/* Content layer */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Logo */}
        <div ref={logoRef} className="preloader-logo">
          <span className="font-display tracking-[0.2em] font-light">
            PURE
          </span>
          <span
            className="font-display tracking-[0.2em] font-bold"
            style={{ color: 'var(--color-wheat)' }}
          >
            GRAIN
          </span>
        </div>

        {/* Progress bar */}
        <div className="preloader-bar-track">
          <div ref={barRef} className="preloader-bar" />
        </div>

        {/* Counter */}
        <div ref={counterRef} className="preloader-counter">
          {count}%
        </div>
      </div>
    </div>
  );
}
