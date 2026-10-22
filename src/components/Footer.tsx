import React, { useState } from 'react';
import { NavTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenComplianceModal?: () => void;
  onOpenTermsModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenComplianceModal, onOpenTermsModal }) => {
  const [briefSubmitted, setBriefSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [briefMatter, setBriefMatter] = useState('Deed Drafting & Conveyance');

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setBriefSubmitted(true);
    setTimeout(() => {
      setFullName('');
      setEmail('');
      setBriefSubmitted(false);
    }, 6000);
  };

  return (
    <footer className="w-full bg-[#0d1c32] text-white border-t border-[#c5c6cd]/20 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#c5c6cd]/20">
          {/* Column 1: Advocate Seal & Credentials */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#e9c176]/60 flex items-center justify-center text-[#e9c176]">
                <span className="material-symbols-outlined text-2xl">balance</span>
              </div>
              <div>
                <span className="font-serif text-[20px] text-white font-semibold block leading-tight">
                  Adv. Deepak Goyal
                </span>
                <span className="font-legal-subtext uppercase tracking-widest text-[#e9c176]">
                  Advocate, Supreme Court of India
                </span>
              </div>
            </div>

            <p className="font-body-sm text-[#76849f] leading-relaxed">
              Providing discerning institutional counsel, complex commercial dispute adjudication, civil appellate litigation, and precision title deed documentation with unyielding judicial integrity for over 22 years.
            </p>

            <div className="flex flex-col gap-1 pt-2">
              <div className="flex items-center gap-2 font-legal-subtext text-[#76849f]">
                <span className="material-symbols-outlined text-[16px] text-[#e9c176]">verified</span>
                <span>Bar Council of Delhi • Enrolment No: D/1984/2004</span>
              </div>
              <div className="flex items-center gap-2 font-legal-subtext text-[#76849f]">
                <span className="material-symbols-outlined text-[16px] text-[#e9c176]">workspace_premium</span>
                <span>Delhi High Court Bar Association (Life Member #4281)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Chamber Locations */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-serif text-[20px] text-white font-semibold tracking-wide border-b border-[#c5c6cd]/30 pb-2">
              Chamber Locations
            </h3>
            <div className="flex flex-col gap-3 font-body-sm text-[#76849f]">
              <div>
                <h4 className="font-semibold text-white text-sm">
                  Supreme Court & High Court Chamber
                </h4>
                <p className="mt-1 text-[#76849f]">
                  Chamber No. 412, Lawyers Chambers Block II, Delhi High Court, Sher Shah Road, New Delhi 110003
                </p>
              </div>

              <div className="pt-1">
                <h4 className="font-semibold text-white text-sm">
                  Private Consultation Office
                </h4>
                <p className="mt-1 text-[#76849f]">
                  Suite 9, Barakhamba Boulevard, Connaught Place Central, New Delhi 110001
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-1 font-legal-subtext">
                <span className="text-white">
                  Direct Registry:{' '}
                  <a
                    href="mailto:legal@advocatedeepakgoyal.in"
                    className="hover:text-[#ffdea5] transition-colors"
                  >
                    legal@advocatedeepakgoyal.in
                  </a>
                </span>
                <span className="text-white">
                  Tele-Registry: +91 11 2338 XXXX /{' '}
                  <a href="tel:+919810244920" className="hover:text-[#ffdea5]">
                    +91 98102 44920
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Confidential Brief Submission */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="font-serif text-[20px] text-white font-semibold tracking-wide border-b border-[#c5c6cd]/30 pb-2">
              Confidential Brief Submission
            </h3>
            <p className="font-legal-subtext text-[#76849f]">
              Submit initial paperwork or request retainership review. Inquiries are protected by attorney-client privilege.
            </p>

            {briefSubmitted ? (
              <div className="bg-[#112338] border border-[#e9c176]/50 p-4 rounded text-center text-sm text-[#ffdea5] flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-2xl text-[#e9c176]">mark_email_read</span>
                <span className="font-semibold">Privileged Brief Dispatched</span>
                <span className="text-xs text-gray-300">
                  Advocate Deepak Goyal’s chamber registry has received your dossier and will reach out shortly.
                </span>
              </div>
            ) : (
              <form onSubmit={handleFooterSubmit} className="flex flex-col gap-2">
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-white text-[#111c2d] text-sm px-3 py-2 rounded border border-[#c5c6cd] focus:outline-none focus:ring-1 focus:ring-[#e9c176]"
                  placeholder="Full Legal Name / Entity"
                  required
                  type="text"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-[#111c2d] text-sm px-3 py-2 rounded border border-[#c5c6cd] focus:outline-none focus:ring-1 focus:ring-[#e9c176]"
                  placeholder="Counsel / Client Email"
                  required
                  type="email"
                />
                <select
                  value={briefMatter}
                  onChange={(e) => setBriefMatter(e.target.value)}
                  className="bg-white text-[#111c2d] text-sm px-3 py-2 rounded border border-[#c5c6cd] focus:outline-none focus:ring-1 focus:ring-[#e9c176]"
                >
                  <option value="Deed Drafting & Conveyance">Deed Drafting & Conveyance</option>
                  <option value="High Court Writ / Appeal">High Court Writ / Appeal</option>
                  <option value="Arbitration & Commercial Suit">Arbitration & Commercial Suit</option>
                  <option value="Property Due Diligence">Property Due Diligence (30-Year)</option>
                  <option value="Testamentary Will & Probate">Testamentary Will & Probate</option>
                </select>
                <button
                  type="submit"
                  className="mt-1 bg-[#e9c176] text-[#261900] hover:bg-[#ffdea5] text-sm py-2 rounded transition-colors font-semibold text-center cursor-pointer shadow"
                >
                  Dispatch Brief to Chamber
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal Disclaimer Compliance Bar */}
        <div className="py-4 border-b border-[#c5c6cd]/10 text-[#76849f]">
          <p className="font-legal-subtext leading-relaxed text-justify">
            <strong className="text-white font-semibold">
              DISCLAIMER & COMPLIANCE UNDER BAR COUNCIL OF INDIA RULES:
            </strong>{' '}
            As per the rules of the Bar Council of India (specifically Section 36 of the Advocates Act, 1961 and Rule 36 of Chapter II, Part VI of the Bar Council of India Rules), advocates are prohibited from soliciting work or advertising their legal services in any manner. By viewing this web application, the user acknowledges that this portal is solely designed for providing factual information concerning Advocate Deepak Goyal&apos;s chamber practice areas, contact directory, and legal documentation proficiencies, and does not create an advocate-client relationship. The information provided herein is at the specific request of the user for educational and chamber-directory purposes and should not be construed as legal opinion or solicitation.
          </p>
        </div>

        {/* Footer Sub-links */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between font-legal-subtext text-[#76849f] gap-3">
          <div>
            © 2025 Advocate Deepak Goyal. All Rights Reserved. Chambers at New Delhi, India.
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={() => onOpenComplianceModal && onOpenComplianceModal()}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Bar Compliance
            </button>
            <button
              onClick={() => onOpenTermsModal && onOpenTermsModal()}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Confidentiality & Retainer Terms
            </button>
            <button
              onClick={() => {
                setActiveTab('contact-and-chamber');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Registry Access
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
