import React, { useState } from 'react';
import { ADVOCATE_INFO } from '../data/legalData';
import { dispatchToAdvocatePhone } from '../utils/sendNotification';

interface DraftBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  instrumentTitle?: string;
  category?: string;
  onSuccess?: (details: any) => void;
}

export const DraftBriefModal: React.FC<DraftBriefModalProps> = ({
  isOpen,
  onClose,
  instrumentTitle = 'Legal Paper / Certificate',
  category = 'Documentation',
  onSuccess
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [urgency, setUrgency] = useState('Standard (1–2 Days)');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;

    setIsSubmitting(true);

    const docketId = `DG-${Math.floor(1000 + Math.random() * 9000)}/2026`;

    // Send directly to father's phone via WhatsApp
    dispatchToAdvocatePhone({
      formType: 'Document Preparation Request',
      name: clientName,
      phone: clientPhone,
      email: clientEmail,
      serviceOrMatter: `${instrumentTitle} (${urgency})`,
      details: notes,
      token: docketId
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSuccess) {
        onSuccess({
          instrumentTitle,
          category,
          clientName,
          clientPhone,
          clientEmail,
          urgency,
          docketId
        });
      }
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d1c32]/75 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-[#c5c6cd]/30 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#0d1c32] px-6 py-4 text-white flex items-center justify-between border-b border-[#e9c176]/30">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded bg-[#ffdea5]/15 text-[#e9c176] material-symbols-outlined text-[20px]">
              description
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#e9c176] font-semibold">
                Paperwork Request • {ADVOCATE_INFO.courtShort}
              </p>
              <h3 className="font-serif text-base font-bold leading-tight">
                {instrumentTitle}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        {isSuccess ? (
          <div className="p-8 text-center bg-[#f0f3ff] space-y-2">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">verified</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#0d1c32]">
              Details Sent to Advocate's Phone!
            </h4>
            <p className="text-xs text-[#44474d]">
              Your request for <strong>{instrumentTitle}</strong> has been transmitted directly to Advocate Deepak Goyal at <strong>{ADVOCATE_INFO.phoneFormatted}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-3.5 text-xs max-h-[80vh] overflow-y-auto">
            <div className="p-2.5 bg-[#f0f3ff] rounded border border-[#c5c6cd]/30 flex items-center gap-2">
              <span className="material-symbols-outlined text-emerald-600 text-[18px] shrink-0">
                send_to_mobile
              </span>
              <p className="text-[11px] text-[#44474d]">
                This form sends your request directly to Advocate Deepak Goyal's phone (+91 98280 89628).
              </p>
            </div>

            <div>
              <label className="block font-semibold text-[#0d1c32] mb-1">
                Your Full Name (आपका नाम) *
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Anand Sharma"
                className="w-full px-3 py-2 border border-[#c5c6cd] rounded focus:outline-none focus:ring-1 focus:ring-[#775a19]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-[#0d1c32] mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="e.g. 98280XXXXX"
                  className="w-full px-3 py-2 border border-[#c5c6cd] rounded focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#0d1c32] mb-1">
                  Urgency / Timeline
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full px-3 py-2 border border-[#c5c6cd] rounded bg-white focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                >
                  <option value="Urgent (Today / 24 Hours)">Urgent (Same Day / 24H)</option>
                  <option value="Standard (1–2 Days)">Standard (1–2 Days)</option>
                  <option value="General Consultation">General Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-[#0d1c32] mb-1">
                Particulars / Notes (विवरण)
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Describe your document requirements or details..."
                className="w-full px-3 py-2 border border-[#c5c6cd] rounded focus:outline-none focus:ring-1 focus:ring-[#775a19]"
              ></textarea>
            </div>

            <div className="pt-2 border-t border-[#c5c6cd]/30 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-2 text-[#76849f] hover:text-[#0d1c32]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 bg-[#e9c176] hover:bg-[#ffdea5] text-[#0d1c32] font-bold rounded shadow transition-colors flex items-center gap-1.5"
              >
                {isSubmitting ? (
                  <span>Sending to Phone...</span>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[16px]">send</span>
                    <span>Send to Phone (9828089628)</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
