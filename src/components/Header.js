import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../media/AdelaLogo.png'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  // border-b shadow-sm
  return (
    <header className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 border-b shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto py-3">
        
        {/* Logo – flush left */}
        <div className="flex items-center space-x-2 pl-2 md:pl-0">
          <img
            src={logo}
            alt="Adela Logo"
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden pr-2">
          <button
            onClick={toggleMenu}
            className="text-3xl text-indigo-600 hover:scale-110 transition-transform"
          >
            ☰
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-indigo-600 font-semibold text-lg pr-4">
          {["Home", "About Us", "Contact Us", "Careers"].map((item, idx) => (
            <NavLink
              key={idx}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className={({ isActive }) =>
                `relative transition-colors duration-300 ${
                  isActive
                    ? "text-indigo-800 after:w-full"
                    : "hover:text-indigo-800 after:w-0 hover:after:w-full"
                } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-indigo-600 after:transition-all after:duration-300`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-3 bg-white text-indigo-600 font-semibold border-t animate-slideDown">
          {["Home", "About Us", "Contact Us", "Careers"].map((item, idx) => (
            <NavLink
              key={idx}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive ? "text-indigo-800 underline" : "hover:text-indigo-800"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
