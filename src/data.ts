import { Project, Skill, Achievement, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Aryan Raj",
  title: "Full Stack MERN Developer",
  tagline: "I build scalable, high-performance web applications",
  email: "aryan.email.cse@gmail.com",
  phone: "+91-6207724519",
  location: "India",
  github: "https://github.com/aryanraj6424",
  linkedin: "https://www.linkedin.com/in/aryan-raj-861670212/",
  instagram: "https://www.instagram.com/craanyone_", // Placeholder
  whatsapp: "https://wa.me/916207724519",
  about: "I am a passionate Full Stack Developer skilled in MERN stack (MongoDB, Express, React, Node.js). I love building fast, scalable and user-friendly applications.",
};

export const SKILLS: Skill[] = [
  { name: "Java", level: 85, category: "Languages" },
  { name: "HTML", level: 95, category: "Languages" },
  { name: "CSS", level: 90, category: "Languages" },
  { name: "JavaScript", level: 90, category: "Languages" },
  { name: "ReactJS", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Bootstrap", level: 85, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express.js", level: 85, category: "Backend" },
  { name: "MongoDB", level: 80, category: "Backend" },
  { name: "MySQL", level: 75, category: "Others" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "GitHub", level: 90, category: "Tools" },
  { name: "Postman", level: 85, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "DSA", level: 80, category: "Others" },
];

export const PROJECTS: Project[] = [
  {
    title: "Insight Metrics Research",
    description: "Built a high-performance research interface using React.js and Tailwind CSS. Optimized component rendering and state management, resulting in a 30% faster user interaction speed for data-heavy views.",
    tech: ["JavaScript","React", "Tailwind"],
    liveLink: "https://insightmetrics.co.in/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Bookstore Web App",
    description: "Developed a full-stack research application using the MERN stack. Engineered efficient MongoDB schemas and Node.js APIs to handle large datasets, improving overall platform performance by 30%.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    liveLink: "https://bookstoreapp-frontend-fs03.onrender.com/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Godson Global",
    description: "Designed and deployed a responsive data-driven platform during my internship. Focused on Frontend optimization and clean UI/UX, achieving a 30% boost in performance through code-splitting and asset compression.",
    tech: ["React", "Tailwind", "Framer Motion"],
    liveLink: "https://godsonglobal.com/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
  },
   {
    title: "Manak Impex",
    description: "Architected a scalable data platform with a React frontend and PHP/MySQL backend. Optimized SQL queries and server-side processing to reduce data load times by 30% for global research analytics.",
    tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
    liveLink: "https://manakimpex.com/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
  },
     {
    title: "FunFlight",
    description: "Architected a scalable data platform with a React frontend and PHP/MySQL backend. Optimized SQL queries and server-side processing to reduce data load times by 30% for global research analytics.",
    tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
    liveLink: "https://funflighttraining.com/",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Manak Analytics & Development",
    period: "2026 - Present",
    description: [
      "Worked on real client projects.",
      "Improved application performance by 30% through code optimization.",
      "Collaborated with the design team to enhance UI/UX."
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Finalist – Smart India Hackathon" },
  { title: "Finalist – Kavach Cyber Security Hackathon" },
  { title: "1st Prize – Tug of War" },
  { title: "Completed 13km Marathon" }
];
