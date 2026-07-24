import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/consultingData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeItem = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9962C] bg-[#C9962C]/10 px-3.5 py-1.5 rounded-full">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111827]">
            Trusted by Leaders Across South Africa
          </h2>
        </div>

        {/* Large Testimonial Card Slider */}
        <div className="relative bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-xs">
          
          <Quote className="w-12 h-12 text-[#C9962C]/40 mb-6" />

          <div className="min-h-[160px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <p className="text-lg sm:text-xl font-body text-[#111827] leading-relaxed italic">
                  "{activeItem.quote}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-[#E5E7EB]">
                  <div>
                    <div className="font-heading font-bold text-[#0A2E5C] text-base sm:text-lg">
                      {activeItem.author}
                    </div>
                    <div className="text-xs text-[#6B7280]">
                      {activeItem.role}, <span className="font-semibold text-[#111827]">{activeItem.organization}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-[#E5E7EB]">
                    {[...Array(activeItem.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C9962C] text-[#C9962C]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#0A2E5C]' : 'w-2 bg-[#CBD5E1]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full bg-white hover:bg-[#0A2E5C] text-[#0A2E5C] hover:text-white border border-[#E5E7EB] transition-colors shadow-xs cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full bg-white hover:bg-[#0A2E5C] text-[#0A2E5C] hover:text-white border border-[#E5E7EB] transition-colors shadow-xs cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
