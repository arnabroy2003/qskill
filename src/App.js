import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { useState } from "react";
import axios from "axios";
import { ChevronRight, ArrowRight, Star, CheckCircle2, ShieldCheck, Search, Loader2, Award, ExternalLink } from "lucide-react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-left">
  <img
    src="https://res.cloudinary.com/dvqqjadcf/image/upload/v1771142458/qskill_logo_trans_rv9jn5.png"
    alt="Qskill Logo"
    className="h-8 md:h-10 w-auto"
  />
</Link>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link className="hover:text-blue-600" to="/">Internships</Link>
          <Link className="hover:text-blue-600" to="/verify">Verify</Link>
          <Link className="hover:text-blue-600" to="/">About Us</Link>
          <Link className="hover:text-blue-600" to="/">Contact Us</Link>
            <Button className="rounded-2xl">Login</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3 text-sm">
          <Link to="/" onClick={() => setOpen(false)}>Internships</Link>
          <Link to="/verify" onClick={() => setOpen(false)}>Verify</Link>
          <Link to="/" onClick={() => setOpen(false)}>About Us</Link>
          <Link to="/" onClick={() => setOpen(false)}>Contact Us</Link>
          <Button className="rounded-xl w-full">Login</Button>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid gap-6 md:grid-cols-2 text-center md:text-left">
        <div>
          <h2 className="text-xl font-semibold text-white">Qskill</h2>
          <p className="mt-2 text-sm">Professional training with real-world hands-on projects.</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
          <span>Internships</span>
          <span>Verify</span>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Login</span>
        </div>
      </div>
      <div className="text-center text-xs pb-6">© {new Date().getFullYear()} Qskill. All rights reserved.</div>
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
    name: "Ananya Sharma",
    role: "Full Stack Intern",
    text: "The live sessions were a game changer. Building a real E-commerce platform helped me ace my Amazon interview!",
    img: "https://i.pravatar.cc/150?u=ananya"
  },
  {
    name: "Rohan Gupta",
    role: "Data Science Intern",
    text: "Qskill doesn't just teach syntax; they teach problem-solving. The mentorship during the final project was invaluable.",
    img: "https://i.pravatar.cc/150?u=rohan"
  },
  {
    name: "Sanya Iyer",
    role: "UI/UX Design Intern",
    text: "Finally a program that focuses on industry-standard tools. My portfolio looks 10x more professional now.",
    img: "https://i.pravatar.cc/150?u=sanya"
  },
  {
    name: "Vikram Mehra",
    role: "Python Developer",
    text: "Verified certification helped me stand out on LinkedIn. I received three interview calls within a week!",
    img: "https://i.pravatar.cc/150?u=vikram"
  },
  {
    name: "Ishita Paul",
    role: "Frontend Intern",
    text: "From zero coding knowledge to deploying React apps. The step-by-step guidance is perfect for beginners.",
    img: "https://i.pravatar.cc/150?u=ishita"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Next Cohort Starts Soon
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Master Skills. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Launch Careers.
              </span>
            </h1>
            <p className="mt-8 text-lg text-slate-600 max-w-lg leading-relaxed">
              Qskill bridge the gap between academics and industry with live mentorship, 
              real-world engineering, and verified certifications.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full px-8 py-7 text-lg bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all hover:scale-105">
                Explore Programs <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
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

      {/* --- TESTIMONIALS - INFINITE SCROLL --- */}
      <section className="py-32 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
    <div className="text-left">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900">Stories from our Alumni</h2>
      <p className="text-slate-500 mt-3 text-lg">Real experiences from students who transformed their careers.</p>
    </div>
    
    <motion.button 
      whileHover={{ x: 5 }}
      className="flex items-center gap-2 text-blue-600 font-bold text-lg group"
    >
      View all reviews 
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
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-blue-700 to-indigo-900 p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
           <div className="relative z-10 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to jumpstart your career?</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">Join 1000+ students already learning and building with Qskill.</p>
              <Button className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-8 rounded-full text-xl font-bold transition-transform hover:scale-105">
                Apply for Internship
              </Button>
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

      const res = await axios.get(`https://qskill-backend-1.onrender.com/verify/${certId}`);
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
              placeholder="Enter Certificate ID (e.g. QS-2026-0193)"
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
