import { PERSONAL_INFO } from '../data';

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <a href="#" className="text-2xl font-bold font-display text-gradient">
              AR.
            </a>
            <p className="text-slate-500 text-sm mt-2">
              Building the future of the web, one pixel at a time.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
