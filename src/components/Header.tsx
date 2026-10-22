import React, { useState } from 'react';
import { NavTab } from '../types';
import { ADVOCATE_INFO } from '../data/legalData';

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
    <header className="fixed top-0 w-full z-50 bg-[#0d1c32] text-white shadow-[0_8px_24px_rgba(10,25,47,0.18)]">
      {/* Top Notification Strip */}
      <div className="hidden lg:block border-b border-white/10 bg-[#0a172a] py-1.5 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-[#a0aec0]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#e9c176] font-medium">
              <span className="material-symbols-outlined text-[15px]">balance</span>
              {ADVOCATE_INFO.courtShort}
            </span>
            <span className="text-white/20">|</span>
            <span>{ADVOCATE_INFO.experience} • Civil, Property & Documentation</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${ADVOCATE_INFO.email}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px] text-[#e9c176]">mail</span>
              {ADVOCATE_INFO.email}
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`tel:+91${ADVOCATE_INFO.phone}`}
              className="flex items-center gap-1.5 text-white font-semibold hover:text-[#e9c176] transition-colors"
            >
              <span className="material-symbols-outlined text-[15px] text-[#e9c176]">call</span>
              Direct Call: {ADVOCATE_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-18 lg:h-20 max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav('about')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-[#e9c176] text-[#0d1c32] flex items-center justify-center shadow-md font-serif font-bold text-xl group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[24px]">gavel</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl lg:text-2xl text-white font-bold tracking-tight leading-tight group-hover:text-[#e9c176] transition-colors">
                Advocate Deepak Goyal
              </span>
              <span className="text-[11px] font-medium tracking-wide uppercase text-[#e9c176]">
                {ADVOCATE_INFO.courtShort}
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => handleNav('about')}
            className={`py-2 transition-colors cursor-pointer ${
              activeTab === 'about'
                ? 'text-[#e9c176] border-b-2 border-[#e9c176]'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleNav('expertise-and-paperwork')}
            className={`py-2 transition-colors cursor-pointer ${
              activeTab === 'expertise-and-paperwork'
                ? 'text-[#e9c176] border-b-2 border-[#e9c176]'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Certificates & Paperwork
          </button>
          <button
            onClick={() => handleNav('documentation-services')}
            className={`py-2 transition-colors cursor-pointer ${
              activeTab === 'documentation-services'
                ? 'text-[#e9c176] border-b-2 border-[#e9c176]'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            All Legal Services
          </button>
          <button
            onClick={() => handleNav('track-record')}
            className={`py-2 transition-colors cursor-pointer ${
              activeTab === 'track-record'
                ? 'text-[#e9c176] border-b-2 border-[#e9c176]'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => handleNav('client-reviews')}
            className={`py-2 transition-colors cursor-pointer ${
              activeTab === 'client-reviews'
                ? 'text-[#e9c176] border-b-2 border-[#e9c176]'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => handleNav('contact-and-chamber')}
            className={`py-2 transition-colors cursor-pointer ${
              activeTab === 'contact-and-chamber'
                ? 'text-[#e9c176] border-b-2 border-[#e9c176]'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Chamber & Court
          </button>
        </nav>

        {/* Right CTA & Direct WhatsApp/Call */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/91${ADVOCATE_INFO.phone}?text=${encodeURIComponent('Hello Advocate Deepak Goyal ji, I need legal consultation / paperwork assistance.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-semibold shadow transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => {
              if (onBookClick) onBookClick();
              else handleNav('schedule-consultation');
            }}
            className="bg-[#e9c176] text-[#0d1c32] hover:bg-[#ffdea5] px-4 py-2 rounded text-xs lg:text-sm font-bold shadow transition-all cursor-pointer"
          >
            Consultation Booking
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-white p-2 hover:text-[#e9c176] transition-colors"
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
        <div className="xl:hidden bg-[#0a172a] border-t border-white/10 px-6 py-4 flex flex-col gap-3 shadow-xl">
          <button
            onClick={() => handleNav('about')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'about' ? 'text-[#e9c176]' : 'text-gray-300'
            }`}
          >
            About Advocate Deepak Goyal
          </button>
          <button
            onClick={() => handleNav('expertise-and-paperwork')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'expertise-and-paperwork' ? 'text-[#e9c176]' : 'text-gray-300'
            }`}
          >
            Certificates & Paperwork (Marriage, Death, Birth, Property)
          </button>
          <button
            onClick={() => handleNav('documentation-services')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'documentation-services' ? 'text-[#e9c176]' : 'text-gray-300'
            }`}
          >
            All Documentation Services
          </button>
          <button
            onClick={() => handleNav('track-record')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'track-record' ? 'text-[#e9c176]' : 'text-gray-300'
            }`}
          >
            Experience & Track Record
          </button>
          <button
            onClick={() => handleNav('client-reviews')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'client-reviews' ? 'text-[#e9c176]' : 'text-gray-300'
            }`}
          >
            Client Reviews
          </button>
          <button
            onClick={() => handleNav('contact-and-chamber')}
            className={`text-left py-2 text-sm font-semibold ${
              activeTab === 'contact-and-chamber' ? 'text-[#e9c176]' : 'text-gray-300'
            }`}
          >
            Jaipur Sessions Court Chamber & Contact
          </button>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => handleNav('schedule-consultation')}
              className="w-full bg-[#e9c176] text-[#0d1c32] py-2.5 rounded font-bold text-center text-sm"
            >
              Book Chamber Consultation
            </button>
            <a
              href={`https://wa.me/91${ADVOCATE_INFO.phone}?text=${encodeURIComponent('Hello Advocate Deepak Goyal ji, I need legal consultation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 text-white py-2.5 rounded font-bold text-center text-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              Message on WhatsApp ({ADVOCATE_INFO.phoneFormatted})
            </a>
          </div>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#a0aec0]">
            <span>{ADVOCATE_INFO.courtShort}</span>
            <a href={`tel:+91${ADVOCATE_INFO.phone}`} className="text-[#e9c176] font-semibold">
              {ADVOCATE_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
