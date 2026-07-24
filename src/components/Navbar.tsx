import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Phone, Mail, ChevronRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/consultingData';

interface NavbarProps {
  currentPage: string;
  onNavigatePage: (page: string) => void;
  onBookConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigatePage,
  onBookConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Industries', id: 'industries' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigatePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomePage = currentPage === 'home';

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 shadow-xs py-4 sm:py-5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group focus:outline-hidden text-left cursor-pointer z-50"
            >
              <div className="relative flex items-center gap-3">
                <img
                  src={COMPANY_INFO.images.logo}
                  alt="SARE Projects Solutions Logo"
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.fallback-logo')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'fallback-logo flex items-center gap-2.5';
                      fallback.innerHTML = `
                        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0A2E5C] border border-[#0A2E5C]/20 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                          <span class="text-[#C9962C]">S</span>P
                        </div>
                        <div class="flex flex-col">
                          <span class="font-heading font-extrabold text-[#0A2E5C] text-lg tracking-tight leading-none">SARE PROJECTS</span>
                          <span class="font-sans italic text-[#C9962C] text-xs font-bold tracking-wide">Solutions</span>
                        </div>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 px-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#C9962C] text-white shadow-md font-bold'
                        : 'text-slate-600 hover:text-[#0A2E5C] hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onBookConsultation}
                className="px-5 py-2.5 bg-[#C9962C] hover:bg-[#b08223] text-white font-bold text-xs lg:text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl border border-gray-200 text-[#0A2E5C] hover:bg-gray-50 focus:outline-hidden transition-all cursor-pointer z-50"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0A2E5C]" /> : <Menu className="w-6 h-6 text-[#0A2E5C]" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Menu Overlay - 2026 Dark Luxury Glass Style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#041429]/98 backdrop-blur-2xl text-white pt-28 px-6 pb-8 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                {navLinks.map((link, idx) => {
                  const isActive = currentPage === link.id;
                  return (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.3 }}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full text-left px-5 py-3.5 rounded-2xl text-base font-heading font-bold transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-[#C9962C] to-[#b08223] text-white shadow-lg'
                          : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookConsultation();
                }}
                className="w-full py-4 bg-[#C9962C] hover:bg-[#b08223] text-white font-bold text-center rounded-2xl shadow-xl flex items-center justify-center gap-2 text-xs cursor-pointer transition-transform active:scale-98"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 flex items-center justify-between text-2xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C9962C]" />
                  <span>{COMPANY_INFO.contact.phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#C9962C]" />
                  <span>{COMPANY_INFO.contact.emails[0]}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
