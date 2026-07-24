import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultingData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
  presetNotes?: string;
}

const SERVICE_OPTIONS = [
  'Business Compliance Services',
  'Research Support Services',
  'Proposal & Donor Support Consulting',
  'Virtual Executive Assistant Services',
  'Translation Services',
  'Qualitative Data Analysis Support',
  'Community Engagement & Fieldwork Coordination',
  'General Consultation / Not Sure Yet',
];

const BLANK_FORM = (presetService = '', presetNotes = '') => ({
  name: '',
  email: '',
  phone: '',
  preferredDate: '',
  serviceRequired: presetService || '',
  message: presetNotes || '',
});

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  presetService = '',
  presetNotes = '',
}) => {
  const [formData, setFormData] = useState(BLANK_FORM(presetService, presetNotes));
  const [booked, setBooked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'consultation',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          'preferred-date': formData.preferredDate,
          'service-required': formData.serviceRequired,
          message: formData.message,
        }),
      });
      setBooked(true);
    } catch {
      setError('Something went wrong. Please try again or use WhatsApp below.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleBookAgain = () => {
    setFormData(BLANK_FORM());
    setBooked(false);
    setError('');
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello SARE Projects Solutions,\n\nI would like to book a consultation regarding *${formData.serviceRequired || 'your services'}*.${
      formData.message ? `\n\nAdditional details: ${formData.message}` : ''
    }`;
    window.open(`https://wa.me/27719506936?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A2E5C]/60 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-[#E5E7EB] max-w-xl w-full p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-[#6B7280] hover:text-[#111827] hover:bg-[#F8FAFC]"
          >
            <X className="w-5 h-5" />
          </button>

          {booked ? (
            /* ── Success State ── */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#111827]">
                Request Received!
              </h3>
              <p className="text-sm text-[#6B7280] max-w-xs mx-auto leading-relaxed">
                Thank you! Your consultation request has been received. Our team will contact you shortly to confirm your consultation.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#0A2E5C] hover:bg-[#061D3A] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Done
                </button>
                <button
                  onClick={handleBookAgain}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#C9962C] hover:bg-[#b08223] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Book Another Consultation
                </button>
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Follow Up on WhatsApp</span>
                </button>
              </div>
            </div>
          ) : (
            /* ── Booking Form ── */
            <form
              name="consultation"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Required hidden field for Netlify */}
              <input type="hidden" name="form-name" value="consultation" />

              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C9962C]/15 flex items-center justify-center text-[#C9962C]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-heading font-bold text-[#111827]">
                    Book Executive Consultation
                  </h2>
                  <p className="text-xs text-[#6B7280]">
                    Direct consultation with SARE Projects Solutions leadership.
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick Banner */}
              <div className="p-3.5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#111827] text-sm mb-0.5">Prefer Instant Messaging?</div>
                    <div className="text-3xs text-[#4B5563]">Chat directly with the SARE Projects Team</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="px-3.5 py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-3xs font-bold rounded-lg shrink-0 shadow-xs transition-transform active:scale-95 cursor-pointer"
                >
                  Open Chat
                </button>
              </div>

              <div className="space-y-3 pt-1">
                {/* Full Name */}
                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="email@organization.org"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                    />
                  </div>
                  <div>
                    <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 071 950 6936"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                    />
                  </div>
                </div>

                {/* Preferred Date & Service Required */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                      Preferred Consultation Date
                    </label>
                    <input
                      type="date"
                      name="preferred-date"
                      value={formData.preferredDate}
                      onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                    />
                  </div>
                  <div>
                    <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                      Service Required *
                    </label>
                    <select
                      name="service-required"
                      required
                      value={formData.serviceRequired}
                      onChange={e => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                    >
                      <option value="" disabled>Select a service...</option>
                      {SERVICE_OPTIONS.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                    Optional Message / Additional Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Briefly describe what you need help with (e.g. CIPC registration, research transcription, donor report)..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C] resize-none"
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-3.5 py-2.5">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-[#C9962C] hover:bg-[#b08223] disabled:opacity-70 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  <span>{submitting ? 'Submitting...' : 'Confirm Consultation Request'}</span>
                  {!submitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
