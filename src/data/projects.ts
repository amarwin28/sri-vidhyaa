import { Project, ProjectFilterCategory } from '../types';

export const projectFilterCategories: ProjectFilterCategory[] = [
  'All',
  'AI & Data Science',
  'Generative AI',
  'Media & Growth',
  'Technical Projects'
];

// As strictly instructed: "Use only projects verified from her supplied information. Do not invent project names, screenshots, GitHub repositories, or external links."
// An elegant empty-state invitation is rendered in the Projects section.
export const projectsData: Project[] = [];

