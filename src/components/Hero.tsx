import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Users, 
  BarChart3, 
  MapPin, 
  ChevronDown,
  CheckCircle2,
  TrendingUp,
  FileCheck,
  Laptop
} from 'lucide-react';
import heroMeetingImg from '../assets/images/hero_corporate_meeting_sare_solutions.webp';

interface HeroProps {
  onBookConsultation: () => void;
  onExploreServices: () => void;
  onSelectService?: (serviceTitle: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onBookConsultation, 
  onExploreServices,
  onSelectService
}) => {
  const trustFeatures = [
    { title: 'Compliance', subtitle: 'CIPC & Tax Filings', icon: ShieldCheck },
    { title: 'Research', subtitle: 'Fieldwork Support', icon: Users },
    { title: 'Web Design', subtitle: 'Digital Solutions', icon: Laptop },
    { title: 'Donor Support', subtitle: 'Proposal Consulting', icon: TrendingUp },
  ];

  const floatingGlassPills = [
    { label: 'Business Compliance', pos: 'top-24 left-4 sm:left-12' },
    { label: 'Research Support', pos: 'top-32 right-4 sm:right-16' },
    { label: 'Website Design & Dev', pos: 'bottom-40 left-6 sm:left-20' },
    { label: 'Grant Proposal Support', pos: 'bottom-36 right-6 sm:right-24' },
  ];

  const handleScrollDown = () => {
    const nextSection = document.getElementById('hero-trust-partners');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-[100dvh] flex flex-col justify-between items-center bg-[#041429] text-white overflow-hidden pt-28 pb-12"
    >
      {/* 1. Full-bleed background image with slow scale animation */}
      <motion.div 
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      >
        <img
          src={heroMeetingImg}
          alt="African Business Professionals Collaborating in Modern Office"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Dark Navy Overlay for Crisp Readability (Reduced opacity) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#041429]/70 via-[#061D3A]/50 to-[#041429]/70 z-10" />
        
        {/* Subtle Radial Vignette to focus center content */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(4, 20, 41, 0.5) 100%)'
          }}
        />
      </motion.div>



      {/* 3. Main Hero Content Container - Vertically Centered */}
      <div className="relative z-20 w-[90%] max-w-4xl mx-auto flex-1 flex flex-col justify-center items-center text-center my-auto py-6 sm:py-10">
        
        {/* Top Outlined Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9962C]/15 border border-[#C9962C]/40 text-[#C9962C] text-2xs sm:text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-md"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-[#C9962C]" />
          <span>TRUSTED COMPLIANCE, RESEARCH & DIGITAL PARTNER</span>
        </motion.div>

        {/* Headline: Max 4 lines, tight letter spacing, gold highlight */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white leading-[1.12] tracking-tight max-w-3xl"
        >
          Empowering Organisations Through{' '}
          <span className="text-[#C9962C] font-extrabold">
            Compliance
          </span>
          , Research & Digital Solutions.
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5 text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl"
        >
          We help NGOs, government institutions, donor-funded organisations and businesses simplify compliance, strengthen operations, and deliver meaningful impact through custom website development and expert consulting.
        </motion.p>

        {/* CTA Buttons - Large 56px Tall Rounded Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 w-full max-w-md sm:max-w-xl flex flex-col sm:flex-row items-stretch justify-center gap-3.5"
        >
          {/* Primary Gold CTA */}
          <button
            onClick={onBookConsultation}
            className="w-full sm:w-auto flex-1 min-h-[56px] px-8 py-4 bg-[#C9962C] hover:bg-[#b08223] active:scale-98 text-white font-heading font-bold text-sm sm:text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Outlined CTA */}
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto flex-1 min-h-[56px] px-8 py-4 bg-white/5 hover:bg-white/15 active:scale-98 text-white border border-white/30 hover:border-white/50 font-heading font-semibold text-sm sm:text-base rounded-2xl transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-md cursor-pointer group"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* 4 Trust Indicators Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 w-full pt-6 border-t border-white/15"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center sm:text-left">
            {trustFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div 
                  key={feat.title}
                  className={`flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 ${
                    idx < 3 ? 'md:border-r md:border-white/15' : ''
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-[#C9962C]/20 border border-[#C9962C]/30 flex items-center justify-center shrink-0">
                    <IconComp className="w-4 h-4 text-[#C9962C]" />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-xs font-bold text-white leading-tight truncate">
                      {feat.title}
                    </div>
                    <div className="text-2xs text-slate-300 truncate">
                      {feat.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
