import React from "react";

function About() {

  const about = [
    {
      number: "10+",
      title: "Projects Completed",
      color: "text-blue-400",
    },
    {
      number: "8+",
      title: "Technologies Learned",
      color: "text-cyan-400",
    },
    {
      number: "100%",
      title: "Learning Dedication",
      color: "text-indigo-400",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#050B1F] text-white py-16 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About Me
        </h1>

        {/* About Text */}
        <p className="text-gray-300 text-base md:text-xl leading-8 md:leading-10 text-center mb-12">
          I am a passionate Full Stack Developer (Trainee) with knowledge of
          HTML, CSS, JavaScript, React JS, Tailwind CSS, Git, GitHub and REST
          API. I enjoy building responsive and user-friendly web applications
          while learning new technologies.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {about.map((item, index) => (
            <div
              key={index}
              className="bg-[#2A3142] border border-gray-600 rounded-2xl p-8 text-center hover:border-blue-500 transition duration-300"
            >

              <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${item.color}`}>
                {item.number}
              </h2>

              <p className="text-gray-300 text-lg">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;