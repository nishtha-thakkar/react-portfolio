import React from "react";

function Skill() {
  const skill = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "REST API",
  ];

  return (
    <section
      id="skills"
      className="bg-[#050B1F] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My Skills
        </h2>

        {/* Main Card */}
        <div className="bg-[#131C32] border border-gray-700 rounded-1xl p-8 md:p-12">

          <p className="text-center text-gray-300 text-lg mb-12">
            Technologies I use for building responsive and scalable web applications.
          </p>

          {/* Skill Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

            {skill.map((skill, index) => (
              <div
                key={index}
                className="bg-[#2A3142] border border-gray-600 rounded-2xl py-8 px-4 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold">
                  {skill}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Skill;