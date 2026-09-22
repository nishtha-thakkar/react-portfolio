import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0b101b] text-white px-6 md:px-10 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-14">
          <p className="text-purple-400 text-sm font-semibold tracking-[3px] mb-3">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Contact{" "}
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

          <p className="text-gray-400 max-w-xl mx-auto mt-5 leading-7">
            Have an opportunity or want to work together? Feel free
            to get in touch with me.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ================= LEFT SIDE ================= */}

          <div
            className="
              bg-[#101725]
              border
              border-gray-800
              rounded-2xl
              p-7
              sm:p-8
            "
          >
            <h3 className="text-2xl font-semibold">
              Let's work together.
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              I'm interested in frontend development opportunities
              where I can contribute, learn and continue building
              modern web applications.
            </p>

            {/* Email */}

            <a
              href="mailto:nishthathakkar3@gmail.com"
              className="
                flex
                items-center
                gap-4
                mt-8
                group
              "
            >
              <div
                className="
                  w-12
                  h-12
                  shrink-0
                  rounded-xl
                  bg-purple-500/10
                  text-purple-400
                  flex
                  items-center
                  justify-center
                  group-hover:bg-purple-500
                  group-hover:text-white
                  transition
                  duration-300
                "
              >
                <FaEnvelope />
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">
                  EMAIL
                </p>

                <p
                  className="
                    text-sm
                    sm:text-base
                    text-gray-200
                    group-hover:text-purple-400
                    transition
                    break-all
                  "
                >
                  nishthathakkar3@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}

            <a
              href="tel:+919104070353"
              className="
                flex
                items-center
                gap-4
                mt-6
                group
              "
            >
              <div
                className="
                  w-12
                  h-12
                  shrink-0
                  rounded-xl
                  bg-purple-500/10
                  text-purple-400
                  flex
                  items-center
                  justify-center
                  group-hover:bg-purple-500
                  group-hover:text-white
                  transition
                  duration-300
                "
              >
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">
                  PHONE
                </p>

                <p
                  className="
                    text-gray-200
                    group-hover:text-purple-400
                    transition
                  "
                >
                  +91 91040 70353
                </p>
              </div>
            </a>

            {/* ================= SOCIAL LINKS ================= */}

            <div className="mt-9 pt-7 border-t border-gray-800">

              <p className="text-sm text-gray-500 mb-4">
                FIND ME ONLINE
              </p>

              <div className="flex gap-3">

                {/* GitHub */}

                <a
                  href="https://github.com/nishtha-thakkar"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="
                    w-11
                    h-11
                    rounded-lg
                    border
                    border-gray-700
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-white
                    hover:border-purple-500
                    hover:bg-purple-500/10
                    hover:-translate-y-1
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
                    w-11
                    h-11
                    rounded-lg
                    border
                    border-gray-700
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-white
                    hover:border-purple-500
                    hover:bg-purple-500/10
                    hover:-translate-y-1
                    transition
                    duration-300
                  "
                >
                  <FaLinkedinIn />
                </a>

              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div
            className="
              bg-[#101725]
              border
              border-gray-800
              rounded-2xl
              p-7
              sm:p-8
            "
          >
            <h3 className="text-xl font-semibold mb-6">
              Send me a message
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.currentTarget;

                const name = form.name.value;
                const email = form.email.value;
                const message = form.message.value;

                const subject = encodeURIComponent(
                  `Portfolio enquiry from ${name}`
                );

                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                );

                window.location.href =
                  `mailto:nishthathakkar3@gmail.com?subject=${subject}&body=${body}`;
              }}
            >

              {/* Name */}

              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="text-sm text-gray-400"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="
                    w-full
                    mt-2
                    bg-[#080c16]
                    border
                    border-gray-700
                    rounded-lg
                    px-4
                    py-3
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-purple-500
                    transition
                  "
                />
              </div>

              {/* Email */}

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="text-sm text-gray-400"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="
                    w-full
                    mt-2
                    bg-[#080c16]
                    border
                    border-gray-700
                    rounded-lg
                    px-4
                    py-3
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-purple-500
                    transition
                  "
                />
              </div>

              {/* Message */}

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-sm text-gray-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="
                    w-full
                    mt-2
                    bg-[#080c16]
                    border
                    border-gray-700
                    rounded-lg
                    px-4
                    py-3
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    focus:border-purple-500
                    transition
                    resize-none
                  "
                ></textarea>
              </div>

              {/* Submit Button */}

              <button
                type="submit"
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-gradient-to-r
                  from-purple-600
                  to-indigo-600
                  px-6
                  py-3
                  rounded-lg
                  font-semibold
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-purple-900/30
                  transition
                  duration-300
                  cursor-pointer
                "
              >
                Send Message

                <FaPaperPlane className="text-sm" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;