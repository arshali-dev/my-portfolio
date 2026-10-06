import { useState } from "react";

import {
  FaCode,
  FaServer,
  FaDesktop,
  FaDatabase,
  FaTools,
  FaCloud,
  FaMicrochip,
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaDocker,
  FaAws,
  FaLock,
  FaShieldAlt,
  FaNetworkWired,
  FaCogs,
  FaTerminal,
} from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiSpringboot,
  SiHibernate,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiVite,
  SiTailwindcss,
  SiIntellijidea,
} from "react-icons/si";

import { skills } from "../data/skills";

function TechFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // =========================================================
  // CATEGORY ICONS
  // =========================================================

  const categoryIcons = {
    Languages: FaCode,
    Backend: FaServer,
    Frontend: FaDesktop,
    Databases: FaDatabase,
    Tools: FaTools,
    "Cloud & Security": FaCloud,
    "Core CS": FaMicrochip,
  };

  // =========================================================
  // TECHNOLOGY ICONS
  // =========================================================

  const skillIcons = {
    Java: FaJava,
    C: SiC,
    "C++": SiCplusplus,
    JavaScript: FaJs,
    Python: FaPython,
    SQL: FaDatabase,

    "Spring Boot": SiSpringboot,
    "Spring MVC": FaServer,
    Hibernate: SiHibernate,
    JPA: FaDatabase,
    "REST APIs": FaCode,
    Maven: FaCogs,

    "React.js": FaReact,
    HTML5: FaHtml5,
    CSS3: FaCss3Alt,
    "Tailwind CSS": SiTailwindcss,
    Bootstrap: FaBootstrap,
    Vite: SiVite,

    PostgreSQL: SiPostgresql,
    MySQL: SiMysql,
    MongoDB: SiMongodb,

    Git: FaGitAlt,
    GitHub: FaGithub,
    Postman: SiPostman,
    "VS Code": FaCode,
    "IntelliJ IDEA": SiIntellijidea,
    Linux: FaLinux,

    AWS: FaAws,
    Docker: FaDocker,
    Cybersecurity: FaShieldAlt,
    Authentication: FaLock,
    Authorization: FaLock,
    JWT: FaLock,

    "Data Structures": FaCogs,
    Algorithms: FaCode,
    OOP: FaCode,
    DBMS: FaDatabase,
    "Operating Systems": FaTerminal,
    "Computer Networks": FaNetworkWired,
  };

  // =========================================================
  // ORIGINAL BRAND COLORS
  // =========================================================

  const skillColors = {
    Java: "#ED8B00",
    C: "#A8B9CC",
    "C++": "#00599C",
    JavaScript: "#F7DF1E",
    Python: "#3776AB",
    SQL: "#4479A1",

    "Spring Boot": "#6DB33F",
    "Spring MVC": "#6DB33F",
    Hibernate: "#59666C",
    JPA: "#B07219",
    "REST APIs": "#00A98F",
    Maven: "#C71A36",

    "React.js": "#61DAFB",
    HTML5: "#E34F26",
    CSS3: "#1572B6",
    "Tailwind CSS": "#06B6D4",
    Bootstrap: "#7952B3",
    Vite: "#646CFF",

    PostgreSQL: "#4169E1",
    MySQL: "#4479A1",
    MongoDB: "#47A248",

    Git: "#F05032",
    GitHub: "#FFFFFF",
    Postman: "#FF6C37",
    "VS Code": "#007ACC",
    "IntelliJ IDEA": "#FE315D",
    Linux: "#FCC624",

    AWS: "#FF9900",
    Docker: "#2496ED",
    Cybersecurity: "#00FF87",
    Authentication: "#00FF87",
    Authorization: "#A855F7",
    JWT: "#FB015B",

    "Data Structures": "#60EFFF",
    Algorithms: "#60EFFF",
    OOP: "#A855F7",
    DBMS: "#4479A1",
    "Operating Systems": "#60EFFF",
    "Computer Networks": "#00FF87",
  };

  const categories = [
    "All",
    ...skills.map((item) => item.category),
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* ===================================================== */}
      {/* BACKGROUND GLOW */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-[#00FF87]/5 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#60EFFF]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <div className="mb-12">

          <p className="font-mono text-sm tracking-[0.25em] text-[#00FF87]">
            &gt; TECH_STACK
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
            A collection of technologies and tools I use for
            backend, frontend, databases, cloud, security, and
            software development.
          </p>

        </div>

        {/* ===================================================== */}
        {/* FILTER BUTTONS */}
        {/* ===================================================== */}

        <div className="mb-12 flex flex-wrap gap-3">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "border-[#00FF87] bg-[#00FF87]/10 text-[#00FF87] shadow-[0_0_18px_rgba(0,255,135,0.12)]"
                  : "border-white/10 bg-white/[0.02] text-gray-400 hover:-translate-y-0.5 hover:border-[#00FF87]/40 hover:bg-[#00FF87]/5 hover:text-[#00FF87]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* ===================================================== */}
        {/* SKILL CARDS */}
        {/* ===================================================== */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {filteredSkills.map((group) => {

            const CategoryIcon =
              categoryIcons[group.category] || FaCode;

            return (
              <div
                key={group.category}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/65 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#00FF87]/40 hover:shadow-[0_20px_50px_rgba(0,255,135,0.08)]"
              >

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00FF87]/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top Neon Line */}
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FF87] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  {/* ================================================= */}
                  {/* CATEGORY ICON */}
                  {/* ================================================= */}

                  <div className="flex flex-col items-center text-center">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#00FF87]/20 bg-[#00FF87]/5 text-[#00FF87] shadow-[0_0_20px_rgba(0,255,135,0.05)] transition-all duration-500 group-hover:scale-110 group-hover:border-[#00FF87]/50 group-hover:bg-[#00FF87]/10 group-hover:shadow-[0_0_25px_rgba(0,255,135,0.15)]">

                      <CategoryIcon size={23} />

                    </div>

                    <h3 className="mt-4 font-mono text-sm font-semibold tracking-wide text-[#60EFFF] transition-colors duration-300 group-hover:text-[#00FF87]">
                      {group.category}
                    </h3>

                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* ================================================= */}
                  {/* INDIVIDUAL SKILLS */}
                  {/* ================================================= */}

                  <div className="flex flex-wrap justify-center gap-2">

                    {group.skills.map((skill) => {

                      const SkillIcon =
                        skillIcons[skill] || FaCode;

                      const iconColor =
                        skillColors[skill] || "#9CA3AF";

                      return (
                        <span
                          key={skill}
                          className="group/skill flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#00FF87]/40 hover:bg-[#00FF87]/5 hover:text-[#00FF87] hover:shadow-[0_0_15px_rgba(0,255,135,0.1)]"
                        >

                          {/* Brand Colored Icon */}
                          <SkillIcon
                            size={16}
                            style={{
                              color: iconColor,
                            }}
                            className="shrink-0 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:drop-shadow-[0_0_6px_rgba(0,255,135,0.7)]"
                          />

                          {/* Technology Name */}
                          <span>
                            {skill}
                          </span>

                        </span>
                      );
                    })}

                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* ===================================================== */}
        {/* STATUS */}
        {/* ===================================================== */}

        <div className="mt-10 flex items-center gap-2 font-mono text-xs text-gray-600">

          <span className="h-2 w-2 rounded-full bg-[#00FF87] shadow-[0_0_8px_rgba(0,255,135,0.8)]" />

          <span>
            {filteredSkills.reduce(
              (total, group) =>
                total + group.skills.length,
              0
            )}{" "}
            technologies available
          </span>

        </div>

      </div>
    </section>
  );
}

export default TechFilter;