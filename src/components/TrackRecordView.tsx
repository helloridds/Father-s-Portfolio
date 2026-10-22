import React, { useState } from 'react';
import { NavTab } from '../types';

interface TrackRecordViewProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenDraftBrief?: (instrumentTitle: string, category: string) => void;
}

export const TrackRecordView: React.FC<TrackRecordViewProps> = ({
  setActiveTab,
  onOpenDraftBrief
}) => {
  const [filter, setFilter] = useState<string>('all');

  const milestones = [
    {
      id: 'case-1',
      domain: 'property',
      domainLabel: 'Real Estate Conveyance',
      title: 'Averting ₹4.2 Crore Defective Mutation & Undisclosed Co-heir Lien',
      location: 'Vasant Vihar, South Delhi',
      year: '2023',
      outcome: 'Client Protected from Third-Party Cancellation Suit',
      summary: 'A prospective purchaser was on the verge of executing a sale deed for a prime residential plot based on a recent municipal mutation. Advocate Deepak Goyal conducted an archival Sub-Registrar trace, revealing an unprobated 1999 Will and two surviving non-consenting Class-I legal heirs in the UK.',
      highlights: [
        'Prevented irrevocable disbursement of ₹4.2 Crore consideration',
        'Refused execution until formal Relinquishment Deeds were executed',
        'Seamlessly secured clean registered deed with all legal heirs'
      ]
    },
    {
      id: 'case-2',
      domain: 'succession',
      domainLabel: 'Family Estate & Succession',
      title: 'Amicable ₹120 Crore Ancestral Estate Partition & Family MoU',
      location: 'Connaught Place & Civil Lines, Delhi',
      year: '2022',
      outcome: 'Zero Court Litigation & ₹7.2 Crore Saved in Court Fees',
      summary: 'Drafted and registered an exhaustive tripartite Family Settlement Agreement among three estranged branches of an industrial family. Structured pursuant to Supreme Court precedent (Kale v. DDC) ensuring zero ad-valorem stamp duty surcharge on oral agreement memorandum.',
      highlights: [
        'Complete severance of coparcenary status across 5 commercial assets',
        'Mutual release covenants barring future partition suits by grandchildren',
        'Registered with Sub-Registrar I (Kashmere Gate) without dispute'
      ]
    },
    {
      id: 'case-3',
      domain: 'corporate',
      domainLabel: 'Commercial Leasing & Contracts',
      title: '9-Year Grade-A Institutional Corporate Headquarters Lease',
      location: 'DLF Cyber City, Gurugram',
      year: '2024',
      outcome: 'Defended Against Arbitrary ₹85 Lakh Escalation',
      summary: 'Represented a prominent logistics corporation in drafting a 65,000 sq.ft long-term commercial lease. Structured defined fit-out moratorium, force majeure rent abatement, and water-tight lock-in penalty covenants.',
      highlights: [
        'Customized GST reverse charge and maintenance escrow terms',
        'Pre-empted developer\'s premature escalation notice during building renovation',
        'Enforceable DIAC arbitration clause protecting lessee rights'
      ]
    },
    {
      id: 'case-4',
      domain: 'nri',
      domainLabel: 'NRI Power of Attorney',
      title: 'Apostille & Adjudication for London-based NRI Property Sale',
      location: 'Greater Kailash II, New Delhi',
      year: '2023',
      outcome: '100% Remote Conveyance & Repatriation Assistance',
      summary: 'Drafted Special Power of Attorney for elderly Non-Resident Indian siblings residing in the United Kingdom. Facilitated consular attestation at the High Commission of India, London, followed by adjudication before SDM (Collector of Stamps) Delhi within statutory 90 days.',
      highlights: [
        'Eliminated need for overseas clients to undertake transatlantic travel',
        'Full 195/197 TDS lower withholding tax certificate guidance',
        'Authorized repatriation of sale proceeds via authorized banking channels'
      ]
    },
    {
      id: 'case-5',
      domain: 'litigation',
      domainLabel: 'Court Enforcement & Pre-litigation',
      title: 'Pre-Trial ₹1.85 Crore Recovery via Section 138 NI Act Notice',
      location: 'Delhi High Court Commercial Division',
      year: '2024',
      outcome: '100% Consideration Recovered within 21 Days',
      summary: 'Issued a rigorous statutory demand notice for dishonored high-value commercial cheques under Section 138 of the Negotiable Instruments Act. Outlined criminal liability of corporate directors under Section 141, prompting full settlement prior to formal complaint trial.',
      highlights: [
        'Drafted within 48 hours of bank return memo',
        'Secured complete RTGS settlement with formal mutual discharge receipt',
        'Avoided 3+ years of protracted trial litigation'
      ]
    }
  ];

  const filteredMilestones = milestones.filter(
    (m) => filter === 'all' || m.domain === filter
  );

  return (
    <div className="flex flex-col w-full bg-[#f9f9ff]">
      {/* Hero Section */}
      <section className="bg-[#0d1c32] text-white py-16 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#e9c176]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffdea5]/15 border border-[#e9c176]/30 rounded text-[#e9c176] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-[16px]">history_edu</span>
            Proven Legal Pedigree Since 2004
          </div>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Track Record & Landmark Conveyancing Chronicles
          </h1>
          <p className="text-sm lg:text-base text-[#c5c6cd] max-w-3xl leading-relaxed mb-8">
            Over two decades of courtroom advocacy and precision transactional drafting. Review representative matters where rigorous title due diligence averted costly litigation for property owners, institutions, and NRI families.
          </p>

          {/* Core Metric Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            <div>
              <span className="font-mono text-3xl font-bold text-[#ffdea5] block">
                14,200+
              </span>
              <span className="text-xs text-[#c5c6cd]">Deeds & Instruments Executed</span>
            </div>
            <div>
              <span className="font-mono text-3xl font-bold text-[#ffdea5] block">
                22+
              </span>
              <span className="text-xs text-[#c5c6cd]">Years Continuous Bar Practice</span>
            </div>
            <div>
              <span className="font-mono text-3xl font-bold text-[#ffdea5] block">
                ₹4,800 Cr+
              </span>
              <span className="text-xs text-[#c5c6cd]">Asset Transactions Vetted</span>
            </div>
            <div>
              <span className="font-mono text-3xl font-bold text-[#ffdea5] block">
                99.4%
              </span>
              <span className="text-xs text-[#c5c6cd]">Zero-Cancellation Record</span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="py-8 px-6 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#c5c6cd]/30 pb-6">
          <span className="text-xs font-bold text-[#0d1c32] uppercase tracking-wider">
            Filter Chronicles by Practice Domain:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Matters' },
              { id: 'property', label: 'Real Estate Conveyance' },
              { id: 'succession', label: 'Family Estates & Wills' },
              { id: 'corporate', label: 'Commercial Contracts' },
              { id: 'nri', label: 'NRI Advisory' },
              { id: 'litigation', label: 'Statutory Notices & Recovery' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-[#0d1c32] text-white shadow-sm'
                    : 'bg-[#f0f3ff] text-[#44474d] hover:bg-[#dee8ff]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* MILESTONE CARDS */}
        <div className="mt-8 space-y-6">
          {filteredMilestones.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 md:p-8 rounded-xl border border-[#c5c6cd]/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#dee8ff] text-[#0d1c32]">
                    {item.domainLabel}
                  </span>
                  <span className="text-xs text-[#76849f]">• {item.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                    verified
                  </span>
                  <span className="text-xs font-bold text-emerald-800">
                    {item.outcome}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#0d1c32] mb-3">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm text-[#44474d] leading-relaxed mb-4">
                {item.summary}
              </p>

              <div className="bg-[#f0f3ff] p-4 rounded-lg border border-[#c5c6cd]/20">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#775a19] block mb-2">
                  Counsel Strategic Interventions:
                </span>
                <ul className="text-xs text-[#44474d] space-y-1.5 list-disc list-inside">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-[#c5c6cd]/20 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#76849f]">
                  Matter Executed under Bar Enrolment D/1984/2004
                </span>
                <button
                  onClick={() => {
                    if (onOpenDraftBrief) {
                      onOpenDraftBrief(item.title, item.domainLabel);
                    }
                  }}
                  className="text-xs font-bold text-[#775a19] hover:text-[#5f4713] flex items-center gap-1"
                >
                  Request Similar Counsel Vetting
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-14 px-6 lg:px-20 bg-[#0d1c32] text-white mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Have a High-Value Property or Succession Matter?
            </h3>
            <p className="text-xs text-[#c5c6cd] max-w-xl">
              Do not risk execution without independent legal scrutiny. Schedule a confidential 45-minute priority review at Delhi High Court chambers.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('schedule-consultation')}
            className="px-6 py-3 bg-[#e9c176] hover:bg-[#ffdea5] text-[#0d1c32] text-xs font-bold uppercase tracking-wider rounded transition-colors whitespace-nowrap shadow-lg"
          >
            Schedule Consultation Now
          </button>
        </div>
      </section>
    </div>
  );
};
