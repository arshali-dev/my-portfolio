import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const sendMessage = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=arshali737100@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-[#00FF87]/5 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#A855F7]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-sm tracking-[0.25em] text-[#00FF87]">
            &gt; CONTACT
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Connect
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
            Interested in working together, discussing an opportunity,
            or connecting on a technical project? Feel free to reach out.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* ================= CONTACT INFORMATION ================= */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/65 p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#00FF87]/20 hover:shadow-[0_20px_60px_rgba(0,255,135,0.05)] sm:p-8">

            {/* Card Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#00FF87]/5 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10">

              <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  // Get in touch
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  Let's build something useful.
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  I'm open to software development opportunities,
                  backend engineering roles, and interesting technical
                  projects.
                </p>
              </div>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arshali737100@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group/email mb-4 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#00FF87]/30 hover:bg-[#00FF87]/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#00FF87]/20 bg-[#00FF87]/5 text-[#00FF87] transition-all duration-300 group-hover/email:scale-110">
                  <FaEnvelope />
                </div>

                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm text-gray-300 transition-colors group-hover/email:text-[#00FF87]">
                    arshali737100@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="mb-4 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#60EFFF]/20">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#60EFFF]/20 bg-[#60EFFF]/5 text-[#60EFFF]">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    Bangalore, Karnataka
                  </p>
                </div>
              </div>

              {/* GitHub + LinkedIn + Instagram */}
              <div className="grid gap-4 sm:grid-cols-3">

                {/* GitHub */}
                <a
                  href="https://github.com/arshali-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/github flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#00FF87]/30 hover:bg-[#00FF87]/5"
                >
                  <FaGithub
                    size={22}
                    className="shrink-0 text-gray-400 transition-all duration-300 group-hover/github:scale-110 group-hover/github:text-[#00FF87]"
                  />

                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
                      GitHub
                    </p>

                    <p className="mt-1 truncate text-xs text-gray-300 transition-colors group-hover/github:text-[#00FF87]">
                      arshali-dev
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/arsh-ali-b18039256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/linkedin flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#60EFFF]/30 hover:bg-[#60EFFF]/5"
                >
                  <FaLinkedin
                    size={22}
                    className="shrink-0 text-gray-400 transition-all duration-300 group-hover/linkedin:scale-110 group-hover/linkedin:text-[#60EFFF]"
                  />

                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
                      LinkedIn
                    </p>

                    <p className="mt-1 truncate text-xs text-gray-300 transition-colors group-hover/linkedin:text-[#60EFFF]">
                      Arsh Ali
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/arsh786_ali?stkn=MWVlNThxNjRxa3dhcw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/insta flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#E1306C]/40 hover:bg-[#E1306C]/5"
                >
                  <FaInstagram
                    size={22}
                    className="shrink-0 text-gray-400 transition-all duration-300 group-hover/insta:scale-110 group-hover/insta:text-[#E1306C]"
                  />

                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
                      Instagram
                    </p>

                    <p className="mt-1 truncate text-xs text-gray-300 transition-colors group-hover/insta:text-[#E1306C]">
                      arsh786_ali
                    </p>
                  </div>
                </a>

              </div>

              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Arsh_Ali_Resume.pdf"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-[#00FF87]/30 bg-[#00FF87]/[0.02] px-5 py-3 text-sm font-semibold text-[#00FF87] transition-all duration-300 hover:-translate-y-1 hover:border-[#00FF87]/60 hover:bg-[#00FF87]/10 hover:shadow-[0_0_25px_rgba(0,255,135,0.12)]"
              >
                <FaDownload size={13} />
                Download Resume
              </a>

            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/65 p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#60EFFF]/20 hover:shadow-[0_20px_60px_rgba(96,239,255,0.04)] sm:p-8">

            {/* Card Glow */}
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[#60EFFF]/5 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10">

              <div className="mb-7">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  // Send a message
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  Start a conversation
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Fill in the details below and Gmail will open with
                  your message prepared.
                </p>
              </div>

              <form
                onSubmit={sendMessage}
                className="space-y-5"
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-gray-500"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-[#00FF87]/50 focus:bg-[#00FF87]/[0.02] focus:ring-1 focus:ring-[#00FF87]/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-gray-500"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-[#00FF87]/50 focus:bg-[#00FF87]/[0.02] focus:ring-1 focus:ring-[#00FF87]/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-gray-500"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    placeholder="Tell me about your opportunity or project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-white/20 focus:border-[#00FF87]/50 focus:bg-[#00FF87]/[0.02] focus:ring-1 focus:ring-[#00FF87]/20"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00FF87] px-5 py-3 font-semibold text-[#030712] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,135,0.25)] active:translate-y-0"
                >
                  <FaPaperPlane size={13} />
                  Send Message
                </button>

              </form>

              {/* Status */}
              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00FF87] shadow-[0_0_7px_rgba(0,255,135,0.7)]" />

                <p className="font-mono text-[10px] text-gray-600">
                  Gmail connection ready
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;