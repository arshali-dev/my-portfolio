import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import { experience } from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-[#00FF87]/5 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#60EFFF]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="font-mono text-sm tracking-[0.25em] text-[#00FF87]">
            &gt; EXPERIENCE
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Professional Experience
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
            Demonstrated engineering track record across production backend systems,
            resilient microservices, and automated technical solutions built for scale and reliability.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#00FF87] via-[#60EFFF]/40 to-transparent md:block" />

          {experience.map((job, index) => (
            <div
              key={index}
              className="relative mb-12 last:mb-0 md:pl-16"
            >

              {/* Timeline Dot */}
              <div className="absolute left-[7px] top-9 hidden h-7 w-7 items-center justify-center rounded-full border border-[#00FF87]/40 bg-[#030712] md:flex">
                <div className="h-2.5 w-2.5 rounded-full bg-[#00FF87] shadow-[0_0_15px_rgba(0,255,135,0.9)]" />
              </div>

              {/* Experience Card */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/65 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#00FF87]/40 hover:shadow-[0_0_35px_rgba(0,255,135,0.08)] sm:p-8">

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00FF87]/5 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Header */}
                <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-start">

                  {/* Role + Company */}
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#00FF87]/20 bg-[#00FF87]/5">
                        <FaBriefcase className="text-sm text-[#00FF87]" />
                      </div>

                      <span className="font-mono text-xs uppercase tracking-wider text-[#00FF87]">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#00FF87]">
                      {job.role}
                    </h3>

                    <p className="mt-1 text-lg font-medium text-[#60EFFF]">
                      {job.company}
                    </p>
                  </div>

                  {/* Date + Location */}
                  <div className="space-y-3 rounded-xl border border-white/5 bg-black/10 px-4 py-3 text-sm text-gray-400">

                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="shrink-0 text-[#A855F7]" />
                      <span>{job.period}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="shrink-0 text-[#A855F7]" />
                      <span>{job.location}</span>
                    </div>

                  </div>
                </div>

                {/* Divider */}
                <div className="my-7 h-px bg-gradient-to-r from-[#00FF87]/20 via-white/5 to-transparent" />

                {/* Description */}
                <p className="max-w-4xl text-sm leading-7 text-gray-400 sm:text-base">
                  {job.description}
                </p>

                {/* Key Contributions & Impact */}
                <div className="mt-7">
                  <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-[#60EFFF]">
                    // Key Contributions &amp; Impact
                  </h4>

                  <ul className="space-y-3">
                    {job.responsibilities.map(
                      (item, responsibilityIndex) => (
                        <li
                          key={responsibilityIndex}
                          className="flex gap-3 text-sm leading-6 text-gray-400 transition-colors duration-300 hover:text-gray-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00FF87] shadow-[0_0_8px_rgba(0,255,135,0.6)]" />

                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-7">
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-gray-500">
                    // Technologies
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-[#00FF87]/15 bg-[#00FF87]/5 px-3 py-1.5 font-mono text-xs text-[#00FF87] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00FF87]/50 hover:bg-[#00FF87]/10 hover:shadow-[0_0_12px_rgba(0,255,135,0.1)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;