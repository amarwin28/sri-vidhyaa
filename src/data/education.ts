import { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: 'btech-aids',
    degree: 'B.Tech — Artificial Intelligence & Data Science',
    institution: 'Dhaanish Chennai College of Engineering',
    period: '2025 – 2029',
    grade: 'CGPA: 9.14 / 10',
    current: true,
    details: [
      'Specialized curriculum focused on Artificial Intelligence, Machine Learning algorithms, Data Science methodologies, and algorithmic problem-solving.',
      'Active participant in hackathons, collegiate innovation initiatives, and student technical workshops.'
    ]
  },
  {
    id: 'hsc-class-12',
    degree: 'Higher Secondary Education — Class 12',
    institution: 'AVM Matriculation Higher Secondary School',
    period: 'Completed',
    grade: 'Score: 79%',
    current: false,
    details: [
      'Comprehensive higher secondary foundations with focus on mathematics, computer science, and scientific inquiry.',
      'Active involvement in co-curricular scientific activities, presentations, and team projects.'
    ]
  }
];

