import React, { useState } from 'react';
import { NavTab } from '../types';
import { ADVOCATE_INFO } from '../data/legalData';
import { dispatchToAdvocatePhone } from '../utils/sendNotification';

interface ContactChamberViewProps {
  setActiveTab: (tab: NavTab) => void;
}

export const ContactChamberView: React.FC<ContactChamberViewProps> = ({ setActiveTab }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    matterType: 'Property Papers & Registry',
    brief: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Send directly to father's phone
    dispatchToAdvocatePhone({
      formType: 'Chamber Contact Form',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      serviceOrMatter: formData.matterType,
      details: formData.brief
    });

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        matterType: 'Property Papers & Registry',
        brief: ''
      });
    }, 4500);
  };

  return (
    <div className="flex flex-col w-full bg-[#f9f9ff]">
      {/* Hero Header */}
      <section className="bg-[#0d1c32] text-white py-14 px-6 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffdea5]/15 border border-[#e9c176]/30 rounded text-[#e9c176] text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="material-symbols-outlined text-[15px]">location_on</span>
            Court Chamber & Contact
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-2">
            Chamber of Advocate Deepak Goyal
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
            District & Sessions Court, Bani Park, Jaipur. Visit in person during court hours or call directly for consultation and paperwork assistance.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 px-6 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Chamber Address & Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#c5c6cd]/30 shadow-sm space-y-4">
              <div className="border-b border-[#c5c6cd]/20 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19] bg-[#dee8ff] px-2 py-0.5 rounded">
                  Court Chamber
                </span>
                <h2 className="font-serif text-lg font-bold text-[#0d1c32] mt-2">
                  Jaipur Sessions Court Chamber
                </h2>
              </div>

              <div className="space-y-3.5 text-xs text-[#44474d]">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#775a19] text-[20px] shrink-0 mt-0.5">location_on</span>
                  <div>
                    <strong className="text-[#0d1c32] block">Address:</strong>
                    <span>{ADVOCATE_INFO.chamberAddress}</span>
                    <span className="text-[11px] text-[#76849f] block mt-0.5">
                      Landmark: Opposite Collectorate / Sessions Court Gate, Bani Park, Jaipur
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#775a19] text-[20px] shrink-0 mt-0.5">call</span>
                  <div>
                    <strong className="text-[#0d1c32] block">Direct Mobile / WhatsApp:</strong>
                    <a href={`tel:+91${ADVOCATE_INFO.phone}`} className="text-[#775a19] font-bold text-sm hover:underline">
                      {ADVOCATE_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#775a19] text-[20px] shrink-0 mt-0.5">mail</span>
                  <div>
                    <strong className="text-[#0d1c32] block">Email:</strong>
                    <a href={`mailto:${ADVOCATE_INFO.email}`} className="text-[#0d1c32] hover:underline">
                      {ADVOCATE_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#775a19] text-[20px] shrink-0 mt-0.5">schedule</span>
                  <div>
                    <strong className="text-[#0d1c32] block">Chamber Hours:</strong>
                    <span>Monday to Saturday: 10:00 AM – 07:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/91${ADVOCATE_INFO.phone}?text=${encodeURIComponent('Hello Advocate Deepak Goyal ji, I would like to visit your Jaipur Sessions Court chamber for consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-2 shadow"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  Message on WhatsApp ({ADVOCATE_INFO.phoneFormatted})
                </a>

                <a
                  href={`tel:+91${ADVOCATE_INFO.phone}`}
                  className="w-full py-2 bg-[#0d1c32] hover:bg-[#1a2f4c] text-white font-bold rounded-lg text-xs flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  Call Advocate Directly
                </a>
              </div>
            </div>

            {/* Sub-Registrar / Other Court Office */}
            <div className="bg-[#f0f3ff] p-5 rounded-xl border border-[#c5c6cd]/30 text-xs text-[#44474d] space-y-2">
              <h4 className="font-bold text-[#0d1c32] uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#775a19] text-[16px]">edit_document</span>
                Sub-Registrar Office Assistance
              </h4>
              <p className="text-[11px] leading-relaxed">
                We also provide physical assistance across Sub-Registrar offices in Jaipur (Jaipur I, II, III, Sanganer, Jhotwara, Amer) for registry day execution, biometric signatures, and deed collection.
              </p>
            </div>
          </div>

          {/* Right Column: Send Details to Phone Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#c5c6cd]/30 shadow-sm space-y-4">
            <div className="border-b border-[#c5c6cd]/20 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#775a19]">
                Send Message
              </span>
              <h2 className="font-serif text-xl font-bold text-[#0d1c32] mt-0.5">
                Send Details to Advocate Deepak Goyal
              </h2>
              <p className="text-xs text-[#44474d] mt-1">
                When you submit, your inquiry is sent directly to Advocate Deepak Goyal's phone (<strong>+91 98280 89628</strong>).
              </p>
            </div>

            {sent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-xl text-center space-y-2">
                <span className="material-symbols-outlined text-emerald-600 text-[36px]">check_circle</span>
                <h3 className="font-bold text-sm text-[#0d1c32]">Message Sent Directly to Phone!</h3>
                <p className="text-xs text-[#44474d]">
                  Advocate Deepak Goyal has received your details at +91 98280 89628. You will receive a callback or WhatsApp reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-[#0d1c32] block mb-1">
                      Your Name (आपका नाम) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-[#0d1c32] block mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98280XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-[#0d1c32] block mb-1">
                      Your Email (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-[#0d1c32] block mb-1">
                      Paperwork / Matter
                    </label>
                    <select
                      value={formData.matterType}
                      onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs bg-white focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                    >
                      <option value="Property Papers & Registry">Property Papers & Registry (मकान/जमीन की रजिस्ट्री)</option>
                      <option value="Marriage Certificate">Marriage Certificate (विवाह प्रमाण पत्र)</option>
                      <option value="Death Certificate">Death Certificate (मृत्यु प्रमाण पत्र)</option>
                      <option value="Birth Certificate">Birth Certificate (जन्म प्रमाण पत्र)</option>
                      <option value="Agreement to Sell / Bayana">Agreement to Sell / Bayana</option>
                      <option value="Will / Vasiyat">Will / Vasiyat (वसीयत)</option>
                      <option value="Rent Agreement & Affidavits">Rent Agreement & Affidavits</option>
                      <option value="Legal Notice">Legal Notice & Recovery</option>
                      <option value="Other Legal Matter">Other Legal Matter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-[#0d1c32] block mb-1">
                    Your Message / Query (विवरण)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe what help you need..."
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-[#c5c6cd] rounded-lg text-xs focus:ring-1 focus:ring-[#775a19] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#e9c176] hover:bg-[#ffdea5] text-[#0d1c32] font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-2 shadow cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">send</span>
                  Send Directly to Advocate Deepak Goyal (+91 98280 89628)
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};
