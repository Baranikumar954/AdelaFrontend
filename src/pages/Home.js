import React, {useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import hereImage from '../media/homePageRhsImg.jfif'
import overviewImage from '../media/whoWeAre.jfif'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from '../util/AxiosConfig'
import { motion } from "framer-motion";


export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);
  
  return (
    <div>
        <Header/>
        <div id='homeHeroSection' className="w-full">
          <section className="p-0 relative w-full min-h-screen flex flex-col md:flex-row items-center overflow-hidden">

            {/* 🔸 Mobile View: Responsive Image Background with Text Overlaid */}
            <div className="relative w-full md:hidden">
              {/* Image Section (not full screen) */}
              <div className="relative w-full">
                <img
                  src={hereImage}
                  alt="Background"
                  className="w-full h-auto object-cover"
                />

                {/* Overlay on image */}
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

                {/* Text Content Positioned Over Image */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 py-10">
                  <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
                    Adela <span className="text-indigo-600">Software & Services</span>
                  </h1>
                  <p className="text-base text-gray-700 max-w-md mb-4">
                    Driving business growth with innovative, high-quality software solutions. We specialize in custom software development and consultancy for multinational companies, helping you unlock your full potential through technology.
                  </p>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => {
                        navigate("/contactus");
                      }}
                      className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
                    >
                      Get in
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 🔹 Desktop View: Split Layout */}
            <div className="hidden md:flex w-full min-h-screen">
              {/* Left Content */}
              <div className="w-1/2 flex flex-col justify-center px-12">
                <h1 className="text-5xl font-extrabold mb-4">
                  Adela <span className="text-indigo-600">Software & Services</span>
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  Driving business growth with innovative, high-quality software solutions. We specialize in custom software development and consultancy for multinational companies, helping you unlock your full potential through technology.
                </p>
                <div className="flex space-x-4">
                  <button onClick={()=>{navigate("/contactus")}} className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
                    Get in
                  </button>
                  <button onClick={()=>{navigate("/careers#opportunities")}} className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
                    Join Us
                  </button>
                  {/* <button className="text-indigo-600 hover:underline">
                    Watch Video
                  </button> */}
                </div>
              </div>

              {/* Right Image */}
              <div className="w-1/2 h-full">
                <img
                  src={hereImage}
                  alt="Hero"
                  className="w-full h-full "
                />
              </div>
            </div>
          </section>

        <section
  className="w-full flex flex-col-reverse md:flex-row items-center bg-gradient-to-r from-indigo-50 via-white to-indigo-50 overflow-hidden pt-10 md:pt-0 pb-16"
  id="overview"
>
  {/* Image Section - Left on Desktop, Bottom on Mobile */}
  <div className="w-full md:w-1/2 px-6 md:px-12 py-6 md:py-0 flex justify-center items-center">
    <div className="relative w-full h-64 md:h-full max-w-md md:max-w-full">
      <img
        src={overviewImage}
        alt="Who We Are"
        className="w-full h-full object-cover rounded-3xl shadow-md"
      />
      {/* Optional Indigo Tint */}
      <div className="absolute inset-0 bg-indigo-600/10 backdrop-blur-sm rounded-3xl pointer-events-none"></div>
    </div>
  </div>

  {/* Text Section with Animation */}
  <motion.div
    className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 text-center md:text-left"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.h2
      className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Who <span className="text-indigo-600">We Are?</span>
    </motion.h2>

    <motion.p
      className="text-base md:text-xl text-gray-700 mb-4"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <strong>Adela Softwares & Services Pvt Ltd</strong> is a dynamic
      technology company dedicated to delivering innovative software
      solutions that empower businesses to excel in the digital era. We
      specialize in custom software development, cloud services, and
      cutting-edge technology integration tailored to meet the unique
      needs of our clients.
    </motion.p>
  </motion.div>
</section>
        <section className="bg-white w-full px-6 md:px-20 py-16">
          {/* Mission Statement */}
          <div
            className="max-w-5xl mx-auto mb-12 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
              Our <span className="text-indigo-600">Mission</span>
            </h2>
            <p
              className="text-base md:text-lg text-gray-700"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Our mission is to enable businesses of all sizes to achieve operational excellence and drive growth through high-quality, scalable, and user-centric software solutions. We are committed to innovation, integrity, and customer success at every step.
            </p>
          </div>

          {/* What Makes Us Unique */}
          <div className="max-w-6xl mx-auto">
            <h3
              className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              What <span className="text-indigo-600">Makes Us Unique</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Unique Point 1 */}
              <div
                className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-md shadow-sm"
                data-aos="fade-right"
                data-aos-delay="150"
                data-aos-duration="800"
              >
                <h4 className="text-xl font-semibold mb-2 text-indigo-600">
                  Customer-Centric Approach
                </h4>
                <p className="text-gray-700">
                  We prioritize understanding your business challenges to craft solutions that truly fit your goals.
                </p>
              </div>

              {/* Unique Point 2 */}
              <div
                className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-md shadow-sm"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="800"
              >
                <h4 className="text-xl font-semibold mb-2 text-indigo-600">
                  Agile & Collaborative
                </h4>
                <p className="text-gray-700">
                  Our flexible development process ensures transparency, adaptability, and fast delivery.
                </p>
              </div>

              {/* Unique Point 3 */}
              <div
                className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-md shadow-sm"
                data-aos="fade-right"
                data-aos-delay="450"
                data-aos-duration="800"
              >
                <h4 className="text-xl font-semibold mb-2 text-indigo-600">
                  Technological Expertise
                </h4>
                <p className="text-gray-700">
                  From AI and machine learning to cloud computing and mobile apps, we leverage the latest technologies to keep you ahead.
                </p>
              </div>

              {/* Unique Point 4 */}
              <div
                className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-md shadow-sm"
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="800"
              >
                <h4 className="text-xl font-semibold mb-2 text-indigo-600">
                  Quality & Support
                </h4>
                <p className="text-gray-700">
                  We don’t just deliver software; we build long-term partnerships with ongoing support and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ⭐ Services Section */}
        <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 w-full px-6 md:px-20 py-16" id="services">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              What <span className="text-indigo-600">We Do Best</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              At Adela Softwares & Services Pvt Ltd, we specialize in delivering robust digital solutions 
              that drive efficiency, innovation, and business transformation.
            </p>
          </div>

          {/* Services Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development */}
            <div
              className="group bg-indigo-50 rounded-2xl p-8 shadow-md transition transform hover:scale-105 cursor-pointer"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white mx-auto mb-6">
                <i className="fas fa-globe text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Web Application Development</h3>
              <p className="text-gray-700 mb-4">
                We build secure and scalable web applications tailored to your business needs, ensuring 
                performance and engagement across devices.
              </p>
              <button
                onClick={() => navigate("/products/web")}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Click here →
              </button>
            </div>

            {/* Mobile Development */}
            <div
              className="group bg-indigo-50 rounded-2xl p-8 shadow-md transition transform hover:scale-105 cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white mx-auto mb-6">
                <i className="fas fa-mobile-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Application Development</h3>
              <p className="text-gray-700 mb-4">
                From Android to iOS, we create intuitive apps that deliver seamless experiences and 
                drive customer engagement.
              </p>
              <button
                onClick={() => navigate("/products/mobile")}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Click here →
              </button>
            </div>

            {/* AI Solutions */}
            <div
              className="group bg-indigo-50 rounded-2xl p-8 shadow-md transition transform hover:scale-105 cursor-pointer"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white mx-auto mb-6">
                <i className="fas fa-robot text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Artificial Intelligence Solutions</h3>
              <p className="text-gray-700 mb-4">
                Unlock the power of AI with intelligent automation, predictive analytics, and advanced 
                solutions for smarter decision-making.
              </p>
              <button
                onClick={() => navigate("/products/ai")}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Click here →
              </button>
            </div>
          </div>
        </section>

        {/* ⭐ Why Choose Us Section */}
        <section className="bg-gray-50 w-full px-6 md:px-20 py-16" id="why-choose-us">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Title */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Why <span className="text-indigo-600">Choose Us</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Adela Softwares, we believe in more than just building products — 
                we build long-term value. Our expertise, approach, and people set us apart. 
              </p>
            </div>

            {/* Right Side - Feature List */}
            <div className="space-y-8">
              {[
                {
                  icon: "fas fa-sliders-h",
                  title: "Tailored Solutions",
                  desc: "We deliver solutions designed around your unique business needs."
                },
                {
                  icon: "fas fa-microchip",
                  title: "Cutting-Edge Technology",
                  desc: "We adopt AI, cloud, and next-gen tools to future-proof your business."
                },
                {
                  icon: "fas fa-sync-alt",
                  title: "Agile & Transparent",
                  desc: "Stay in control with flexible, collaborative development processes."
                },
                {
                  icon: "fas fa-users",
                  title: "Experienced Team",
                  desc: "Our experts bring years of proven experience across industries."
                },
                {
                  icon: "fas fa-handshake",
                  title: "Customer Success Focus",
                  desc: "Your growth is our priority — we partner for your long-term success."
                },
                {
                  icon: "fas fa-award",
                  title: "Proven Track Record",
                  desc: "Trusted by businesses to deliver impactful products like Pistus, CRM, OLT, and OLT Pro."
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-4"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={idx * 150}   // staggered animation
                  data-aos-once="true"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110">
                    <i className={feature.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-700">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⭐ Call To Action Section */}
        <section className="relative bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-20 px-6 md:px-20" id="cta">
          <div 
            className="max-w-4xl mx-auto text-center" 
            data-aos="zoom-in" 
            data-aos-duration="1000" 
            data-aos-once="true"
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Ready to take your business to the <span className="text-indigo-600">next level?</span>
            </h2>
            
            {/* Subtitle */}
            <p 
              className="text-lg text-gray-700 mb-8"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              Get in touch with us today! Explore our innovative software solutions or schedule a personalized demo.
            </p>
            
            {/* Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              {/* Contact Button */}
              <button
                onClick={() => navigate("/contactus")}
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300"
              >
                Contact Us
              </button>

              {/* Services Button */}
              <button
                onClick={() => navigate("/services")}
                className="px-8 py-3 bg-white text-indigo-600 border-2 border-indigo-600 font-semibold rounded-xl shadow-md hover:bg-indigo-50 transition-transform transform hover:scale-105 duration-300"
              >
                View Our Services
              </button>
            </div>
          </div>

          {/* Subtle background floating animation */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </section>

        


    </div>
        <Footer/>
    </div>
  )
}
