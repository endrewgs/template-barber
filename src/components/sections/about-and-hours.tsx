import React from 'react';

/**
 * AboutAndHours section component.
 * 
 * This component implements a dual-column layout:
 * - Left column: Lifestyle copy and mission statement.
 * - Right column: Operating hours, address, and a "BOOK ONLINE" button.
 * 
 * Styled specifically for a dark theme with a slate grey background (#5a6368).
 */
const AboutAndHours: React.FC = () => {
  return (
    <section 
      className="bg-[#5a6368] py-[100px] md:py-[150px] px-8 overflow-hidden"
      id="about-and-hours"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-10">
        
        {/* Left Column: About/Lifestyle Content */}
        <div className="md:col-span-7 flex flex-col items-start text-white">
          <div className="mb-4">
            <h3 className="font-functional text-[#777777] text-[11px] leading-tight tracking-[0.2em] mb-1">
              IT'S NOT JUST A CUT.
            </h3>
            <h2 className="font-serif italic text-[32px] md:text-[38px] leading-tight">
              It's a lifestyle.
            </h2>
          </div>

          <div className="space-y-6 md:pr-10">
            <p className="font-serif text-[16px] md:text-[17px] leading-[1.7] font-light opacity-90">
              We're here for the stylish young professional that needs to receive a higher quality product; 
              the type of customized cut to not only fit, but accentuate a lifestyle.
            </p>
            <p className="font-serif text-[16px] md:text-[17px] leading-[1.7] font-light opacity-90">
              It is with that philosophy in mind that Bonefade Barbers was born. 
              A shop dedicated to offering only the finest cuts for its distinguished clientele; 
              the type of shop where someone comes in knowing and receives exactly what they want 
              with methodical precision.
            </p>
            <p className="font-serif text-[16px] md:text-[17px] leading-[1.7] font-light opacity-90">
              Precision, customization and true quality are what make Bonefade Barbers different than the rest.
            </p>
          </div>
        </div>

        {/* Right Column: Schedule & Info */}
        <div className="md:col-span-4 md:col-start-9 flex flex-col items-start md:items-start text-white">
          <div className="mb-6 w-full">
            <h3 className="font-functional text-[#aba492] text-[11px] leading-tight tracking-[0.2em] mb-5">
              SCHEDULE AN APPOINTMENT
            </h3>
            
            <div className="font-serif leading-[1.6] space-y-1 text-[16px] mb-8">
              <div className="flex">
                <span className="font-bold mr-2">Weekdays:</span>
                <span className="italic opacity-90">9am–8pm</span>
              </div>
              <div className="flex">
                <span className="font-bold mr-2">Weekends:</span>
                <span className="italic opacity-90">10am–7pm</span>
              </div>
            </div>

            <div className="font-serif leading-[1.6] space-y-1 text-[16px] opacity-90 mb-10">
              <p>115 Avenue A</p>
              <p>New York, NY 10009</p>
              <p>212-256-0076</p>
            </div>

            <a 
              href="/schedule-appointment" 
              className="inline-block bg-white text-[#111111] font-functional text-[11px] font-bold py-4 px-10 border border-white hover:bg-transparent hover:text-white transition-all duration-300 ease-in-out"
            >
              BOOK ONLINE
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutAndHours;