import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, School, Mail, Phone, GraduationCap, 
  CheckCircle, ArrowRight, Sparkles, ShieldCheck, ChevronDown, Check 
} from 'lucide-react';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const redirectToBackupForm = () => {
  alert(
    "Currently our server is busy. Please submit your application through the backup form."
  );

  window.location.href =
    "https://docs.google.com/forms/d/e/1FAIpQLSeTnNGNUfHswiO1e4gyTjySgbxH_wN8uSkLdmcPPwc-2YxHFA/viewform";
};

const ApplyInternshipPage = () => {
  const brandPurple = "#6D28D9";

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    collegeName: '',
    email: '',
    gender: '',
    whatsappNo: '',
    domain: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [domainOpen, setDomainOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const domains = [
    "Front-End Development",
    "Back-End Development",
    "Python Development",
    "Basic Web Development",
    "AI/ML"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.domain) {
    alert("Please select an internship domain.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch(
      "https://qskill-backend.vercel.app/apply",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      }
    );

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      // alert("Submission Failed");
      redirectToBackupForm();
    }

  } catch (err) {
    console.error(err);
    // alert("Server Error");
    redirectToBackupForm();
  }
  finally {
    setLoading(false);
  }
};

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f8fafc] pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
  
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="max-w-xl w-full bg-white rounded-[3rem] p-12 text-center shadow-2xl border border-slate-100"
  >
    <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl mx-auto flex items-center justify-center mb-8 shadow-inner">
      <CheckCircle size={40} />
    </div>
    
    <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Application Received!</h1>
    
    <p className="text-slate-500 text-lg leading-relaxed mb-4">
      Thank you, <span className="font-bold text-slate-800">{formData.fullName}</span>. Your application for the <span className="font-bold text-purple-700">{formData.domain}</span> path has been successfully locked in. Check your WhatsApp or email for setup updates.
    </p>

    {/* New WhatsApp Group Reminder Text */}
    <p className="text-emerald-600 font-semibold text-md mb-8">
      Please join the official WhatsApp group. as all internship-related updates, announcements, instructions, and important information will be shared there.
    </p>

    <p className="text-slate-600 text-sm mb-8">
  You will be able to log in to our official student portal using your registered email address after 1st July, 2026:
  <a
    href="https://student.qskill.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-purple-700 hover:underline ml-1"
  >
    student.qskill.in
  </a>
</p>

    {/* Action Buttons Container */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      {/* New WhatsApp Group Button */}
      <a 
        href="https://chat.whatsapp.com/LgCuEECiZHz26KmUBaggoo" 
        target="_bin_blank" 
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-md hover:shadow-lg text-center"
      >
        Join WhatsApp Group
      </a>

      {/* Existing Submit Another Button */}
      <Button 
        onClick={() => setSubmitted(false)}
        className="w-full sm:w-auto rounded-full px-8 py-6 bg-slate-900 hover:bg-purple-700 text-white font-bold transition-all"
      >
        Submit Another Application
      </Button>
    </div>
  </motion.div>
</div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-28 pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* Dynamic Background Glow Vectors */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT BRAND SECTION */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8 text-center lg:text-left"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-[0.2em] mb-6 mx-auto lg:mx-0">
              <Sparkles size={12} className="animate-pulse" /> Cohort Open
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Kickstart Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
                Career Journey.
              </span>
            </h1>
          </div>
          <p className="text-slate-500 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Submit your information below to reserve a matching slot in our highly vetted dynamic learning ecosystem.
          </p>
          
          <div className="hidden lg:block space-y-4 pt-4 border-t border-slate-200/60 max-w-sm">
            <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
              <ShieldCheck className="text-purple-600 w-5 h-5" /> Live Mentorship Evaluated
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
              <GraduationCap className="text-purple-600 w-5 h-5" /> Verifiable Completion Credentials
            </div>
          </div>
        </motion.div>

        {/* RIGHT PREMIUM INPUT CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 overflow-visible relative z-50"
        >
          <div className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] overflow-visible shadow-[0_20px_50px_rgba(109,40,217,0.05)] border border-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                    <User size={18} />
                  </span>
                  <Input 
                    type="text" 
                    name="fullName" 
                    required
                    value={formData.fullName} 
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    className="h-14 pl-12 rounded-2xl border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all text-slate-800"
                  />
                </div>
              </div>

              {/* College Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">College / University Name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                    <School size={18} />
                  </span>
                  <Input 
                    type="text" 
                    name="collegeName" 
                    required
                    value={formData.collegeName} 
                    onChange={handleChange}
                    placeholder="Enter your institution name" 
                    className="h-14 pl-12 rounded-2xl border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all text-slate-800"
                  />
                </div>
              </div>

              {/* Email & Whatsapp Container */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <Mail size={18} />
                    </span>
                    <Input 
                      type="email" 
                      name="email" 
                      required
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="name@example.com" 
                      className="h-14 pl-12 rounded-2xl border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all text-slate-800"
                    />
                  </div>
                </div>

                {/* Whatsapp Number */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">WhatsApp Number</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                      <Phone size={18} />
                    </span>
                    <Input 
                      type="tel" 
                      name="whatsappNo" 
                      required
                      value={formData.whatsappNo} 
                      onChange={handleChange}
                      placeholder="10-digit mobile number" 
                      className="h-14 pl-12 rounded-2xl border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 transition-all text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* Gender Radio Block */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1 block">Gender Identification</label>
                <div className="flex flex-wrap gap-4">
                  {['Male', 'Female', 'Other'].map((option) => (
                    <label 
                      key={option}
                      className={`flex-1 min-w-[100px] flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border cursor-pointer select-none transition-all duration-300 font-semibold text-sm ${
                        formData.gender === option 
                        ? "border-purple-600 bg-purple-50 text-purple-700 shadow-md shadow-purple-100" 
                        : "border-slate-100 bg-slate-50/50 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="gender" 
                        value={option}
                        checked={formData.gender === option}
                        onChange={handleChange}
                        className="sr-only" // hidden default radio inputs
                        required
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {/* Internship Domain Dropdown */}
              {/* Premium Internship Domain Dropdown */}
<div className="space-y-2">
  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
    Preferred Internship Domain
  </label>

  <div className="relative z-[9999]">
    
    {/* Trigger */}
    <button
      type="button"
      onClick={() => setDomainOpen(!domainOpen)}
      className={`w-full h-14 pl-12 pr-12 rounded-2xl border bg-white/70 backdrop-blur-md transition-all duration-300 text-left flex items-center ${
        domainOpen
          ? "border-purple-600 ring-2 ring-purple-500/20"
          : "border-slate-200 hover:border-purple-300"
      }`}
    >
      <GraduationCap
        size={18}
        className="absolute left-4 text-slate-400"
      />

      <span
        className={`font-medium text-sm ${
          formData.domain
            ? "text-slate-800"
            : "text-slate-400"
        }`}
      >
        {formData.domain || "Select your program vertical"}
      </span>

      <ChevronDown
        size={18}
        className={`absolute right-4 text-slate-400 transition-transform duration-300 ${
          domainOpen ? "rotate-180" : ""
        }`}
      />
    </button>

    {/* Dropdown */}
    {domainOpen && (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        className="absolute top-full left-0 z-[9999] mt-3 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(109,40,217,0.12)] backdrop-blur-xl"
      >
        {domains.map((domain) => (
          <button
            key={domain}
            type="button"
            onClick={() => {
              setFormData((prev) => ({
                ...prev,
                domain,
              }));
              setDomainOpen(false);
            }}
            className={`w-full px-5 py-4 flex items-center justify-between text-sm font-medium transition-all duration-200 ${
              formData.domain === domain
                ? "bg-purple-50 text-purple-700"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            <span>{domain}</span>

            {formData.domain === domain && (
              <Check
                size={16}
                className="text-purple-600"
              />
            )}
          </button>
        ))}
      </motion.div>
    )}

    {/* Hidden input for form submit */}
    <input
      type="hidden"
      name="domain"
      value={formData.domain}
      required
    />
  </div>
</div>

              {/* Action Submit Trigger */}
              <Button 
                type="submit"
                disabled={loading}
                className="w-full h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white text-lg font-bold shadow-xl shadow-purple-200 group transition-all duration-300 active:scale-[0.98] mt-4"
              >
                {loading ? "Submitting..." : "File My Application"}
                {!loading && (
    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
  )}
              </Button>

            </form>
            <div className="mt-10 rounded-3xl bg-gradient-to-r from-purple-50 to-indigo-50 p-6 border border-purple-100">
  <h3 className="text-lg font-bold text-slate-800 mb-2">
    Why Join Qskill?
  </h3>

  <ul className="space-y-2 text-sm text-slate-600">
    <li>✓ Industry-focused live training</li>
    <li>✓ Internship completion certificate</li>
    <li>✓ Project-based learning approach</li>
    <li>✓ Career guidance and mentorship</li>
  </ul>
</div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ApplyInternshipPage;