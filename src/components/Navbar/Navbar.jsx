import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * Navbar — modern floating navigation with glassmorphism,
 * scroll-direction visibility, and rounded rectangle styling.
 */
export default function Navbar() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navLinksRef = useRef([]);
  const lastScrollY = useRef(0);

  const navItems = [
    { label: 'Shop', href: '#shop' },
    { label: 'Our Story', href: '#about' },
    { label: 'Recipes', href: '#recipes' },
    { label: 'Contact', href: '#contact' },
  ];

  /* Scroll detection for hide/show */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 20);
      
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY.current && !menuOpen) {
          // Scrolling down
          setHidden(true);
        } else {
          // Scrolling up
          setHidden(false);
        }
      } else {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  /* Reveal navbar after preloader */
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 3.5,
      clearProps: 'all', // remove inline styles after animation so Tailwind takes over
    });
  }, []);

  /* Mobile menu animation */
  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        clipPath: 'circle(150% at 95% 5%)',
        duration: 0.8,
        ease: 'power3.inOut',
      });
      gsap.fromTo(
        navLinksRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out', delay: 0.3 }
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: 'circle(0% at 95% 5%)',
        duration: 0.6,
        ease: 'power3.inOut',
      });
    }
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-4 lg:top-6 left-4 bg-white/80 right-4 mx-auto max-w-[1260px] z-[100] transition-all duration-500 ease-in-out rounded-2xl border px-6 lg:px-8 ${
          hidden ? '-translate-y-[150%] opacity-0' : 'translate-y-0 opacity-100'
        }`}
        style={{
          background: 'rgba(250, 247, 242, 0.85)',
          backdropFilter: 'blur(16px) saturate(1.2)',
          WebkitBackdropFilter: 'blur(16px) saturate(1.2)',
          borderColor: 'rgba(58, 46, 34, 0.08)',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.08)',
        }}
        id="navbar"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 no-underline shrink-0"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            <div className="flex items-center justify-center shrink-0" style={{ color: 'var(--color-olive-dark)' }}>
              {/* Star / Flower Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 2 13 8 16 10C19 12 24 12 24 12C24 12 18 13 16 16C14 19 12 24 12 24C12 24 11 18 8 16C5 14 0 12 0 12C0 12 6 11 8 8C10 5 12 2 12 2Z" />
              </svg>
            </div>
            <span
              className="font-display text-lg lg:text-xl font-bold tracking-wider uppercase transition-colors duration-300"
              style={{ color: 'var(--color-bark)' }}
            >
              PureGrain
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-[14px] xl:text-[15px] font-accent tracking-wide font-medium no-underline transition-colors duration-300 group"
                style={{ color: 'var(--color-bark)' }}
              >
                {item.label}
                <span
                  className="absolute -bottom-1.5 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: 'var(--color-olive)' }}
                />
              </a>
            ))}

            {/* CTA */}
            <a
              href="#shop"
              onClick={(e) => handleNavClick(e, '#shop')}
              className="magnetic-btn shrink-0 whitespace-nowrap px-7 py-2.5 rounded-lg text-[14px] font-accent font-semibold no-underline transition-all duration-300 hover:shadow-lg"
              style={{
                background: 'var(--color-olive-dark)',
                color: 'var(--color-cream)',
              }}
            >
              <span className="relative z-10">Shop Now</span>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-[1.5px] transition-all duration-300"
              style={{
                background: 'var(--color-bark)',
                transform: menuOpen ? 'rotate(45deg) translateY(4.5px)' : 'none',
              }}
            />
            <span
              className="block w-6 h-[1.5px] transition-all duration-300"
              style={{
                background: 'var(--color-bark)',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-[1.5px] transition-all duration-300"
              style={{
                background: 'var(--color-bark)',
                transform: menuOpen ? 'rotate(-45deg) translateY(-4.5px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8 lg:hidden"
        style={{
          background: 'var(--color-olive)',
          clipPath: 'circle(0% at 95% 5%)',
        }}
      >
        {navItems.map((item, i) => (
          <a
            key={item.label}
            ref={(el) => (navLinksRef.current[i] = el)}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="font-display text-4xl font-light tracking-wider no-underline"
            style={{ color: 'var(--color-cream)' }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
