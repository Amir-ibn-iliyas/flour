import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Showcase — a horizontal parallax product display with
 * full-bleed image and overlapping text layout.
 */
export default function Showcase() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    /* Parallax zoom on scroll */
    if (imageRef.current && sectionRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.15 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }

    /* Text reveal on scroll */
    if (textRef.current) {
      const elements = textRef.current.querySelectorAll('.showcase-reveal');
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: 'var(--color-espresso)',
        padding: 'var(--section-padding) 0',
      }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-square  order-2 lg:order-1">
            <img
              ref={imageRef}
              src="/images/flour-product.png"
              alt="Premium organic flour in ceramic bowl"
              className="w-full h-full object-cover will-change-transform"
            />
            {/* Image overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(30,23,16,0.2), transparent 60%)',
              }}
            />
          </div>

          {/* Text content */}
          <div
            ref={textRef}
            className="py-12 lg:py-0 lg:pl-16 xl:pl-24 order-1 lg:order-2"
          >
            <span
              className="showcase-reveal inline-block font-accent text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-wheat)' }}
            >
              Featured Product
            </span>

            <h2
              className="showcase-reveal font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8"
              style={{ color: 'var(--color-cream)' }}
            >
              Stone-Milled
              <br />
              <span className="italic" style={{ color: 'var(--color-wheat)' }}>
                Heritage Flour
              </span>
            </h2>

            <p
              className="showcase-reveal text-base lg:text-lg font-light leading-relaxed mb-10 max-w-md"
              style={{ color: 'rgba(250,247,242,0.6)' }}
            >
              Our signature blend, crafted from ancient grains and stone-milled
              using time-honored techniques. Perfect for artisan breads, pastries,
              and everything in between.
            </p>

            {/* Product details */}
            <div className="showcase-reveal flex flex-wrap gap-8 mb-10">
              {[
                { label: 'Weight', value: '2.2 lb' },
                { label: 'Protein', value: '11g/100g' },
                { label: 'Origin', value: 'Colorado' },
              ].map((detail) => (
                <div key={detail.label}>
                  <span
                    className="block text-xs font-accent tracking-[0.15em] uppercase mb-1"
                    style={{ color: 'rgba(250,247,242,0.3)' }}
                  >
                    {detail.label}
                  </span>
                  <span
                    className="block text-lg font-display font-semibold"
                    style={{ color: 'var(--color-cream)' }}
                  >
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Price & CTA */}
            <div className="showcase-reveal flex items-center gap-6">
              <div>
                <span
                  className="block text-xs font-accent tracking-[0.15em] uppercase mb-1"
                  style={{ color: 'rgba(250,247,242,0.3)' }}
                >
                  Starting at
                </span>
                <span
                  className="font-display text-3xl font-bold"
                  style={{ color: 'var(--color-wheat)' }}
                >
                  $12.99
                </span>
              </div>

              <a
                href="#contact"
                className="magnetic-btn px-9 py-4 rounded-full font-accent text-[13px] font-semibold tracking-[0.2em] uppercase no-underline transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{
                  background: 'var(--color-wheat)',
                  color: 'var(--color-espresso)',
                }}
                data-cursor="cta"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10">Order Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
