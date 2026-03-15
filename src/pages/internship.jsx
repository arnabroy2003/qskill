import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, Terminal, Layout, Database, Brain, Globe, Coffee, 
  BarChart, Users, Palette, PenTool, Award, CheckCircle2, ArrowRight,
  Clock, Briefcase, Globe2
} from 'lucide-react';
import { Button } from "../components/ui/button";

const InternshipPage = () => {
  const navigate = useNavigate();

  // 1. Added unique 'id' to each object to match your dynamic routes
  const techInternships = [
    { id: "python-development", title: "Python Development", desc: "Build APIs, automation scripts, and data applications using modern Python frameworks.", duration: "1 Month", projects: "3+", status: "OPEN", icon: <Terminal />, color: "blue" },
    { id: "frontend-development", title: "Frontend Development", desc: "Master React.js, Tailwind CSS, and modern UI patterns to build stunning web interfaces.", duration: "1 Month", projects: "3+", status: "OPEN", icon: <Layout />, color: "indigo" },
    { id: "backend-development", title: "Backend Development", desc: "Deep dive into Node.js, Express, and Database architecture for scalable systems.", duration: "1 Month", projects: "3+", status: "OPEN", icon: <Database />, color: "slate" },
    { id: "fullstack-development", title: "Full Stack Development", desc: "The complete package: Manage both client-side and server-side engineering.", duration: "2 Months", projects: "5+", status: "OPEN", icon: <Code />, color: "blue" },
    { id: "data-science", title: "Data Science", desc: "Analyze complex datasets, build visualizations, and derive actionable insights.", duration: "1 Month", projects: "3+", status: "OPEN", icon: <BarChart />, color: "emerald" },
    { id: "ai-ml", title: "AI / Machine Learning", desc: "Implement neural networks and predictive models using industry-standard libraries.", duration: "1 Month", projects: "2+", status: "OPEN", icon: <Brain />, color: "purple" },
    { id: "web-development", title: "Basic Web Development", desc: "Perfect for beginners: Learn HTML5, CSS3, and JavaScript fundamentals.", duration: "1 Month", projects: "4+", status: "OPEN", icon: <Globe />, color: "cyan" },
    { id: "java-development", title: "Java Development", desc: "Master OOPs concepts, Spring Boot, and enterprise-level application building.", duration: "1 Month", projects: "3+", status: "OPEN", icon: <Coffee />, color: "orange" },
  ];

  const nonTechInternships = [
    { id: "digital-marketing", title: "Digital Marketing", desc: "Master SEO, social media strategy, and campaign management through practical ads.", duration: "1 Month", projects: "4+", status: "COMING SOON", icon: <Globe2 />, color: "pink" },
    { id: "hr-internship", title: "HR Internship", desc: "Learn talent acquisition, employee engagement, and corporate HR operations.", duration: "1 Month", projects: "2+", status: "COMING SOON", icon: <Users />, color: "amber" },
    { id: "graphic-design", title: "Graphic Design", desc: "Create high-impact visual identities using Photoshop, Illustrator, and Canva.", duration: "1 Month", projects: "5+", status: "COMING SOON", icon: <Palette />, color: "rose" },
    { id: "ui-ux-design", title: "UI/UX Design", desc: "Design user-centric interfaces and wireframes using Figma and user psychology.", duration: "1 Month", projects: "3+", status: "COMING SOON", icon: <PenTool />, color: "fuchsia" },
  ];

  return (
    <div className="bg-[#fcfdfe] text-slate-900 pb-20">
      <section className="relative pt-48 pb-20 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Explore Our <span className="text-blue-500">Internship</span> Programs
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Choose from a wide range of technical and non-technical internships designed to help you build real skills and industry-ready projects.
          </motion.p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Tech Internships</h2>
            <div className="h-px flex-1 bg-slate-100"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techInternships.map((job, i) => (
              /* 2. Passing navigate down as a prop */
              <InternshipCard key={i} {...job} navigate={navigate} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Non-Tech Internships</h2>
            <div className="h-px flex-1 bg-slate-100"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonTechInternships.map((job, i) => (
              <InternshipCard key={i} {...job} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Qskill?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Flexible Learning", desc: "Study anytime with a self-paced model that fits your schedule.", icon: <Clock className="text-blue-600" /> },
              { title: "Project Experience", desc: "Work on real-world projects designed for practical industry skills.", icon: <Briefcase className="text-indigo-600" /> },
              { title: "Career Support", desc: "Verified certificates plus resume guidance and interview prep.", icon: <Award className="text-emerald-600" /> },
              { title: "Placement Help", desc: "Top performers get interview opportunities with our partners.", icon: <Users className="text-purple-600" /> },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">{item.icon}</div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24">
          {['Real Projects', 'Mentor Guidance', 'Portfolio Building', 'Industry Skills', 'Certification'].map((benefit, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              <span className="font-bold text-slate-700 tracking-tight uppercase text-xs">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
         <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-blue-700 to-indigo-900 p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 text-white">
               <h2 className="text-4xl lg:text-5xl font-bold mb-6">Start Building Your Career Today</h2>
               <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">Join 1000+ students already learning and building with Qskill.</p>
               <Button variant="outline" className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-8 rounded-full text-xl font-bold transition-transform hover:scale-105" onClick={() => window.scrollTo({top: 470, behavior: 'smooth'})}>
                  Explore Programs
               </Button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
         </div>
      </section>
    </div>
  );
};

// --- HELPER COMPONENT: INTERNSHIP CARD ---
const InternshipCard = ({ id, title, desc, duration, projects, icon, color, status, navigate }) => {
  const colorMap = {
    blue: "from-blue-500/20 to-cyan-500/20 text-blue-600 border-blue-100",
    indigo: "from-indigo-500/20 to-purple-500/20 text-indigo-600 border-indigo-100",
    emerald: "from-emerald-500/20 to-teal-500/20 text-emerald-600 border-emerald-100",
    purple: "from-purple-500/20 to-fuchsia-500/20 text-purple-600 border-purple-100",
    cyan: "from-cyan-500/20 to-blue-400/20 text-cyan-600 border-cyan-100",
    orange: "from-orange-500/20 to-amber-500/20 text-orange-600 border-orange-100",
    pink: "from-pink-500/20 to-rose-500/20 text-pink-600 border-pink-100",
    amber: "from-amber-500/20 to-yellow-500/20 text-amber-600 border-amber-100",
    rose: "from-rose-500/20 to-pink-500/20 text-rose-600 border-rose-100",
    fuchsia: "from-fuchsia-500/20 to-purple-500/20 text-fuchsia-600 border-fuchsia-100",
    slate: "from-slate-500/20 to-slate-700/20 text-slate-700 border-slate-200",
  };

  const theme = colorMap[color] || colorMap.blue;

  return (
    <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="relative group h-full">
      <div className={`absolute -inset-2 bg-gradient-to-r ${theme.split(' ').slice(0,2).join(' ')} rounded-[3rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
      <div className="relative h-full bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(8,112,184,0.1)] transition-all duration-500 flex flex-col">
        <div className="flex justify-between items-start mb-8">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${theme.split(' ').slice(0,2).join(' ')} flex items-center justify-center shadow-inner`}>
            <div className="text-slate-800">{React.cloneElement(icon, { size: 32, strokeWidth: 1.5 })}</div>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest border border-slate-200/50">
            {status}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{desc}</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-50/50 rounded-2xl p-3 border border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Duration</p>
            <p className="text-sm font-bold text-slate-800">{duration}</p>
          </div>
          <div className="bg-slate-50/50 rounded-2xl p-3 border border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Projects</p>
            <p className="text-sm font-bold text-slate-800">{projects}</p>
          </div>
        </div>

        {/* 3. The onClick now uses the 'navigate' and 'id' passed via props */}
        <button 
          className="w-full relative overflow-hidden group/btn py-4 rounded-2xl bg-slate-900 text-white font-bold transition-all duration-300 active:scale-95 shadow-lg hover:shadow-blue-200" 
          onClick={() => navigate(`/internship/${id}`)}
          disabled={status.includes("COMING")}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10 flex items-center justify-center gap-2">
            {status.includes("COMING") ? "Closed" : "Apply Now"} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipPage;