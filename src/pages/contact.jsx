import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Youtube, Send, ArrowUpRight, Phone } from 'lucide-react';
// import { Button } from "../components/ui/button"
// import { Input } from "../components/ui/input"
// import { Textarea } from "../components/ui/textarea"

// Replace Button, Input, Textarea with these standard versions
const Button = ({ className, children, ...props }) => (
  <button className={`inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium transition-colors hover:bg-blue-700 disabled:opacity-50 ${className}`} {...props}>
    {children}
  </button>
);

const Input = ({ className, ...props }) => (
  <input className={`flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} {...props} />
);

const Textarea = ({ className, ...props }) => (
  <textarea className={`flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} {...props} />
);

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-20 px-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span variants={itemVariants} className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm">
            Contact Us
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold mt-4 mb-6 tracking-tight text-slate-900">
            Let’s Build Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Future Together.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-slate-500 text-lg max-w-2xl mx-auto">
            Have questions about our internships? Reach out and our team will get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Contact Information */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-8 text-slate-800">Reach Out Directly</h3>
              
              <div className="space-y-8">
                {/* Email Card */}
                <a href="mailto:career@squarcell.com" className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-blue-50 transition-colors">
                  <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Email us at</p>
                    <p className="text-lg font-bold text-slate-700">career@squarcell.com</p>
                  </div>
                </a>

                {/* Address Card */}
                <div className="flex items-center gap-6 p-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Visit our Office</p>
                    <p className="text-lg font-bold text-slate-700">Ghansoli, Navi Mumbai</p>
                  </div>
                </div>
              </div>

              <hr className="my-10 border-slate-100" />

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/qskill/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all group"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a 
                  href="https://www.youtube.com/@QSkill-tutorial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-4 border-2 border-slate-100 rounded-2xl font-bold hover:bg-red-50 hover:border-red-100 hover:text-red-600 transition-all"
                >
                  <Youtube className="w-5 h-5" />
                  YouTube
                </a>
              </div>
            </div>

            {/* Quick Note */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2.5rem] text-white shadow-xl">
               <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                 <Phone className="w-5 h-5 text-blue-200" /> Support Hours
               </h4>
               <p className="opacity-90">Monday — Friday: 10:00 AM - 6:00 PM</p>
               <p className="opacity-90">Weekend: Email Support only</p>
            </div>
          </motion.div>

          {/* RIGHT: Modern Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="bg-white/70 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-blue-100/50 border border-white">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <Input placeholder="John Doe" className="h-14 rounded-2xl border-slate-100 bg-white/50 focus:bg-white focus:ring-blue-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="h-14 rounded-2xl border-slate-100 bg-white/50 focus:bg-white focus:ring-blue-500 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                  <Input placeholder="Inquiry about React Internship" className="h-14 rounded-2xl border-slate-100 bg-white/50 focus:bg-white focus:ring-blue-500 transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                  <Textarea placeholder="Tell us more about your career goals..." className="min-h-[150px] rounded-[2rem] border-slate-100 bg-white/50 focus:bg-white focus:ring-blue-500 transition-all p-6" />
                </div>

                <Button className="w-full h-16 rounded-[2rem] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-800 text-white text-lg font-bold shadow-lg shadow-blue-200 group transition-all duration-300">
                  Send Message
                  <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;