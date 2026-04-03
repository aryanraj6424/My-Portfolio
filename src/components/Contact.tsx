// import { motion } from 'motion/react';
// import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
// import { PERSONAL_INFO } from '../data';
// import { cn } from '../lib/utils';

// export default function Contact() {
//   return (
//     <section id="contact" className="py-24 bg-slate-950 relative">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
//               Get in <span className="text-gradient">Touch</span>
//             </h2>
//             <p className="text-xl text-slate-400 mb-12 leading-relaxed">
//               Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.
//             </p>

//             <div className="space-y-8 mb-12">
//               <div className="flex items-center gap-6 group">
//                 <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Email Me</p>
//                   <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-medium text-white hover:text-primary transition-colors">
//                     {PERSONAL_INFO.email}
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-6 group">
//                 <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
//                   <Phone size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Call Me</p>
//                   <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-medium text-white hover:text-secondary transition-colors">
//                     {PERSONAL_INFO.phone}
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-6 group">
//                 <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
//                   <MapPin size={24} />
//                 </div>
//                 <div>
//                   <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Location</p>
//                   <p className="text-lg font-medium text-white">
//                     {PERSONAL_INFO.location}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               {[
//                 { icon: <Github />, href: PERSONAL_INFO.github, color: 'hover:bg-slate-800' },
//                 { icon: <Linkedin />, href: PERSONAL_INFO.linkedin, color: 'hover:bg-blue-600' },
//                 { icon: <Instagram />, href: PERSONAL_INFO.instagram, color: 'hover:bg-pink-600' },
//                 { icon: <MessageCircle />, href: PERSONAL_INFO.whatsapp, color: 'hover:bg-green-600' },
//               ].map((social, i) => (
//                 <motion.a
//                   key={i}
//                   href={social.href}
//                   target="_blank"
//                   rel="noreferrer"
//                   whileHover={{ y: -5 }}
//                   className={cn(
//                     "w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300",
//                     social.color
//                   )}
//                 >
//                   {social.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="glass-card p-10 rounded-[2.5rem]"
//           >
//             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-slate-400 ml-1">Full Name</label>
//                   <input
//                     type="text"
//                     placeholder="John Doe"
//                     className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl focus:outline-none focus:border-primary transition-colors text-white"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
//                   <input
//                     type="email"
//                     placeholder="john@example.com"
//                     className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl focus:outline-none focus:border-primary transition-colors text-white"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-400 ml-1">Subject</label>
//                 <input
//                   type="text"
//                   placeholder="Project Inquiry"
//                   className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl focus:outline-none focus:border-primary transition-colors text-white"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
//                 <textarea
//                   rows={5}
//                   placeholder="Tell me about your project..."
//                   className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl focus:outline-none focus:border-primary transition-colors text-white resize-none"
//                 />
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
//               >
//                 Send Message <Send size={20} />
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle, Loader2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react'; // 1. Import Hooks
import { PERSONAL_INFO } from '../data';
import { cn } from '../lib/utils';

export default function Contact() {
  // 2. Formspree State Setup (Using your ID)
  const [state, handleSubmit] = useForm("meepggaa");

  // 3. Success State UI
  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 bg-slate-950 flex items-center justify-center min-h-[600px]">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          className="glass-card p-12 text-center rounded-[2.5rem] max-w-md mx-auto"
        >
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send size={40} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
          <p className="text-slate-400 mb-8">Thanks Aryan! I'll get back to you shortly.</p>
          <button 
            onClick={() => window.location.reload()}
            className="text-primary font-bold hover:underline transition-all"
          >
            Send another message
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Email Me</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-medium text-white hover:text-primary transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Call Me</p>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-medium text-white hover:text-secondary transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-lg font-medium text-white">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: <Github />, href: PERSONAL_INFO.github, color: 'hover:bg-slate-800' },
                { icon: <Linkedin />, href: PERSONAL_INFO.linkedin, color: 'hover:bg-blue-600' },
                { icon: <Instagram />, href: PERSONAL_INFO.instagram, color: 'hover:bg-pink-600' },
                { icon: <MessageCircle />, href: PERSONAL_INFO.whatsapp, color: 'hover:bg-green-600' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                  className={cn(
                    "w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300",
                    social.color
                  )}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem]"
          >
            {/* 4. Added handleSubmit to form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name" // Added name attribute
                    placeholder="Aryan Raj"
                    className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl focus:outline-none focus:border-primary transition-colors text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email" // Added name attribute
                    placeholder="aryan@example.com"
                    className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl focus:outline-none focus:border-primary transition-colors text-white"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject" // Added name attribute
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl focus:outline-none focus:border-primary transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message" // Added name attribute
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-2xl focus:outline-none focus:border-primary transition-colors text-white resize-none"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>
              
              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  <>Sending... <Loader2 className="animate-spin" size={20} /></>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}