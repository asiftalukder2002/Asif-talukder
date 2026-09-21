export interface ProjectItem {
  id: string;
  title: string;
  category: 'civil' | 'ai' | 'video' | 'design' | 'website' | 'writing';
  categoryLabel: string;
  tag: string;
  badge: string;
  description: string;
  detailedNotes: string;
  imageUrl: string;
  tools: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: string;
}

export interface DisciplineItem {
  id: string;
  code: string;
  title: string;
  icon: string;
  description: string;
  capabilities: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; percentage: number }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  imageUrl: string;
  isVideo?: boolean;
  duration?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  meta: string;
  status: 'CURRENT' | 'COMPLETED';
  icon: string;
}

export interface LightboxData {
  isOpen: boolean;
  title: string;
  description: string;
  tag: string;
  imageUrl?: string;
  tools?: string[];
}
