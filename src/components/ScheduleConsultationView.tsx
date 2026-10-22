import React, { useState } from 'react';
import { FAQS, ADVOCATE_INFO } from '../data/legalData';
import { dispatchToAdvocatePhone } from '../utils/sendNotification';

interface ScheduleConsultationViewProps {
  onOpenBookingDocket?: (bookingData: any) => void;
}

export const ScheduleConsultationView: React.FC<ScheduleConsultationViewProps> = ({
  onOpenBookingDocket
}) => {
  const [forum, setForum] = useState<'in_chamber' | 'phone_call' | 'sub_registrar'>('in_chamber');
  const [domain, setDomain] = useState('Property Papers & Registry');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [timeWindow, setTimeWindow] = useState('11:00 AM – 01:00 PM (Morning Court)');
  const [litigantName, setLitigantName] = useState('');
  const [litigantPhone, setLitigantPhone] = useState('');
  const [litigantEmail, setLitigantEmail] = useState('');
  const [caseSummary, setCaseSummary] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!litigantName || !litigantPhone) return;

    const token = `DG-${Math.floor(1000 + Math.random() * 9000)}/2026`;

    const venueLabel =
      forum === 'in_chamber'
        ? 'Jaipur Sessions Court Chamber (Bani Park)'
        : forum === 'phone_call'
        ? 'Direct Phone / WhatsApp Call'
        : 'Sub-Registrar Office, Jaipur';

    // Direct dispatch to father's phone
    dispatchToAdvocatePhone({
      formType: 'Chamber Appointment Booking',
      name: litigantName,
      phone: litigantPhone,
      email: litigantEmail,
      serviceOrMatter: domain,
      date,
      time: `${venueLabel} - ${timeWindow}`,
      details: caseSummary,
      token
    });

    const bookingData = {
      token,
      name: litigantName,
      phone: litigantPhone,
      email: litigantEmail,
      forum: venueLabel,
      domain,
      date,
      time: timeWindow,
      summary: caseSummary
    };

    setShowToast(true);

    if (onOpenBookingDocket) {
      onOpenBookingDocket(bookingData);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#f9f9ff]">
      {/* Top Banner */}
      <section className="w-full bg-[#dee8ff] py-2.5 px-6 lg:px-16 border-b border-[#c5c6cd]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs text-[#44474d]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="font-semibold text-[#0d1c32]">Chamber Open Today:</span>
            <span>Sessions Court Complex, Bani Park, Jaipur (10:00 AM – 07:30 PM)</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Direct Call / WhatsApp:</span>
            <a href={`tel:+91${ADVOCATE_INFO.phone}`} className="font-bold text-[#0d1c32] hover:text-[#775a19]">
              {ADVOCATE_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-[#0d1c32] text-white py-12 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffdea5]/15 border border-[#e9c176]/30 rounded text-[#e9c176] text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="material-symbols-outlined text-[15px]">event</span>
            Direct Appointment & Meeting Booking
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
            Schedule a Meeting with Advocate Deepak Goyal
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
            Choose your preferred date and time for an in-person meeting at Jaipur Sessions Court or a direct phone/WhatsApp call. Details go straight to Advocate Deepak Goyal's phone.
          </p>
        </div>
      </section>

      {/* Main Grid: Form (7 cols) + Chamber Details (5 cols) */}
      <section className="py-12 px-6 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Booking Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#c5c6cd]/30 shadow-sm space-y-6">
            <div className="border-b border-[#c5c6cd]/20 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#775a19]">
                Step-by-Step Booking
              </span>
              <h2 className="font-serif text-xl font-bold text-[#0d1c32] mt-1">
                Consultation Details Form
              </h2>
            </div>

            {showToast && (
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-emerald-800">
                  <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                  <span><strong>Details Sent to Advocate's Phone!</strong> Message dispatched to +91 98280 89628.</span>
                </div>
                <button onClick={() => setShowToast(false)} className="text-emerald-700 font-bold ml-2">
                  ✕
                </button>
              </div>
            )}

            <form onSubmit={handleBookingSubmit} className="space-y-5 text-xs">
              {/* Meeting Mode */}
              <div>
                <label className="font-bold text-[#0d1c32] block mb-2 uppercase tracking-wider text-[11px]">
                  1. How would you like to consult? (परामर्श का माध्यम)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setForum('in_chamber')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      forum === 'in_chamber'
                        ? 'border-[#0d1c32] bg-[#f0f3ff] text-[#0d1c32] font-bold shadow-sm'
                        : 'border-[#c5c6cd]/40 text-[#44474d] hover:bg-[#f9f9ff]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px] block mb-1 text-[#775a19]">
                      account_balance
                    </span>
                    <span className="block text-xs">Court Chamber</span>
                    <span className="text-[10px] text-[#76849f] font-normal">Bani Park, Jaipur</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setForum('phone_call')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      forum === 'phone_call'
                        ? 'border-[#0d1c32] bg-[#f0f3ff] text-[#0d1c32] font-bold shadow-sm'
                        : 'border-[#c5c6cd]/40 text-[#44474d] hover:bg-[#f9f9ff]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px] block mb-1 text-emerald-600">
                      call
                    </span>
                    <span className="block text-xs">Phone / WhatsApp</span>
                    <span className="text-[10px] text-[#76849f] font-normal">Direct Consultation</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setForum('sub_registrar')}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      forum === 'sub_registrar'
                        ? 'border-[#0d1c32] bg-[#f0f3ff] text-[#0d1c32] font-bold shadow-sm'
                        : 'border-[#c5c6cd]/40 text-[#44474d] hover:bg-[#f9f9ff]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px] block mb-1 text-[#775a19]">
                      edit_document
                    </span>
                    <span className="block text-xs">Registry Office</span>
                    <span className="text-[10px] text-[#76849f] font-normal">Jaipur Sub-Registrar</span>
                  </button>
                </div>
              </div>

              {/* Service Required */}
              <div>
                <label className="font-bold text-[#0d1c32] block mb-1.5 uppercase tracking-wider text-[11px]">
                  2. Select Legal Service (सेवा का प्रकार)
                </label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs bg-white focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                >
                  <option value="Property Papers & Registry">Property Papers & Registry (मकान/जमीन की रजिस्ट्री)</option>
                  <option value="Marriage Certificate">Marriage Certificate (विवाह प्रमाण पत्र)</option>
                  <option value="Death Certificate & Legal Heir">Death Certificate & Legal Heir (मृत्यु प्रमाण पत्र / वारिसान)</option>
                  <option value="Birth Certificate">Birth Certificate (जन्म प्रमाण पत्र)</option>
                  <option value="Agreement to Sell / Bayana">Agreement to Sell / Bayana (बयाना)</option>
                  <option value="Will / Vasiyat">Will / Vasiyatnama (वसीयत)</option>
                  <option value="Rent Agreement & Notary">Rent Agreement & Affidavits</option>
                  <option value="Legal Notice">Legal Notice & Money Recovery</option>
                  <option value="Other Court Work">Other Court Matter (Sessions Court)</option>
                </select>
              </div>

              {/* Date & Time Window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-[#0d1c32] block mb-1 uppercase tracking-wider text-[11px]">
                    3. Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#0d1c32] block mb-1 uppercase tracking-wider text-[11px]">
                    Preferred Time Window
                  </label>
                  <select
                    value={timeWindow}
                    onChange={(e) => setTimeWindow(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs bg-white focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                  >
                    <option value="11:00 AM – 01:00 PM (Morning Court)">11:00 AM – 01:00 PM (Morning Court)</option>
                    <option value="02:30 PM – 05:00 PM (Afternoon)">02:30 PM – 05:00 PM (Afternoon)</option>
                    <option value="05:30 PM – 07:30 PM (Evening Chamber)">05:30 PM – 07:30 PM (Evening Chamber)</option>
                  </select>
                </div>
              </div>

              {/* Contact Particulars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-[#0d1c32] block mb-1 uppercase tracking-wider text-[11px]">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={litigantName}
                    onChange={(e) => setLitigantName(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#0d1c32] block mb-1 uppercase tracking-wider text-[11px]">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98280XXXXX"
                    value={litigantPhone}
                    onChange={(e) => setLitigantPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-[#0d1c32] block mb-1 uppercase tracking-wider text-[11px]">
                  Brief Summary / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="State any details or documents you have..."
                  value={caseSummary}
                  onChange={(e) => setCaseSummary(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#e9c176] hover:bg-[#ffdea5] text-[#0d1c32] font-bold uppercase tracking-wider rounded-lg shadow text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Send Booking to Advocate Deepak Goyal (9828089628)</span>
              </button>
            </form>
          </div>

          {/* Chamber Info & Location */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0d1c32] text-white p-6 rounded-2xl border border-[#e9c176]/30 shadow-xl space-y-4">
              <div className="border-b border-white/10 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#e9c176] font-bold block">
                  Chamber Coordinates
                </span>
                <h3 className="font-serif text-lg font-bold text-white mt-1">
                  Jaipur Sessions Court Complex
                </h3>
              </div>

              <div className="space-y-3 text-xs text-gray-200">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e9c176] text-[18px] shrink-0">location_on</span>
                  <div>
                    <strong className="text-white block">Office Address:</strong>
                    <span>Chamber / Office near Collectorate Circle, Sessions Court Complex, Bani Park, Jaipur 302016</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e9c176] text-[18px] shrink-0">call</span>
                  <div>
                    <strong className="text-white block">Direct Phone & WhatsApp:</strong>
                    <a href={`tel:+91${ADVOCATE_INFO.phone}`} className="text-[#e9c176] font-bold text-sm">
                      {ADVOCATE_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e9c176] text-[18px] shrink-0">mail</span>
                  <div>
                    <strong className="text-white block">Email:</strong>
                    <span>{ADVOCATE_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e9c176] text-[18px] shrink-0">schedule</span>
                  <div>
                    <strong className="text-white block">Working Timings:</strong>
                    <span>Monday to Saturday: 10:00 AM – 07:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/91${ADVOCATE_INFO.phone}?text=${encodeURIComponent('Hello Advocate Deepak Goyal ji, I want to confirm an appointment at your Jaipur Sessions Court chamber.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  Direct Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Preparation Checklist */}
            <div className="bg-white p-5 rounded-xl border border-[#c5c6cd]/30 text-xs text-[#44474d] space-y-2">
              <h4 className="font-bold text-[#0d1c32] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#775a19] text-[16px]">task_alt</span>
                What to bring for consultation
              </h4>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Original Aadhaar Card or Government Photo ID</li>
                <li>Copies of property papers, patta, or registry (if property matter)</li>
                <li>Marriage ceremony photos or cards (for marriage certificate)</li>
                <li>Any prior notices, receipts, or agreements relevant to the matter</li>
              </ul>
            </div>
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#775a19]">
              Common Questions
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#0d1c32] mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#c5c6cd]/30 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-xs text-[#0d1c32] hover:bg-[#f0f3ff]/50 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined text-[18px] text-[#775a19]">
                    {openFaq === i ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-xs text-[#44474d] leading-relaxed border-t border-[#c5c6cd]/20 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
