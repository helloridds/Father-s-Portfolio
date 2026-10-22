import React from 'react';

interface PrivilegeDocketModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: {
    token?: string;
    name?: string;
    phone?: string;
    email?: string;
    forum?: string;
    domain?: string;
    date?: string;
    time?: string;
    summary?: string;
  } | null;
}

export const PrivilegeDocketModal: React.FC<PrivilegeDocketModalProps> = ({
  isOpen,
  onClose,
  bookingData
}) => {
  if (!isOpen || !bookingData) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d1c32]/80 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#c5c6cd]/40 overflow-hidden print:shadow-none print:border-none">
        {/* Security / Privilege Bar */}
        <div className="bg-[#0d1c32] px-6 py-4 text-white flex items-center justify-between border-b border-[#e9c176]/30">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#e9c176] text-[24px]">
              encrypted
            </span>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#ffdea5]">
                Section 126 Evidence Act Privilege Token
              </p>
              <h3 className="font-serif text-base font-bold text-white">
                Chamber Admission & Consultation Docket
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2 print:hidden">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              title="Print Privilege Docket"
            >
              <span className="material-symbols-outlined text-[20px]">print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              title="Close"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Docket Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
          {/* Top Token Badge */}
          <div className="bg-[#f0f3ff] border border-[#c5c6cd]/30 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#775a19] font-bold block">
                Appointment Reference Token
              </span>
              <span className="font-mono text-2xl font-black text-[#0d1c32] tracking-wider">
                {bookingData.token || 'DG-4821/2026'}
              </span>
              <p className="text-xs text-[#44474d] mt-1">
                Issued for Priority Admission at Delhi High Court Chambers
              </p>
            </div>
            <div className="flex flex-col items-end text-right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dee8ff] text-[#0d1c32] text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                Confirmed in Chamber Register
              </span>
              <span className="text-[11px] text-[#76849f] mt-1">
                Generated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
              </span>
            </div>
          </div>

          {/* Litigant & Consultation Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 bg-[#f9f9ff] rounded-lg border border-[#c5c6cd]/20">
              <span className="text-[#76849f] font-semibold block mb-0.5 uppercase tracking-wider text-[10px]">
                Litigant / Instructing Client
              </span>
              <span className="font-bold text-[#0d1c32] text-sm block">
                {bookingData.name || 'Instructing Client'}
              </span>
              <span className="text-[#44474d]">
                {bookingData.phone} {bookingData.email ? `• ${bookingData.email}` : ''}
              </span>
            </div>

            <div className="p-3.5 bg-[#f9f9ff] rounded-lg border border-[#c5c6cd]/20">
              <span className="text-[#76849f] font-semibold block mb-0.5 uppercase tracking-wider text-[10px]">
                Counsel Assigned
              </span>
              <span className="font-bold text-[#0d1c32] text-sm block">
                Advocate Deepak Goyal
              </span>
              <span className="text-[#44474d]">
                Bar Council of Delhi (D/1984/2004)
              </span>
            </div>

            <div className="p-3.5 bg-[#f9f9ff] rounded-lg border border-[#c5c6cd]/20">
              <span className="text-[#76849f] font-semibold block mb-0.5 uppercase tracking-wider text-[10px]">
                Consultation Window
              </span>
              <span className="font-bold text-[#0d1c32] text-sm block">
                {bookingData.date || 'Scheduled Date'}
              </span>
              <span className="text-[#775a19] font-semibold">
                {bookingData.time || '10:30 AM – 01:00 PM IST'}
              </span>
            </div>

            <div className="p-3.5 bg-[#f9f9ff] rounded-lg border border-[#c5c6cd]/20">
              <span className="text-[#76849f] font-semibold block mb-0.5 uppercase tracking-wider text-[10px]">
                Forum / Mode
              </span>
              <span className="font-bold text-[#0d1c32] text-sm block">
                {bookingData.forum || 'In-Chamber (Delhi High Court Complex)'}
              </span>
              <span className="text-[#44474d]">
                {bookingData.domain || 'Property Title Deeds & Conveyance'}
              </span>
            </div>
          </div>

          {/* Venue & Gate Access Instructions */}
          <div className="border border-[#c5c6cd]/30 rounded-xl p-4 bg-white">
            <h4 className="text-xs font-bold text-[#0d1c32] uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#775a19]">location_on</span>
              Chamber Access & High Court Gate Passes
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#44474d]">
              <div>
                <p className="font-semibold text-[#0d1c32]">Chamber Location:</p>
                <p>Chamber No. 412, Block C, High Court of Delhi, Sher Shah Road, New Delhi 110503</p>
                <p className="mt-1 text-[11px] text-[#76849f]">
                  Nearest Metro: Supreme Court / Khan Market (Exit Gate 2)
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#0d1c32]">Security Protocol:</p>
                <p>Show this confirmation token at Gate No. 7 High Court Security for expedited visitor badge issuance. Please carry an original Government Photo ID.</p>
              </div>
            </div>
          </div>

          {/* Preparation Checklist */}
          <div className="bg-[#dee8ff]/30 border border-[#dee8ff] rounded-xl p-4">
            <h4 className="text-xs font-bold text-[#0d1c32] uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#775a19]">task_alt</span>
              Documents to Keep in Readiness
            </h4>
            <ul className="text-xs text-[#44474d] space-y-1 list-disc list-inside">
              <li>Chronological narrative or prior correspondence relating to the matter.</li>
              <li>Photocopies of prior parent deeds, registry receipts, or agreements (if property-related).</li>
              <li>Aadhaar/PAN card of the instructing client or authorized signatory.</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#f0f3ff] px-6 py-4 border-t border-[#c5c6cd]/30 flex items-center justify-between text-xs print:hidden">
          <span className="text-[#76849f] flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px] text-[#775a19]">phone_in_talk</span>
            Clerk Direct Helpline: +91 98102 44920
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 border border-[#c5c6cd] bg-white hover:bg-[#dee8ff]/30 text-[#0d1c32] font-semibold rounded transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[15px]">print</span>
              Print Slip
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#0d1c32] hover:bg-[#1a2f4c] text-white font-semibold rounded transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
