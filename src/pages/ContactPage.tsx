import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Calculator, 
  Calendar,
  MessageSquare,
  Paperclip,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/consultingData';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';

interface ContactPageProps {
  onBookConsultation: (serviceTitle?: string, notes?: string) => void;
  initialService?: string;
  initialNotes?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBookConsultation,
  initialService = 'Business Compliance Services',
  initialNotes = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    serviceInterest: initialService,
    preferredDate: '',
    timeSlot: '10:00 AM SAST',
    message: initialNotes,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-20 bg-[#F8FAFC]">
      {/* Header Banner */}
      <section className="bg-[#0A2E5C] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="px-3.5 py-1 rounded-full bg-[#C9962C]/20 border border-[#C9962C]/40 text-[#C9962C] text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Direct Inquiries & Bookings
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight">
              Contact SARE Projects Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              Connect with Director Regina Rikhotso and our senior consulting team to discuss your statutory compliance, qualitative research, or executive assistant requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Phone Direct */}
              <div className="bg-white p-6 rounded-3xl border border-[#E5E7EB] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#C9962C]/15 text-[#C9962C] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xs font-bold uppercase tracking-wider text-[#6B7280]">
                    Direct Telephone
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phoneTel}`}
                    className="text-lg font-heading font-bold text-[#111827] hover:text-[#0A2E5C]"
                  >
                    {COMPANY_INFO.contact.phoneDisplay}
                  </a>
                </div>
                <p className="text-2xs text-[#6B7280]">
                  Available during SAST office hours for urgent compliance consultations.
                </p>
              </div>

              {/* WhatsApp Direct Chat Card */}
              <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 p-6 rounded-3xl border border-[#25D366]/30 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#25D366]/20 text-[#128C7E] text-3xs font-bold uppercase tracking-wider">
                    Instant Messaging
                  </span>
                </div>
                <div>
                  <div className="font-bold text-lg text-[#111827]">Prefer WhatsApp?</div>
                  <div className="text-xs text-[#4B5563] mt-1 pr-4">
                    Chat directly with the SARE Projects Team for fast responses on statutory filings & research scope.
                  </div>
                </div>
                <a
                  href={COMPANY_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition-transform active:scale-98"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Start Direct Chat</span>
                </a>
              </div>

              {/* Email Addresses */}
              <div className="bg-white p-6 rounded-3xl border border-[#E5E7EB] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0A2E5C]/10 text-[#0A2E5C] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xs font-bold uppercase tracking-wider text-[#6B7280]">
                    Official Email Inquiries
                  </div>
                  <div className="flex flex-col space-y-1 mt-1">
                    {COMPANY_INFO.contact.emails.map((e, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${e}`}
                        className="text-sm font-bold text-[#111827] hover:text-[#C9962C]"
                      >
                        {e}
                      </a>
                    ))}
                  </div>
                </div>
                <p className="text-2xs text-[#6B7280]">
                  24-hour response SLA on formal proposals & scope inquiries.
                </p>
              </div>

              {/* Location & Hours */}
              <div className="bg-white p-6 rounded-3xl border border-[#E5E7EB] shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C9962C]/15 text-[#C9962C] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xs font-bold uppercase tracking-wider text-[#6B7280]">
                      Service Footprint
                    </div>
                    <div className="text-xs font-bold text-[#111827]">
                      {COMPANY_INFO.contact.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#E5E7EB]">
                  <div className="w-10 h-10 rounded-xl bg-[#0A2E5C]/10 text-[#0A2E5C] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xs font-bold uppercase tracking-wider text-[#6B7280]">
                      Operating Hours
                    </div>
                    <div className="text-xs font-bold text-[#111827]">
                      {COMPANY_INFO.contact.hours}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Contact / Consultation Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E5E7EB] shadow-lg">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-[#111827]">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-sm text-[#6B7280] max-w-md mx-auto">
                    Thank you, <span className="font-bold text-[#111827]">{formData.name}</span>. A senior consultant from SARE Projects Solutions will contact you within 24 hours at <span className="font-bold text-[#111827]">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#0A2E5C] text-white text-xs font-bold rounded-xl"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-[#111827]">
                      Request Executive Consultation or Proposal
                    </h3>
                    <p className="text-xs text-[#6B7280]">
                      Fill in your details below for direct response from Director Regina Rikhotso's team.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Thabo Mokoena"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                      />
                    </div>

                    <div>
                      <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="thabo@organization.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 071 950 6936"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                      />
                    </div>

                    <div>
                      <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                        Organization / University / SME
                      </label>
                      <input
                        type="text"
                        placeholder="Organization Name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                        Primary Service Required
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                        Preferred Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                      Scope Brief or Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please outline your statutory compliance requirements, qualitative research scope, transcription volume, or executive support needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C9962C] hover:bg-[#b08223] text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5"
                  >
                    <span>Submit Executive Consultation Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
