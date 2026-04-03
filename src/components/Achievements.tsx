import { motion } from 'motion/react';
import { ACHIEVEMENTS } from '../data';
import { Trophy, Award, Star, Medal } from 'lucide-react';

const ICONS = [
  <Trophy className="text-yellow-500" />,
  <Award className="text-blue-500" />,
  <Star className="text-purple-500" />,
  <Medal className="text-orange-500" />,
];

export default function Achievements() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            My <span className="text-gradient">Achievements</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Milestones and recognitions that mark my growth and competitive spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl text-center flex flex-col items-center gap-6"
            >
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-3xl">
                {ICONS[i % ICONS.length]}
              </div>
              <h3 className="text-lg font-bold text-white leading-tight">
                {achievement.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
