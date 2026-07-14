import React from "react";

function Footer() {
  return (
    <footer className="bg-[#131C32] text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">
              Nishtha Sodha
            </h2>

            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Full Stack Developer (Trainee)
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-wrap justify-center gap-5 text-sm sm:text-base">
            <a href="#about" className="hover:text-blue-400 duration-300">About</a>
            <a href="#skills" className="hover:text-blue-400 duration-300">Skills</a>
            <a href="#projects" className="hover:text-blue-400 duration-300">Projects</a>
            <a href="#experience" className="hover:text-blue-400 duration-300">Experience</a>
            <a href="#contact" className="hover:text-blue-400 duration-300">Contact</a>
          </div>

        </div>

        <div className="border-t border-gray-700 my-6"></div>

        <p className="text-center text-gray-400 text-sm">
          © 2026 Nishtha Sodha. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;