import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Rocket, Briefcase, Users, 
  Lightbulb, ShieldCheck, GraduationCap, ArrowUpRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
//   const brandPurple = "#6D28D9";

  const missionPoints = [
    { text: "Industry hands-on experience through project-based learning.", icon: <Rocket className="text-blue-500" /> },
    { text: "Bridge the gap between academics and industry expectations.", icon: <Target className="text-purple-500" /> },
    { text: "Live mentorship from experienced professionals.", icon: <Users className="text-emerald-500" /> },
    { text: "Teach practical skills not covered in college curriculum.", icon: <Lightbulb className="text-amber-500" /> },
    { text: "Career guidance and placement readiness support.", icon: <Briefcase className="text-rose-500" /> },
    { text: "Prepare learners for real job opportunities.", icon: <ShieldCheck className="text-cyan-500" /> },
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen">
      
      {/* --- HERO SECTION: THE LEADERSHIP VISION --- */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Empowering Future Professionals
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
              We Bridge the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Skills Gap.
              </span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              At Qskill, a learning initiative under <span className="text-white font-semibold">Squarcell Resource India Pvt. Ltd.</span>, 
              we are committed to transforming students into industry-ready professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CORE PHILOSOPHY: MISSION & VISION --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                <Eye size={120} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Eye className="text-purple-600" /> Our Vision
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To empower students with job-ready skills, practical knowledge, and confidence to build successful careers in the modern workforce. We envision a future where students are not limited by outdated academic learning but are equipped with the tools and technologies needed to thrive.
              </p>
            </div>

            <div className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Target size={120} />
              </div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="text-purple-400" /> Our Mission
              </h2>
              <ul className="space-y-4 relative z-10">
                {missionPoints.map((point, i) => (
                  <li key={i} className="flex gap-4 text-slate-300 items-start">
                    <div className="mt-1">{point.icon}</div>
                    <span className="text-sm md:text-base">{point.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Students collaborating" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block border border-slate-100">
              <p className="text-4xl font-black text-purple-600">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1">Practical Focus</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHAT WE DO SECTION --- */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">What We Do</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              At Qskill, we focus on experiential learning. We don't just teach theory — we help students work on real-world projects, understand industry workflows, and develop skills employers actually look for.
            </p>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight size={20} />
              </div>
              <Link to="/internship">
              <button className="font-bold text-slate-900">Explore Our Programs</button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Technical Training", icon: <GraduationCap /> },
              { label: "Live Mentorship", icon: <Users /> },
              { label: "Industry Projects", icon: <Briefcase /> },
              { label: "Career Guidance", icon: <Target /> },
            ].map((box, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:bg-purple-600 transition-all duration-500">
                <div className="text-purple-600 group-hover:text-white transition-colors mb-4">
                  {React.cloneElement(box.icon, { size: 32 })}
                </div>
                <span className="font-bold text-slate-800 group-hover:text-white text-sm">{box.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY QSKILL GRID --- */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
  
  {/* Background Glow Effects */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-3xl rounded-full"></div>

  <div className="relative max-w-7xl mx-auto px-6 text-center z-10">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="px-5 py-2 rounded-full border border-purple-200 bg-white/70 backdrop-blur-md text-xs font-bold tracking-[0.25em] uppercase text-purple-600 shadow-sm">
        Why QSkill
      </span>

      <h2 className="mt-8 text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
        Because we teach what <br />
        <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent">
          colleges often don't.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed">
        Real-world learning designed for modern careers, startups, and industry expectations.
      </p>
    </motion.div>

    {/* Premium Cards */}
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-20">
      {[
        {
          title: "Live mentor-led learning",
          icon: "🎯"
        },
        {
          title: "Practical project experience",
          icon: "⚡"
        },
        {
          title: "Industry-relevant skills",
          icon: "🚀"
        },
        {
          title: "Career-focused internships",
          icon: "💼"
        },
        {
          title: "Placement readiness",
          icon: "🏆"
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(124,58,237,0.18)] transition-all duration-500"
        >
          
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-purple-500/10 group-hover:to-indigo-500/10 transition-all duration-500"></div>

          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white flex items-center justify-center text-2xl shadow-lg">
              {item.icon}
            </div>

            <h3 className="mt-6 text-lg font-bold text-slate-800 leading-snug">
              {item.title}
            </h3>

            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              Learn through practical execution, mentorship, and career-focused guidance.
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Quote Section */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-32 relative"
    >

      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-3xl rounded-full"></div>

      <div className="relative rounded-[2rem] border border-white/40 bg-white/60 backdrop-blur-2xl px-10 py-16 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

        <div className="text-6xl text-purple-200 font-serif leading-none">
          “
        </div>

        <p className="mt-4 text-2xl md:text-3xl font-medium text-slate-600 italic leading-relaxed max-w-3xl mx-auto">
          We are not just building learners —
          <span className="block mt-3 text-slate-900 font-black not-italic">
            we are building future professionals.
          </span>
        </p>

        <div className="mt-12 flex justify-center items-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-purple-300"></span>

          <span className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-[0.3em] shadow-lg">
            QSkill Leadership
          </span>

          <span className="h-px w-16 bg-gradient-to-l from-transparent to-purple-300"></span>
        </div>
      </div>
    </motion.div>

  </div>
</section>
    </div>
  );
};

export default AboutPage;