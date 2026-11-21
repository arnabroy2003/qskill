import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import axios from "axios";
import { supabase } from './lib/supabase';
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import HireFromUs from "./pages/hire";
import TestimonialsPage from "./pages/testimonial";
import InternshipPage from "./pages/internship";
import ProgramDetailPage from "./pages/programdetails";
import Requestcandidate from "./pages/requestcandidate";
import PortfolioLandingPage from "./pages/PortfolioLandingPage"
import ApplyInternshipPage from "./pages/Apply";
import AuthPage from "./pages/login";
import TrustTransparency from "./pages/TrustTransparency"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import OpportunitiesSection from "./pages/opportunites"
import DashboardPage from "./pages/dashboard"
import { 
  ChevronRight, 
  Menu, 
  Trophy, 
  Gift, 
  Users2, 
  Rocket, 
  X, 
  Banknote, 
  Globe2, 
  PlaneLanding, 
  GraduationCap, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  UserPlus, 
  Users, 
  Laptop, 
  Send, 
  Award, 
  Search, 
  Loader2, 
  ExternalLink, 
  Linkedin, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone,
  Sparkles,
  ChevronUp,
  ChevronDown,
  Briefcase,
  FolderGit2,
  LayoutDashboard,
  LogOut
} from "lucide-react";

// Official WhatsApp Vector Icon
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

function Header({ user, showProfileMenu, setShowProfileMenu }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const exploreRef = useRef(null);
  const profileRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setExploreOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowProfileMenu]);

  useEffect(() => {
    setExploreOpen(false);
    setShowProfileMenu(false);
    setOpen(false);
  }, [location.pathname, setShowProfileMenu]);

  const navLinks = [
    { name: 'Internships', path: '/internship' },
    { name: 'Verify', path: '/verify' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const exploreItems = [
    {
      title: "Student Portal",
      desc: "Access your dashboard, tasks & mentor feedback",
      path: "https://student.qskill.in/",
      icon: <GraduationCap size={18} className="text-purple-600 group-hover:text-white transition-colors" />,
      iconBg: "bg-purple-100 group-hover:bg-brandPurple",
      badge: "LMS"
    },
    {
      title: "Hire From Us",
      desc: "Recruit pre-trained developers & tech interns",
      path: "/hirefromus",
      icon: <Briefcase size={18} className="text-blue-600 group-hover:text-white transition-colors" />,
      iconBg: "bg-blue-100 group-hover:bg-blue-600",
      badge: "Employers"
    },
    {
      title: "Opportunites",
      desc: "Freelance, Paid Projects, Jobs and more",
      path: "/opportunites",
      icon: <FolderGit2 size={18} className="text-emerald-600 group-hover:text-white transition-colors" />,
      iconBg: "bg-emerald-100 group-hover:bg-emerald-600",
      badge: "Discover"
    }
  ];

  const isExploreActive = ['/login', '/hirefromus', '/portfolio'].includes(location.pathname);

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
            className="h-9 md:h-12 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center" onMouseLeave={() => setHoveredLink(null)}>
          <div className="flex items-center mr-6 gap-1">
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

            {/* EXPLORE DROPDOWN */}
            <div 
              ref={exploreRef}
              className="relative"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <button
                type="button"
                onClick={() => setExploreOpen((prev) => !prev)}
                onMouseEnter={() => setHoveredLink("Explore")}
                className={`relative px-4 py-2 text-[14px] font-medium transition-colors duration-300 flex items-center gap-1.5 focus:outline-none ${
                  isExploreActive || exploreOpen ? "text-brandPurple font-semibold" : "text-slate-500 hover:text-slate-900"
                }`}
                aria-expanded={exploreOpen}
              >
                <span>Explore</span>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-300 ${
                    exploreOpen ? "rotate-180 text-brandPurple" : "text-slate-400 group-hover:text-slate-700"
                  }`} 
                />

                {/* Magnetic Hover/Active Underline */}
                <AnimatePresence>
                  {(hoveredLink === "Explore" || isExploreActive) && (
                    <motion.div 
                      layoutId="nav-pill"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full ${
                        isExploreActive ? "bg-brandPurple" : "bg-slate-300"
                      }`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </AnimatePresence>
              </button>

              {/* DROPDOWN MENU */}
              <AnimatePresence>
                {exploreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-80 sm:w-88"
                  >
                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 p-2 overflow-hidden ring-1 ring-slate-900/5">
                      <div className="space-y-1">
                        {exploreItems.map((item) => (
                          <Link
                            key={item.title}
                            to={item.path}
                            onClick={() => setExploreOpen(false)}
                            className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200"
                          >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${item.iconBg}`}>
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-800 group-hover:text-brandPurple transition-colors">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-slate-500 font-normal mt-0.5 leading-snug">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Arena Event Menu */}
            <a
              href="https://arena.qskill.in"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group ml-2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-bold transition-all duration-300 overflow-hidden bg-gradient-to-r from-[#240b36] via-[#170728] to-[#240b36] text-purple-200 border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.45)] hover:shadow-[0_0_25px_rgba(234,179,8,0.7),0_0_10px_rgba(250,204,21,0.5)] hover:border-amber-400 hover:text-amber-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              {/* Shimmer sweep effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

              {/* Glowing Pulse Dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 group-hover:bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400 group-hover:bg-amber-400 transition-colors"></span>
              </span>

              <Sparkles size={13} className="text-purple-300 group-hover:text-amber-300 transition-colors" />

              <span className="tracking-wide">Arena</span>

              <span className="text-[9px] font-black tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-purple-500/25 border border-purple-400/30 text-purple-200 group-hover:bg-amber-500/25 group-hover:border-amber-400/50 group-hover:text-amber-300 transition-all duration-300">
                Event
              </span>
            </a>
          </div>
          
          {user ? (
            <div className="relative" ref={profileRef}>
              <button
                type="button"
                onClick={() => setShowProfileMenu((prev) => !prev)}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-200 hover:border-brandPurple transition"
              >
                {user.user_metadata?.avatar_url ? (
                  <img
                    src={user.user_metadata.avatar_url}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-[#632967] text-white flex items-center justify-center font-bold">
                    {(
                      user.user_metadata?.full_name ||
                      user.user_metadata?.first_name ||
                      user.email ||
                      "U"
                    )
                      .charAt(0)
                      .toUpperCase()}
                  </div>
                )}
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 top-12 w-64 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200 p-3 z-50">
                  <div className="px-3 py-2 border-b border-slate-100 mb-2">
                    <p className="font-semibold text-slate-900 text-sm truncate">
                      {user.user_metadata?.full_name ||
                        user.user_metadata?.first_name ||
                        "User"}
                    </p>

                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {user.email}
                    </p>
                  </div>

                  <Link
                    to="/dashboard"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-purple-50 text-slate-700 hover:text-brandPurple font-semibold text-sm transition-colors"
                  >
                    <LayoutDashboard size={16} className="text-brandPurple" />
                    <span>Dashboard</span>
                  </Link>

                  <button
                    type="button"
                    onClick={async () => {
                      await supabase.auth.signOut();
                      setShowProfileMenu(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-red-50 text-red-600 font-semibold text-sm transition-colors mt-1"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden md:flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-2.5 font-semibold text-sm hover:bg-slate-800 transition"
            >
              Login
            </Link>
          )}
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
            <div className="flex flex-col p-4 gap-1.5">
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

              {/* Mobile Explore Accordion */}
              <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50/60">
                <button
                  type="button"
                  onClick={() => setMobileExploreOpen((prev) => !prev)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-colors ${
                    isExploreActive ? "text-brandPurple font-bold" : "text-slate-700"
                  }`}
                >
                  <span className="flex items-center gap-2">Explore</span>
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${
                      mobileExploreOpen ? "rotate-180 text-brandPurple" : "text-slate-400"
                    }`} 
                  />
                </button>

                <AnimatePresence>
                  {mobileExploreOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-2 pb-2 space-y-1 overflow-hidden"
                    >
                      {exploreItems.map((item) => (
                        <Link
                          key={item.title}
                          to={item.path}
                          onClick={() => {
                            setOpen(false);
                            setMobileExploreOpen(false);
                          }}
                          className="flex items-center gap-3 p-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:bg-white transition-colors"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.iconBg}`}>
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-slate-800 text-[13px]">{item.title}</p>
                            <p className="text-[11px] text-slate-500 font-normal truncate">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Arena Event Mobile Menu */}
              <a 
                href="https://arena.qskill.in" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="relative group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-[#240b36] via-[#170728] to-[#240b36] text-purple-200 border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_22px_rgba(234,179,8,0.6)] hover:border-amber-400 hover:text-amber-200 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 group-hover:bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400 group-hover:bg-amber-400 transition-colors"></span>
                  </span>
                  <Sparkles size={15} className="text-purple-300 group-hover:text-amber-300 transition-colors" />
                  <span className="tracking-wide">Arena</span>
                </div>
                <span className="text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full bg-purple-500/25 border border-purple-400/30 text-purple-200 group-hover:bg-amber-500/25 group-hover:border-amber-400/50 group-hover:text-amber-300 transition-all">
                  Event
                </span>
              </a>
              {user ? (
                <div className="p-4 border-t border-slate-100 bg-slate-50/80 rounded-2xl mx-1 my-2 space-y-3">
                  <div className="flex items-center gap-3">
                    {user.user_metadata?.avatar_url ? (
                      <img
                        src={user.user_metadata.avatar_url}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-brandPurple text-white flex items-center justify-center font-bold text-sm">
                        {(user.user_metadata?.full_name || user.email || "U").charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-800 text-sm truncate">
                        {user.user_metadata?.full_name || user.user_metadata?.first_name || "User"}
                      </p>
                      <p className="text-xs text-slate-500 truncate">{user.email}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Link
                      to="/dashboard"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-brandPurple text-white text-xs font-bold shadow-sm"
                    >
                      <LayoutDashboard size={14} />
                      Dashboard
                    </Link>
                    <button
                      type="button"
                      onClick={async () => {
                        await supabase.auth.signOut();
                        setOpen(false);
                      }}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-slate-200 text-red-600 text-xs font-bold hover:bg-red-50"
                    >
                      <LogOut size={14} />
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="px-4 py-2">
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="w-full h-10 bg-brandPurple text-white rounded-xl text-sm font-bold flex items-center justify-center"
                  >
                    Portal Login
                  </Link>
                </div>
              )}
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <img
              src="https://res.cloudinary.com/dvqqjadcf/image/upload/v1771142458/qskill_logo_trans_rv9jn5.png"
              alt="Qskill Logo"
              className="h-9 md:h-12 w-auto"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering the next generation of tech leaders through high-impact live training and industry-recognized internships.
            </p>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/company/qskill/" 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://www.youtube.com/@QSkill-tutorial" 
                target="_blank"
                rel="noreferrer"
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
                { name: "Contact Us", path: "/contact" },
                { name: 'Trust & Transparency', path: '/trust-and-transparency' }
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
                <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                <span>Ghansoli, Navi Mumbai, <br />Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                <span>Baruipur, Kolkata, <br />West Bengal, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <a href="tel:+919330354596" className="hover:text-white transition-colors">+91 9330354596</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <a href="mailto:services@qskill.in" className="hover:text-white transition-colors">services@qskill.in</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Parent Company Card */}
          <div className="relative">
            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-3xl backdrop-blur-sm">
              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-3">Parent Company</p>
              <h5 className="text-white font-bold text-lg mb-2">Squrcell Group</h5>
              <p className="text-xs leading-relaxed mb-4 text-slate-400">
                Qskill is a proud initiative by Squarcell, dedicated to excellence in professional development.
              </p>
              <a 
                href="https://www.squarcell.com/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-blue-400 transition-colors group"
              >
                Visit Squarcell <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
            <Link
  to="/privacy-policy"
  onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
  className="hover:text-white cursor-pointer transition-colors"
>
  Privacy Policy
</Link>
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
    { name: "Django", logo: "https://cdn.worldvectorlogo.com/logos/django.svg" },
    { name: "Flask", logo: "https://cdn.worldvectorlogo.com/logos/flask.svg" },
    { name: "FastAPI", logo: "https://cdn.worldvectorlogo.com/logos/fastapi.svg" },
    { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
    { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
    { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
    { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
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
    { name: "USA", flag: "https://flagcdn.com/w80/us.png" },
    { name: "UK", flag: "https://flagcdn.com/w80/gb.png" },
    { name: "New Zealand", flag: "https://flagcdn.com/w80/nz.png" },
    { name: "Japan", flag: "https://flagcdn.com/w80/jp.png" },
    { name: "Australia", flag: "https://flagcdn.com/w80/au.png" },
    { name: "Ukraine", flag: "https://flagcdn.com/w80/ua.png" },
    { name: "Russia", flag: "https://flagcdn.com/w80/ru.png" },
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
  
  const logos = [
    "/college-logo/Clg21.png",
    "/college-logo/Clg42.jpeg",
    "/college-logo/clg1.png",
    "/college-logo/clg10.png",
    "/college-logo/clg11.png",
    "/college-logo/clg12.png",
    "/college-logo/clg13.png",
    "/college-logo/clg14.png",
    "/college-logo/clg15.jpeg",
    "/college-logo/clg16.png",
    "/college-logo/clg17.jpeg",
    "/college-logo/clg18.png",
    "/college-logo/clg19.jpg",
    "/college-logo/clg2.png",
    "/college-logo/clg20.png",
    "/college-logo/clg22.png",
    "/college-logo/clg23.png",
    "/college-logo/clg24.png",
    "/college-logo/clg25.jpeg",
    "/college-logo/clg26.jpeg",
    "/college-logo/clg27.png",
    "/college-logo/clg28.jpg",
    "/college-logo/clg29.png",
    "/college-logo/clg3.jpeg",
    "/college-logo/clg30.png",
    "/college-logo/clg31.png",
    "/college-logo/clg32.png",
    "/college-logo/clg33.png",
    "/college-logo/clg34.jpeg",
    "/college-logo/clg35.jpeg",
    "/college-logo/clg36.png",
    "/college-logo/clg37.jpeg",
    "/college-logo/clg39.png",
    "/college-logo/clg4.png",
    "/college-logo/clg40.png",
    "/college-logo/clg41.png",
    "/college-logo/clg43.png",
    "/college-logo/clg44.jpeg",
    "/college-logo/clg45.png",
    "/college-logo/clg46.jpeg",
    "/college-logo/clg47.jpeg",
    "/college-logo/clg48.jpeg",
    "/college-logo/clg49.png",
    "/college-logo/clg5.png",
    "/college-logo/clg6.jpeg",
    "/college-logo/clg7.png",
    "/college-logo/clg8.png",
    "/college-logo/clg9.png",
  ];

  const row1 = logos.slice(0, Math.ceil(logos.length / 2));
  const row2 = logos.slice(Math.ceil(logos.length / 2));

  return (
    <div className="bg-[#fcfdfe] text-slate-900 selection:bg-blue-100 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20">
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
              src="/popsy2.svg"
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
      <section className="py-20 bg-slate-50/50 border-y border-slate-100">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-12">
          Technologies you will master
        </h2>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 px-6 opacity-60 hover:opacity-100 transition-all duration-700">
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
            <div className="hidden lg:block absolute top-[2.75rem] left-0 w-full h-[2px] bg-slate-100 -z-0">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-40"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4">
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

                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed px-4 lg:px-0">
                    {step.desc}
                  </p>

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

      {/* --- NATIONAL IMPACT MARQUEE --- */}
      <section className="py-16 bg-[#fcfdfe] relative overflow-hidden border-b border-slate-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.03),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#6D28D9] font-bold tracking-[0.2em] uppercase text-xs block mb-3"
          >
            National Impact
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Our Presence Spans <br className="md:hidden" /> Across India
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 mt-4 text-base md:text-lg max-w-2xl mx-auto"
          >
            Students from top tier colleges and national universities trust Qskill to fast-track their careers.
          </motion.p>
        </div>

        <div className="relative flex flex-col gap-6 w-full overflow-hidden mask-gradient">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#fcfdfe] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#fcfdfe] to-transparent z-10 pointer-events-none" />

          {/* ROW 1: Moving Left */}
          <div className="flex w-max whitespace-nowrap">
            <motion.div
              animate={{ x: [0, "-50%"] }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              className="flex gap-8 px-4"
            >
              {[...row1, ...row1].map((logoSrc, index) => (
                <div 
                  key={`row1-${index}`} 
                  className="w-40 h-20 md:w-48 md:h-24 bg-white border border-slate-100 rounded-2xl flex items-center justify-center p-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)] opacity-100 hover:border-[#6D28D9]/30 hover:shadow-md transition-all duration-350 shrink-0"
                >
                  <img
                    src={logoSrc}
                    alt="College Logo"
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.closest("div").style.display = "none";
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* ROW 2: Moving Right */}
          <div className="flex w-max whitespace-nowrap">
            <motion.div
              animate={{ x: ["-50%", 0] }}
              transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
              className="flex gap-8 px-4"
            >
              {[...row2, ...row2].map((logoSrc, index) => (
                <div 
                  key={`row2-${index}`} 
                  className="w-40 h-20 md:w-48 md:h-24 bg-white border border-slate-100 rounded-2xl flex items-center justify-center p-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)] opacity-100 hover:border-[#6D28D9]/30 hover:shadow-md transition-all duration-350 shrink-0"
                >
                  <img 
                    src={logoSrc} 
                    alt="College Partner Logo" 
                    className="max-w-full max-h-full object-contain select-none"
                    onError={(e) => { e.target.src = "https://placehold.co/150x80/f1f5f9/94a3b8?text=University"; }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- GLOBAL PATHWAYS --- */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
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
                Begin your MS journey with select international universities right here in India. Complete your initial semesters locally and transition abroad to finish your degree—<strong>saving up to 40% on total education costs.</strong>
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
                Coming soon... <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

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
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="col-span-2 sm:col-span-1 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-[2rem] flex flex-col items-center justify-center text-white text-center shadow-lg"
                >
                  <Globe2 className="w-8 h-8 mb-2 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">And More</span>
                  <span className="font-bold text-sm">Global Partners</span>
                </motion.div>
              </div>

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

      {/* --- BRAND AMBASSADOR --- */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
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

        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.02] pointer-events-none">
          <Users2 size={600} className="text-white" />
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
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
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            whileHover={{ scale: 1 }} 
          >
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
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        </div>
      </section>

      {/* FLOATING WHATSAPP CHAT BUTTON */}
      <a
        href="https://wa.me/919330354596?text=Hi%20QSkill%2C%20I%20have%20a%20query."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with QSkill on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center select-none"
      >
        {/* Animated Speech Bubble / Tooltip */}
        <div className="relative flex items-center gap-2.5 bg-white text-slate-800 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-slate-200/90 opacity-0 translate-x-3 scale-95 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300 ease-out whitespace-nowrap mr-3.5">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
          <span>
            Have a query? <strong className="text-emerald-600 font-extrabold">Let's Talk</strong>
          </span>
          {/* Arrow pointing to WhatsApp button */}
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-slate-200/90 rotate-45 pointer-events-none" />
        </div>

        {/* WhatsApp Icon Circle */}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg shadow-emerald-500/35 hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300">
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-25 animate-ping pointer-events-none group-hover:opacity-0 transition-opacity" />
          <WhatsAppIcon className="w-7 h-7 fill-white" />
        </div>
      </a>
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
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[15%] -left-[15%] h-[45%] w-[45%] rounded-full bg-blue-600/15 blur-[140px]" />
        <div className="absolute -bottom-[15%] -right-[15%] h-[45%] w-[45%] rounded-full bg-indigo-600/15 blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-500/10 to-transparent" />
      </div>

      <div className="relative w-full max-w-2xl">
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

        <div className="group relative rounded-[2rem] border border-white/10 bg-zinc-900/60 p-2 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/20">
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
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-red-400/20 bg-red-400/10 py-3 text-red-300 animate-in fade-in slide-in-from-top-2">
            <span className="text-xs font-medium">{error}</span>
          </div>
        )}

        {result && (
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md animate-in fade-in zoom-in-95 duration-500">
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
              <DetailItem label="Recipient Name" value={result.name || result["name"] || "—"} />
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

export default function App() {
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const getCurrentUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    };

    getCurrentUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <BrowserRouter>
      <Header 
        user={user} 
        showProfileMenu={showProfileMenu} 
        setShowProfileMenu={setShowProfileMenu} 
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/apply" element={<ApplyInternshipPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/hirefromus" element={<HireFromUs />} />
        <Route path="/testimonial" element={<TestimonialsPage />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/internship/:id" element={<ProgramDetailPage />} />
        <Route path="/request-candidate" element={<Requestcandidate />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage user={user} />} />
        <Route path="/portfolio" element={<PortfolioLandingPage />} />
        <Route path="/trust-and-transparency" element={<TrustTransparency />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/opportunites" element={<OpportunitiesSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}