// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // default dark

  // Apply/remove dark class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "about" },
    { name: "Our Team", to: "team" },
    { name: "FAQs", to: "faqs" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md z-50 transition-colors">
      <div className="mx-auto flex items-center justify-between px-6 py-4 max-w-7xl">
        
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img
            src="/client_logo.jpg"
            alt="Welfare Awareness Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-xl font-bold">Welfare Awareness</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={1200}   // control speed (ms)
              offset={-80}      // adjust for navbar height
              className="cursor-pointer hover:text-teal-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 md:hidden">
          {/* Theme Toggle (Mobile) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          {/* Hamburger */}
          <button
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 transition-colors">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth={true}
                duration={1200}
                offset={-80}
                className="text-lg cursor-pointer hover:text-teal-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
