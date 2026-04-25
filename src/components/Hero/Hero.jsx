import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Hero — full-viewport sticky section with rounded dark image box.
 * Stays pinned while the next section scrolls over it.
 */
export default function Hero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.2 });

    /* Image scale-in reveal */
    tl.fromTo(
      imageRef.current,
      { scale: 1.2 },
      { scale: 1, duration: 2, ease: 'power3.out' },
      0
    );

    /* Overlay fade */
    tl.fromTo(
      overlayRef.current,
      { opacity: 1 },
      { opacity: 0.75, duration: 1.5, ease: 'power2.out' },
      0.3
    );

    /* Heading lines */
    const headingLines = headingRef.current.querySelectorAll('.hero-line');
    tl.fromTo(
      headingLines,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      },
      1.2
    );

    /* Sub text */
    tl.fromTo(
      subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      1.8
    );

    /* CTA button */
    tl.fromTo(
      ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      2.1
    );

    /* Parallax on scroll */
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        gsap.set(imageRef.current, {
          y: scrollY * 0.001,
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      tl.kill();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full h-screen flex flex-col bg-[var(--color-cream)]"
    >
      {/* Hero card */}
      <div className="container-custom w-full flex-1 flex flex-col pt-24 lg:pt-28 pb-4">
        <div className="relative w-full flex-1 rounded-[24px] lg:rounded-[32px] overflow-hidden flex flex-col items-center justify-center text-center px-4">

          {/* Background Image with parallax */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              ref={imageRef}
              src="/images/hero-bread.png"
              alt="Artisan bread"
              className="w-full h-full object-cover will-change-transform"
              style={{ transform: 'scale(1.2)' }}
            />
          </div>

          {/* Dark green overlay */}
          <div
            ref={overlayRef}
            className="absolute inset-0"
            style={{ background: '#2A3C2B', opacity: 0.8 }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-4xl flex flex-col items-center justify-center gap-6 lg:gap-8">
            {/* Heading */}
            <div ref={headingRef} className="overflow-hidden px-6 py-2 mx-auto inline-block">
              <h1 className="font-accent font-bold leading-[1.1] tracking-tight text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem]">
                <span className="hero-line block" style={{ transform: 'translateY(60px)', opacity: 0 }}>
                  The Future of Baking is
                </span>
                <span className="hero-line block" style={{ transform: 'translateY(60px)', opacity: 0 }}>
                  Gluten-Free
                </span>
              </h1>
            </div>

            {/* Sub-text */}
            <p
              ref={subRef}
              className="max-w-2xl text-white opacity-90 text-sm md:text-base lg:text-lg font-body font-light leading-relaxed px-4"
              style={{ transform: 'translateY(30px)', opacity: 0 }}
            >
              Experience artisan-quality baking without the gluten. Organic, nutritious, and perfectly blended for the perfect rise every time.
            </p>

            {/* CTA Button */}
            <div ref={ctaRef} style={{ transform: 'translateY(20px)', opacity: 0 }}>
              <a
                href="#shop"
                className="magnetic-btn shrink-0 whitespace-nowrap px-8 py-4 rounded-xl font-accent text-[13px] md:text-[14px] font-semibold tracking-[0.05em] uppercase no-underline transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{
                  background: '#CFE1D4',
                  color: 'var(--color-espresso)',
                }}
                data-cursor="cta"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10">Shop the Collection</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
