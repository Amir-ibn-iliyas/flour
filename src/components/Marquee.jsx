/**
 * Marquee — horizontal infinite scrolling text band,
 * used as a visual divider between sections.
 */
export default function Marquee() {
  const items = [
    'Artisan Quality',
    '✦',
    '100% Gluten-Free',
    '✦',
    'Organic Certified',
    '✦',
    'Sustainably Sourced',
    '✦',
    'Crafted with Care',
    '✦',
    'Premium Flour',
    '✦',
  ];

  return (
    <div
      className="py-6 lg:py-8 overflow-hidden"
      style={{ background: 'var(--color-olive)' }}
    >
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-accent text-sm lg:text-base tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-cream)', opacity: item === '✦' ? 0.4 : 0.8 }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
