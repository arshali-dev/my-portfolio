import { useState } from "react";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaFilePdf,
  FaAward,
  FaSearch,
  FaCheckCircle,
} from "react-icons/fa";

import { certifications } from "../data/certifications";

function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "AI & Machine Learning",
    "Software Engineering",
    "Cloud & DevOps",
    "Data & Databases",
    "Cybersecurity",
    "Professional Skills",
  ];

  const filteredCertifications = certifications.filter((cert) => {
    const matchesCategory =
      activeFilter === "All" || cert.category === activeFilter;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      cert.title.toLowerCase().includes(query) ||
      cert.organization.toLowerCase().includes(query) ||
      (cert.skills &&
        cert.skills.some((skill) => skill.toLowerCase().includes(query)));

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-[#00FF87]/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#A855F7]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-sm tracking-[0.25em] text-[#00FF87]">
            &gt; CERTIFICATIONS & CREDENTIALS
          </p>

          <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Certified Qualifications
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
                Official certifications, specialized training credentials, and
                accredited milestones from Microsoft, GitHub, Coursera, IBM,
                TCS, Infosys, and AICTE.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-xs text-gray-400">
                <span className="text-[#00FF87] font-semibold">
                  {filteredCertifications.length.toString().padStart(2, "0")}
                </span>{" "}
                / {certifications.length.toString().padStart(2, "0")} CREDENTIALS
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-lg border px-3.5 py-1.5 font-mono text-xs transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-[#00FF87] bg-[#00FF87]/10 text-[#00FF87] shadow-[0_0_20px_rgba(0,255,135,0.2)]"
                    : "border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-xs">
            <FaSearch
              size={13}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill, topic, issuer..."
              className="w-full rounded-lg border border-white/10 bg-[#0f172a]/70 py-2 pl-9 pr-3 text-xs text-gray-200 placeholder-gray-500 backdrop-blur-md outline-none transition-colors duration-200 focus:border-[#00FF87]/50 focus:ring-1 focus:ring-[#00FF87]/50"
            />
          </div>
        </div>

        {/* Certificate Grid */}
        {filteredCertifications.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-[#0f172a]/50 p-12 text-center text-gray-400">
            <FaAward className="mx-auto mb-3 text-gray-600" size={32} />
            <p className="font-mono text-sm">No certificates found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveFilter("All");
                setSearchQuery("");
              }}
              className="mt-4 rounded-lg border border-[#00FF87]/30 bg-[#00FF87]/10 px-4 py-2 font-mono text-xs text-[#00FF87] hover:bg-[#00FF87]/20"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCertifications.map((certificate, index) => (
              <article
                key={certificate.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/65 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#00FF87]/40 hover:shadow-[0_20px_60px_rgba(0,255,135,0.08)]"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#00FF87]/[0.04] via-transparent to-[#A855F7]/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top Neon Line */}
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FF87] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col">
                  {/* Icon + Number + Badge */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00FF87]/20 bg-[#00FF87]/5 text-[#00FF87] transition-all duration-300 group-hover:scale-110 group-hover:border-[#00FF87]/50 group-hover:shadow-[0_0_20px_rgba(0,255,135,0.15)]">
                      <FaCertificate size={18} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-md border border-[#00FF87]/20 bg-[#00FF87]/5 px-2 py-0.5 font-mono text-[10px] text-[#00FF87]">
                        {certificate.year}
                      </span>
                      <span className="font-mono text-2xl font-semibold text-white/10 group-hover:text-[#00FF87]/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Organization & Date */}
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-xs uppercase tracking-wider text-[#60EFFF]">
                      {certificate.organization}
                    </p>
                    <span className="font-mono text-[11px] text-gray-500 whitespace-nowrap">
                      {certificate.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-2.5 text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#00FF87]">
                    {certificate.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 line-clamp-2 text-xs leading-5 text-gray-400">
                    {certificate.description}
                  </p>

                  {/* Category Pill */}
                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-gray-300">
                      {certificate.category}
                    </span>
                    {certificate.badge && (
                      <span className="rounded-full border border-[#60EFFF]/20 bg-[#60EFFF]/5 px-2.5 py-0.5 font-mono text-[10px] text-[#60EFFF]">
                        {certificate.badge}
                      </span>
                    )}
                  </div>

                  {/* Skills Pills */}
                  {certificate.skills && certificate.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {certificate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-gray-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Credential ID if present */}
                  {certificate.credentialId && (
                    <div className="mt-4 flex items-center gap-1.5 font-mono text-[10px] text-gray-500">
                      <FaCheckCircle className="text-[#00FF87]/70" size={10} />
                      <span className="truncate">
                        ID: {certificate.credentialId}
                      </span>
                    </div>
                  )}
                </div>

                {/* View Certificate & External Verification Buttons */}
                <div className="relative z-10 mt-6 flex flex-col gap-2 pt-4 border-t border-white/5">
                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#00FF87]/20 bg-[#00FF87]/5 px-4 py-2 text-xs font-medium text-[#00FF87] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00FF87]/50 hover:bg-[#00FF87]/10 hover:shadow-[0_0_20px_rgba(0,255,135,0.1)]"
                  >
                    <FaFilePdf size={12} />
                    <span>View Certificate</span>
                    <FaExternalLinkAlt
                      size={9}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </a>

                  {certificate.verificationUrl && (
                    <a
                      href={certificate.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 font-mono text-[10px] text-gray-500 hover:text-[#60EFFF] transition-colors duration-200"
                    >
                      <span>Verify Online</span>
                      <FaExternalLinkAlt size={8} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;