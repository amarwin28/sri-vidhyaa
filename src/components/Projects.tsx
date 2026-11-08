import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ExternalLink, ArrowRight, Brain, Rocket, Video, Mail } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { projectsData, projectFilterCategories } from '../data/projects';
import { Project, ProjectFilterCategory } from '../types';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setActiveModalProject(project);
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.filterCategories.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <SectionHeading
            badge="PROJECT SHOWCASE"
            title="Featured Projects &amp; Pipeline"
            subtitle="Hands-on artificial intelligence experimentation, data science projects, and digital media initiatives."
            className="mb-0!"
          />

          {/* Pipeline Status Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#DCE7F2]/40 border border-[#DCE7F2] text-xs font-mono text-[#102B66]">
            <span className="w-2 h-2 rounded-full bg-[#0868E8] animate-pulse" />
            <span className="font-bold text-[#0868E8]">Active Pipeline</span>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {projectFilterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0868E8] text-white shadow-md shadow-[#0868E8]/30 scale-[1.02]'
                    : 'bg-[#DCE7F2]/40 text-[#64748B] hover:text-[#102B66] hover:bg-[#DCE7F2]/70 border border-[#DCE7F2]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* If Projects Exist in Data */}
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Elegant Empty-State Invitation as strictly requested */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#F5F8FC] border border-[#DCE7F2] text-center relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#0868E8]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#DCE7F2] text-[#0868E8] flex items-center justify-center mx-auto mb-6 shadow-md shadow-[#0868E8]/15">
                <Sparkles className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0868E8] bg-[#0868E8]/10 px-3 py-1 rounded-full border border-[#0868E8]/20">
                Under Active Development
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102B66] tracking-tight mt-4 mb-3">
                Projects Pipeline &amp; Technical Explorations
              </h3>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-8">
                I am actively developing solutions across Generative AI, data analytics, and digital media production. In accordance with strict portfolio integrity, only verified and deployed case studies will be featured here upon launch.
              </p>

              {/* Three Pipeline Preview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-8">
                <div className="p-4 rounded-xl bg-white border border-[#DCE7F2] card-shadow">
                  <div className="w-8 h-8 rounded-lg bg-[#DCE7F2]/60 text-[#0868E8] flex items-center justify-center mb-2.5">
                    <Brain className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#102B66] mb-1">
                    Generative AI Workflows
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Experimenting with prompt architectures, LLM integrations, and Python algorithms.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DCE7F2] card-shadow">
                  <div className="w-8 h-8 rounded-lg bg-[#DCE7F2]/60 text-[#0868E8] flex items-center justify-center mb-2.5">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#102B66] mb-1">
                    Applied Data Science
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Analyzing real-world datasets, statistical modeling, and analytical dashboards.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#DCE7F2] card-shadow">
                  <div className="w-8 h-8 rounded-lg bg-[#DCE7F2]/60 text-[#0868E8] flex items-center justify-center mb-2.5">
                    <Video className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#102B66] mb-1">
                    Media &amp; Growth Initiatives
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Digital campaigns, video storytelling, and growth assets for Kromaxzon Technologies.
                  </p>
                </div>
              </div>

              {/* Invitation CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0868E8] hover:bg-[#0756C2] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-md shadow-[#0868E8]/20 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Connect for Collaboration</span>
                </a>
                <a
                  href="/resume.pdf"
                  download="S.R._Srividhyaa_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-[#102B66] border border-[#DCE7F2] text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Review Full Resume</span>
                  <ArrowRight className="w-4 h-4 text-[#0868E8]" />
                </a>
              </div>
            </div>
          </motion.div>
        )}

      </div>

      {/* Project Detail Modal Dialog (Functional when projects are added) */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="absolute inset-0 bg-[#071B35]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#DCE7F2] z-10 max-h-[90vh] flex flex-col"
            >
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#DCE7F2] bg-[#F5F8FC]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0868E8]/15 text-[#0868E8] text-xs font-semibold">
                    {activeModalProject.category}
                  </span>
                  <span className="text-xs text-[#64748B]">Project Overview</span>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1.5 rounded-lg text-[#64748B] hover:text-[#102B66] hover:bg-[#DCE7F2]/50 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#102B66]">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {activeModalProject.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeModalProject.techTags.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[#DCE7F2]/50 text-[#102B66] text-xs font-medium border border-[#DCE7F2]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

