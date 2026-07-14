import React from "react";

function Contact() {

  const contact = [
    {
      title: "Email",
      info: "nishtha@gmail.com",
    },
    {
      title: "Phone",
      info: " 9876543210",
    },
    {
      title: "Location",
      info: "Rajkot, Gujarat",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#050B1F] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Contact Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {contact.map((item, index) => (
            <div
              key={index}
              className="bg-[#2A3142] border border-gray-600 rounded-2xl p-6 text-center hover:border-blue-500 transition duration-300"
            >
              <h2 className="text-2xl font-bold text-blue-400 mb-3">
                {item.title}
              </h2>

              <p className="text-gray-300">
                {item.info}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Contact;