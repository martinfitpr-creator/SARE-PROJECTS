import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  Search, 
  BookOpen, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { FAQS } from '../data/consultingData';

interface ResourcesPageProps {
  onBookConsultation: (serviceTitle?: string, notes?: string) => void;
  onNavigatePage: (page: string) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onBookConsultation,
  onNavigatePage
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'compliance' | 'research' | 'guides'>('all');
  const [downloadedDoc, setDownloadedDoc] = useState<string | null>(null);

  const guidesAndChecklists = [
    {
      id: 'cipc-guide',
      category: 'compliance',
      title: 'South Africa CIPC Annual Return Compliance Checklist 2026',
      desc: 'Step-by-step guide to avoiding deregistration, maintaining statutory good standing, and updating director records.',
      fileType: 'PDF Guide (1.2 MB)',
      badge: 'Statutory Compliance',
      downloadUrl: '/documents/CIPC_Annual_Return_Checklist.pdf'
    },
    {
      id: 'npo-guide',
      category: 'compliance',
      title: 'Department of Social Development (DSD) NPO Compliance Manual',
      desc: 'Comprehensive handbook on NPO Act registration, annual reporting obligations, and tax-exempt PBO application guidelines.',
      fileType: 'PDF Guide (2.4 MB)',
      badge: 'NPOs & Civil Society',
      downloadUrl: '/documents/DSD_NPO_Compliance_Manual.pdf'
    },
    {
      id: 'fieldwork-playbook',
      category: 'research',
      title: 'Qualitative Fieldwork & Field Transcription Best Practices',
      desc: 'Data collection protocols for verbatim qualitative transcription, audio data privacy, and ethical participant consent in SA.',
      fileType: 'PDF Playbook (1.8 MB)',
      badge: 'Research Methodologies',
      downloadUrl: '/documents/Fieldwork_Transcription_Playbook.pdf'
    },
    {
      id: 'grant-proposal-framework',
      category: 'guides',
      title: 'Donor Grant Proposal & Logical Framework Template',
      desc: 'Standardized matrix for structuring donor funding proposals, monitoring outputs, and managing grant compliance reporting.',
      fileType: 'DOCX Template (850 KB)',
      badge: 'Grants & Proposals',
      downloadUrl: '/documents/Donor_Grant_Proposal_Template.pdf'
    }
  ];

  const handleDownload = (title: string) => {
    setDownloadedDoc(title);
    setTimeout(() => setDownloadedDoc(null), 4000);
  };

  const filteredGuides = guidesAndChecklists.filter(g => {
    const matchesCategory = activeTab === 'all' || g.category === activeTab;
    const matchesSearch = g.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          g.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-20 bg-[#F8FAFC]">
      {/* Header Banner */}
      <section className="bg-[#0A2E5C] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="px-3.5 py-1 rounded-full bg-[#C9962C]/20 border border-[#C9962C]/40 text-[#C9962C] text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Knowledge Hub & Compliance Guides
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight">
              Resources, Checklists & FAQs
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Access official South African statutory compliance guides, qualitative research field manuals, and executive templates prepared by SARE Projects Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Guides & Downloads */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Filter Bar */}
        <div className="bg-white p-6 rounded-3xl border border-[#E5E7EB] shadow-xs mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search compliance guides, checklists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:outline-hidden focus:border-[#0A2E5C]"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {[
                { id: 'all', label: 'All Resources' },
                { id: 'compliance', label: 'CIPC & Statutory' },
                { id: 'research', label: 'Research & Fieldwork' },
                { id: 'guides', label: 'Templates & Grants' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#0A2E5C] text-white shadow-xs'
                      : 'bg-[#F8FAFC] text-[#4B5563] hover:bg-[#E5E7EB]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>

          {downloadedDoc && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Downloading sample resource: <strong>{downloadedDoc}</strong>
              </span>
              <span className="text-2xs text-emerald-600 font-semibold">Simulated Download</span>
            </div>
          )}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E7EB] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between gap-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-2xs font-bold text-[#C9962C] bg-[#C9962C]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {guide.badge}
                  </span>
                  <span className="text-2xs text-[#6B7280] font-medium">
                    {guide.fileType}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-bold text-[#111827] leading-snug">
                  {guide.title}
                </h3>

                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {guide.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between gap-4">
                <a
                  href={guide.downloadUrl}
                  download
                  onClick={() => handleDownload(guide.title)}
                  className="px-5 py-2.5 bg-[#0A2E5C] hover:bg-[#061D3A] text-white text-xs font-semibold rounded-xl flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Download className="w-4 h-4 text-[#C9962C]" />
                  <span>Download Resource</span>
                </a>

                <button
                  onClick={() => onBookConsultation(guide.title, 'I downloaded this guide and would like to discuss implementation.')}
                  className="text-xs font-semibold text-[#C9962C] hover:underline flex items-center gap-1"
                >
                  <span>Request Support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-2xs font-bold uppercase tracking-wider text-[#C9962C]">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#111827]">
              Expert Answers to Common Inquiries
            </h2>
            <p className="text-xs text-[#6B7280]">
              Get clarity on turnarounds, statutory filing requirements, and field research protocols.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details
                key={faq.id || idx}
                className="group bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-[#E5E7EB] [&_summary::-webkit-details-marker]:hidden cursor-pointer"
              >
                <summary className="flex items-center justify-between font-heading font-bold text-sm sm:text-base text-[#111827] group-open:text-[#0A2E5C]">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 transition-transform duration-200 group-open:rotate-180 text-[#C9962C]">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-[#E5E7EB] pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-[#0A2E5C] text-white text-center space-y-4 shadow-lg">
            <HelpCircle className="w-10 h-10 text-[#C9962C] mx-auto" />
            <h3 className="text-xl font-heading font-bold">Have a specific statutory question or scope?</h3>
            <p className="text-xs text-slate-300 max-w-xl mx-auto">
              Our team of compliance advisors and research consultants is ready to evaluate your organizational status.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onBookConsultation('General Advisory Inquiries')}
                className="px-6 py-3 bg-[#C9962C] hover:bg-[#b08223] text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
              >
                Book Executive Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
