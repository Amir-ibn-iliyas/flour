import { useState, useCallback } from 'react';

/* Components */
import Preloader from './components/Preloader';
import CustomCursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Showcase from './components/Showcase';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* Hooks */
import { useCustomCursor } from './hooks/useCustomCursor';
import { useScrollAnimations } from './hooks/useScrollAnimations';

/**
 * App — root component. Orchestrates preloader → main content
 * transition and initialises global animations.
 */
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { cursorRef, cursorDotRef, cursorTextRef } = useCustomCursor();

  /* Scroll-based reveal animations fire once preloader completes */
  useScrollAnimations(isLoaded);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor
        cursorRef={cursorRef}
        cursorDotRef={cursorDotRef}
        cursorTextRef={cursorTextRef}
      />

      {/* Film grain overlay */}
      <div className="grain-overlay" />

      {/* Preloader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Main Site */}
      <main>
        <Navbar />
        {/* Hero + Marquee: pinned behind while Features slides over.
            top-[-100px] allows the hero to scroll up to reveal the marquee before sticking. */}
        <div className="sticky top-[-100px] z-0">
          <Hero />
          <Marquee />
        </div>
        <Features />
        {/* <Showcase /> */}
        {/* <About /> */}
        <div className="relative z-10" style={{ background: 'var(--color-cream)' }}>
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
