import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultingData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Business Compliance Services');
  const [customText, setCustomText] = useState('');

  const topics = [
    'Business Compliance & CIPC',
    'Qualitative Research & Fieldwork',
    'Grant Proposals & Donor Support',
    'Virtual Executive Assistant',
    'General Consultation'
  ];

  const handleStartChat = () => {
    const baseMessage = `Hello Sare Projects Solutions,\n\nI would like to inquire about: *${selectedTopic}*.`;
    const fullText = customText ? `${baseMessage}\n\nNote: ${customText}` : baseMessage;
    const encoded = encodeURIComponent(fullText);
    const url = `https://wa.me/27719506936?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Expanded Quick Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-4 w-[90vw] max-w-sm bg-white rounded-3xl shadow-2xl border border-[#E5E7EB] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white text-sm">
                    SP
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075E54] rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white leading-tight">
                    SARE Projects Solutions
                  </h4>
                  <p className="text-3xs text-emerald-100 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Official Business Channel</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#ECE5DD]/40 space-y-3 max-h-[380px] overflow-y-auto">
              {/* Message Bubble from SARE */}
              <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-xs border border-gray-100 space-y-1.5 max-w-[90%] text-xs text-[#111827]">
                <p className="font-semibold text-[#075E54]">
                  Director Regina Rikhotso & Team
                </p>
                <p className="text-[#374151]">
                  Hello! 👋 How can we assist your organization with compliance, qualitative research, or executive support today?
                </p>
                <span className="text-3xs text-gray-400 block text-right pt-0.5">
                  Typically replies within minutes
                </span>
              </div>

              {/* Select Service Topic */}
              <div className="space-y-1.5 pt-1">
                <label className="block text-3xs font-bold uppercase tracking-wider text-[#6B7280]">
                  Select Inquiry Category:
                </label>
                <div className="space-y-1">
                  {topics.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all cursor-pointer flex items-center justify-between ${
                        selectedTopic === topic
                          ? 'bg-[#25D366] text-white font-bold shadow-xs'
                          : 'bg-white hover:bg-gray-50 text-[#374151] border border-gray-200'
                      }`}
                    >
                      <span className="truncate">{topic}</span>
                      {selectedTopic === topic && <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Brief Note */}
              <div>
                <textarea
                  rows={2}
                  placeholder="Optional note (e.g. CIPC renewal, transcript volume)..."
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-[#111827] focus:outline-hidden focus:border-[#25D366]"
                />
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-3.5 bg-white border-t border-gray-100">
              <button
                onClick={handleStartChat}
                className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-98"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Start Direct Chat</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Button - Circular Icon Only */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl flex items-center justify-center cursor-pointer transition-all"
        aria-label="Direct Chat"
      >
        <WhatsAppIcon className="w-7 h-7 text-white shrink-0" />
      </motion.button>
    </div>
  );
};
