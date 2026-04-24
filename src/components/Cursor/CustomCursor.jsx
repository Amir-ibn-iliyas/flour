/**
 * CustomCursor — a premium dual-ring cursor that reacts to
 * interactive elements throughout the page.
 */
export default function CustomCursor({ cursorRef, cursorDotRef, cursorTextRef }) {
  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: '1.5px solid var(--color-cream)',
          transform: 'translate(-10%, -10%)',
          willChange: 'transform',
        }}
      >
        {/* CTA text that appears on hover */}
        <span
          ref={cursorTextRef}
          className="absolute inset-0 flex items-center justify-center font-accent text-[5px] tracking-widest uppercase opacity-0 scale-1"
          style={{ color: 'var(--color-cream)' }}
        >
          View
        </span>
      </div>

      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-cream)',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
    </>
  );
}
