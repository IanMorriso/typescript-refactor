import type { EnhancedProject, Skill, Achievement } from '../types/portfolio';

// Utility functions for working with portfolio data

export const getFeaturedProjects = (projects: EnhancedProject[]): EnhancedProject[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByTechnology = (projects: EnhancedProject[], technology: string): EnhancedProject[] => {
  return projects.filter(project => 
    project.technologies.some(tech => 
      tech.name.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getSkillsByProficiency = (skills: Skill[], proficiency: Skill['proficiency']): Skill[] => {
  return skills.filter(skill => skill.proficiency === proficiency);
};

export const getSkillsWithExperience = (skills: Skill[]): Skill[] => {
  return skills.filter(skill => skill.yearsOfExperience && skill.yearsOfExperience > 0);
};

export const getAchievementsByCategory = (achievements: Achievement[], category: Achievement['category']): Achievement[] => {
  return achievements.filter(achievement => achievement.category === category);
};

export const sortAchievementsByDate = (achievements: Achievement[]): Achievement[] => {
  return [...achievements].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getProjectMetricsSummary = (projects: EnhancedProject[]) => {
  const totalProjects = projects.length;
  const featuredProjects = getFeaturedProjects(projects).length;
  const technologiesUsed = new Set(
    projects.flatMap(project => project.technologies.map(tech => tech.name))
  ).size;
  
  return {
    totalProjects,
    featuredProjects,
    technologiesUsed
  };
};

export const formatProficiencyLevel = (proficiency: Skill['proficiency']): string => {
  const levels = {
    'Beginner': '⭐',
    'Intermediate': '⭐⭐',
    'Advanced': '⭐⭐⭐',
    'Expert': '⭐⭐⭐⭐'
  };
  return levels[proficiency];
};

export const getYearsOfExperienceText = (years?: number): string => {
  if (!years) return '';
  return years === 1 ? '1 year' : `${years} years`;
};