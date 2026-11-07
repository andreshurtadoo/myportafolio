export interface TechStack {
  name: string;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  repoLink?: string;
  liveLink?: string;
  year: string;
  category: 'academic' | 'personal' | 'commercial';
}

export interface TimelineEvent {
  date: string;
  title: string;
  role?: string;
  company?: string;
  description: string;
  icon: string;
}