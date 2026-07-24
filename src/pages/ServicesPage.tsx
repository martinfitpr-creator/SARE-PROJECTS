import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  FileSpreadsheet, 
  Briefcase, 
  UserCheck, 
  Globe, 
  BarChart3, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  FileText, 
  Sparkles,
  Search,
  X
} from 'lucide-react';
import { SERVICES } from '../data/consultingData';
import { ServiceItem } from '../types';

interface ServicesPageProps {
  onBookConsultation: (serviceTitle?: string, notes?: string) => void;
  onNavigatePage: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onBookConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Regulatory & Governance', 'Research & Fieldwork', 'Grants & Funding', 'Executive Operations', 'Localization & Communication', 'Data Science & Insights'];

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#C9962C]" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6 text-[#C9962C]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#C9962C]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#C9962C]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#C9962C]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#C9962C]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#C9962C]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#C9962C]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#C9962C]" />;
    }
  };

  return (
    <div className="pb-20 bg-[#F8FAFC]">
      {/* Header Banner */}
      <section className="bg-[#0A2E5C] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="px-3.5 py-1 rounded-full bg-[#C9962C]/20 border border-[#C9962C]/40 text-[#C9962C] text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Practice Areas & Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight">
              Comprehensive Services Tailored for South African Impact
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Explore our full suite of statutory compliance management, field research execution, grant proposal writing, translation, and executive assistant services.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-[#E5E7EB] sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
              />
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0A2E5C] text-white shadow-xs'
                    : 'bg-[#F8FAFC] text-[#6B7280] hover:text-[#111827] hover:bg-gray-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#C9962C]/50"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#0A2E5C]/10 flex items-center justify-center group-hover:bg-[#0A2E5C] transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-2xs font-bold uppercase tracking-wider text-[#6B7280] bg-[#F8FAFC] px-2.5 py-1 rounded-md">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#111827] group-hover:text-[#0A2E5C] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#E5E7EB]">
                    <div className="text-2xs font-bold uppercase tracking-wider text-[#0A2E5C]">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-1.5">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-2xs text-[#4B5563]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E7EB] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-bold text-[#0A2E5C] hover:text-[#C9962C] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookConsultation(service.title, `Inquiry regarding ${service.title}`)}
                    className="px-4 py-2 bg-[#C9962C] hover:bg-[#b08223] text-white text-xs font-bold rounded-xl shadow-xs transition-transform hover:-translate-y-0.5"
                  >
                    Request Service
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalService(null)}
              className="fixed inset-0 bg-[#0A2E5C]/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl border border-[#E5E7EB] max-w-2xl w-full p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto space-y-6"
            >
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-6 right-6 p-2 rounded-full text-[#6B7280] hover:text-[#111827] hover:bg-[#F8FAFC]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#C9962C]/15 flex items-center justify-center">
                  {getIcon(activeModalService.iconName)}
                </div>
                <div>
                  <span className="text-2xs font-bold uppercase tracking-wider text-[#C9962C]">
                    {activeModalService.category}
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-[#111827]">
                    {activeModalService.title}
                  </h2>
                </div>
              </div>

              <p className="text-sm text-[#4B5563] leading-relaxed">
                {activeModalService.fullDesc}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A2E5C]">
                  Core Deliverables & Outputs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalService.deliverables.map((del, idx) => (
                    <div key={idx} className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] text-xs font-medium text-[#111827] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A2E5C]">
                  Target Clients
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalService.targetClients.map((client, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#0A2E5C]/10 text-[#0A2E5C] text-xs font-semibold rounded-full">
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between gap-4">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-5 py-2.5 bg-[#F8FAFC] text-[#6B7280] hover:text-[#111827] font-semibold text-xs rounded-xl"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onBookConsultation(title, `Specific interest in ${title}`);
                  }}
                  className="px-6 py-2.5 bg-[#C9962C] hover:bg-[#b08223] text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
