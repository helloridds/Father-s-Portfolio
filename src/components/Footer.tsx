import React, { useState } from 'react';
import { NavTab } from '../types';
import { ADVOCATE_INFO } from '../data/legalData';
import { dispatchToAdvocatePhone } from '../utils/sendNotification';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickMatter, setQuickMatter] = useState('');
  const [sent, setSent] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName || !quickPhone) return;

    dispatchToAdvocatePhone({
      formType: 'Quick Footer Inquiry',
      name: quickName,
      phone: quickPhone,
      details: quickMatter
    });

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setQuickName('');
      setQuickPhone('');
      setQuickMatter('');
    }, 4000);
  };

  return (
    <footer className="bg-[#0a172a] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Chamber Bio & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#e9c176] text-[#0d1c32] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[20px]">gavel</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">
                  Advocate Deepak Goyal
                </h3>
                <p className="text-xs text-[#e9c176] font-medium">
                  {ADVOCATE_INFO.courtShort} • Rajasthan
                </p>
              </div>
            </div>

            <p className="text-xs text-[#a0aec0] leading-relaxed">
              Practicing advocate with over 20 years of experience in property registry, marriage certificates, death and birth certificates, succession (warisan), agreements, affidavits, and civil legal matters in Jaipur.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <a
                href={`tel:+91${ADVOCATE_INFO.phone}`}
                className="flex items-center gap-2 text-white hover:text-[#e9c176] font-semibold"
              >
                <span className="material-symbols-outlined text-[16px] text-[#e9c176]">call</span>
                <span>{ADVOCATE_INFO.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${ADVOCATE_INFO.email}`}
                className="flex items-center gap-2 text-white hover:text-[#e9c176]"
              >
                <span className="material-symbols-outlined text-[16px] text-[#e9c176]">mail</span>
                <span>{ADVOCATE_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2 text-[#a0aec0]">
                <span className="material-symbols-outlined text-[16px] text-[#e9c176] shrink-0 mt-0.5">location_on</span>
                <span>{ADVOCATE_INFO.chamberAddress}</span>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#e9c176]">
              Key Paperwork Services
            </h4>
            <ul className="space-y-2 text-xs text-[#cbd5e1]">
              <li>
                <button
                  onClick={() => { setActiveTab('expertise-and-paperwork'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors"
                >
                  • Marriage Certificate (विवाह प्रमाण पत्र)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('expertise-and-paperwork'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors"
                >
                  • Death & Legal Heir Certificate (मृत्यु प्रमाण पत्र)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('expertise-and-paperwork'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors"
                >
                  • Birth Certificate (जन्म प्रमाण पत्र)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('documentation-services'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors"
                >
                  • Property Registry & Sale Deed (बैनामा)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('documentation-services'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors"
                >
                  • Agreement to Sell & Bayana (बयाना)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('documentation-services'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors"
                >
                  • Will & Vasiyatnama (वसीयत)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('documentation-services'); window.scrollTo(0, 0); }}
                  className="hover:text-white transition-colors"
                >
                  • Rent Agreement & Affidavits
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Send Form to Father's Phone (5 cols) */}
          <div className="lg:col-span-5 bg-[#0f213c] p-5 rounded-xl border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#e9c176] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">send_to_mobile</span>
                Send Details to Advocate's Phone
              </h4>
              <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                Direct to 9828089628
              </span>
            </div>

            <p className="text-[11px] text-[#a0aec0]">
              Fill this quick form to send your inquiry straight to Advocate Deepak Goyal's phone on WhatsApp.
            </p>

            {sent ? (
              <div className="p-4 bg-emerald-900/30 border border-emerald-500/40 rounded text-center">
                <span className="material-symbols-outlined text-emerald-400 text-[24px] mb-1">check_circle</span>
                <p className="text-xs font-bold text-white">Details Sent to Advocate Deepak Goyal</p>
                <p className="text-[11px] text-emerald-300 mt-1">Dispatched to +91 98280 89628. You will receive a response shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#091526] border border-white/15 rounded text-white text-xs focus:outline-none focus:border-[#e9c176]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone No. *"
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-[#091526] border border-white/15 rounded text-white text-xs focus:outline-none focus:border-[#e9c176]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Service needed (e.g. Property paper, Marriage certificate, Registry)..."
                  value={quickMatter}
                  onChange={(e) => setQuickMatter(e.target.value)}
                  className="w-full px-3 py-2 bg-[#091526] border border-white/15 rounded text-white text-xs focus:outline-none focus:border-[#e9c176]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#e9c176] hover:bg-[#ffdea5] text-[#0d1c32] font-bold rounded text-xs transition-colors flex items-center justify-center gap-1.5 shadow"
                >
                  <span className="material-symbols-outlined text-[15px]">send</span>
                  Send to Advocate Deepak Goyal (9828089628)
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#a0aec0]">
          <div>
            © {new Date().getFullYear()} Advocate Deepak Goyal. Chamber at Jaipur Sessions Court, Bani Park, Jaipur.
          </div>
          <div className="text-[11px] text-[#718096] text-center md:text-right">
            Information provided as per Bar Council of India regulations for public informational purposes.
          </div>
        </div>
      </div>
    </footer>
  );
};
