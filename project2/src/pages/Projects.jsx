import {
  FaGithub,
  FaArrowRight,
  FaReact,
  FaJs,
} from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "React E-Commerce",
      description:
        "A responsive e-commerce application with product listing, category filtering, product details, cart functionality and API integration.",
      technologies: ["React", "Redux Toolkit", "Axios", "Tailwind CSS"],
      github:
        "https://github.com/nishtha-thakkar/react-e-commerce-website",
        live: " https://e-commerce-three-liard-28.vercel.app",
      icon: <FaReact />,
    },

    {
      title: "Rapid Shop",
      description:
        "A responsive shopping website built using HTML, CSS and JavaScript with an interactive and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github:
        "https://github.com/nishtha-thakkar/Javascript/tree/main/project/rapid-shop",
        live : "https://rapid-shop-8opuc4xwl-nishtha17.vercel.app",
      icon: <FaJs />,
    },

    {
      title: "Personal Portfolio",
      description:
        "A modern personal portfolio website showcasing my frontend skills, projects and development journey.",
      technologies: ["React", "Tailwind CSS", "Responsive Design"],
      github:
        "https://github.com/nishtha-thakkar/react-portfolio",
      icon: <FaReact />,
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0b101b] text-white px-6 md:px-10 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-14">

          <p className="text-purple-400 text-sm font-semibold tracking-[3px] mb-3">
            MY WORK
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-400
                to-indigo-400
                bg-clip-text
                text-transparent
              "
            >
              Projects
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
            A selection of projects I've built while learning and
            working with modern frontend technologies.
          </p>

        </div>

        {/* ================= PROJECT CARDS ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (

            <div
              key={project.title}
              className="
                group
                bg-[#101725]
                border
                border-gray-800
                rounded-2xl
                overflow-hidden
                hover:border-purple-500/50
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-purple-900/10
                transition
                duration-300
                flex
                flex-col
              "
            >

              {/* ================= TOP AREA ================= */}

              <div
                className="
                  h-44
                  bg-gradient-to-br
                  from-[#171f31]
                  to-[#0d1320]
                  flex
                  items-center
                  justify-center
                  relative
                  overflow-hidden
                "
              >

                {/* Background Number */}

                <span
                  className="
                    absolute
                    right-5
                    top-2
                    text-7xl
                    font-bold
                    text-white/[0.03]
                  "
                >
                  0{index + 1}
                </span>

                {/* Project Icon */}

                <div
                  className="
                    w-20
                    h-20
                    rounded-2xl
                    bg-purple-500/10
                    border
                    border-purple-500/20
                    flex
                    items-center
                    justify-center
                    text-4xl
                    text-purple-400
                    group-hover:scale-110
                    group-hover:rotate-3
                    transition
                    duration-300
                  "
                >
                  {project.icon}
                </div>

              </div>

              {/* ================= PROJECT INFO ================= */}

              <div className="p-6 flex flex-col flex-1">

                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p
                  className="
                    text-gray-400
                    text-sm
                    leading-6
                    mt-3
                    flex-1
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="
                        text-xs
                        text-purple-300
                        bg-purple-500/10
                        border
                        border-purple-500/20
                        px-3
                        py-1.5
                        rounded-full
                      "
                    >
                      {technology}
                    </span>

                  ))}

                </div>

                {/* ================= GITHUB BUTTON ================= */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mt-6
                    pt-5
                    border-t
                    border-gray-800
                  "
                >

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-gray-300
                      hover:text-purple-400
                      transition
                    "
                  >
                    <FaGithub />

                    View code
                  </a>

                   <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-gray-300
                      hover:text-purple-400
                      transition
                    "
                  >
                    <FaGithub />

                    live demo
                  </a>

                  <FaArrowRight
                    className="
                      text-gray-600
                      group-hover:text-purple-400
                      group-hover:translate-x-1
                      transition
                    "
                  />

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;