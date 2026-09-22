import {
  FaCode,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-[#0b101b] text-white px-6 md:px-10 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* ================= SECTION HEADING ================= */}
        <div className="text-center mb-14">

          <p className="text-purple-400 text-sm font-semibold tracking-[3px] mb-3">
            GET TO KNOW ME
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            About{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-400
                to-indigo-400
                bg-clip-text
                text-transparent
              "
            >
              Me
            </span>
          </h2>

          <div
            className="
              w-16
              h-[3px]
              bg-gradient-to-r
              from-purple-500
              to-indigo-500
              mx-auto
              mt-5
              rounded-full
            "
          ></div>

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            grid
            lg:grid-cols-[1.3fr_1fr]
            gap-10
            items-center
          "
        >

          {/* ================= LEFT SIDE ================= */}

          <div>

            <h3
              className="
                text-2xl
                sm:text-3xl
                font-semibold
                leading-relaxed
              "
            >
              Building clean and modern{" "}
              <span className="text-purple-400">
                web experiences.
              </span>
            </h3>

            <p
              className="
                text-gray-400
                leading-8
                mt-5
                text-base
              "
            >
              I'm a Frontend Developer focused on creating responsive,
              user-friendly and visually appealing web applications.
              I enjoy turning ideas and designs into functional websites
              using modern frontend technologies.
            </p>

            <p
              className="
                text-gray-400
                leading-8
                mt-4
                text-base
              "
            >
              I work with React, JavaScript, HTML, CSS and modern styling
              tools such as Tailwind CSS and Bootstrap. I am continuously
              improving my development skills by building practical
              projects and learning new technologies.
            </p>

            {/* ================= INFO GRID ================= */}

            <div
              className="
                grid
                sm:grid-cols-2
                gap-4
                mt-8
              "
            >

              {/* Location */}
              <div
                className="
                  flex
                  items-center
                  gap-4
                  bg-[#101725]
                  border
                  border-gray-800
                  rounded-xl
                  p-4
                  hover:border-purple-500/50
                  transition
                  duration-300
                "
              >
                <div
                  className="
                    w-11
                    h-11
                    bg-purple-500/10
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    text-purple-400
                  "
                >
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    LOCATION
                  </p>

                  <p className="text-sm font-medium mt-1">
                    Rajkot, Gujarat
                  </p>
                </div>
              </div>

              {/* Education */}
              <div
                className="
                  flex
                  items-center
                  gap-4
                  bg-[#101725]
                  border
                  border-gray-800
                  rounded-xl
                  p-4
                  hover:border-purple-500/50
                  transition
                  duration-300
                "
              >
                <div
                  className="
                    w-11
                    h-11
                    bg-purple-500/10
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    text-purple-400
                  "
                >
                  <FaGraduationCap />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    EDUCATION
                  </p>

                  <p className="text-sm font-medium mt-1">
                    MBA
                  </p>
                </div>
              </div>

              {/* Focus */}
              <div
                className="
                  flex
                  items-center
                  gap-4
                  bg-[#101725]
                  border
                  border-gray-800
                  rounded-xl
                  p-4
                  hover:border-purple-500/50
                  transition
                  duration-300
                "
              >
                <div
                  className="
                    w-11
                    h-11
                    bg-purple-500/10
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    text-purple-400
                  "
                >
                  <FaCode />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    FOCUS
                  </p>

                  <p className="text-sm font-medium mt-1">
                    Frontend Development
                  </p>
                </div>
              </div>

              {/* Currently Learning */}
              <div
                className="
                  flex
                  items-center
                  gap-4
                  bg-[#101725]
                  border
                  border-gray-800
                  rounded-xl
                  p-4
                  hover:border-purple-500/50
                  transition
                  duration-300
                "
              >
                <div
                  className="
                    w-11
                    h-11
                    bg-purple-500/10
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    text-purple-400
                  "
                >
                  <FaLaptopCode />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    LEARNING
                  </p>

                  <p className="text-sm font-medium mt-1">
                    Node.js
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div
            className="
              bg-[#101725]
              border
              border-gray-800
              rounded-3xl
              p-7
              sm:p-9
              relative
              overflow-hidden
            "
          >

            {/* Glow */}
            <div
              className="
                absolute
                -top-20
                -right-20
                w-48
                h-48
                bg-purple-600/10
                rounded-full
                blur-3xl
              "
            ></div>

            <p
              className="
                text-gray-400
                text-sm
                tracking-[2px]
                font-medium
                mb-7
              "
            >
              QUICK OVERVIEW
            </p>

            {/* Projects */}
            <div className="pb-6 border-b border-gray-800">

              <p
                className="
                  text-4xl
                  font-bold
                  bg-gradient-to-r
                  from-purple-400
                  to-indigo-400
                  bg-clip-text
                  text-transparent
                "
              >
                3+
              </p>

              <p className="text-gray-300 mt-2">
                Projects Built
              </p>

              <p className="text-sm text-gray-500 mt-1">
                React & JavaScript projects
              </p>

            </div>

            {/* Technologies */}
            <div className="py-6 border-b border-gray-800">

              <p
                className="
                  text-4xl
                  font-bold
                  bg-gradient-to-r
                  from-purple-400
                  to-indigo-400
                  bg-clip-text
                  text-transparent
                "
              >
                8+
              </p>

              <p className="text-gray-300 mt-2">
                Technologies
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Frontend tools & technologies
              </p>

            </div>

            {/* Main Stack */}
            <div className="pt-6">

              <p className="text-sm text-gray-500">
                MAIN STACK
              </p>

              <p className="text-xl font-semibold mt-2">
                React + JavaScript
              </p>

              <p className="text-gray-400 text-sm mt-2 leading-6">
                Building responsive interfaces with reusable
                components and modern development practices.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;