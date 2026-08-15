import { ReactNode } from 'react';

export interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
}