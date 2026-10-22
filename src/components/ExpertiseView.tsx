import React, { useState } from 'react';
import { NavTab } from '../types';

interface ExpertiseViewProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenDraftBrief?: (instrumentTitle: string, category: string) => void;
}

export const ExpertiseView: React.FC<ExpertiseViewProps> = ({
  setActiveTab,
  onOpenDraftBrief
}) => {
  // Stamp Duty Calculator State
  const [state, setState] = useState<'delhi' | 'haryana' | 'up'>('delhi');
  const [buyerType, setBuyerType] = useState<'male' | 'female' | 'joint'>('male');
  const [propertyValue, setPropertyValue] = useState<number>(15000000); // 1.5 Cr default

  // Calculator Logic
  const calculateFees = () => {
    let stampRate = 0;
    let regFeeRate = 0;
    let regFeeCap = Infinity;

    if (state === 'delhi') {
      // Delhi: 6% for male, 4% for female, 5% for joint. Reg fee: 1%
      if (buyerType === 'female') stampRate = 0.04;
      else if (buyerType === 'joint') stampRate = 0.05;
      else stampRate = 0.06;
      regFeeRate = 0.01;
    } else if (state === 'haryana') {
      // Haryana (Gurugram municipal area): 7% male, 5% female, 6% joint. Reg fee slab max ₹50,000
      if (buyerType === 'female') stampRate = 0.05;
      else if (buyerType === 'joint') stampRate = 0.06;
      else stampRate = 0.07;
      regFeeRate = 0.005;
      regFeeCap = 50000;
    } else {
      // UP (Noida): 7% male, 7% female (with 10k rebate), reg fee: 1% (or 2% with max cap 20k)
      if (buyerType === 'female') stampRate = 0.065;
      else if (buyerType === 'joint') stampRate = 0.0675;
      else stampRate = 0.07;
      regFeeRate = 0.01;
      regFeeCap = 20000;
    }

    const stampDuty = propertyValue * stampRate;
    const registrationFee = Math.min(propertyValue * regFeeRate, regFeeCap);
    const pastingAndMisc = 1500;
    const totalOutflow = stampDuty + registrationFee + pastingAndMisc;

    return {
      stampRate: (stampRate * 100).toFixed(1),
      stampDuty,
      registrationFee,
      pastingAndMisc,
      totalOutflow
    };
  };

  const fees = calculateFees();

  const subRegistrarOffices = [
    {
      district: 'Sub-Registrar I (Kashmere Gate)',
      jurisdiction: 'Central Delhi, Civil Lines, Old Delhi',
      timing: '09:30 AM – 04:30 PM (Mon-Fri)',
      notes: 'High historical property load; strict verification of 50-year municipal archives and DDA land status.'
    },
    {
      district: 'Sub-Registrar V (Mehrauli / Saket)',
      jurisdiction: 'South Delhi, Hauz Khas, Greater Kailash, Saket, Sainik Farm',
      timing: '09:30 AM – 05:00 PM (Mon-Fri)',
      notes: 'Frequent high-value residential conveyances; mandatory physical verification of sanction plans & DDA conversion.'
    },
    {
      district: 'Sub-Registrar VI-A (Rohini)',
      jurisdiction: 'North-West Delhi, Pitampura, Shalimar Bagh, Rohini Sectors',
      timing: '09:30 AM – 04:30 PM (Mon-Fri)',
      notes: 'High volume of DDA freehold conversion deeds and tripartite builder lease agreements.'
    },
    {
      district: 'Sub-Registrar Sadar (Noida Sector 33)',
      jurisdiction: 'Gautam Buddha Nagar, Noida City, Expressway Sectors',
      timing: '10:00 AM – 05:00 PM (Mon-Sat)',
      notes: 'Noida Authority tripartite transfer permissions, sub-lease executions, and UP e-Challan verification.'
    },
    {
      district: 'Sub-Registrar Gurugram (Tehsil Office)',
      jurisdiction: 'Gurugram Tehsil, DLF Phases, Golf Course Road, Sohna Road',
      timing: '09:00 AM – 04:00 PM (Mon-Fri)',
      notes: 'HSVP / DTCP license compliance, non-encumbrance certificate, and Haryana Jamabandi record cross-verification.'
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#f9f9ff]">
      {/* Hero Header */}
      <section className="bg-[#0d1c32] text-white py-16 px-6 lg:px-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#e9c176]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffdea5]/15 border border-[#e9c176]/30 rounded text-[#e9c176] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-[16px]">verified_user</span>
            Conveyancing Architecture & Title Due Diligence
          </div>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Institutional Paperwork & 30-Year Title Search Mastery
          </h1>
          <p className="text-sm lg:text-base text-[#c5c6cd] max-w-3xl leading-relaxed mb-8">
            Under Advocate Deepak Goyal's supervision, every title deed, commercial lease, and estate settlement is vetted against 30 years of Sub-Registrar Book I records, judicial litigation registers, and revenue revenue maps.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActiveTab('schedule-consultation')}
              className="px-6 py-3 bg-[#e9c176] hover:bg-[#ffdea5] text-[#0d1c32] text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-lg"
            >
              Book Title Vetting Consultation
            </button>
            <button
              onClick={() => {
                if (onOpenDraftBrief) {
                  onOpenDraftBrief('30-Year Chain of Title Search Report', 'Real Estate');
                }
              }}
              className="px-6 py-3 border border-[#c5c6cd]/40 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
            >
              Request Due Diligence Docket
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE 4 PILLARS OF 30-YEAR TITLE DILIGENCE */}
      <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#775a19] uppercase">
            Systematic Verification Protocol
          </span>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#0d1c32] mt-2">
            The 4-Tier Chain of Title Due Diligence
          </h2>
          <p className="text-xs lg:text-sm text-[#44474d] mt-2">
            Why 99.4% of conveyances drafted by our chambers withstand subsequent legal scrutiny and audit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#c5c6cd]/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#dee8ff] text-[#0d1c32] flex items-center justify-center font-bold text-base mb-4 font-serif">
                01
              </div>
              <h3 className="font-serif text-base font-bold text-[#0d1c32] mb-2">
                Unbroken Chain Tracing (1994–Present)
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Physical cross-referencing of Sub-Registrar Book I entries to establish seamless transfer of title from the original colonial, DDA allotment, or ancestral partition through all intermediate deeds.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#c5c6cd]/20 text-[11px] font-semibold text-[#775a19]">
              • Sub-Registrar Book I Ledger Review
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#c5c6cd]/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#dee8ff] text-[#0d1c32] flex items-center justify-center font-bold text-base mb-4 font-serif">
                02
              </div>
              <h3 className="font-serif text-base font-bold text-[#0d1c32] mb-2">
                CERSAI & Non-Encumbrance Check
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Interrogation of Central Registry of Securitisation Asset Reconstruction and Security Interest (CERSAI) database to detect undisclosed bank mortgages, credit line attachments, or NBFC hypothecations.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#c5c6cd]/20 text-[11px] font-semibold text-[#775a19]">
              • Elimination of Undisclosed Liens
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#c5c6cd]/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#dee8ff] text-[#0d1c32] flex items-center justify-center font-bold text-base mb-4 font-serif">
                03
              </div>
              <h3 className="font-serif text-base font-bold text-[#0d1c32] mb-2">
                Litigation & Injunction Scrutiny
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Digital scanning across Delhi High Court, District Courts, DRT, and RERA portals for pending partition suits, lis pendens notices, or stay orders affecting the property or its immediate owners.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#c5c6cd]/20 text-[11px] font-semibold text-[#775a19]">
              • Civil & Appellate e-Courts Trace
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#c5c6cd]/30 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#dee8ff] text-[#0d1c32] flex items-center justify-center font-bold text-base mb-4 font-serif">
                04
              </div>
              <h3 className="font-serif text-base font-bold text-[#0d1c32] mb-2">
                Advocate Certificate of Marketability
              </h3>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Formal legal certification issued under Advocate Deepak Goyal's seal certifying that title is clean, marketable, and unencumbered for banks, corporate acquisition, or personal registry.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#c5c6cd]/20 text-[11px] font-semibold text-[#775a19]">
              • Legally Binding Legal Opinion
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE STAMP DUTY & REGISTRATION FEE CALCULATOR */}
      <section className="py-14 px-6 lg:px-20 bg-[#f0f3ff] border-y border-[#c5c6cd]/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-widest text-[#775a19] uppercase">
              Transparent Statutory Estimation
            </span>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#0d1c32] mt-1">
              Delhi NCR Stamp Duty & Registration Fee Calculator
            </h2>
            <p className="text-xs lg:text-sm text-[#44474d] max-w-xl mx-auto mt-2">
              Calculate exact statutory e-Stamp duty, municipal surcharges, and registration fee outflow based on property location and buyer profile.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Calculator Inputs (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-xl border border-[#c5c6cd]/30 shadow-sm space-y-6">
              {/* State Selection */}
              <div>
                <label className="block text-xs font-bold text-[#0d1c32] uppercase tracking-wider mb-2">
                  1. Select Registration Jurisdiction
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setState('delhi')}
                    className={`py-2.5 px-3 rounded text-xs font-semibold transition-all border ${
                      state === 'delhi'
                        ? 'bg-[#0d1c32] text-white border-[#0d1c32] shadow-sm'
                        : 'bg-[#f9f9ff] text-[#44474d] border-[#c5c6cd]/40 hover:bg-[#dee8ff]/30'
                    }`}
                  >
                    Delhi NCT
                  </button>
                  <button
                    type="button"
                    onClick={() => setState('haryana')}
                    className={`py-2.5 px-3 rounded text-xs font-semibold transition-all border ${
                      state === 'haryana'
                        ? 'bg-[#0d1c32] text-white border-[#0d1c32] shadow-sm'
                        : 'bg-[#f9f9ff] text-[#44474d] border-[#c5c6cd]/40 hover:bg-[#dee8ff]/30'
                    }`}
                  >
                    Haryana (Gurugram)
                  </button>
                  <button
                    type="button"
                    onClick={() => setState('up')}
                    className={`py-2.5 px-3 rounded text-xs font-semibold transition-all border ${
                      state === 'up'
                        ? 'bg-[#0d1c32] text-white border-[#0d1c32] shadow-sm'
                        : 'bg-[#f9f9ff] text-[#44474d] border-[#c5c6cd]/40 hover:bg-[#dee8ff]/30'
                    }`}
                  >
                    UP (Noida/Gr. Noida)
                  </button>
                </div>
              </div>

              {/* Buyer Gender / Type */}
              <div>
                <label className="block text-xs font-bold text-[#0d1c32] uppercase tracking-wider mb-2">
                  2. Primary Donee / Purchaser Gender
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setBuyerType('male')}
                    className={`py-2.5 px-3 rounded text-xs font-semibold transition-all border ${
                      buyerType === 'male'
                        ? 'bg-[#0d1c32] text-white border-[#0d1c32] shadow-sm'
                        : 'bg-[#f9f9ff] text-[#44474d] border-[#c5c6cd]/40 hover:bg-[#dee8ff]/30'
                    }`}
                  >
                    Male Sole Owner
                  </button>
                  <button
                    type="button"
                    onClick={() => setBuyerType('female')}
                    className={`py-2.5 px-3 rounded text-xs font-semibold transition-all border ${
                      buyerType === 'female'
                        ? 'bg-[#0d1c32] text-white border-[#0d1c32] shadow-sm'
                        : 'bg-[#f9f9ff] text-[#44474d] border-[#c5c6cd]/40 hover:bg-[#dee8ff]/30'
                    }`}
                  >
                    Female Sole Owner (Rebate)
                  </button>
                  <button
                    type="button"
                    onClick={() => setBuyerType('joint')}
                    className={`py-2.5 px-3 rounded text-xs font-semibold transition-all border ${
                      buyerType === 'joint'
                        ? 'bg-[#0d1c32] text-white border-[#0d1c32] shadow-sm'
                        : 'bg-[#f9f9ff] text-[#44474d] border-[#c5c6cd]/40 hover:bg-[#dee8ff]/30'
                    }`}
                  >
                    Joint (Male + Female)
                  </button>
                </div>
              </div>

              {/* Property Value Slider & Presets */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#0d1c32] uppercase tracking-wider">
                    3. Property Value / Circle Rate Consideration
                  </label>
                  <span className="font-mono text-sm font-bold text-[#775a19]">
                    ₹{(propertyValue / 10000000).toFixed(2)} Crore (₹{propertyValue.toLocaleString('en-IN')})
                  </span>
                </div>
                <input
                  type="range"
                  min={1000000}
                  max={100000000}
                  step={500000}
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full h-2 bg-[#dee8ff] rounded-lg appearance-none cursor-pointer accent-[#775a19]"
                />
                <div className="flex flex-wrap gap-2 mt-3">
                  {[3000000, 7500000, 15000000, 30000000, 60000000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setPropertyValue(preset)}
                      className="px-2.5 py-1 text-[11px] rounded bg-[#f0f3ff] hover:bg-[#dee8ff] text-[#0d1c32] font-mono transition-colors"
                    >
                      {preset >= 10000000 ? `₹${preset / 10000000} Cr` : `₹${preset / 100000} Lakh`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculation Output Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#0d1c32] text-white p-6 md:p-8 rounded-xl border border-[#e9c176]/30 shadow-xl">
              <div className="border-b border-white/10 pb-4 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#e9c176] font-bold block">
                  Estimated Outflow Breakdown
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1">
                  Government Registry Dues
                </h3>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#c5c6cd]">
                    Applicable Stamp Duty ({fees.stampRate}%):
                  </span>
                  <span className="font-mono font-bold text-white text-sm">
                    ₹{fees.stampDuty.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#c5c6cd]">
                    Registration Fee (Sub-Registrar):
                  </span>
                  <span className="font-mono font-bold text-white text-sm">
                    ₹{fees.registrationFee.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-[#c5c6cd]">
                    e-Stamping / Document Pasting Charges:
                  </span>
                  <span className="font-mono text-white text-xs">
                    ₹{fees.pastingAndMisc.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="pt-3 border-t border-[#e9c176]/30 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#ffdea5] font-bold block">
                      Total Government Outflow
                    </span>
                    <span className="text-[10px] text-[#76849f]">
                      (Exclusive of Advocate Drafting Retainership)
                    </span>
                  </div>
                  <span className="font-mono text-2xl font-bold text-[#ffdea5]">
                    ₹{fees.totalOutflow.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/10 text-[11px] text-[#c5c6cd] leading-relaxed">
                <span className="text-[#e9c176] font-bold block mb-1">
                  Advocate Counsel Advisory:
                </span>
                Ensure property consideration matches or exceeds the higher of Circle Rate valuation or actual transaction value to avoid Section 56(2)(x) Income Tax penalties.
              </div>

              <button
                onClick={() => {
                  if (onOpenDraftBrief) {
                    onOpenDraftBrief('Sale Deed / Absolute Conveyance', 'Real Estate');
                  }
                }}
                className="w-full mt-5 py-3 bg-[#e9c176] hover:bg-[#ffdea5] text-[#0d1c32] text-xs font-bold uppercase tracking-wider rounded transition-colors text-center shadow"
              >
                Draft Conveyance with Counsel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SUB-REGISTRAR DIRECTORY ACROSS DELHI NCR */}
      <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="mb-10">
          <span className="text-xs font-bold tracking-widest text-[#775a19] uppercase">
            On-Ground Execution Presence
          </span>
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-[#0d1c32] mt-1">
            Delhi NCR Sub-Registrar Directory & Execution Protocol
          </h2>
          <p className="text-xs lg:text-sm text-[#44474d] mt-2">
            Our chambers physically manages appointment tokens, biometric execution, and deed recovery across major registrar jurisdictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subRegistrarOffices.map((office, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-[#c5c6cd]/30 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#775a19]">
                  <span className="material-symbols-outlined text-[20px]">account_balance</span>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Official Registry Bench
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-[#0d1c32] mb-1">
                  {office.district}
                </h3>
                <p className="text-xs text-[#0d1c32] font-medium mb-3">
                  Jurisdiction: <span className="text-[#44474d]">{office.jurisdiction}</span>
                </p>
                <p className="text-xs text-[#76849f] mb-3 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  {office.timing}
                </p>
                <p className="text-xs text-[#44474d] leading-relaxed bg-[#f0f3ff] p-3 rounded-lg border border-[#c5c6cd]/20">
                  {office.notes}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#c5c6cd]/20 flex items-center justify-between text-xs">
                <span className="text-[#775a19] font-semibold text-[11px]">
                  Advocate In-Person Presence
                </span>
                <span className="text-emerald-700 font-bold text-[11px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: STATUTORY PREPARATION CHECKLIST */}
      <section className="py-12 px-6 lg:px-20 bg-white border-t border-[#c5c6cd]/30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#775a19] uppercase">
              Client Readiness
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#0d1c32] mt-1">
              What to Bring on Registration Day
            </h3>
            <p className="text-xs text-[#44474d] mt-2 max-w-xl">
              1) Original prior parent title deeds. 2) Two neutral adult witnesses with Original Aadhaar Cards. 3) Proof of stamp duty e-Challan transaction. 4) Valid PAN card of Buyer and Seller.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('schedule-consultation')}
            className="px-6 py-3 bg-[#0d1c32] hover:bg-[#1a2f4c] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors whitespace-nowrap shadow-md"
          >
            Schedule Chamber Registry Briefing
          </button>
        </div>
      </section>
    </div>
  );
};
