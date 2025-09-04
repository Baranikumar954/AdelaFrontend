import React, { useState,useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import contactImage from '../media/contactTemplate.jpg' // adjust path if needed
import AOS from "aos"
import "aos/dist/aos.css"
import api from '../util/AxiosConfig'
import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";


export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    })
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post("/api/contact", formData) // 🔹 Adjust your backend route
      setStatus("✅ Message sent successfully! We’ll get back to you soon.")
      setFormData({ fullName: "", email: "", subject: "", message: "" })
    } catch (error) {
      setStatus("❌ Something went wrong. Please try again later.")
    }
  }


  return (
    <div>
      <Header />

      {/* Hero Contact Section */}
      <section className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <img
          src={contactImage}
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Black Overlay with slight blur */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px]"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-12">
          <h1
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-indigo-400 [text-shadow:_1px_1px_2px_rgba(0,0,0,0.7)]">
              Contact Us
            </span>
          </h1>

          <p
            className="text-base md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Have a question, project idea, or need support? We’d love to hear from you! <br />
            Reach out to{" "}
            <span className="font-semibold text-indigo-300">
              Adela Softwares &amp; Services Pvt Ltd
            </span>{" "}
            — let’s build something great together.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content (Centered Vertically) */}
          <div data-aos="fade-right" className="flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            <span className="text-indigo-600">Get in Touch</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Have a question, project idea, or need support? We’d love to hear from you.  
              Fill out the form and we’ll respond within{" "}
              <span className="font-semibold text-indigo-600">24 hours</span>.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-indigo-600 w-6 h-6" />
                <span className="text-gray-800">
                  <a href="mailto:email@example.com?subject=Hello&body=I%20wanted%20to%20reach%20out.">
                    support@adela.com
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-indigo-600 w-6 h-6" />
                <span className="text-gray-800"><a href="tel:+914312411341">0431 241 1341</a></span>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div data-aos="fade-left">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
            >
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Submit
              </button>

              {status && (
                <p className="text-center text-sm mt-2 text-gray-600">{status}</p>
              )}
            </form>
          </div>
        </div>
      </section>
 
      <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
            <span className="text-indigo-600">Contact Information</span>
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Address */}
            <div
              data-aos="fade-up"
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-black mb-4">Our Office</h3>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Adela Softwares & Services Pvt Ltd</span> <br />
                1, 1, Major Saravanan Rd, Cantonment, <br />
                Tiruchirappalli, Tamil Nadu 620001
              </p>
            </div>

            {/* Phone & Email */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-black mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-indigo-600 w-6 h-6" />
                  <span className="text-gray-800">0431 241 1341</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="text-indigo-600 w-6 h-6 mt-1" />
                  <div className="flex flex-col">
                    <a
                      href="mailto:info@adelasoftwares.com"
                      className="text-gray-800 hover:text-indigo-600 transition"
                    >
                      info@adelasoftwares.com
                    </a>
                    <a
                      href="mailto:support@adelasoftwares.com"
                      className="text-gray-800 hover:text-indigo-600 transition"
                    >
                      support@adelasoftwares.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours & Socials */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-black mb-4">Business Hours</h3>
              <p className="text-gray-700 mb-6">
                Mon – Fri: <span className="font-semibold">9:00 AM – 7:00 PM</span> <br />
                Sat & Sun: <span className="font-semibold">Closed</span> <br />
                (Support via email)
              </p>

              {/* Social Links */}
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Follow Us</h4>
              <div className="flex space-x-5">
                <a
                  href="https://www.linkedin.com/company/adela-softwares"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:scale-110 transition"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/adela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:scale-110 transition"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com/adela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:scale-110 transition"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/adela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:scale-110 transition"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
            
      {/* Google Map Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            <span className="text-indigo-600">Find Us on Google Maps</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Visit our office at the heart of Tiruchirappalli. You can easily locate us
            using Google Maps below.
          </p>

          {/* Google Map Embed */}
          <div className="w-full h-[350px] md:h-[500px] rounded-2xl shadow-lg overflow-hidden border-4 border-indigo-100 hover:border-indigo-300 transition">
            <iframe
              title="Adela Softwares Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1101020026904!2d78.6728525750264!3d10.802878658705314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf56c32728805%3A0xb00a64863f72746e!2sAdela%20Software%20%26%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1756990431078!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
        </div>
      </section>



      <Footer />
    </div>
  )
}
