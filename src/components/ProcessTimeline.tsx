import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/consultingData';
import { CheckCircle2, Clock } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9962C] bg-[#C9962C]/10 px-3.5 py-1.5 rounded-full">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111827]">
            How We Partner With You
          </h2>
          <p className="text-base text-[#6B7280]">
            A structured 5-phase consulting methodology ensuring total transparency, rapid execution, and verifiable results.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-0.5 bg-[#E5E7EB] z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-white p-6 rounded-2xl border border-[#E5E7EB] hover:border-[#0A2E5C] transition-all duration-300 shadow-2xs hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="w-12 h-12 rounded-xl bg-[#0A2E5C] text-white font-heading font-extrabold text-lg flex items-center justify-center mb-6 shadow-md border-2 border-white group-hover:bg-[#C9962C] transition-colors">
                    {step.step}
                  </div>

                  <div className="flex items-center justify-between text-2xs text-[#6B7280] font-medium mb-2">
                    <span className="uppercase tracking-wider">Phase {step.step}</span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-[#0A2E5C] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#6B7280] leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Key Outputs */}
                <div className="pt-4 border-t border-[#E5E7EB] space-y-1.5">
                  <span className="text-3xs font-bold uppercase tracking-wider text-[#0A2E5C]">
                    Key Deliverables
                  </span>
                  {step.keyOutputs.map((out, oIdx) => (
                    <div key={oIdx} className="flex items-center gap-1.5 text-3xs font-medium text-[#111827]">
                      <CheckCircle2 className="w-3 h-3 text-[#C9962C] shrink-0" />
                      <span className="line-clamp-1">{out}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
