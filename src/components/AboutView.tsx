import React, { useState } from 'react';
import { NavTab } from '../types';
import { ADVOCATE_INFO, TESTIMONIALS } from '../data/legalData';
import { dispatchToAdvocatePhone } from '../utils/sendNotification';

interface AboutViewProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenBookingDocket?: (bookingData: any) => void;
  onOpenDraftBrief?: (instrumentTitle: string, category: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  setActiveTab,
  onOpenBookingDocket,
  onOpenDraftBrief
}) => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientContact: '',
    clientEmail: '',
    serviceType: 'Property Papers & Registry',
    preferredDate: '',
    preferredVenue: 'Jaipur Sessions Court Chamber',
    briefSummary: '',
    consent: true
  });
  const [submitting, setSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const token = `DG-${Math.floor(1000 + Math.random() * 9000)}/2026`;

    // Send notification to father's phone via WhatsApp
    dispatchToAdvocatePhone({
      formType: 'Chamber Consultation Request',
      name: formData.clientName,
      phone: formData.clientContact,
      email: formData.clientEmail,
      serviceOrMatter: formData.serviceType,
      date: formData.preferredDate || 'Earliest Available',
      time: formData.preferredVenue,
      details: formData.briefSummary,
      token
    });

    const bookingPayload = {
      name: formData.clientName,
      phone: formData.clientContact,
      email: formData.clientEmail,
      domain: formData.serviceType,
      forum: formData.preferredVenue,
      date: formData.preferredDate || new Date().toISOString().split('T')[0],
      time: '11:00 AM – 01:00 PM',
      token,
      summary: formData.briefSummary
    };

    setTimeout(() => {
      setSubmitting(false);
      setBookingSuccess(true);
      if (onOpenBookingDocket) {
        onOpenBookingDocket(bookingPayload);
      }
    }, 600);
  };

  const coreServices = [
    {
      title: 'Property Papers & Registry (मकान/जमीन)',
      icon: 'real_estate_agent',
      desc: 'Complete assistance for sale deed registry, title check, patta verification, and agreement to sell in Jaipur.'
    },
    {
      title: 'Marriage Certificate (विवाह प्रमाण पत्र)',
      icon: 'favorite',
      desc: 'Hassle-free court marriage registration, certificate issuance, and notary affidavits for couples.'
    },
    {
      title: 'Death & Birth Certificates',
      icon: 'description',
      desc: 'Birth certificate orders from SDM court, death certificates, and legal heir (वारिसान) certificates.'
    },
    {
      title: 'Will & Vasiyat (वसीयतनामा)',
      icon: 'history_edu',
      desc: 'Safe and clear Will drafting and registration to protect family properties from disputes.'
    },
    {
      title: 'Rent Agreement & Affidavits',
      icon: 'contract',
      desc: 'Police verified rent agreements, notary affidavits, name change, and gap affidavits in quick time.'
    },
    {
      title: 'Legal Notice & Cheque Bounce',
      icon: 'gavel',
      desc: 'Firm lawyer notices for money recovery, Section 138 cheque bounce, and tenant eviction disputes.'
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#f9f9ff]">
      {/* SECTION 1: HERO SECTION - Clean, Warm & Dignified */}
      <section className="relative w-full bg-gradient-to-b from-[#0d1c32] to-[#12233f] text-white py-14 lg:py-20 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffdea5]/15 border border-[#e9c176]/30 text-[#e9c176] text-xs font-semibold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>{ADVOCATE_INFO.courtShort} • 20+ Years Legal Practice</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Advocate Deepak Goyal
            </h1>

            <p className="text-base sm:text-lg text-[#e9c176] font-medium">
              Legal Counsel & Conveyancer | Jaipur Sessions Court
            </p>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl">
              Providing clear, trustworthy, and affordable legal support for your essential paperwork — Property Registry, Marriage Certificate, Death & Birth Certificate, Will, Affidavits, and Court Notices in Jaipur.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setActiveTab('schedule-consultation')}
                className="px-6 py-3 bg-[#e9c176] hover:bg-[#ffdea5] text-[#0d1c32] font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                Book Consultation
              </button>

              <a
                href={`https://wa.me/91${ADVOCATE_INFO.phone}?text=${encodeURIComponent('नमस्ते Advocate Deepak Goyal जी, मुझे कानूनी सलाह / पेपरवर्क के लिए बात करनी है।')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow-md transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                WhatsApp: {ADVOCATE_INFO.phoneFormatted}
              </a>

              <a
                href={`tel:+91${ADVOCATE_INFO.phone}`}
                className="px-5 py-3 border border-white/25 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm rounded transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-[#e9c176]">call</span>
                Call: {ADVOCATE_INFO.phoneFormatted}
              </a>
            </div>

            {/* Simple Trust Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
              <div>
                <span className="block font-bold text-2xl text-[#e9c176]">20+ Yrs</span>
                <span className="text-xs text-gray-300">Court Experience</span>
              </div>
              <div>
                <span className="block font-bold text-2xl text-[#e9c176]">10,000+</span>
                <span className="text-xs text-gray-300">Papers & Deeds Done</span>
              </div>
              <div>
                <span className="block font-bold text-2xl text-[#e9c176]">Jaipur</span>
                <span className="text-xs text-gray-300">Sessions Court Complex</span>
              </div>
            </div>
          </div>

          {/* Right Card Column (5 cols) - Elegant Chamber Emblem & Highlights */}
          <div className="lg:col-span-5">
            <div className="bg-[#122847] border border-[#e9c176]/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#e9c176]/20 border border-[#e9c176] text-[#e9c176] flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[32px]">balance</span>
              </div>

              <h2 className="font-serif text-xl font-bold text-white text-center mb-1">
                Chamber of Advocate Deepak Goyal
              </h2>
              <p className="text-xs text-[#e9c176] text-center font-medium mb-6">
                District & Sessions Court, Bani Park, Jaipur
              </p>

              <div className="space-y-3.5 text-xs text-gray-200">
                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-[#0d1c32]/60 border border-white/5">
                  <span className="material-symbols-outlined text-[#e9c176] text-[18px] shrink-0 mt-0.5">location_on</span>
                  <div>
                    <strong className="text-white block">Court Location:</strong>
                    <span>Near Collectorate Circle, Sessions Court Complex, Bani Park, Jaipur</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-[#0d1c32]/60 border border-white/5">
                  <span className="material-symbols-outlined text-[#e9c176] text-[18px] shrink-0 mt-0.5">schedule</span>
                  <div>
                    <strong className="text-white block">Chamber Hours:</strong>
                    <span>Monday to Saturday: 10:00 AM – 07:30 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-[#0d1c32]/60 border border-white/5">
                  <span className="material-symbols-outlined text-[#e9c176] text-[18px] shrink-0 mt-0.5">phone_forwarded</span>
                  <div>
                    <strong className="text-white block">Direct Phone & WhatsApp:</strong>
                    <span className="text-[#e9c176] font-bold text-sm">{ADVOCATE_INFO.phoneFormatted}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-lg bg-[#0d1c32]/60 border border-white/5">
                  <span className="material-symbols-outlined text-[#e9c176] text-[18px] shrink-0 mt-0.5">mail</span>
                  <div>
                    <strong className="text-white block">Official Email:</strong>
                    <span>{ADVOCATE_INFO.email}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('contact-and-chamber')}
                className="w-full mt-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View Chamber Map & Directions</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: KEY PAPERWORK SERVICES (Easy language) */}
      <section className="py-16 px-6 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#775a19] bg-[#dee8ff] px-3 py-1 rounded-full">
            Our Main Services
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1c32] mt-3">
            Essential Paperwork & Legal Services
          </h2>
          <p className="text-xs sm:text-sm text-[#44474d] mt-2">
            Clear process, transparent guidance, and direct handling at government offices and Jaipur Sub-Registrar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-[#c5c6cd]/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#f0f3ff] text-[#775a19] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-[#0d1c32] mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[#44474d] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#c5c6cd]/20 flex items-center justify-between">
                <button
                  onClick={() => {
                    if (onOpenDraftBrief) {
                      onOpenDraftBrief(service.title, 'General Paperwork');
                    }
                  }}
                  className="text-xs font-bold text-[#775a19] hover:text-[#5f4713] flex items-center gap-1"
                >
                  <span>Inquire on WhatsApp</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
                <span className="text-[11px] text-[#76849f] font-medium">Quick Service</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: EASY CONSULTATION BOOKING FORM (Sends straight to phone) */}
      <section className="py-14 px-6 lg:px-16 bg-[#f0f3ff] border-y border-[#c5c6cd]/30">
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-[#c5c6cd]/40 shadow-sm">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#775a19]">
              Direct Contact
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d1c32] mt-1">
              Book Legal Consultation with Advocate Deepak Goyal
            </h2>
            <p className="text-xs sm:text-sm text-[#44474d] mt-2">
              Fill this simple form. Your details will be sent directly to Advocate Deepak Goyal's phone ({ADVOCATE_INFO.phoneFormatted}), and he will get back to you promptly.
            </p>
          </div>

          {bookingSuccess ? (
            <div className="p-8 bg-[#dee8ff]/40 rounded-xl border border-[#dee8ff] text-center space-y-3">
              <span className="material-symbols-outlined text-emerald-600 text-[40px]">check_circle</span>
              <h3 className="font-serif text-xl font-bold text-[#0d1c32]">Details Sent to Advocate Deepak Goyal!</h3>
              <p className="text-xs text-[#44474d] max-w-md mx-auto">
                Your request has been forwarded directly to Advocate Deepak Goyal at <strong>+91 98280 89628</strong>.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={`https://wa.me/91${ADVOCATE_INFO.phone}?text=${encodeURIComponent(`Hello Advocate Deepak Goyal ji, I just submitted an inquiry on your website for ${formData.clientName}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold shadow flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  Open WhatsApp Chat
                </a>
                <button
                  onClick={() => setBookingSuccess(false)}
                  className="px-4 py-2.5 border border-[#c5c6cd] text-xs font-semibold rounded hover:bg-white"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-[#0d1c32] block mb-1">
                    Your Name (आपका नाम) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-semibold text-[#0d1c32] block mb-1">
                    Mobile Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98280XXXXX"
                    value={formData.clientContact}
                    onChange={(e) => setFormData({ ...formData, clientContact: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-[#0d1c32] block mb-1">
                    Select Required Service (सेवा चुनें)
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs bg-white focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                  >
                    <option value="Property Papers & Registry">Property Papers & Registry (मकान/जमीन रजिस्ट्री)</option>
                    <option value="Marriage Certificate">Marriage Certificate (विवाह प्रमाण पत्र)</option>
                    <option value="Death Certificate & Legal Heir">Death Certificate & Legal Heir (मृत्यु प्रमाण पत्र / वारिसान)</option>
                    <option value="Birth Certificate">Birth Certificate (जन्म प्रमाण पत्र)</option>
                    <option value="Agreement to Sell / Bayana">Agreement to Sell / Bayana (बयाना इकरारनामा)</option>
                    <option value="Will / Vasiyat">Will / Vasiyat (वसीयतनामा)</option>
                    <option value="Rent Agreement & Affidavits">Rent Agreement & Affidavits (किरायानामा / शपथ पत्र)</option>
                    <option value="Legal Notice">Legal Notice (वकील का कानूनी नोटिस)</option>
                    <option value="Court Case / Other Matter">Court Case / Other Legal Matter</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-[#0d1c32] block mb-1">
                    Preferred Consultation Venue
                  </label>
                  <select
                    value={formData.preferredVenue}
                    onChange={(e) => setFormData({ ...formData, preferredVenue: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs bg-white focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                  >
                    <option value="Jaipur Sessions Court Chamber">Jaipur Sessions Court Chamber (Bani Park)</option>
                    <option value="Phone Call / WhatsApp Consultation">Direct Phone / WhatsApp Call</option>
                    <option value="Sub-Registrar Office Jaipur">Sub-Registrar Office, Jaipur</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold text-[#0d1c32] block mb-1">
                  Brief Details of Your Matter (संक्षिप्त विवरण)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you need help with (e.g. property location, certificate urgency, etc.)..."
                  value={formData.briefSummary}
                  onChange={(e) => setFormData({ ...formData, briefSummary: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[#e9c176] hover:bg-[#ffdea5] text-[#0d1c32] font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#0d1c32] border-t-transparent rounded-full animate-spin"></span>
                    <span>Sending to Advocate's Phone...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Submit & Send Directly to Advocate Deepak Goyal (9828089628)</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* SECTION 4: CLIENT REVIEWS HIGHLIGHT */}
      <section className="py-16 px-6 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#775a19]">
            Client Experiences
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#0d1c32] mt-1">
            What Clients in Jaipur Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-xl border border-[#c5c6cd]/30 shadow-sm flex flex-col justify-between">
              <p className="font-serif italic text-xs text-[#0d1c32] leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <div className="pt-3 border-t border-[#c5c6cd]/20 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-[#0d1c32]">{t.clientName}</h4>
                  <p className="text-[11px] text-[#76849f]">{t.designation} • {t.domain}</p>
                </div>
                <div className="flex text-[#e9c176]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[15px]">star</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
