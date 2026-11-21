import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Globe,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Camera,
  Image as ImageIcon,
  UserCheck,
  FileCheck,
  AlertCircle,
  ExternalLink,
  Sparkles,
  Layers,
  ChevronRight,
  Clock,
  ShieldCheck,
  Wallet
} from 'lucide-react';

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

// Hardcoded opportunities dataset — easily extendable when more projects launch
const OPPORTUNITIES_DATA = [
  {
    id: 'historical-current-selfie-collection',
    title: 'Historical and Current Selfie Image Data Collection Project',
    category: 'Paid Projects',
    badgeCategory: 'Paid Project',
    status: 'Applications Open',
    workMode: 'Remote',
    domain: 'AI Data Collection',
    payment: 'Incentive-based (as per approved submissions)',
    shortDescription:
      'We are collecting historical and current selfie images to support our image data collection project. Participants are required to provide both previously captured selfies and newly captured images through the designated tool.',
    applyUrl: 'https://forms.gle/8AX8NJQjFbHKYZVY6',
    imageRequirements: [
      {
        number: '1.',
        title: 'Historical Selfies',
        subtitle: null,
        items: [
          'Target: Up to 23 images.',
          'Minimum requirement: 12 images.',
          'Images must be older than 6 months.'
        ]
      },
      {
        number: '1.',
        title: 'Current Head Pose Selfies',
        subtitle: 'Capture a total of 6 current selfies following the required head poses:',
        items: [
          'Pitch Up',
          'Pitch Down',
          'Yaw Right',
          'Yaw Left',
          'Backup Yaw Right',
          'Backup Yaw Left'
        ]
      },
      {
        number: '1.',
        title: 'Current Natural Front-Face Selfies',
        subtitle: null,
        items: [
          'Capture 4 natural front-facing selfies.',
          'Each image should be taken with a different background.'
        ]
      }
    ],
    submissionProcess: {
      intro: 'Complete the registration process by providing the following details:',
      fields: [
        'Username',
        'Full Name',
        'Email Address',
        'Gender',
        'Date of Birth'
      ],
      note: 'Note: Providing a phone number is optional.'
    },
    submissionInstructions: [
      'Select and upload your eligible historical selfies from your phone gallery or Google Photos.',
      'Capture and upload 6 current head-pose selfies through the tool.',
      'Capture and upload 4 natural front-facing selfies, ensuring that each image has a different background.',
      'Review all uploaded images and information carefully, then complete the final submission.',
      'After successfully submitting the data, take a screenshot of the final submission confirmation page and share it as required.'
    ],
    importantInfo: [
      'All historical images must be older than 6 months.',
      'Historical image requirement: minimum 12, target 23.',
      'Current image requirement: 10 images in total.',
      'Phone number is optional.'
    ]
  },
  {
    id: 'data-annotation',
    title: 'Data Annotation',
    category: 'Paid Projects',
    badgeCategory: 'Paid Project',
    status: 'Coming Soon',
    isComingSoon: true,
    workMode: 'Remote',
    domain: 'Computer Vision',
    payment: 'Task-based (Upcoming)',
    shortDescription:
      'Video frame annotation, bounding box labeling, and object attribute tagging for computer vision and machine learning datasets.',
    imageRequirements: [],
    submissionProcess: {
      intro: 'This project is opening soon. Registration and submission guidelines will be released shortly.',
      fields: [],
      note: ''
    },
    submissionInstructions: [],
    importantInfo: [
      'Project opening soon.',
      'Remote work with flexible hours.',
      'Task-based incentive compensation.'
    ]
  }
];

const FILTER_CATEGORIES = [
  'All Opportunities',
  'Paid Projects',
  'Freelance',
  'Internships',
  'Jobs'
];

// Reusable Opportunity Card Sub-component
const OpportunityCard = ({ project, onSelect }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35 }}
      className="group bg-white rounded-[2rem] border border-slate-200/80 p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_50px_rgba(99,41,103,0.08)] hover:border-[#632967]/30 transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        {/* Left & Center Info */}
        <div className="space-y-4 flex-1">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#632967]/10 text-[#632967] border border-[#632967]/20">
              <Briefcase className="w-3.5 h-3.5" />
              {project.badgeCategory}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/70">
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              {project.workMode}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border ${
                project.isComingSoon || project.status === 'Coming Soon'
                  ? 'bg-amber-50 text-amber-700 border-amber-200/70'
                  : 'bg-emerald-50 text-emerald-700 border-emerald-200/70'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  project.isComingSoon || project.status === 'Coming Soon'
                    ? 'bg-amber-500'
                    : 'bg-emerald-500 animate-pulse'
                }`}
              />
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#632967] transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Metadata Strip */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
            <div className="bg-slate-50/80 border border-slate-100 rounded-2xl px-4 py-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Domain
              </span>
              <span className="text-sm font-bold text-slate-800 mt-0.5 block">
                {project.domain}
              </span>
            </div>
            <div className="bg-slate-50/80 border border-slate-100 rounded-2xl px-4 py-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Work Mode
              </span>
              <span className="text-sm font-bold text-slate-800 mt-0.5 block">
                {project.workMode}
              </span>
            </div>
            <div className="bg-slate-50/80 border border-slate-100 rounded-2xl px-4 py-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Payment
              </span>
              <span className="text-sm font-bold text-slate-800 mt-0.5 block">
                {project.payment}
              </span>
            </div>
          </div>
        </div>

        {/* Right Action Column */}
        <div className="flex flex-col sm:flex-row lg:flex-col justify-end lg:justify-between items-stretch sm:items-center lg:items-end gap-3 pt-2 lg:pt-0 lg:min-w-[200px]">
          {project.isComingSoon || project.status === 'Coming Soon' ? (
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 text-slate-400 font-bold text-sm border border-slate-200/80 cursor-not-allowed select-none shadow-none"
            >
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Coming Soon..</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#632967] hover:bg-[#4e1f52] text-white font-bold text-sm shadow-lg shadow-[#632967]/20 hover:shadow-[#632967]/30 transition-all duration-200 active:scale-[0.98]"
            >
              <span>View Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

// Detailed Project View Sub-component
const ProjectDetailView = ({ project, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-24"
    >
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
          <li>
            <button
              type="button"
              onClick={onBack}
              className="hover:text-[#632967] transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </li>
          <li>
            <button
              type="button"
              onClick={onBack}
              className="hover:text-[#632967] transition-colors"
            >
              Opportunities
            </button>
          </li>
          <li>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </li>
          <li className="text-[#632967] font-bold" aria-current="page">
            Project Details
          </li>
        </ol>
      </nav>

      {/* Back to Opportunities Action */}
      <div className="mb-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#632967] bg-white border border-slate-200/80 hover:border-[#632967]/30 px-4 py-2.5 rounded-xl shadow-sm transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Opportunities</span>
        </button>
      </div>

      {/* Main Header Card */}
      <div className="bg-white rounded-[2.25rem] border border-slate-200/80 p-6 sm:p-10 shadow-[0_12px_40px_rgba(15,23,42,0.04)] mb-8">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#632967]/10 text-[#632967] border border-[#632967]/20">
            <Briefcase className="w-3.5 h-3.5" />
            {project.badgeCategory}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            {project.workMode}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/70">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {project.status}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          {project.title}
        </h1>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
          {project.shortDescription}
        </p>

        {/* Key Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              <Layers className="w-3.5 h-3.5 text-[#632967]" />
              <span>Category</span>
            </div>
            <p className="text-sm font-bold text-slate-900">{project.badgeCategory}</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              <Globe className="w-3.5 h-3.5 text-[#632967]" />
              <span>Work Mode</span>
            </div>
            <p className="text-sm font-bold text-slate-900">{project.workMode}</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#632967]" />
              <span>Domain</span>
            </div>
            <p className="text-sm font-bold text-slate-900">{project.domain}</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              <Wallet className="w-3.5 h-3.5 text-[#632967]" />
              <span>Payment</span>
            </div>
            <p className="text-sm font-bold text-slate-900">{project.payment}</p>
          </div>
        </div>
      </div>

      {/* Content Sections Stack */}
      <div className="space-y-8">
        {/* Section: Image Requirements */}
        <section className="bg-white rounded-[2.25rem] border border-slate-200/80 p-6 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-[#632967]/10 text-[#632967] flex items-center justify-center shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Image Requirements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.imageRequirements.map((req, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/60 flex flex-col"
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-[#632967] text-white text-xs font-bold shrink-0">
                    {req.number.replace('.', '')}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {req.title}
                  </h3>
                </div>

                {req.subtitle && (
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                    {req.subtitle}
                  </p>
                )}

                <ul className="space-y-2.5 mt-auto">
                  {req.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#632967] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Submission Process & Submission Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Submission Process */}
          <section className="lg:col-span-5 bg-white rounded-[2.25rem] border border-slate-200/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#632967]/10 text-[#632967] flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Submission Process
                </h2>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {project.submissionProcess.intro}
              </p>

              <ul className="space-y-3 mb-6">
                {project.submissionProcess.fields.map((field, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-semibold text-slate-800"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#632967]" />
                    <span>{field}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#632967]/5 border border-[#632967]/15 text-xs sm:text-sm font-medium text-[#632967]">
              {project.submissionProcess.note}
            </div>
          </section>

          {/* Submission Instructions */}
          <section className="lg:col-span-7 bg-white rounded-[2.25rem] border border-slate-200/80 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-[#632967]/10 text-[#632967] flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Submission Instructions
              </h2>
            </div>

            <ol className="space-y-4">
              {project.submissionInstructions.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#632967] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Visually Distinct Important Project Information Area */}
        <section
          aria-labelledby="important-info-heading"
          className="rounded-[2.25rem] bg-gradient-to-br from-[#632967]/[0.06] via-purple-50/70 to-slate-50 border-2 border-[#632967]/25 p-6 sm:p-9"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-[#632967] text-white flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h2
              id="important-info-heading"
              className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight"
            >
              Important Project Information
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {project.importantInfo.map((info, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-[#632967]/15 shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#632967] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800 leading-snug">
                  {info}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Application CTA */}
        <section className="rounded-[2.5rem] bg-[#632967] text-white p-8 sm:p-12 relative overflow-hidden shadow-xl shadow-[#632967]/20">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-purple-950/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                Ready to Participate?
              </h2>
              <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
                Complete your registration and follow the submission guidelines to participate in this project.
              </p>
            </div>

            <a
              href={project.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-[#632967] hover:bg-purple-50 font-extrabold text-sm sm:text-base shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Apply for This Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

// Main Opportunities Section Component
export default function OpportunitiesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All Opportunities');
  const [activeProject, setActiveProject] = useState(null);
  const listingRef = useRef(null);
  const sectionTopRef = useRef(null);

  const handleExploreClick = () => {
    listingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSelectProject = (project) => {
    setActiveProject(project);
    sectionTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleBackToOpportunities = () => {
    setActiveProject(null);
    sectionTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Filter logic: 'All Opportunities' and 'Paid Projects' show active paid projects
  const filteredOpportunities = OPPORTUNITIES_DATA.filter((item) => {
    if (selectedCategory === 'All Opportunities') return true;
    return item.category === selectedCategory;
  });

  const activeCount = OPPORTUNITIES_DATA.filter((item) => item.status === 'Applications Open').length;

  return (
    <div
      ref={sectionTopRef}
      className="bg-[#fcfdfe] text-slate-900 min-h-screen selection:bg-[#632967]/15 selection:text-[#632967]"
    >
      <AnimatePresence mode="wait">
        {activeProject ? (
          <ProjectDetailView
            key="detail-view"
            project={activeProject}
            onBack={handleBackToOpportunities}
          />
        ) : (
          <motion.div
            key="listing-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* A. HERO SECTION */}
            <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-24 px-4 sm:px-6 overflow-hidden border-b border-slate-100">
              {/* Subtle Ambient Background Accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-b from-[#632967]/[0.07] via-purple-50/40 to-transparent blur-3xl -z-10 pointer-events-none" />

              <div className="max-w-5xl mx-auto text-center">
                {/* Small Label + Highlighted Count */}
                <div className="inline-flex flex-wrap items-center justify-center gap-2.5 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#632967]/10 border border-[#632967]/20 text-[#632967] text-xs font-extrabold uppercase tracking-[0.18em]">
                    <Sparkles className="w-3.5 h-3.5" />
                    QSKILL OPPORTUNITIES
                  </span>

                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {activeCount} Active {activeCount === 1 ? 'Opportunity' : 'Opportunities'}
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
                  Discover Opportunities.{' '}
                  <span className="text-[#632967]">Build Your Future.</span>
                </h1>

                {/* Supporting Text */}
                <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                  Explore real-world projects, gain practical experience and turn your skills into meaningful opportunities with QSkill.
                </p>

                {/* Primary CTA */}
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={handleExploreClick}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#632967] hover:bg-[#4e1f52] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#632967]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <span>Explore Opportunities</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* B & C. OPPORTUNITY FILTERS + PROJECT LISTING */}
            <section
              ref={listingRef}
              className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-24 scroll-mt-16"
            >
              {/* Section Header & Filter Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Open Opportunities
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Filter by category to view currently open roles and projects.
                  </p>
                </div>

                {/* Category Filter Pills */}
                <div
                  role="tablist"
                  aria-label="Opportunity categories"
                  className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar"
                >
                  {FILTER_CATEGORIES.map((category) => {
                    const isSelected = selectedCategory === category;
                    return (
                      <button
                        key={category}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setSelectedCategory(category)}
                        className={`shrink-0 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border ${
                          isSelected
                            ? 'bg-[#632967] text-white border-[#632967] shadow-md shadow-[#632967]/20'
                            : 'bg-white text-slate-600 border-slate-200/80 hover:border-[#632967]/40 hover:text-[#632967]'
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Cards or Empty State */}
              <div className="min-h-[260px]">
                <AnimatePresence mode="wait">
                  {filteredOpportunities.length > 0 ? (
                    <div key="results" className="space-y-6">
                      {filteredOpportunities.map((project) => (
                        <OpportunityCard
                          key={project.id}
                          project={project}
                          onSelect={handleSelectProject}
                        />
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      key="empty-state"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white rounded-[2rem] border border-slate-200/80 p-10 sm:p-14 text-center shadow-xs"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#632967]/10 text-[#632967] flex items-center justify-center mx-auto mb-5">
                        <Clock className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                        {selectedCategory}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                        More opportunities are coming soon. Stay connected with QSkill for upcoming openings.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* "More opportunities coming soon" Section Beneath Listing */}
              <div className="mt-14 rounded-[2rem] bg-slate-50 border border-slate-200/70 p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 text-[#632967] flex items-center justify-center shrink-0 shadow-xs">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      More opportunities coming soon
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                      We regularly partner with organizations to bring paid projects, freelance gigs, internships, and entry-level roles to QSkill learners.
                    </p>
                  </div>
                </div>

                <span className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-[#632967]" />
                  New Openings Added Regularly
                </span>
              </div>
            </section>

            {/* D. STAY UPDATED WITH QSKILL (WHATSAPP CHANNEL SECTION) */}
            <section
              aria-label="Stay Updated with QSkill"
              className="max-w-6xl mx-auto px-4 sm:px-6 pb-24"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#632967]/[0.06] via-white to-emerald-50/40 border border-[#632967]/15 p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(99,41,103,0.06)]">
                {/* Decorative Ambient Background Blurs */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#632967]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Column: Content, CTA & Supporting Text */}
                  <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#632967]/10 border border-[#632967]/20 text-[#632967] text-xs font-extrabold uppercase tracking-[0.2em]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      STAY CONNECTED
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                      More Opportunities.{' '}
                      <span className="text-[#632967] block sm:inline">More Possibilities.</span>
                    </h2>

                    {/* Description */}
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                      New paid projects, freelance assignments, internships and career opportunities are coming to QSkill. Stay connected with our official WhatsApp Opportunities Channel so you never miss an update.
                    </p>

                    {/* CTA Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                      <a
                        href="https://whatsapp.com/channel/0029Vb8g4XdLikgBwyfg990o"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#632967] hover:bg-[#4e1f52] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-[#632967]/25 hover:shadow-2xl hover:shadow-[#632967]/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 text-white shadow-xs">
                          <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                        </div>
                        <span>Follow Official QSkill Channel</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    {/* Short Supporting Message */}
                    <p className="text-xs sm:text-sm text-slate-500 font-medium flex items-center justify-center lg:justify-start gap-2 pt-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Be the first to know about new project openings and opportunities.</span>
                    </p>
                  </div>

                  {/* Right Column: WhatsApp Channel Card Preview */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-[0_12px_36px_rgba(15,23,42,0.06)] relative group hover:border-[#632967]/30 transition-all duration-300">
                      {/* Top Header Mockup */}
                      <div className="flex items-center gap-4 pb-5 border-b border-slate-100">
                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#25D366] to-emerald-400 p-0.5 shadow-md shadow-emerald-500/20 shrink-0">
                          <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-[#25D366]">
                            <WhatsAppIcon className="w-7 h-7 fill-[#25D366]" />
                          </div>
                          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <h3 className="font-extrabold text-slate-900 text-base truncate">
                              QSkill Opportunities
                            </h3>
                            <span title="Verified Channel">
                              <ShieldCheck className="w-4 h-4 text-[#632967] shrink-0" />
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Official WhatsApp Channel
                          </p>
                        </div>
                      </div>

                      {/* Channel Highlights List */}
                      <div className="py-5 space-y-3">
                        <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50/80 rounded-xl px-3.5 py-2.5 border border-slate-100">
                          <span className="w-6 h-6 rounded-lg bg-[#632967]/10 text-[#632967] flex items-center justify-center shrink-0">
                            <Briefcase className="w-3.5 h-3.5" />
                          </span>
                          <span>Paid Projects & AI Data Tasks</span>
                        </div>

                        <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50/80 rounded-xl px-3.5 py-2.5 border border-slate-100">
                          <span className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                            <Sparkles className="w-3.5 h-3.5" />
                          </span>
                          <span>Freelance Assignments & Internships</span>
                        </div>

                        <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50/80 rounded-xl px-3.5 py-2.5 border border-slate-100">
                          <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                          <span>Direct Application Links & Alerts</span>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Active Alerts
                        </span>
                        <span>Free to Follow</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}