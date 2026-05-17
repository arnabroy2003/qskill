import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight
} from 'lucide-react';

const Requestcandidate = () => {
return(
    <section className="py-32 px-6 bg-[#f8fafc] relative overflow-hidden">
  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-100/40 blur-[140px] rounded-full pointer-events-none" />

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-6">
        Hiring Partnership
      </span>

      <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
        Request <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Industry-Ready Talent.
        </span>
      </h2>

      <p className="mt-8 text-lg leading-relaxed text-slate-500 max-w-xl">
        Tell us your hiring requirements and our team will connect you with pre-trained candidates ready to contribute from day one.
      </p>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-6 mt-12">
        {[
          ["500+", "Active Candidates"],
          ["Top Skills", "React • Python • UI/UX"],
          ["24 Hours", "Average Response"],
          ["Verified", "Project-Based Evaluation"],
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm"
          >
            <h4 className="text-2xl font-extrabold text-slate-900">
              {item[0]}
            </h4>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed">
              {item[1]}
            </p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* RIGHT FORM */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Glass Card */}
      <div className="relative bg-white/70 backdrop-blur-2xl border border-white rounded-[3rem] p-8 md:p-12 shadow-[0_20px_80px_rgba(59,130,246,0.12)] overflow-hidden">

        {/* Decorative Gradient */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />

        <div className="mb-10">
          <h3 className="text-3xl font-extrabold text-slate-900">
            Request Candidates
          </h3>
          <p className="text-slate-500 mt-3">
            Fill in your hiring requirements and we’ll reach out shortly.
          </p>
        </div>

        <form className="space-y-6">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-bold text-slate-700 ml-1">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Google Inc."
                className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700 ml-1">
                HR / Recruiter Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-bold text-slate-700 ml-1">
                Work Email
              </label>
              <input
                type="email"
                placeholder="hr@company.com"
                className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700 ml-1">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* ROLE */}
          <div>
            <label className="text-sm font-bold text-slate-700 ml-1">
              Hiring Role
            </label>

            <select
              className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option>Select Role</option>
              <option>Frontend Developer</option>
              <option>Python Developer</option>
              <option>UI/UX Designer</option>
              <option>Data Analyst</option>
              <option>Digital Marketing</option>
            </select>
          </div>

          {/* EXPERIENCE + TYPE */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-bold text-slate-700 ml-1">
                Experience Level
              </label>

              <select
                className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option>Internship</option>
                <option>Fresher</option>
                <option>0-1 Years</option>
                <option>1-3 Years</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700 ml-1">
                Hiring Type
              </label>

              <select
                className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option>Remote</option>
                <option>Hybrid</option>
                <option>Onsite</option>
              </select>
            </div>
          </div>

          {/* REQUIREMENTS */}
          <div>
            <label className="text-sm font-bold text-slate-700 ml-1">
              Candidate Requirements
            </label>

            <textarea
              placeholder="Mention required skills, technologies, expected responsibilities..."
              className="mt-2 w-full min-h-[160px] rounded-[2rem] border border-slate-200 bg-white/80 p-6 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="group relative w-full h-16 overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-lg font-bold text-white shadow-[0_20px_50px_rgba(59,130,246,0.25)] transition-all hover:scale-[1.01]"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Request Candidates
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>

            <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
          </button>

          {/* FOOTNOTE */}
          <p className="text-center text-xs text-slate-400 leading-relaxed">
            By submitting this form, our hiring team may contact you regarding suitable candidates.
          </p>
        </form>
      </div>
    </motion.div>
  </div>
</section>
)
}

export default Requestcandidate
