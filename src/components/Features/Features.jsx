import { useRef } from 'react';

/**
 * Features — premium card grid showcasing product qualities.
 * Each card has a subtle hover lift and icon animation.
 */

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Artisan Quality',
    description: 'Milled to perfection for ideal baking textures and flavors, mimicking traditional wheat flours with exceptional results.',
    stat: '100+',
    statLabel: 'Recipes tested',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: '100% Gluten-Free',
    description: 'Certified and rigorously tested in dedicated facilities to be completely free of cross-contamination.',
    stat: '0g',
    statLabel: 'Gluten content',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Rich in Nutrients',
    description: 'Packed with essential vitamins, minerals, and natural goodness from ancient grains and superfoods.',
    stat: '12+',
    statLabel: 'Vitamins & minerals',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Sustainable Sourcing',
    description: 'Ethically sourced from sustainable farms that care for the earth and support local communities.',
    stat: '50+',
    statLabel: 'Partner farms',
  },
];

export default function Features() {
  const cardsRef = useRef([]);

  return (
    <section
      id="features"
      className="relative overflow-hidden p-10"
      style={{
        // padding: 'var(--section-padding) 0',
        background: 'var(--color-cream)',
      }}
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-8 lg:mb-4">
          <span
            className="reveal-up inline-block font-accent text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-olive)' }}
          >
            Why Choose Us
          </span>
          <h2
            className="reveal-up font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
            style={{ color: 'var(--color-bark)' }}
          >
            Why Choose{' '}
            <span style={{ color: 'var(--color-olive)' }}>PureGrain</span>?
          </h2>
          <p
            className="reveal-up max-w-2xl mx-auto text-base lg:text-lg font-light leading-relaxed"
            style={{ color: 'var(--color-bark-light)' }}
          >
            Experience the finest ingredients crafted for health-conscious
            bakers, delivering <br className="hidden md:block" /> exceptional taste and texture every time.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" data-stagger>
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative rounded-2xl p-8 lg:p-10 h-full flex flex-col transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'var(--color-white)',
                border: '1px solid rgba(196, 169, 106, 0.2)',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)',
              }}
              data-cursor="pointer"
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(91,107,74,0.03), rgba(196,169,106,0.06))',
                }}
              />

              {/* Icon */}
              <div
                className="relative w-14 h-14 rounded-full flex items-center justify-center shrink-0 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: 'rgba(91,107,74,0.08)',
                  color: 'var(--color-olive)',
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                className="relative font-display text-xl font-semibold mb-3"
                style={{ color: 'var(--color-bark)' }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="relative text-sm leading-relaxed mb-6"
                style={{ color: 'var(--color-bark-light)' }}
              >
                {feature.description}
              </p>

              {/* Stat */}
              <div className="relative pt-4 mt-auto" style={{ borderTop: '1px solid var(--color-sand)' }}>
                <span
                  className="font-display text-2xl font-bold"
                  style={{ color: 'var(--color-olive)' }}
                >
                  {feature.stat}
                </span>
                <span
                  className="block text-xs font-accent tracking-wider uppercase mt-1"
                  style={{ color: 'var(--color-bark-light)' }}
                >
                  {feature.statLabel}
                </span>
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'var(--color-wheat)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
