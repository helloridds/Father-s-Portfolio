import React, { useState } from 'react';
import { NavTab } from '../types';
import { TESTIMONIALS } from '../data/legalData';

interface AboutViewProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenBookingDocket?: (bookingData: any) => void;
  onOpenDraftBrief?: (instrumentTitle: string, category: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  setActiveTab,
  onOpenBookingDocket,
  onOpenDraftBrief
}) => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientContact: '',
    clientEmail: '',
    serviceType: 'sale_deed',
    preferredDate: '',
    preferredVenue: 'hc',
    briefSummary: '',
    consent: true
  });
  const [submitting, setSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setBookingSuccess(true);
      if (onOpenBookingDocket) {
        onOpenBookingDocket({
          name: formData.clientName,
          phone: formData.clientContact,
          email: formData.clientEmail,
          domain: formData.serviceType,
          mode: formData.preferredVenue,
          date: formData.preferredDate || new Date().toISOString().split('T')[0],
          time: '11:00 AM - 12:00 PM',
          token: `DG-${Math.floor(1000 + Math.random() * 9000)}/2026`
        });
      }
      setTimeout(() => {
        setBookingSuccess(false);
      }, 7000);
    }, 800);
  };

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#f0f3ff] pb-14 pt-8">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ffdea5]/30 via-[#f0f3ff] to-[#f0f3ff]"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#e9c176]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Content (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-5">
              {/* Institutional Credential Badge */}
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#775a19]"></span>
                <span className="font-label-sm text-[#775a19] uppercase tracking-widest font-semibold">
                  Senior Chamber Practice • Delhi Bar Council
                </span>
                <span className="font-legal-subtext bg-[#e7eeff] px-2 py-0.5 rounded-full text-[#44474d] font-medium">
                  Est. 2002
                </span>
              </div>

              {/* Stately Hero Headline */}
              <h1 className="font-serif text-[42px] sm:text-[54px] lg:text-[56px] text-[#111c2d] leading-[1.15] font-bold tracking-tight text-balance">
                Precision in Legal Drafting. <br />
                <span className="italic font-normal text-[#775a19]">Absolute Integrity</span> in Counsel.
              </h1>

              {/* Crisp Subtitle */}
              <p className="font-body-lg text-[#44474d] max-w-2xl leading-relaxed">
                Advocate Deepak Goyal brings over 22+ years of courtroom expertise and meticulous legal documentation mastery across Property Conveyancing, Corporate Contracts, Wills, Probate, and High Court Title Registrations.
              </p>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-1">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-[#e2e8f0]/60">
                  <span className="font-serif text-[28px] text-[#111c2d] font-semibold block leading-none">
                    22+
                  </span>
                  <span className="font-legal-subtext text-[#44474d] uppercase tracking-wider block mt-1.5">
                    Years Practice
                  </span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-[#e2e8f0]/60">
                  <span className="font-serif text-[28px] text-[#111c2d] font-semibold block leading-none">
                    5,000+
                  </span>
                  <span className="font-legal-subtext text-[#44474d] uppercase tracking-wider block mt-1.5">
                    Deeds Drafted
                  </span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-[#e2e8f0]/60">
                  <span className="font-serif text-[28px] text-[#775a19] font-semibold block leading-none">
                    D/1984
                  </span>
                  <span className="font-legal-subtext text-[#44474d] uppercase tracking-wider block mt-1.5">
                    Bar Enrolment
                  </span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-[#e2e8f0]/60">
                  <span className="font-serif text-[28px] text-[#111c2d] font-semibold block leading-none">
                    100%
                  </span>
                  <span className="font-legal-subtext text-[#44474d] uppercase tracking-wider block mt-1.5">
                    Due Diligence
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    setActiveTab('schedule-consultation');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-black text-white hover:bg-[#0d1c32] px-6 py-3 rounded text-sm font-semibold shadow-md transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Book Chamber Consultation</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    calendar_month
                  </span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab('documentation-services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white text-[#111c2d] hover:bg-[#e7eeff] px-6 py-3 rounded text-sm font-semibold shadow-sm border border-[#e2e8f0] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[#775a19] text-[18px]">article</span>
                  <span>Explore Documentation Services</span>
                </button>
              </div>

              {/* Micro Confidentiality Assurance */}
              <div className="flex items-center gap-2 text-[#44474d] font-legal-subtext pt-2">
                <span className="material-symbols-outlined text-[#775a19] text-[16px]">lock</span>
                <span>All inquiries protected under Advocate-Client Privilege (Indian Evidence Act, Sec 126).</span>
              </div>
            </div>

            {/* Right Hero Portrait (5 Columns) */}
            <div className="lg:col-span-5 relative flex justify-center mt-8 lg:mt-0">
              <div className="relative w-full max-w-md">
                {/* Decorative Backing Offset Card */}
                <div className="absolute -inset-3 bg-[#e9c176]/30 rounded-xl transform rotate-2"></div>
                <div className="absolute -inset-1 bg-white rounded-xl shadow-xl"></div>

                {/* Main Portrait Card */}
                <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
                  <img
                    alt="Advocate Deepak Goyal - Senior Legal Counsel & Title Conveyancer"
                    className="w-full h-[480px] object-cover object-top"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZzzEXXvbL9n_tzQMvRMko5MCtboSOCssMCxJhszlgjeZdRCg9nOa7LZGEMlLJwnr_EPIDAXqSV290WUh3POieNN7qEpeVpXo1k4XKzLXmlF-h2G-AmdTpWBQXmgBPprkDwj_DksdigUvgCgv-EMdiGZ_RK19UV1AGqFRsaw0YAIB79kVHCuLLCeL1X08Y1LT2LL9a2KtJbWrr58SPADmuvyVrigHn4-1xa0ikvuVaOJo0JMgfLqeRJw"
                  />
                  {/* Subtle bottom gradient scrim */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d1c32] via-[#0d1c32]/60 to-transparent"></div>

                  {/* Overlaid Advocate Meta Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded shadow-lg flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-[18px] text-[#111c2d] font-bold leading-tight">
                        Adv. Deepak Goyal
                      </h4>
                      <p className="font-legal-subtext text-[#775a19] font-bold uppercase tracking-wider">
                        Senior Counsel & Title Conveyancer
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#ffdea5]/50 flex items-center justify-center text-[#261900]">
                      <span className="material-symbols-outlined text-[20px]">verified_user</span>
                    </div>
                  </div>
                </div>

                {/* Floating Stamp Accent */}
                <div className="absolute -top-4 -left-4 bg-white text-[#111c2d] py-1.5 px-3 rounded-full shadow-lg flex items-center gap-1.5 border border-[#e2e8f0]">
                  <span className="material-symbols-outlined text-[#775a19] text-[16px]">gavel</span>
                  <span className="font-legal-subtext font-semibold uppercase tracking-wider">
                    Supreme Court & High Court Bar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BIOGRAPHY & CREDENTIALS OVERVIEW */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Editorial Column */}
            <div className="lg:col-span-5 flex flex-col space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#775a19]"></span>
                <span className="font-label-sm uppercase tracking-widest text-[#775a19] font-semibold">
                  The Chamber Philosophy
                </span>
              </div>
              <h2 className="font-serif text-[32px] lg:text-[40px] text-[#111c2d] leading-tight font-semibold">
                Flawless paperwork today is the strongest defense against litigation tomorrow.
              </h2>
              <div className="bg-[#f0f3ff] p-5 rounded-lg border-l-4 border-[#775a19]">
                <p className="font-serif text-[20px] italic text-[#111c2d] font-normal leading-relaxed">
                  “In civil jurisprudence, ambiguity in title deeds is an invitation to decades of disputed inheritance and court stays. Our duty is absolute clarity.”
                </p>
                <div className="mt-3 flex items-center gap-2 text-[#111c2d] text-xs font-semibold">
                  <span className="w-4 h-0.5 bg-[#e9c176]"></span>
                  <span>Advocate Deepak Goyal</span>
                </div>
              </div>

              {/* High Court & Sub-Registrar Authority Footprint */}
              <div className="space-y-2 pt-2">
                <h4 className="font-label-md text-[#111c2d] uppercase tracking-wider font-semibold">
                  Judicial & Administrative Standing
                </h4>
                <p className="font-body-sm text-[#44474d] leading-relaxed">
                  Extensive daily representation across the Delhi High Court, District Courts at Tis Hazari, Patiala House, Saket, Rohini, and Dwarka, alongside exhaustive command over Sub-Registrar offices across Delhi NCR, Haryana, and Uttar Pradesh.
                </p>
              </div>
            </div>

            {/* Right: Narrative & Verified Credentials Bento */}
            <div className="lg:col-span-7 flex flex-col space-y-5 lg:pl-6">
              <div className="space-y-3 font-body-md text-[#44474d] leading-relaxed">
                <p>
                  With over two decades standing at the Bar, Advocate Deepak Goyal is one of the National Capital Region’s most sought-after authorities in commercial conveyancing, high-stake real estate title diligence, family probate settlements, and cross-border Power of Attorney authentications.
                </p>
                <p>
                  Having scrutinized over 5,000 property titles dating back 30 to 50 years, his chamber is trusted by institutional banks, high-net-worth families, enterprise founders, and non-resident Indians (NRIs) who require bulletproof documentation that endures judicial scrutiny at every level.
                </p>
              </div>

              {/* Credentials Mosaic Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#f9f9ff] border border-[#e2e8f0] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded bg-[#e7eeff] flex items-center justify-center text-[#775a19] mb-2">
                    <span className="material-symbols-outlined text-[20px]">badge</span>
                  </div>
                  <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold">
                    Bar Council of Delhi
                  </h3>
                  <p className="font-body-sm text-[#44474d] mt-1">
                    Enrolment No: D/1984/2004. Continuous active practice across Civil Appellate, Land Acquisition & Commercial Benches.
                  </p>
                </div>

                <div className="bg-[#f9f9ff] border border-[#e2e8f0] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded bg-[#e7eeff] flex items-center justify-center text-[#775a19] mb-2">
                    <span className="material-symbols-outlined text-[20px]">school</span>
                  </div>
                  <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold">
                    LL.B. (Honours)
                  </h3>
                  <p className="font-body-sm text-[#44474d] mt-1">
                    Distinction in Property Laws, Transfer of Property Act (1882), Indian Succession Act, and Contractual Jurisprudence.
                  </p>
                </div>

                <div className="bg-[#f9f9ff] border border-[#e2e8f0] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded bg-[#e7eeff] flex items-center justify-center text-[#775a19] mb-2">
                    <span className="material-symbols-outlined text-[20px]">account_balance</span>
                  </div>
                  <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold">
                    Bar Associations Member
                  </h3>
                  <p className="font-body-sm text-[#44474d] mt-1">
                    Senior Member, Delhi High Court Bar Association & District & Sessions Courts Bar Association.
                  </p>
                </div>

                <div className="bg-[#f9f9ff] border border-[#e2e8f0] p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded bg-[#e7eeff] flex items-center justify-center text-[#775a19] mb-2">
                    <span className="material-symbols-outlined text-[20px]">balance</span>
                  </div>
                  <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold">
                    Certified Arbitrator
                  </h3>
                  <p className="font-body-sm text-[#44474d] mt-1">
                    Specialized in institutional commercial conflict resolution, partnership dissolutions, and joint development partitions.
                  </p>
                </div>
              </div>

              {/* Live Case Ticker */}
              <div className="bg-[#0d1c32] text-white p-3.5 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#e9c176]">verified</span>
                  <span className="text-xs sm:text-sm font-semibold">
                    Active Chamber Capacity: Open for Property Scrutiny & Retainerships
                  </span>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('schedule-consultation');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-legal-subtext uppercase tracking-widest text-[#e9c176] hover:text-white transition-colors font-bold whitespace-nowrap cursor-pointer"
                >
                  Inquire Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SPECIALIZED DOCUMENTATION & PAPERWORK DOMAINS */}
      <section className="w-full py-16 bg-[#f0f3ff]" id="documentation-domains">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-8 h-0.5 bg-[#775a19]"></span>
                <span className="font-label-sm uppercase tracking-widest text-[#775a19] font-semibold">
                  Core Practice Domains
                </span>
              </div>
              <h2 className="font-serif text-[32px] lg:text-[40px] text-[#111c2d] font-semibold">
                Specialized Legal Documentation & Conveyance
              </h2>
              <p className="font-body-md text-[#44474d] max-w-2xl mt-1">
                Every document is custom drafted after forensic title verification, ensuring non-assailable validity under Indian Stamp Act and Registration Act, 1908.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[#44474d] text-xs font-semibold">
              <span className="material-symbols-outlined text-[#775a19]">speed</span>
              <span>Expedited 48-Hour Turnaround Available</span>
            </div>
          </div>

          {/* Domain Cards Grid (6 Pillars) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Sale Deeds & Conveyance */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-[#e2e8f0] group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#775a19] group-hover:bg-[#fed488] transition-colors">
                    <span className="material-symbols-outlined text-[26px]">real_estate_agent</span>
                  </div>
                  <span className="font-legal-subtext px-2.5 py-1 bg-[#e7eeff] rounded-full text-[#44474d] font-semibold">
                    48 - 72 Hrs
                  </span>
                </div>
                <h3 className="font-serif text-[20px] text-[#111c2d] font-semibold mb-2 group-hover:text-[#775a19] transition-colors">
                  Sale Deeds & Conveyance Registry
                </h3>
                <p className="font-body-sm text-[#44474d] leading-relaxed mb-4">
                  Comprehensive freehold conveyance, builder-buyer transfer verification, stamp duty optimization, and formal presence at the Sub-Registrar chamber for execution.
                </p>
                <ul className="space-y-1.5 font-legal-subtext text-[#111c2d]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>30-Year Title Search Reports & Chain Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>Encumbrance & Revenue Record Verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>Mutation & Municipal Tax Transition Papers</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-[#e2e8f0] flex items-center justify-between">
                <span className="font-label-sm text-[#775a19] font-semibold">Title Immunity Protocol</span>
                <button
                  onClick={() => onOpenDraftBrief ? onOpenDraftBrief('Sale Deeds & Conveyance Registry', 'Property & Real Estate') : setActiveTab('schedule-consultation')}
                  className="font-label-sm text-[#111c2d] font-semibold flex items-center gap-1 group-hover:text-[#775a19] cursor-pointer"
                >
                  Consult <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 2: Wills, Probate & Succession */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-[#e2e8f0] group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#775a19] group-hover:bg-[#fed488] transition-colors">
                    <span className="material-symbols-outlined text-[26px]">history_edu</span>
                  </div>
                  <span className="font-legal-subtext px-2.5 py-1 bg-[#e7eeff] rounded-full text-[#44474d] font-semibold">
                    3 - 5 Days
                  </span>
                </div>
                <h3 className="font-serif text-[20px] text-[#111c2d] font-semibold mb-2 group-hover:text-[#775a19] transition-colors">
                  Wills, Probate & Succession
                </h3>
                <p className="font-body-sm text-[#44474d] leading-relaxed mb-4">
                  Safeguarding generational wealth through dispute-free estate planning, registered testamentary instruments, family settlements, and High Court probate petitions.
                </p>
                <ul className="space-y-1.5 font-legal-subtext text-[#111c2d]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>Family Settlement Deeds & Partition MoUs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>Codicils, Living Wills & Registered Gift Deeds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>Succession Certificates & Letters of Administration</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-[#e2e8f0] flex items-center justify-between">
                <span className="font-label-sm text-[#775a19] font-semibold">Confidential Execution</span>
                <button
                  onClick={() => onOpenDraftBrief ? onOpenDraftBrief('Wills, Probate & Succession', 'Family & Succession') : setActiveTab('schedule-consultation')}
                  className="font-label-sm text-[#111c2d] font-semibold flex items-center gap-1 group-hover:text-[#775a19] cursor-pointer"
                >
                  Consult <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 3: Commercial & Corporate Contracts */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-[#e2e8f0] group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#775a19] group-hover:bg-[#fed488] transition-colors">
                    <span className="material-symbols-outlined text-[26px]">business_center</span>
                  </div>
                  <span className="font-legal-subtext px-2.5 py-1 bg-[#e7eeff] rounded-full text-[#44474d] font-semibold">
                    2 - 4 Days
                  </span>
                </div>
                <h3 className="font-serif text-[20px] text-[#111c2d] font-semibold mb-2 group-hover:text-[#775a19] transition-colors">
                  Commercial & Corporate Contracts
                </h3>
                <p className="font-body-sm text-[#44474d] leading-relaxed mb-4">
                  Rigorous contractual structures engineered to eliminate fiduciary loopholes, protecting enterprises in B2B ventures, partnerships, and joint development pacts.
                </p>
                <ul className="space-y-1.5 font-legal-subtext text-[#111c2d]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>Partnership Deeds & LLP Operational Agreements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>Strict Non-Disclosure (NDAs) & Vendor Charters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>Commercial Lease Deeds & Master Service Level Pacts</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-[#e2e8f0] flex items-center justify-between">
                <span className="font-label-sm text-[#775a19] font-semibold">Dispute-Avoidance Clauses</span>
                <button
                  onClick={() => onOpenDraftBrief ? onOpenDraftBrief('Commercial & Corporate Contracts', 'Corporate & Business') : setActiveTab('schedule-consultation')}
                  className="font-label-sm text-[#111c2d] font-semibold flex items-center gap-1 group-hover:text-[#775a19] cursor-pointer"
                >
                  Consult <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 4: Power of Attorney & NRI Registry */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-[#e2e8f0] group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#775a19] group-hover:bg-[#fed488] transition-colors">
                    <span className="material-symbols-outlined text-[26px]">vpn_key</span>
                  </div>
                  <span className="font-legal-subtext px-2.5 py-1 bg-[#e7eeff] rounded-full text-[#44474d] font-semibold">
                    24 - 48 Hrs
                  </span>
                </div>
                <h3 className="font-serif text-[20px] text-[#111c2d] font-semibold mb-2 group-hover:text-[#775a19] transition-colors">
                  Power of Attorney & NRI Registry
                </h3>
                <p className="font-body-sm text-[#44474d] leading-relaxed mb-4">
                  Complete end-to-end support for General and Special Power of Attorney, Indian Embassy/Consular apostille, adjudication by SDM, and local implementation.
                </p>
                <ul className="space-y-1.5 font-legal-subtext text-[#111c2d]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>NRI Overseas Power of Attorney Adjudication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>Special PoA for Property Sale, Registry & Litigation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>Revocation Deeds & Public Notice Dispatch</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-[#e2e8f0] flex items-center justify-between">
                <span className="font-label-sm text-[#775a19] font-semibold">Consular Compliance</span>
                <button
                  onClick={() => onOpenDraftBrief ? onOpenDraftBrief('Power of Attorney & NRI Registry', 'Family & Succession') : setActiveTab('schedule-consultation')}
                  className="font-label-sm text-[#111c2d] font-semibold flex items-center gap-1 group-hover:text-[#775a19] cursor-pointer"
                >
                  Consult <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 5: Affidavits, Bayana & Lease Agreements */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-[#e2e8f0] group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#775a19] group-hover:bg-[#fed488] transition-colors">
                    <span className="material-symbols-outlined text-[26px]">contract</span>
                  </div>
                  <span className="font-legal-subtext px-2.5 py-1 bg-[#e7eeff] rounded-full text-[#44474d] font-semibold">
                    Same Day
                  </span>
                </div>
                <h3 className="font-serif text-[20px] text-[#111c2d] font-semibold mb-2 group-hover:text-[#775a19] transition-colors">
                  Affidavits, Bayana & Lease Agreements
                </h3>
                <p className="font-body-sm text-[#44474d] leading-relaxed mb-4">
                  Agreements to Sell (Bayana Agreements) with fortified default liquidated damages clauses, institutional tenancy contracts, and statutory affidavits.
                </p>
                <ul className="space-y-1.5 font-legal-subtext text-[#111c2d]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>Bayana Agreements with Forfeiture Covenants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>Long-Term Registered Commercial Leases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>Indemnity Bonds, Sworn Undertakings & Notary Seals</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-[#e2e8f0] flex items-center justify-between">
                <span className="font-label-sm text-[#775a19] font-semibold">Immediate Turnaround</span>
                <button
                  onClick={() => onOpenDraftBrief ? onOpenDraftBrief('Affidavits & Bayana Agreements', 'Court Affidavits & Deeds') : setActiveTab('schedule-consultation')}
                  className="font-label-sm text-[#111c2d] font-semibold flex items-center gap-1 group-hover:text-[#775a19] cursor-pointer"
                >
                  Consult <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 6: Banking & Title Clearance (TCC) */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-[#e2e8f0] group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#775a19] group-hover:bg-[#fed488] transition-colors">
                    <span className="material-symbols-outlined text-[26px]">account_balance_wallet</span>
                  </div>
                  <span className="font-legal-subtext px-2.5 py-1 bg-[#e7eeff] rounded-full text-[#44474d] font-semibold">
                    3 - 5 Days
                  </span>
                </div>
                <h3 className="font-serif text-[20px] text-[#111c2d] font-semibold mb-2 group-hover:text-[#775a19] transition-colors">
                  Banking & Title Clearance (TCC)
                </h3>
                <p className="font-body-sm text-[#44474d] leading-relaxed mb-4">
                  Issuing certified Title Search Reports & Clearance Certificates for premier private & public scheduled banks, NBFCs, and institutional mortgage finance.
                </p>
                <ul className="space-y-1.5 font-legal-subtext text-[#111c2d]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>Formal Title Clearance Certificate (TCC) for Mortgages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>SARFAESI Due Diligence & Charge Creation Searches</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                    <span>ROC Charge Filings & Registrar of Companies Verification</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-[#e2e8f0] flex items-center justify-between">
                <span className="font-label-sm text-[#775a19] font-semibold">Institutional Grade</span>
                <button
                  onClick={() => onOpenDraftBrief ? onOpenDraftBrief('Banking & Title Clearance (TCC)', 'Banking Title Search') : setActiveTab('schedule-consultation')}
                  className="font-label-sm text-[#111c2d] font-semibold flex items-center gap-1 group-hover:text-[#775a19] cursor-pointer"
                >
                  Consult <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE 4-STEP PAPERWORK ASSURANCE PROCESS */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-0.5 bg-[#775a19]"></span>
              <span className="font-label-sm uppercase tracking-widest text-[#775a19] font-semibold">
                Rigorous Standard Operating Procedure
              </span>
            </div>
            <h2 className="font-serif text-[32px] lg:text-[40px] text-[#111c2d] font-semibold">
              The 4-Step Paperwork Assurance Process
            </h2>
            <p className="font-body-md text-[#44474d] mt-1">
              How our chamber eliminates latent legal liabilities, forged chains of title, and regulatory rejections with clinical methodical precision.
            </p>
          </div>

          {/* Process Pipeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-[#f0f3ff] p-5 rounded-xl flex flex-col justify-between border border-[#e2e8f0]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-[32px] text-[#775a19]/40 font-bold">01</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#775a19] shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">folder_open</span>
                  </div>
                </div>
                <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold mb-2">
                  Initial Briefing & Chain Audit
                </h3>
                <p className="font-body-sm text-[#44474d] leading-relaxed">
                  Exhaustive collection of prior title deeds, allotment letters, possession slips, mutation extracts, and sanction plans to ascertain complete locus standi.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#c5c6cd]/30 text-[#775a19] font-legal-subtext font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">task_alt</span>
                <span>Title Linkage Verified</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#f0f3ff] p-5 rounded-xl flex flex-col justify-between border border-[#e2e8f0]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-[32px] text-[#775a19]/40 font-bold">02</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#775a19] shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">manage_search</span>
                  </div>
                </div>
                <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold mb-2">
                  Forensic Due Diligence
                </h3>
                <p className="font-body-sm text-[#44474d] leading-relaxed">
                  Physical inspection of Sub-Registrar volumes for encumbrances, pending civil suits, court attachments, land acquisition notifications, and local municipal dues.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#c5c6cd]/30 text-[#775a19] font-legal-subtext font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">task_alt</span>
                <span>Zero Liability Certification</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#f0f3ff] p-5 rounded-xl flex flex-col justify-between border border-[#e2e8f0]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-[32px] text-[#775a19]/40 font-bold">03</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#775a19] shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">draw</span>
                  </div>
                </div>
                <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold mb-2">
                  Bespoke Drafting
                </h3>
                <p className="font-body-sm text-[#44474d] leading-relaxed">
                  Formulation of tailored covenants protecting against inheritance claims, boundary disputes, statutory delays, and specifying iron-clad indemnity clauses.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#c5c6cd]/30 text-[#775a19] font-legal-subtext font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">task_alt</span>
                <span>Customized Protection</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#f0f3ff] p-5 rounded-xl flex flex-col justify-between border border-[#e2e8f0]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-[32px] text-[#775a19]/40 font-bold">04</span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#775a19] shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                  </div>
                </div>
                <h3 className="font-serif text-[18px] text-[#111c2d] font-semibold mb-2">
                  Execution & Sub-Registrar Filing
                </h3>
                <p className="font-body-sm text-[#44474d] leading-relaxed">
                  Calculation and purchase of exact e-stamp duty, appointment scheduling, personal chamber presence, witness handling, and prompt post-registration receipt.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#c5c6cd]/30 text-[#775a19] font-legal-subtext font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">task_alt</span>
                <span>Official Government Registry</span>
              </div>
            </div>
          </div>

          {/* Process Stat Bar */}
          <div className="mt-8 bg-white p-5 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#ffdea5]/40 flex items-center justify-center text-[#775a19]">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <div>
                <h4 className="font-serif text-[18px] text-[#111c2d] font-semibold">No Generic Boilerplates</h4>
                <p className="font-body-sm text-[#44474d]">Every deed is verified individually by Adv. Deepak Goyal personally.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-label-sm text-[#111c2d] font-semibold">Average Sub-Registrar Clearance:</span>
              <span className="bg-[#e7eeff] px-3 py-1 rounded text-[#775a19] font-label-md font-semibold">
                Under 120 Minutes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VERIFIED CLIENT TESTIMONIALS */}
      <section className="w-full py-16 bg-[#f0f3ff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-0.5 bg-[#775a19]"></span>
              <span className="font-label-sm uppercase tracking-widest text-[#775a19] font-semibold">
                Client Testimonials
              </span>
              <span className="w-8 h-0.5 bg-[#775a19]"></span>
            </div>
            <h2 className="font-serif text-[32px] lg:text-[40px] text-[#111c2d] font-semibold">
              Proven Trust Across Two Decades
            </h2>
            <p className="font-body-md text-[#44474d] mt-1">
              Read candid reflections from property buyers, enterprise leaders, and families who rely on Advocate Goyal for critical transactions.
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-sm text-[#775a19] uppercase tracking-widest font-semibold">
                      {item.domain}
                    </span>
                    <div className="flex text-[#e9c176]">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                      ))}
                    </div>
                  </div>
                  <p className="font-body-md text-[#111c2d] leading-relaxed italic mb-5">
                    “{item.quote}”
                  </p>
                </div>
                <div className="pt-3 border-t border-[#e7eeff] flex items-center justify-between">
                  <div>
                    <span className="font-serif text-[16px] text-[#111c2d] font-semibold block leading-tight">
                      {item.clientName}
                    </span>
                    <span className="font-legal-subtext text-[#44474d]">
                      {item.designation}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[#775a19]/40 text-[28px]">format_quote</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CHAMBERS & DIRECT APPOINTMENT SCHEDULER */}
      <section className="w-full py-16 bg-white" id="chamber-appointment">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Chamber Info & Contact Directories (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-8 h-0.5 bg-[#775a19]"></span>
                  <span className="font-label-sm uppercase tracking-widest text-[#775a19] font-semibold">
                    Direct Chamber Access
                  </span>
                </div>
                <h2 className="font-serif text-[32px] text-[#111c2d] font-semibold">
                  Chambers & Registry Consultations
                </h2>
                <p className="font-body-md text-[#44474d] mt-1">
                  Prior appointment is recommended for comprehensive title document reviews and drafting consultations.
                </p>
              </div>

              {/* Chamber Location 1 */}
              <div className="bg-[#f0f3ff] p-4 rounded-lg shadow-sm border border-[#e2e8f0]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#775a19] shrink-0 mt-0.5 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">account_balance</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-[18px] text-[#111c2d] font-semibold">
                      High Court Practice Chamber
                    </h4>
                    <p className="font-body-sm text-[#44474d] mt-1">
                      Chamber No. 412, Lawyers Chambers Block II, Delhi High Court, Sher Shah Road, New Delhi 110003
                    </p>
                    <span className="font-legal-subtext text-[#775a19] font-semibold block mt-1">
                      Mon - Fri: 10:00 AM - 04:30 PM (Judicial Hours)
                    </span>
                  </div>
                </div>
              </div>

              {/* Chamber Location 2 */}
              <div className="bg-[#f0f3ff] p-4 rounded-lg shadow-sm border border-[#e2e8f0]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#775a19] shrink-0 mt-0.5 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">home_work</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-[18px] text-[#111c2d] font-semibold">
                      Private Office & Documentation Suite
                    </h4>
                    <p className="font-body-sm text-[#44474d] mt-1">
                      Suite 9, Barakhamba Boulevard, Connaught Place Central, New Delhi 110001
                    </p>
                    <span className="font-legal-subtext text-[#775a19] font-semibold block mt-1">
                      Mon - Sat: 05:00 PM - 08:00 PM (By Prior Booking)
                    </span>
                  </div>
                </div>
              </div>

              {/* Chamber Contacts */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-[#e2e8f0] space-y-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#775a19] text-[20px]">call</span>
                  <div>
                    <span className="font-legal-subtext uppercase tracking-wider text-[#44474d] block">
                      Urgent Inquiries & Registry
                    </span>
                    <a href="tel:+919810244920" className="font-label-md text-[#111c2d] font-semibold hover:text-[#775a19]">
                      +91 98102 44920 / +91 11 2338 XXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2 border-t border-[#e7eeff]">
                  <span className="material-symbols-outlined text-[#775a19] text-[20px]">mail</span>
                  <div>
                    <span className="font-legal-subtext uppercase tracking-wider text-[#44474d] block">
                      Official Brief Ingestion
                    </span>
                    <a href="mailto:legal@advocatedeepakgoyal.in" className="font-label-md text-[#111c2d] font-semibold hover:text-[#775a19]">
                      legal@advocatedeepakgoyal.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Consultation Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 lg:p-8 rounded-xl shadow-md border border-[#e2e8f0]">
                <div className="border-b border-[#e7eeff] pb-3 mb-5">
                  <h3 className="font-serif text-[22px] text-[#111c2d] font-semibold">
                    Request Document Scrutiny & Appointment
                  </h3>
                  <p className="font-body-sm text-[#44474d] mt-1">
                    Fill the brief details below. Our chamber clerk will review and confirm availability within 4 business hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-sm text-[#111c2d] font-semibold mb-1">
                        Full Legal Name *
                      </label>
                      <input
                        className="w-full bg-[#f0f3ff] text-[#111c2d] text-sm px-3 py-2.5 rounded border border-[#c5c6cd] focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                        placeholder="e.g. Ramesh Kumar Verma"
                        required
                        type="text"
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block font-label-sm text-[#111c2d] font-semibold mb-1">
                        Phone Number (with WhatsApp) *
                      </label>
                      <input
                        className="w-full bg-[#f0f3ff] text-[#111c2d] text-sm px-3 py-2.5 rounded border border-[#c5c6cd] focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                        placeholder="+91 98XXX XXXXX"
                        required
                        type="tel"
                        value={formData.clientContact}
                        onChange={(e) => setFormData({ ...formData, clientContact: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-sm text-[#111c2d] font-semibold mb-1">
                        Email Address *
                      </label>
                      <input
                        className="w-full bg-[#f0f3ff] text-[#111c2d] text-sm px-3 py-2.5 rounded border border-[#c5c6cd] focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                        placeholder="ramesh@company.com"
                        required
                        type="email"
                        value={formData.clientEmail}
                        onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block font-label-sm text-[#111c2d] font-semibold mb-1">
                        Required Legal Service *
                      </label>
                      <select
                        className="w-full bg-[#f0f3ff] text-[#111c2d] text-sm px-3 py-2.5 rounded border border-[#c5c6cd] focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      >
                        <option value="Sale Deed / Property Registry Scrutiny">Sale Deed / Property Registry Scrutiny</option>
                        <option value="Will Drafting, Codicil or Probate">Will Drafting, Codicil or Probate</option>
                        <option value="Power of Attorney (GPA/SPA/NRI Attestation)">Power of Attorney (GPA/SPA/NRI Attestation)</option>
                        <option value="Business Contract / Partnership Agreement">Business Contract / Partnership Agreement</option>
                        <option value="Agreement to Sell (Bayana) / Commercial Lease">Agreement to Sell (Bayana) / Commercial Lease</option>
                        <option value="Bank Title Search Report (TCC)">Bank Title Search Report (TCC)</option>
                        <option value="Other Legal Consultation">Other Legal Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-sm text-[#111c2d] font-semibold mb-1">
                        Preferred Date
                      </label>
                      <input
                        className="w-full bg-[#f0f3ff] text-[#111c2d] text-sm px-3 py-2.5 rounded border border-[#c5c6cd] focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block font-label-sm text-[#111c2d] font-semibold mb-1">
                        Consultation Venue
                      </label>
                      <select
                        className="w-full bg-[#f0f3ff] text-[#111c2d] text-sm px-3 py-2.5 rounded border border-[#c5c6cd] focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                        value={formData.preferredVenue}
                        onChange={(e) => setFormData({ ...formData, preferredVenue: e.target.value })}
                      >
                        <option value="hc">Delhi High Court Chamber (Morning 10:00 AM - 04:30 PM)</option>
                        <option value="cp">Connaught Place Suite (Evening 05:00 PM - 08:00 PM)</option>
                        <option value="vc">Virtual Video Conference (Encrypted Google Meet)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-label-sm text-[#111c2d] font-semibold mb-1">
                      Brief Overview of Property / Matter
                    </label>
                    <textarea
                      className="w-full bg-[#f0f3ff] text-[#111c2d] text-sm p-3 rounded border border-[#c5c6cd] focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                      placeholder="Provide property location, chain of documents available, or specific urgency..."
                      rows={3}
                      value={formData.briefSummary}
                      onChange={(e) => setFormData({ ...formData, briefSummary: e.target.value })}
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      id="confidentiality_consent"
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 accent-[#775a19]"
                    />
                    <label htmlFor="confidentiality_consent" className="font-legal-subtext text-[#44474d] cursor-pointer">
                      I consent to the processing of this brief under strict advocate-client privilege. I understand submitting this form does not unilaterally create a formal vakalatnama or advocate retainership until confirmed by the chamber.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-black text-white hover:bg-[#0d1c32] text-sm py-3 rounded transition-all font-semibold flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-75"
                  >
                    {submitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                        <span>Transmitting Privileged Brief...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[20px]">send</span>
                        <span>Submit Brief for Chamber Review</span>
                      </>
                    )}
                  </button>
                </form>

                {bookingSuccess && (
                  <div className="mt-4 p-3 bg-[#e7eeff] text-[#111c2d] rounded border border-[#775a19]/30 text-center text-xs">
                    <span className="text-[#775a19] font-bold">Brief Dispatched Successfully.</span> Chamber Registry will reach out via phone & email within 4 hours.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
