import React, { useState } from 'react';
import { NavTab } from '../types';
import { ADVOCATE_INFO } from '../data/legalData';
import { dispatchToAdvocatePhone } from '../utils/sendNotification';

interface ExpertiseViewProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenDraftBrief?: (instrumentTitle: string, category: string) => void;
}

export const ExpertiseView: React.FC<ExpertiseViewProps> = ({
  setActiveTab,
  onOpenDraftBrief
}) => {
  // Simple Rajasthan / Jaipur DLC Stamp Duty Estimator
  const [propertyValue, setPropertyValue] = useState<number>(3000000); // 30 Lakhs
  const [buyerGender, setBuyerGender] = useState<'female' | 'male' | 'joint'>('female');

  // In Rajasthan:
  // Male: 6% stamp duty + 1% registration fee = 7%
  // Female: 5% stamp duty + 1% registration fee = 6% (1% rebate for women)
  // Joint: 5.5% stamp duty + 1% registration fee = 6.5%
  const calculateFees = () => {
    let stampRate = 0.06;
    if (buyerGender === 'female') stampRate = 0.05;
    else if (buyerGender === 'joint') stampRate = 0.055;

    const stampDuty = propertyValue * stampRate;
    const registrationFee = Math.min(propertyValue * 0.01, 50000); // capped at 50,000 in Rajasthan
    const surcharge = stampDuty * 0.2; // 20% local body / gaushala surcharge
    const total = stampDuty + registrationFee + surcharge;

    return {
      stampDuty,
      registrationFee,
      surcharge,
      total
    };
  };

  const fees = calculateFees();

  const paperworkGuides = [
    {
      title: 'Marriage Certificate (विवाह प्रमाण पत्र)',
      icon: 'favorite',
      badge: 'High Demand',
      description: 'Official court marriage registration certificate issued by the Marriage Registrar / Municipal Corporation under Rajasthan Marriage Registration Act.',
      whenNeeded: 'Passport application, visa processing, joint home loan, adding spouse name in Aadhaar/Bank account.',
      documents: [
        'Aadhaar card and 10th marksheet (or birth proof) of both bride & groom',
        'Wedding invitation card or wedding ceremony photographs',
        'Two witnesses with original Aadhaar cards and photos',
        'Joint passport-size photographs of bride and groom'
      ]
    },
    {
      title: 'Death Certificate & Warisan (मृत्यु प्रमाण पत्र)',
      icon: 'history_edu',
      badge: 'Succession Record',
      description: 'Death Certificate registration and Succession / Legal Heir Certificate (वारिसान) for claims in bank accounts, insurance, and property transfer.',
      whenNeeded: 'Claiming bank balance, FD, insurance money, transferring electricity meter or house ownership after demise.',
      documents: [
        'Hospital slip, cremation (shamshan) slip, or doctor declaration',
        'Aadhaar card of deceased family member',
        'Aadhaar card of wife/husband/children (legal heirs)',
        'Ration card or Parivar Samagra identity proof'
      ]
    },
    {
      title: 'Birth Certificate (जन्म प्रमाण पत्र)',
      icon: 'child_friendly',
      badge: 'Identity Proof',
      description: 'Official birth certificate issuance for newborns or delayed birth certificate registration through SDM Court order in Jaipur.',
      whenNeeded: 'School and college admission, new passport, government exam forms, and official ID documents.',
      documents: [
        'Hospital discharge slip or birth intimation letter',
        'Aadhaar cards of parents and marriage proof',
        'Address proof in Jaipur',
        'Affidavit explaining delay (if applying after 1 year of birth)'
      ]
    },
    {
      title: 'Property Papers & Registry (मकान/जमीन की रजिस्ट्री)',
      icon: 'real_estate_agent',
      badge: 'Registry Specialization',
      description: 'Complete sale deed (बैनामा) preparation, patta and title verification, DLC rate calculation, and assistance at Jaipur Sub-Registrar office.',
      whenNeeded: 'Buying or selling flat, house, plot, agricultural land, or commercial shop in Jaipur.',
      documents: [
        'Original Patta / Previous registered deed (Mother Deed)',
        'Approved building plan, JDA / Housing Board allotment letter',
        'Aadhaar card & PAN card of Buyer and Seller',
        'Two witnesses with original Aadhaar cards'
      ]
    },
    {
      title: 'Agreement to Sell / Bayana (बयाना इकरारनामा)',
      icon: 'handshake',
      badge: 'Advance Protection',
      description: 'Legally binding advance agreement defining token money, payment deadlines, and forfeiture penalties if the counterparty fails to register.',
      whenNeeded: 'Before giving advance token money for any property deal in Jaipur.',
      documents: [
        'Copy of property title papers / registry',
        'Agreed payment schedule and cheque/RTGS transaction details',
        'Agreed final registry timeline'
      ]
    },
    {
      title: 'Will / Vasiyatnama (वसीयतनामा)',
      icon: 'description',
      badge: 'Estate Protection',
      description: 'Registered Will drafted to ensure family property and savings are divided peacefully according to your wishes without court disputes.',
      whenNeeded: 'To protect children, wife, or dependents and prevent future partition disputes.',
      documents: [
        'List of properties, bank accounts, and valuables',
        'Name and details of beneficiaries',
        'Two trustworthy witnesses (who are not beneficiaries)'
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#f9f9ff]">
      {/* Hero Header */}
      <section className="bg-[#0d1c32] text-white py-14 px-6 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffdea5]/15 border border-[#e9c176]/30 rounded text-[#e9c176] text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="material-symbols-outlined text-[15px]">task_alt</span>
            Jaipur Sessions Court Practice
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
            Certificates & Paperwork Guide
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
            Simple information on documents, rules, and procedures for Marriage Certificate, Death Certificate, Birth Certificate, and Property Papers in Jaipur.
          </p>
        </div>
      </section>

      {/* SECTION 1: DETAILED PAPERWORK CARDS */}
      <section className="py-12 px-6 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paperworkGuides.map((guide, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-[#c5c6cd]/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-lg bg-[#f0f3ff] text-[#775a19] material-symbols-outlined text-[22px]">
                    {guide.icon}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#dee8ff] text-[#0d1c32]">
                    {guide.badge}
                  </span>
                </div>

                <h3 className="font-serif text-base font-bold text-[#0d1c32] mb-1">
                  {guide.title}
                </h3>

                <p className="text-xs text-[#44474d] leading-relaxed mb-3">
                  {guide.description}
                </p>

                <div className="mb-3 p-2.5 bg-[#f9f9ff] rounded border border-[#c5c6cd]/20 text-[11px] text-[#44474d]">
                  <strong className="text-[#0d1c32] block mb-0.5">When is it required?</strong>
                  {guide.whenNeeded}
                </div>

                <div className="text-[11px] text-[#44474d]">
                  <strong className="text-[#775a19] block mb-1">Required Documents:</strong>
                  <ul className="space-y-1 list-disc list-inside">
                    {guide.documents.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#c5c6cd]/20 flex items-center justify-between">
                <a
                  href={`https://wa.me/91${ADVOCATE_INFO.phone}?text=${encodeURIComponent(`Hello Advocate Deepak Goyal ji, I need help with ${guide.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[15px]">chat</span>
                  Inquire on WhatsApp
                </a>

                <button
                  onClick={() => {
                    if (onOpenDraftBrief) {
                      onOpenDraftBrief(guide.title, 'Certificates');
                    }
                  }}
                  className="px-3 py-1 bg-[#0d1c32] hover:bg-[#1a2f4c] text-white rounded text-[11px] font-semibold"
                >
                  Prepare Paper
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: SIMPLE JAIPUR / RAJASTHAN PROPERTY REGISTRY CALCULATOR */}
      <section className="py-12 px-6 lg:px-16 bg-[#f0f3ff] border-y border-[#c5c6cd]/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#775a19]">
              Estimate Government Fees
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#0d1c32] mt-1">
              Jaipur Property Registry & Stamp Duty Calculator
            </h2>
            <p className="text-xs text-[#44474d] mt-1">
              Basic estimation of Rajasthan Government stamp duty & registration charges for purchasing a property in Jaipur.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#c5c6cd]/40 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Inputs */}
            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-[#0d1c32] block mb-1 uppercase tracking-wider text-[11px]">
                  Property DLC Rate / Value
                </label>
                <div className="flex items-center justify-between text-xs font-bold text-[#775a19] mb-1">
                  <span>Selected Value:</span>
                  <span className="font-mono text-sm">₹{(propertyValue / 100000).toFixed(1)} Lakhs</span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={20000000}
                  step={200000}
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full h-2 bg-[#dee8ff] rounded-lg appearance-none cursor-pointer accent-[#775a19]"
                />
                <div className="flex gap-2 mt-2">
                  {[1000000, 2500000, 5000000, 10000000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setPropertyValue(val)}
                      className="px-2 py-1 text-[10px] bg-[#f0f3ff] rounded font-mono hover:bg-[#dee8ff]"
                    >
                      ₹{val / 100000}L
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-bold text-[#0d1c32] block mb-1 uppercase tracking-wider text-[11px]">
                  Buyer (खरीदार)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setBuyerGender('female')}
                    className={`py-2 px-2 rounded text-[11px] font-semibold border ${
                      buyerGender === 'female'
                        ? 'bg-[#0d1c32] text-white border-[#0d1c32]'
                        : 'bg-[#f9f9ff] text-[#44474d] border-[#c5c6cd]/40'
                    }`}
                  >
                    Female (1% Rebate)
                  </button>
                  <button
                    type="button"
                    onClick={() => setBuyerGender('male')}
                    className={`py-2 px-2 rounded text-[11px] font-semibold border ${
                      buyerGender === 'male'
                        ? 'bg-[#0d1c32] text-white border-[#0d1c32]'
                        : 'bg-[#f9f9ff] text-[#44474d] border-[#c5c6cd]/40'
                    }`}
                  >
                    Male (General)
                  </button>
                  <button
                    type="button"
                    onClick={() => setBuyerGender('joint')}
                    className={`py-2 px-2 rounded text-[11px] font-semibold border ${
                      buyerGender === 'joint'
                        ? 'bg-[#0d1c32] text-white border-[#0d1c32]'
                        : 'bg-[#f9f9ff] text-[#44474d] border-[#c5c6cd]/40'
                    }`}
                  >
                    Joint (Male+Female)
                  </button>
                </div>
              </div>
            </div>

            {/* Output */}
            <div className="bg-[#0d1c32] text-white p-5 rounded-xl border border-[#e9c176]/30 space-y-3 text-xs">
              <h4 className="font-serif font-bold text-sm text-[#e9c176] border-b border-white/10 pb-2">
                Estimated Govt. Outflow (Rajasthan)
              </h4>

              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-300">Stamp Duty:</span>
                <span className="font-mono font-bold">₹{fees.stampDuty.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-300">Registration Fee:</span>
                <span className="font-mono font-bold">₹{fees.registrationFee.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-300">Local Surcharge (20%):</span>
                <span className="font-mono font-bold">₹{fees.surcharge.toLocaleString('en-IN')}</span>
              </div>

              <div className="pt-2 flex justify-between items-baseline border-t border-[#e9c176]/30">
                <span className="font-bold text-[#e9c176]">Total Estimated Govt. Fee:</span>
                <span className="font-mono text-xl font-bold text-[#ffdea5]">
                  ₹{fees.total.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                onClick={() => {
                  if (onOpenDraftBrief) {
                    onOpenDraftBrief('Property Registry Consultation', 'Property');
                  }
                }}
                className="w-full mt-3 py-2 bg-[#e9c176] hover:bg-[#ffdea5] text-[#0d1c32] font-bold rounded text-xs transition-colors"
              >
                Consult Advocate Deepak Goyal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CALL TO ACTION */}
      <section className="py-12 px-6 lg:px-16 bg-white border-t border-[#c5c6cd]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#0d1c32]">
              Need any legal paper or certificate verified?
            </h3>
            <p className="text-xs text-[#44474d] mt-1">
              Visit our chamber at Jaipur Sessions Court Complex or reach out directly at +91 98280 89628.
            </p>
          </div>
          <a
            href={`https://wa.me/91${ADVOCATE_INFO.phone}?text=${encodeURIComponent('Hello Advocate Deepak Goyal ji, I need legal paperwork assistance.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold text-xs flex items-center gap-2 shadow"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            WhatsApp Now: {ADVOCATE_INFO.phoneFormatted}
          </a>
        </div>
      </section>
    </div>
  );
};
