import React, { useState } from 'react';
import { NavTab } from '../types';

interface ClientReviewsViewProps {
  setActiveTab: (tab: NavTab) => void;
}

export const ClientReviewsView: React.FC<ClientReviewsViewProps> = ({ setActiveTab }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const reviews = [
    {
      id: 'rev-1',
      name: 'Sunil Aggarwal',
      role: 'Director, Apex Logistics Infra Pvt Ltd',
      location: 'New Delhi & Gurugram',
      category: 'commercial',
      categoryLabel: 'Commercial Conveyance & Due Diligence',
      rating: 5,
      date: 'January 2024',
      quote: 'Advocate Deepak Goyal caught a critical flaw in a 25-year-old mutation entry that three other property brokers and an institutional bank panel evaluator missed. His thoroughness saved our firm from a potential ₹4.2 Crore title dispute. His Sub-Registrar handling was impeccably executed with zero hassle.'
    },
    {
      id: 'rev-2',
      name: 'Dr. Meera & Rajesh Kapoor',
      role: 'Non-Resident Indian (London, UK)',
      location: 'London & Greater Kailash',
      category: 'nri',
      categoryLabel: 'NRI Power of Attorney & Property Sale',
      rating: 5,
      date: 'November 2023',
      quote: 'Being based in London, selling our ancestral property in South Delhi seemed daunting. Adv. Goyal prepared our Special PoA, guided us through the Indian High Commission attestation in the UK, and seamlessly managed the sale registry. Absolute peace of mind and highest professional integrity.'
    },
    {
      id: 'rev-3',
      name: 'Vivek Chawla',
      role: 'Senior Executive, Chawla Enterprises',
      location: 'Civil Lines, Delhi',
      category: 'succession',
      categoryLabel: 'Will Drafting & Family Settlement MoU',
      rating: 5,
      date: 'August 2023',
      quote: 'His calm temperament and exceptional legal drafting helped my elderly father structure his Will and execute a family partition settlement between three siblings amicably. He explained every clause with supreme patience. A true gentleman of the legal fraternity.'
    },
    {
      id: 'rev-4',
      name: 'Harishankar Singhania',
      role: 'Managing Partner, Singhania Textiles LLP',
      location: 'DLF Cyber City, Gurugram',
      category: 'commercial',
      categoryLabel: 'Grade-A Commercial Lease',
      rating: 5,
      date: 'October 2023',
      quote: 'Drafted our 9-year commercial lease for our Gurugram corporate headquarters. When the developer attempted an arbitrary rent escalation, Advocate Goyal’s lock-in and fit-out moratorium clauses saved us months of litigation and ₹85 Lakhs in unauthorized claims.'
    },
    {
      id: 'rev-5',
      name: 'Ananya & Vikram Malhotra',
      role: 'Residential Property Purchasers',
      location: 'Panchsheel Park, New Delhi',
      category: 'property',
      categoryLabel: 'Sale Deed & Title Due Diligence',
      rating: 5,
      date: 'February 2024',
      quote: 'We were purchasing our first standalone floor in South Delhi. Adv. Goyal’s 30-year chain of title report gave us total confidence. On registry day at Saket Sub-Registrar office, his clerk was present an hour early and ensured everything ran on schedule.'
    },
    {
      id: 'rev-6',
      name: 'Sqn. Ldr. R. K. Bakshi (Retd.)',
      role: 'Senior Citizen & Testator',
      location: 'Defence Colony, New Delhi',
      category: 'succession',
      categoryLabel: 'Registered Will & Medical Attestation',
      rating: 5,
      date: 'May 2023',
      quote: 'Advocate Goyal visited my residence when I was recovering from surgery to finalize my Will. His videographed execution protocol and coordination with my physician demonstrated genuine care and rigorous adherence to Indian Succession Act requirements.'
    }
  ];

  const filteredReviews = reviews.filter(
    (r) => selectedFilter === 'all' || r.category === selectedFilter
  );

  return (
    <div className="flex flex-col w-full bg-[#f9f9ff]">
      {/* Hero Header */}
      <section className="bg-[#0d1c32] text-white py-16 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#e9c176]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffdea5]/15 border border-[#e9c176]/30 rounded text-[#e9c176] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            Client Trust & Independent Testimonials
          </div>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Client Testimonials & Chamber Reviews
          </h1>
          <p className="text-sm lg:text-base text-[#c5c6cd] max-w-3xl leading-relaxed mb-6">
            Read verified feedback from corporate directors, family estate executors, property buyers, and Non-Resident Indians who entrust their pivotal legal matters to Advocate Deepak Goyal.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-4xl font-bold text-[#ffdea5]">4.98</span>
              <div>
                <div className="flex text-[#e9c176]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[18px]">
                      star
                    </span>
                  ))}
                </div>
                <span className="text-[11px] text-[#c5c6cd]">
                  Based on 420+ Verified Client Engagements
                </span>
              </div>
            </div>
            <div className="h-8 w-px bg-white/20 hidden sm:block"></div>
            <span className="text-xs text-[#c5c6cd] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-emerald-400">
                lock
              </span>
              Strictly non-solicitation, compliant with Bar Council of India norms.
            </span>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS & CONTROLS */}
      <section className="py-8 px-6 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#c5c6cd]/30 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'property', label: 'Property & Conveyancing' },
              { id: 'nri', label: 'NRI Legal Services' },
              { id: 'succession', label: 'Wills & Family Estates' },
              { id: 'commercial', label: 'Corporate & Leases' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                  selectedFilter === tab.id
                    ? 'bg-[#0d1c32] text-white shadow-sm'
                    : 'bg-[#f0f3ff] text-[#44474d] hover:bg-[#dee8ff]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-4 py-2 border border-[#775a19] text-[#775a19] hover:bg-[#ffdea5]/20 text-xs font-semibold rounded transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">rate_review</span>
            Submit Client Feedback
          </button>
        </div>

        {/* REVIEW GRID */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 md:p-8 rounded-xl border border-[#c5c6cd]/30 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#775a19] bg-[#f0f3ff] px-2.5 py-0.5 rounded">
                    {rev.categoryLabel}
                  </span>
                  <div className="flex text-[#775a19]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[16px]">
                        star
                      </span>
                    ))}
                  </div>
                </div>

                <p className="font-serif italic text-sm text-[#0d1c32] leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#c5c6cd]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-[#0d1c32]">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-[#76849f]">
                    {rev.role} • {rev.location}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#76849f]">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEEDBACK MODAL */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d1c32]/75 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-[#c5c6cd]/40">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg font-bold text-[#0d1c32]">
                Submit Chamber Review
              </h3>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="text-[#76849f] hover:text-[#0d1c32]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {reviewSubmitted ? (
              <div className="p-4 bg-[#f0f3ff] rounded-lg text-center">
                <span className="material-symbols-outlined text-emerald-600 text-[28px] mb-2 block">
                  check_circle
                </span>
                <p className="text-xs font-semibold text-[#0d1c32]">
                  Feedback Received with Thanks
                </p>
                <p className="text-[11px] text-[#44474d] mt-1">
                  Submitted for confidential archival in Chambers register.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setReviewSubmitted(true);
                  setTimeout(() => {
                    setShowSubmitModal(false);
                    setReviewSubmitted(false);
                  }, 2000);
                }}
                className="space-y-3 text-xs"
              >
                <div>
                  <label className="font-semibold block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    className="w-full px-3 py-2 border border-[#c5c6cd] rounded"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Designation / Nature of Matter</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Property Buyer / Commercial Lease"
                    className="w-full px-3 py-2 border border-[#c5c6cd] rounded"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Chamber Experience / Feedback</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe counsel handling, drafting quality, or Sub-Registrar execution..."
                    className="w-full px-3 py-2 border border-[#c5c6cd] rounded"
                  ></textarea>
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-3 py-1.5 text-xs text-[#76849f]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#0d1c32] text-white font-bold rounded"
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
