import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { ContactPage } from './pages/ContactPage';
import { ConsultationModal } from './components/ConsultationModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('Business Compliance Services');
  const [customBookingNotes, setCustomBookingNotes] = useState('');

  // Handle URL Hash sync for multi-page deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'services', 'industries', 'why-us', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigatePage = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceTitle?: string, notes?: string) => {
    if (serviceTitle) setSelectedServiceForBooking(serviceTitle);
    if (notes) setCustomBookingNotes(notes);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] font-body selection:bg-[#C9962C]/20 selection:text-[#0A2E5C] flex flex-col justify-between">
      <div>
        {/* Sticky Header Navigation */}
        <Navbar
          currentPage={currentPage}
          onNavigatePage={handleNavigatePage}
          onBookConsultation={() => handleOpenBooking()}
        />

        {/* Dynamic Page Rendering */}
        <main>
          {currentPage === 'home' && (
            <HomePage
              onBookConsultation={handleOpenBooking}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage
              onBookConsultation={() => handleOpenBooking()}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              onBookConsultation={handleOpenBooking}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {currentPage === 'industries' && (
            <IndustriesPage
              onBookConsultation={handleOpenBooking}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {currentPage === 'why-us' && (
            <WhyUsPage
              onBookConsultation={() => handleOpenBooking()}
              onNavigatePage={handleNavigatePage}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage
              onBookConsultation={handleOpenBooking}
              initialService={selectedServiceForBooking}
              initialNotes={customBookingNotes}
            />
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer onNavigatePage={handleNavigatePage} />

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        presetService={selectedServiceForBooking}
        presetNotes={customBookingNotes}
      />

      {/* Floating WhatsApp Business Chat Widget */}
      <WhatsAppWidget />
    </div>
  );
}
