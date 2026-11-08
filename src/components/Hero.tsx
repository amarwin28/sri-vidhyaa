import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  TrendingUp,
  Brain,
  Layers,
  GraduationCap
} from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
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

  const highlights = [
    { label: 'Media & Growth', org: 'Kromaxzon Technologies', icon: TrendingUp },
    { label: 'AI & Data Science', org: 'Dhaanish Chennai', icon: Brain },
    { label: 'Team Head', org: 'Smart India Hackathon', icon: Layers }
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen bg-[#F5F8FC] text-[#102B66] pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 flex items-center overflow-hidden border-b border-[#DCE7F2]/80"
    >
      {/* Subtle Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle geometric dot matrix */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#0868E8" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dot-grid)" />
        </svg>

        {/* Ambient subtle light blue structural accents */}
        <div className="absolute -top-28 right-0 w-[550px] h-[550px] bg-[#0868E8]/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -left-20 w-[450px] h-[450px] bg-[#102B66]/5 rounded-full blur-[100px]" />

        {/* Clean geometric frame corners */}
        <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-[#0868E8]/20 hidden xl:block" />
        <div className="absolute bottom-12 right-8 w-16 h-16 border-b-2 border-r-2 border-[#0868E8]/20 hidden xl:block" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ============================================================ */}
          {/* Left Column — Personal Introduction                          */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Small Professional Introduction Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#0868E8]/30 shadow-xs w-fit mb-4 sm:mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0868E8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0868E8]" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-[#102B66]">
                Hello, I'm
              </span>
              <span className="text-[10px] text-[#64748B] font-mono uppercase tracking-wider hidden sm:inline">
                • Artificial Intelligence &amp; Data Science
              </span>
            </motion.div>

            {/* Large, Bold Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold tracking-tight leading-[1.05] text-[#102B66] mb-3"
            >
              S.R. <span className="text-[#0868E8]">SRIVIDHYAA</span>
            </motion.h1>

            {/* Professional Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl font-bold text-[#0868E8] tracking-tight leading-snug mb-4"
            >
              AI &amp; Data Science Student | Media &amp; Growth Team Member
            </motion.div>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed mb-6 max-w-2xl font-normal"
            >
              An Artificial Intelligence and Data Science student passionate about emerging technologies, Generative AI, creative problem-solving, and digital communication. Interested in combining technology, content creation, marketing, and creative storytelling to build meaningful digital experiences.
            </motion.p>

            {/* Professional Organization Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap gap-2 sm:gap-2.5 mb-8"
            >
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#DCE7F2] text-xs font-semibold text-[#102B66] shadow-xs"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#0868E8]" />
                    <span>
                      {item.label} <span className="text-[#64748B] font-normal">—</span> {item.org}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Primary & Secondary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8"
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="px-6 py-3.5 rounded-xl bg-[#0868E8] hover:bg-[#0756C2] text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 shadow-lg shadow-[#0868E8]/25 hover:shadow-[#0868E8]/40 transition-all cursor-pointer active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download="S.R._Srividhyaa_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#F0F5FA] text-[#102B66] border-2 border-[#102B66]/20 hover:border-[#102B66] font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-[#0868E8]" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Connect Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="flex items-center gap-3.5 pt-3 border-t border-[#DCE7F2]"
            >
              <span className="text-xs uppercase tracking-wider text-[#64748B] font-mono font-semibold">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={`mailto:${profileData.email}`}
                  className="w-10 h-10 rounded-xl bg-white border border-[#DCE7F2] hover:border-[#0868E8] hover:text-[#0868E8] text-[#102B66] flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                  aria-label="Email S.R. Srividhyaa"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {profileData.linkedin ? (
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-[#DCE7F2] hover:border-[#0868E8] hover:text-[#0868E8] text-[#102B66] flex items-center justify-center transition-all hover:scale-105 shadow-xs"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="px-3 py-2 rounded-xl bg-white border border-[#DCE7F2] hover:border-[#0868E8] text-xs font-semibold text-[#102B66] hover:text-[#0868E8] flex items-center gap-1.5 transition-all shadow-xs"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0868E8]" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* ============================================================ */}
          {/* Right Column — Profile Visual & Geometric Frame              */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end mt-6 lg:mt-0"
          >
            {/* Outer Profile Composition Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px]">
              
              {/* Deep Navy Geometric Backdrop Layer */}
              <div className="absolute -inset-2.5 sm:-inset-3 bg-[#071B35] rounded-3xl transform rotate-2 sm:rotate-3 opacity-95 shadow-2xl shadow-[#071B35]/30 pointer-events-none" />

              {/* Electric Blue Geometric Accent Frame */}
              <div className="absolute -inset-1 sm:-inset-1.5 border-2 border-[#0868E8] rounded-2xl transform -rotate-1 pointer-events-none opacity-85" />

              {/* Main Portrait Card Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-[#071B35] border-2 border-white shadow-xl h-[400px] sm:h-[460px] md:h-[500px] flex flex-col justify-center items-center">
                {!imageError ? (
                  <img
                    src="/images/profile/srividhyaa.png"
                    alt="S.R. Srividhyaa — Artificial Intelligence & Data Science Student"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                    loading="eager"
                    fetchPriority="high"
                  />
                ) : null}

                {/* Elegant fallback / default portrait presentation with SV Monogram and Geometric Tech Grid */}
                {imageError && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#071B35] via-[#102B66] to-[#071B35] overflow-hidden text-center select-none">
                    {/* Background subtle circuit grid */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="card-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#0868E8" strokeWidth="0.8" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#card-grid)" />
                      </svg>
                    </div>

                    {/* Glowing Core Orbit */}
                    <div className="relative mb-6">
                      <div className="absolute -inset-3 bg-[#0868E8]/20 rounded-full blur-xl animate-pulse" />
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-[#102B66] to-[#071B35] border-2 border-[#0868E8] flex items-center justify-center shadow-2xl relative">
                        <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
                          S<span className="text-[#0868E8]">V</span>
                        </span>
                      </div>
                    </div>

                    {/* Identity Typography */}
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        S.R. SRIVIDHYAA
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#0868E8] mt-1 tracking-wide uppercase font-mono">
                        AI &amp; Data Science
                      </p>
                      <p className="text-[11px] text-[#DCE7F2]/70 mt-1 max-w-[240px]">
                        Media &amp; Growth Team Member
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] text-[#DCE7F2] font-mono">
                        <span className="w-2 h-2 rounded-full bg-[#0868E8] animate-pulse" />
                        <span>Kromaxzon Technologies</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Subtle bottom vignette to ground the portrait */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#071B35]/80 via-[#071B35]/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Information Card 1: AI & DATA SCIENCE — STUDENT */}
              <motion.div
                initial={{ opacity: 0, x: -16, y: -8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4 }}
                className="absolute -top-4 -left-3 sm:-top-5 sm:-left-5 bg-white/95 backdrop-blur-md border border-[#0868E8]/30 rounded-xl px-3.5 py-2.5 shadow-lg shadow-black/10 flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0868E8]/10 text-[#0868E8] flex items-center justify-center shrink-0 border border-[#0868E8]/20">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] leading-none">
                    AI &amp; DATA SCIENCE
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#102B66] leading-tight">
                    STUDENT
                  </div>
                </div>
              </motion.div>

              {/* Floating Information Card 2: MEDIA & GROWTH — KROMAXZON TECHNOLOGIES */}
              <motion.div
                initial={{ opacity: 0, x: 16, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.55, delay: 0.5 }}
                className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-5 bg-white/95 backdrop-blur-md border border-[#0868E8]/30 rounded-xl px-3.5 py-2.5 shadow-lg shadow-black/10 flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-lg bg-[#102B66] text-white flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-[#0868E8]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] leading-none">
                    MEDIA &amp; GROWTH
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#102B66] leading-tight">
                    KROMAXZON TECHNOLOGIES
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

