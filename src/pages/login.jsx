import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Lock, User, ArrowRight, Eye, EyeOff, Sparkles, ShieldCheck 
} from 'lucide-react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { supabase } from "../lib/supabase";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form states
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
  e.preventDefault();

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email: loginForm.email,
      password: loginForm.password,
    });

  if (error) {
    alert(error.message);
    return;
  }

  console.log("Logged in:", data.user);

  alert("Login successful!");
};

  const handleSignupSubmit = async (e) => {
  e.preventDefault();

  if (signupForm.password !== signupForm.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email: signupForm.email,
    password: signupForm.password,
    options: {
      data: {
        first_name: signupForm.firstName,
        last_name: signupForm.lastName,
      },
    },
  });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Account created successfully!");

  console.log(data);
};

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-20 px-4 md:px-6 relative overflow-hidden flex items-center justify-center">
      {/* Background Gradient Blurs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-100/50 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[130px] -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-md w-full mx-auto relative z-10">
        
        {/* Top Branding Pill */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-[#6D28D9] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles size={13} className="animate-pulse" /> Qskill Member Portal
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            {isLogin 
              ? "Sign in to access your dashboard, projects & certifications." 
              : "Start your structured industry-ready journey today."}
          </p>
        </div>

        {/* Outer Frosted Glass Card */}
        <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-6 md:p-8 shadow-[0_20px_50px_rgba(109,40,217,0.06)] border border-white">
          
          {/* Animated Tab Switcher */}
          <div className="relative flex p-1 bg-slate-100/80 rounded-2xl mb-8">
            <motion.div
              className="absolute top-1 bottom-1 bg-white rounded-xl shadow-sm"
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{
                left: isLogin ? "4px" : "50%",
                width: "calc(50% - 4px)"
              }}
            />
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`relative z-10 flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                isLogin ? "text-[#6D28D9]" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`relative z-10 flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                !isLogin ? "text-[#6D28D9]" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Social Auth (Google) */}
          <button
            type="button"
            onClick={async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin,
    },
  });

  if (error) {
    alert(error.message);
  }
}}
            className="w-full h-13 py-3 px-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-sm flex items-center justify-center gap-3 transition-all hover:shadow-sm active:scale-[0.99] mb-6"
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
            <span>{isLogin ? "Continue with Google" : "Sign up with Google"}</span>
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white/80 px-3 text-[11px] font-bold tracking-widest uppercase text-slate-400 absolute">
              or with email
            </span>
          </div>

          {/* Slide Forms Container */}
          <AnimatePresence mode="wait">
            {isLogin ? (
              /* --- LOGIN FORM --- */
              <motion.form
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleLoginSubmit}
                className="space-y-4"
              >
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <Mail size={18} />
                    </span>
                    <Input
                      type="email"
                      name="email"
                      required
                      value={loginForm.email}
                      onChange={handleLoginChange}
                      placeholder="name@example.com"
                      className="h-12 pl-12 rounded-xl border-slate-200 bg-white/50 focus:bg-white focus:border-[#6D28D9] transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Password
                    </label>
                    <a
                      href="#forgot"
                      className="text-xs font-semibold text-[#6D28D9] hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <Lock size={18} />
                    </span>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      value={loginForm.password}
                      onChange={handleLoginChange}
                      placeholder="Enter your password"
                      className="h-12 pl-12 pr-11 rounded-xl border-slate-200 bg-white/50 focus:bg-white focus:border-[#6D28D9] transition-all text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Submit Action */}
                <Button
                  type="submit"
                  className="w-full h-13 py-3.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-purple-200 transition-all duration-300 active:scale-[0.98] mt-2"
                >
                  Sign In <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.form>
            ) : (
              /* --- SIGNUP FORM --- */
              <motion.form
                key="signup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSignupSubmit}
                className="space-y-4"
              >
                {/* First & Last Name */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                      First Name
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <User size={16} />
                      </span>
                      <Input
                        type="text"
                        name="firstName"
                        required
                        value={signupForm.firstName}
                        onChange={handleSignupChange}
                        placeholder="John"
                        className="h-12 pl-10 rounded-xl border-slate-200 bg-white/50 focus:bg-white focus:border-[#6D28D9] transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      name="lastName"
                      required
                      value={signupForm.lastName}
                      onChange={handleSignupChange}
                      placeholder="Doe"
                      className="h-12 px-4 rounded-xl border-slate-200 bg-white/50 focus:bg-white focus:border-[#6D28D9] transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <Mail size={18} />
                    </span>
                    <Input
                      type="email"
                      name="email"
                      required
                      value={signupForm.email}
                      onChange={handleSignupChange}
                      placeholder="name@example.com"
                      className="h-12 pl-12 rounded-xl border-slate-200 bg-white/50 focus:bg-white focus:border-[#6D28D9] transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <Lock size={18} />
                    </span>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      value={signupForm.password}
                      onChange={handleSignupChange}
                      placeholder="Create password"
                      className="h-12 pl-12 pr-11 rounded-xl border-slate-200 bg-white/50 focus:bg-white focus:border-[#6D28D9] transition-all text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <Lock size={18} />
                    </span>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      required
                      value={signupForm.confirmPassword}
                      onChange={handleSignupChange}
                      placeholder="Repeat password"
                      className="h-12 pl-12 pr-11 rounded-xl border-slate-200 bg-white/50 focus:bg-white focus:border-[#6D28D9] transition-all text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Submit Action */}
                <Button
                  type="submit"
                  className="w-full h-13 py-3.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-purple-200 transition-all duration-300 active:scale-[0.98] mt-2"
                >
                  Create Account <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Security / Terms Notice */}
        <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mt-6">
          <ShieldCheck size={14} className="text-purple-600" />
          <span>Encrypted with 256-bit SSL protocol</span>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;