import React, { useState } from 'react';
import { NavTab } from '../types';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onBookClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0d1c32] text-white shadow-[0_12px_32px_-4px_rgba(10,25,47,0.18)]">
      {/* Top Institutional Notification Strip */}
      <div className="hidden lg:block border-b border-[#c5c6cd]/20 bg-[#0d1c32]/95 py-1.5 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-legal-subtext text-[#76849f]">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[#e9c176]">
              <span className="material-symbols-outlined text-[14px]">gavel</span>
              Bar Council Enrolment: D/1984/2004
            </span>
            <span className="text-[#c5c6cd]/40">|</span>
            <span>High Court of Judicature & Supreme Court Practice</span>
          </div>
          <div className="flex items-center gap-5">
            <span>Chamber Hours: Mon - Sat: 09:30 AM - 08:00 PM IST</span>
            <span className="text-[#c5c6cd]/40">|</span>
            <a
              href="tel:+919810244920"
              className="flex items-center gap-1.5 text-white font-semibold hover:text-[#ffdea5] transition-colors"
            >
              <span className="material-symbols-outlined text-[15px] text-[#e9c176]">call</span>
              Urgent Briefs: +91 98102 44920
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between">
        {/* Brand Logo & Senior Title */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => handleNav('about')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <img
              alt="Advocate Deepak Goyal Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1VDYe2SRk_UdKV9bYLwEISDLrVH5JDYB1dcmr69oQnLzVO0Wb0rhD_RiHKEEESMFDcQjPSqFtXNz0a-28ddu2hUCGANv4zguTbeSts7rzOUstqWERHayc7Zv96wm2l0BWi83_m6NlB7VCX3aB9dRShkqZhRe3FpMhZ6Mi3a8IrtnU4oRakBqHpIHfCvpX_PaodBJ0dQQDB6cxNAHYIhS3Tb1kHaoQ84OJzLrK2XUhH3rzjAzqceteeeHws"
            />
            <div className="flex flex-col">
              <span className="font-serif text-[22px] text-white font-semibold tracking-wide leading-tight group-hover:text-[#ffdea5] transition-colors">
                Deepak Goyal
              </span>
              <span className="font-legal-subtext tracking-widest uppercase text-[#e9c176]">
                Senior Advocate & Legal Drafter
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-7">
          <button
            onClick={() => handleNav('about')}
            className={`transition-colors py-2 text-sm font-semibold cursor-pointer ${
              activeTab === 'about'
                ? 'text-[#ffdea5] border-b-2 border-[#ffdea5]'
                : 'text-[#76849f] hover:text-white'
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleNav('expertise-and-paperwork')}
            className={`transition-colors py-2 text-sm font-semibold cursor-pointer ${
              activeTab === 'expertise-and-paperwork'
                ? 'text-[#ffdea5] border-b-2 border-[#ffdea5]'
                : 'text-[#76849f] hover:text-white'
            }`}
          >
            Expertise & Paperwork
          </button>
          <button
            onClick={() => handleNav('documentation-services')}
            className={`transition-colors py-2 text-sm font-semibold cursor-pointer ${
              activeTab === 'documentation-services'
                ? 'text-[#ffdea5] border-b-2 border-[#ffdea5]'
                : 'text-[#76849f] hover:text-white'
            }`}
          >
            Documentation Services
          </button>
          <button
            onClick={() => handleNav('track-record')}
            className={`transition-colors py-2 text-sm font-semibold cursor-pointer ${
              activeTab === 'track-record'
                ? 'text-[#ffdea5] border-b-2 border-[#ffdea5]'
                : 'text-[#76849f] hover:text-white'
            }`}
          >
            Track Record
          </button>
          <button
            onClick={() => handleNav('client-reviews')}
            className={`transition-colors py-2 text-sm font-semibold cursor-pointer ${
              activeTab === 'client-reviews'
                ? 'text-[#ffdea5] border-b-2 border-[#ffdea5]'
                : 'text-[#76849f] hover:text-white'
            }`}
          >
            Client Reviews
          </button>
          <button
            onClick={() => handleNav('contact-and-chamber')}
            className={`transition-colors py-2 text-sm font-semibold cursor-pointer ${
              activeTab === 'contact-and-chamber'
                ? 'text-[#ffdea5] border-b-2 border-[#ffdea5]'
                : 'text-[#76849f] hover:text-white'
            }`}
          >
            Contact & Chamber
          </button>
        </nav>

        {/* Right CTA & Profile */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col text-right">
            <span className="font-legal-subtext text-[#76849f] uppercase tracking-wider">
              Direct Hotline
            </span>
            <a
              href="tel:+919810244920"
              className="text-sm text-white font-semibold tracking-tight hover:text-[#ffdea5] transition-colors"
            >
              +91 98102 44920
            </a>
          </div>

          <button
            onClick={() => {
              if (onBookClick) onBookClick();
              else handleNav('schedule-consultation');
            }}
            className="bg-[#e9c176] text-[#261900] hover:bg-[#ffdea5] px-4 py-2.5 rounded-sm shadow-[0_4px_12px_-2px_rgba(10,25,47,0.2)] transition-all flex items-center gap-1.5 font-semibold text-sm cursor-pointer"
          >
            <span>Schedule Consultation</span>
          </button>

          <button
            onClick={() => handleNav('about')}
            title="Advocate Deepak Goyal Profile"
            className="cursor-pointer"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-[#e9c176]/40 hover:ring-[#ffdea5] transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZzzEXXvbL9n_tzQMvRMko5MCtboSOCssMCxJhszlgjeZdRCg9nOa7LZGEMlLJwnr_EPIDAXqSV290WUh3POieNN7qEpeVpXo1k4XKzLXmlF-h2G-AmdTpWBQXmgBPprkDwj_DksdigUvgCgv-EMdiGZ_RK19UV1AGqFRsaw0YAIB79kVHCuLLCeL1X08Y1LT2LL9a2KtJbWrr58SPADmuvyVrigHn4-1xa0ikvuVaOJo0JMgfLqeRJw"
            />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-white p-2 hover:text-[#ffdea5] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a192f] border-t border-[#c5c6cd]/20 px-6 py-4 flex flex-col gap-3 shadow-xl">
          <button
            onClick={() => handleNav('about')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'about' ? 'text-[#ffdea5]' : 'text-gray-300'
            }`}
          >
            About Advocate Goyal
          </button>
          <button
            onClick={() => handleNav('expertise-and-paperwork')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'expertise-and-paperwork' ? 'text-[#ffdea5]' : 'text-gray-300'
            }`}
          >
            Expertise & Paperwork
          </button>
          <button
            onClick={() => handleNav('documentation-services')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'documentation-services' ? 'text-[#ffdea5]' : 'text-gray-300'
            }`}
          >
            Documentation Services (15 Instruments)
          </button>
          <button
            onClick={() => handleNav('track-record')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'track-record' ? 'text-[#ffdea5]' : 'text-gray-300'
            }`}
          >
            Track Record & Past Matters
          </button>
          <button
            onClick={() => handleNav('client-reviews')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'client-reviews' ? 'text-[#ffdea5]' : 'text-gray-300'
            }`}
          >
            Client Reviews
          </button>
          <button
            onClick={() => handleNav('contact-and-chamber')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'contact-and-chamber' ? 'text-[#ffdea5]' : 'text-gray-300'
            }`}
          >
            Contact & Chamber Locations
          </button>
          <button
            onClick={() => handleNav('schedule-consultation')}
            className="mt-2 w-full bg-[#e9c176] text-[#261900] py-2.5 rounded font-semibold text-center"
          >
            Priority Chamber Booking
          </button>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#76849f]">
            <span>Delhi High Court Chamber No. 412</span>
            <a href="tel:+919810244920" className="text-[#e9c176] font-semibold">
              +91 98102 44920
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
