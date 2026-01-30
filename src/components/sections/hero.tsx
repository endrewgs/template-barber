import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section 
      id="introduction" 
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0f5cfe8d-df6e-4539-8eac-d761efd92321-bonefadebarbers-com/assets/images/SQS_DK_carlos_0226-e-2.jpg')`,
            backgroundColor: '#5a6368'
          }}
        />
        {/* Overlay for readability if needed, though design looks clean */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] px-8 pt-[120px] pb-[100px] flex flex-col items-center">
        
        {/* Top Decorative Line */}
        <div className="w-full max-w-[800px] h-[1px] bg-[#777777]/60 mb-12 sm:mb-20" />

        {/* Branding Assembly */}
        <div className="flex flex-col items-center text-center">
          
          {/* E.V. NYC Text and Skull Emblem */}
          <div className="flex items-center justify-center gap-6 sm:gap-16 mb-2">
            <span className="font-functional text-white text-[14px] sm:text-[18px] tracking-[0.4em]">E.V.</span>
            
            <div className="relative w-[80px] h-[80px] sm:w-[134px] sm:h-[134px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0f5cfe8d-df6e-4539-8eac-d761efd92321-bonefadebarbers-com/assets/images/image-asset-4.png"
                alt="Bonefade Barbers Skull"
                fill
                className="object-contain"
                priority
              />
            </div>

            <span className="font-functional text-white text-[14px] sm:text-[18px] tracking-[0.4em]">NYC</span>
          </div>

          {/* Large Script Bonefade Text */}
          <div className="mt-[-10px] sm:mt-[-20px] mb-4">
            <h1 className="font-script text-white text-[80px] md:text-[140px] lg:text-[180px] leading-[0.8] drop-shadow-lg select-none">
              Bonefade
            </h1>
          </div>

          {/* BARBERS Text */}
          <div className="mb-12 sm:mb-16">
            <h2 className="font-functional text-white text-[24px] md:text-[44px] tracking-[0.3em] font-normal italic">
              BARBERS
            </h2>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="w-full max-w-[800px] h-[1px] bg-[#777777]/60 mb-12 sm:mb-16" />

        {/* Call to Action Button */}
        <div className="mt-4">
          <a 
            href="/schedule-appointment"
            className="btn-primary min-w-[240px] text-center"
          >
            SCHEDULE AN APPOINTMENT
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 group cursor-pointer animate-bounce">
          <span className="font-functional text-[9px] tracking-[0.2em] text-white/70">SCROLL</span>
          <div className="w-[1px] h-12 bg-white/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;