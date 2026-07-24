import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultingData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
  presetNotes?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  presetService = 'Business Compliance Services',
  presetNotes = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    preferredDate: '',
    preferredTime: '10:00 AM SAST',
    serviceTitle: presetService,
    notes: presetNotes,
  });

  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello SARE Projects Solutions,\n\nI would like to book a consultation regarding *${formData.serviceTitle || presetService}*.${
      formData.notes ? `\n\nNotes: ${formData.notes}` : ''
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
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#111827]">
                Consultation Booked!
              </h3>
              <p className="text-sm text-[#6B7280]">
                We have scheduled your session for <span className="font-semibold text-[#111827]">{formData.preferredDate || 'Upcoming Business Day'}</span> at <span className="font-semibold text-[#111827]">{formData.preferredTime}</span>. A calendar invitation has been sent to <span className="font-semibold text-[#111827]">{formData.email}</span>.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#0A2E5C] text-white text-xs font-semibold rounded-xl"
                >
                  Done
                </button>

                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Send Direct Notice</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
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

              {/* Instant Direct Chat Quick Banner */}
              <div className="p-3.5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-2xs font-bold text-[#111827]">Prefer Instant Messaging?</div>
                    <div className="text-3xs text-[#4B5563]">Chat directly with Director Regina Rikhotso</div>
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
                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
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
                      required
                      placeholder="e.g. 071 950 6936"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-2xs font-bold uppercase tracking-wider text-[#111827] mb-1">
                      Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#111827] focus:bg-white focus:outline-hidden focus:border-[#0A2E5C]"
                    >
                      <option value="09:00 AM SAST">09:00 AM SAST</option>
                      <option value="11:00 AM SAST">11:00 AM SAST</option>
                      <option value="02:00 PM SAST">02:00 PM SAST</option>
                      <option value="04:00 PM SAST">04:00 PM SAST</option>
                    </select>
                  </div>
                </div>

                {formData.notes && (
                  <div className="p-3 rounded-xl bg-[#0A2E5C]/5 border border-[#0A2E5C]/15 text-2xs text-[#0A2E5C]">
                    <span className="font-bold">Attached Scope Note:</span> {formData.notes}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C9962C] hover:bg-[#b08223] text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  <span>Confirm Consultation Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
