import React from 'react';
import Image from 'next/image';

/**
 * Footer component for Bonefade Barbers.
 * Clones the dark footer area containing:
 * - "Made in NYC" circular logo
 * - Physical address and phone number
 * - Social media links (Instagram, Facebook) in accent color (#aba492)
 */

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white py-[60px] md:py-[80px] flex flex-col items-center">
      <div className="container max-w-[1200px] flex flex-col items-center text-center">
        
        {/* Made in NYC Logo Section */}
        <div className="mb-8 select-none">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0f5cfe8d-df6e-4539-8eac-d761efd92321-bonefadebarbers-com/assets/images/Made-In-NYC-6.png"
            alt="Made in NYC"
            width={120}
            height={60}
            className="object-contain opacity-90"
            priority
          />
        </div>

        {/* Address and Phone Number Section */}
        <div className="mb-10">
          <p className="font-functional text-[11px] md:text-[12px] tracking-[0.1em] text-white/90 leading-relaxed uppercase">
            115 Avenue A, New York, NY, 10009 212-256-0076
          </p>
        </div>

        {/* Social Media Links Section */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/bonefade_barbers/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-functional text-[11px] md:text-[12px] tracking-[0.15em] text-[#aba492] hover:text-white transition-colors duration-300 uppercase"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/bonefadebarbers"
            target="_blank"
            rel="noopener noreferrer"
            className="font-functional text-[11px] md:text-[12px] tracking-[0.15em] text-[#aba492] hover:text-white transition-colors duration-300 uppercase"
          >
            Facebook
          </a>
        </div>
      </div>

      {/* Squarespace specific spacing at bottom if needed */}
      <div className="mt-8 opacity-0 pointer-events-none text-[10px]">
        Powered by Squarespace
      </div>
    </footer>
  );
};

export default Footer;