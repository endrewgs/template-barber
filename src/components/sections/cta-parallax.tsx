import React from 'react';

/**
 * CtaParallax Component
 * 
 * A pixel-perfect clone of the secondary parallax section containing:
 * - A "Schedule an Appointment" headline in italic serif/script style.
 * - A white "BOOK ONLINE" button.
 * - A dark lifestyle background image with a parallax effect.
 * 
 * Theme: Dark
 * Font Families: EB Garamond (Serif), Montserrat (Sans)
 */
const CtaParallax: React.FC = () => {
  // Asset provided in the prompt
  const backgroundImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0f5cfe8d-df6e-4539-8eac-d761efd92321-bonefadebarbers-com/assets/images/SQS_DK_carlos_0303-copy-3.jpg";

  return (
    <section 
      className="relative w-full overflow-hidden" 
      style={{ minHeight: '400px' }}
    >
      {/* Parallax Background Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed',
          zIndex: 0
        }}
      />
      
      {/* Overlay to ensure text readability and dark theme consistency */}
      <div 
        className="absolute inset-0 bg-black/40" 
        style={{ zIndex: 1 }} 
      />

      {/* Content Container */}
      <div 
        className="relative flex flex-col items-center justify-center text-center px-4 py-32 sm:py-48"
        style={{ zIndex: 2 }}
      >
        {/* Headline: "Schedule an Appointment" */}
        <h2 
          className="text-white italic mb-10"
          style={{ 
            fontFamily: '"EB Garamond", serif',
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 400,
            lineHeight: '1.2',
            letterSpacing: '0.02e'
          }}
        >
          Schedule an Appointment
        </h2>

        {/* Call to Action: BOOK ONLINE */}
        <a
          href="/schedule-appointment"
          className="bg-white text-[#111111] hover:bg-transparent hover:text-white transition-all duration-300 border border-white"
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            padding: '1.2rem 2.8rem',
            display: 'inline-block',
            cursor: 'pointer'
          }}
        >
          Book Online
        </a>
      </div>
    </section>
  );
};

export default CtaParallax;