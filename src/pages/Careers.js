import React, { useState,useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from "framer-motion";
import careerImg from '../media/careers.jpg'
import { Sparkles, GraduationCap, Users, TrendingUp, Heart, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {Smartphone,Brain,Palette,CheckCircle2,Briefcase,Code2} from "lucide-react";
import api from '../util/AxiosConfig';
import supportTeam from '../media/supportTeam.jpg'

export default function Careers() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
  });

  const [status, setStatus] = useState(""); // ✅ for success/failure message

  // Handle text/email/phone inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input
   const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("resume", formData.resume);

      const response = await fetch("http://127.0.0.1:5000/apply", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setStatus("✅ Application submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          resume: null,
        });
      } else {
        setStatus("❌ Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Something went wrong. Try again later.");
    }
  };

  const [showPopup, setShowPopup] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const lines = [
    "At Adela, we don’t just build software — we build careers, opportunities, and lasting connections.",
    "A place where innovation thrives, teamwork drives success,",
    "and every idea has the power to make an impact."
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * i } }),
  };

  const roles = [
  {
    icon: <Code2 className="h-6 w-6 text-white" />,
    title: "Software Engineers",
    desc: "Frontend, Backend, and Full-stack developers to craft scalable enterprise solutions.",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-white" />,
    title: "Mobile Developers",
    desc: "Build seamless Android & iOS applications using cutting-edge technologies.",
  },
  {
    icon: <Brain className="h-6 w-6 text-white" />,
    title: "AI & Data Science",
    desc: "Work on AI-driven projects with ML models, analytics, and business intelligence.",
  },
  {
    icon: <Palette className="h-6 w-6 text-white" />,
    title: "UI / UX Designers",
    desc: "Design user-centered experiences with creativity and precision.",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-white" />,
    title: "Quality Assurance",
    desc: "Ensure delivery of top-quality software through testing & automation.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-white">
        {/* Background with curved bottom */}
        <div className="relative h-[80vh] md:h-[85vh] w-full overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              clipPath: "ellipse(160% 65% at 50% 35%)", // more curvy bottom
            }}
          >
            {/* Background Image with Blur */}
            <img
              src={careerImg}
              alt="Careers"
              className="w-full h-full object-cover filter blur-sm"
            />
            {/* Indigo Overlay */}
            <div className="absolute inset-0 bg-indigo-900/50"></div>
          </div>
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold mb-4 text-indigo-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Careers
          </motion.h1>
          <motion.h2
            className="text-lg md:text-2xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shape the Future with Us at{" "}
            <span className="text-indigo-300">Adela</span>
          </motion.h2>
          <motion.p
            className="text-sm md:text-base text-gray-200 max-w-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            At Adela Software & Services Pvt. Ltd., we believe that great people
            build great technology. Join a team where innovation meets passion,
            collaboration fuels growth, and every idea matters.
          </motion.p>
          <motion.a
            href="#opportunities"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md 
                      hover:bg-indigo-100 hover:text-indigo-600 hover:border hover:border-indigo-600 
                      transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Explore Opportunities
          </motion.a>

        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Why Join <span className="text-indigo-600">Us?</span>
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-indigo-600/80" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1 */}
            <motion.div
              className="group bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={1}
              whileHover={{ y: -4 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">Innovative Projects</h3>
              <p className="mt-1 text-sm text-gray-600 text-center">
                Build real products with modern stacks.
              </p>
            </motion.div>

            {/* 2 */}
            <motion.div
              className="group bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={2}
              whileHover={{ y: -4 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">Learning & Growth</h3>
              <p className="mt-1 text-sm text-gray-600 text-center">
                Workshops, mentorship, and upskilling.
              </p>
            </motion.div>

            {/* 3 */}
            <motion.div
              className="group bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={3}
              whileHover={{ y: -4 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">Collaborative Culture</h3>
              <p className="mt-1 text-sm text-gray-600 text-center">
                Open, supportive, and team-first.
              </p>
            </motion.div>

            {/* 4 */}
            <motion.div
              className="group bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={4}
              whileHover={{ y: -4 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">Career Progression</h3>
              <p className="mt-1 text-sm text-gray-600 text-center">
                Clear paths and real responsibility.
              </p>
            </motion.div>

            {/* 5 */}
            <motion.div
              className="group bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={5}
              whileHover={{ y: -4 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">Wellbeing Matters</h3>
              <p className="mt-1 text-sm text-gray-600 text-center">
                Balance, benefits, and support.
              </p>
            </motion.div>

            {/* 6 (optional to match your reference layout) */}
            <motion.div
              className="group bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={6}
              whileHover={{ y: -4 }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">Flexible Hours</h3>
              <p className="mt-1 text-sm text-gray-600 text-center">
                Work smart with supportive schedules.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id='opportunities' className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* LEFT SIDE HERO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <div className="mb-5 inline-flex items-center px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium shadow-sm">
              <Briefcase className="w-4 h-4 mr-2" />
              Careers at Adela
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Build Your <span className="text-indigo-600">Future</span> With Us
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              At <span className="font-semibold text-indigo-600">Adela Softwares &amp; Services Pvt Ltd</span>, 
              we empower passionate individuals to innovate, create, and make an impact. 
              If you’re looking for a workplace that values growth, collaboration, 
              and excellence — your journey starts here.
            </p>

            <a href="#opportunities" className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition">
              Explore Careers
            </a>
          </motion.div>

          {/* RIGHT SIDE ROLES */}
          <motion.div
            className="lg:col-span-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {roles.map((role, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 12px 24px rgba(79, 70, 229, 0.15)",
                  }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-indigo-400 transition"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-600">
                      {role.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{role.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
          
      <section className="w-full bg-white relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* Right Image */}
        <div
          className={`relative w-full h-80 lg:h-full order-1 lg:order-2 transform transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <img
            src={supportTeam}
            alt="Support Team"
            className="w-full h-full object-cover rounded-3xl shadow-xl transform hover:scale-105 transition duration-700 ease-out"
          />
          {/* Dark Overlay for Contrast */}
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-3xl backdrop-blur-sm"></div>

          {/* Overlay Text (only mobile) */}
          <div className="absolute inset-0 flex lg:hidden items-center justify-center text-center px-4">
            <h2 className="text-3xl font-bold text-white leading-snug drop-shadow-lg">
              Apply Now & Get Response Within{" "}
              <span className="text-indigo-400">24 Hrs</span>
            </h2>
          </div>
        </div>

        {/* Left Form */}
        <div
          className={`px-6 lg:px-12 py-12 bg-white order-2 lg:order-1 transform transition-all duration-1000 delay-300 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Heading (desktop only) */}
          <h2 className="hidden lg:block text-3xl font-bold text-gray-900 mb-6">
            Apply Now & Get Response Within{" "}
            <span className="text-indigo-600">24 Hrs</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-indigo-600 transition"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-indigo-600 transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Mobile Number *"
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-indigo-600 transition"
              />
              <input
                type="text"
                placeholder="Job Position *"
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-indigo-600 transition"
              />
            </div>

            <textarea
              rows="4"
              placeholder="Cover letter"
              className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-indigo-600 transition"
            ></textarea>

            {/* File Upload */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
      <label className="relative flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium rounded-lg shadow-md cursor-pointer hover:from-indigo-700 hover:to-indigo-600 transition duration-300">
        <input type="file" className="hidden" onChange={handleFileChange} />
        <span>📂 Upload Resume</span>
      </label>

      {/* Show uploaded file name or fallback */}
      <span className="text-gray-600 text-sm font-medium truncate max-w-[200px]">
        {fileName ? fileName : "Supported: PDF, DOCX"}
      </span>
    </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transform hover:scale-105 transition duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition transform scale-95 animate-fadeIn">
          ✅ Application submitted successfully!
        </div>
      )}
    </section>

      <section className="bg-gray-50 py-20 px-6 md:px-12" id="life-at-adela">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-black-100 mb-10">
            Life at Adela
          </h2>

          {/* Quote Lines */}
          <div className="space-y-4">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                className="text-lg md:text-xl leading-relaxed font-serif text-gray-800 italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.6 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
