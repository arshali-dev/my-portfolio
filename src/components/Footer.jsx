import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617]/85 backdrop-blur-xl px-6 py-10">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-40 w-40 rounded-full bg-[#00FF87]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Left */}
          <div className="text-center md:text-left">

            <a
              href="#home"
              className="font-mono text-lg font-semibold text-[#00FF87] transition-all duration-300 hover:text-[#60EFFF] hover:drop-shadow-[0_0_10px_rgba(0,255,135,0.5)]"
            >
              &lt;Arsh /&gt;
            </a>

            <p className="mt-2 text-sm text-gray-500">
              Java Developer • Backend Engineer • Full-Stack Developer
            </p>

          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/arshali-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#00FF87]/40 hover:bg-[#00FF87]/5 hover:text-[#00FF87] hover:shadow-[0_0_18px_rgba(0,255,135,0.1)]"
            >
              <FaGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/arsh-ali-b18039256/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#60EFFF]/40 hover:bg-[#60EFFF]/5 hover:text-[#60EFFF] hover:shadow-[0_0_18px_rgba(96,239,255,0.1)]"
            >
              <FaLinkedin size={18} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/arsh786_ali?stkn=MWVlNThxNjRxa3dhcw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#E1306C]/40 hover:bg-[#E1306C]/5 hover:text-[#E1306C] hover:shadow-[0_0_18px_rgba(225,48,108,0.1)]"
            >
              <FaInstagram size={18} />
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=arshali737100@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#A855F7]/40 hover:bg-[#A855F7]/5 hover:text-[#A855F7] hover:shadow-[0_0_18px_rgba(168,85,247,0.1)]"
            >
              <FaEnvelope size={17} />
            </a>

            {/* Back To Top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#00FF87]/20 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#00FF87]/50 hover:bg-[#00FF87]/5 hover:text-[#00FF87] hover:shadow-[0_0_18px_rgba(0,255,135,0.12)]"
            >
              <FaArrowUp size={14} />
            </a>

          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-8 border-t border-white/5 pt-6 text-center">

          <p className="font-mono text-xs text-gray-600">
            © {new Date().getFullYear()} Arsh Ali. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;