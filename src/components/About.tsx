import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Video, TrendingUp, Sparkles, GraduationCap, Building2, Lightbulb, Users } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { profileData } from '../data/profile';

const highlightCards = [
  {
    title: 'Artificial Intelligence',
    description: 'Exploring Generative AI, prompt engineering, and foundational data science workflows to build intelligent digital tools.',
    icon: Brain,
    badge: 'Core Focus'
  },
  {
    title: 'Creative Media & Communication',
    description: 'Crafting engaging multimedia, video editing, visual storytelling, and high-impact technical presentations.',
    icon: Video,
    badge: 'Creative Craft'
  },
  {
    title: 'Marketing & Growth',
    description: 'Driving brand presence, promotional strategy, digital storytelling, and communication initiatives at Kromaxzon Technologies.',
    icon: TrendingUp,
    badge: 'Strategy & Impact'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="ABOUT ME"
          title="Technology Meets Creativity."
          subtitle="Combining artificial intelligence foundations, digital media production, and high-impact growth strategy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Narrative Editorial Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-5 text-[#64748B] text-base sm:text-lg leading-relaxed"
          >
            {profileData.aboutStory.map((paragraph, index) => (
              <p
                key={index}
                className={index === 0 ? 'text-[#102B66] font-medium text-lg sm:text-xl leading-relaxed' : ''}
              >
                {paragraph}
              </p>
            ))}

            {/* Core Interest Pillars */}
            <div className="pt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0868E8] mb-3">
                Core Intersections &amp; Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Artificial Intelligence & Generative AI',
                  'Content Creation & Video Editing',
                  'Marketing & Visual Communication',
                  'Creative Problem-Solving & Hackathons',
                  'Team Collaboration & Leadership',
                  'Data Science & Emerging Technologies'
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F5F8FC] border border-[#DCE7F2] text-xs font-semibold text-[#102B66]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0868E8]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Context Highlights */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#DCE7F2]">
              <div className="p-4 rounded-xl bg-[#DCE7F2]/40 border border-[#DCE7F2] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white text-[#0868E8] shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#102B66]">AI &amp; Data Science</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Dhaanish Chennai • 9.14 CGPA</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#DCE7F2]/40 border border-[#DCE7F2] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white text-[#0868E8] shadow-xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#102B66]">Media &amp; Growth</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Kromaxzon Technologies</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Three Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-5">
            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.12 }}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-[#DCE7F2]/30 hover:bg-[#DCE7F2]/60 border border-[#DCE7F2] hover:border-[#0868E8]/50 transition-all duration-300 card-shadow hover:card-shadow-hover hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE7F2] group-hover:border-[#0868E8]/40 text-[#0868E8] flex items-center justify-center shrink-0 shadow-sm transition-colors">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-lg sm:text-xl font-bold text-[#102B66] group-hover:text-[#0868E8] transition-colors">
                          {card.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#0868E8] uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-full border border-[#0868E8]/20 shadow-xs">
                          {card.badge}
                        </span>
                      </div>
                      
                      <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

