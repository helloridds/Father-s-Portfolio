/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutView } from './components/AboutView';
import { DocumentationView } from './components/DocumentationView';
import { ScheduleConsultationView } from './components/ScheduleConsultationView';
import { ExpertiseView } from './components/ExpertiseView';
import { TrackRecordView } from './components/TrackRecordView';
import { ClientReviewsView } from './components/ClientReviewsView';
import { ContactChamberView } from './components/ContactChamberView';
import { DraftBriefModal } from './components/DraftBriefModal';
import { PrivilegeDocketModal } from './components/PrivilegeDocketModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('about');

  // Modal State: Draft Brief
  const [draftModalOpen, setDraftModalOpen] = useState(false);
  const [draftInstrument, setDraftInstrument] = useState({
    title: 'Sale Deed / Absolute Conveyance',
    category: 'Real Estate'
  });

  // Modal State: Priority Booking Privilege Docket
  const [docketModalOpen, setDocketModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState<any>(null);

  // Scroll to top when active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleOpenDraftBrief = (instrumentTitle: string, category: string) => {
    setDraftInstrument({ title: instrumentTitle, category });
    setDraftModalOpen(true);
  };

  const handleOpenBookingDocket = (data: any) => {
    setBookingData(data);
    setDocketModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#0d1c32] font-sans antialiased flex flex-col selection:bg-[#ffdea5] selection:text-[#261900]">
      {/* Institutional Top Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onBookClick={() => setActiveTab('schedule-consultation')}
      />

      {/* Main Content Area (offset for fixed header height: 80px + 32px top strip on desktop) */}
      <main className="flex-1 pt-20 lg:pt-[112px] flex flex-col">
        {activeTab === 'about' && (
          <AboutView
            setActiveTab={setActiveTab}
            onOpenBookingDocket={handleOpenBookingDocket}
            onOpenDraftBrief={handleOpenDraftBrief}
          />
        )}

        {activeTab === 'expertise-and-paperwork' && (
          <ExpertiseView
            setActiveTab={setActiveTab}
            onOpenDraftBrief={handleOpenDraftBrief}
          />
        )}

        {activeTab === 'documentation-services' && (
          <DocumentationView
            setActiveTab={setActiveTab}
            onOpenDraftBrief={handleOpenDraftBrief}
          />
        )}

        {activeTab === 'track-record' && (
          <TrackRecordView
            setActiveTab={setActiveTab}
            onOpenDraftBrief={handleOpenDraftBrief}
          />
        )}

        {activeTab === 'client-reviews' && (
          <ClientReviewsView
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'contact-and-chamber' && (
          <ContactChamberView
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'schedule-consultation' && (
          <ScheduleConsultationView
            onOpenBookingDocket={handleOpenBookingDocket}
          />
        )}
      </main>

      {/* Modals */}
      <DraftBriefModal
        isOpen={draftModalOpen}
        onClose={() => setDraftModalOpen(false)}
        instrumentTitle={draftInstrument.title}
        category={draftInstrument.category}
        onSuccess={(result) => {
          // If needed, show follow up
        }}
      />

      <PrivilegeDocketModal
        isOpen={docketModalOpen}
        onClose={() => setDocketModalOpen(false)}
        bookingData={bookingData}
      />

      {/* Institutional Footer */}
      <Footer
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
