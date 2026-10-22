import React, { useState } from 'react';
import { NavTab } from '../types';
import { ADVOCATE_INFO } from '../data/legalData';

interface TrackRecordViewProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenDraftBrief?: (instrumentTitle: string, category: string) => void;
}

export const TrackRecordView: React.FC<TrackRecordViewProps> = ({
  setActiveTab,
  onOpenDraftBrief
}) => {
  const [filter, setFilter] = useState<string>('all');

  const cases = [
    {
      id: 'case-1',
      domain: 'property',
      domainLabel: 'Property Registry',
      title: 'Averting Undisclosed Bank Loan Dispute on Jaipur Residential Plot',
      location: 'Mansarovar, Jaipur',
      outcome: 'Buyer Protected from Fraudulent Seller',
      summary: 'A client was about to pay ₹25 Lakhs advance for a residential plot. Advocate Deepak Goyal investigated the chain of patta and Sub-Registrar records, uncovering that the plot had already been mortgaged to a cooperative bank. Advised client to stop token payment, saving hard-earned savings.'
    },
    {
      id: 'case-2',
      domain: 'certificate',
      domainLabel: 'Marriage & Birth Certificate',
      title: 'Urgent Foreign Embassy Marriage & Birth Certificate Registration',
      location: 'Jaipur Nagar Nigam & SDM Court',
      outcome: 'Completed within 48 Hours for Visa Submission',
      summary: 'Client needed official marriage certificate and late-entry birth certificate for a time-critical Canadian visa application. Prepared required legal affidavits, handled municipal registration, and obtained verified certificate seamlessly.'
    },
    {
      id: 'case-3',
      domain: 'succession',
      domainLabel: 'Family Partition & Will',
      title: 'Peaceful Partition of Ancestral Family Property Across 3 Brothers',
      location: 'Bani Park & C-Scheme, Jaipur',
      outcome: 'Zero Court Dispute & Amicable Division',
      summary: 'Drafted an amicable Family Settlement and Partition Deed (बंटवारा) dividing family shops and house among three brothers without any expensive litigation. Executed on valid stamp paper with full family consensus.'
    },
    {
      id: 'case-4',
      domain: 'notice',
      domainLabel: 'Legal Notice & Recovery',
      title: 'Fast Recovery of ₹14 Lakhs in Bounced Cheque Dispute (Sec 138)',
      location: 'District & Sessions Court, Jaipur',
      outcome: '100% Amount Recovered Before Trial',
      summary: 'Issued a rigorous statutory demand notice under Section 138 of the Negotiable Instruments Act for unpaid business supply dues. Prompted the defaulter to settle the entire outstanding balance via direct bank transfer within 2 weeks.'
    }
  ];

  const filteredCases = cases.filter(
    (c) => filter === 'all' || c.domain === filter
  );

  return (
    <div className="flex flex-col w-full bg-[#f9f9ff]">
      {/* Hero */}
      <section className="bg-[#0d1c32] text-white py-14 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffdea5]/15 border border-[#e9c176]/30 rounded text-[#e9c176] text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="material-symbols-outlined text-[15px]">verified_user</span>
            20+ Years in Jaipur Sessions Court
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
            Experience & Track Record
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
            Over two decades of dedicated legal practice helping families and businesses across Jaipur with secure property deeds, certificate registrations, and peaceful dispute settlements.
          </p>

          {/* Simple Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-4 border-t border-white/10">
            <div>
              <span className="font-bold text-2xl text-[#ffdea5]">20+ Yrs</span>
              <span className="text-xs text-gray-300 block">Court Practice</span>
            </div>
            <div>
              <span className="font-bold text-2xl text-[#ffdea5]">10,000+</span>
              <span className="text-xs text-gray-300 block">Deeds & Certificates</span>
            </div>
            <div>
              <span className="font-bold text-2xl text-[#ffdea5]">Jaipur</span>
              <span className="text-xs text-gray-300 block">Sessions Court Complex</span>
            </div>
            <div>
              <span className="font-bold text-2xl text-[#ffdea5]">100%</span>
              <span className="text-xs text-gray-300 block">Transparent Guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#c5c6cd]/30 pb-4 mb-6">
          <span className="text-xs font-bold text-[#0d1c32] uppercase tracking-wider">
            Filter by Matter Type:
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Matters' },
              { id: 'property', label: 'Property & Registry' },
              { id: 'certificate', label: 'Marriage & Birth' },
              { id: 'succession', label: 'Will & Family Partition' },
              { id: 'notice', label: 'Legal Notice & Recovery' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                  filter === btn.id
                    ? 'bg-[#0d1c32] text-white'
                    : 'bg-[#f0f3ff] text-[#44474d] hover:bg-[#dee8ff]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredCases.map((c) => (
            <div
              key={c.id}
              className="bg-white p-6 rounded-xl border border-[#c5c6cd]/30 shadow-sm space-y-2.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#dee8ff] text-[#0d1c32]">
                  {c.domainLabel}
                </span>
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  {c.outcome}
                </span>
              </div>

              <h3 className="font-serif text-lg font-bold text-[#0d1c32]">
                {c.title}
              </h3>

              <p className="text-xs text-[#44474d] leading-relaxed">
                {c.summary}
              </p>

              <div className="pt-2 text-[11px] text-[#76849f] flex items-center justify-between">
                <span>Location: {c.location}</span>
                <a
                  href={`https://wa.me/91${ADVOCATE_INFO.phone}?text=${encodeURIComponent(`Hello Advocate Deepak Goyal ji, I need consultation regarding ${c.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[14px]">chat</span>
                  Inquire for Similar Matter
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-6 lg:px-16 bg-[#0d1c32] text-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-lg font-bold">Have a legal query or paperwork question?</h3>
            <p className="text-xs text-gray-300">Call or message Advocate Deepak Goyal at {ADVOCATE_INFO.phoneFormatted}.</p>
          </div>
          <button
            onClick={() => setActiveTab('schedule-consultation')}
            className="px-5 py-2.5 bg-[#e9c176] hover:bg-[#ffdea5] text-[#0d1c32] rounded font-bold text-xs uppercase tracking-wider"
          >
            Book Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
