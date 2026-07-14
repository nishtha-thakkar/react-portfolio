import React from "react";

function Exp() {

  const experience = [
    {
      year: "2025 - Present",
      company: "Red & White Multimedia Education",
      role: "Full Stack Development Trainee",
    },
    {
      year: "2025",
      company: "Personal Projects",
      role: "Built React & JavaScript Projects",
    },
    {
      year: "2024",
      company: "Self Learning",
      role: "Started Learning Web Development",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#050B1F] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Experience
        </h1>

        <div className="grid grid-cols-1 gap-6">

          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-[#2A3142] border border-gray-600 rounded-2xl p-6 hover:border-blue-500 transition duration-300"
            >
              <h2 className="text-xl font-bold text-blue-400">
                {item.role}
              </h2>

              <p className="text-gray-300 mt-2">
                {item.company}
              </p>

              <p className="text-gray-400 mt-1">
                {item.year}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Exp;