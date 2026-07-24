import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Compass, Award, CheckCircle2, Quote } from 'lucide-react';
import { COMPANY_INFO, VALUES } from '../data/consultingData';

export const AboutDirector: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle Background Mesh Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9962C] bg-[#C9962C]/10 px-3.5 py-1.5 rounded-full">
            Leadership & Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111827]">
            About SARE Projects Solutions
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed">
            A dynamic business support, research, compliance, and development consulting partner committed to empowering South African organizations.
          </p>
        </div>

        {/* Grid: Left Image (Director Regina Rikhotso), Right Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Director Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-[#C9962C]/40 transform -rotate-2 pointer-events-none"></div>

              {/* Main Image Wrapper */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0A2E5C] aspect-4/5 border border-[#E5E7EB]">
                <img
                  src={COMPANY_INFO.images.director}
                  alt="Director Regina Rikhotso"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                
                {/* Director Badge Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-[#0A2E5C]/95 via-[#0A2E5C]/70 to-transparent p-6 text-white">
                  <div className="text-xl font-heading font-bold text-white">Regina Rikhotso</div>
                  <div className="text-xs text-[#C9962C] font-semibold tracking-wide uppercase">
                    {COMPANY_INFO.director.title}
                  </div>
                  <p className="mt-2 text-2xs text-white/80 line-clamp-2">
                    Leading SARE Projects Solutions with deep expertise in compliance, research, and governance.
                  </p>
                </div>
              </div>

              {/* Quote Card (Positioned below image instead of overlapping) */}
              <div className="mt-6 bg-white p-5 rounded-2xl shadow-xl border border-[#E5E7EB] w-full z-20">
                <Quote className="w-6 h-6 text-[#C9962C] mb-2" />
                <p className="text-2xs italic text-[#111827] leading-relaxed font-medium">
                  "{COMPANY_INFO.director.quote}"
                </p>
                <div className="mt-2 text-3xs font-bold uppercase tracking-wider text-[#0A2E5C]">
                  — Director's Statement
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Company Story, Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#111827] leading-tight">
                Empowering Clients to Focus on Strategic Goals
              </h3>
              <p className="text-base text-[#6B7280] leading-relaxed">
                {COMPANY_INFO.director.bio}
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Vision Card */}
              <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs hover:border-[#C9962C] transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A2E5C]/10 flex items-center justify-center text-[#0A2E5C]">
                    <Compass className="w-5 h-5 text-[#0A2E5C]" />
                  </div>
                  <h4 className="font-heading font-bold text-[#0A2E5C] text-lg">Our Vision</h4>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  To be a leading business support and research services partner that empowers organizations to achieve compliance, efficiency, and sustainable impact across South Africa and the wider region.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs hover:border-[#C9962C] transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C9962C]/15 flex items-center justify-center text-[#C9962C]">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-[#0A2E5C] text-lg">Our Mission</h4>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  To provide high-quality administrative, compliance, research, and development support services that enable clients to focus on achieving their strategic goals.
                </p>
              </div>

            </div>

            {/* Key Strengths Pills */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              {["15+ Yrs Industry Leadership", "100% Statutory Compliance", "Multilingual Fieldwork", "Donor Reporting Mastery"].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-[#E5E7EB] text-xs font-semibold text-[#0A2E5C] shadow-2xs flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9962C]" />
                  {tag}
                </span>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Core Values Grid (No traditional icon circles - elegant cards with clean borders as requested) */}
        <div className="pt-10">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#111827]">
              Our Core Values
            </h3>
            <p className="text-xs text-[#6B7280] mt-1">
              Guiding principles behind every report, audit, and consultation we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((val, index) => (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-5 rounded-xl border border-[#E5E7EB] hover:border-[#0A2E5C] transition-all duration-300 shadow-2xs group hover:shadow-md"
              >
                <div className="w-1.5 h-6 bg-[#C9962C] rounded-full mb-3 group-hover:scale-y-125 transition-transform origin-top"></div>
                <h4 className="font-heading font-bold text-[#0A2E5C] text-base mb-1.5">
                  {val.title}
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
