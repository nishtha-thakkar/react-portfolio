import React from "react";

function Projects() {
  const project = [
    {
      title: "Portfolio Website",
      tech: "React JS, Tailwind CSS",
      github: "https://github.com/nishtha-thakkar/react-portfolio",
    },
    {
      title: "Rapid Shop",
      tech: "HTML, CSS, JavaScript",
      github:
        "https://github.com/nishtha-thakkar/Javascript/tree/main/project/rapid-shop",
    },

    {
      title: "E-commerce website",
      tech: "Html, Css, react",
      github: "https://github.com/nishtha-thakkar/react-e-commerce-website",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#050B1F] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Projects
        </h1>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((item, index) => (
            <div
              key={index}
              className="bg-[#2A3142] border border-gray-600 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                <h2 className="text-2xl font-bold text-blue-400 mb-4">
                  {item.title}
                </h2>

                <p className="text-gray-300 mb-8">{item.tech}</p>
              </div>

              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg w-fit"
              >
                View Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
