import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { internshipData } from '../data/internshipData';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Users, Calendar, Laptop, Target, 
  ArrowLeft, ShieldCheck, Zap, Code2, Sparkles, ArrowRight 
} from 'lucide-react';
import { Button } from "../components/ui/button";

const ProgramDetailPage = () => {
  const { id } = useParams(); 
  const program = internshipData[id];

  // Scroll to top when the program page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!program) return <Navigate to="/internship" />;

  return (
    <div className="bg-[#fcfdfe] min-h-screen pb-20">
      
      {/* --- PREMIUM HERO HEADER --- */}
      <section className="relative pt-32 pb-20 px-6 bg-slate-900 overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-indigo-600/10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <Link to="/internship" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors mb-8 group w-fit">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold uppercase tracking-widest">Explore All Programs</span>
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start gap-4"
          >
            <span className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">
              Professional Internship
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              {program.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Mastery Program.
              </span>
            </h1>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-2xl border border-white/10">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="font-medium">{program.enrolled} Enrolled</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-2xl border border-white/10">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="font-medium">{program.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-2xl border border-white/10">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <span className="font-medium">Verified Certificate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT GRID --- */}
      <section className="max-w-7xl mx-auto px-6 mt-[-4rem] relative z-20">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT: Deep Dive Info */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Sparkles className="text-blue-600" /> Role Overview
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {program.overview}
              </p>
              <div className="p-6 bg-blue-50/50 rounded-3xl border border-blue-100">
                <p className="text-blue-800 font-medium leading-relaxed">
                  Join <strong>Qskill</strong> as a {program.title} Intern! This opportunity is designed for beginners and enthusiasts looking to apply their skills in real-world scenarios while managing tasks independently and meeting professional deadlines.
                </p>
              </div>
            </motion.div>

            {/* Responsibilities & Requirements */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Responsibilities */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-lg shadow-slate-200/30"
              >
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Zap className="text-amber-500" /> Key Responsibilities
                </h3>
                <ul className="space-y-4">
                  {program.responsibilities.map((text, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 group">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-lg shadow-slate-200/30"
              >
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Target className="text-rose-500" /> Requirements
                </h3>
                <ul className="space-y-4">
                  {program.requirements.map((text, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                      <span className="text-sm md:text-base leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Floating Application Card */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="sticky top-28 bg-white rounded-[3rem] p-8 shadow-2xl border border-blue-50 shadow-blue-200/20"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-50 rounded-3xl mx-auto flex items-center justify-center mb-4 shadow-inner">
                  <Code2 size={40} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Get Started</h3>
                <p className="text-slate-500 mt-2">Limited slots for the next cohort.</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Mode</span>
                  <span className="font-bold text-slate-900 text-sm">Online / Remote</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Level</span>
                  <span className="font-bold text-slate-900 text-sm">{program.level}</span>
                </div>
              </div>

              <Button onClick={() => window.open("https://forms.gle/zkMoJvM1k2rQZdbA8", "_blank")} className="w-full py-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xl font-bold shadow-xl shadow-blue-200 hover:scale-[1.02] transition-all active:scale-95 group">
                Apply Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="mt-8 pt-8 border-t border-slate-100 space-y-4 px-2">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Laptop className="w-4 h-4 text-blue-500" /> 
                  </div>
                  Self-Driven Roadmap
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-500" /> 
                  </div>
                  Expert Guidance
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProgramDetailPage;