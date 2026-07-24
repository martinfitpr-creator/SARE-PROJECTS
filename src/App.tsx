import React, { useState, useEffect, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';

const HomePage = React.lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const AboutPage = React.lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const IndustriesPage = React.lazy(() => import('./pages/IndustriesPage').then(module => ({ default: module.IndustriesPage })));
const ContactPage = React.lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('Website Design & Digital Solutions');
  const [customBookingNotes, setCustomBookingNotes] = useState('');
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    // Defer non-critical widget load for Lighthouse TBT/TTI improvements
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Handle URL Hash sync for multi-page deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'services', 'industries', 'contact'];
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
          <Suspense fallback={
            <div className="min-h-[60vh] bg-white flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-[#0A2E5C] border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
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

            {currentPage === 'contact' && (
              <ContactPage
                onBookConsultation={handleOpenBooking}
                initialService={selectedServiceForBooking}
                initialNotes={customBookingNotes}
              />
            )}
          </Suspense>
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
      {showWhatsApp && <WhatsAppWidget />}
    </div>
  );
}
