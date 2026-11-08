import React from 'react';
import { ArrowUp, Mail, Phone, Heart, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { profileData } from '../data/profile';

const footerNavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-[#071B35] text-white pt-16 pb-12 border-t border-white/10 overflow-hidden">
      {/* Subtle Electric Blue Curved Accents & Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-[#0868E8] to-transparent opacity-60" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#0868E8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#102B66] border border-[#0868E8]/50 flex items-center justify-center font-bold text-white shadow-sm">
                  <span>S</span>
                  <span className="text-[#0868E8]">V</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-white leading-none">
                    S.R. <span className="text-[#0868E8]">SRIVIDHYAA</span>
                  </span>
                  <span className="text-[10px] tracking-widest text-[#DCE7F2]/60 uppercase font-mono mt-0.5">
                    Personal Portfolio
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#DCE7F2]/80 leading-relaxed max-w-sm mb-6">
                "Combining artificial intelligence, digital media, and creative communication to build purposeful experiences."
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${profileData.email}`}
                className="w-9 h-9 rounded-lg bg-[#102B66] border border-white/10 hover:border-[#0868E8] hover:text-[#0868E8] text-[#DCE7F2] flex items-center justify-center transition-all hover:scale-105"
                aria-label="Email Srividhyaa"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-lg bg-[#102B66] border border-white/10 hover:border-[#0868E8] hover:text-[#0868E8] text-[#DCE7F2] flex items-center justify-center transition-all hover:scale-105"
                aria-label="Call Srividhyaa"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>

              {profileData.linkedin && (
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#102B66] border border-white/10 hover:border-[#0868E8] hover:text-[#0868E8] text-[#DCE7F2] flex items-center justify-center transition-all hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0868E8] mb-4">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2.5">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-[#DCE7F2]/75 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Status */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0868E8] mb-4">
              Current Role
            </h4>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-xs font-semibold text-white block">
                Media &amp; Growth Team
              </span>
              <a
                href="https://www.kromaxzon.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#0868E8] hover:underline font-medium inline-flex items-center gap-1 transition-colors"
              >
                <span>Kromaxzon Technologies</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-[11px] text-[#DCE7F2]/60 font-mono block">
                2026 – Present • Chennai, India
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DCE7F2]/60">
          <div>
            &copy; {currentYear} S.R. Srividhyaa. All rights reserved. Member of Kromaxzon Technologies.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#DCE7F2] hover:text-white transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#0868E8]" />
          </button>
        </div>

      </div>
    </footer>
  );
};

