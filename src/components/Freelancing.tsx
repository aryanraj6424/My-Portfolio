import { motion } from 'motion/react';
import { MessageSquare, Code, Palette, Bug, ArrowRight } from 'lucide-react';

const SERVICES = [
  { icon: <Code />, title: "Website Development", desc: "Custom React / MERN stack applications built for speed and scalability." },
  { icon: <Palette />, title: "UI/UX Design", desc: "Modern, intuitive designs that convert visitors into loyal customers." },
  { icon: <Bug />, title: "Bug Fixing & Optimization", desc: "Improving performance and resolving issues in existing codebases." },
];

export default function Freelancing() {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden border-primary/20"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Available for <span className="text-gradient">Freelance Work</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Looking for a dedicated developer to bring your vision to life? I'm ready to help you build something amazing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-8 rounded-3xl text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Hire Me Now <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="https://wa.me/916207724519"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 glass text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              Contact Me <MessageSquare size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
