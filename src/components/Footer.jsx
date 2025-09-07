// Footer.jsx
import React from "react";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Welfare Awareness</h2>
          <p className="text-sm leading-relaxed">
            Our mission is to spread awareness about welfare schemes, education,
            and healthcare opportunities so that every individual can live a
            better and informed life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-teal-400">Home</a></li>
            <li><a href="#about" className="hover:text-teal-400">About Us</a></li>
            <li><a href="#team" className="hover:text-teal-400">Our Team</a></li>
            <li><a href="#faqs" className="hover:text-teal-400">FAQs</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.india.gov.in/" target="_blank" rel="noreferrer" className="hover:text-teal-400">National Portal of India</a></li>
            <li><a href="https://www.mygov.in/" target="_blank" rel="noreferrer" className="hover:text-teal-400">MyGov</a></li>
            <li><a href="https://www.pmindia.gov.in/en/" target="_blank" rel="noreferrer" className="hover:text-teal-400">PM India</a></li>
            <li><a href="https://www.un.org/" target="_blank" rel="noreferrer" className="hover:text-teal-400">United Nations</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
          <p className="text-sm">📍 Gorakhpur, Uttar Pradesh, India</p>
          <p className="text-sm">📧 info@welfareawareness.org</p>
          <p className="text-sm">📞 +91 XXXXXXXXXX</p>
          <div className="mt-4">
            <p className="text-sm mb-2">Follow us on:</p>
            <div className="flex space-x-4">
              {/* Official Welfare Awareness Insta */}
              <a
                href="https://www.instagram.com/welfare_awareness_gorakhpur/"
                target="_blank"
                rel="noreferrer"
                className="text-pink-500 hover:text-pink-400"
                aria-label="Official Welfare Awareness Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Welfare Awareness. All Rights Reserved.
        </p>
        <p className="mt-1 flex items-center justify-center gap-4">
          Developed & Maintained by{" "}
          <span className="text-teal-400 font-medium">Ashirwad Dwivedi</span>
          <a
            href="https://instagram.com/ashirwad_dev"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 hover:text-pink-400"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://github.com/ashirwadDev"
            target="_blank"
            rel="noreferrer"
            className="text-gray-200 hover:text-white"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://twitter.com/ashirwad_dev"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-sky-300"
          >
            <FaTwitter size={18} />
          </a>
        </p>
      </div>
    </footer>
  );
}
