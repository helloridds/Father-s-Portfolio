import React, { useState } from 'react';

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
  instrumentTitle = 'Legal Instrument',
  category = 'Property & Conveyancing',
  onSuccess
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [urgency, setUrgency] = useState<'standard' | 'priority' | 'urgent'>('priority');
  const [notes, setNotes] = useState('');
  const [fileAttached, setFileAttached] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;

    setIsSubmitting(true);
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
          docketId: `VET-${Math.floor(1000 + Math.random() * 9000)}/2026`
        });
      }
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2400);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d1c32]/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-[#c5c6cd]/30 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#0d1c32] px-6 py-5 text-white flex items-center justify-between border-b border-[#e9c176]/30">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded bg-[#ffdea5]/15 text-[#e9c176] material-symbols-outlined text-[20px]">
              description
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#e9c176] font-semibold">
                Confidential Drafting Instruction
              </p>
              <h3 className="font-serif text-lg font-bold leading-tight">
                {instrumentTitle}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        {isSuccess ? (
          <div className="p-8 text-center bg-[#f0f3ff]">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-[30px]">verified</span>
            </div>
            <h4 className="font-serif text-xl font-bold text-[#0d1c32] mb-2">
              Chamber Brief Transmitted
            </h4>
            <p className="text-sm text-[#44474d] mb-4">
              Your documentation brief for <strong className="text-[#0d1c32]">{instrumentTitle}</strong> has been assigned to Advocate Deepak Goyal's drafting bench.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#dee8ff] rounded-md text-xs font-mono text-[#0d1c32]">
              <span className="material-symbols-outlined text-[14px] text-[#775a19]">lock</span>
              Protected under Section 126, Indian Evidence Act
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="p-3 bg-[#f0f3ff] rounded-lg border border-[#c5c6cd]/30 flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[#775a19] text-[18px] shrink-0 mt-0.5">
                verified_user
              </span>
              <p className="text-xs text-[#44474d] leading-relaxed">
                Direct engagement with Advocate Deepak Goyal (Bar Enrolment D/1984/2004). You will receive a structured draft within 24–48 hours following telephone confirmation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0d1c32] mb-1">
                  Full Name / Entity Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Ramesh Chandra / ABC Infra"
                  className="w-full px-3 py-2 text-sm border border-[#c5c6cd]/50 rounded-md focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0d1c32] mb-1">
                  Mobile Number (WhatsApp Enabled) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="+91 98XXX XXXXX"
                  className="w-full px-3 py-2 text-sm border border-[#c5c6cd]/50 rounded-md focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0d1c32] mb-1">
                  Official Email Address
                </label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="counsel@domain.com"
                  className="w-full px-3 py-2 text-sm border border-[#c5c6cd]/50 rounded-md focus:outline-none focus:ring-1 focus:ring-[#775a19]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0d1c32] mb-1">
                  Execution Turnaround
                </label>
                <select
                  value={urgency}
                  onChange={(e: any) => setUrgency(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#c5c6cd]/50 rounded-md focus:outline-none focus:ring-1 focus:ring-[#775a19] bg-white"
                >
                  <option value="priority">Priority Vetting (24–48 Hours)</option>
                  <option value="urgent">Urgent / Registry Day (Within 12 Hours)</option>
                  <option value="standard">Standard Chamber Review (3–4 Days)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0d1c32] mb-1">
                Transaction Particulars / Key Covenants Needed
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Specify property location, agreed consideration amount, specific indemnity requirements, or counterparty conditions..."
                className="w-full px-3 py-2 text-sm border border-[#c5c6cd]/50 rounded-md focus:outline-none focus:ring-1 focus:ring-[#775a19]"
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0d1c32] mb-1">
                Attach Existing Draft / Prior Title Deed (Optional)
              </label>
              <div className="border border-dashed border-[#c5c6cd] rounded-lg p-3 text-center bg-[#f9f9ff] hover:bg-[#dee8ff]/30 transition-colors cursor-pointer relative">
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFileAttached(e.target.files[0].name);
                    }
                  }}
                />
                <span className="material-symbols-outlined text-[20px] text-[#775a19] block mb-1">
                  upload_file
                </span>
                <span className="text-xs text-[#44474d]">
                  {fileAttached ? (
                    <span className="font-semibold text-[#0d1c32]">
                      Attached: {fileAttached}
                    </span>
                  ) : (
                    'Click to upload PDF, DOCX or scanned deed copy (Max 25MB)'
                  )}
                </span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 border-t border-[#c5c6cd]/30 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-[#44474d] hover:text-[#0d1c32] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-2.5 bg-[#775a19] hover:bg-[#5f4713] text-white text-xs font-bold uppercase tracking-wider rounded shadow-md transition-colors flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Transmitting Brief...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[16px]">send</span>
                    Dispatch Drafting Instruction
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
