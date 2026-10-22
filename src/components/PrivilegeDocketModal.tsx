import React from 'react';
import { ADVOCATE_INFO } from '../data/legalData';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d1c32]/80 backdrop-blur-sm print:p-0 print:bg-white">
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-[#c5c6cd]/40 overflow-hidden print:shadow-none print:border-none">
        {/* Header */}
        <div className="bg-[#0d1c32] px-6 py-4 text-white flex items-center justify-between border-b border-[#e9c176]/30">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#e9c176] text-[22px]">
              verified
            </span>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#ffdea5]">
                Jaipur Sessions Court Practice
              </p>
              <h3 className="font-serif text-base font-bold text-white">
                Consultation Confirmation Slip
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2 print:hidden">
            <button
              onClick={handlePrint}
              className="p-1 rounded text-white/80 hover:text-white"
              title="Print"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-white/80 hover:text-white"
              title="Close"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[85vh] overflow-y-auto text-xs">
          {/* Token Box */}
          <div className="bg-[#f0f3ff] border border-[#c5c6cd]/30 rounded-xl p-4 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase text-[#775a19] font-bold block">
                Appointment Reference Token
              </span>
              <span className="font-mono text-xl font-bold text-[#0d1c32]">
                {bookingData.token || 'DG-4821/2026'}
              </span>
            </div>
            <div className="text-right">
              <span className="inline-block px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded font-semibold text-[11px]">
                Sent to Advocate's Phone
              </span>
              <span className="block text-[10px] text-[#76849f] mt-1">
                Direct Contact: {ADVOCATE_INFO.phoneFormatted}
              </span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-[#f9f9ff] rounded border border-[#c5c6cd]/20">
              <span className="text-[#76849f] text-[10px] font-semibold block uppercase">Client Name</span>
              <strong className="text-[#0d1c32] text-xs block">{bookingData.name}</strong>
              <span className="text-[#44474d]">{bookingData.phone}</span>
            </div>

            <div className="p-3 bg-[#f9f9ff] rounded border border-[#c5c6cd]/20">
              <span className="text-[#76849f] text-[10px] font-semibold block uppercase">Advocate</span>
              <strong className="text-[#0d1c32] text-xs block">{ADVOCATE_INFO.name}</strong>
              <span className="text-[#44474d]">{ADVOCATE_INFO.courtShort}</span>
            </div>

            <div className="p-3 bg-[#f9f9ff] rounded border border-[#c5c6cd]/20">
              <span className="text-[#76849f] text-[10px] font-semibold block uppercase">Service</span>
              <strong className="text-[#0d1c32] text-xs block">{bookingData.domain}</strong>
            </div>

            <div className="p-3 bg-[#f9f9ff] rounded border border-[#c5c6cd]/20">
              <span className="text-[#76849f] text-[10px] font-semibold block uppercase">Date & Window</span>
              <strong className="text-[#0d1c32] text-xs block">{bookingData.date}</strong>
              <span className="text-[#775a19] font-medium">{bookingData.time}</span>
            </div>
          </div>

          {/* Location Box */}
          <div className="p-3.5 bg-white border border-[#c5c6cd]/30 rounded-lg space-y-1">
            <strong className="text-[#0d1c32] block flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#775a19]">location_on</span>
              Chamber Location:
            </strong>
            <p className="text-[#44474d] text-[11px]">
              {ADVOCATE_INFO.chamberAddress}
            </p>
            <p className="text-[#76849f] text-[11px]">
              Landmark: Near Collectorate Circle, Sessions Court Complex, Bani Park, Jaipur.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f0f3ff] px-6 py-3 border-t border-[#c5c6cd]/30 flex items-center justify-between text-xs print:hidden">
          <a
            href={`https://wa.me/91${ADVOCATE_INFO.phone}?text=${encodeURIComponent(`Hello Advocate Deepak Goyal ji, my appointment reference is ${bookingData.token || ''}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[15px]">chat</span>
            WhatsApp Advocate ({ADVOCATE_INFO.phoneFormatted})
          </a>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#0d1c32] text-white font-bold rounded"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
