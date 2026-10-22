import React, { useState } from 'react';
import { NavTab } from '../types';
import { ADVOCATE_INFO } from '../data/legalData';

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
      name: 'Rameshwar Sharma',
      role: 'Home Owner',
      location: 'Mansarovar, Jaipur',
      category: 'property',
      categoryLabel: 'Property Registry & Sale Deed',
      rating: 5,
      date: '2024',
      quote: 'Advocate Deepak Goyal helped us in the registry of our house in Mansarovar. He thoroughly checked the original patta, calculated the correct DLC stamp duty, and got the registry completed without any delay at the Sub-Registrar office. Very humble and honest lawyer.'
    },
    {
      id: 'rev-2',
      name: 'Kailash Meena',
      role: 'Shop Owner',
      location: 'Vaishali Nagar, Jaipur',
      category: 'certificate',
      categoryLabel: 'Marriage & Birth Certificate',
      rating: 5,
      date: '2024',
      quote: 'Needed marriage certificate and passport birth papers urgently for my daughter. Advocate Goyal handled the affidavits and government municipal process smoothly. Everything was done in 2 days. Highly recommended in Jaipur Sessions Court.'
    },
    {
      id: 'rev-3',
      name: 'Smt. Shanti Devi & Family',
      role: 'Senior Citizen',
      location: 'C-Scheme, Jaipur',
      category: 'succession',
      categoryLabel: 'Family Will & Succession Papers',
      rating: 5,
      date: '2023',
      quote: 'We wanted to prepare a clear registered Will (वसीयत) and family partition paper. Deepak ji explained everything in simple Hindi, cleared all our doubts with great patience, and ensured no dispute remains between our sons.'
    },
    {
      id: 'rev-4',
      name: 'Mahendra Singh Rathore',
      role: 'Business Owner',
      location: 'Ajmer Road, Jaipur',
      category: 'notice',
      categoryLabel: 'Rent Agreement & Legal Notice',
      rating: 5,
      date: '2023',
      quote: 'Our tenant was refusing to vacate our commercial shop. Advocate Deepak Goyal sent a strong legal notice from Jaipur Sessions Court, and within 15 days the matter was peacefully resolved and possession handed back.'
    },
    {
      id: 'rev-5',
      name: 'Rajesh & Pooja Khandelwal',
      role: 'Couple',
      location: 'Malviya Nagar, Jaipur',
      category: 'certificate',
      categoryLabel: 'Marriage Registration',
      rating: 5,
      date: '2024',
      quote: 'Got our court marriage registration done with complete legal procedure and affidavits. Advocate Goyal was very supportive throughout the process.'
    }
  ];

  const filteredReviews = reviews.filter(
    (r) => selectedFilter === 'all' || r.category === selectedFilter
  );

  return (
    <div className="flex flex-col w-full bg-[#f9f9ff]">
      {/* Header */}
      <section className="bg-[#0d1c32] text-white py-14 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffdea5]/15 border border-[#e9c176]/30 rounded text-[#e9c176] text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="material-symbols-outlined text-[15px]">star</span>
            Verified Client Feedback
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
            Client Reviews & Testimonials
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
            Read what local families, property buyers, and clients in Jaipur say about their experience with Advocate Deepak Goyal.
          </p>
        </div>
      </section>

      {/* Reviews Content */}
      <section className="py-12 px-6 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#c5c6cd]/30 pb-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'property', label: 'Property Papers & Registry' },
              { id: 'certificate', label: 'Certificates (Marriage / Birth)' },
              { id: 'succession', label: 'Will & Succession' },
              { id: 'notice', label: 'Legal Notices' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedFilter(btn.id)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                  selectedFilter === btn.id
                    ? 'bg-[#0d1c32] text-white'
                    : 'bg-[#f0f3ff] text-[#44474d] hover:bg-[#dee8ff]'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-4 py-2 border border-[#775a19] text-[#775a19] hover:bg-[#ffdea5]/20 text-xs font-semibold rounded transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[15px]">rate_review</span>
            Leave a Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-xl border border-[#c5c6cd]/30 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#775a19] bg-[#f0f3ff] px-2.5 py-0.5 rounded">
                    {rev.categoryLabel}
                  </span>
                  <div className="flex text-[#e9c176]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[15px]">
                        star
                      </span>
                    ))}
                  </div>
                </div>

                <p className="font-serif italic text-xs text-[#0d1c32] leading-relaxed mb-4">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#c5c6cd]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-[#0d1c32]">{rev.name}</h4>
                  <p className="text-[11px] text-[#76849f]">{rev.role} • {rev.location}</p>
                </div>
                <span className="text-[11px] font-mono text-[#76849f]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d1c32]/75 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-[#c5c6cd]/40">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-serif text-base font-bold text-[#0d1c32]">
                Leave Client Feedback
              </h3>
              <button onClick={() => setShowSubmitModal(false)} className="text-[#76849f]">
                ✕
              </button>
            </div>

            {reviewSubmitted ? (
              <div className="p-4 bg-emerald-50 rounded text-center text-xs text-emerald-800">
                Thank you! Your review has been submitted.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setReviewSubmitted(true);
                  setTimeout(() => {
                    setShowSubmitModal(false);
                    setReviewSubmitted(false);
                  }, 1500);
                }}
                className="space-y-3 text-xs"
              >
                <div>
                  <label className="font-semibold block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3 py-2 border border-[#c5c6cd] rounded"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Service Received</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Property paper / Marriage certificate"
                    className="w-full px-3 py-2 border border-[#c5c6cd] rounded"
                  />
                </div>
                <div>
                  <label className="font-semibold block mb-1">Your Feedback</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Share your experience..."
                    className="w-full px-3 py-2 border border-[#c5c6cd] rounded"
                  ></textarea>
                </div>
                <div className="flex justify-end gap-2 pt-1">
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
                    Submit Review
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
