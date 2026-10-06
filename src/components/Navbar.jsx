import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const handleNavClick = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#030712]/85 backdrop-blur-xl">

      <div className="mx-auto max-w-7xl px-6">

        {/* ================= NAVBAR TOP ================= */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, "home")}
            className="font-mono text-lg font-semibold tracking-wide text-[#00FF87] transition-all duration-300 hover:text-[#60EFFF]"
          >
            &lt;Arsh /&gt;
          </a>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden items-center gap-7 md:flex">

            {/* Home */}
            <a
              href="#home"
              onClick={(event) => handleNavClick(event, "home")}
              className="text-sm text-gray-300 transition-all duration-300 hover:text-[#00FF87]"
            >
              Home
            </a>

            {/* Skills */}
            <a
              href="#skills"
              onClick={(event) => handleNavClick(event, "skills")}
              className="text-sm text-gray-300 transition-all duration-300 hover:text-[#00FF87]"
            >
              Skills
            </a>

            {/* Experience */}
            <a
              href="#experience"
              onClick={(event) => handleNavClick(event, "experience")}
              className="text-sm text-gray-300 transition-all duration-300 hover:text-[#00FF87]"
            >
              Experience
            </a>

            {/* Projects */}
            <a
              href="#projects"
              onClick={(event) => handleNavClick(event, "projects")}
              className="text-sm text-gray-300 transition-all duration-300 hover:text-[#00FF87]"
            >
              Projects
            </a>

            {/* Certifications */}
            <a
              href="#certifications"
              onClick={(event) =>
                handleNavClick(event, "certifications")
              }
              className="text-sm text-gray-300 transition-all duration-300 hover:text-[#00FF87]"
            >
              Certifications
            </a>

            {/* API Lab */}
            <a
              href="#api-lab"
              onClick={(event) => handleNavClick(event, "api-lab")}
              className="text-sm text-gray-300 transition-all duration-300 hover:text-[#00FF87]"
            >
              API Lab
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, "contact")}
              className="text-sm text-gray-300 transition-all duration-300 hover:text-[#00FF87]"
            >
              Contact
            </a>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/arshali-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-[#00FF87]"
            >
              <FaGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/arsh-ali-b18039256/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-[#60EFFF]"
            >
              <FaLinkedin size={18} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/arsh786_ali?stkn=MWVlNThxNjRxa3dhcw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-[#E1306C]"
            >
              <FaInstagram size={18} />
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="hidden items-center gap-2 rounded-lg border border-[#00FF87]/30 px-3 py-2 text-sm font-medium text-[#00FF87] transition-all duration-300 hover:bg-[#00FF87]/10 hover:shadow-[0_0_20px_rgba(0,255,135,0.15)] sm:flex"
            >
              <FaDownload size={13} />
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition-all duration-300 hover:border-[#00FF87]/40 hover:text-[#00FF87] md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FaTimes size={18} />
              ) : (
                <FaBars size={18} />
              )}
            </button>

          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "max-h-[500px] pb-5 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-xl border border-white/10 bg-[#0f172a]/80 p-3 backdrop-blur-xl">

            {/* Home */}
            <a
              href="#home"
              onClick={(event) => handleNavClick(event, "home")}
              className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition-all duration-300 hover:bg-[#00FF87]/5 hover:text-[#00FF87]"
            >
              Home
            </a>

            {/* Skills */}
            <a
              href="#skills"
              onClick={(event) => handleNavClick(event, "skills")}
              className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition-all duration-300 hover:bg-[#00FF87]/5 hover:text-[#00FF87]"
            >
              Skills
            </a>

            {/* Experience */}
            <a
              href="#experience"
              onClick={(event) => handleNavClick(event, "experience")}
              className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition-all duration-300 hover:bg-[#00FF87]/5 hover:text-[#00FF87]"
            >
              Experience
            </a>

            {/* Projects */}
            <a
              href="#projects"
              onClick={(event) => handleNavClick(event, "projects")}
              className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition-all duration-300 hover:bg-[#00FF87]/5 hover:text-[#00FF87]"
            >
              Projects
            </a>

            {/* Certifications */}
            <a
              href="#certifications"
              onClick={(event) =>
                handleNavClick(event, "certifications")
              }
              className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition-all duration-300 hover:bg-[#00FF87]/5 hover:text-[#00FF87]"
            >
              Certifications
            </a>

            {/* API Lab */}
            <a
              href="#api-lab"
              onClick={(event) => handleNavClick(event, "api-lab")}
              className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition-all duration-300 hover:bg-[#00FF87]/5 hover:text-[#00FF87]"
            >
              API Lab
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, "contact")}
              className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition-all duration-300 hover:bg-[#00FF87]/5 hover:text-[#00FF87]"
            >
              Contact
            </a>

            {/* Mobile Resume */}
            <a
              href="/resume.pdf"
              download
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-[#00FF87]/30 px-4 py-3 text-sm font-medium text-[#00FF87] transition-all duration-300 hover:bg-[#00FF87]/10"
            >
              <FaDownload size={13} />
              Download Resume
            </a>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;