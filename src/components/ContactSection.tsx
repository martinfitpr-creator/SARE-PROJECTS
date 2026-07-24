import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultingData';

interface ContactSectionProps {
  initialService?: string;
  initialNotes?: string;
}

const BLANK_FORM = (initialService = '', initialNotes = '') => ({
  fullName: '',
  email: '',
  phone: '',
  organization: '',
  serviceNeeded: initialService || 'Website Design & Digital Solutions',
  message: initialNotes || '',
});

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '', initialNotes = '' }) => {
  const [formData, setFormData] = useState(BLANK_FORM(initialService, initialNotes));
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Fires when the hidden iframe loads — meaning the POST completed successfully
  const handleIframeLoad = () => {
    if (submitting) {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  // Runs just before the browser fires the POST — marks us as "submitting"
  const handleSubmit = () => {
    setSubmitting(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmitting(false);
    setFormData(BLANK_FORM());
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      {/* Component-local hidden iframe — catches the POST response without page reload */}
      <iframe
        ref={iframeRef}
        name="contact-section-frame"
        title="contact-section-submit-frame"
        onLoad={handleIframeLoad}
        style={{ display: 'none' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Official Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9962C] bg-[#C9962C]/10 px-3.5 py-1.5 rounded-full">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#111827] leading-tight">
                Let's Discuss Your Compliance & Research Needs
              </h2>
              <p className="text-base text-[#6B7280] leading-relaxed">
                Reach out to Director Regina Rikhotso and our senior consulting team for immediate advice, project quotations, or customized compliance retainers.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-5 pt-2">
              
              {/* Phone */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
                <div className="w-12 h-12 rounded-xl bg-[#0A2E5C] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-[#C9962C]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                    Direct Telephone
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phoneTel}`}
                    className="text-lg font-heading font-bold text-[#0A2E5C] hover:text-[#C9962C] transition-colors"
                  >
                    {COMPANY_INFO.contact.phoneDisplay}
                  </a>
                  <div className="text-2xs text-[#6B7280] mt-0.5">Calls & WhatsApp Inquiries</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
                <div className="w-12 h-12 rounded-xl bg-[#0A2E5C] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 text-[#C9962C]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                    Official Email Addresses
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    {COMPANY_INFO.contact.emails.map((email, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${email}`}
                        className="text-sm font-semibold text-[#0A2E5C] hover:text-[#C9962C] transition-colors"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
                <div className="w-12 h-12 rounded-xl bg-[#0A2E5C] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-[#C9962C]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                    Coverage & Location
                  </div>
                  <div className="text-base font-heading font-bold text-[#111827]">
                    {COMPANY_INFO.contact.location}
                  </div>
                  <div className="text-2xs text-[#6B7280] mt-0.5">Serving all 9 South African Provinces & Regional Clients</div>
                </div>
              </div>

            </div>

            {/* Turnaround Note */}
            <div className="p-4 rounded-xl bg-[#0A2E5C]/5 border border-[#0A2E5C]/15 flex items-center gap-3 text-xs text-[#0A2E5C] font-semibold">
              <Clock className="w-4 h-4 text-[#C9962C] shrink-0" />
              <span>We respond to all formal inquiries within 2–4 business hours.</span>
            </div>

          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#F8FAFC] p-8 sm:p-10 rounded-3xl border border-[#E5E7EB] shadow-xs"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#111827]">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-[#6B7280] max-w-md mx-auto">
                  Thank you for reaching out to SARE Projects Solutions. Our team will review your requirements and send a formal proposal to <span className="font-semibold text-[#111827]">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#0A2E5C] text-white text-xs font-semibold rounded-xl hover:bg-[#061e3d] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                name="contact-section"
                method="POST"
                action="/"
                target="contact-section-frame"
                data-netlify="true"
                netlify
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact-section" />

                <div>
                  <h3 className="text-2xl font-heading font-bold text-[#111827] mb-1">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#6B7280]">
                    Fill in your project specifications to receive a quick response.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Dr. Nkululeko Mthembu"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-hidden focus:border-[#0A2E5C] focus:ring-1 focus:ring-[#0A2E5C]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. director@organization.org.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-hidden focus:border-[#0A2E5C] focus:ring-1 focus:ring-[#0A2E5C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 071 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-hidden focus:border-[#0A2E5C] focus:ring-1 focus:ring-[#0A2E5C]"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="e.g. NGO Trust / University"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-hidden focus:border-[#0A2E5C] focus:ring-1 focus:ring-[#0A2E5C]"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                    Primary Practice Area *
                  </label>
                  <select
                    name="service-needed"
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-hidden focus:border-[#0A2E5C] focus:ring-1 focus:ring-[#0A2E5C]"
                  >
                    <option value="Website Design & Digital Solutions">Website Design & Digital Solutions</option>
                    <option value="Business Compliance Services">Business Compliance Services (CIPC / Tax)</option>
                    <option value="Research & Transcription Support Services">Research & Transcription Support Services</option>
                    <option value="Proposal & Donor Support Consulting">Proposal & Donor Support Consulting</option>
                    <option value="Virtual Executive Assistant Services">Virtual Executive Assistant Services</option>
                    <option value="Translation Services">Translation Services (SA Official Languages)</option>
                    <option value="Qualitative Data Analysis Support">Qualitative Data Analysis Support (NVivo)</option>
                    <option value="Community Engagement & Fieldwork Coordination">Community Engagement & Fieldwork</option>
                    <option value="Custom Retainer / Other">Custom Retainer / Comprehensive Package</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2">
                    Scope Details / Notes
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Briefly describe your statutory deadline, research project scope, or administrative goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-[#E5E7EB] rounded-xl text-sm text-[#111827] focus:outline-hidden focus:border-[#0A2E5C] focus:ring-1 focus:ring-[#0A2E5C]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#C9962C] hover:bg-[#b08223] disabled:opacity-70 text-white font-bold text-base rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>{submitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                  {!submitting && <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
