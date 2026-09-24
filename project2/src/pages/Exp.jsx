import {
  FaLaptopCode,
  FaServer,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

function Exp() {
  const journey = [
    {
      title: "Software Developer",
      place: "AxionX Digital",
      status: "1.5 Years Experience",
      description:
        "Working as a Software Developer at AxionX Digital, contributing to responsive and user-friendly web applications using React, JavaScript, HTML, CSS, Tailwind CSS and modern frontend development practices.",
      icon: <FaBriefcase />,
    },
    {
      title: "Frontend Development",
      place: "Professional Training",
      status: "Completed",
      description:
        "Completed frontend development training with hands-on experience in HTML, CSS, JavaScript, React, Redux Toolkit, Tailwind CSS and API integration.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Backend Development",
      place: "Node.js",
      status: "Currently Learning",
      description:
        "Currently learning backend development with Node.js, including server-side development, APIs and database fundamentals.",
      icon: <FaServer />,
    },
    {
      title: "Master of Business Administration",
      place: "Marwadi University",
      status: "MBA",
      description:
        "Completed my MBA from Marwadi University, building a strong foundation in business, management and professional communication.",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#080c16] text-white px-6 md:px-10 py-24"
    >
      <div className="max-w-5xl mx-auto">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-semibold tracking-[3px] mb-3">
            MY JOURNEY
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Experience &{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-400
                to-indigo-400
                bg-clip-text
                text-transparent
              "
            >
              Education
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

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            My professional experience, technical learning and educational
            journey as I continue growing as a Software Developer.
          </p>
        </div>

        {/* ================= TIMELINE ================= */}

        <div className="relative">

          {/* Vertical Line */}
          <div
            className="
              hidden
              md:block
              absolute
              left-[31px]
              top-4
              bottom-4
              w-[2px]
              bg-gradient-to-b
              from-purple-500
              via-indigo-500/50
              to-transparent
            "
          ></div>

          <div className="space-y-8">
            {journey.map((item) => (
              <div
                key={item.title}
                className="
                  relative
                  md:pl-24
                "
              >

                {/* ================= TIMELINE ICON ================= */}

                <div
                  className="
                    hidden
                    md:flex
                    absolute
                    left-0
                    top-6
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#101725]
                    border
                    border-purple-500/30
                    items-center
                    justify-center
                    text-purple-400
                    text-xl
                    z-10
                  "
                >
                  {item.icon}
                </div>

                {/* ================= CARD ================= */}

                <div
                  className="
                    group
                    bg-[#101725]
                    border
                    border-gray-800
                    rounded-2xl
                    p-6
                    sm:p-7
                    hover:border-purple-500/50
                    hover:-translate-y-1
                    hover:shadow-xl
                    hover:shadow-purple-900/10
                    transition
                    duration-300
                  "
                >

                  {/* Mobile Icon */}
                  <div
                    className="
                      md:hidden
                      w-12
                      h-12
                      rounded-xl
                      bg-purple-500/10
                      text-purple-400
                      flex
                      items-center
                      justify-center
                      text-lg
                      mb-5
                    "
                  >
                    {item.icon}
                  </div>

                  {/* ================= TOP ================= */}

                  <div
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-start
                      sm:justify-between
                      gap-3
                    "
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="text-purple-400 text-sm mt-2">
                        {item.place}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <span
                      className="
                        self-start
                        text-xs
                        font-medium
                        text-purple-300
                        bg-purple-500/10
                        border
                        border-purple-500/20
                        px-3
                        py-1.5
                        rounded-full
                        whitespace-nowrap
                      "
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* ================= DESCRIPTION ================= */}

                  <p
                    className="
                      text-gray-400
                      text-sm
                      sm:text-base
                      leading-7
                      mt-5
                    "
                  >
                    {item.description}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Exp;