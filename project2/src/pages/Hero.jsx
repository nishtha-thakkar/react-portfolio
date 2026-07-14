import React from "react";
import nishtha from "../assets/nishtha.png";

function Hero() {
  return (
    <section className="min-h-screen bg-[#050B1F] text-white flex items-center px-5 sm:px-8 md:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-20">

        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          <p className="text-indigo-400 font-semibold mb-3 text-lg">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-blue-400">Nishtha</span>{" "}
            <span className="text-blue-600">Sodha</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-cyan-400 font-semibold mb-5">
            Full Stack Developer (Trainee)
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-8 mb-8 max-w-xl mx-auto md:mx-0">
            Passionate Full Stack Developer specializing in HTML, CSS,
            Tailwind CSS, JavaScript and React.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg w-full sm:w-auto">
              Download Resume
            </button>

            <button className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-800 w-full sm:w-auto">
              Contact Me
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">

          <img
            src={nishtha}
            alt="Nishtha"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] object-cover border-4 border-indigo-500 rounded-xl"          />

        </div>

      </div>
    </section>
  );
}

export default Hero;