import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, FileSpreadsheet, Briefcase, UserCheck, Globe, BarChart3, Users, CheckCircle2, FileText } from 'lucide-react';
import { SERVICES } from '../data/consultingData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesProps {
  onBookConsultation: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#0A2E5C]" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6 text-[#0A2E5C]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#0A2E5C]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#0A2E5C]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#0A2E5C]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#0A2E5C]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#0A2E5C]" />;
      default: return <Users className="w-6 h-6 text-[#0A2E5C]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9962C] bg-[#C9962C]/10 px-3.5 py-1.5 rounded-full">
            Our Core Practice Areas
          </span>
          <h2 className="text-[42px] md:text-[52px] font-heading font-extrabold text-[#0F2746] tracking-tight uppercase leading-tight">
            OUR SERVICES
          </h2>
          <p className="text-[18px] font-body font-normal text-[#6B7280] leading-relaxed">
            Comprehensive business, research, compliance and administrative solutions tailored to help organisations grow.
          </p>
        </div>

        {/* Services Grid (Large Premium Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-[#F8FAFC] hover:bg-white rounded-2xl p-7 sm:p-8 border border-[#E5E7EB] hover:border-[#0A2E5C]/30 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Subtle Gold Accent Line at Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9962C] opacity-80 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Icon & Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#0A2E5C]/10 border border-[#E5E7EB] flex items-center justify-center transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-2xs font-semibold uppercase tracking-wider text-[#6B7280] bg-white px-2.5 py-1 rounded-md border border-[#E5E7EB]">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-[22px] md:text-[32px] font-heading font-bold text-[#0F2746] mb-5 transition-colors leading-tight">
                  {service.title}
                </h3>

                {/* Service Items (Deliverables) */}
                <div className="space-y-3 mb-8">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[15px] md:text-[16px] font-body font-normal text-[#111827]">
                      <CheckCircle2 className="w-4 h-4 text-[#C9962C] shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Line */}
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-semibold text-[#0A2E5C] group-hover:text-[#C9962C] transition-colors">
                <span>Learn More & Scope</span>
                <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#C9962C] text-[#0A2E5C] group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 bg-[#0A2E5C] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#0A2E5C] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Need a Custom Compliance or Research Package?
            </h3>
            <p className="text-sm text-white/80 max-w-xl">
              We tailor multi-service solutions for donor grant milestones, university research projects, and NPO statutory turnarounds.
            </p>
          </div>

          <button
            onClick={() => onBookConsultation('Custom Practice Package')}
            className="px-6 py-3.5 bg-[#C9962C] hover:bg-[#b08223] text-white font-semibold text-sm rounded-xl shadow-md transition-transform hover:-translate-y-0.5 shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Request Custom Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookConsultation={onBookConsultation}
      />
    </section>
  );
};
