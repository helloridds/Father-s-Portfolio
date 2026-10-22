import React, { useState } from 'react';
import { FAQS } from '../data/legalData';

interface ScheduleConsultationViewProps {
  onOpenBookingDocket?: (bookingData: any) => void;
}

export const ScheduleConsultationView: React.FC<ScheduleConsultationViewProps> = ({
  onOpenBookingDocket
}) => {
  // Booking Form State
  const [forum, setForum] = useState<'in_chamber' | 'tele_consult' | 'urgent_vetting'>('in_chamber');
  const [domain, setDomain] = useState<'property_deeds' | 'wills_estates' | 'commercial_contracts' | 'civil_dispute'>('property_deeds');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [timeWindow, setTimeWindow] = useState('morning');
  const [litigantName, setLitigantName] = useState('');
  const [litigantPhone, setLitigantPhone] = useState('');
  const [litigantEmail, setLitigantEmail] = useState('');
  const [caseSummary, setCaseSummary] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [generatedToken, setGeneratedToken] = useState('');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!litigantName || !litigantPhone) return;

    const token = `DG-${Math.floor(1000 + Math.random() * 9000)}/2026`;
    setGeneratedToken(token);
    setShowToast(true);

    const bookingData = {
      token,
      name: litigantName,
      phone: litigantPhone,
      email: litigantEmail,
      forum: forum === 'in_chamber' ? 'In-Chamber (Delhi High Court Complex)' : forum === 'tele_consult' ? 'Tele-Briefing (Encrypted Video)' : 'Expedited 24H Vetting',
      domain: domain === 'property_deeds' ? 'Property Title Deeds & Conveyance' : domain === 'wills_estates' ? 'Will, Probate & Estate Settlement' : domain === 'commercial_contracts' ? 'Corporate & Commercial Contracts' : 'Civil Dispute & Appellate Review',
      date,
      time: timeWindow === 'morning' ? '10:30 AM – 01:00 PM' : timeWindow === 'evening' ? '04:30 PM – 07:30 PM' : '07:30 PM – 08:30 PM',
      summary: caseSummary
    };

    if (onOpenBookingDocket) {
      onOpenBookingDocket(bookingData);
    }

    setCaseSummary('');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Marquee / Status Strip */}
      <section className="w-full bg-[#dee8ff] py-2 px-6 lg:px-20 border-b border-[#c5c6cd]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 font-legal-subtext text-[#44474d]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ffdea5] text-[#261900] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#775a19] animate-pulse"></span>
              Calendar Active: New Delhi Registry
            </span>
            <span className="hidden sm:inline">
              Priority Docket: Urgent deed drafting & High Court listed matters accepted
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Bar Reference: D/1984/2004</span>
            <span className="text-[#775a19] font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              Encrypted Matter Handling
            </span>
          </div>
        </div>
      </section>

      {/* Editorial Hero Section */}
      <section className="relative w-full bg-white py-12 px-6 lg:px-20 overflow-hidden border-b border-[#e2e8f0]">
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#dee8ff]/60 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-[#775a19]">
              <span className="material-symbols-outlined text-[18px]">gavel</span>
              <span className="font-label-sm tracking-widest uppercase text-[#775a19] font-bold">
                Chamber of Advocate Deepak Goyal
              </span>
            </div>
            <h1 className="font-serif text-[38px] sm:text-[50px] text-[#111c2d] font-bold tracking-tight">
              Consult with Advocate <span className="italic font-normal text-[#775a19]">Deepak Goyal</span>
            </h1>
            <p className="font-body-lg text-[#44474d] max-w-2xl pt-1 leading-relaxed">
              Direct legal consultation for complex documentation, multi-generational property title verification, corporate contracts, and high-stakes civil dispute litigation.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="bg-[#e7eeff] p-5 rounded-xl shadow-sm border border-[#c5c6cd]/30 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[#775a19] font-bold uppercase tracking-wider">
                  Chamber Direct Line
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-legal-subtext text-[#775a19] px-2 py-0.5 rounded-full bg-white font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#775a19]"></span> Live Response
                </span>
              </div>
              <a
                href="tel:+919810244920"
                className="font-serif text-[26px] text-[#111c2d] font-bold tracking-tight hover:text-[#775a19] transition-colors"
              >
                +91 98102 44920
              </a>
              <p className="font-legal-subtext text-[#44474d]">
                Directly manned by chamber clerk for verified listing dates and urgent registry escrows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Hub & Chamber Directory */}
      <section className="w-full bg-[#f9f9ff] py-14 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Interactive Appointment Booking Column (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 lg:p-8 rounded-xl shadow-md border border-[#e2e8f0] flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-label-sm uppercase tracking-widest text-[#775a19] font-bold">
                Priority Booking Dossier
              </span>
              <h2 className="font-serif text-[26px] text-[#111c2d] font-bold">
                Book Private Legal Chamber Session
              </h2>
              <p className="font-body-sm text-[#44474d]">
                Complete the brief below. Client submissions are privileged under the Indian Evidence Act.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="flex flex-col gap-6">
              {/* Step 1: Mode Selection */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#111c2d] flex items-center justify-between">
                  <span>1. Select Consultation Forum</span>
                  <span className="font-legal-subtext text-[#775a19] font-bold">Step 1 of 4</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <label
                    onClick={() => setForum('in_chamber')}
                    className={`cursor-pointer flex flex-col p-3 rounded-lg border transition-all text-left ${
                      forum === 'in_chamber'
                        ? 'bg-[#ffdea5]/40 border-[#775a19] shadow-sm'
                        : 'bg-[#e7eeff] border-transparent hover:bg-[#dee8ff]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="material-symbols-outlined text-[18px] text-[#775a19]">
                        account_balance
                      </span>
                      <span className="text-xs font-bold text-[#111c2d]">In-Chamber</span>
                    </div>
                    <span className="font-legal-subtext text-[#44474d]">
                      Delhi High Court / Dist. Complex
                    </span>
                  </label>

                  <label
                    onClick={() => setForum('tele_consult')}
                    className={`cursor-pointer flex flex-col p-3 rounded-lg border transition-all text-left ${
                      forum === 'tele_consult'
                        ? 'bg-[#ffdea5]/40 border-[#775a19] shadow-sm'
                        : 'bg-[#e7eeff] border-transparent hover:bg-[#dee8ff]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="material-symbols-outlined text-[18px] text-[#775a19]">
                        video_camera_front
                      </span>
                      <span className="text-xs font-bold text-[#111c2d]">Tele-Briefing</span>
                    </div>
                    <span className="font-legal-subtext text-[#44474d]">
                      Encrypted Google Meet / Call
                    </span>
                  </label>

                  <label
                    onClick={() => setForum('urgent_vetting')}
                    className={`cursor-pointer flex flex-col p-3 rounded-lg border transition-all text-left ${
                      forum === 'urgent_vetting'
                        ? 'bg-[#ffdea5]/40 border-[#775a19] shadow-sm'
                        : 'bg-[#e7eeff] border-transparent hover:bg-[#dee8ff]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="material-symbols-outlined text-[18px] text-[#775a19]">
                        assignment_late
                      </span>
                      <span className="text-xs font-bold text-[#111c2d]">Expedited Vetting</span>
                    </div>
                    <span className="font-legal-subtext text-[#44474d]">
                      Turnaround within 24 Hours
                    </span>
                  </label>
                </div>
              </div>

              {/* Step 2: Legal Domain */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#111c2d] flex items-center justify-between">
                  <span>2. Select Subject Matter / Legal Domain</span>
                  <span className="font-legal-subtext text-[#775a19] font-bold">Step 2 of 4</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setDomain('property_deeds')}
                    className={`text-center p-3 rounded-lg border transition-all cursor-pointer ${
                      domain === 'property_deeds'
                        ? 'bg-[#ffdea5]/40 border-[#775a19] font-bold shadow-sm'
                        : 'bg-[#e7eeff] border-transparent hover:bg-[#dee8ff]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#775a19] block mb-1">
                      home_work
                    </span>
                    <span className="text-xs text-[#111c2d] block">Property Deeds</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDomain('wills_estates')}
                    className={`text-center p-3 rounded-lg border transition-all cursor-pointer ${
                      domain === 'wills_estates'
                        ? 'bg-[#ffdea5]/40 border-[#775a19] font-bold shadow-sm'
                        : 'bg-[#e7eeff] border-transparent hover:bg-[#dee8ff]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#775a19] block mb-1">
                      history_edu
                    </span>
                    <span className="text-xs text-[#111c2d] block">Will & Estate</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDomain('commercial_contracts')}
                    className={`text-center p-3 rounded-lg border transition-all cursor-pointer ${
                      domain === 'commercial_contracts'
                        ? 'bg-[#ffdea5]/40 border-[#775a19] font-bold shadow-sm'
                        : 'bg-[#e7eeff] border-transparent hover:bg-[#dee8ff]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#775a19] block mb-1">
                      handshake
                    </span>
                    <span className="text-xs text-[#111c2d] block">Contracts</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDomain('civil_dispute')}
                    className={`text-center p-3 rounded-lg border transition-all cursor-pointer ${
                      domain === 'civil_dispute'
                        ? 'bg-[#ffdea5]/40 border-[#775a19] font-bold shadow-sm'
                        : 'bg-[#e7eeff] border-transparent hover:bg-[#dee8ff]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px] text-[#775a19] block mb-1">
                      balance
                    </span>
                    <span className="text-xs text-[#111c2d] block">Civil Dispute</span>
                  </button>
                </div>
              </div>

              {/* Step 3: Date & Preferred Time Slot */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#111c2d] flex items-center justify-between">
                  <span>3. Hearing Docket / Schedule Preference</span>
                  <span className="font-legal-subtext text-[#775a19] font-bold">Step 3 of 4</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-legal-subtext text-[#44474d]">Preferred Calendar Date</span>
                    <input
                      className="bg-[#e7eeff] text-[#111c2d] text-sm px-3 py-2.5 rounded-lg border border-[#c5c6cd] focus:outline-none focus:bg-white"
                      required
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-legal-subtext text-[#44474d]">Chamber Time Window</span>
                    <select
                      className="bg-[#e7eeff] text-[#111c2d] text-sm px-3 py-2.5 rounded-lg border border-[#c5c6cd] focus:outline-none focus:bg-white"
                      value={timeWindow}
                      onChange={(e) => setTimeWindow(e.target.value)}
                    >
                      <option value="morning">Morning Window (10:30 AM – 01:00 PM)</option>
                      <option value="evening">Evening Session (04:30 PM – 07:30 PM)</option>
                      <option value="priority_night">Special Registry / Post Court (07:30 PM - 08:30 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Client Dossier Details */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#111c2d] flex items-center justify-between">
                  <span>4. Retainer & Client Particulars</span>
                  <span className="font-legal-subtext text-[#775a19] font-bold">Step 4 of 4</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className="bg-[#e7eeff] text-[#111c2d] text-sm px-3 py-2.5 rounded-lg border border-[#c5c6cd] focus:outline-none focus:bg-white"
                    placeholder="Full Name of Representative / Litigant *"
                    required
                    type="text"
                    value={litigantName}
                    onChange={(e) => setLitigantName(e.target.value)}
                  />
                  <input
                    className="bg-[#e7eeff] text-[#111c2d] text-sm px-3 py-2.5 rounded-lg border border-[#c5c6cd] focus:outline-none focus:bg-white"
                    placeholder="Mobile / WhatsApp (+91 ...) *"
                    required
                    type="tel"
                    value={litigantPhone}
                    onChange={(e) => setLitigantPhone(e.target.value)}
                  />
                </div>
                <input
                  className="bg-[#e7eeff] text-[#111c2d] text-sm px-3 py-2.5 rounded-lg border border-[#c5c6cd] focus:outline-none focus:bg-white mt-1"
                  placeholder="Official Corporate or Personal Email"
                  required
                  type="email"
                  value={litigantEmail}
                  onChange={(e) => setLitigantEmail(e.target.value)}
                />
                <textarea
                  className="bg-[#e7eeff] text-[#111c2d] text-sm p-3 rounded-lg border border-[#c5c6cd] focus:outline-none focus:bg-white mt-1 resize-none"
                  placeholder="Brief outline of dispute, conveyance title details, or matter index..."
                  rows={3}
                  value={caseSummary}
                  onChange={(e) => setCaseSummary(e.target.value)}
                />
              </div>

              {/* Action Button */}
              <div className="flex flex-col gap-2 pt-1">
                <button
                  className="w-full bg-black text-white hover:bg-[#0d1c32] py-3.5 px-4 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 font-semibold text-sm cursor-pointer"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#ffdea5]">
                    fact_check
                  </span>
                  <span>Confirm Appointment Booking</span>
                </button>
                <div className="flex items-center justify-center gap-1.5 font-legal-subtext text-[#44474d] text-center">
                  <span className="material-symbols-outlined text-[14px] text-[#775a19]">lock</span>
                  <span>All communications protected under Indian Evidence Act & Chamber Confidentiality Bylaws</span>
                </div>
              </div>
            </form>

            {/* Dynamic Success Toast */}
            {showToast && (
              <div className="bg-[#d8e3fb] p-4 rounded-lg flex items-start gap-3 border border-[#775a19]/30">
                <span className="material-symbols-outlined text-[#775a19] text-[24px]">verified</span>
                <div className="flex flex-col">
                  <span className="text-sm text-[#111c2d] font-bold">
                    Dossier Registered: Token #{generatedToken}
                  </span>
                  <p className="font-body-sm text-[#44474d] mt-0.5">
                    An executive token has been dispatched via WhatsApp and Email. Advocate Deepak Goyal&apos;s registry office will confirm room allocation shortly.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Chambers Directory & Real-time Location Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Live Status Capsule */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-[#e2e8f0] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#775a19] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#775a19]"></span>
                </span>
                <div className="flex flex-col">
                  <span className="text-xs text-[#111c2d] font-bold">
                    🟢 Available Today for Consultation
                  </span>
                  <span className="font-legal-subtext text-[#44474d]">
                    Daily Session Capacity: 4 Cases Remaining
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#775a19] text-[24px]">calendar_today</span>
            </div>

            {/* Location 1: Court Chamber */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-[#e7eeff] text-[#775a19] font-legal-subtext uppercase font-bold">
                  Primary Chamber
                </span>
                <span className="font-legal-subtext text-[#44474d]">10:00 AM – 04:00 PM</span>
              </div>
              <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold">
                District & High Court Complex
              </h3>
              <p className="font-body-sm text-[#44474d] leading-relaxed">
                Chamber No. 248, Lawyers&apos; Chambers Block, District & Sessions Court Complex, Sher Shah Road Wing, New Delhi 110001
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#775a19]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">stairs</span> 2nd Floor (Elevator Access)
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">local_parking</span> Registry Gate No. 3
                </span>
              </div>
            </div>

            {/* Location 2: City Evening Office */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-[#e7eeff] text-[#775a19] font-legal-subtext uppercase font-bold">
                  Evening Private Suite
                </span>
                <span className="font-legal-subtext text-[#44474d]">05:00 PM – 08:30 PM</span>
              </div>
              <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold">
                Connaught Place Executive Chamber
              </h3>
              <p className="font-body-sm text-[#44474d] leading-relaxed">
                Suite 104, Goyal Legal Associates, Heritage Commercial Plaza, Barakhamba Boulevard, Central New Delhi 110001
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#775a19]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">subway</span> Barakhamba Metro (Gate 2)
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">meeting_room</span> Private Conference Room
                </span>
              </div>
            </div>

            {/* Chamber Map Static Pipeline Container */}
            <div className="bg-white p-3 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col gap-2">
              <div
                className="w-full h-48 bg-cover bg-center rounded-lg relative overflow-hidden"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7CiXEl33nhgrv9P89JH2T1bGqNjOG5noMcjLFxg5XkKMgnfISOOkOP0fwLT_90rtIsF2r_-2ML6CDWmQWftwWZecZF76du63mr18WK4iGpDFA69oNchCUJRYajWbjzEREccyCBym4Vr8-w4JtraDp5ukbl6ZRQVr8YK605esIMT6FUQSgdtCQca86lQooA2faqFIBWxL3hjFVXtipYR8yZ28kYEnAtx9JG84onIX8SLSukUQmqdaBw')`
                }}
              >
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center">
                  <div className="bg-white/90 px-4 py-2 rounded-full shadow-md flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[20px]">pin_drop</span>
                    <span className="text-xs text-[#111c2d] font-bold">Delhi High Court & Sessions Annex</span>
                  </div>
                </div>
              </div>
              <div className="p-1 flex items-center justify-between font-legal-subtext text-[#44474d]">
                <span>Direct navigation assistance available via chamber security desk</span>
                <a
                  className="text-[#775a19] font-bold hover:underline"
                  href="https://maps.google.com/?q=Delhi+High+Court+Sher+Shah+Road+New+Delhi"
                  rel="noreferrer"
                  target="_blank"
                >
                  Launch Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring Checklist */}
      <section className="w-full bg-[#f0f3ff] py-16 px-6 lg:px-20 border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1 max-w-2xl">
              <span className="font-label-sm uppercase tracking-widest text-[#775a19] font-bold">
                Preparation Guideline
              </span>
              <h2 className="font-serif text-[30px] text-[#111c2d] font-bold">
                What to Bring to Your Consultation
              </h2>
              <p className="font-body-md text-[#44474d]">
                To ensure comprehensive analysis during your 45-minute advisory window, please assemble relevant evidentiary records beforehand.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm border border-[#e2e8f0]">
              <span className="material-symbols-outlined text-[#775a19]">folder_supervised</span>
              <span className="font-legal-subtext text-[#111c2d] font-bold">
                Pre-vetting Checklist Compliant
              </span>
            </div>
          </div>

          {/* Checklist Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="w-10 h-10 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#775a19]">
                  <span className="material-symbols-outlined text-[22px]">history_edu</span>
                </div>
                <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold pt-1">
                  Title Deeds & Chains
                </h3>
                <p className="font-body-sm text-[#44474d] leading-relaxed">
                  Original sale deed, gift deed, allotment letters, conveyance deed, and unbroken 30-year antecedent chain documents.
                </p>
              </div>
              <div className="font-legal-subtext text-[#775a19] font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                <span>Mandatory for Property</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="w-10 h-10 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#775a19]">
                  <span className="material-symbols-outlined text-[22px]">badge</span>
                </div>
                <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold pt-1">
                  Identity & Authority
                </h3>
                <p className="font-body-sm text-[#44474d] leading-relaxed">
                  Self-attested photocopies of Aadhaar Card, PAN Card, along with registered Power of Attorney or Board Resolutions for entities.
                </p>
              </div>
              <div className="font-legal-subtext text-[#775a19] font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                <span>KYC & Verification</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="w-10 h-10 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#775a19]">
                  <span className="material-symbols-outlined text-[22px]">mail_lock</span>
                </div>
                <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold pt-1">
                  Notices & Writs
                </h3>
                <p className="font-body-sm text-[#44474d] leading-relaxed">
                  Prior legal notices, summons, written statements, caveat filings, court orders, or administrative show-cause memos received.
                </p>
              </div>
              <div className="font-legal-subtext text-[#775a19] font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                <span>Dispute Essential</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="w-10 h-10 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#775a19]">
                  <span className="material-symbols-outlined text-[22px]">receipt_long</span>
                </div>
                <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold pt-1">
                  Revenue Records
                </h3>
                <p className="font-body-sm text-[#44474d] leading-relaxed">
                  Current Jamabandi, Khasra-Khatauni extracts, property tax receipts, mutation certificates, and sanctioned municipal maps.
                </p>
              </div>
              <div className="font-legal-subtext text-[#775a19] font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                <span>Due Diligence Audit</span>
              </div>
            </div>
          </div>

          {/* Quick Guidance Banner */}
          <div className="p-5 rounded-xl bg-[#e7eeff] border border-[#c5c6cd]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#775a19] text-[28px]">mark_email_read</span>
              <div className="flex flex-col">
                <span className="font-label-md text-[#111c2d] font-bold">
                  Prefer to send documentation ahead of time?
                </span>
                <span className="font-body-sm text-[#44474d]">
                  Forward scanned PDFs to <strong>registry@advocatedeepakgoyal.in</strong> with your booking phone number in the subject line.
                </span>
              </div>
            </div>
            <span className="font-legal-subtext text-[#775a19] font-bold uppercase whitespace-nowrap bg-white px-3 py-1 rounded shadow-sm">
              256-Bit SSL Transfer
            </span>
          </div>
        </div>
      </section>

      {/* Photo Insight / Chamber Prestige Grid */}
      <section className="w-full bg-white py-14 px-6 lg:px-20 border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-xl overflow-hidden shadow-sm border border-[#e2e8f0]">
            <img
              alt="Classic law library filled with treatises"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVl7YVLCnYtZGF9ems8XZarhkdHfk82ZkFCi0H5ZY1s6hQ6rBk5AnkcLypFO84KiLuBRvuHjOxbDcUsF8X4RPt5SJZdIub5gTXHTu12lB0DT809U9NCYIUPM3EqYkUwX4AgS_KvcUuwl6pr3en2YfKvT6zGtmPcAyLaOxVz0OhEFt4b3pgx-r1TC1XFYrIznyZWrY3aWyVj0ZxPbEnuo6isxc0_OfIHA3BCj-BeFcN12nZ0fji6yWiIg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
              <span className="text-xs text-white font-semibold">
                Comprehensive Law Reference Library
              </span>
            </div>
          </div>

          <div className="relative h-64 rounded-xl overflow-hidden shadow-sm border border-[#e2e8f0]">
            <img
              alt="Senior advocate meticulously signing official deed"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLCYMGbDYF9d6-zGTrOcOajJF_UlanOw1Sm4za5Mp2Q6W4tKC8h7TLcOtQetEYc1Tbs_ybYrr6n55saeZEVpnO4vd2rNwzYMt3nrrzZ3Xr-dKHpbi_z5vHWb8fRQuWioCSEptDfZx2GfrGpKM9Hzl7QKXdct7TQM0STwGgh-7GOUt3W5Lffcc_0Fbh5dZLavZGhcURVeyxu_YYHM4IWpwSWseBfxPhpSkTTva3QU9rBIwyoix7dO45Cg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
              <span className="text-xs text-white font-semibold">
                Title Deed Vetting & Conveyance
              </span>
            </div>
          </div>

          <div className="relative h-64 rounded-xl overflow-hidden shadow-sm border border-[#e2e8f0]">
            <img
              alt="Delhi High Court architectural corridor"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0EIJUTZLgVfc9fmnrZSGu0Ca1zPP-boESJq6QmFGihJ11NrVvknkXmsaC1IXe8ltxM7FnX-A4Z4LF5VIlATUBue-4S-rH800SlFzmDYb9szA14-Xt5Fuq2Q_QEtSkiazU7BuRgVqciNgf8dmGfzO9LWkdk8boxC1AQXgfpB4kIw4vKIX0FKBt358jSp3JE39vKJyKwBc6BrywoHIZIl9m9qMiRAfz7z12TqeBGJVhpe3sZ8s46yGAOA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
              <span className="text-xs text-white font-semibold">
                Appellate Representation at Delhi High Court
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Fee & Chamber FAQ Section */}
      <section className="w-full bg-[#f9f9ff] py-16 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="text-center flex flex-col items-center gap-1.5">
            <span className="font-label-sm uppercase tracking-widest text-[#775a19] font-bold">
              Chamber Policies
            </span>
            <h2 className="font-serif text-[32px] text-[#111c2d] font-bold">
              Frequently Asked Questions
            </h2>
            <p className="font-body-md text-[#44474d] max-w-xl">
              Straightforward answers regarding consultation sessions, retainer fees, conveyance timelines, and ethical compliance.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col gap-2 transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex items-center justify-between cursor-pointer text-left w-full"
                  >
                    <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold pr-4">
                      {faq.question}
                    </h3>
                    <span
                      className={`material-symbols-outlined text-[#775a19] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-2 font-body-sm text-[#44474d] leading-relaxed border-t border-[#f0f3ff]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
