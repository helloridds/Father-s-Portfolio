import React, { useState } from 'react';
import { NavTab } from '../types';

interface ContactChamberViewProps {
  setActiveTab: (tab: NavTab) => void;
}

export const ContactChamberView: React.FC<ContactChamberViewProps> = ({ setActiveTab }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    chamberPreference: 'high_court',
    matterType: 'real_estate',
    brief: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        chamberPreference: 'high_court',
        matterType: 'real_estate',
        brief: ''
      });
    }, 4000);
  };

  return (
    <div className="flex flex-col w-full bg-[#f9f9ff]">
      {/* Hero Header */}
      <section className="bg-[#0d1c32] text-white py-16 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#e9c176]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffdea5]/15 border border-[#e9c176]/30 rounded text-[#e9c176] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            Chambers & Registry Contacts
          </div>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Chambers of Advocate Deepak Goyal
          </h1>
          <p className="text-sm lg:text-base text-[#c5c6cd] max-w-3xl leading-relaxed mb-6">
            Consultations are held by prior appointment at the High Court of Delhi Chamber or the Connaught Place Advisory Office. Prior security clearance is coordinated for in-chamber litigants.
          </p>
        </div>
      </section>

      {/* CHAMBER LOCATIONS & CONTACT GRID */}
      <section className="py-12 px-6 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Location 1: Delhi High Court Chambers */}
          <div className="bg-white p-8 rounded-xl border border-[#c5c6cd]/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-[#dee8ff] text-[#0d1c32] rounded text-xs font-bold uppercase tracking-wider">
                  Primary Judicial Chambers
                </span>
                <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  Open Mon–Fri
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-[#0d1c32] mb-2">
                High Court of Delhi Chambers
              </h2>
              <p className="text-xs text-[#76849f] mb-4">
                Chamber No. 412, Block C, Lawyers' Chambers Complex, High Court of Delhi, Sher Shah Road, New Delhi – 110503
              </p>

              <div className="space-y-2.5 text-xs text-[#44474d] mb-6 border-t border-[#c5c6cd]/20 pt-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#775a19] text-[16px]">schedule</span>
                  <span>Chamber Timing: <strong>09:30 AM – 04:30 PM (Court Days)</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#775a19] text-[16px]">directions_subway</span>
                  <span>Nearest Metro: <strong>Supreme Court Metro (Exit 2)</strong> or <strong>Khan Market</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#775a19] text-[16px]">badge</span>
                  <span>Visitor Security: <strong>Gate No. 7</strong> (Chamber Clerk facilitates e-gate pass)</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('schedule-consultation')}
              className="w-full py-2.5 bg-[#0d1c32] hover:bg-[#1a2f4c] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
            >
              Book High Court Chamber Consultation
            </button>
          </div>

          {/* Location 2: Connaught Place Chambers */}
          <div className="bg-white p-8 rounded-xl border border-[#c5c6cd]/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-[#ffdea5] text-[#261900] rounded text-xs font-bold uppercase tracking-wider">
                  Corporate & Estate Advisory
                </span>
                <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  Open Mon–Sat
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-[#0d1c32] mb-2">
                Connaught Place Consultation Chambers
              </h2>
              <p className="text-xs text-[#76849f] mb-4">
                2nd Floor, Statesman House, Barakhamba Road, Connaught Place, New Delhi – 110001
              </p>

              <div className="space-y-2.5 text-xs text-[#44474d] mb-6 border-t border-[#c5c6cd]/20 pt-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#775a19] text-[16px]">schedule</span>
                  <span>Chamber Timing: <strong>05:00 PM – 08:30 PM (Mon–Sat)</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#775a19] text-[16px]">directions_subway</span>
                  <span>Nearest Metro: <strong>Barakhamba Road Metro Station (Exit 5)</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#775a19] text-[16px]">local_parking</span>
                  <span>Dedicated Valet & Corporate Visitor Parking Available</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('schedule-consultation')}
              className="w-full py-2.5 bg-[#775a19] hover:bg-[#5f4713] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
            >
              Book Evening CP Consultation
            </button>
          </div>
        </div>

        {/* CHAMBER DIRECTORY & LITIGANT ASSISTANCE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Helplines (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#f0f3ff] p-6 rounded-xl border border-[#c5c6cd]/30">
              <h3 className="font-serif text-lg font-bold text-[#0d1c32] mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#775a19] text-[20px]">call</span>
                Direct Telephonic Access
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[#76849f] block">Urgent Court Briefs / Senior Counsel Mobile:</span>
                  <a href="tel:+919810244920" className="text-sm font-bold text-[#0d1c32] hover:text-[#775a19]">
                    +91 98102 44920
                  </a>
                </div>
                <div>
                  <span className="text-[#76849f] block">Chamber Registry Clerk / Gate Passes:</span>
                  <a href="tel:+911123384920" className="text-sm font-bold text-[#0d1c32] hover:text-[#775a19]">
                    +91 11 2338 4920
                  </a>
                </div>
                <div>
                  <span className="text-[#76849f] block">Official Counsel Email:</span>
                  <span className="text-sm font-bold text-[#0d1c32]">
                    chambers@advocatedeepakgoyal.in
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#c5c6cd]/30 text-xs text-[#44474d] space-y-2">
              <span className="text-xs font-bold text-[#0d1c32] block">
                Privilege & Bar Council Statutory Disclaimer
              </span>
              <p className="text-[11px] leading-relaxed text-[#76849f]">
                As per the rules of the Bar Council of India, this portal does not solicit clients or advertise legal services. Litigants accessing this page are doing so solely to seek information regarding the practice and chambers of Advocate Deepak Goyal.
              </p>
            </div>
          </div>

          {/* Direct Brief Transmission (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-[#c5c6cd]/30 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#0d1c32] mb-1">
              Dispatch Confidential Legal Brief
            </h3>
            <p className="text-xs text-[#44474d] mb-6">
              Litigants with matters requiring urgent filing or conveyancing vetting may transmit preliminary notes directly to the chamber desk.
            </p>

            {sent ? (
              <div className="p-6 bg-[#f0f3ff] rounded-lg text-center">
                <span className="material-symbols-outlined text-emerald-600 text-[32px] block mb-2">
                  verified
                </span>
                <h4 className="font-serif text-base font-bold text-[#0d1c32]">
                  Brief Received by Chamber Clerk
                </h4>
                <p className="text-xs text-[#44474d] mt-1">
                  Advocate Deepak Goyal will review your notes and telephone you within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-[#0d1c32] block mb-1">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Mehra"
                      className="w-full px-3 py-2 border border-[#c5c6cd] rounded focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-[#0d1c32] block mb-1">
                      Mobile / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98XXX XXXXX"
                      className="w-full px-3 py-2 border border-[#c5c6cd] rounded focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-[#0d1c32] block mb-1">
                      Preferred Chamber Venue
                    </label>
                    <select
                      value={formData.chamberPreference}
                      onChange={(e) => setFormData({ ...formData, chamberPreference: e.target.value })}
                      className="w-full px-3 py-2 border border-[#c5c6cd] rounded bg-white focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                    >
                      <option value="high_court">Delhi High Court (Day Chamber)</option>
                      <option value="connaught_place">Connaught Place (Evening Advisory)</option>
                      <option value="telephonic">Encrypted Tele-Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-[#0d1c32] block mb-1">
                      Legal Domain / Matter
                    </label>
                    <select
                      value={formData.matterType}
                      onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                      className="w-full px-3 py-2 border border-[#c5c6cd] rounded bg-white focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                    >
                      <option value="real_estate">Real Estate & Title Diligence</option>
                      <option value="wills_succession">Wills, Estates & Succession</option>
                      <option value="commercial_contracts">Corporate & Commercial Lease</option>
                      <option value="nri_advisory">NRI Power of Attorney & Property</option>
                      <option value="civil_litigation">Court Recovery & Section 138</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-[#0d1c32] block mb-1">
                    Matter Outline / Transaction Summary
                  </label>
                  <textarea
                    rows={4}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    placeholder="Briefly state property address, dispute history, urgent filing deadlines, or documents available..."
                    className="w-full px-3 py-2 border border-[#c5c6cd] rounded focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#775a19] hover:bg-[#5f4713] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-md flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">send</span>
                    Transmit Brief to Chamber Desk
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
