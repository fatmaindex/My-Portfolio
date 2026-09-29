import { ReactNode } from 'react';

export interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
}
export type Project = {
  title: string;
  image: string;
  kind: string;
  blurb: string;
  stack: string[];
  demo?: string;
  demoLabel?: string;   
  code?: string;
  featured?: boolean;
};

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