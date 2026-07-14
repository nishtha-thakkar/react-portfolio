import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#0F172A] px-6 md:px-16 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400">
            Nishtha <span className="text-blue-600">Sodha</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 text-white font-medium">
          <li>
            <a href="#about" className="hover:text-indigo-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-indigo-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-indigo-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-indigo-400 transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-indigo-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F172A] text-white">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium">

            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#experience" onClick={() => setMenuOpen(false)}>
                Experience
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>

          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;