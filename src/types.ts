export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveLink: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Achievement {
  title: string;
  description?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}
