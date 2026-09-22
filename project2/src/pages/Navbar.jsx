import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080D18]/90 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white"
        >
          Nishtha<span className="text-purple-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-gray-300 hover:text-purple-400 transition duration-300"
            >
              {item.name}
            </a>
          ))}

        </div>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-purple-500 to-indigo-500 px-5 py-2.5 rounded-lg font-semibold text-white hover:scale-105 transition"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1422] border-t border-gray-800">

          <div className="flex flex-col px-6 py-6 gap-5">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-purple-400"
              >
                {item.name}
              </a>
            ))}

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;