import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

import { projects } from "../data/projects";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Backend",
    "Backend + Security",
    "Frontend",
    "Frontend + API",
    "AI",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-[#00FF87]/5 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#A855F7]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mb-12">

          <p className="font-mono text-sm tracking-[0.25em] text-[#00FF87]">
            &gt; PROJECTS
          </p>

          <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Things I've Built
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                A selection of applications and systems built using
                Java, Spring Boot, React, databases, APIs, and modern
                development technologies.
              </p>

            </div>

            <div className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-xs text-gray-500">
              {filteredProjects.length
                .toString()
                .padStart(2, "0")}{" "}
              PROJECTS
            </div>

          </div>

        </div>

        {/* ================= FILTERS ================= */}

        <div className="mb-10 flex flex-wrap gap-2">

          {filters.map((filter) => (

            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg border px-4 py-2.5 text-xs font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "border-[#00FF87] bg-[#00FF87]/10 text-[#00FF87] shadow-[0_0_18px_rgba(0,255,135,0.1)]"
                  : "border-white/10 bg-white/[0.02] text-gray-400 hover:-translate-y-0.5 hover:border-[#00FF87]/40 hover:bg-[#00FF87]/5 hover:text-[#00FF87]"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* ================= PROJECT GRID ================= */}

        <div className="grid gap-6 md:grid-cols-2">

          {filteredProjects.map((project) => (

            <article
              key={project.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/65 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#00FF87]/40 hover:shadow-[0_20px_60px_rgba(0,255,135,0.08)] sm:p-8"
            >

              {/* Hover Background */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#00FF87]/[0.04] via-transparent to-[#A855F7]/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top Neon Line */}

              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FF87] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">

                {/* ================= NUMBER + CATEGORY ================= */}

                <div className="mb-7 flex items-center justify-between">

                  <span className="font-mono text-3xl font-semibold text-white/10 transition-all duration-500 group-hover:text-[#00FF87]/20">
                    {project.number}
                  </span>

                  <div className="flex items-center gap-2">

                    {/* Featured */}

                    {project.featured && (
                      <span className="flex items-center gap-1 rounded-full border border-[#00FF87]/20 bg-[#00FF87]/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#00FF87]">

                        <FaStar size={9} />

                        Featured

                      </span>
                    )}

                    {/* Category */}

                    <span className="rounded-full border border-[#60EFFF]/15 bg-[#60EFFF]/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#60EFFF]">
                      {project.category}
                    </span>

                  </div>

                </div>

                {/* ================= PROJECT IMAGE ================= */}

                <div className="relative mb-6 flex h-52 w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#020617]">

                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-contain object-center p-2 transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Image Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/30 via-transparent to-transparent" />

                  {/* Hover Neon Border */}

                  <div className="pointer-events-none absolute inset-0 rounded-xl border border-transparent transition-all duration-500 group-hover:border-[#00FF87]/40" />

                </div>

                {/* ================= TITLE ================= */}

                <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#00FF87]">
                  {project.title}
                </h3>

                {/* ================= DESCRIPTION ================= */}

                <p className="mt-4 min-h-[72px] text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* ================= HIGHLIGHTS ================= */}

                <div className="mt-6 space-y-3">

                  {project.highlights.map((highlight) => (

                    <div
                      key={highlight}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-400 transition-colors duration-300 hover:text-gray-300"
                    >

                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00FF87] shadow-[0_0_7px_rgba(0,255,135,0.5)]" />

                      <span>
                        {highlight}
                      </span>

                    </div>

                  ))}

                </div>

                {/* ================= TECHNOLOGIES ================= */}

                <div className="mt-7">

                  <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-gray-600">
                    // Tech Stack
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (

                      <span
                        key={technology}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[11px] text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00FF87]/30 hover:bg-[#00FF87]/5 hover:text-[#00FF87]"
                      >
                        {technology}
                      </span>

                    ))}

                  </div>

                </div>

                {/* ================= PROJECT LINKS ================= */}

                <div className="mt-8 flex items-center gap-5 border-t border-white/5 pt-5">

                  {/* GitHub */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#00FF87]"
                  >

                    <FaGithub />

                    GitHub

                  </a>

                  {/* Live Demo */}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#60EFFF]"
                    >

                      <FaExternalLinkAlt size={12} />

                      Live Demo

                    </a>
                  )}

                  {/* Explore */}

                  <span className="ml-auto flex items-center gap-2 font-mono text-xs text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#00FF87]">

                    Explore

                    <FaArrowRight size={10} />

                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* ===================================================== */}
        {/* ================= GITHUB CTA ========================= */}
        {/* ===================================================== */}

        <div className="mt-16 flex flex-col items-center justify-center gap-7 sm:flex-row">

          {/* ================= PROFILE PHOTO ================= */}

          <div className="group relative">

            {/* Outer Neon Glow */}

            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#00FF87] via-[#60EFFF] to-[#A855F7] opacity-30 blur-md transition-all duration-500 group-hover:opacity-80" />

            {/* Photo Container */}

            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[#00FF87]/40 bg-[#020617] p-1 shadow-[0_0_25px_rgba(0,255,135,0.12)] transition-all duration-500 group-hover:scale-105 group-hover:border-[#00FF87] group-hover:shadow-[0_0_40px_rgba(0,255,135,0.25)]">

              <img
                src="/myProfile.jpg"
                alt="Profile photo"
                className="h-full w-full rounded-full object-cover object-center grayscale transition-all duration-500 group-hover:grayscale-0"
              />

            </div>

          </div>

          {/* ================= GITHUB CONTENT ================= */}

          <div className="text-center sm:text-left">

            <p className="font-mono text-xs text-gray-600">
              // More projects available on GitHub
            </p>

            <a
              href="https://github.com/arshali-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-2 rounded-lg border border-[#00FF87]/20 bg-[#00FF87]/5 px-5 py-2.5 text-sm font-medium text-[#00FF87] transition-all duration-300 hover:-translate-y-1 hover:border-[#00FF87]/50 hover:bg-[#00FF87]/10 hover:shadow-[0_0_20px_rgba(0,255,135,0.1)]"
            >

              View GitHub Profile

              <FaArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;