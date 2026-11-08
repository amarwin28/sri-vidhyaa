import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="group relative rounded-2xl bg-white border border-[#DCE7F2] card-shadow hover:card-shadow-hover hover:border-[#0868E8]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
    >
      <div>
        {/* Project Thumbnail Image */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#071B35]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#071B35] to-[#102B66] text-white">
              <Sparkles className="w-8 h-8 text-[#0868E8] mb-2" />
              <span className="text-xs font-mono text-[#DCE7F2]/80 uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          )}

          {/* Category Tag Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full bg-[#071B35]/90 backdrop-blur-md text-[#DCE7F2] text-xs font-semibold border border-white/10 shadow-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#102B66] group-hover:text-[#0868E8] transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* Technology Pill Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.techTags.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md bg-[#DCE7F2]/40 text-[#102B66] text-xs font-medium border border-[#DCE7F2]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 pb-6 pt-3 border-t border-[#DCE7F2]/60 flex items-center justify-between">
        <button
          onClick={() => onOpenModal(project)}
          className="text-xs sm:text-sm font-semibold text-[#0868E8] hover:text-[#0756C2] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-[#64748B] hover:text-[#102B66] hover:bg-[#DCE7F2]/40 transition-colors"
              aria-label="View source on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-[#64748B] hover:text-[#0868E8] hover:bg-[#DCE7F2]/40 transition-colors"
              aria-label="View live project"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

