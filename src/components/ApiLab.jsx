import { useState } from "react";
import {
  FaServer,
  FaCopy,
  FaCheck,
  FaBolt,
  FaCircle,
} from "react-icons/fa";

const endpoints = {
  "/api/profile": {
    method: "GET",
    description: "Fetch developer profile information",
    response: {
      status: 200,
      message: "Profile fetched successfully",
      data: {
        name: "Arsh Ali",
        role: "Software Developer",
        primaryStack: "Java + Spring Boot",
        location: "Bengaluru, India",
      },
    },
  },

  "/api/skills": {
    method: "GET",
    description: "Fetch technical skills",
    response: {
      status: 200,
      message: "Skills fetched successfully",
      data: {
        backend: ["Java", "Spring Boot", "JPA", "REST API"],
        frontend: ["React.js", "JavaScript", "Tailwind CSS"],
        database: ["PostgreSQL", "MySQL", "MongoDB"],
        tools: ["Git", "Postman", "Docker", "Linux"],
      },
    },
  },

  "/api/projects": {
    method: "GET",
    description: "Fetch portfolio projects",
    response: {
      status: 200,
      message: "Projects fetched successfully",
      data: {
        totalProjects: 5,
        featured: [
          "Book Catalog Management System",
          "Secure Bank Management System",
        ],
      },
    },
  },
};

function ApiLab() {
  const [selectedEndpoint, setSelectedEndpoint] =
    useState("/api/profile");

  const [response, setResponse] = useState(
    endpoints["/api/profile"].response
  );

  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const endpoint = endpoints[selectedEndpoint];

  const sendRequest = () => {
    setLoading(true);
    setCopied(false);

    setTimeout(() => {
      setResponse(endpoint.response);
      setLoading(false);
    }, 500);
  };

  const selectEndpoint = (path) => {
    setSelectedEndpoint(path);
    setResponse(endpoints[path].response);
    setCopied(false);
  };

  const copyResponse = async () => {
    try {
      await navigator.clipboard.writeText(
        JSON.stringify(response, null, 2)
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="api-lab"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-[#60EFFF]/5 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#00FF87]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-sm tracking-[0.25em] text-[#00FF87]">
            &gt; API_LAB
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Interactive API Playground
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
            Explore simulated REST API responses based on my developer
            profile, technical skills, and projects.
          </p>
        </div>

        {/* API Console */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#020617]/90 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">

          {/* Terminal Header */}
          <div className="flex flex-col gap-3 border-b border-white/10 bg-white/[0.02] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />

              <span className="ml-3 font-mono text-[10px] text-gray-600">
                api-playground
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-gray-500">
              <FaServer size={11} />
              portfolio-api
            </div>

          </div>

          <div className="grid lg:grid-cols-[280px_1fr]">

            {/* Endpoint Sidebar */}
            <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">

              <div className="mb-5 flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  Endpoints
                </p>

                <span className="font-mono text-[10px] text-gray-700">
                  GET
                </span>
              </div>

              <div className="space-y-2">
                {Object.entries(endpoints).map(
                  ([path, data]) => (
                    <button
                      key={path}
                      type="button"
                      onClick={() => selectEndpoint(path)}
                      className={`group w-full rounded-xl border px-3 py-3 text-left transition-all duration-300 ${
                        selectedEndpoint === path
                          ? "border-[#00FF87]/40 bg-[#00FF87]/10 shadow-[0_0_20px_rgba(0,255,135,0.06)]"
                          : "border-white/5 bg-white/[0.02] hover:-translate-y-0.5 hover:border-[#00FF87]/20 hover:bg-[#00FF87]/5"
                      }`}
                    >
                      <div className="flex items-center gap-2">

                        <span className="rounded bg-[#00FF87]/10 px-1.5 py-0.5 font-mono text-[9px] font-bold text-[#00FF87]">
                          {data.method}
                        </span>

                        <span
                          className={`font-mono text-xs ${
                            selectedEndpoint === path
                              ? "text-white"
                              : "text-gray-400 group-hover:text-gray-300"
                          }`}
                        >
                          {path}
                        </span>

                      </div>
                    </button>
                  )
                )}
              </div>

              {/* Sidebar Status */}
              <div className="mt-6 rounded-xl border border-white/5 bg-black/20 p-4">
                <div className="flex items-center gap-2">
                  <FaCircle className="text-[7px] text-[#00FF87]" />
                  <span className="font-mono text-[10px] text-gray-500">
                    SERVER STATUS
                  </span>
                </div>

                <p className="mt-2 font-mono text-xs text-[#00FF87]">
                  Simulation Ready
                </p>
              </div>

            </div>

            {/* Main Panel */}
            <div className="p-5 sm:p-7">

              {/* Request */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                    Request
                  </p>

                  <span className="font-mono text-[10px] text-gray-700">
                    HTTP/1.1
                  </span>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">

                  <div className="flex flex-1 items-center rounded-xl border border-white/10 bg-black/30 px-4 py-3">

                    <span className="mr-3 rounded bg-[#00FF87]/10 px-2 py-1 font-mono text-[10px] font-bold text-[#00FF87]">
                      {endpoint.method}
                    </span>

                    <span className="font-mono text-sm text-gray-300">
                      {selectedEndpoint}
                    </span>

                  </div>

                  <button
                    type="button"
                    onClick={sendRequest}
                    disabled={loading}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#00FF87] px-6 py-3 font-mono text-sm font-semibold text-[#030712] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(0,255,135,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <FaBolt size={11} />

                    {loading ? "Sending..." : "Send Request"}
                  </button>

                </div>

                <p className="mt-3 text-xs text-gray-600">
                  {endpoint.description}
                </p>
              </div>

              {/* Response */}
              <div className="mt-8">

                <div className="mb-3 flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                    Response
                  </p>

                  <button
                    type="button"
                    onClick={copyResponse}
                    className="flex items-center gap-2 rounded-md px-2 py-1 text-xs text-gray-500 transition-all hover:bg-[#00FF87]/5 hover:text-[#00FF87]"
                  >
                    {copied ? (
                      <>
                        <FaCheck />
                        Copied
                      </>
                    ) : (
                      <>
                        <FaCopy />
                        Copy JSON
                      </>
                    )}
                  </button>
                </div>

                {/* Response Window */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40">

                  {/* Status Bar */}
                  <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-3">

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-2 font-mono text-xs text-[#00FF87]">
                        <FaCircle className="text-[6px]" />
                        {response.status}
                      </span>

                      <span className="font-mono text-xs text-gray-500">
                        OK
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-gray-700">
                        application/json
                      </span>

                      <span className="font-mono text-[10px] text-gray-600">
                        124ms
                      </span>
                    </div>

                  </div>

                  {/* JSON */}
                  <pre className="max-h-[420px] overflow-auto p-5 font-mono text-xs leading-6 text-gray-300 sm:text-sm">
                    <code>
                      {JSON.stringify(response, null, 2)}
                    </code>
                  </pre>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#60EFFF]/30 hover:bg-[#60EFFF]/[0.03]">
            <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
              Protocol
            </p>

            <p className="mt-2 font-mono text-sm text-[#60EFFF]">
              REST / HTTP
            </p>
          </div>

          <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00FF87]/30 hover:bg-[#00FF87]/[0.03]">
            <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
              Response
            </p>

            <p className="mt-2 font-mono text-sm text-[#00FF87]">
              application/json
            </p>
          </div>

          <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#A855F7]/30 hover:bg-[#A855F7]/[0.03]">
            <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
              Status
            </p>

            <p className="mt-2 font-mono text-sm text-[#00FF87]">
              200 OK
            </p>
          </div>

        </div>

        {/* Developer Note */}
        <div className="mt-8 text-center">
          <p className="font-mono text-[10px] text-gray-700">
            // Interactive frontend simulation • REST API concepts
          </p>
        </div>

      </div>
    </section>
  );
}

export default ApiLab;