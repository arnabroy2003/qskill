import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

// Google Apps Script Web App URL for Google Sheets integration
// Replace this placeholder with your deployed Google Apps Script URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzzNunXOkOOdvrLS1mRWuqNVHmm8gwKOecbaFksJRjtceQCG6pO3qGBXMiimCzq2XcZ/exec";

const Requestcandidate = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    recruiterName: '',
    email: '',
    phone: '',
    hiringRole: '',
    customRole: '',
    experienceLevel: 'Internship',
    hiringType: 'Remote',
    location: '',
    requirements: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.companyName.trim()) {
      toast.error('Please enter your company name');
      return;
    }
    if (!formData.recruiterName.trim()) {
      toast.error('Please enter HR / Recruiter name');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      toast.error('Please enter a valid work email');
      return;
    }
    if (!formData.phone.trim()) {
      toast.error('Please enter your contact number');
      return;
    }
    if (!formData.hiringRole) {
      toast.error('Please select a hiring role');
      return;
    }
    if (formData.hiringRole === 'Other' && !formData.customRole.trim()) {
      toast.error('Please specify the hiring role');
      return;
    }
    if ((formData.hiringType === 'Hybrid' || formData.hiringType === 'On-site') && !formData.location.trim()) {
      toast.error('Please specify the location for Hybrid / On-site roles');
      return;
    }

    setLoading(true);

    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      companyName: formData.companyName.trim(),
      recruiterName: formData.recruiterName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      hiringRole: formData.hiringRole === 'Other' ? `Other: ${formData.customRole.trim()}` : formData.hiringRole,
      experienceLevel: formData.experienceLevel,
      hiringType: formData.hiringType,
      location: (formData.hiringType === 'Hybrid' || formData.hiringType === 'On-site') ? formData.location.trim() : 'Remote (N/A)',
      requirements: formData.requirements.trim() || 'None specified'
    };

    try {
      if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
        // Fallback info notification if user has not yet deployed their Google Apps Script URL
        console.warn('Google Apps Script URL is pending configuration. Prepared payload:', payload);
        toast('Apps Script Web App URL is not set yet in requestcandidate.jsx', {
          icon: 'ℹ️',
          duration: 4000
        });
      } else {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(payload)
        });
      }

      setSubmitted(true);
      toast.success('Candidate request submitted successfully!');
    } catch (err) {
      console.error('Submission error:', err);
      // Inform the user
      toast.error('Could not connect to Google Sheets. Check your Apps Script deployment.');
    } finally {
      setLoading(false);
    }
  };

  return (
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

        {/* Toast notifications */}
        <Toaster position="top-right" />

        {submitted ? (
          <div className="text-center py-10 px-4 space-y-6">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl font-extrabold text-slate-900">
                Request Submitted!
              </h3>
              <p className="text-slate-500 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                Thank you for your interest in hiring from QSkill. Your hiring request has been logged, and our talent acquisition team will review your requirements and reach out within 24 hours.
              </p>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    companyName: '',
                    recruiterName: '',
                    email: '',
                    phone: '',
                    hiringRole: '',
                    customRole: '',
                    experienceLevel: 'Internship',
                    hiringType: 'Remote',
                    location: '',
                    requirements: ''
                  });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-xl transition-all"
              >
                <span>Submit Another Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-10">
              <h3 className="text-3xl font-extrabold text-slate-900">
                Request Candidates
              </h3>
              <p className="text-slate-500 mt-3">
                Fill in your hiring requirements and we’ll reach out shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ROW 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    placeholder="Google Inc."
                    className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    HR / Recruiter Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="recruiterName"
                    value={formData.recruiterName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800"
                  />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="hr@company.com"
                    className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 9876543210"
                    className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800"
                  />
                </div>
              </div>

              {/* ROLE */}
              <div>
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Hiring Role <span className="text-red-500">*</span>
                </label>

                <select
                  name="hiringRole"
                  value={formData.hiringRole}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800"
                >
                  <option value="">Select Role</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Python Developer">Python Developer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Other">Other</option>
                </select>

                {/* CONDITIONAL SPECIFIC ROLE INPUT */}
                <AnimatePresence>
                  {formData.hiringRole === 'Other' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -6 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="mt-4 overflow-hidden"
                    >
                      <label className="text-sm font-bold text-slate-700 ml-1">
                        Please specify the hiring role <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="customRole"
                        value={formData.customRole}
                        onChange={handleChange}
                        required={formData.hiringRole === 'Other'}
                        placeholder="e.g. Full Stack Developer, DevOps Engineer, QA Analyst..."
                        className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* EXPERIENCE + TYPE */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Experience Level
                  </label>

                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800"
                  >
                    <option value="Internship">Internship</option>
                    <option value="Fresher">Fresher</option>
                    <option value="0-1 Years">0-1 Years</option>
                    <option value="1-3 Years">1-3 Years</option>
                    <option value="3+ Years">3+ Years</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Hiring Type
                  </label>

                  <select
                    name="hiringType"
                    value={formData.hiringType}
                    onChange={handleChange}
                    className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800"
                  >
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-site">On-site</option>
                  </select>
                </div>
              </div>

              {/* CONDITIONAL LOCATION FOR HYBRID / ON-SITE */}
              <AnimatePresence>
                {(formData.hiringType === 'Hybrid' || formData.hiringType === 'On-site') && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required={formData.hiringType === 'Hybrid' || formData.hiringType === 'On-site'}
                      placeholder="e.g. Mumbai, Bangalore, Pune, Kolkata..."
                      className="mt-2 w-full h-14 rounded-2xl border border-slate-200 bg-white/80 px-5 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* REQUIREMENTS */}
              <div>
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Candidate Requirements
                </label>

                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Mention required skills, technologies, expected responsibilities..."
                  className="mt-2 w-full min-h-[160px] rounded-[2rem] border border-slate-200 bg-white/80 p-6 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none text-slate-800"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`group relative w-full h-16 overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-lg font-bold text-white shadow-[0_20px_50px_rgba(59,130,246,0.25)] transition-all ${
                  loading ? 'opacity-80 cursor-wait' : 'hover:scale-[1.01] active:scale-[0.99]'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Candidates</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>

                <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
              </button>

              {/* FOOTNOTE */}
              <p className="text-center text-xs text-slate-400 leading-relaxed">
                By submitting this form, our hiring team may contact you regarding suitable candidates.
              </p>
            </form>
          </>
        )}
      </div>
    </motion.div>
  </div>
</section>
)
}

export default Requestcandidate
