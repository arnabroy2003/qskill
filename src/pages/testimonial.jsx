import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Star, Quote, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom'; // or your routing library

const allTestimonials = [
  {
    name: "M Mahesh",
    role: "Front-End Developer",
    text: "It's really great I learner many things waiting for paid internship",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464486/ldync5mceabzm4knhpd9.jpg",
    linkedin: ""
  },
  {
    name: "Raman Chourasiya",
    role: "Front-End Developer",
    text: "This internship is valuable and give more knowledge about real world project",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464491/cifmxthco6x2ueg8t7fw.jpg",
    linkedin: ""
  },
  {
    name: "Kshirasindhu Nayak",
    role: "Python Developer",
    text: "Best !! Thanks for your hard work for us",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464495/cvtdtqpsnkdtfdty9fjl.jpg",
    linkedin: ""
  },
  {
    name: "Ojasvi Bhardwaj",
    role: "Back-End Developer",
    text: "its a great opportunity and vauable interaction , need more internships like like really loved it",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464496/w1stsvikfwzpx4vgkyqt.pdf",
    linkedin: ""
  },
  {
    name: "Iknoor Vran",
    role: "Front-End Developer",
    text: "Yeah all over internship experience is good enough to gain a handsome on experience on react based tasks.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464498/irngg2ryhvxn7iobmhzt.jpg",
    linkedin: ""
  },
  {
    name: "Vikash Ramdarash Chaurasiya",
    role: "Python Developer",
    text: "Completed my Python Development Internship at Qskill where I built data processing pipelines and dashboards.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464500/d9ixffupitk4f5yqos9o.jpg",
    linkedin: ""
  },
  {
    name: "Akshita Choudhary",
    role: "Basic Web Developer",
    text: "Good experience",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464503/d7rvapzrm2wuvntt44a3.jpg",
    linkedin: "https://www.linkedin.com/in/webd-akshita-choudhary"
  },
  {
    name: "Ojasvi Bhardwaj",
    role: "Back-End Developer",
    text: "its great opportunity and valuable interaction ...need more like this",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464505/zhcgqwsyqtpycablx4iy.jpg",
    linkedin: ""
  },
  {
    name: "Khushboo Chandarlal Talreja",
    role: "Basic Web Developer",
    text: "It was good experience",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464507/ngw9glxaak24bctrhbe3.jpg",
    linkedin: ""
  },
  {
    name: "Bhavana S",
    role: "Python Developer",
    text: "Being my first internship really had a great experience and I was able to learn various python libraries",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464510/y8ga9ixetr4woilnblvm.jpg",
    linkedin: ""
  },
  {
    name: "Nisha Dnyaneshwar Patil",
    role: "Front-End Developer",
    text: "My internship experience was extremely valuable and career-shaping with real-time projects.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464511/snsyksktykwmndhyiydi.jpg",
    linkedin: ""
  },
  {
    name: "B. Sumanth",
    role: "Python Developer",
    text: "I need the results of our tasks and hope to get internship based on performance.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464514/bxz7tdy2e3aei0fh74am.jpg",
    linkedin: ""
  },
  {
    name: "Abhishek Mehra",
    role: "Python Developer",
    text: "The work experience is great. Hope future tasks will include stipend.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464525/xldcclzyeivf9hacgi9e.jpg",
    linkedin: "https://www.linkedin.com/in/dev-abhishekm"
  },
  {
    name: "Alexander Roy",
    role: "AI/ML Developer",
    text: "I really enjoyed the journey 😃",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464526/og5qjphf253ihzzwfg8q.jpg",
    linkedin: "http://linkedin.com/in/alexander-roy-570456191"
  },
  {
    name: "Ved Pathekar",
    role: "AI/ML Developer",
    text: "I have a great experience",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464528/xfqxn0nmatgat4tllynw.png",
    linkedin: "https://www.linkedin.com/in/ved-pathekar-9b476b2a0"
  },
  {
    name: "Anjali Vijay Sandanshiv",
    role: "Python Developer",
    text: "Great learning experience during my Python Developer Internship.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464530/j0jhfugolbhglektaf2k.jpg",
    linkedin: ""
  },
  {
    name: "Edwin K Johnson",
    role: "Front-End Developer",
    text: "Very good programme and motivating internship experience.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464533/q05elxxmvbakbnjvi6y9.jpg",
    linkedin: "https://www.linkedin.com/in/edwin-k-johnson-087500308"
  },
  {
    name: "Rohan Peerla",
    role: "Python Developer",
    text: "It was great working with Qskill. I improved my python skills.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464535/sh5doc95ynre5hr2nejw.jpg",
    linkedin: "https://www.linkedin.com/in/rohan-peerla-711a181b6/"
  },
  {
    name: "D.Harsha Vardhan Reddy",
    role: "Python Developer",
    text: "Good and very nice experience working with q skill sr india",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464538/se3wdkmaxahupnu96qz3.jpg",
    linkedin: "https://www.linkedin.com/in/harshavardhan-doma-85b50a34b"
  },
  {
    name: "Pavithra S",
    role: "Front-End Developer",
    text: "It was very nice to be part of this program and learn many things.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464539/kgdlzarv0n1ivozjazrv.jpg",
    linkedin: "https://www.linkedin.com/in/pavithra1122"
  },
  {
    name: "Sudev E",
    role: "AI/ML Developer",
    text: "Happy to be part of the internship and build two projects.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464540/eqxe3vk87yzccug2pwov.jpg",
    linkedin: "www.linkedin.com/in/sudev-e-842a86129"
  },
  {
    name: "Bhoomika Sunil Patil",
    role: "AI/ML Developer",
    text: "Very practical internship where I learned preprocessing and model building.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464542/rigsfpexgseiaoebdot7.jpg",
    linkedin: "https://linkedin.com/in/bhoomika-patil-814003288"
  },
  {
    name: "Raj Pathak",
    role: "Python Developer",
    text: "Everything is bestttt... the way of teaching and guiding is awesome.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464543/u1dadsa1zemkfekl4eds.jpg",
    linkedin: ""
  },
  {
    name: "Santosh Hinduja",
    role: "Basic Web Developer",
    text: "Your task helped me understand how to create industry level projects.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464544/i0uyolo6cgsyoztwwdcs.jpg",
    linkedin: "https://www.linkedin.com/in/santosh-hinduja"
  },
  {
    name: "Rendla Ashwitha",
    role: "Python Developer",
    text: "Good experience and opportunity to improve skills.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773464546/o4rghmgfqfggpeuvr5oj.jpg",
    linkedin: "https://www.linkedin.com/in/ashwitharendla/"
  },
  {
    name: "Kanishka Chaudhary",
    role: "Basic Web Developer",
    text: "Great one-month internship with strong foundation in HTML CSS and JavaScript.",
    img: "https://res.cloudinary.com/dvqqjadcf/image/upload/v1773465703/IMG_20260210_082855_-_Kanishka_Chaudhary_us1bzf.jpg",
    linkedin: "https://www.linkedin.com/in/kanishkachaudhary"
  },
  {
    name: "Mohammed Abdul Jamal",
    role: "AI/ML Developer",
    text: "Amazing experience working with the team of Qskill.",
    img: "",
    linkedin: "https://www.linkedin.com/in/jamal-pasha-66239616a"
  }
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfe] pb-24">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3b82f6,transparent_70%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Student <span className="text-blue-500">Success</span> Stories
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
            Hear directly from the 1000+ students who transformed their careers through our immersive internship programs.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-6 -translate-y-10 md:-translate-y-1/2">
        <div className="bg-white shadow-xl rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border border-slate-100">
          {[
            { label: "Placements", val: "1000+" },
            { label: "Avg. Rating", val: "4.8/5" },
            { label: "Countries", val: "5+" },
            { label: "Hiring Partners", val: "50+" }
          ].map((stat, i) => (
            <div key={i} className="text-center border-r last:border-0 border-slate-100">
              <p className="text-3xl font-bold text-slate-900">{stat.val}</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {allTestimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid"
            >
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                {/* Decorative Quote Mark */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10">
                  "{item.text}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-4">
                    <img src={item.img} className="w-12 h-12 rounded-full ring-2 ring-blue-50" alt={item.name} />
                    <div>
                      <h4 className="font-bold text-slate-900">{item.name}</h4>
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-tighter">{item.role}</p>
                    </div>
                  </div>
                  
                  {item.linkedin && (
  <a 
    href={item.linkedin} 
    target="_blank" 
    rel="noreferrer"
    className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
    title="View LinkedIn Profile"
  >
    <Linkedin className="w-5 h-5" />
  </a>
)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="mt-32 max-w-4xl mx-auto px-6 text-center">
        <div className="bg-blue-50 rounded-[3rem] p-12 md:p-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Be the next success story</h2>
          <p className="text-slate-600 mb-10 text-lg">Join our upcoming cohort and start building projects that matter.</p>
          <button className="bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-200" onClick={() =>
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScU5wWqA_R7i0UH3Y_qUXMsGSSYfp_riGwHSqxNOXKWuC4m2g/viewform",
      "_blank"
    )
  }>
            Apply Now for Internship
          </button>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;