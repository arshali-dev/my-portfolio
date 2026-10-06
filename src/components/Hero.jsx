import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

const roles = [
  "Software Developer",
  "Software Engineer",
  "Backend Engineer",
  "Full-Stack Developer",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Continuous typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = isDeleting ? 45 : 90;

    if (!isDeleting && displayedRole === currentRole) {
      delay = 1500;
    } else if (isDeleting && displayedRole === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayedRole === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && displayedRole === "") {
        setIsDeleting(false);
        setRoleIndex((previous) => (previous + 1) % roles.length);
      } else if (isDeleting) {
        setDisplayedRole((previous) => previous.slice(0, -1));
      } else {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-[#00FF87]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-[#A855F7]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="animate-fade-up">

          {/* Terminal Label */}
          <p className="mb-5 font-mono text-sm tracking-widest text-[#00FF87]">
            &gt; BUILDING_THE_FUTURE
          </p>

          {/* Name */}
          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            I'm{" "}
            <span className="neon-text text-[#00FF87]">
              Arsh Ali
            </span>
          </h1>

          {/* Animated Job Title */}
          <div className="mt-5 min-h-[5.5rem] sm:min-h-[4.5rem]">
            <h2
              className="text-2xl font-bold leading-snug text-gray-300 sm:text-3xl lg:text-4xl"
              aria-label={roles[roleIndex]}
            >
              <span
                className="text-[#60EFFF]"
                aria-hidden="true"
              >
                {displayedRole}
              </span>
              <span
                className="ml-1 inline-block font-normal text-[#00FF87] animate-pulse"
                aria-hidden="true"
              >
                |
              </span>
            </h2>
          </div>

          {/* Updated Bio */}
          <p className="mt-3 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Results-driven <span className="text-gray-200 font-medium">Software Developer</span> specializing in scalable backend architectures, high-performance REST APIs, and modern full-stack systems using <span className="text-[#00FF87] font-medium">Java</span>, <span className="text-[#00FF87] font-medium">Spring Boot</span>, <span className="text-[#60EFFF] font-medium">PostgreSQL</span>, and <span className="text-[#60EFFF] font-medium">React.js</span>. Focused on clean-code principles, cloud-native deployments with <span className="text-purple-400 font-medium">AWS</span>, and integrating practical <span className="text-[#00FF87] font-medium">AI & LLM solutions</span> to solve complex real-world challenges.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="rounded-lg bg-[#00FF87] px-6 py-3 font-semibold text-[#030712] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,135,0.45)]"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-lg border border-[#00FF87]/40 px-6 py-3 font-semibold text-[#00FF87] transition-all duration-300 hover:-translate-y-1 hover:border-[#00FF87] hover:bg-[#00FF87]/10 hover:shadow-[0_0_25px_rgba(0,255,135,0.2)]"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5">

            <a
              href="https://github.com/arshali-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 transition-all duration-300 hover:scale-125 hover:text-[#00FF87] hover:drop-shadow-[0_0_10px_rgba(0,255,135,0.7)]"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/arsh-ali-b18039256/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 transition-all duration-300 hover:scale-125 hover:text-[#60EFFF] hover:drop-shadow-[0_0_10px_rgba(96,239,255,0.7)]"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://www.instagram.com/arsh786_ali?stkn=MWVlNThxNjRxa3dhcw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 transition-all duration-300 hover:scale-125 hover:text-[#E1306C] hover:drop-shadow-[0_0_10px_rgba(225,48,108,0.7)]"
            >
              <FaInstagram size={24} />
            </a>

          </div>

          {/* Developer Terminal */}
          <div className="mt-8 max-w-xl overflow-hidden rounded-xl border border-[#00FF87]/20 bg-black/40 shadow-[0_0_30px_rgba(0,255,135,0.06)] backdrop-blur-xl">

            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

              <span className="ml-2 font-mono text-[10px] text-gray-600">
                arsh@developer:~
              </span>
            </div>

            <div className="p-4 font-mono text-xs leading-6 sm:text-sm">

              <p className="text-gray-500">$ whoami</p>
              <p className="text-[#00FF87]">arsh-ali</p>

              <p className="mt-1 text-gray-500">$ current_stack</p>
              <p className="text-[#60EFFF]">
                Java • Spring Boot • PostgreSQL • React
              </p>

              <p className="mt-1 text-gray-500">$ exploring</p>
              <p className="text-purple-400">
                Cloud • AWS • LLMs • AI
              </p>

              <p className="mt-1 text-gray-500">$ status</p>
              <p className="text-[#00FF87]">
                Open to opportunities
                <span className="cursor-blink" />
              </p>

            </div>
          </div>
        </div>

        {/* RIGHT PROFILE */}
        <div className="flex justify-center md:justify-end">

          <div className="group/profile relative animate-float">

            {/* Outer Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[#00FF87]/20 blur-3xl transition-all duration-700 group-hover/profile:scale-110 group-hover/profile:bg-[#2563EB]/25" />

            {/* Profile Container */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-[#00FF87]/50 p-2 shadow-[0_0_40px_rgba(0,255,135,0.15)] transition-all duration-700 group-hover/profile:border-[#60EFFF] group-hover/profile:shadow-[0_0_60px_rgba(37,99,235,0.35)] sm:h-80 sm:w-80">

              {/* Grayscale Image */}
              <img
                src="/profile.jpg"
                alt="Arsh Ali"
                className="relative z-10 h-full w-full rounded-full object-cover grayscale transition-all duration-700 ease-out group-hover/profile:scale-105 group-hover/profile:grayscale-0 group-hover/profile:brightness-90 group-hover/profile:contrast-110"
              />

              {/* Blue / Purple Color Overlay */}
              <div className="pointer-events-none absolute inset-2 z-20 rounded-full bg-gradient-to-br from-[#7C3AED]/50 via-[#2563EB]/35 to-[#06B6D4]/45 opacity-0 mix-blend-color transition-opacity duration-700 group-hover/profile:opacity-100" />

              {/* Blue Lighting */}
              <div className="pointer-events-none absolute left-0 top-1/4 z-20 h-32 w-32 rounded-full bg-[#2563EB]/40 opacity-0 blur-[60px] transition-opacity duration-700 group-hover/profile:opacity-100" />

              {/* Purple Lighting */}
              <div className="pointer-events-none absolute right-0 top-1/3 z-20 h-32 w-32 rounded-full bg-[#A855F7]/40 opacity-0 blur-[60px] transition-opacity duration-700 group-hover/profile:opacity-100" />

            </div>

            {/* Status Badge */}
            <div className="absolute -right-4 -top-4 rounded-xl border border-[#A855F7]/20 bg-[#0f172a]/90 px-4 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#A855F7]/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <p className="font-mono text-xs text-gray-400">
                STATUS
              </p>

              <p className="mt-1 text-sm font-semibold text-[#00FF87]">
                Available
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <a
        href="#experience"
        aria-label="Scroll to experience"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 transition hover:text-[#00FF87]"
      >
        <FaArrowDown className="animate-bounce" />
      </a>

    </section>
  );
}

export default Hero;