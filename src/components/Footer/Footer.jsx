/**
 * Footer — minimal, elegant footer with logo, links, and copyright.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Products',
      links: ['All-Purpose Flour', 'Bread Flour', 'Pastry Flour', 'Cake Flour'],
    },
    {
      title: 'Company',
      links: ['Our Story', 'Sustainability', 'Press', 'Careers'],
    },
    {
      title: 'Support',
      links: ['FAQ', 'Shipping', 'Returns', 'Contact'],
    },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'var(--color-olive)',
        padding: 'clamp(60px, 8vw, 100px) 0 0',
      }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'var(--color-olive)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-cream)" strokeWidth="2">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                  <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
                </svg>
              </div>
              <span
                className="font-accent text-sm tracking-[0.25em] font-semibold uppercase"
                style={{ color: 'var(--color-cream)' }}
              >
                PureGrain
              </span>
            </div>
            <p
              className="max-w-sm text-sm font-light leading-relaxed mb-8"
              style={{ color: 'rgba(250,247,242,0.5)' }}
            >
              Premium organic, gluten-free flour for the modern baker.
              Milled with care, crafted for perfection, delivered to your door.
            </p>

            {/* Newsletter */}
            <div>
              <span
                className="block text-xs font-accent tracking-[0.15em] uppercase mb-3"
                style={{ color: 'rgba(250,247,242,0.4)' }}
              >
                Stay Updated
              </span>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-full text-sm bg-transparent outline-none"
                  style={{
                    border: '1px solid rgba(250,247,242,0.15)',
                    color: 'var(--color-cream)',
                  }}
                  id="newsletter-email"
                />
                <button
                  className="px-6 py-3 rounded-full font-accent text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'var(--color-wheat)',
                    color: 'var(--color-espresso)',
                  }}
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4
                className="font-accent text-xs tracking-[0.2em] uppercase mb-6"
                style={{ color: 'rgba(250,247,242,0.4)' }}
              >
                {group.title}
              </h4>
              <ul className="space-y-3 list-none">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light no-underline transition-all duration-300 hover:tracking-wider"
                      style={{ color: 'rgba(250,247,242,0.6)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--color-wheat)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(250,247,242,0.6)';
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between py-8 gap-4"
          style={{ borderTop: '1px solid rgba(250,247,242,0.08)' }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: 'var(--color-olive)' }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-cream)" strokeWidth="2">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
            </div>
            <span
              className="font-accent text-xs tracking-[0.15em] uppercase"
              style={{ color: 'rgba(250,247,242,0.3)' }}
            >
              PureGrain
            </span>
          </div>

          <span
            className="text-xs font-light"
            style={{ color: 'rgba(250,247,242,0.3)' }}
          >
            © {currentYear} PureGrain. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
