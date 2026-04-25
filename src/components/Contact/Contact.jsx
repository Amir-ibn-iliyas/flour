import { useRef, useState } from 'react';

/**
 * Contact — split layout with contact info and premium form.
 * Includes interactive input focus states and form validation.
 */
export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focused, setFocused] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Address',
      value: '123 Grain Valley Road\nBoulder, CO 80301',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: 'Phone',
      value: '+1 (555) 987-6543',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'Email',
      value: 'hello@puregrain.com',
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden p-10"
      style={{
        // padding: 'var(--section-padding) 0',
        background: 'var(--color-cream)',
      }}
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-8">
          <span
            className="reveal-up inline-block font-accent text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-olive)' }}
          >
            Get in Touch
          </span>
          <h2
            className="reveal-up font-accent text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: 'var(--color-bark)' }}
          >
            Let&apos;s Start a{' '}
            <span className="italic" style={{ color: 'var(--color-olive)' }}>
              Conversation
            </span>
          </h2>
          <p
            className="reveal-up max-w-lg text-base font-light leading-relaxed"
            style={{ color: 'var(--color-bark-light)' }}
          >
            Have questions about our flours or wholesale inquiries? We&apos;d love
            to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8 reveal-left">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="flex items-start gap-4 group"
                data-cursor="pointer"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: 'rgba(91,107,74,0.08)',
                    color: 'var(--color-olive)',
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <span
                    className="block text-xs font-accent tracking-[0.15em] uppercase mb-1"
                    style={{ color: 'var(--color-bark-light)' }}
                  >
                    {info.label}
                  </span>
                  <span
                    className="block text-sm font-medium whitespace-pre-line"
                    style={{ color: 'var(--color-bark)' }}
                  >
                    {info.value}
                  </span>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="pt-6" style={{ borderTop: '1px solid var(--color-sand)' }}>
              <span
                className="block text-xs font-accent tracking-[0.15em] uppercase mb-4"
                style={{ color: 'var(--color-bark-light)' }}
              >
                Follow Us
              </span>
              <div className="flex gap-3">
                {['Instagram', 'Twitter', 'Pinterest'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-4 py-2 rounded-full text-xs font-accent tracking-wider uppercase no-underline transition-all duration-300 hover:scale-105"
                    style={{
                      border: '1px solid var(--color-sand)',
                      color: 'var(--color-olive)',
                      background: 'var(--color-white)',
                    }}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 reveal-right">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 lg:p-8"
              style={{
                background: 'var(--color-white)',
                border: '1px solid rgba(196, 169, 106, 0.2)',
                boxShadow: '0 20px 60px -15px rgba(0,0,0,0.08)',
              }}
            >
              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-accent tracking-[0.15em] uppercase mb-2 transition-colors duration-300"
                  style={{
                    color: focused === 'name' ? 'var(--color-olive)' : 'var(--color-bark-light)',
                  }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                  placeholder="Jane Doe"
                  className="w-full px-0 py-3 bg-transparent text-sm font-light outline-none transition-all duration-300"
                  style={{
                    borderBottom: `1.5px solid ${focused === 'name' ? 'var(--color-olive)' : 'var(--color-sand)'}`,
                    color: 'var(--color-bark)',
                  }}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-accent tracking-[0.15em] uppercase mb-2 transition-colors duration-300"
                  style={{
                    color: focused === 'email' ? 'var(--color-olive)' : 'var(--color-bark-light)',
                  }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                  placeholder="jane@example.com"
                  className="w-full px-0 py-3 bg-transparent text-sm font-light outline-none transition-all duration-300"
                  style={{
                    borderBottom: `1.5px solid ${focused === 'email' ? 'var(--color-olive)' : 'var(--color-sand)'}`,
                    color: 'var(--color-bark)',
                  }}
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-accent tracking-[0.15em] uppercase mb-2 transition-colors duration-300"
                  style={{
                    color: focused === 'message' ? 'var(--color-olive)' : 'var(--color-bark-light)',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent text-sm font-light outline-none resize-none transition-all duration-300"
                  style={{
                    borderBottom: `1.5px solid ${focused === 'message' ? 'var(--color-olive)' : 'var(--color-sand)'}`,
                    color: 'var(--color-bark)',
                  }}
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="magnetic-btn w-full py-4 rounded-full font-accent text-sm tracking-widest uppercase transition-all duration-500 hover:shadow-lg"
                style={{
                  background: submitted ? 'var(--color-wheat)' : 'var(--color-olive)',
                  color: submitted ? 'var(--color-espresso)' : 'var(--color-cream)',
                }}
                data-cursor="cta"
              >
                <span className="relative z-10">
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
