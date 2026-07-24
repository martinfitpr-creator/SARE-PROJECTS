import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Lock, 
  CheckCircle2, 
  Lightbulb, 
  Smile, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Target, 
  Eye, 
  Users, 
  Building2,
  Briefcase
} from 'lucide-react';
import { COMPANY_INFO, VALUES } from '../data/consultingData';
import directorImg from '../assets/images/regina_new.png';

interface AboutPageProps {
  onBookConsultation: () => void;
  onNavigatePage: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBookConsultation,
  onNavigatePage,
}) => {
  return (
    <div className="pb-20 bg-white">
      {/* Hero Header Banner */}
      <section className="bg-[#0A2E5C] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9962C_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="px-3.5 py-1 rounded-full bg-[#C9962C]/20 border border-[#C9962C]/40 text-[#C9962C] text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              About Our Practice
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight">
              Empowering Organizations Through Compliance, Research & Governance
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              SARE Projects Solutions is a premier South African consulting firm providing end-to-end statutory compliance filings, academic & development field research, grant proposal preparation, and virtual executive assistant support.
            </p>
          </div>
        </div>
      </section>

      {/* Main Director Profile Spotlight */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Director Photo Frame */}
            <div className="lg:col-span-5 relative mb-6 lg:mb-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={directorImg}
                  alt={COMPANY_INFO.director.name}
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[520px]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A2E5C]/90 via-[#0A2E5C]/30 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
                  <div className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                    {COMPANY_INFO.director.name}
                  </div>
                  <div className="text-xs text-[#C9962C] font-semibold uppercase tracking-wider">
                    {COMPANY_INFO.director.title}
                  </div>
                </div>
              </div>

              {/* Floating Award Badge - Fixed layout on mobile so it doesn't overlay text */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-[#E5E7EB] flex items-center gap-3 max-w-xs z-10 mx-auto sm:mx-0">
                <div className="w-10 h-10 rounded-xl bg-[#C9962C]/15 text-[#C9962C] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-bold text-[#111827] leading-tight">15+ Years Leadership</div>
                  <div className="text-xs text-[#6B7280] leading-tight">Compliance & Development Expertise</div>
                </div>
              </div>
            </div>

            {/* Director Bio & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9962C] bg-[#C9962C]/10 px-3 py-1 rounded-full">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Executive Leadership</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#111827]">
                Meet Regina Rikhotso
              </h2>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                {COMPANY_INFO.director.bio}
              </p>

              {/* Director Quote Card */}
              <div className="p-6 rounded-2xl bg-[#0A2E5C] text-white space-y-3 relative overflow-hidden border-l-4 border-[#C9962C]">
                <p className="text-xs sm:text-sm italic text-slate-100 font-medium leading-relaxed">
                  "{COMPANY_INFO.director.quote}"
                </p>
                <div className="text-2xs text-[#C9962C] font-bold uppercase tracking-wider pt-2">
                  — Regina Rikhotso, Founder & Director
                </div>
              </div>

              {/* Key Competency Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] text-xs font-semibold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962C]" />
                  <span>CIPC Statutory Filings</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] text-xs font-semibold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962C]" />
                  <span>Qualitative Research</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] text-xs font-semibold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962C]" />
                  <span>Grant Proposals</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] text-xs font-semibold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962C]" />
                  <span>NVivo Data Coding</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] text-xs font-semibold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962C]" />
                  <span>Board Minute Taking</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] text-xs font-semibold text-[#111827] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9962C]" />
                  <span>Multilingual Fieldwork</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 rounded-3xl bg-[#0A2E5C]/5 border border-[#0A2E5C]/15 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0A2E5C] text-white flex items-center justify-center">
                <Target className="w-6 h-6 text-[#C9962C]" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#111827]">
                Our Mission
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                To simplify organizational compliance, elevate qualitative research execution, and deliver robust administrative and executive support for South African NGOs, researchers, businesses, and public institutions.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#C9962C]/10 border border-[#C9962C]/20 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C9962C] text-white flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#111827]">
                Our Vision
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                To be Southern Africa’s most trusted and indispensable business support and research partner, recognized for uncompromising integrity, fast turnaround, and measurable organizational impact.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#111827]">
              Our Core Operating Values
            </h2>
            <p className="mt-2 text-sm text-[#6B7280]">
              The foundational principles guiding every consultation, filing, and research report.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val) => (
              <div
                key={val.id}
                className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs hover:border-[#C9962C]/40 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A2E5C]/10 text-[#0A2E5C] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5 text-[#C9962C]" />
                </div>
                <h3 className="text-base font-bold text-[#111827]">
                  {val.title}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-12 bg-[#0A2E5C] text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-heading font-bold">
              Ready to partner with SARE Projects Solutions?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Schedule a direct consultation with Director Regina Rikhotso today.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <button
              onClick={onBookConsultation}
              className="px-6 py-3 bg-[#C9962C] hover:bg-[#b08223] text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigatePage('services')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20"
            >
              View Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
