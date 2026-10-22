import React, { useState } from 'react';
import { INSTRUMENTS } from '../data/legalData';
import { InstrumentItem, NavTab } from '../types';

interface DocumentationViewProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenDraftBrief?: (instrumentTitle: string, category: string) => void;
}

export const DocumentationView: React.FC<DocumentationViewProps> = ({
  setActiveTab,
  onOpenDraftBrief
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Intake Sidebar Form State
  const [clientName, setClientName] = useState('');
  const [contactMobile, setContactMobile] = useState('');
  const [intakeCategory, setIntakeCategory] = useState('Property & Real Estate');
  const [reviewNature, setReviewNature] = useState('Pre-purchase title search');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [intakeSubmitted, setIntakeSubmitted] = useState(false);

  // Filter instruments
  const filteredInstruments = INSTRUMENTS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;

    const query = searchTerm.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.keywords.toLowerCase().includes(query) ||
      item.categoryLabel.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: 'All Instruments' },
    { id: 'real-estate', label: 'Property & Real Estate' },
    { id: 'succession', label: 'Family & Succession' },
    { id: 'corporate', label: 'Corporate & Business' },
    { id: 'notarial', label: 'Court Affidavits & Deeds' }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !contactMobile) return;
    setIntakeSubmitted(true);
    setTimeout(() => {
      setIntakeSubmitted(false);
      setClientName('');
      setContactMobile('');
      setSelectedFile(null);
    }, 7000);
  };

  const handleBriefClick = (instrument: InstrumentItem) => {
    if (onOpenDraftBrief) {
      onOpenDraftBrief(instrument.title, instrument.categoryLabel);
    } else {
      setIntakeCategory(instrument.categoryLabel);
      const intakeElement = document.getElementById('review-intake-card');
      if (intakeElement) {
        intakeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Visual Accent / Breadcrumb Header */}
      <section className="relative bg-[#0d1c32] text-white overflow-hidden pb-14 pt-8">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <pattern height="10" id="grid-pattern" patternUnits="userSpaceOnUse" width="10">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#c5c6cd]/15 font-legal-subtext text-[#76849f]">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('about')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Advocate Chambers
              </button>
              <span>/</span>
              <span className="text-[#e9c176]">Institutional Registry</span>
              <span>/</span>
              <span className="text-white font-semibold">Documentation Portfolio 2025</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-[#e9c176]">
                <span className="material-symbols-outlined text-[14px]">verified_user</span>
                Standard Operating Protocol (SOP-LEG-9)
              </span>
              <span className="hidden md:inline text-[#c5c6cd]/30">•</span>
              <span className="hidden md:inline">Indian Registration Act, 1908 & Stamp Manual Compliant</span>
            </div>
          </div>

          <div className="pt-8 max-w-4xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d8e3fb]/15 rounded-full text-[#ffdea5] text-xs font-semibold mb-3">
              <span className="material-symbols-outlined text-[16px]">edit_document</span>
              <span>Judicially Tested Instruments</span>
            </div>
            <h1 className="font-serif text-[34px] sm:text-[44px] text-white font-bold tracking-tight">
              Legal Drafting & Documentation Services
            </h1>
            <p className="mt-3 font-body-lg text-[#76849f] leading-relaxed">
              Meticulous legal paperwork crafted with zero ambiguity to insulate your assets, business ventures, and family legacy against prolonged litigation. Hand-drafted under senior supervision.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 pt-6 border-t border-[#c5c6cd]/15">
            <div>
              <span className="font-serif text-[28px] sm:text-[32px] text-[#ffdea5] font-bold block">
                14,200+
              </span>
              <span className="font-legal-subtext text-[#76849f] uppercase tracking-wider">
                Deeds Registered Without Challenge
              </span>
            </div>
            <div>
              <span className="font-serif text-[28px] sm:text-[32px] text-[#ffdea5] font-bold block">
                30 Yrs
              </span>
              <span className="font-legal-subtext text-[#76849f] uppercase tracking-wider">
                Historical Chain Analysis Depth
              </span>
            </div>
            <div>
              <span className="font-serif text-[28px] sm:text-[32px] text-[#ffdea5] font-bold block">
                24-48 H
              </span>
              <span className="font-legal-subtext text-[#76849f] uppercase tracking-wider">
                Expedited Chamber Vetting
              </span>
            </div>
            <div>
              <span className="font-serif text-[28px] sm:text-[32px] text-[#ffdea5] font-bold block">
                100%
              </span>
              <span className="font-legal-subtext text-[#76849f] uppercase tracking-wider">
                Sec. 126 Evidence Act Shield
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Search & Filtering Dock */}
      <section className="sticky top-20 z-40 bg-[#f0f3ff] border-y border-[#e2e8f0] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-3">
          <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
            {/* Live Search Field */}
            <div className="relative flex-1 max-w-xl">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#75777e] text-[18px]">
                search
              </span>
              <input
                className="w-full bg-white text-[#111c2d] text-sm pl-10 pr-16 py-2.5 rounded shadow-sm border border-[#c5c6cd] focus:outline-none focus:ring-2 focus:ring-[#775a19] transition-all"
                placeholder="Search specific instrument (e.g., Sale Deed, Codicil, Gift Deed, GPA)..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#75777e] hover:text-[#111c2d]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#0d1c32] text-white shadow-sm'
                      : 'bg-[#e7eeff] text-[#111c2d] hover:bg-[#dee8ff]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalogue & Intake Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Primary Instruments Column (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {filteredInstruments.length === 0 ? (
              <div className="bg-[#f0f3ff] p-12 rounded-xl text-center border border-[#e2e8f0]">
                <span className="material-symbols-outlined text-[#75777e] text-5xl mb-2">find_in_page</span>
                <h3 className="font-serif text-[22px] text-[#111c2d] font-semibold">
                  No Documentation Category Matched
                </h3>
                <p className="font-body-sm text-[#44474d] mt-1 max-w-md mx-auto">
                  Chamber drafting encompasses all civil, commercial, and property paperwork in India. Please contact the chamber registry directly for non-standard deed inquiries.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 px-4 py-2 bg-[#0d1c32] text-white rounded text-xs font-semibold cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              filteredInstruments.map((instrument) => (
                <div
                  key={instrument.id}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-3 border border-[#e2e8f0]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                            instrument.badgeType === 'primary'
                              ? 'bg-[#ffdea5] text-[#261900]'
                              : instrument.badgeType === 'secondary'
                              ? 'bg-[#fed488] text-[#785a1a]'
                              : 'bg-[#dee8ff] text-[#111c2d]'
                          }`}
                        >
                          {instrument.badge}
                        </span>
                        <span className="font-legal-subtext text-[#44474d] flex items-center gap-1">
                          <span className="material-symbols-outlined text-[13px] text-[#775a19]">
                            schedule
                          </span>
                          {instrument.turnaround}
                        </span>
                      </div>
                      <h3 className="font-serif text-[20px] text-[#111c2d] font-semibold">
                        {instrument.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => handleBriefClick(instrument)}
                      className="self-start sm:self-center px-4 py-1.5 bg-[#0d1c32] text-white hover:bg-[#775a19] transition-colors rounded text-xs font-semibold flex items-center gap-1 cursor-pointer whitespace-nowrap shadow-sm"
                    >
                      <span>Draft Brief</span>
                      <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                    </button>
                  </div>

                  <p className="font-body-sm text-[#44474d] leading-relaxed">
                    {instrument.description}
                  </p>

                  {(instrument.clientRequirements || instrument.advocateSafeguards) && (
                    <div className="bg-[#f0f3ff] p-3.5 rounded grid grid-cols-1 md:grid-cols-2 gap-4 font-legal-subtext border border-[#e2e8f0]/80">
                      {instrument.clientRequirements && (
                        <div>
                          <span className="text-[#111c2d] font-bold block mb-1 uppercase tracking-wider">
                            Required Client Documentation:
                          </span>
                          <ul className="list-disc list-inside text-[#44474d] space-y-0.5">
                            {instrument.clientRequirements.map((req, i) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {instrument.advocateSafeguards && (
                        <div>
                          <span className="text-[#111c2d] font-bold block mb-1 uppercase tracking-wider">
                            Advocate Goyal&apos;s Legal Safeguards:
                          </span>
                          <ul className="list-disc list-inside text-[#44474d] space-y-0.5">
                            {instrument.advocateSafeguards.map((safe, i) => (
                              <li key={i}>{safe}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Asymmetric Sidebar: Quick Consultation & Chamber Seal (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Document Review Intake Form Card */}
            <div
              className="bg-white p-6 rounded-xl shadow-lg border border-[#e2e8f0] relative"
              id="review-intake-card"
            >
              <div className="flex items-center gap-1.5 text-[#775a19] mb-2">
                <span className="material-symbols-outlined text-[20px]">enhanced_encryption</span>
                <span className="font-legal-subtext uppercase tracking-widest font-bold">
                  Confidential Registry Direct
                </span>
              </div>
              <h3 className="font-serif text-[22px] text-[#111c2d] font-bold leading-tight">
                Send Draft / Documents for Preliminary Review
              </h3>
              <p className="font-body-sm text-[#44474d] mt-1 mb-4 leading-relaxed">
                Directly transmitted to Senior Advocate Deepak Goyal&apos;s desk for non-disclosure assessment.
              </p>

              {intakeSubmitted ? (
                <div className="p-4 bg-[#ffdea5] text-[#261900] rounded text-center text-xs font-semibold flex flex-col items-center gap-1.5">
                  <span className="material-symbols-outlined text-2xl">verified</span>
                  <span>Brief Dispatched Securely.</span>
                  <span className="font-normal text-gray-800">
                    Chamber clerk will acknowledge receipt within 4 chamber hours via phone/WhatsApp.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleIntakeSubmit} className="flex flex-col gap-3">
                  <div>
                    <label className="text-xs text-[#111c2d] block mb-1 font-semibold">
                      Client / Organization Name *
                    </label>
                    <input
                      className="w-full bg-[#f0f3ff] text-[#111c2d] text-sm px-3 py-2 rounded border border-[#c5c6cd] focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                      placeholder="e.g. Rahul Singhal / Apex Infra Ltd."
                      required
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#111c2d] block mb-1 font-semibold">
                      Contact Mobile Number *
                    </label>
                    <input
                      className="w-full bg-[#f0f3ff] text-[#111c2d] text-sm px-3 py-2 rounded border border-[#c5c6cd] focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                      placeholder="+91 98XXX XXXXX"
                      required
                      type="tel"
                      value={contactMobile}
                      onChange={(e) => setContactMobile(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#111c2d] block mb-1 font-semibold">
                      Document Category *
                    </label>
                    <select
                      className="w-full bg-[#f0f3ff] text-[#111c2d] text-sm px-3 py-2 rounded border border-[#c5c6cd] focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                      value={intakeCategory}
                      onChange={(e) => setIntakeCategory(e.target.value)}
                    >
                      <option value="Property & Real Estate">Property & Real Estate Conveyancing</option>
                      <option value="Family & Succession">Family Settlement & Testamentary Will</option>
                      <option value="Corporate & Business">Corporate & Commercial Agreements</option>
                      <option value="Banking Title Search">30-Year Title Search & Due Diligence</option>
                      <option value="Court Affidavits & Deeds">Court Affidavits & Legal Notices</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-[#111c2d] block mb-1 font-semibold">
                      Nature of Legal Review *
                    </label>
                    <div className="flex flex-col gap-1.5 font-legal-subtext text-[#111c2d] pt-1">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          checked={reviewNature === 'Pre-purchase title search'}
                          onChange={() => setReviewNature('Pre-purchase title search')}
                          className="accent-[#775a19]"
                          name="reviewNature"
                          type="radio"
                        />
                        <span>Pre-purchase 30-year title due diligence</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          checked={reviewNature === 'Drafting fresh instrument'}
                          onChange={() => setReviewNature('Drafting fresh instrument')}
                          className="accent-[#775a19]"
                          name="reviewNature"
                          type="radio"
                        />
                        <span>Drafting fresh instrument from scratch</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          checked={reviewNature === 'Vetting counterparty draft'}
                          onChange={() => setReviewNature('Vetting counterparty draft')}
                          className="accent-[#775a19]"
                          name="reviewNature"
                          type="radio"
                        />
                        <span>Vetting & redlining counterparty draft</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-[#111c2d] block mb-1 font-semibold">
                      Upload Draft / Scanned Title (PDF/Images)
                    </label>
                    <div className="relative bg-[#f0f3ff] border border-dashed border-[#c5c6cd] rounded p-4 text-center cursor-pointer hover:bg-[#e7eeff] transition-colors group">
                      <input
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                      />
                      <span className="material-symbols-outlined text-[#75777e] group-hover:text-[#775a19] text-[24px]">
                        cloud_upload
                      </span>
                      <p className="font-legal-subtext text-[#44474d] mt-1">
                        {selectedFile ? (
                          <span className="text-[#775a19] font-bold">
                            Attached: {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                          </span>
                        ) : (
                          'Click or drag deed PDF (Max 25MB)'
                        )}
                      </p>
                    </div>
                  </div>

                  <button
                    className="w-full bg-[#775a19] text-white hover:bg-[#0d1c32] py-2.5 rounded font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Submit Draft for Chamber Vetting</span>
                  </button>

                  <div className="pt-1 flex items-start gap-1 font-legal-subtext text-[#44474d]">
                    <span className="material-symbols-outlined text-[#775a19] text-[16px] shrink-0 mt-0.5">
                      lock
                    </span>
                    <span>
                      <strong>100% Legal Privilege:</strong> Submissions are strictly governed under Section 126 of the Indian Evidence Act, 1872. Zero data is stored on public third-party clouds.
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* Advocate Monogram & Certification Seal Card */}
            <div className="bg-[#0d1c32] text-white p-6 rounded-xl shadow-md border border-[#c5c6cd]/20">
              <div className="flex items-center gap-3 pb-3 border-b border-[#c5c6cd]/20">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#ffdea5] font-serif text-[20px] font-bold">
                  DG
                </div>
                <div>
                  <h4 className="font-serif text-[18px] text-white font-bold">Chamber Certification</h4>
                  <p className="font-legal-subtext text-[#ffdea5]">Supreme Court & Delhi High Court</p>
                </div>
              </div>

              <div className="py-4 space-y-3 font-body-sm text-[#76849f]">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#ffdea5] text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <p>Every draft is custom-crafted to preempt jurisdiction conflicts under Section 20 of CPC.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#ffdea5] text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <p>Precise valuation calculations for Stamp Duty to eliminate future penalties under Section 33 of Indian Stamp Act.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#ffdea5] text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <p>On-site execution support available at Sub-Registrar offices across New Delhi, Gurugram, and Noida.</p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#c5c6cd]/20 flex items-center justify-between font-legal-subtext text-[#76849f]">
                <span>Direct Chamber Line:</span>
                <a href="tel:+919810244920" className="text-white font-bold hover:text-[#ffdea5]">
                  +91 98102 44920
                </a>
              </div>
            </div>

            {/* High-Impact Editorial Image Card */}
            <div className="relative rounded-xl overflow-hidden shadow-md h-64 bg-[#d8e3fb]">
              <img
                alt="Advocate Deepak Goyal Law Chamber Desk"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdnv53mRWJAgD22DZTWSmolQ6GkF38o0pOjOVtS8AlElVKU07DM3M6YHG1u9H7mE7BOLWVxwolwXBN9ccg61EGWO7WNEokUtjB-fhGzkyk97zJ3X6m8D8ntT6lUkVNgUHHpMDcwxyhnpx8bcSWIt6hsFqfkm-yGBA_SvWitjHOuLD_0DPYNLnSF2lnIMb2bF6XdRlSy-gIoHfh0C6e_uOsC1_SRBxx_2wnvcbUGSLSSzcK9sgGAqf1ZA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1c32] via-[#0d1c32]/40 to-transparent flex flex-col justify-end p-5">
                <span className="font-legal-subtext text-[#ffdea5] uppercase tracking-widest font-semibold">
                  Chamber Archival Standards
                </span>
                <h4 className="font-serif text-[18px] text-white font-bold">
                  Uncompromising precision in every covenant.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT MAKES ADVOCATE DEEPAK GOYAL'S DRAFTING BULLETPROOF? */}
      <section className="bg-[#f0f3ff] py-16 border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center max-w-3xl mx-auto pb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#dee8ff] rounded-full text-[#775a19] text-xs font-semibold mb-2">
              <span className="material-symbols-outlined text-[16px]">shield</span>
              <span>Judicial Rigor & Due Diligence</span>
            </div>
            <h2 className="font-serif text-[32px] lg:text-[40px] text-[#111c2d] font-bold tracking-tight">
              What Makes Advocate Deepak Goyal&apos;s Drafting Bulletproof?
            </h2>
            <p className="mt-2 font-body-lg text-[#44474d] leading-relaxed">
              More than 90% of property litigation in Indian courts originates from poorly phrased clauses, incomplete title chains, or un-adjudicated stamp duties. Our chamber adheres to five unyielding pillars.
            </p>
          </div>

          {/* 5 Pillars Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col gap-3">
              <div className="w-12 h-12 rounded bg-[#fed488] text-[#785a1a] flex items-center justify-center font-serif font-bold text-xl">
                01
              </div>
              <h3 className="font-serif text-[20px] text-[#111c2d] font-bold">
                Zero-Loophole Clause Engineering
              </h3>
              <p className="font-body-sm text-[#44474d] leading-relaxed">
                Every sentence is stress-tested against decades of High Court and Supreme Court precedents. We eliminate vague words like &quot;reasonable time&quot; or &quot;mutually decided&quot; in favor of strict, date-definite calendar covenants.
              </p>
              <div className="mt-auto pt-2 font-legal-subtext text-[#775a19] font-semibold">
                • Avoids Ambiguity Under Sec. 92, Indian Evidence Act
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col gap-3">
              <div className="w-12 h-12 rounded bg-[#fed488] text-[#785a1a] flex items-center justify-center font-serif font-bold text-xl">
                02
              </div>
              <h3 className="font-serif text-[20px] text-[#111c2d] font-bold">
                Absolute Statutory Compliance
              </h3>
              <p className="font-body-sm text-[#44474d] leading-relaxed">
                Full synchronization with the Indian Stamp Act, 1899, Registration Act, 1908, and state revenue manuals. We guarantee correct stamp duty schedules so instruments are fully admissible in court without impounding.
              </p>
              <div className="mt-auto pt-2 font-legal-subtext text-[#775a19] font-semibold">
                • Pre-Adjudicated Stamp Assessment Protocol
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col gap-3">
              <div className="w-12 h-12 rounded bg-[#fed488] text-[#785a1a] flex items-center justify-center font-serif font-bold text-xl">
                03
              </div>
              <h3 className="font-serif text-[20px] text-[#111c2d] font-bold">
                30-Year Historical Tracing
              </h3>
              <p className="font-body-sm text-[#44474d] leading-relaxed">
                We do not draft in isolation. Every property conveyance is cross-checked against unbroken parent deeds, municipal mutation extracts, encumbrance certificates, and pending court summons to expose covert liens.
              </p>
              <div className="mt-auto pt-2 font-legal-subtext text-[#775a19] font-semibold">
                • Direct Sub-Registrar Book I Record Scrutiny
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col gap-3">
              <div className="w-12 h-12 rounded bg-[#fed488] text-[#785a1a] flex items-center justify-center font-serif font-bold text-xl">
                04
              </div>
              <h3 className="font-serif text-[20px] text-[#111c2d] font-bold">
                Unyielding Indemnity Protections
              </h3>
              <p className="font-body-sm text-[#44474d] leading-relaxed">
                Uncapped indemnity clauses that bind not just the signing party, but their future legal heirs, assignees, and estate representatives against concealed encumbrances, third-party suits, or tax arrears.
              </p>
              <div className="mt-auto pt-2 font-legal-subtext text-[#775a19] font-semibold">
                • Personal Liability & Specific Performance Shield
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e2e8f0] flex flex-col gap-3">
              <div className="w-12 h-12 rounded bg-[#fed488] text-[#785a1a] flex items-center justify-center font-serif font-bold text-xl">
                05
              </div>
              <h3 className="font-serif text-[20px] text-[#111c2d] font-bold">
                Plain-Language Transparency
              </h3>
              <p className="font-body-sm text-[#44474d] leading-relaxed">
                We abandon convoluted, archaic Latin jargon that conceals obligations. Our drafts are razor-sharp, elegant, and crystal-clear so both clients and trial judges can parse the original intent effortlessly.
              </p>
              <div className="mt-auto pt-2 font-legal-subtext text-[#775a19] font-semibold">
                • Editorial Composure & Executive Clarity
              </div>
            </div>

            {/* Pillar 6 / Highlight card */}
            <div className="bg-[#0d1c32] text-white p-6 rounded-xl shadow-md border border-[#c5c6cd]/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#ffdea5] mb-2">
                  <span className="material-symbols-outlined text-[20px]">balance</span>
                  <span className="font-label-sm font-semibold uppercase tracking-wider">
                    The Goyal Guarantee
                  </span>
                </div>
                <h3 className="font-serif text-[20px] text-white font-bold">
                  Litigation-Proof Construction
                </h3>
                <p className="mt-2 font-body-sm text-[#76849f] leading-relaxed">
                  &quot;A correctly drafted legal deed is not an expense—it is your permanent insurance policy against the years of financial and mental exhaustion in civil litigation courts.&quot;
                </p>
              </div>
              <div className="pt-4 border-t border-[#c5c6cd]/20 flex items-center gap-2">
                <span className="font-legal-subtext text-[#e9c176]">
                  Deepak Goyal, Senior Advocate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Methodology Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 flex flex-col gap-4">
            <span className="font-label-sm text-[#775a19] uppercase tracking-widest font-bold">
              Chamber Execution Methodology
            </span>
            <h2 className="font-serif text-[32px] lg:text-[40px] text-[#111c2d] font-bold leading-tight">
              From First Title Scrutiny to Sub-Registrar Stamping
            </h2>
            <p className="font-body-md text-[#44474d] leading-relaxed">
              We oversee the entire lifecycle of document creation. No junior outsourcing, no template copy-pasting. Each instrument is prepared with surgical care.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#dee8ff] text-[#111c2d] flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </span>
                <div>
                  <h4 className="font-serif text-[18px] text-[#111c2d] font-semibold">
                    Parent Document Intake & Title Chain Audit
                  </h4>
                  <p className="font-body-sm text-[#44474d] mt-0.5">
                    Physical scrutiny of original title records and Sub-Registrar office records.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#dee8ff] text-[#111c2d] flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </span>
                <div>
                  <h4 className="font-serif text-[18px] text-[#111c2d] font-semibold">
                    Custom Tailored Drafting & Redline Negotiation
                  </h4>
                  <p className="font-body-sm text-[#44474d] mt-0.5">
                    Balancing counterparty interests while guaranteeing your indemnity protection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#dee8ff] text-[#111c2d] flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </span>
                <div>
                  <h4 className="font-serif text-[18px] text-[#111c2d] font-semibold">
                    Sub-Registrar Registration & Mutation Follow-up
                  </h4>
                  <p className="font-body-sm text-[#44474d] mt-0.5">
                    Chamber counsel accompanies you for execution and registers the municipal khata transfer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#e7eeff] border border-[#e2e8f0]">
              <img
                alt="Law chamber conference table"
                className="w-full h-80 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBN5CEgP21rUSqhplqEblaO66B1C6Sx43q6C1wkV8M9ar2wJ0yN39U6T9W0iUDoiKcdZvT6nmd2A1WzraPWaD-2bGopm2JiAJONzYfZqPMi_pcVya7FmpR1oQ7s2kP4KkiUimaLi20-B2q9OCNUu0XA34Ri9ro3BJSh8kaozCWbfUjib8HBDqRpV6YGQoCbANh4Di72PWaNiTiQ3BwdSwRfQALXRIXr2I0vpzVyMGN5zSbSgXdreekvA"
              />
              <div className="p-4 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#e2e8f0]">
                <div>
                  <span className="text-sm font-bold text-[#111c2d] block">
                    Need urgent deed registration this week?
                  </span>
                  <span className="font-legal-subtext text-[#44474d]">
                    Priority 24-Hour turnaround available for Bayana & ATS.
                  </span>
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById('review-intake-card');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="px-4 py-2 bg-[#0d1c32] text-white hover:bg-[#775a19] transition-colors rounded text-xs font-semibold whitespace-nowrap cursor-pointer shadow-sm"
                >
                  Request Fast-Track
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
