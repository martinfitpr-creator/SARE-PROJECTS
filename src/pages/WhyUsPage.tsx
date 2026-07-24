import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  Lock, 
  CheckCircle2, 
  Users, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  FileCheck 
} from 'lucide-react';
import { WHY_CHOOSE_US, PROCESS_STEPS } from '../data/consultingData';

interface WhyUsPageProps {
  onBookConsultation: () => void;
  onNavigatePage: (page: string) => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({
  onBookConsultation,
}) => {
  return (
    <div className="pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-[#0A2E5C] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="px-3.5 py-1 rounded-full bg-[#C9962C]/20 border border-[#C9962C]/40 text-[#C9962C] text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Our Value Proposition
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight">
              Why Premier Organizations Choose SARE Projects Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Discover what sets our compliance practice, qualitative research support, and virtual executive assistant services apart across South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* 7 Key Pillars of Distinction */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#111827]">
              The 7 Pillars of Distinction
            </h2>
            <p className="mt-2 text-sm text-[#6B7280]">
              Built to eliminate operational friction and guarantee statutory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-[#E5E7EB] shadow-xs hover:shadow-xl transition-all space-y-4 hover:border-[#C9962C]/40"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0A2E5C] text-white flex items-center justify-center font-heading font-extrabold text-lg">
                  <span className="text-[#C9962C]">0</span>{idx + 1}
                </div>

                <h3 className="text-xl font-heading font-bold text-[#111827]">
                  {item.title}
                </h3>

                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#111827]">
              Our Proven Engagement Methodology
            </h2>
            <p className="mt-2 text-sm text-[#6B7280]">
              From initial discovery to ongoing retainer maintenance.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-[#E5E7EB] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-center gap-4 shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A2E5C] text-[#C9962C] font-heading font-extrabold text-xl flex items-center justify-center">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-[#111827]">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {step.keyOutputs.map((out, idx) => (
                      <span key={idx} className="text-2xs font-medium text-[#0A2E5C] bg-white border border-[#E5E7EB] px-2.5 py-1 rounded-md">
                        ✓ {out}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Guarantees Banner */}
      <section className="py-12 bg-[#0A2E5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#C9962C] mx-auto" />
              <h4 className="text-sm font-bold">100% Statutory Standing Guarantee</h4>
              <p className="text-2xs text-slate-300">Zero CIPC deregistration risk for managed client entities.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <Lock className="w-8 h-8 text-[#C9962C] mx-auto" />
              <h4 className="text-sm font-bold">Bank-Grade Confidentiality</h4>
              <p className="text-2xs text-slate-300">Strict non-disclosure agreements across all research & financial data.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <MapPin className="w-8 h-8 text-[#C9962C] mx-auto" />
              <h4 className="text-sm font-bold">Nationwide Footprint</h4>
              <p className="text-2xs text-slate-300">Active field operations and client support across all 9 SA provinces.</p>
            </div>

          </div>

          <div className="mt-10 text-center">
            <button
              onClick={onBookConsultation}
              className="px-8 py-3.5 bg-[#C9962C] hover:bg-[#b08223] text-white font-bold text-xs rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              <span>Book Your Executive Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
