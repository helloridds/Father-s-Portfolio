import React, { useState } from 'react';
import { INSTRUMENTS, ADVOCATE_INFO } from '../data/legalData';
import { InstrumentItem, NavTab } from '../types';
import { dispatchToAdvocatePhone } from '../utils/sendNotification';

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
  const [intakeService, setIntakeService] = useState('Property Papers & Registry');
  const [notes, setNotes] = useState('');
  const [intakeSubmitted, setIntakeSubmitted] = useState(false);

  // Filter instruments
  const filteredInstruments = INSTRUMENTS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;

    const query = searchTerm.toLowerCase().trim();
    if (!query) return matchesCategory;

    return (
      matchesCategory &&
      (item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.keywords.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query))
    );
  });

  const categories = [
    { id: 'all', label: 'All Services (सभी सेवाएं)' },
    { id: 'certificate', label: 'Certificates (Marriage / Birth / Death)' },
    { id: 'property', label: 'Property Papers & Registry' },
    { id: 'succession', label: 'Will & Family Settlements' },
    { id: 'notarial', label: 'Affidavits & Legal Notices' }
  ];

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !contactMobile) return;

    // Send to father's phone via WhatsApp
    dispatchToAdvocatePhone({
      formType: 'Paperwork Intake Desk',
      name: clientName,
      phone: contactMobile,
      serviceOrMatter: intakeService,
      details: notes
    });

    setIntakeSubmitted(true);
    setTimeout(() => {
      setIntakeSubmitted(false);
      setClientName('');
      setContactMobile('');
      setNotes('');
    }, 4500);
  };

  return (
    <div className="flex flex-col w-full bg-[#f9f9ff]">
      {/* Header Banner */}
      <section className="bg-[#0d1c32] text-white py-12 px-6 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#e9c176]/15 border border-[#e9c176]/30 text-[#e9c176] text-xs font-semibold mb-3">
            <span className="material-symbols-outlined text-[15px]">description</span>
            Jaipur Sessions Court • Legal Documentation Desk
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
            Paperwork & Documentation Services
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
            Simple and reliable legal paperwork: Marriage Certificate, Death Certificate, Birth Certificate, Property Papers, Registry (बैनामा), Will (वसीयत), Rent Agreements, and Affidavits.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Instruments List (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Search & Category Filter */}
          <div className="bg-white p-4 rounded-xl border border-[#c5c6cd]/30 shadow-sm space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search paperwork (e.g. marriage certificate, death, registry, will, affidavit)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
              />
              <span className="material-symbols-outlined text-[18px] text-[#76849f] absolute left-2.5 top-2.5">
                search
              </span>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2 pt-1">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                    selectedCategory === c.id
                      ? 'bg-[#0d1c32] text-white shadow-sm'
                      : 'bg-[#f0f3ff] text-[#44474d] hover:bg-[#dee8ff]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Instruments Cards */}
          <div className="space-y-4">
            {filteredInstruments.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl border border-[#c5c6cd]/30 shadow-sm hover:border-[#775a19]/40 transition-all space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#dee8ff] text-[#0d1c32]">
                      {item.badge}
                    </span>
                    <span className="text-xs text-[#76849f]">• {item.categoryLabel}</span>
                  </div>
                  <span className="text-xs font-semibold text-[#775a19] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    {item.turnaround}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#0d1c32]">
                  {item.title}
                </h3>

                <p className="text-xs text-[#44474d] leading-relaxed">
                  {item.description}
                </p>

                {item.clientRequirements && (
                  <div className="p-3 bg-[#f0f3ff] rounded-lg border border-[#c5c6cd]/20">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#775a19] block mb-1.5">
                      Required Documents (जरूरी दस्तावेज):
                    </span>
                    <ul className="text-xs text-[#44474d] space-y-1 list-disc list-inside">
                      {item.clientRequirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#c5c6cd]/20">
                  <span className="text-[11px] text-[#76849f]">
                    Court: Jaipur Sessions Court Complex
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/91${ADVOCATE_INFO.phone}?text=${encodeURIComponent(`Hello Advocate Deepak Goyal ji, I need help with ${item.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-semibold flex items-center gap-1 shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[15px]">chat</span>
                      WhatsApp
                    </a>

                    <button
                      onClick={() => {
                        if (onOpenDraftBrief) {
                          onOpenDraftBrief(item.title, item.categoryLabel);
                        }
                      }}
                      className="px-4 py-1.5 bg-[#0d1c32] hover:bg-[#1a2f4c] text-white rounded text-xs font-bold transition-colors"
                    >
                      Inquire / Get Prepared
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Instant Document Desk Form (4 cols) - SENDS DIRECTLY TO FATHER'S PHONE */}
        <div className="lg:col-span-4">
          <div className="bg-white p-6 rounded-2xl border border-[#c5c6cd]/40 shadow-sm sticky top-28 space-y-4">
            <div className="border-b border-[#c5c6cd]/20 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#775a19]">
                Quick Help Desk
              </span>
              <h3 className="font-serif text-lg font-bold text-[#0d1c32] mt-0.5">
                Need Help with Any Paperwork?
              </h3>
              <p className="text-xs text-[#44474d] mt-1">
                Enter your name and number below. It goes directly to Advocate Deepak Goyal at <strong>{ADVOCATE_INFO.phoneFormatted}</strong>.
              </p>
            </div>

            {intakeSubmitted ? (
              <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <span className="material-symbols-outlined text-emerald-600 text-[32px]">check_circle</span>
                <h4 className="font-bold text-xs text-[#0d1c32]">Request Sent to Advocate's Phone!</h4>
                <p className="text-[11px] text-[#44474d]">
                  Details sent directly to Advocate Deepak Goyal at 9828089628. You will receive a response shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleIntakeSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="font-semibold text-[#0d1c32] block mb-1">
                    Your Name (नाम) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Sharma"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#0d1c32] block mb-1">
                    Mobile Number (मोबाइल नंबर) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98280XXXXX"
                    value={contactMobile}
                    onChange={(e) => setContactMobile(e.target.value)}
                    className="w-full px-3 py-2 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#0d1c32] block mb-1">
                    Paperwork Needed
                  </label>
                  <select
                    value={intakeService}
                    onChange={(e) => setIntakeService(e.target.value)}
                    className="w-full px-3 py-2 border border-[#c5c6cd] rounded-lg text-xs bg-white focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                  >
                    <option value="Marriage Certificate">Marriage Certificate (विवाह प्रमाण पत्र)</option>
                    <option value="Death Certificate">Death Certificate (मृत्यु प्रमाण पत्र)</option>
                    <option value="Birth Certificate">Birth Certificate (जन्म प्रमाण पत्र)</option>
                    <option value="Property Papers & Registry">Property Papers & Registry (मकान/जमीन)</option>
                    <option value="Agreement to Sell / Bayana">Agreement to Sell / Bayana</option>
                    <option value="Will / Vasiyat">Will / Vasiyat (वसीयत)</option>
                    <option value="Rent Agreement & Notary">Rent Agreement & Notary</option>
                    <option value="Legal Notice">Legal Notice (कानूनी नोटिस)</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-[#0d1c32] block mb-1">
                    Notes / Query (विवरण)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you require..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#e9c176] hover:bg-[#ffdea5] text-[#0d1c32] font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 shadow"
                >
                  <span className="material-symbols-outlined text-[16px]">send</span>
                  Send Directly to Phone (9828089628)
                </button>
              </form>
            )}

            <div className="pt-2 border-t border-[#c5c6cd]/20 flex flex-col gap-1.5 text-[11px] text-[#76849f]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-emerald-600">verified</span>
                Direct communication with Advocate Deepak Goyal
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#775a19]">schedule</span>
                Sessions Court, Jaipur: 10:00 AM – 07:30 PM
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
