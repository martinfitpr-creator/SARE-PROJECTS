import React from 'react';
import { 
  HeartHandshake, 
  GraduationCap, 
  Landmark, 
  Building2, 
  Shield, 
  Globe2, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { INDUSTRIES } from '../data/consultingData';

interface IndustriesPageProps {
  onBookConsultation: (serviceTitle?: string, notes?: string) => void;
  onNavigatePage: (page: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onBookConsultation,
  onNavigatePage,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake': return <HeartHandshake className="w-8 h-8 text-[#C9962C]" />;
      case 'GraduationCap': return <GraduationCap className="w-8 h-8 text-[#C9962C]" />;
      case 'Landmark': return <Landmark className="w-8 h-8 text-[#C9962C]" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-[#C9962C]" />;
      case 'Shield': return <Shield className="w-8 h-8 text-[#C9962C]" />;
      case 'Globe2': return <Globe2 className="w-8 h-8 text-[#C9962C]" />;
      default: return <Building2 className="w-8 h-8 text-[#C9962C]" />;
    }
  };

  const detailedSectorProfiles = [
    {
      id: 'ngos',
      name: 'Non-Governmental Organizations (NGOs & NPOs)',
      icon: 'HeartHandshake',
      challenge: 'Maintaining CIPC active status, NPO director changes, tax clearance, and meeting donor financial & narrative reporting standards.',
      solutions: [
        'End-to-end NPO & PBO compliance maintenance',
        'Grant application & donor narrative reporting',
        'Board pack assembly & professional minute taking',
        'Beneficial Ownership disclosure submission'
      ],
      impact: '45+ NGO Partners Active in SA'
    },
    {
      id: 'universities',
      name: 'Research Institutions & Universities',
      icon: 'GraduationCap',
      challenge: 'Managing field teams across 9 provinces, verbatim academic transcriptions, NVivo coding, and ethical participant consent.',
      solutions: [
        'Multilingual focus group moderation & audio transcription',
        'Thematic codebook development & NVivo workspace setup',
        'Field assistant recruitment & rural logistics management',
        'Quality assurance verification for academic publication'
      ],
      impact: '80+ Master’s, PhD & Institutional Projects'
    },
    {
      id: 'donor-projects',
      name: 'Donor-Funded Projects & Agencies',
      icon: 'Landmark',
      challenge: 'Demonstrating transparent fund utilization, rigorous audit trails, and multi-country narrative reporting.',
      solutions: [
        'Donor RFP proposal development',
        'Custom executive KPI dashboard preparation',
        'Milestone-based progress reporting',
        'Third-party ethical & compliance risk monitoring'
      ],
      impact: '99.8% Compliance Standing Audit Rate'
    },
    {
      id: 'smes',
      name: 'Small & Medium Businesses (SMEs)',
      icon: 'Building2',
      challenge: 'Avoiding CIPC deregistration penalties, managing company tax returns, and diary/administrative overload for directors.',
      solutions: [
        'CIPC Annual Returns & Beneficial Ownership filings',
        'Company & Personal Tax Submissions',
        'Virtual Executive Assistant diary & meeting management',
        'Document archiving & confidential record control'
      ],
      impact: '120+ Active Business Clients'
    },
    {
      id: 'government',
      name: 'Government Departments & Public Bodies',
      icon: 'Shield',
      challenge: 'Engaging diverse South African communities, translating official documentation into all 11 languages, and policy research.',
      solutions: [
        'Community engagement & stakeholder mobilization',
        'Official translation across isiZulu, isiXhosa, Sesotho, Xitsonga, etc.',
        'Qualitative policy synthesis & field reporting',
        'On-the-ground survey coordination'
      ],
      impact: 'National & Regional Coverage'
    },
    {
      id: 'international-dev',
      name: 'International Development Partners',
      icon: 'Globe2',
      challenge: 'Executing local field research without in-country administrative footprint or specialized local knowledge.',
      solutions: [
        'In-country field logistics & community entry',
        'Local research team onboarding & supervision',
        'Cultural translation & contextual adaptation',
        'Comprehensive regional progress reporting'
      ],
      impact: 'Cross-Border Southern African Projects'
    }
  ];

  return (
    <div className="pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-[#0A2E5C] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="px-3.5 py-1 rounded-full bg-[#C9962C]/20 border border-[#C9962C]/40 text-[#C9962C] text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Sectors & Industries
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight">
              Deep Domain Knowledge Across South Africa's Key Sectors
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              We tailor our compliance, research, and executive support services to meet the specific governance, regulatory, and fieldwork demands of each sector.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Industry Cards */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedSectorProfiles.map((sector) => (
              <div
                key={sector.id}
                className="bg-white rounded-3xl p-8 border border-[#E5E7EB] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#0A2E5C]/10 flex items-center justify-center">
                    {getIcon(sector.icon)}
                  </div>

                  <h3 className="text-xl font-heading font-bold text-[#111827]">
                    {sector.name}
                  </h3>

                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900">
                    <span className="font-bold">Core Sector Challenge:</span> {sector.challenge}
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-2xs font-bold uppercase tracking-wider text-[#0A2E5C]">
                      SARE Tailored Solutions:
                    </span>
                    <ul className="space-y-2">
                      {sector.solutions.map((sol, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#4B5563]">
                          <CheckCircle2 className="w-4 h-4 text-[#C9962C] shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-2xs font-bold text-[#0A2E5C] bg-[#0A2E5C]/10 px-3 py-1 rounded-full">
                    {sector.impact}
                  </span>

                  <button
                    onClick={() => onBookConsultation(`Sector Inquiry: ${sector.name}`)}
                    className="p-2.5 rounded-xl bg-[#C9962C] hover:bg-[#b08223] text-white text-xs font-bold flex items-center gap-1"
                  >
                    <span>Consult</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0A2E5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold">
            Does your organization operate in one of these sectors?
          </h2>
          <p className="text-sm text-slate-300">
            Let's discuss how SARE Projects Solutions can simplify your statutory compliance, streamline field research, or provide executive assistant support.
          </p>
          <button
            onClick={() => onBookConsultation()}
            className="px-8 py-4 bg-[#C9962C] hover:bg-[#b08223] text-white font-bold text-sm rounded-full shadow-lg inline-flex items-center gap-2"
          >
            <span>Schedule Executive Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
