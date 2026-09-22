import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiRedux,
  SiAxios,
} from "react-icons/si";

function Skill() {

  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      description: "Semantic & accessible markup",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      description: "Responsive web styling",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      description: "Modern JavaScript ES6+",
    },
    {
      name: "React",
      icon: <FaReact />,
      description: "Component-based UI development",
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux />,
      description: "State management",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      description: "Utility-first styling",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      description: "Responsive UI components",
    },
    {
      name: "Axios",
      icon: <SiAxios />,
      description: "API integration",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      description: "Version control",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      description: "Code & project management",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#080c16] text-white px-6 md:px-10 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-14">

          <p className="text-purple-400 text-sm font-semibold tracking-[3px] mb-3">
            WHAT I WORK WITH
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            My{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-400
                to-indigo-400
                bg-clip-text
                text-transparent
              "
            >
              Skills
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

          <p
            className="
              text-gray-400
              max-w-2xl
              mx-auto
              mt-5
              leading-7
            "
          >
            Technologies I use to build responsive, modern and
            user-friendly web applications.
          </p>

        </div>

        {/* ================= SKILLS GRID ================= */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5
          "
        >

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="
                group
                bg-[#101725]
                border
                border-gray-800
                rounded-2xl
                p-6
                hover:border-purple-500/60
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-purple-900/10
                transition
                duration-300
              "
            >

              {/* Icon */}

              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-purple-500/10
                  text-purple-400
                  text-2xl
                  flex
                  items-center
                  justify-center
                  group-hover:bg-purple-500
                  group-hover:text-white
                  transition
                  duration-300
                "
              >
                {skill.icon}
              </div>

              {/* Skill Name */}

              <h3
                className="
                  text-lg
                  font-semibold
                  mt-5
                  text-white
                "
              >
                {skill.name}
              </h3>

              {/* Description */}

              <p
                className="
                  text-gray-500
                  text-sm
                  mt-2
                  leading-6
                "
              >
                {skill.description}
              </p>

            </div>

          ))}

        </div>

        {/* ================= BOTTOM TEXT ================= */}

        <div
          className="
            mt-12
            text-center
            bg-[#101725]
            border
            border-gray-800
            rounded-2xl
            px-6
            py-6
          "
        >

          <p className="text-gray-400">
            Currently expanding my skills in{" "}

            <span className="text-purple-400 font-semibold">
              Node.js & Backend Development
            </span>

          </p>

        </div>

      </div>
    </section>
  );
}

export default Skill;