import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * About — split layout with parallax image and storytelling text.
 * Horizontally scrolling stats band on larger screens.
 */
export default function About() {
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    /* Parallax for about image */
    if (imageRef.current && imageWrapRef.current) {
      gsap.to(imageRef.current, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: imageWrapRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    /* Stats counter animation */
    if (statsRef.current) {
      const counters = statsRef.current.querySelectorAll('[data-count]');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-count'), 10);
        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: counter,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden p-10"
      style={{
        // padding: 'var(--section-padding) 0',
        background: 'var(--color-cream-dark)',
      }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="reveal-left">
            <div
              ref={imageWrapRef}
              className="relative rounded-3xl overflow-hidden aspect-[4/5]"
              style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
            >
              <img
                ref={imageRef}
                src="/images/wheat-field.png"
                alt="Golden wheat field at sunset"
                className="w-full h-[120%] object-cover"
              />
              {/* Floating badge */}
              <div
                className="absolute bottom-6 left-6 px-5 py-3 rounded-xl backdrop-blur-md"
                style={{
                  background: 'rgba(250,247,242,0.85)',
                  border: '1px solid rgba(196,169,106,0.2)',
                }}
              >
                <span className="font-accent text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--color-olive)' }}>
                  Est. 2019 · Boulder, CO
                </span>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="reveal-right">
            <span
              className="inline-block font-accent text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--color-olive)' }}
            >
              Our Story
            </span>

            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8"
              style={{ color: 'var(--color-bark)' }}
            >
              From Field to
              <br />
              <span className="italic" style={{ color: 'var(--color-olive)' }}>
                Your Kitchen
              </span>
            </h2>

            <div className="space-y-5 mb-10">
              <p
                className="text-base lg:text-lg font-light leading-relaxed"
                style={{ color: 'var(--color-bark-light)' }}
              >
                At PureGrain, we believe everyone deserves access to exceptional
                baking ingredients — regardless of dietary needs. Our journey began
                with a simple question: why should gluten-free flour mean
                compromising on taste?
              </p>
              <p
                className="text-base lg:text-lg font-light leading-relaxed"
                style={{ color: 'var(--color-bark-light)' }}
              >
                Today, we partner with over 50 sustainable farms to bring you
                premium organic flour that makes every recipe extraordinary.
                Each batch is stone-milled and rigorously tested to ensure
                the perfect blend of nutrition and flavor.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-wrap gap-3 mb-10">
              {['Organic', 'Non-GMO', 'Vegan', 'Stone-Milled'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-xs font-accent tracking-wider uppercase"
                  style={{
                    border: '1px solid var(--color-sand)',
                    color: 'var(--color-olive)',
                    background: 'var(--color-white)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="magnetic-btn inline-flex items-center gap-3 px-9 py-4 rounded-full font-accent text-[13px] font-semibold tracking-[0.2em] uppercase no-underline transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1"
              style={{
                background: 'var(--color-olive)',
                color: 'var(--color-cream)',
              }}
              data-cursor="cta"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Learn More</span>
              <svg className="relative z-10 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats band */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 lg:mt-8 pt-12 lg:pt-4"
          style={{ borderTop: '1px solid var(--color-sand)' }}
          data-stagger
        >
          {[
            { value: 50, suffix: '+', label: 'Partner Farms' },
            { value: 100, suffix: 'K+', label: 'Happy Bakers' },
            { value: 25, suffix: '+', label: 'Flour Varieties' },
            { value: 99, suffix: '%', label: 'Satisfaction Rate' },
          ].map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="font-display text-4xl lg:text-5xl font-bold mb-2" style={{ color: 'var(--color-olive)' }}>
                <span data-count={stat.value}>{stat.value}</span>
                <span>{stat.suffix}</span>
              </div>
              <span className="font-accent text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--color-bark-light)' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
