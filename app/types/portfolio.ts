// Enhanced Portfolio Data Types

export interface ProfessionalLink {
  platform: 'github' | 'linkedin' | 'email' | 'resume';
  url: string;
  label: string;
  icon?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface Technology {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database' | 'library';
  reasonForChoice: string;
}

export interface ProjectLink {
  type: 'github' | 'demo' | 'documentation';
  url: string;
  label: string;
}

export interface CodeSnippet {
  language: string;
  code: string;
  description: string;
  filename?: string;
}

export interface EnhancedProject {
  title: string;
  description: string;
  problemStatement: string;
  solution: string;
  technologies: Technology[];
  metrics: ProjectMetric[];
  links: ProjectLink[];
  highlights: string[];
  codeSnippet?: CodeSnippet;
  featured?: boolean;
}

export interface Skill {
  name: string;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  yearsOfExperience?: number;
  projectExamples: string[];
  description?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  transferableSkills: string[];
  accomplishments: string[];
  type: 'work' | 'volunteer' | 'project';
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  gpa?: string;
  relevantCoursework: string[];
  projects: string[];
  achievements?: string[];
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  category: 'academic' | 'project' | 'competition' | 'certification';
  link?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  professionalLinks: ProfessionalLink[];
}

export interface HeroContent {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  resumeDownloadUrl: string;
  professionalLinks: ProfessionalLink[];
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  structuredData: {
    "@type": "Person";
    name: string;
    jobTitle: string;
    url: string;
    sameAs: string[];
    knowsAbout: string[];
  };
}