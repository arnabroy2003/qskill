import React, { useState, useEffect, useMemo } from 'react';

/**
 * ============================================================================
 * QSkill Privacy Policy Component (PrivacyPolicy.jsx)
 * ============================================================================
 * Operating Entity: Squarcell Resource India Pvt. Ltd.
 * 
 * DEVELOPER & LEGAL VERIFICATION CHECKLIST BEFORE FINAL PUBLICATION:
 * 1. Entity Details: Confirm exact registered legal company name, jurisdiction, and official corporate registration identifiers.
 * 2. Authentication: Verify Supabase Auth settings, OAuth scopes requested during Google Sign-In, and profile data collected.
 * 3. Services & Infrastructure: Verify exact Google services used (e.g., Google Drive, Sheets, Cloud Storage, or Gmail API), Supabase hosting region, and database access logs.
 * 4. Data Retention & Deletion: Verify actual data deletion workflows, Supabase Row-Level Security (RLS) policies, database backup lifecycles, and user-initiated account deletion endpoints.
 * 5. Cookies & Tracking: Verify if any session cookies, local storage tokens, or telemetry scripts are placed on client browsers.
 * 6. Children / Age Eligibility: Confirm the minimum age threshold for internship enrollment and whether guardian consent mechanisms are required.
 * 7. Contact Details: Confirm official privacy / grievance support inbox (currently pointing safely to existing /contact route).
 * 8. Status Note: The public student portfolio feature is NOT live. Ensure no public portfolio claims are activated until that feature ships.
 * ============================================================================
 */

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('about-qskill');

  const sections = useMemo(() => [
    { id: 'about-qskill', label: '1. About QSkill' },
    { id: 'information-we-collect', label: '2. Information We Collect' },
    { id: 'google-auth', label: '3. Google Sign-In and Authentication' },
    { id: 'how-we-use-information', label: '4. How We Use Information' },
    { id: 'supabase-google-services', label: '5. Supabase and Google Services' },
    { id: 'sharing-disclosure', label: '6. Sharing and Disclosure' },
    { id: 'data-security', label: '7. Data Security' },
    { id: 'retention-deletion', label: '8. Data Retention and Deletion' },
    { id: 'privacy-rights', label: '9. Your Privacy Rights' },
    { id: 'cookies-tracking', label: '10. Cookies and Similar Technologies' },
    { id: 'childrens-privacy', label: '11. Children’s Privacy' },
    { id: 'third-party-links', label: '12. Third-Party Links' },
    { id: 'policy-changes', label: '13. Changes to This Policy' },
    { id: 'contact-concerns', label: '14. Contact and Privacy Concerns' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i].id);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToAnchor = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // Accounts for potential sticky headers
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="qskill-privacy-page w-full bg-[#0A0D14] text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-14 md:pt-28 md:pb-20 border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            PRIVACY & DATA PROTECTION
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Your Data. Your Privacy.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-200">
              Our Responsibility.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            At QSkill, we use information to support internship applications, student accounts, learning activities, project submissions, and program-related communication. This Privacy Policy explains the information we may collect, how it may be used, the services involved, and the choices available to you.
          </p>

          <div className="max-w-2xl mx-auto p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
            Please read this policy carefully. Details that depend on the current implementation must be verified before this page is published as the official policy.
          </div>

          <div className="text-xs text-slate-400 font-mono">
            Last updated: October 2026
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA: TWO-COLUMN LAYOUT ON DESKTOP */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* STICKY TABLE OF CONTENTS (DESKTOP) */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 px-2">
                  Table of Contents
                </h2>
                <nav className="space-y-1 text-sm max-h-[calc(100vh-180px)] overflow-y-auto pr-1">
                  {sections.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => scrollToAnchor(e, item.id)}
                        className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          isActive
                            ? 'bg-indigo-600/15 text-indigo-300 border border-indigo-500/30'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* MOBILE QUICK-NAV ACCORDION/DROPDOWN ALTERNATIVE */}
            <div className="lg:hidden col-span-1 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <label htmlFor="mobile-toc-select" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Jump to Section:
              </label>
              <select
                id="mobile-toc-select"
                value={activeSection}
                onChange={(e) => scrollToAnchor(e, e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg p-2.5 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {sections.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* POLICY SECTIONS */}
            <main className="lg:col-span-8 space-y-14">
              {/* 1. ABOUT QSKILL */}
              <section id="about-qskill" className="scroll-mt-28">
                <div className="border-b border-slate-800 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    1. About QSkill
                  </h2>
                </div>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    QSkill is an online learning and internship platform operated under{' '}
                    <strong className="text-white font-medium">Squarcell Resource India Pvt. Ltd.</strong>{' '}
                    {/* DEV NOTE: Confirm exact registered legal entity name, CIN, and jurisdiction before publication. */}
                    Our core purpose is to provide technology students and aspiring software professionals with structured learning resources, facilitate practical internship applications, support project-based task development, and coordinate program communications.
                  </p>
                  <p>
                    We process information strictly to maintain student accounts, organize learning modules, manage task submissions, evaluate program completion criteria, and provide assistance to participants.
                  </p>
                </div>
              </section>

              {/* 2. INFORMATION WE COLLECT */}
              <section id="information-we-collect" className="scroll-mt-28">
                <div className="border-b border-slate-800 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    2. Information We Collect
                  </h2>
                </div>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Depending on the specific platform features and application forms you interact with, we may collect information in the following categories:
                  </p>

                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800">
                      <h3 className="text-sm font-semibold text-white mb-1">A. Information Provided Directly by Students</h3>
                      <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300">
                        <li>
                          <strong className="text-slate-200">Identity & Contact Details:</strong> Full name, email address, and communication preferences provided during registration or application.
                        </li>
                        <li>
                          <strong className="text-slate-200">Application Information:</strong> Program selections, educational background, technical interests, or relevant professional skills submitted on application forms.
                        </li>
                        <li>
                          <strong className="text-slate-200">Project Submissions & Assignments:</strong> Code repository links (such as GitHub links), task reports, project summaries, and evaluation records submitted during the internship roadmap.
                        </li>
                        <li>
                          <strong className="text-slate-200">Support Inquiries:</strong> Messages, feedback, or queries submitted when reaching out to our team.
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800">
                      <h3 className="text-sm font-semibold text-white mb-1">B. Technical & Account Information Processed Automatically</h3>
                      <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300">
                        <li>
                          <strong className="text-slate-200">Authentication Records:</strong> Account identifiers, session tokens, and sign-in metadata generated via Supabase Auth and Google Sign-In.
                        </li>
                        <li>
                          <strong className="text-slate-200">Infrastructure Logs:</strong> Technical network logs, including IP addresses, basic browser types, and timestamped API requests necessary to maintain platform availability, routing, and security.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* DEV NOTE: Verify that no unnecessary or sensitive categories (e.g., government IDs, financial account numbers) are ever requested or logged. */}
                  <p className="text-xs text-slate-400">
                    We do not solicit sensitive personal identifiers unless strictly necessary for verified official certification and permitted under applicable guidelines.
                  </p>
                </div>
              </section>

              {/* 3. GOOGLE SIGN-IN AND AUTHENTICATION */}
              <section id="google-auth" className="scroll-mt-28">
                <div className="border-b border-slate-800 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    3. Google Sign-In and Authentication
                  </h2>
                </div>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    QSkill provides convenient account authentication through Supabase Auth, including Google Sign-In. When you authenticate using Google:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-300">
                    <li>
                      We receive primary identity attributes associated with your basic public profile, typically comprising your verified email address, full name, and avatar picture URL.
                    </li>
                    <li>
                      QSkill does <strong className="text-white font-medium">not</strong> request or receive access to your private Google Drive files, Gmail messages, contact lists, calendar events, or any unrelated personal account information.
                    </li>
                    <li>
                      The authentication handshake is governed by Google’s applicable privacy policies and security controls. Once transmitted to QSkill, your account credentials and session records are handled in accordance with this Privacy Policy.
                    </li>
                  </ul>
                  {/* DEV NOTE: Confirm OAuth scopes configured in Google Cloud Console / Supabase Auth (e.g., openid, email, profile only). Confirm token refresh and sign-out invalidation workflows. */}
                </div>
              </section>

              {/* 4. HOW WE USE INFORMATION */}
              <section id="how-we-use-information" className="scroll-mt-28">
                <div className="border-b border-slate-800 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    4. How We Use Information
                  </h2>
                </div>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    We process student data strictly for educational and operational purposes directly connected with our internship and learning services:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="p-3 rounded-lg bg-slate-900/30 border border-slate-800/80">
                      <strong className="text-slate-200 block mb-1">Internship Administration</strong>
                      Reviewing applications, admitting candidates, and tracking progress through learning roadmaps.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/30 border border-slate-800/80">
                      <strong className="text-slate-200 block mb-1">Account Management</strong>
                      Establishing user logins, authenticating sessions, and maintaining student profile status.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/30 border border-slate-800/80">
                      <strong className="text-slate-200 block mb-1">Project & Task Review</strong>
                      Receiving project links, managing submissions, and administering task evaluation where applicable.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/30 border border-slate-800/80">
                      <strong className="text-slate-200 block mb-1">Certification & Verification</strong>
                      Verifying completion eligibility and issuing verifiable internship completion certificates.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/30 border border-slate-800/80">
                      <strong className="text-slate-200 block mb-1">Student Communication</strong>
                      Transmitting administrative notices, roadmap updates, and responses to support questions.
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/30 border border-slate-800/80">
                      <strong className="text-slate-200 block mb-1">Platform Protection</strong>
                      Detecting suspicious traffic, preventing automated abuse, and protecting participant safety.
                    </div>
                  </div>
                  <p className="text-xs text-slate-400">
                    Administrative program communications related to your application, roadmap, or certificates are essential to service delivery and are handled separately from any optional promotional materials.
                  </p>
                </div>
              </section>

              {/* 5. SUPABASE AND GOOGLE SERVICES */}
              <section id="supabase-google-services" className="scroll-mt-28">
                <div className="border-b border-slate-800 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    5. Supabase and Google Services
                  </h2>
                </div>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    QSkill utilizes established technology infrastructure providers to host platform components and manage data flows securely:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-300">
                    <li>
                      <strong className="text-white font-medium">Supabase:</strong> Provides cloud authentication services (Supabase Auth) and relational database infrastructure used to store account records, application details, and task submission references.
                    </li>
                    <li>
                      <strong className="text-white font-medium">Google Services:</strong> Supports authentication (Google Sign-In) and designated productivity or communication workflows used in administering program operations.
                    </li>
                  </ul>
                  <p className="text-xs text-slate-400">
                    Each third-party infrastructure provider processes information under their respective standard terms and operational privacy notices to maintain system uptime, message transmission, and database integrity.
                  </p>
                  {/* DEV NOTE: Confirm exact Google services used (e.g., Google Workspace/Drive/Sheets vs GCP APIs). Verify database server region (e.g., AWS Mumbai / ap-south-1 on Supabase). */}
                </div>
              </section>

              {/* 6. SHARING AND DISCLOSURE */}
              <section id="sharing-disclosure" className="scroll-mt-28">
                <div className="border-b border-slate-800 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    6. Sharing and Disclosure
                  </h2>
                </div>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    We treat student records with care. We do not sell your personal data. We disclose information only under specific, bounded operational conditions:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-slate-300">
                    <li>
                      <strong className="text-slate-200">Authorized Personnel & Evaluators:</strong> Authorized instructors, technical mentors, and staff members bound by confidentiality who review task submissions and evaluate student milestones.
                    </li>
                    <li>
                      <strong className="text-slate-200">Technical Service Providers:</strong> Specialized infrastructure partners (such as database hosting and authentication providers) strictly for executing platform tasks.
                    </li>
                    <li>
                      <strong className="text-slate-200">Legal Compliance & Security:</strong> Relevant authorities or legal representatives where disclosure is mandatory pursuant to court orders, applicable law, or to investigate platform security compromises.
                    </li>
                  </ul>
                  <div className="p-3.5 rounded-lg bg-indigo-950/20 border border-indigo-500/20 text-xs text-slate-300">
                    <strong className="text-indigo-300 block mb-1">Portfolio & Public Showcase Status:</strong>
                    The student portfolio and public profile publishing feature is currently not live. Submitting code or project links for evaluation does not publish them on a public web profile. Should public portfolio capabilities be released in the future, explicit configuration options and policy updates will be provided prior to launch.
                  </div>
                </div>
              </section>

              {/* 7. DATA SECURITY */}
              <section id="data-security" className="scroll-mt-28">
                <div className="border-b border-slate-800 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    7. Data Security
                  </h2>
                </div>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    We apply reasonable technical and organizational safeguards appropriate to the sensitivity of student information to protect against unauthorized access, loss, alteration, or disclosure.
                  </p>
                  <p>
                    These measures include role-based administrative access, secure HTTPS transmission protocols, authenticated sessions, and managed cloud infrastructure controls.
                  </p>
                  {/* DEV NOTE: Verify database Row Level Security (RLS) is active on all Supabase tables holding user profile, application, and submission rows. Ensure API service role keys remain strictly server-side. */}
                  <p className="text-xs text-slate-400">
                    Please recognize that no Internet transmission or digital database system can guarantee absolute invulnerability. We encourage students to protect their login accounts and promptly report any observed security anomalies.
                  </p>
                </div>
              </section>

              {/* 8. DATA RETENTION AND DELETION */}
              <section id="retention-deletion" className="scroll-mt-28">
                <div className="border-b border-slate-800 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    8. Data Retention and Deletion
                  </h2>
                </div>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    We retain student and application records only for as long as necessary to administer active internship tracks, maintain academic records, provide ongoing certificate verification capabilities, and satisfy applicable accounting or administrative obligations.
                  </p>
                  <p>
                    Students may request the closure of their account or the deletion of submitted profile information by contacting our administrative desk. Upon receipt of a verified request, we initiate deletion or anonymization, subject to records required for verifiable certificates or legitimate compliance purposes.
                  </p>
                  {/* DEV NOTE: Verify database cascading deletion workflows on Supabase auth.users -> public.profiles / applications. Confirm policy for preserving issued certificate verification IDs. */}
                </div>
              </section>

              {/* 9. YOUR PRIVACY RIGHTS */}
              <section id="privacy-rights" className="scroll-mt-28">
                <div className="border-b border-slate-800 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    9. Your Privacy Rights
                  </h2>
                </div>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Subject to applicable laws and legitimate verification procedures, students hold rights concerning their personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-300">
                    <li><strong className="text-slate-200">Access:</strong> Inquire about the personal information we maintain regarding your account.</li>
                    <li><strong className="text-slate-200">Correction:</strong> Request corrections to inaccurate, out-of-date, or incomplete profile details.</li>
                    <li><strong className="text-slate-200">Erasure:</strong> Request the deletion of your account and personal data, subject to lawful retention exceptions.</li>
                    <li><strong className="text-slate-200">Withdrawal of Consent:</strong> Withdraw consent previously provided for discretionary communications at any time.</li>
                  </ul>
                  <p className="text-xs text-slate-400">
                    To exercise these rights, please contact our team through the designated contact channels. We verify the identity of requesting users prior to fulfilling requests to prevent unauthorized account tampering.
                  </p>
                </div>
              </section>

              {/* 10. COOKIES AND SIMILAR TECHNOLOGIES */}
              <section id="cookies-tracking" className="scroll-mt-28">
                <div className="border-b border-slate-800 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    10. Cookies and Similar Technologies
                  </h2>
                </div>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    QSkill utilizes essential session storage, local storage tokens, and cookies necessary to preserve user authentication state, protect session security, and ensure smooth navigation between portal pages.
                  </p>
                  {/* DEV NOTE: Inspect if third-party analytics libraries (e.g. Google Analytics / Clarity) or advertising pixels are currently bundled. Adjust notice if added in the future. */}
                  <p>
                    We do not deploy third-party advertising cookies for cross-site behavioral tracking. You can adjust your browser settings to restrict or decline cookies, although doing so may impair your ability to stay logged in during internship sessions.
                  </p>
                </div>
              </section>

              {/* 11. CHILDREN'S PRIVACY */}
              <section id="childrens-privacy" className="scroll-mt-28">
                <div className="border-b border-slate-800 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    11. Children’s Privacy
                  </h2>
                </div>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    QSkill programs are designed for senior secondary, diploma, undergraduate, and postgraduate students seeking practical software development experience.
                  </p>
                  <p>
                    Participants must meet the eligibility criteria established for their respective programs. Any participation by minors must occur in full compliance with applicable laws, including parental or guardian awareness and consent where mandated. If we discover that personal data of a minor has been gathered without appropriate legal authorization, we will take steps to remove such records.
                  </p>
                  {/* DEV NOTE: Confirm whether minimum age is set to 16+ or 18+ in internship application terms, and implement guardian consent flow if open to younger minors. */}
                </div>
              </section>

              {/* 12. THIRD-PARTY LINKS */}
              <section id="third-party-links" className="scroll-mt-28">
                <div className="border-b border-slate-800 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    12. Third-Party Links
                  </h2>
                </div>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Our learning roadmaps and platform interfaces may include links to external resources, documentation hubs, code repositories (such as GitHub), educational content providers, or professional networking platforms (such as LinkedIn).
                  </p>
                  <p>
                    These external websites operate under independent terms and privacy notices. QSkill does not control, supervise, or accept liability for the data practices or content of third-party platforms. We encourage students to review the privacy terms of any third-party service they visit.
                  </p>
                </div>
              </section>

              {/* 13. CHANGES TO THIS POLICY */}
              <section id="policy-changes" className="scroll-mt-28">
                <div className="border-b border-slate-800 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    13. Changes to This Policy
                  </h2>
                </div>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    We may periodically update this Privacy Policy to reflect modifications in our educational programs, underlying cloud technologies, service arrangements, or applicable legal requirements.
                  </p>
                  <p>
                    Any revised version will be published directly on this page with an updated revision date. Continued participation in our programs following updates signifies awareness of the updated policy terms.
                  </p>
                </div>
              </section>

              {/* 14. CONTACT AND PRIVACY CONCERNS */}
              <section id="contact-concerns" className="scroll-mt-28">
                <div className="border-b border-slate-800 pb-3 mb-5">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    14. Contact and Privacy Concerns
                  </h2>
                </div>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    If you have questions, feedback, or concerns regarding this Privacy Policy or how your data is handled, you are encouraged to connect with our administrative team:
                  </p>

                  <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 max-w-xl">
                    <h3 className="text-sm font-semibold text-white mb-2">QSkill Privacy Inquiries</h3>
                    <p className="text-xs text-slate-400 mb-4">
                      Operated under Squarcell Resource India Pvt. Ltd.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      >
                        Visit Contact Page
                      </a>
                    </div>
                  </div>

                  {/* DEV NOTE: Once official privacy/grievance officer designation and dedicated email (e.g. privacy@qskill.in) are finalized, update this block with verified contact information. */}
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE / DISCLAIMER */}
      <aside className="py-6 border-t border-slate-800/80 bg-[#080B10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
            This document sets forth QSkill's privacy and data protection framework as operated under Squarcell Resource India Pvt. Ltd. Specific implementation parameters remain subject to confirmation prior to binding formal publication.
          </p>
        </div>
      </aside>
    </div>
  );
}