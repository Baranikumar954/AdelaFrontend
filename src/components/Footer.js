import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-indigo-100 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-6">
        
        {/* 🔹 Logo or Company Name */}
        <div className="text-xl font-bold text-indigo-600">
          Adela Softwares & Services
        </div>

        {/* 🔹 Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium">
          <a href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            About Us
          </a>
          <a href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            Contact Us
          </a>
          <a href="/careers" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            Careers
          </a>
        </div>

        {/* 🔹 Divider */}
        <div className="w-full border-t border-gray-200"></div>

        {/* 🔹 Copyright */}
        <div className="text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Adela Softwares &amp; Services, Trichy. All rights reserved.
        </div>
      </div>
    </footer>

  )
}
