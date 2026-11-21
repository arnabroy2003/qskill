import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  FolderGit2,
  Award,
  Sparkles,
  ExternalLink,
  LogOut,
  Mail,
  User,
  ShieldCheck,
  ArrowRight,
  Laptop,
  Clock,
  MessageSquareText
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast, { Toaster } from 'react-hot-toast';

export default function DashboardPage({ user: propUser }) {
  const [user, setUser] = useState(propUser || null);
  const [loading, setLoading] = useState(!propUser);
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchSession = async () => {
      try {
        const { data: { user: currentUser } } = await supabase.auth.getUser();
        if (isMounted) {
          setUser(currentUser);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching user:', err);
        if (isMounted) setLoading(false);
      }
    };

    if (!propUser) {
      fetchSession();
    } else {
      setUser(propUser);
      setLoading(false);
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted) {
        setUser(session?.user ?? null);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [propUser]);

  const handleLogout = async () => {
    try {
      setLoggingOut(true);
      await supabase.auth.signOut();
      toast.success('Logged out successfully');
      navigate('/');
    } catch (err) {
      console.error('Logout error:', err);
      toast.error('Failed to log out');
    } finally {
      setLoggingOut(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
      if (error) throw error;
    } catch (err) {
      toast.error(err.message || 'Google sign in failed');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8fafc] pt-32 pb-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-purple-200 border-t-[#632967] rounded-full animate-spin mx-auto" />
          <p className="text-sm font-medium text-slate-500">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Not logged in view
  if (!user) {
    return (
      <div className="min-h-screen bg-[#f8fafc] pt-32 pb-20 px-4 md:px-6 relative overflow-hidden flex items-center justify-center">
        <Toaster position="top-right" />
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-100/50 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[130px] -z-10 -translate-x-1/4 translate-y-1/4" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-100 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-purple-50 text-[#632967] flex items-center justify-center mx-auto mb-5 shadow-inner">
            <User size={30} />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Sign in to your Dashboard</h2>
          <p className="text-sm text-slate-500 mt-2 mb-6">
            Access your courses, live internships, project submissions, and verified credentials.
          </p>

          <div className="space-y-3">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full h-12 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-sm flex items-center justify-center gap-3 transition-all hover:shadow-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <Link
              to="/login"
              className="w-full h-12 rounded-xl bg-slate-900 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
            >
              <span>Sign in with Email</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  const fullName =
    user.user_metadata?.full_name ||
    user.user_metadata?.first_name ||
    user.email?.split('@')[0] ||
    'Learner';
  const avatarUrl = user.user_metadata?.avatar_url;
  const email = user.email;
  const isGoogle = user.app_metadata?.provider === 'google' || user.identities?.some((id) => id.provider === 'google');
  const createdAtFormatted = user.created_at
    ? new Date(user.created_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    : 'Member';

  const overviewStats = [
    {
      title: 'Enrolled LMS Track',
      value: 'Student Portal',
      desc: 'Access your coursework & classes',
      icon: <GraduationCap size={22} className="text-purple-600" />,
      bg: 'bg-purple-50 border-purple-100',
      link: 'https://student.qskill.in/',
      isExternal: true
    },
    {
      title: 'Explore Tracks',
      value: '30+ Programs',
      desc: 'Tech & hands-on internships',
      icon: <Laptop size={22} className="text-blue-600" />,
      bg: 'bg-blue-50 border-blue-100',
      link: '/internship',
      isExternal: false
    },
    {
      title: 'Paid Opportunities',
      value: 'Live Projects',
      desc: 'Annotation & freelance gigs',
      icon: <FolderGit2 size={22} className="text-emerald-600" />,
      bg: 'bg-emerald-50 border-emerald-100',
      link: '/opportunites',
      isExternal: false
    },
    {
      title: 'Credential Verify',
      value: 'Instant Check',
      desc: 'Validate official certificates',
      icon: <Award size={22} className="text-amber-600" />,
      bg: 'bg-amber-50 border-amber-100',
      link: '/verify',
      isExternal: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-20 px-4 md:px-8 relative overflow-hidden">
      <Toaster position="top-right" />

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[140px] -z-10 translate-x-1/4 -translate-y-1/4" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[130px] -z-10 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HERO WELCOME BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-6 md:p-10 text-white overflow-hidden shadow-2xl bg-gradient-to-r from-[#240b36] via-[#3b1544] to-[#632967]"
        >
          {/* Decorative Background Elements */}
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-purple-400/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* User Info Left */}
            <div className="flex items-center gap-5">
              <div className="relative">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={fullName}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-white/20 shadow-lg"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-500 text-white flex items-center justify-center font-extrabold text-2xl border-2 border-white/20 shadow-lg">
                    {fullName.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-[#240b36] rounded-full flex items-center justify-center" title="Active">
                  <span className="w-2 h-2 bg-white rounded-full" />
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/10 text-purple-200 border border-white/15">
                    Student Member
                  </span>
                  {isGoogle && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
                      Google Verified
                    </span>
                  )}
                </div>

                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  Welcome back, {fullName}!
                </h1>
                <p className="text-sm text-purple-200/80 flex items-center gap-1.5 mt-0.5">
                  <Mail size={14} className="opacity-70" />
                  <span>{email}</span>
                </p>
              </div>
            </div>

            {/* Quick Actions Right */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <a
                href="https://student.qskill.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-purple-50 hover:text-brandPurple transition-all shadow-md active:scale-[0.98]"
              >
                <GraduationCap size={18} className="text-purple-600" />
                <span>Student Portal (LMS)</span>
                <ExternalLink size={14} className="opacity-60" />
              </a>

              <button
                type="button"
                onClick={handleLogout}
                disabled={loggingOut}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-medium text-sm transition-all active:scale-[0.98]"
              >
                <LogOut size={16} />
                <span>{loggingOut ? 'Signing out...' : 'Log Out'}</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* OVERVIEW STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {overviewStats.map((item, idx) => {
            const cardContent = (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-5 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 group flex items-start gap-4 cursor-pointer`}
              >
                <div className={`p-3 rounded-xl shrink-0 ${item.bg}`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.title}</p>
                  <p className="text-lg font-bold text-slate-900 mt-0.5 group-hover:text-brandPurple transition-colors">{item.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5 truncate">{item.desc}</p>
                </div>
              </motion.div>
            );

            return item.isExternal ? (
              <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer">
                {cardContent}
              </a>
            ) : (
              <Link key={item.title} to={item.link}>
                {cardContent}
              </Link>
            );
          })}
        </div>

        {/* MAIN DASHBOARD CONTENT (2 COLUMNS) */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: CORE HUBS */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Student LMS Quick Access Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 mb-2">
                    <Sparkles size={13} /> LMS Learning Platform
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    QSkill Student Learning Portal
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Your dedicated portal for live class links, assignments, capstone projects & mentor feedback.
                  </p>
                </div>

                <a
                  href="https://student.qskill.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brandPurple text-white font-bold text-sm shadow-md hover:bg-purple-900 transition-all shrink-0"
                >
                  <span>Launch LMS</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* LMS Features Highlights */}
              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-2.5">
                    <Clock size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">Task Deadlines</h4>
                  <p className="text-xs text-slate-500 mt-1">Track submissions, reviews and mentor feedback regularly.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-2.5">
                    <Laptop size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">Live Sessions</h4>
                  <p className="text-xs text-slate-500 mt-1">Access scheduled classes and recorded session archives.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5">
                    <Award size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">Certificates</h4>
                  <p className="text-xs text-slate-500 mt-1">Earn industry-recognized, verifiable completion credentials.</p>
                </div>
              </div>
            </motion.div>

            {/* Opportunities & Projects Hub */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Opportunities & Live Projects
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Apply for paid projects, freelance gigs, and data annotation tasks.
                  </p>
                </div>

                <Link
                  to="/opportunites"
                  className="inline-flex items-center gap-1 text-sm font-bold text-brandPurple hover:text-purple-900 transition-colors"
                >
                  <span>View All</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700">
                        Paid Task
                      </span>
                      <h4 className="font-bold text-slate-800 text-sm">Selfie & Face Image Data Collection</h4>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Historical and current selfie photos for AI model training. ₹300 per approved set.
                    </p>
                  </div>
                  <Link
                    to="/opportunites"
                    className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition shrink-0"
                  >
                    View Details
                  </Link>
                </div>

                <div className="p-4 rounded-2xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-700">
                        Coming Soon
                      </span>
                      <h4 className="font-bold text-slate-800 text-sm">Data Annotation & Video Bounding Box</h4>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Video frame tagging, object bounding box and attribute labeling.
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-100 text-slate-400 text-xs font-bold cursor-not-allowed shrink-0">
                    Coming Soon
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: ACCOUNT INFO & HELP */}
          <div className="space-y-6">
            
            {/* Account Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-brandPurple flex items-center justify-center font-bold">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Account Overview</h4>
                  <p className="text-xs text-slate-500">Security & credentials</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 text-xs">
                <div>
                  <p className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Registered Name</p>
                  <p className="font-bold text-slate-800 text-sm mt-0.5">{fullName}</p>
                </div>

                <div>
                  <p className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Email Address</p>
                  <p className="font-bold text-slate-800 text-sm mt-0.5 truncate">{email}</p>
                </div>

                <div>
                  <p className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Authentication Method</p>
                  <p className="font-bold text-slate-800 text-sm mt-0.5">
                    {isGoogle ? 'Google OAuth (SSO)' : 'Email & Password'}
                  </p>
                </div>

                <div>
                  <p className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Member Since</p>
                  <p className="font-bold text-slate-800 text-sm mt-0.5">{createdAtFormatted}</p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full py-2.5 px-4 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold transition flex items-center justify-center gap-2"
                >
                  <LogOut size={14} />
                  <span>Sign Out</span>
                </button>
              </div>
            </motion.div>

            {/* WhatsApp Community Channel Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent rounded-3xl p-6 border border-emerald-500/20 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-md">
                <MessageSquareText size={20} />
              </div>
              <h4 className="font-extrabold text-slate-900 text-sm">
                WhatsApp Opportunities Channel
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Stay updated with new paid projects, freelance opportunities, and internship drives in real-time.
              </p>
              <a
                href="https://whatsapp.com/channel/0029Vb8g4XdLikgBwyfg990o"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-sm"
              >
                <span>Follow Official Channel</span>
                <ExternalLink size={13} />
              </a>
            </motion.div>

            {/* Quick Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm"
            >
              <h4 className="font-extrabold text-slate-900 text-sm">Need Help?</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Have questions about your certificates, course access or technical support?
              </p>
              <div className="flex items-center gap-2 mt-4">
                <a
                  href="https://wa.me/919330354596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition"
                >
                  WhatsApp Chat
                </a>
                <Link
                  to="/contact"
                  className="flex-1 text-center py-2 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-brandPurple font-bold text-xs transition"
                >
                  Contact Form
                </Link>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </div>
  );
}
