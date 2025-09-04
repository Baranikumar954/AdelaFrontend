import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from "framer-motion";
import careerImg from '../media/careers.jpg'
import { Sparkles, GraduationCap, Users, TrendingUp, Heart, Clock } from "lucide-react";
import { Code2, Smartphone, Brain, Palette, CheckCircle2 } from "lucide-react";


export default function Careers() {
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * i } }),
  };

  const roles = [
    {
      icon: <Code2 className="h-7 w-7 text-white" />,
      title: "Software Engineers",
      desc: "Frontend, Backend, and Full-stack developers.",
    },
    {
      icon: <Smartphone className="h-7 w-7 text-white" />,
      title: "Mobile Developers",
      desc: "Build Android & iOS applications.",
    },
    {
      icon: <Brain className="h-7 w-7 text-white" />,
      title: "AI & Data Science",
      desc: "Machine learning engineers and business analysts.",
    },
    {
      icon: <Palette className="h-7 w-7 text-white" />,
      title: "UI/UX Designers",
      desc: "Creative minds passionate about user-centric design.",
    },
    {
      icon: <CheckCircle2 className="h-7 w-7 text-white" />,
      title: "Quality Assurance",
      desc: "Ensure delivery of top-quality software products.",
    },
  ];

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

      <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Who We Are <span className="text-indigo-600">Looking For</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are seeking talented professionals in the following areas.  
            If you are motivated and ready to contribute to exciting projects, Adela is the place for you.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600">
                {role.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {role.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{role.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <Footer/>
    </div>
  );
}
