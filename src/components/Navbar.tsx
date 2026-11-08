import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071B35]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3.5 border-b border-white/10'
          : 'bg-[#071B35]/80 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding — Adapted Monogram treatment */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="S.R. Srividhyaa - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#102B66] border border-[#0868E8]/40 flex items-center justify-center font-bold text-white shadow-sm group-hover:border-[#0868E8] group-hover:shadow-[0_0_15px_rgba(8,104,232,0.35)] transition-all">
              <span>S</span>
              <span className="text-[#0868E8]">V</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-white transition-colors leading-none">
                S.R. <span className="text-[#0868E8]">SRIVIDHYAA</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#DCE7F2]/70 uppercase font-mono mt-0.5">
                Portfolio 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#DCE7F2]/75 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#0868E8] rounded-full shadow-[0_0_8px_#0868E8]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="S.R._Srividhyaa_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#0868E8] hover:bg-[#0756C2] text-white text-sm font-semibold inline-flex items-center gap-2 shadow-sm hover:shadow-[0_4px_16px_rgba(8,104,232,0.35)] transition-all active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#DCE7F2] hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#071B35]/98 border-b border-white/10 px-4 pt-3 pb-6 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-[#0868E8]/15 text-[#0868E8] font-bold border-l-4 border-[#0868E8]'
                        : 'text-[#DCE7F2]/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="/resume.pdf"
                  download="S.R._Srividhyaa_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#0868E8] hover:bg-[#0756C2] text-white font-semibold text-center text-sm inline-flex items-center justify-center gap-2 shadow-md shadow-[#0868E8]/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

