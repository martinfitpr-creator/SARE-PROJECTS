import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, SERVICES, INDUSTRIES } from '../data/consultingData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface FooterProps {
  onNavigatePage?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePage }) => {
  const handlePageClick = (page: string) => {
    if (onNavigatePage) {
      onNavigatePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A2E5C] text-white pt-16 pb-12 border-t border-[#0A2E5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Four Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <button
              onClick={() => handlePageClick('home')}
              className="flex items-center gap-2 text-left cursor-pointer"
            >
              <img
                src="/src/assets/images/logo_dark_bg.png"
                alt="SARE Projects Solutions Logo"
                loading="lazy"
                className="h-16 w-auto object-contain mix-blend-lighten opacity-95 hover:opacity-100 transition-opacity"
              />
            </button>

            <p className="text-xs text-white/70 leading-relaxed font-normal">
              Empowering South African organizations, NGOs, researchers, and public bodies through expert compliance filings, research fieldwork execution, and executive support.
            </p>


          </div>

          {/* Column 2: Navigation Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C9962C] mb-4">
              Main Pages
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li>
                <button onClick={() => handlePageClick('home')} className="hover:text-[#C9962C] transition-colors cursor-pointer">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('about')} className="hover:text-[#C9962C] transition-colors cursor-pointer">
                  About Practice & Director
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('services')} className="hover:text-[#C9962C] transition-colors cursor-pointer">
                  Services & Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('industries')} className="hover:text-[#C9962C] transition-colors cursor-pointer">
                  Sectors & Industries
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('why-us')} className="hover:text-[#C9962C] transition-colors cursor-pointer">
                  Why Choose SARE Projects
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('resources')} className="hover:text-[#C9962C] transition-colors cursor-pointer">
                  Resources & FAQs
                </button>
              </li>
              <li>
                <button onClick={() => handlePageClick('contact')} className="hover:text-[#C9962C] transition-colors cursor-pointer">
                  Contact & Bookings
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C9962C] mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button onClick={() => handlePageClick('services')} className="hover:text-[#C9962C] transition-colors text-left cursor-pointer">
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Direct Inquiries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C9962C] mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C9962C] shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phoneTel}`} className="hover:text-white">
                  {COMPANY_INFO.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href={COMPANY_INFO.contact.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#25D366] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Direct Chat ({COMPANY_INFO.contact.phoneDisplay})</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#C9962C] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  {COMPANY_INFO.contact.emails.map((e, idx) => (
                    <a key={idx} href={`mailto:${e}`} className="hover:text-white">
                      {e}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C9962C] shrink-0" />
                <span>{COMPANY_INFO.contact.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} SARE Projects Solutions. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#C9962C] hover:text-white text-white/80 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#C9962C] hover:text-white text-white/80 transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#C9962C] hover:text-white text-white/80 transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
