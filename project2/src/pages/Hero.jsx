import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import nishtha from "../assets/nishtha.png";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-[#080c16]
        text-white
        flex
        items-center
        px-6
        md:px-10
        pt-24
        pb-12
        overflow-hidden
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          w-full
          grid
          md:grid-cols-2
          gap-10
          lg:gap-16
          items-center
        "
      >
        {/* ================= LEFT SIDE ================= */}

        <div className="text-center md:text-left">

          {/* Small Heading */}
          <div
            className="
              flex
              items-center
              justify-center
              md:justify-start
              gap-3
              mb-5
            "
          >
            <span className="w-8 h-[2px] bg-purple-500"></span>

            <p
              className="
                text-purple-400
                text-sm
                font-semibold
                tracking-[3px]
              "
            >
              HELLO, I'M
            </p>
          </div>

          {/* Name */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              tracking-tight
              leading-tight
            "
          >
            Nishtha{" "}

            <span
              className="
                bg-gradient-to-r
                from-purple-400
                to-indigo-400
                bg-clip-text
                text-transparent
              "
            >
              Sodha
            </span>
          </h1>

          {/* Job Title */}
          <h2
            className="
              text-xl
              sm:text-2xl
              text-gray-200
              font-semibold
              mt-5
            "
          >
            Software Developer
          </h2>

          {/* Description */}
          <p
            className="
              text-gray-400
              text-base
              sm:text-lg
              leading-8
              mt-5
              max-w-xl
              mx-auto
              md:mx-0
            "
          >
            I create clean, responsive and user-friendly web applications
            using React, JavaScript and modern web technologies.
          </p>

          {/* ================= BUTTONS ================= */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-8
              justify-center
              md:justify-start
            "
          >
            <a
              href="#projects"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                bg-gradient-to-r
                from-purple-600
                to-indigo-600
                px-6
                py-3
                rounded-lg
                font-semibold
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-purple-900/30
                transition
                duration-300
              "
            >
              View Projects
              <FaArrowRight className="text-sm" />
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                px-6
                py-3
                rounded-lg
                border
                border-gray-700
                text-gray-200
                font-semibold
                hover:border-purple-500
                hover:text-purple-400
                transition
                duration-300
              "
            >
              Contact Me
            </a>
          </div>

          {/* ================= SOCIAL ICONS ================= */}

          <div
            className="
              flex
              items-center
              gap-4
              mt-9
              justify-center
              md:justify-start
            "
          >
            {/* <a
              href="https://github.com/nishtha-thakkar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                w-10 h-10 rounded-lg border border-gray-700
                flex items-center justify-center
                text-gray-400
                hover:text-white
                hover:border-purple-500
                hover:bg-purple-500/10
                hover:-translate-y-1
                transition duration-300
              "
            >
              <FaGithub size={18} />
            </a> */}

            <a
              href="https://www.linkedin.com/in/nishtha-sodha"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                w-10 h-10 rounded-lg border border-gray-700
                flex items-center justify-center
                text-gray-400
                hover:text-white
                hover:border-purple-500
                hover:bg-purple-500/10
                hover:-translate-y-1
                transition duration-300
              "
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="#contact"
              aria-label="Contact"
              className="
                w-10 h-10 rounded-lg border border-gray-700
                flex items-center justify-center
                text-gray-400
                hover:text-white
                hover:border-purple-500
                hover:bg-purple-500/10
                hover:-translate-y-1
                transition duration-300
              "
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div
          className="
            relative
            flex
            justify-center
            md:justify-end
            items-center
          "
        >
          {/* Purple Glow */}
          <div
            className="
              absolute
              w-[330px]
              h-[330px]
              bg-purple-600/20
              rounded-full
              blur-[90px]
            "
          ></div>

          <div className="relative">

            {/* Circular decorative border */}
            <div
              className="
                absolute
                -inset-3
                rounded-full
                border
                border-purple-500/30
              "
            ></div>

            {/* ROUND PHOTO */}
            <div
              className="
                relative
                w-[250px]
                h-[250px]
                sm:w-[300px]
                sm:h-[300px]
                lg:w-[330px]
                lg:h-[330px]
                rounded-full
                overflow-hidden
                border-2
                border-purple-500/50
                bg-[#111827]
                shadow-2xl
                shadow-purple-900/30
              "
            >
              <img
                src={nishtha}
                alt="Nishtha Sodha"
                className="
                  w-full
                  h-full
                  object-cover
                  object-top
                "
              />
            </div>

            {/* Software Developer Badge */}
            <div
              className="
                absolute
                bottom-3
                -left-5
                sm:-left-10
                bg-[#111827]/95
                backdrop-blur-md
                border
                border-gray-700
                rounded-xl
                px-5
                py-3
                shadow-xl
              "
            >
              <p
                className="
                  text-[10px]
                  tracking-[2px]
                  text-purple-400
                  font-semibold
                  mb-1
                "
              >
                SOFTWARE
              </p>

              <p className="text-sm text-white font-semibold">
                Software Developer
              </p>
            </div>

            {/* Decorative Dot */}
            <div
              className="
                absolute
                top-4
                right-3
                w-3
                h-3
                bg-purple-500
                rounded-full
                shadow-lg
                shadow-purple-500
              "
            ></div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;