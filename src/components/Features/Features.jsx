import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Features — premium bento-grid layout with dark cards,
 * decorative graphics, and asymmetric grid (3 top + 2 bottom).
 */

const features = [
  {
    title: 'Artisan Quality',
    description:
      'Milled to perfection for ideal baking textures and flavors — from sourdough to pastries, crafted for professional results.',
    stat: '100+',
    statLabel: 'Recipes tested',
    // Decorative: diagonal grid lines
    graphic: (
      <svg className="absolute bottom-0 right-0 w-full h-full opacity-[0.07] pointer-events-none" viewBox="0 0 400 400" fill="none">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1={i * 40 - 80} y1="0" x2={i * 40 + 200} y2="400" stroke="currentColor" strokeWidth="1" />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="currentColor" strokeWidth="0.5" />
        ))}
      </svg>
    ),
    // Decorative golden element
    accent: (
      <svg className="absolute bottom-8 right-8 w-24 h-24 lg:w-32 lg:h-32 opacity-30" viewBox="0 0 120 120" fill="none">
        <path d="M60 10 L80 45 L110 50 L85 75 L90 110 L60 95 L30 110 L35 75 L10 50 L40 45 Z" stroke="var(--color-wheat)" strokeWidth="1.5" fill="none" />
        <path d="M60 25 L72 50 L97 53 L78 72 L82 97 L60 85 L38 97 L42 72 L23 53 L48 50 Z" stroke="var(--color-wheat)" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: '100% Gluten-Free',
    description:
      'Certified and rigorously tested in dedicated facilities — completely free of cross-contamination.',
    stat: '0g',
    statLabel: 'Gluten content',
    // Decorative: connection nodes/circuit style
    graphic: (
      <svg className="absolute bottom-0 right-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 300 300" fill="none">
        <circle cx="150" cy="150" r="60" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="150" cy="150" r="90" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="150" cy="150" r="120" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    ),
    accent: (
      <div className="absolute bottom-6 right-6 flex flex-col items-center gap-2">
        <svg className="w-16 h-16 lg:w-20 lg:h-20 opacity-40" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="20" r="4" fill="var(--color-olive-light)" />
          <circle cx="20" cy="50" r="4" fill="var(--color-olive-light)" />
          <circle cx="60" cy="50" r="4" fill="var(--color-olive-light)" />
          <circle cx="40" cy="70" r="4" fill="var(--color-wheat)" />
          <line x1="40" y1="24" x2="20" y2="46" stroke="var(--color-olive-light)" strokeWidth="1.5" />
          <line x1="40" y1="24" x2="60" y2="46" stroke="var(--color-olive-light)" strokeWidth="1.5" />
          <line x1="20" y1="54" x2="40" y2="66" stroke="var(--color-wheat)" strokeWidth="1.5" />
          <line x1="60" y1="54" x2="40" y2="66" stroke="var(--color-wheat)" strokeWidth="1.5" />
        </svg>
      </div>
    ),
  },
  {
    title: 'Rich in Nutrients',
    description:
      'Packed with essential vitamins, minerals, and natural goodness from ancient grains.',
    stat: '12+',
    statLabel: 'Vitamins & minerals',
    graphic: null,
    // Decorative: stacked cards illusion
    accent: (
      <div className="absolute bottom-4 right-4 flex gap-2">
        <div className="w-16 h-20 lg:w-20 lg:h-24 rounded-lg opacity-25" style={{ background: 'var(--color-olive)', transform: 'rotate(-6deg) translateY(4px)' }} />
        <div className="w-16 h-20 lg:w-20 lg:h-24 rounded-lg opacity-40" style={{ background: 'var(--color-olive-light)', transform: 'rotate(3deg)' }} />
        <div className="w-16 h-20 lg:w-20 lg:h-24 rounded-lg opacity-20" style={{ background: 'var(--color-wheat)', transform: 'rotate(-2deg) translateY(2px)' }} />
      </div>
    ),
  },
  {
    title: 'Modular & Versatile',
    description:
      'Choose from our range of specialty blends — almond, coconut, oat, and more. Mix and match for your perfect recipe.',
    stat: '8+',
    statLabel: 'Flour varieties',
    // Decorative: geometric shape
    graphic: (
      <svg className="absolute bottom-0 right-0 w-full h-full opacity-[0.05] pointer-events-none" viewBox="0 0 400 300" fill="none">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1={i * 60} y1="0" x2={i * 60} y2="300" stroke="currentColor" strokeWidth="0.5" />
        ))}
      </svg>
    ),
    accent: (
      <div className="absolute bottom-6 right-6">
        <svg className="w-28 h-28 lg:w-36 lg:h-36 opacity-30" viewBox="0 0 140 140" fill="none">
          <rect x="20" y="20" width="50" height="50" rx="8" stroke="var(--color-wheat)" strokeWidth="1.5" fill="var(--color-wheat)" fillOpacity="0.1" transform="rotate(-12 45 45)" />
          <rect x="50" y="40" width="50" height="50" rx="8" stroke="var(--color-olive-light)" strokeWidth="1.5" fill="var(--color-olive-light)" fillOpacity="0.15" transform="rotate(6 75 65)" />
          <rect x="35" y="60" width="50" height="50" rx="8" stroke="var(--color-wheat)" strokeWidth="1" fill="var(--color-wheat)" fillOpacity="0.08" transform="rotate(-3 60 85)" />
        </svg>
      </div>
    ),
  },
  {
    title: 'Sustainable Sourcing & Efficiency',
    description:
      'Ethically sourced from sustainable farms that care for the earth — real-time traceability, transparent supply chains, and support for local communities.',
    stat: '50+',
    statLabel: 'Partner farms',
    // Decorative: wave/chart lines
    graphic: (
      <svg className="absolute bottom-0 right-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 600 300" fill="none">
        <line x1="0" y1="150" x2="600" y2="150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="0" y1="100" x2="600" y2="100" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 6" />
        <line x1="0" y1="200" x2="600" y2="200" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 6" />
      </svg>
    ),
    accent: (
      <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8">
        <svg className="w-48 h-20 lg:w-64 lg:h-28 opacity-40" viewBox="0 0 260 80" fill="none">
          {/* Chart line 1 — olive */}
          <polyline
            points="0,60 30,55 60,40 90,45 120,25 150,30 180,15 210,20 240,10 260,12"
            stroke="var(--color-olive-light)"
            strokeWidth="2"
            fill="none"
          />
          {/* Chart line 2 — wheat */}
          <polyline
            points="0,70 30,65 60,60 90,50 120,55 150,40 180,45 210,35 240,30 260,25"
            stroke="var(--color-wheat)"
            strokeWidth="2"
            fill="none"
          />
          {/* Dots on line 1 */}
          <circle cx="120" cy="25" r="3" fill="var(--color-olive-light)" />
          <circle cx="180" cy="15" r="3" fill="var(--color-olive-light)" />
          <circle cx="260" cy="12" r="3" fill="var(--color-olive-light)" />
        </svg>
      </div>
    ),
  },
];

export default function Features() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header
      gsap.from('.features-header > *', {
        scrollTrigger: {
          trigger: '.features-header',
          start: 'top 90%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Reveal cards with stagger
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out',
      });

      // Count up stats
      cardsRef.current.forEach((card) => {
        const stat = card.querySelector('.stat-number');
        if (!stat) return;
        
        const finalVal = stat.innerText;
        const isPlus = finalVal.includes('+');
        const numVal = parseInt(finalVal);

        gsap.from(stat, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          innerText: 0,
          duration: 2,
          snap: { innerText: 1 },
          ease: 'power2.out',
          onUpdate: function() {
            stat.innerText = Math.floor(this.targets()[0].innerText) + (isPlus ? '+' : (finalVal.includes('g') ? 'g' : ''));
          }
        });
      });

      // Magnetic tilt effect
      cardsRef.current.forEach((card) => {
        const content = card.querySelector('.card-content');
        const graphic = card.querySelector('.card-graphic');

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const xPercent = (x / rect.width - 0.5) * 2; // -1 to 1
          const yPercent = (y / rect.height - 0.5) * 2; // -1 to 1

          gsap.to(card, {
            rotateY: xPercent * 5,
            rotateX: -yPercent * 5,
            duration: 0.5,
            ease: 'power2.out'
          });

          gsap.to(content, {
            x: xPercent * 10,
            y: yPercent * 10,
            duration: 0.5,
            ease: 'power2.out'
          });

          if (graphic) {
            gsap.to(graphic, {
              x: xPercent * -20,
              y: yPercent * -20,
              duration: 0.5,
              ease: 'power2.out'
            });
          }
        });

        card.addEventListener('mouseleave', () => {
          gsap.to([card, content, graphic], {
            rotateY: 0,
            rotateX: 0,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)'
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="features"
      className="relative z-10 overflow-hidden py-16 lg:py-24 px-4 sm:px-6 lg:px-10 rounded-t-[2.5rem] lg:rounded-t-[4rem] perspective-1000"
      style={{
        background: 'var(--color-cream)',
        boxShadow: '0 -20px 80px -10px rgba(0, 0, 0, 0.12)',
      }}
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="features-header text-center mb-16 lg:mb-20">
          <span
            className="inline-block font-accent text-xs tracking-[0.4em] uppercase mb-4 opacity-80"
            style={{ color: 'var(--color-olive)' }}
          >
            Why Choose Us
          </span>
          <h2
            className="font-accent text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            style={{ color: 'var(--color-bark)' }}
          >
            Why Choose{' '}
            <span style={{ color: 'var(--color-olive)' }}>PureGrain</span>?
          </h2>
          <p
            className="max-w-2xl mx-auto text-base lg:text-lg font-light leading-relaxed"
            style={{ color: 'var(--color-bark-light)' }}
          >
            Experience the finest ingredients crafted for health-conscious
            bakers, delivering{' '}
            <br className="hidden md:block" /> exceptional taste and texture
            every time.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5" data-stagger>
          {/* Row 1 — 3 cards */}
          {features.slice(0, 3).map((feature, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative rounded-2xl lg:rounded-3xl p-8 lg:p-10 min-h-[280px] lg:min-h-[320px] flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1"
              style={{
                background: 'var(--color-olive-dark)',
                border: '1px solid rgba(250, 247, 242, 0.06)',
              }}
              data-cursor="pointer"
            >
              {/* Background graphic */}
              <div className="card-graphic pointer-events-none" style={{ color: 'var(--color-cream)' }}>
                {feature.graphic}
                <div className="absolute inset-0">
                  {feature.accent}
                </div>
              </div>

              {/* Text content */}
              <div className="card-content relative z-10 flex flex-col h-full pointer-events-none">
                <h3
                  className="font-accent text-xl lg:text-2xl font-bold mb-3 leading-snug"
                  style={{ color: 'var(--color-cream)' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm lg:text-[15px] leading-relaxed max-w-[280px]"
                  style={{ color: 'rgba(250, 247, 242, 0.6)' }}
                >
                  {feature.description}
                </p>

                {/* Stat at bottom */}
                <div className="mt-auto pt-6">
                  <span
                    className="stat-number font-accent text-2xl lg:text-3xl font-bold"
                    style={{ color: 'var(--color-wheat)' }}
                  >
                    {feature.stat}
                  </span>
                  <span
                    className="block text-xs font-accent tracking-wider uppercase mt-1"
                    style={{ color: 'rgba(250, 247, 242, 0.4)' }}
                  >
                    {feature.statLabel}
                  </span>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(91, 107, 74, 0.08), transparent 60%)',
                }}
              />
            </div>
          ))}

          {/* Row 2 — 2 cards spanning full width */}
          {features.slice(3).map((feature, i) => (
            <div
              key={i + 3}
              ref={(el) => (cardsRef.current[i + 3] = el)}
              className={`group relative rounded-2xl lg:rounded-3xl p-8 lg:p-10 min-h-[260px] lg:min-h-[300px] flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                i === 0 ? 'md:col-span-1 lg:col-span-1' : 'md:col-span-1 lg:col-span-2'
              }`}
              style={{
                background: 'var(--color-olive-dark)',
                border: '1px solid rgba(250, 247, 242, 0.06)',
              }}
              data-cursor="pointer"
            >
              {/* Background graphic */}
              <div className="card-graphic pointer-events-none" style={{ color: 'var(--color-cream)' }}>
                {feature.graphic}
                <div className="absolute inset-0">
                  {feature.accent}
                </div>
              </div>

              {/* Text content */}
              <div className="card-content relative z-10 flex flex-col h-full pointer-events-none">
                <h3
                  className="font-accent text-xl lg:text-2xl font-bold mb-3 leading-snug"
                  style={{ color: 'var(--color-cream)' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm lg:text-[15px] leading-relaxed max-w-[340px]"
                  style={{ color: 'rgba(250, 247, 242, 0.6)' }}
                >
                  {feature.description}
                </p>

                {/* Stat at bottom */}
                <div className="mt-auto pt-6">
                  <span
                    className="stat-number font-accent text-2xl lg:text-3xl font-bold"
                    style={{ color: 'var(--color-wheat)' }}
                  >
                    {feature.stat}
                  </span>
                  <span
                    className="block text-xs font-accent tracking-wider uppercase mt-1"
                    style={{ color: 'rgba(250, 247, 242, 0.4)' }}
                  >
                    {feature.statLabel}
                  </span>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(91, 107, 74, 0.08), transparent 60%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
