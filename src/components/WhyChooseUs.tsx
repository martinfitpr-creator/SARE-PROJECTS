import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data/consultingData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Sticky Header Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C9962C] bg-[#C9962C]/10 px-3.5 py-1.5 rounded-full">
              Why SARE Projects Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#111827] tracking-tight leading-tight">
              Designed for Uncompromising Accuracy & Impact
            </h2>
            <p className="text-base text-[#6B7280] leading-relaxed">
              We combine deep statutory regulatory mastery with flexible, hands-on operational support to protect your organization and elevate your mission.
            </p>

            <div className="pt-4 p-6 bg-[#0A2E5C] text-white rounded-2xl border border-[#0A2E5C] shadow-lg">
              <div className="text-2xs font-semibold uppercase tracking-widest text-[#C9962C] mb-1">
                Our Guarantee
              </div>
              <p className="text-sm font-heading font-semibold text-white leading-snug">
                100% statutory compliance accuracy and strict ethical confidentiality across all research and financial assignments.
              </p>
            </div>
          </div>

          {/* Right Feature Rows Column */}
          <div className="lg:col-span-7 space-y-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#0A2E5C] transition-all duration-300 group hover:bg-white hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  {/* Small Gold Accent Line */}
                  <div className="w-1.5 h-10 bg-[#C9962C] rounded-full shrink-0 group-hover:h-12 transition-all"></div>
                  
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-heading font-bold text-[#0A2E5C] group-hover:text-[#0A2E5C] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed font-normal">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
