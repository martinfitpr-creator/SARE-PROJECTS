import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, FileSpreadsheet, Briefcase, UserCheck, Globe, BarChart3, Users, Clock, FileText } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookConsultation: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookConsultation }) => {
  if (!service) return null;

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#C9962C]" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6 text-[#C9962C]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#C9962C]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#C9962C]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#C9962C]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#C9962C]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#C9962C]" />;
      default: return <Users className="w-6 h-6 text-[#C9962C]" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A2E5C]/60 backdrop-blur-xs"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative bg-white rounded-3xl shadow-2xl border border-[#E5E7EB] max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10 p-6 sm:p-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full text-[#6B7280] hover:text-[#111827] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Service Header */}
          <div className="space-y-4 pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2E5C]/5 text-[#0A2E5C] text-xs font-semibold">
              {getIcon(service.iconName)}
              <span>{service.category}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#111827]">
              {service.title}
            </h2>
            <div className="w-16 h-1 bg-[#C9962C] rounded-full"></div>
          </div>

          {/* Description */}
          <div className="mt-6 space-y-4 text-sm sm:text-base text-[#6B7280] leading-relaxed border-b border-[#E5E7EB] pb-6">
            <p className="text-[#111827] font-medium text-base sm:text-lg">
              {service.shortDesc}
            </p>
            <p>{service.fullDesc}</p>
          </div>

          {/* Grid: Deliverables & Key Benefits */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Specific Deliverables */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2E5C] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C9962C]" />
                Key Scope & Deliverables
              </h3>
              <ul className="space-y-2.5">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#111827]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9962C] mt-1.5 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Client Benefits */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2E5C] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C9962C]" />
                Strategic Advantages
              </h3>
              <ul className="space-y-2.5">
                {service.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#6B7280]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Target Clients Tags */}
          <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-2xs font-semibold uppercase tracking-wider text-[#6B7280] block mb-2">
                Ideal For Organizations In:
              </span>
              <div className="flex flex-wrap gap-2">
                {service.targetClients.map((client, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E5E7EB] text-2xs font-medium text-[#0A2E5C]"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookConsultation(service.title);
              }}
              className="px-6 py-3 bg-[#C9962C] hover:bg-[#b08223] text-white font-semibold text-sm rounded-xl shadow-md flex items-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5"
            >
              <span>Book This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
