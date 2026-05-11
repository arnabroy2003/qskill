import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { useState, useEffect } from "react";
import axios from "axios";
import ContactPage from "./pages/contact"
import AboutPage from "./pages/about"
import HireFromUs from "./pages/hire"
import TestimonialsPage from "./pages/testimonial"
import InternshipPage from "./pages/internship"
import ProgramDetailPage from "./pages/programdetails"
import { ChevronRight, Menu, Trophy, Gift, Users2, Rocket, X, Banknote, Globe2, PlaneLanding, GraduationCap, User, ArrowRight, Star, CheckCircle2, ShieldCheck, UserPlus, Users, Laptop, Send, Award, Search, Loader2, ExternalLink, Linkedin, Youtube, Mail, MapPin, ChevronUp } from "lucide-react";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Internships', path: '/internship' },
    { name: 'Verify', path: '/verify' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
        scrolled 
        ? "bg-white/80 backdrop-blur-md border-slate-200 py-3 shadow-sm" 
        : "bg-white border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
          <img
            src="https://res.cloudinary.com/dvqqjadcf/image/upload/v1771142458/qskill_logo_trans_rv9jn5.png"
            alt="Qskill Logo"
            className="h-8 md:h-9 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center" onMouseLeave={() => setHoveredLink(null)}>
          <div className="flex items-center mr-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onMouseEnter={() => setHoveredLink(link.name)}
                className={`relative px-4 py-2 text-[14px] font-medium transition-colors duration-300 ${
                  location.pathname === link.path ? "text-brandPurple" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.name}
                
                {/* Magnetic Hover/Active Underline */}
                <AnimatePresence>
                  {(hoveredLink === link.name || location.pathname === link.path) && (
                    <motion.div 
                      layoutId="nav-pill"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full ${
                        location.pathname === link.path ? "bg-brandPurple" : "bg-slate-300"
                      }`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </div>
          
          <Button 
          onClick={() => window.location.href = "https://student.qskill.in/"}
            className="h-9 px-5 rounded-full bg-brandPurple hover:bg-[#5B21B6] text-white text-xs font-bold transition-all hover:shadow-lg hover:shadow-purple-200 active:scale-95 flex items-center gap-2"
          >
            <User size={14} strokeWidth={3} />
            Login
          </Button>
        </nav>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden p-1 text-slate-700" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAV MENU */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold ${
                    location.pathname === link.path ? "bg-purple-50 text-brandPurple" : "text-slate-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 py-2">
                <Button onClick={() => window.location.href = "https://student.qskill.in/"} className="w-full h-10 bg-brandPurple text-white rounded-xl text-sm font-bold">
                  Portal Login
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f172a] text-slate-400 pt-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-900/20">
                Q
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">Qskill</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering the next generation of tech leaders through high-impact live training and industry-recognized internships.
            </p>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/company/qskill/" 
                target="_blank"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://www.youtube.com/@QSkill-tutorial" 
                target="_blank"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
              >
                <Youtube size={18} />
              </motion.a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
  <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
    Navigation
  </h4>

  <ul className="space-y-4 text-sm">
    {[
      { name: "Internships", path: "/internship" },
      { name: "Verify Certificate", path: "/verify" },
      { name: "About Us", path: "/about" },
      { name: "Contact Us", path: "/contact" }
    ].map((item) => (
      <li key={item.name}>
        <Link
          to={item.path}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:text-blue-400 transition-colors flex items-center group"
        >
          <span className="w-0 group-hover:w-2 h-px bg-blue-400 mr-0 group-hover:mr-2 transition-all"></span>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Reach Out</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span>Ghansoli, Navi Mumbai, <br />Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <a href="mailto:career@squarcell.com" className="hover:text-white transition-colors">career@squarcell.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Parent Company Card */}
          <div className="relative">
            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-3xl backdrop-blur-sm">
              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-3">Parent Company</p>
              <h5 className="text-white font-bold text-lg mb-2">SR India</h5>
              <p className="text-xs leading-relaxed mb-4 text-slate-400">
                Qskill is a proud initiative by SR India, dedicated to excellence in professional development.
              </p>
              <a 
                href="https://www.srindia.co/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-blue-400 transition-colors group"
              >
                Visit SR India <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-slate-500">
            © {new Date().getFullYear()} Qskill Inc. All rights reserved. 
            <span className="mx-2">|</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-blue-400 transition-colors"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-blue-400 transition-colors">
              <ChevronUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

function Home() {
   const techs = [
  { name: "React.js", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
  { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },

  // Backend Frameworks
  { name: "Django", logo: "https://cdn.worldvectorlogo.com/logos/django.svg" },
  { name: "Flask", logo: "https://cdn.worldvectorlogo.com/logos/flask.svg" },
  { name: "FastAPI", logo: "https://cdn.worldvectorlogo.com/logos/fastapi.svg" },

  // Databases
  { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
  { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },

  // DevOps & Tools
  { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
  { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
  { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },

  // Cloud
  { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg" },
  { name: "Vercel", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
];


  const features = [
    ["Live Training", "Interactive sessions with real-time doubt clearing.", "from-blue-500 to-indigo-600"],
    ["Industry Curriculum", "Stay ahead with tools used by top tech giants.", "from-emerald-500 to-teal-600"],
    ["Hands-on Projects", "Build portfolio-ready apps from scratch.", "from-pink-500 to-rose-600"],
    ["Expert Mentorship", "1-on-1 guidance from industry veterans.", "from-purple-500 to-fuchsia-600"],
    ["Training + Internship", "A dual-pathway to professional experience.", "from-amber-500 to-orange-600"],
    ["Career Support", "Resume building and mock interview prep.", "from-cyan-500 to-sky-600"],
  ];

const testimonials = [
{
name: "Iknoor vran",
role: "Front-End Developer",
text: "Yeah all over internship experience is good enough to gain a handsome on experience on react based tasks, but I'm more eager to work on these tasks and I'm open to work in more internships and paid projects.",
img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464498/irngg2ryhvxn7iobmhzt.jpg"
},

{
name: "Vikash Ramdarash Chaurasiya",
role: "Python Developer",
text: "Completed my Python Development Internship at Qskill, where I built Python-based data processing pipelines and created visualization dashboards to extract actionable insights from datasets. Developed a Django-based chatbot module integrated with backend logic to automate query handling and improve user interaction.",
img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464500/d9ixffupitk4f5yqos9o.jpg"
},

{
name: "Bhavana S",
role: "Python Developer",
text: "Being my first internship, I had a great experience and was able to learn handling various Python libraries.",
img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464510/y8ga9ixetr4woilnblvm.jpg"
},

{
name: "Nisha Dnyaneshwar Patil",
role: "Front-End Developer",
text: "My internship experience was extremely valuable and career-shaping. It gave me exposure to real-time projects and helped me apply my academic knowledge in practical scenarios.",
img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464511/snsyksktykwmndhyiydi.jpg"
},

{
name: "Santosh Hinduja",
role: "Basic Web Developer",
text: "Your tasks helped me understand how to create industry level projects.",
img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464544/i0uyolo6cgsyoztwwdcs.jpg"
},

{
name: "Kanishka Chaudhary",
role: "Basic Web Developer",
text: "I had a great learning experience during my one-month Basic Web Development internship at Qskill. The mentors were supportive and the hands-on projects helped me understand real-world web development.",
img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773465703/IMG_20260210_082855_-_Kanishka_Chaudhary_us1bzf.jpg"
}
];

const countries = [
  {
    name: "USA",
    flag: "https://flagcdn.com/w80/us.png",
  },
  {
    name: "UK",
    flag: "https://flagcdn.com/w80/gb.png",
  },
  {
    name: "New Zealand",
    flag: "https://flagcdn.com/w80/nz.png",
  },
  {
    name: "Japan",
    flag: "https://flagcdn.com/w80/jp.png",
  },
  {
    name: "Australia",
    flag: "https://flagcdn.com/w80/au.png",
  },
  {
    name: "Ukraine",
    flag: "https://flagcdn.com/w80/ua.png",
  },
  {
    name: "Russia",
    flag: "https://flagcdn.com/w80/ru.png",
  },
];

const perks = [
    { 
      title: "Premium Swag", 
      desc: "Earn exclusive hoodies, bottles, and tech accessories.", 
      icon: <Gift className="text-purple-500" />,
      color: "purple" 
    },
    { 
      title: "Leadership Skills", 
      desc: "Nurture your representational skills and lead your campus.", 
      icon: <Trophy className="text-amber-500" />,
      color: "amber" 
    },
    { 
      title: "Network & Grow", 
      desc: "Connect with like-minded student leaders across India.", 
      icon: <Users2 className="text-blue-500" />,
      color: "blue" 
    }
  ];
 // Added more for better loop

  return (
    <div className="bg-[#fcfdfe] text-slate-900 selection:bg-blue-100 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-brandPurple text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brandPurple"></span>
              </span>
              Next Cohort Starts Soon
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-orange-400">
              Master Skills. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brandPurple to-[#8B5CF6]">
                Launch Careers.
              </span>
            </h1>
            <p className="mt-8 text-lg text-slate-600 max-w-lg leading-relaxed">
              Qskill bridge the gap between academics and industry with live mentorship, 
              real-world engineering, and verified certifications.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/internship">
              <Button className="rounded-full px-8 py-7 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-purple-200 transition-all hover:scale-105">
                Explore Programs <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
              <Button variant="outline" className="rounded-full px-8 py-7 text-lg border-slate-200 hover:bg-slate-50 transition-all">
                Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="https://illustrations.popsy.co/white/studying.svg"
              alt="Learning Banner"
              className="w-full max-w-2xl mx-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* --- WHY JOIN - FEATURE GRID --- */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight">Why Choose Qskill?</h2>
          <p className="text-slate-500 mt-4 text-lg">We don't just teach; we prepare you for the real world.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-none bg-white shadow-sm hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item[2]} mb-6 flex items-center justify-center text-white shadow-lg`}>
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-slate-800">{item[0]}</h3>
                  <p className="text-slate-500 leading-relaxed">{item[1]}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TECH STACK - MARQUEE STYLE --- */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-12">
          Technologies you will master
        </h2>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 px-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {techs.map((tech, i) => (
            <div key={i} className="flex items-center gap-3">
              <img src={tech.logo} alt={tech.name} className="w-8 h-8 object-contain" />
              <span className="font-semibold text-slate-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
<section className="py-32 bg-white relative overflow-hidden">
  {/* Large Background Decorative Text */}
  <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[10rem] md:text-[15rem] font-black text-slate-50 select-none -z-0 tracking-tighter opacity-50">
    STEPS
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="text-center mb-20">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm"
      >
        Execution Roadmap
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mt-4 text-slate-900"
      >
        How the Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Works</span>
      </motion.h2>
    </div>

    <div className="relative">
      {/* Desktop Connecting Line */}
      <div className="hidden lg:block absolute top-[2.75rem] left-0 w-full h-[2px] bg-slate-100 -z-0">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-40"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4">
        {[
          { num: "01", title: "Apply", icon: <UserPlus />, desc: "Fill the application form and choose your internship program.", color: "from-blue-500 to-indigo-500" },
          { num: "02", title: "Join Community", icon: <Users />, desc: "Get access to our student community for updates and guidance.", color: "from-indigo-500 to-purple-500" },
          { num: "03", title: "Learn from Us", icon: <Laptop />, desc: "Follow our curated learning roadmap and build real projects.", color: "from-purple-500 to-pink-500" },
          { num: "04", title: "Submit Projects", icon: <Send />, desc: "Complete tasks and submit your projects for evaluation.", color: "from-pink-500 to-rose-500" },
          { num: "05", title: "Get Certificate", icon: <Award />, desc: "Receive your verified internship certificate after completion.", color: "from-rose-500 to-orange-500" },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative flex flex-col items-center lg:items-start text-center lg:text-left group"
          >
            {/* Icon Bubble */}
            <div className="relative mb-6">
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} p-[1px] shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <div className="w-full h-full rounded-[1.7rem] bg-white flex items-center justify-center text-slate-700 group-hover:bg-transparent group-hover:text-white transition-all duration-300">
                  {React.cloneElement(step.icon, { size: 28 })}
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold border-4 border-white">
                {step.num}
              </div>
            </div>

            {/* Text */}
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
              {step.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed px-4 lg:px-0">
              {step.desc}
            </p>

            {/* Mobile Arrow */}
            {i !== 4 && (
              <div className="lg:hidden my-6 text-slate-200">
                <ArrowRight className="rotate-90 md:rotate-0 w-6 h-6" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

<section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: CONTENT & VALUE PROP */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm"
              >
                Global Pathways
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-slate-900 leading-tight">
                Start in India, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Succeed Abroad.
                </span>
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              Begin your MS journey with select international universities right here in India. Complete your initial semesters locally and transition abroad to finish your degree—**saving up to 40% on total education costs.**
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                <Banknote className="text-blue-600 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Massive Cost Savings</h4>
                  <p className="text-xs text-slate-500 mt-1">Lower tuition fees and living expenses for the first year.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                <PlaneLanding className="text-indigo-600 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Seamless Transition</h4>
                  <p className="text-xs text-slate-500 mt-1">Guaranteed credit transfers to partner global universities.</p>
                </div>
              </div>
            </div>

            <Button className="rounded-full px-10 py-8 bg-slate-900 hover:bg-blue-700 text-white font-bold text-lg shadow-xl shadow-blue-100 transition-all hover:scale-105 group">
              Explore MS Programs <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* RIGHT: INTERACTIVE COUNTRY GRID */}
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {countries.map((country, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:border-blue-200 transition-all group cursor-pointer"
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-14 h-10 object-cover rounded-md shadow-sm group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="font-bold text-slate-700 text-sm tracking-tight">{country.name}</span>
                </motion.div>
              ))}
              
              {/* Special "Global" Card */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="col-span-2 sm:col-span-1 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-[2rem] flex flex-col items-center justify-center text-white text-center shadow-lg"
              >
                <Globe2 className="w-8 h-8 mb-2 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">And More</span>
                <span className="font-bold text-sm">Global Partners</span>
              </motion.div>
            </div>

            {/* Floating Trust Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-20 -left-40 bg-white shadow-2xl rounded-2xl p-4 flex items-center gap-3 border border-slate-100 hidden md:flex"
            >
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter leading-none">University Partner</p>
                <p className="text-sm font-bold text-slate-900 mt-1">Verified MS Degree</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>

    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: CONTENT AREA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-6"
              >
                <Star size={14} className="animate-pulse" />
                Leadership Program
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Become our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Brand Ambassador.
                </span>
              </h2>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Apply to become an Ambassador for Qskill! Represent us on your campus, lead fellow students, and level up your leadership skills while earning premium swag and verified certificates.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button className="rounded-full px-10 py-8 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg shadow-xl shadow-purple-900/20 transition-all hover:scale-105 group">
                Join Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-3 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <ShieldCheck className="text-emerald-400" size={20} />
                <span className="text-slate-300 text-sm font-semibold">Official Certification</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: PERKS BENTO GRID */}
          <div className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {perks.slice(0, 2).map((perk, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] group transition-all hover:bg-white/10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {perk.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{perk.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{perk.desc}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Wide Highlight Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 group"
            >
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center shrink-0">
                <Rocket className="text-white animate-bounce" size={32} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Level Up Your Career</h3>
                <p className="text-slate-400 text-sm max-w-xs">Gain inherent leadership and representational skills that companies value.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Background Icon Watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <Users2 size={600} className="text-white" />
      </div>
    </section>

      {/* --- TESTIMONIALS - INFINITE SCROLL --- */}
      <section className="py-32 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
    <div className="text-left">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900">Stories from our Alumni</h2>
      <p className="text-slate-500 mt-3 text-lg">Real experiences from students who transformed their careers.</p>
    </div>
    
    <motion.button 
      whileHover={{ x: 5 }}
      className="flex items-center gap-2 text-brandPurple font-bold text-lg group"
    >
      <Link to="/testimonial" onClick={() => window.scrollTo(0,0)}>View all reviews</Link>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </motion.button>
  </div>

  <div className="relative flex">
    {/* Gradient Overlays for a "Fade" effect at the edges */}
    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

    <motion.div
      className="flex gap-8 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      // Increased duration to 60 for a slower, more premium feel
      transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      // This pauses the scroll when someone hovers over a card
      whileHover={{ scale: 1 }} 
    >
      {/* Duplicate array to create the infinite loop effect */}
      {[...testimonials, ...testimonials].map((item, index) => (
        <Card 
          key={index} 
          className="min-w-[400px] border-slate-100 shadow-sm rounded-[2rem] bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-500 border-none"
        >
          <CardContent className="p-10 whitespace-normal">
            <div className="flex gap-1 mb-5 text-amber-400">
              {[...Array(5)].map((_, star) => (
                <Star key={star} className="w-4 h-4 fill-current" />
              ))}
            </div>
            
            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              "{item.text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src={item.img} 
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-md" 
                  alt={item.name} 
                />
                <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
                  {item.role}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  </div>
</section>

      {/* --- FAQ SECTION --- */}
      <section className="py-32 bg-slate-50 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Common Questions</h2>
          <div className="space-y-4">
            {[
              ["What is the duration of the internship?", "We offer flexible tracks ranging from 30 to 90 days."],
              ["Do I need prior coding experience?", "Not at all. We have 'zero-to-one' tracks designed for absolute beginners."],
              ["Is the certification globally recognized?", "Yes, our certificates are cryptographically verified and industry-standard."]
            ].map((item, i) => (
              <motion.details 
                key={i} 
                className="group bg-white rounded-2xl p-2 shadow-sm border border-slate-100 overflow-hidden cursor-pointer open:ring-2 open:ring-blue-100 transition-all"
              >
                <summary className="list-none p-4 font-semibold text-lg flex justify-between items-center text-slate-700">
                  {item[0]}
                  <span className="transition-transform group-open:rotate-180 text-blue-500 font-light text-2xl">+</span>
                </summary>
                <div className="px-4 pb-6 text-slate-500 leading-relaxed border-t border-slate-50 mt-2 pt-4">
                  {item[1]}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-purple-600 to-brandPurple p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
           <div className="relative z-10 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to jumpstart your career?</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">Join 1000+ students already learning and building with Qskill.</p>
              <Link to="/internship">
              <Button onClick={() => window.scrollTo({top: 470, behavior: 'smooth'})} variant="outline" className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-8 rounded-full text-xl font-bold transition-transform hover:scale-105">
                Apply for Internship
              </Button>
              </Link>
           </div>
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        </div>
      </section>
    </div>
  );
}

function DetailItem({ label, value, mono }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-zinc-900/60 p-4 transition-all hover:border-white/20 hover:bg-zinc-900/80">
      <p className="text-xs uppercase tracking-wider text-zinc-500">{label}</p>
      <p className={`mt-1 text-sm font-medium text-white ${mono ? "font-mono" : ""}`}>
        {value || "—"}
      </p>
    </div>
  );
}

function Verify() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!certId) return;

    try {
      setLoading(true);
      setError("");
      setResult(null);

      const res = await axios.get(`https://qskill-backend.vercel.app/verify/${certId}`);
      setResult(res.data);
    } catch (err) {
      setError("❌ Certificate not found");
    } finally {
      setLoading(false);
    }
  };

  return (
  <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 py-16 selection:bg-blue-500/30">
    {/* Ambient Glows */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-[15%] -left-[15%] h-[45%] w-[45%] rounded-full bg-blue-600/15 blur-[140px]" />
      <div className="absolute -bottom-[15%] -right-[15%] h-[45%] w-[45%] rounded-full bg-indigo-600/15 blur-[140px]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-500/10 to-transparent" />
    </div>

    <div className="relative w-full max-w-2xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 p-3 shadow-[0_0_40px_rgba(59,130,246,0.25)]">
          <ShieldCheck className="h-9 w-9 text-blue-400 drop-shadow" />
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Verification Portal
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400 md:text-base">
          Instantly validate official credentials with cryptographic-grade confidence.
        </p>
      </div>

      {/* Search Card */}
      <div className="group relative rounded-[2rem] border border-white/10 bg-zinc-900/60 p-2 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/20">
        {/* subtle top gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="flex flex-col gap-2 p-2 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input
              className="w-full rounded-2xl border border-zinc-700/50 bg-zinc-800/60 px-11 py-4 text-white outline-none transition-all placeholder:text-zinc-500 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/40"
              placeholder="Enter Certificate ID (e.g. qspy202604599)"
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={loading}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-[0_10px_30px_rgba(79,70,229,0.35)] transition-all active:scale-95 disabled:opacity-70"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Verify"}
            </span>
            {/* hover sheen */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-red-400/20 bg-red-400/10 py-3 text-red-300 animate-in fade-in slide-in-from-top-2">
          <span className="text-xs font-medium">{error}</span>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md animate-in fade-in zoom-in-95 duration-500">
          {/* top glow line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

          <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-blue-400" />
              <span className="font-medium text-white">Credential Details</span>
            </div>
            <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-300 ring-1 ring-emerald-500/20">
              Verified
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2">
            <DetailItem label="Recipient Name" value={result.name || result["﻿name"] || "—"} />
            <DetailItem label="Credential Domain" value={result.domain} />
            <DetailItem label="Duration" value={result.duration} />
            <DetailItem label="Email Address" value={result.email} />
            <DetailItem label="Certificate ID" value={result.id} mono />
          </div>

          <div className="px-8 pb-8">
            <a
              href={result.link}
              target="_blank"
              rel="noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-800/80 py-4 text-white transition-all hover:bg-zinc-700/80 hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)]"
            >
              <span>View Full Certificate</span>
              <ExternalLink className="h-4 w-4 text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400" />
            </a>
          </div>
        </div>
      )}
    </div>
  </section>
);
}

function Apply() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100">
      <Card className="rounded-2xl shadow-xl w-[90vw] max-w-md">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-semibold">Qskill Internship</h2>
          <p className="text-sm text-zinc-600 mt-2">
            Apply now to join our internship program and work on real-world projects.
          </p>

          <div className="mt-6">
            <Button
              className="rounded-xl w-full"
              onClick={() => window.location.href = "https://forms.gle/QJAQS8AkiMKuRYEF8"}
            >
              Apply for Internship
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/hirefromus" element={<HireFromUs />} />
        <Route path="/testimonial" element={<TestimonialsPage />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/internship/:id" element={<ProgramDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
