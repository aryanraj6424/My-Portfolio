import { motion } from 'motion/react';
import { EXPERIENCES } from '../data';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional journey and contributions in the field of web development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-8 border-l-2 border-slate-800"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
              
              <div className="glass-card p-8 rounded-3xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-primary font-medium flex items-center gap-2">
                      <Briefcase size={16} /> {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-start md:items-end">
                    <span className="px-4 py-1.5 glass rounded-full text-xs font-bold text-slate-300 flex items-center gap-2">
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin size={12} /> India
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-400 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
