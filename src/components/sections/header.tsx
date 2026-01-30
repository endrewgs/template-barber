"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Schedule Appointment', href: '/schedule-appointment' },
    { label: 'Services', href: '/services' },
    { label: 'Limo Service', href: '/limo' },
    { label: 'Products', href: '/products' },
    { label: 'Gallery', href: '/gallery-1' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#5a6368]/95' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 h-[100px] flex items-center justify-between">
        {/* Left Side: Cart & Logo Container */}
        <div className="flex items-center gap-10">
          {/* Cart Indicator */}
          <a 
            href="/cart" 
            className="group flex items-center gap-2 font-functional text-[11px] tracking-[0.15em] text-white hover:text-[#aba492] transition-colors"
          >
            <span>CART (0)</span>
          </a>

          {/* Logo */}
          <a href="/" className="relative block w-[180px] h-[60px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0f5cfe8d-df6e-4539-8eac-d761efd92321-bonefadebarbers-com/assets/images/Logo_Transparent_Blue-1.png"
              alt="Bonefade Barbers"
              fill
              className="object-contain"
              priority
            />
          </a>
        </div>

        {/* Right Side: Navigation */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="relative z-10 font-functional text-[11px] tracking-[0.15em] text-white transition-colors duration-300 group-hover:text-white/80 py-2 px-1 block"
                >
                  {item.label}
                  {/* Spotlight Effect Underline */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#aba492] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Icon (Placeholder for functionality) */}
        <button 
          className="lg:hidden p-2 text-white"
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Tweak-specific CSS-like spotlight hover logic for primary-nav-hover-style-spotlight */}
      <style jsx global>{`
        .Header-nav-item:hover {
          color: #ffffff;
          opacity: 1;
        }
        /* Implementation of the 'spotlight' feel via CSS transitions */
        nav ul:hover li:not(:hover) {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
      `}</style>
    </header>
  );
};

export default Header;