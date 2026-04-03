import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { CheckCircle2, Zap, Layout, Rocket } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: <Zap className="text-primary" />, title: "Problem Solving", desc: "I enjoy tackling complex challenges with efficient solutions." },
  { icon: <Layout className="text-secondary" />, title: "Clean UI", desc: "I design intuitive and aesthetically pleasing user interfaces." },
  { icon: <Rocket className="text-accent" />, title: "Performance", desc: "I optimize applications for maximum speed and scalability." },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              {PERSONAL_INFO.about}
            </p>
            
            <div className="space-y-6">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-4 p-4 glass-card rounded-2xl"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square glass rounded-3xl overflow-hidden relative z-10 p-2">
              <img
                src="./IMG_1.jpg"
                alt="Aryan Raj"
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
