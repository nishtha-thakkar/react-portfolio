import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        bg-[#080c16]
        text-white
        border-t
        border-gray-800
        px-6
        md:px-10
        py-10
      "
    >
      <div className="max-w-6xl mx-auto">

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-7
          "
        >

          {/* ================= LEFT ================= */}

          <div className="text-center md:text-left">

            <a
              href="#home"
              className="
                text-2xl
                font-bold
                tracking-tight
              "
            >
              Nishtha
              <span className="text-purple-400">.</span>
            </a>

            <p className="text-gray-500 text-sm mt-2">
              Frontend Developer
            </p>

          </div>

          {/* ================= CENTER LINKS ================= */}

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-5
              text-sm
              text-gray-400
            "
          >
            <a
              href="#about"
              className="hover:text-purple-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-purple-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-purple-400 transition"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="hover:text-purple-400 transition"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="hover:text-purple-400 transition"
            >
              Contact
            </a>
          </div>

          {/* ================= SOCIAL ICONS ================= */}

          <div className="flex items-center gap-3">

            {/* GitHub */}

            <a
              href="https://github.com/nishtha-thakkar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                w-10
                h-10
                rounded-lg
                border
                border-gray-800
                flex
                items-center
                justify-center
                text-gray-500
                hover:text-white
                hover:border-purple-500
                hover:bg-purple-500/10
                transition
                duration-300
              "
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/nishtha-sodha"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                w-10
                h-10
                rounded-lg
                border
                border-gray-800
                flex
                items-center
                justify-center
                text-gray-500
                hover:text-white
                hover:border-purple-500
                hover:bg-purple-500/10
                transition
                duration-300
              "
            >
              <FaLinkedinIn />
            </a>

            {/* Email */}

            <a
              href="mailto:nishthathakkar3@gmail.com"
              aria-label="Email"
              className="
                w-10
                h-10
                rounded-lg
                border
                border-gray-800
                flex
                items-center
                justify-center
                text-gray-500
                hover:text-white
                hover:border-purple-500
                hover:bg-purple-500/10
                transition
                duration-300
              "
            >
              <FaEnvelope />
            </a>

            {/* Back To Top */}

            <a
              href="#home"
              aria-label="Back to top"
              className="
                w-10
                h-10
                rounded-lg
                bg-purple-600
                flex
                items-center
                justify-center
                text-white
                hover:bg-purple-500
                hover:-translate-y-1
                transition
                duration-300
              "
            >
              <FaArrowUp />
            </a>

          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            border-t
            border-gray-800
            mt-8
            pt-6
            text-center
          "
        >
          <p className="text-gray-600 text-sm">
            © {currentYear} Nishtha Sodha. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;