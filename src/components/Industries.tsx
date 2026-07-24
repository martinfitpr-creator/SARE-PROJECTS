import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, GraduationCap, Landmark, Building2, Shield, Globe2 } from 'lucide-react';
import { INDUSTRIES } from '../data/consultingData';

export const Industries: React.FC = () => {
  const getIndustryIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake': return <HeartHandshake className="w-8 h-8 text-[#0A2E5C]" />;
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-[#0A2E5C]" />;
      case 'Landmark': return <Landmark className="w-8 h-8 text-[#0A2E5C]" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-[#0A2E5C]" />;
      case 'Shield': return <Shield className="w-8 h-8 text-[#0A2E5C]" />;
      default: return <Globe2 className="w-8 h-8 text-[#0A2E5C]" />;
    }
  };

  return (
    <section id="industries" className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9962C] bg-[#C9962C]/10 px-3.5 py-1.5 rounded-full">
            Sectors We Empower
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111827]">
            Industries & Client Partnerships
          </h2>
          <p className="text-base text-[#6B7280]">
            We deliver specialized compliance, research execution, and administrative support across key South African and international sectors.
          </p>
        </div>

        {/* Logo-Style Industry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, index) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl border border-[#E5E7EB] hover:border-[#0A2E5C] transition-all duration-300 shadow-2xs hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                {/* Logo style Icon Badge */}
                <div className="w-16 h-16 rounded-2xl bg-[#F8FAFC] group-hover:bg-[#0A2E5C]/10 border border-[#E5E7EB] flex items-center justify-center mb-6 transition-colors">
                  {getIndustryIcon(ind.iconName)}
                </div>

                <h3 className="text-lg font-heading font-bold text-[#0A2E5C] mb-2 group-hover:text-[#C9962C] transition-colors">
                  {ind.name}
                </h3>

                <p className="text-xs text-[#6B7280] leading-relaxed mb-6 font-normal">
                  {ind.shortDesc}
                </p>
              </div>

              {/* Stats / Metric Tag */}
              <div className="pt-4 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-2xs font-semibold text-[#0A2E5C]">
                <span className="bg-[#0A2E5C]/5 px-2.5 py-1 rounded-md text-[#0A2E5C] leading-tight">
                  {ind.stats}
                </span>
                <span className="text-[#C9962C] shrink-0 whitespace-nowrap">Specialized Sector</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
