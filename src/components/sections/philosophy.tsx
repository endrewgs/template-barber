import React from 'react';

/**
 * Philosophy Component
 * 
 * A split-layout content section with a dark grey background.
 * Left side: Shop philosophy description.
 * Right side: Scheduling information and booking button.
 * 
 * Design Details:
 * - Background: #5a6368 (Slate Grey)
 * - Typography: Playfair Display (Italic) for headings, Barlow Condensed for uppercase labels
 * - Button: Knockout style (White background, grey text, transitions to outline on hover)
 */
const PhilosophySection: React.FC = () => {
  return (
    <section 
      id="philosophy"
      className="bg-[#5a6368] py-[100px] px-8 md:px-0"
    >
      <div className="container max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-[40px]">
          
          {/* Left Column: Philosophy Description */}
          <div className="md:col-span-7 lg:col-span-6">
            <h3 className="font-heading-sans text-[14px] font-bold text-white mb-2 tracking-[0.1em] uppercase">
              IT&apos;S NOT JUST A CUT.
            </h3>
            <h2 className="font-serif italic text-white text-[32px] md:text-[36px] mb-8 leading-tight">
              It&apos;s a lifestyle.
            </h2>
            
            <div className="space-y-6">
              <p className="font-serif text-[#e5e5e5] text-[18px] leading-[1.6] mb-5">
                We&apos;re here for the stylish young professional that needs to receive a higher quality product; 
                the type of customized cut to not only fit, but accentuate a lifestyle.
              </p>
              <p className="font-serif text-[#e5e5e5] text-[18px] leading-[1.6] mb-5">
                It is with that philosophy in mind that Bonefade Barbers was born. A shop dedicated to offering 
                only the finest cuts for its distinguished clientele; the type of shop where someone comes in 
                knowing and receives exactly what they want with methodical precision.
              </p>
              <p className="font-serif text-[#e5e5e5] text-[18px] leading-[1.6]">
                Precision, customization and true quality are what make Bonefade Barbers different than the rest.
              </p>
            </div>
          </div>

          {/* Spacer Column for Desktop Layout */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Right Column: Appointment Info */}
          <div className="md:col-span-5 lg:col-span-4">
            <h3 className="font-heading-sans text-[14px] font-bold text-white mb-6 tracking-[0.1em] uppercase">
              Schedule AN Appointment
            </h3>
            
            <div className="mb-10">
              <div className="text-[#e5e5e5] font-serif text-[18px] leading-relaxed mb-4">
                <div className="flex justify-start">
                  <span className="font-bold text-white mr-1 italic">Weekdays:</span> 
                  <span className="italic">9am–8pm</span>
                </div>
                <div className="flex justify-start">
                  <span className="font-bold text-white mr-1 italic">Weekends:</span> 
                  <span className="italic">10am–7pm</span>
                </div>
              </div>

              <address className="not-italic text-[#e5e5e5] font-serif text-[18px] leading-relaxed">
                115 Avenue A<br />
                New York, NY 10009<br />
                212-256-0076
              </address>
            </div>

            <div className="mt-8">
              <a 
                href="/schedule-appointment" 
                className="btn-knockout bg-white text-[#5a6368] border border-white px-8 py-3 font-heading-sans text-[13px] font-bold tracking-[0.05em] uppercase transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                BOOK ONLINE
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;