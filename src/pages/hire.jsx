import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, CheckCircle2, UserCheck, 
  Briefcase, Search, MessageSquare, Handshake,
  ArrowRight, Sparkles, TrendingUp, ShieldCheck
} from 'lucide-react';
import { Button } from "../components/ui/button";

const HireFromUs = () => {
//   const brandPurple = "#6D28D9";

  const benefits = [
    { title: "Pre-trained Talent", desc: "Industry-ready candidates equipped with the latest tech stacks.", icon: <UserCheck /> },
    { title: "Verified Experience", desc: "Practical project experience verified through rigorous evaluation.", icon: <ShieldCheck /> },
    { title: "Task-Based Assessment", desc: "Candidates are assessed on real-world coding and logic tasks.", icon: <CheckCircle2 /> },
    { title: "Cost Efficient", desc: "Significantly reduce your internal hiring and initial training costs.", icon: <TrendingUp /> },
    { title: "Emerging Talent", desc: "Access a fresh pool of passionate, highly motivated young professionals.", icon: <Sparkles /> },
    { title: "Full Support", desc: "We assist in screening and shortlisting to save your team's time.", icon: <Building2 /> },
  ];

  const roles = [
    "Front-End Developer", "Python Developer", "Data Analyst", 
    "UI/UX Intern", "Web Developer", "Technical Support", "Digital Marketing Intern"
  ];

  return (
    <div className="bg-[#fcfdfe] min-h-screen pb-20">
      
      {/* --- CORPORATE HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-6 bg-slate-900 overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] -translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Talent Acquisition Partnership
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
              Hire Skilled, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Industry-Ready
              </span> Talent.
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed max-w-xl">
              Equipped with job-ready skills and hands-on project experience, our learners are prepared to contribute to your team from day one.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-7 rounded-full text-lg font-bold shadow-xl shadow-blue-900/20 group">
                Hire Talent Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block relative"
          >
             <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-[3rem] border border-slate-700 shadow-2xl relative">
                <div className="grid grid-cols-2 gap-4">
                  {roles.slice(0, 4).map((role, i) => (
                    <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <Briefcase size={20} />
                      </div>
                      <span className="text-sm font-bold text-slate-200">{role}</span>
                    </div>
                  ))}
                </div>
                {/* Floating "Hired" Notification */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-900 text-xs font-bold">12+ Placed Today</span>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHY HIRE FROM US: BENTO GRID --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Hire From Qskill?</h2>
          <p className="text-slate-500 text-lg">We bridge the gap between education and employment.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 text-blue-600 flex items-center justify-center mb-6">
                {React.cloneElement(benefit.icon, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- HIRING PROCESS --- */}
      <section className="py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Seamless Hiring Process</h2>
              <p className="text-slate-500 text-lg mb-8">Four simple steps to connect with your next high-performing employee.</p>
              <Button variant="outline" className="rounded-full border-slate-200 px-8 py-6 font-bold">Download Talent Brochure</Button>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
              {[
                { title: "Share Requirements", desc: "Tell us the roles and skills you need.", icon: <MessageSquare /> },
                { title: "Shortlisting", desc: "We filter the top 5% of candidates for you.", icon: <Search /> },
                { title: "Interviews", desc: "Conduct assessments or direct interviews.", icon: <UserCheck /> },
                { title: "Successful Hire", desc: "Onboard talent ready to hit the ground running.", icon: <Handshake /> },
              ].map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- ROLES TAILORED FOR YOU --- */}
      <section className="py-32 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Roles You Can Hire For</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {roles.map((role, i) => (
            <span key={i} className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-500 hover:text-blue-600 transition-all cursor-default">
              {role}
            </span>
          ))}
        </div>
      </section>

      {/* --- PARTNER CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Connect With Top Talent</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're a startup, agency, or growing business, we help you connect with skilled young talent ready to work.
            </p>
            <Button className="bg-blue-600 text-white px-12 py-8 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-all">
              Request Candidates
            </Button>
          </div>
          {/* Subtle Abstract Background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full opacity-50" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireFromUs;