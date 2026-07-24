import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Industries } from '../components/Industries';
import { Statistics } from '../components/Statistics';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onBookConsultation: (serviceTitle?: string, notes?: string) => void;
  onNavigatePage: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onBookConsultation,
  onNavigatePage,
}) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero
        onBookConsultation={() => onBookConsultation()}
        onExploreServices={() => onNavigatePage('services')}
        onSelectService={(serviceTitle) => {
          onBookConsultation(serviceTitle, `Inquiry regarding ${serviceTitle}`);
        }}
      />

      {/* Services Section */}
      <Services onBookConsultation={onBookConsultation} />

      {/* Industries Served */}
      <Industries />

      {/* Animated Statistics */}
      <Statistics />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Quick Contact & Consultation Form */}
      <ContactSection />
    </div>
  );
};
