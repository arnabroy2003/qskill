import React, { useState } from 'react';

export default function TrustTransparency() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      num: '01',
      title: 'Apply',
      description: 'Fill out the application form and choose your internship program.',
    },
    {
      num: '02',
      title: 'Join the Community',
      description: 'Get access to the student community for program updates, announcements, and guidance.',
    },
    {
      num: '03',
      title: 'Learn from Us',
      description: 'Follow the curated learning roadmap and develop practical skills through learning resources.',
    },
    {
      num: '04',
      title: 'Submit Projects',
      description:
        'Complete the assigned tasks and submit your projects for evaluation. Task evaluation and personalized feedback are associated with the applicable evaluation process.',
    },
    {
      num: '05',
      title: 'Complete Your Internship',
      description:
        'Complete the applicable internship requirements. Eligible students who meet the completion criteria can receive the internship certificate under the certificate policy described below.',
    },
  ];

  const comparisonRows = [
    {
      feature: 'Join the internship',
      unpaid: 'Available',
      paid: 'Available',
    },
    {
      feature: 'Access included learning resources',
      unpaid: 'Available',
      paid: 'Available',
    },
    {
      feature: 'Complete assigned learning tasks',
      unpaid: 'Available',
      paid: 'Available',
    },
    {
      feature: 'Build and showcase projects',
      unpaid: 'Available',
      paid: 'Available',
    },
    {
      feature: 'Applicable task evaluation and feedback',
      unpaid: 'Standard program workflow (individual review not included)',
      paid: 'Included as described in the program policy',
    },
    {
      feature: 'QSkill internship certificate',
      unpaid: 'Not included',
      paid: 'Available upon meeting completion requirements',
    },
    {
      feature: 'Lifetime certificate verification',
      unpaid: 'Not included',
      paid: 'Available for the issued certificate',
    },
  ];

  const expectations = [
    {
      title: 'Clear Program Information',
      description:
        'We aim to communicate the program structure, task expectations, and completion requirements clearly.',
    },
    {
      title: 'Transparent Contribution Policy',
      description:
        'Students should understand what the optional ₹49 contribution covers before choosing whether to pay.',
    },
    {
      title: 'Practical Learning Opportunities',
      description:
        'Our internship programs are designed around learning resources, assigned tasks, and project development.',
    },
    {
      title: 'Student Work and Professional Growth',
      description:
        'Students can use their completed projects to demonstrate skills on their resumes, portfolios, and professional profiles.',
    },
  ];

  const faqs = [
    {
      q: 'Is joining a QSkill internship free?',
      a: 'Yes. Joining and participating in the learning process are free. The optional ₹49 contribution is associated with certificate generation and the applicable evaluation services.',
    },
    {
      q: 'Do I have to pay ₹49 to complete my internship?',
      a: 'No. You can continue learning, complete your assigned tasks, build projects, and showcase your work without paying the optional contribution.',
    },
    {
      q: 'What does the ₹49 contribution cover?',
      a: 'It contributes toward task evaluation, applicable feedback, server and database costs, certificate generation, and lifetime certificate verification for issued certificates.',
    },
    {
      q: 'Will I receive a certificate if I do not pay?',
      a: 'The certificate is associated with the optional contribution and applicable completion requirements. You can still participate and showcase your project work without receiving the QSkill certificate.',
    },
    {
      q: 'Does paying ₹49 guarantee a certificate?',
      a: 'No. Certificate issuance remains subject to the applicable internship completion requirements.',
    },
    {
      q: 'Can I add my internship experience to LinkedIn and my resume without a certificate?',
      a: 'You can describe your actual learning experience and showcase your completed projects honestly. Do not claim to hold a certificate you have not received.',
    },
    {
      q: 'How can I explore student work and internship experiences?',
      a: 'You can explore public QSkill-related posts on LinkedIn using the link provided in the Student Projects & Outcomes section.',
    },
    {
      q: 'How can I contact QSkill with a question or concern?',
      a: 'You can reach out through our official contact channels at /contact or email our support desk at services@qskill.in.',
    },
  ];

  return (
    <div className="qskill-trust-page w-full bg-[#0A0D14] text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-6">
            OUR COMMITMENT TO STUDENTS
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Built on Learning.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-200">
              Driven by Transparency.
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-10">
            At QSkill, we believe every student deserves an opportunity to learn, build practical skills, and showcase their work. We are committed to making our internship process, participation requirements, certificate policy, and student experience clear from the beginning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="/internship"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-sm"
            >
              Explore Our Internships
            </a>
            <a
              href="#student-projects"
              onClick={(e) => scrollToSection(e, 'student-projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Explore Student Projects
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-xs sm:text-sm font-medium text-slate-200">Free Internship Participation</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-xs sm:text-sm font-medium text-slate-200">Learning Resources Included</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
              <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium text-slate-200">Optional ₹49 Certificate Contribution</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE */}
      <section className="py-16 md:py-20 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">About QSkill</h2>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                QSkill is a learning and internship platform operated under Squarcell Resource India Pvt. Ltd. We aim to help aspiring developers and technology enthusiasts develop practical skills through structured learning, project-based tasks, and opportunities to showcase their work.
              </p>
              <p>
                Our internship experience focuses on learning by doing, completing practical assignments, receiving task feedback where applicable, and building a portfolio of work that students can share professionally.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4">Company Information</h3>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="p-3.5 rounded-lg bg-slate-950/50 border border-slate-800">
                <dt className="text-slate-400 text-xs">Platform</dt>
                <dd className="font-semibold text-white mt-1">QSkill</dd>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-950/50 border border-slate-800">
                <dt className="text-slate-400 text-xs">Operating entity</dt>
                <dd className="font-semibold text-white mt-1">Squarcell Resource India Pvt. Ltd.</dd>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-950/50 border border-slate-800">
                <dt className="text-slate-400 text-xs">Focus</dt>
                <dd className="font-semibold text-white mt-1">Skill development, project-based learning, and internships</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW OUR INTERNSHIP PROGRAM WORKS */}
      <section className="py-16 md:py-24 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              A Clear Path from Application to Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Here's what students can expect when they join a QSkill internship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="flex flex-col p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    Step {step.num}
                  </span>
                  {idx < steps.length - 1 && (
                    <span className="hidden md:inline text-slate-600 text-xs font-mono">→</span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed flex-grow">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg bg-slate-900/30 border border-slate-800 text-xs text-slate-400 text-center">
            Note: Task evaluation and feedback correspond to the applicable evaluation arrangements, and certificate issuance is dependent on meeting published completion criteria.
          </div>
        </div>
      </section>

      {/* SECTION 4: FEES & CERTIFICATE POLICY */}
      <section className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Learning Is Free. Certification Is Optional.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              We want students to have the opportunity to learn and build projects without making a payment a prerequisite for participation.
            </p>
          </div>

          {/* Cards A, B, C */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {/* CARD A */}
            <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-2">Participation</span>
                <h3 className="text-lg font-bold text-white mb-3">100% Free to Join</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Joining the internship, accessing the included learning resources, participating in the learning process, completing tasks, and building practical projects are free.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                There is no mandatory ₹49 payment to participate in the internship or continue learning.
              </div>
            </div>

            {/* CARD B */}
            <div className="p-6 rounded-xl bg-indigo-950/20 border border-indigo-500/30 flex flex-col justify-between relative">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Optional
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 block mb-2">Certification</span>
                <h3 className="text-lg font-bold text-white mb-1">Optional Certificate & Evaluation Contribution</h3>
                <div className="text-2xl font-bold text-white my-3">
                  ₹49 <span className="text-xs font-normal text-slate-400">one-time contribution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Students who want the certificate and applicable evaluation services are requested to contribute ₹49 toward the operational costs associated with task evaluation, feedback, server and database usage, certificate generation, and lifetime certificate verification.
                </p>
                <ul className="text-xs text-slate-300 space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    <span>The contribution is completely optional.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    <span>Students can participate in the internship without paying.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    <span>Students who do not pay can still learn, complete projects, and showcase their work.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400">•</span>
                    <span>The ₹49 contribution is associated with evaluation services and certification, not access to the internship.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-indigo-900/40 text-xs text-slate-400">
                Not a compulsory enrollment fee or access fee.
              </div>
            </div>

            {/* CARD C */}
            <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 block mb-2">Alternative Path</span>
                <h3 className="text-lg font-bold text-white mb-3">Your Learning Journey Can Continue</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  You can still participate in the learning process, complete your assigned tasks, build projects, and add your experience and project work to your LinkedIn profile or resume without paying the optional ₹49 contribution.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                The optional contribution covers the certificate and applicable evaluation services. Unpaid participation does not include formal evaluation, personalized feedback, or lifetime verification services.
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 mb-6">
            <div className="p-4 sm:p-5 border-b border-slate-800">
              <h3 className="text-base font-semibold text-white">Program Inclusions Comparison</h3>
              <p className="text-xs text-slate-400 mt-1">Clear breakdown of what is included with and without the optional ₹49 contribution.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-300 font-semibold">
                    <th scope="col" className="p-3.5 sm:p-4 font-semibold">Feature</th>
                    <th scope="col" className="p-3.5 sm:p-4 font-semibold text-slate-300">Without ₹49 Contribution</th>
                    <th scope="col" className="p-3.5 sm:p-4 font-semibold text-indigo-300">With ₹49 Contribution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {comparisonRows.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-800/20 transition-colors">
                      <td className="p-3.5 sm:p-4 text-slate-200 font-medium">{row.feature}</td>
                      <td className="p-3.5 sm:p-4 text-slate-300">{row.unpaid}</td>
                      <td className="p-3.5 sm:p-4 text-indigo-200 font-medium">{row.paid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-slate-400 text-center max-w-3xl mx-auto">
            Certificate issuance is subject to the applicable internship completion requirements. The optional contribution does not guarantee a certificate regardless of performance or completion.
          </p>
        </div>
      </section>

      {/* SECTION 5: STUDENT PROJECTS & OUTCOMES */}
      <section id="student-projects" className="py-16 md:py-24 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Real Work. Practical Learning.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We believe practical projects are an important part of learning. Explore QSkill-related student work and public posts to discover projects, internship experiences, and learning journeys shared by students.
            </p>
          </div>

          {/* Project Gallery Empty State with Verified External Search CTA */}
          <div className="p-8 sm:p-12 rounded-xl bg-slate-900/40 border border-slate-800 text-center max-w-2xl mx-auto">
            <div className="w-12 h-12 mx-auto rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Live Student Showcase Directory</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
              Verified individual project repositories and submissions are published directly by our students. You can browse current student-submitted projects, completion notes, and experiences directly on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/search/results/all/?keywords=Qskill&origin=GLOBAL_SEARCH_HEADER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <span>Explore QSkill on LinkedIn</span>
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6: TRANSPARENCY & STUDENT COMMITMENT */}
      <section className="py-16 md:py-24 border-b border-slate-800/80 bg-slate-950/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              What You Can Expect from QSkill
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Our principles for maintaining clarity and fair opportunities for all participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expectations.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-md bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xs font-bold border border-indigo-500/20">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-9">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 md:py-24 border-b border-slate-800/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Questions? We've Got You.
            </h2>
            <p className="text-slate-400 text-sm">
              Answers to standard questions regarding our internship structure, evaluation, and certificate policy.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              const buttonId = `faq-btn-${index}`;
              const panelId = `faq-panel-${index}`;

              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 text-sm sm:text-base font-medium text-slate-200 hover:text-white"
                  >
                    <span>{faq.q}</span>
                    <span className="ml-2 flex-shrink-0 text-slate-400">
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-400' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/40 bg-slate-950/20"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-16 md:py-20 border-b border-slate-800/80 bg-slate-950/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Your Skills Matter More Than a Payment.
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
            Start learning, work on practical projects, and build a portfolio that reflects your skills. Explore QSkill's internship opportunities and choose the learning path that works for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/internship"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-sm"
            >
              Explore Internships
            </a>
            <a
              href="#student-projects"
              onClick={(e) => scrollToSection(e, 'student-projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Explore Student Projects
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 9: SMALL TRANSPARENCY NOTE */}
      <aside className="py-6 bg-[#080B10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
            Program details, evaluation arrangements, and certificate eligibility are subject to the applicable internship terms. Please review the program information before applying.
          </p>
        </div>
      </aside>
    </div>
  );
}