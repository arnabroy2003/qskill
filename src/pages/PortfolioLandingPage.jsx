import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  User,
  Wrench,
  FolderGit2,
  Award,
  Briefcase,
  Trophy,
  GraduationCap,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Lock,
  Code2,
  Sparkle
} from 'lucide-react';
import { Button } from '../components/ui/button';

export default function PortfolioLandingPage() {
  const [copied, setCopied] = useState(false);
  const sampleUrl = 'qskill.in/portfolio/arnabroy2003/view';

  const handleCopyUrl = () => {
    navigator.clipboard?.writeText(`https://${sampleUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  // Section 2 feature card dataset
  const valueProps = [
    {
      title: 'Profile',
      desc: 'Show who you are, what you do, and your professional positioning in one glance.',
      icon: <User className="w-6 h-6 text-purple-600" />,
      color: 'from-purple-500/10 to-indigo-500/10'
    },
    {
      title: 'Skills',
      desc: 'Highlight your technical proficiencies, frameworks, tools, and core competencies.',
      icon: <Wrench className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      title: 'Projects',
      desc: 'Showcase real-world apps with live URLs, GitHub repositories, and tech stacks.',
      icon: <FolderGit2 className="w-6 h-6 text-emerald-600" />,
      color: 'from-emerald-500/10 to-teal-500/10'
    },
    {
      title: 'Certifications',
      desc: 'Display verified credentials and program achievements that validate your domain knowledge.',
      icon: <Award className="w-6 h-6 text-amber-600" />,
      color: 'from-amber-500/10 to-orange-500/10'
    },
    {
      title: 'Experience',
      desc: 'Detail internships, part-time technical work, freelance deliverables, and leadership roles.',
      icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
      color: 'from-indigo-500/10 to-violet-500/10'
    },
    {
      title: 'Achievements',
      desc: 'Highlight hackathon placements, coding accolades, scholarship awards, and publications.',
      icon: <Trophy className="w-6 h-6 text-rose-600" />,
      color: 'from-rose-500/10 to-pink-500/10'
    },
    {
      title: 'Education',
      desc: 'Provide an organized summary of your academic background, degrees, and institutions.',
      icon: <GraduationCap className="w-6 h-6 text-cyan-600" />,
      color: 'from-cyan-500/10 to-sky-500/10'
    },
    {
      title: 'Resume',
      desc: 'Keep your up-to-date downloadable resume instantly accessible alongside your live proof of work.',
      icon: <FileText className="w-6 h-6 text-fuchsia-600" />,
      color: 'from-fuchsia-500/10 to-purple-500/10'
    }
  ];

  // Section 5 steps
  const steps = [
    {
      num: '01',
      title: 'Create',
      desc: 'Create or sign in to your QSkill account to activate your portfolio workspace.'
    },
    {
      num: '02',
      title: 'Build',
      desc: 'Add your skills, projects, certificates, education, experience, and achievements through an intuitive editor.'
    },
    {
      num: '03',
      title: 'Share',
      desc: 'Receive your custom public portfolio URL and share your story with recruiters across platforms.'
    }
  ];

  return (
    <main className="bg-[#fcfdfe] text-slate-900 overflow-x-hidden selection:bg-purple-100 selection:text-purple-900">

      {/* =========================================================
          SECTION 1 — HERO
          ========================================================= */}
      <section className="relative pt-24 pb-28 md:pt-32 md:pb-36 px-6 overflow-hidden">
        {/* Ambient background glows matching QSkill standard */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-tr from-purple-100/60 via-blue-50/40 to-transparent blur-[140px] -z-10 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 lg:gap-8 items-center">
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-[#6D28D9] text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#6D28D9] animate-pulse" />
              <span>QSkill Portfolio</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Your Skills Deserve{' '}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-indigo-600 to-blue-600">
                More Than a Resume.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 font-normal">
              Build a professional portfolio, showcase what you've learned and built, and share it with recruiters through one simple link.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/portfolio/create" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-bold bg-[#6D28D9] hover:bg-[#5B21B6] text-white shadow-xl shadow-purple-200/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Create My Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link to="/portfolio/example/view" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto rounded-full px-7 py-6 text-base font-semibold border-slate-200 bg-white hover:bg-slate-50 text-slate-700 shadow-sm transition-all"
                >
                  View Example
                </Button>
              </Link>
            </div>

            {/* Social Proof / Trust Footnote */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Custom Shareable Link</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Coding Required</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Recruiter-Optimized</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Column: Authentic Portfolio Mockup with Floaties */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Backing Ambient Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/40 to-blue-200/40 rounded-[3rem] filter blur-2xl -z-10 transform scale-95" />

            {/* Central Mockup Card */}
            <div className="w-full max-w-md bg-white/90 backdrop-blur-xl border border-slate-100 rounded-[2.5rem] p-7 md:p-8 shadow-[0_25px_60px_rgba(109,40,217,0.08)] relative z-10 transition-all duration-500 hover:shadow-[0_30px_70px_rgba(109,40,217,0.14)]">

              {/* Window Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-mono">
                  <Lock className="w-2.5 h-2.5 text-emerald-600" />
                  <span>qskill.in/portfolio/arnabroy2003</span>
                </div>
              </div>

              {/* Profile Top Bar */}
              <div className="flex items-start gap-4 mb-5">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop"
                    alt="Arnab Roy"
                    className="w-16 h-16 rounded-2xl object-cover ring-2 ring-purple-100 shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">ARNAB ROY</h3>
                    <ShieldCheck className="w-4 h-4 text-[#6D28D9]" />
                  </div>
                  <p className="text-xs font-semibold text-[#6D28D9] uppercase tracking-wider mt-0.5">
                    Python Developer
                  </p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    Passionate developer building real-world automation & scalable APIs.
                  </p>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Python', 'Django', 'FastAPI', 'SQL', 'Docker'].map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 text-xs font-medium tracking-tight"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Micro Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 py-4 px-3 rounded-2xl bg-slate-50/70 border border-slate-100 text-center mb-6">
                <div>
                  <p className="text-lg font-bold text-slate-900">6</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Projects</p>
                </div>
                <div className="border-x border-slate-200/60">
                  <p className="text-lg font-bold text-slate-900">4</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Certificates</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">1</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Internship</p>
                </div>
              </div>

              {/* Verified QSkill Profile Pill + Action */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-600 px-1">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified QSkill Profile
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Updated 2d ago</span>
                </div>

                <Link to="/portfolio/example/view" className="block w-full">
                  <button className="w-full py-3 rounded-xl bg-slate-900 hover:bg-[#6D28D9] text-white text-xs font-bold transition-all duration-200 shadow-md flex items-center justify-center gap-1.5">
                    <span>View Portfolio</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Floating Element 1: Open to Opportunities */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-3 md:-left-8 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 z-20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800">Open to Opportunities</span>
            </motion.div>

            {/* Floating Element 2: Verified Skill */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-5 -right-3 md:-right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center text-[#6D28D9]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Verified Skill</p>
                <p className="text-[10px] text-slate-400 font-medium">Backend & APIs</p>
              </div>
            </motion.div>

            {/* Floating Element 3: Mini Stat Indicator */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 -right-4 md:-right-10 -translate-y-1/2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-100 hidden sm:flex items-center gap-2 z-20"
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold text-slate-800">4 Certificates</span>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* =========================================================
          SECTION 2 — VALUE PROPOSITION
          ========================================================= */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#6D28D9] font-bold tracking-[0.2em] uppercase text-xs block mb-3"
          >
            All-In-One Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5"
          >
            Everything About You.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-indigo-600">
              In One Place.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            Give recruiters a complete picture of your skills, work, achievements, and career journey.
          </motion.p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-[2rem] p-7 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-purple-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center p-3.5 mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#6D28D9] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-50 flex items-center text-xs font-semibold text-slate-400 group-hover:text-[#6D28D9] transition-colors">
                <span>Included in Portfolio</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* =========================================================
          SECTION 3 — ONE LINK (SHAREABLE URL)
          ========================================================= */}
      <section className="py-28 bg-gradient-to-b from-slate-50/70 to-white border-y border-slate-100/80 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#6D28D9] font-bold tracking-[0.2em] uppercase text-xs block mb-3"
          >
            Universal Shareability
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            One Link. Your Entire Career Story.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg max-w-2xl mx-auto mb-12"
          >
            Share your professional profile anywhere and let recruiters discover what you can do.
          </motion.p>

          {/* Large Browser / Address Bar Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-4 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(109,40,217,0.07)] border border-slate-200/80 max-w-3xl mx-auto mb-10 text-left"
          >
            {/* Top Mock Window Bar */}
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100">
              <span className="w-3 h-3 rounded-full bg-slate-300" />
              <span className="w-3 h-3 rounded-full bg-slate-300" />
              <span className="w-3 h-3 rounded-full bg-slate-300" />
              <span className="ml-3 text-xs font-medium text-slate-400">Public Portfolio Address</span>
            </div>

            {/* Address Bar Interactive Element */}
            <div className="flex items-center justify-between gap-3 bg-slate-50 border border-slate-200/80 rounded-2xl px-4 md:px-6 py-4 transition-all focus-within:border-purple-400 focus-within:bg-white">
              <div className="flex items-center gap-3 overflow-hidden">
                <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-400 text-xs sm:text-sm font-mono shrink-0 hidden sm:inline">https://</span>
                <span className="text-slate-900 font-mono text-xs sm:text-base font-semibold truncate">
                  {sampleUrl}
                </span>
              </div>

              {/* Copy Trigger */}
              <button
                onClick={handleCopyUrl}
                aria-label="Copy Portfolio Link"
                className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#6D28D9] hover:border-purple-200 text-xs font-semibold shadow-sm active:scale-95 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Platform Distribution Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 max-w-xl mx-auto">
            {['Resume', 'LinkedIn', 'Email', 'WhatsApp', 'Job Applications'].map((platform, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white border border-slate-200/80 text-slate-700 text-xs font-semibold shadow-sm hover:border-purple-200 hover:text-[#6D28D9] transition-colors"
              >
                ✦ {platform}
              </span>
            ))}
          </div>

          {/* Core Message Callout */}
          <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.25em]">
            Create once. Share everywhere.
          </p>
        </div>
      </section>


      {/* =========================================================
          SECTION 4 — RECRUITER PREVIEW (SPLIT LAYOUT)
          ========================================================= */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">

          {/* Left Split Copy */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            <span className="text-[#6D28D9] font-bold tracking-[0.2em] uppercase text-xs block">
              Recruiter-Ready Format
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Don't Just Tell Recruiters What You Know.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-blue-600">
                Show Them.
              </span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-normal">
              Your QSkill Portfolio gives recruiters a quick, professional view of your skills, projects, certifications, and experience without clunky attachments or fragmented files.
            </p>

            <div className="pt-2">
              <Link to="/portfolio/create">
                <Button className="rounded-full px-8 py-6 text-base font-bold bg-[#6D28D9] hover:bg-[#5B21B6] text-white shadow-lg shadow-purple-100 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mx-auto lg:mx-0">
                  <span>Create My Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-center lg:justify-start gap-8 text-xs text-slate-400">
              <div>
                <p className="font-bold text-slate-800 text-base">Under 10s</p>
                <p>Time to scan essentials</p>
              </div>
              <div className="border-l border-slate-200 pl-8">
                <p className="font-bold text-slate-800 text-base">100%</p>
                <p>Mobile responsive</p>
              </div>
            </div>
          </motion.div>

          {/* Right Split Candidate Snapshot */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="w-full max-w-md bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative">
              {/* Profile Card Header */}
              <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100">
                <div className="relative mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=220&auto=format&fit=crop"
                    alt="Arnab Roy"
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-purple-50 shadow-sm"
                  />
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight">ARNAB ROY</h3>
                <p className="text-xs font-semibold text-[#6D28D9] uppercase tracking-wider mt-0.5">
                  Python Developer
                </p>

                {/* Open to Opportunities Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mt-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Open to Opportunities</span>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                  {['Python', 'Django', 'FastAPI', 'SQL'].map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recruiter Glance Data Table */}
              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-slate-50">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Projects</span>
                  <span className="text-sm font-bold text-slate-800">6 Production Apps</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-50">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Certifications</span>
                  <span className="text-sm font-bold text-slate-800">4 Verified Credentials</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Experience</span>
                  <span className="text-sm font-bold text-slate-800">1 Internship Completed</span>
                </div>
              </div>

              {/* Preview Button */}
              <Link to="/portfolio/example/view" className="block w-full">
                <Button className="w-full rounded-2xl py-6 bg-slate-900 hover:bg-[#6D28D9] text-white font-bold text-sm shadow-md transition-all">
                  View Full Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>


      {/* =========================================================
          SECTION 5 — HOW IT WORKS
          ========================================================= */}
      <section className="py-28 bg-slate-50/50 border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#6D28D9] font-bold tracking-[0.2em] uppercase text-xs block mb-3">
              Simple Workflow
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Build Your Portfolio in 3 Simple Steps
            </h2>
            <p className="text-slate-500 text-lg">
              Go from zero to a live, polished career showcase in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Desktop Visual Connector Line */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] bg-slate-200 -z-0" />

            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm relative z-10 flex flex-col items-center text-center group hover:shadow-lg hover:border-purple-100 transition-all duration-300"
              >
                {/* Step Badge */}
                <div className="w-16 h-16 rounded-2xl bg-purple-50 text-[#6D28D9] border border-purple-100 font-extrabold text-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#6D28D9] group-hover:text-white transition-all duration-300 shadow-sm">
                  {step.num}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Visual Flow Indicator */}
          <div className="mt-14 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            <span>Create</span>
            <span className="text-purple-600">→</span>
            <span>Build</span>
            <span className="text-purple-600">→</span>
            <span>Share</span>
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 6 — QSKILL ADVANTAGE
          ========================================================= */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#6D28D9] font-bold tracking-[0.2em] uppercase text-xs block mb-3">
            Ecosystem Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            More Than a Portfolio.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-indigo-600">
              Your QSkill Career Profile.
            </span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Unlike static template websites, your QSkill Portfolio directly reflects your active learning, validated coursework, verified certificates, and project milestones.
          </p>
        </div>

        {/* Visual Architecture Flowchart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-slate-900 text-white rounded-[3rem] p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Ambient Glow in dark block */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">

            {/* Stage 1: Central Identity */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/15 text-purple-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkle className="w-3.5 h-3.5" />
              <span>Your QSkill Profile</span>
            </div>

            {/* Stage 2: 3 Input Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <Code2 className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <h4 className="font-bold text-sm tracking-wide">Skills</h4>
                <p className="text-[11px] text-slate-400 mt-1">Acquired & Verified</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <FolderGit2 className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <h4 className="font-bold text-sm tracking-wide">Projects</h4>
                <p className="text-[11px] text-slate-400 mt-1">Built Hands-On</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <Award className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <h4 className="font-bold text-sm tracking-wide">Certificates</h4>
                <p className="text-[11px] text-slate-400 mt-1">Industry Credentialed</p>
              </div>
            </div>

            {/* Vertical Flow Arrow */}
            <div className="flex flex-col items-center gap-1 my-2 text-purple-400">
              <div className="w-0.5 h-6 bg-gradient-to-b from-purple-400 to-indigo-400" />
              <ArrowRight className="w-4 h-4 rotate-90" />
            </div>

            {/* Stage 3: Unified Portfolio Hub */}
            <div className="w-full max-w-md bg-gradient-to-r from-purple-600 to-indigo-600 p-[1px] rounded-2xl my-4 shadow-lg shadow-purple-900/40">
              <div className="bg-slate-900/90 rounded-[0.95rem] py-4 px-6 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-300">Unified Output</p>
                <h3 className="text-xl font-bold tracking-tight text-white mt-1">
                  QSkill Public Portfolio
                </h3>
              </div>
            </div>

            {/* Vertical Flow Arrow */}
            <div className="flex flex-col items-center gap-1 my-2 text-indigo-400">
              <div className="w-0.5 h-6 bg-gradient-to-b from-indigo-400 to-blue-400" />
              <ArrowRight className="w-4 h-4 rotate-90" />
            </div>

            {/* Stage 4: Destination */}
            <div className="bg-white/5 border border-white/10 rounded-2xl py-4 px-8 backdrop-blur-sm mt-2 flex items-center gap-3">
              <Building2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-bold text-slate-200 tracking-wide">
                Hiring Partners & Recruiters
              </span>
            </div>

          </div>
        </motion.div>
      </section>


      {/* =========================================================
          SECTION 7 — FINAL CTA
          ========================================================= */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-[#6D28D9] via-indigo-700 to-slate-900 p-10 sm:p-14 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Ambient Decorative Circles */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />

          <div className="relative z-10 text-white max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
              Ready to Put Your Skills on Display?
            </h2>
            <p className="text-purple-100 text-base sm:text-lg mb-10 leading-relaxed font-normal">
              Create your professional portfolio with QSkill and make your work easier to discover by top tech companies and recruiters.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/portfolio/create" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white text-[#6D28D9] hover:bg-purple-50 px-9 py-7 rounded-full text-base font-bold shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                  <span>Create My Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Login Fallback Link */}
            <p className="mt-8 text-xs sm:text-sm text-purple-200">
              Already have a QSkill account?{' '}
              <Link to="/login" className="text-white font-bold underline underline-offset-4 hover:text-purple-100 transition-colors">
                Log in
              </Link>
            </p>
          </div>
        </motion.div>
      </section>

    </main>
  );
}