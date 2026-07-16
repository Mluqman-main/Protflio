import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Frontend", "Fullstack"];

  return (
    <div className="relative bg-[#050505] text-white min-h-screen overflow-hidden">

      {/* Background Accents */}
      <div className="absolute top-1/3 -left-48 w-125 h-125 bg-cyan-500/3 blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/3 -right-48 w-100 h-100 bg-violet-500/3 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-32 md:py-40">

        {/* Header */}
        <div className="relative mb-16 lite-fade-up">

          <div className="absolute -top-8 -right-4 text-slate-800 text-4xl font-thin select-none hidden md:block">
            +
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>

            <p className="text-cyan-400/80 text-xs font-medium tracking-[0.4em] uppercase">
              Portfolio
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-2">
                Selected <br />
                <span className="text-slate-500">work.</span>
              </h1>

              <p className="text-slate-600 text-sm mt-4">
                A collection of projects that define my expertise.
              </p>
            </div>

            <div className="flex items-center p-1 bg-white/5 rounded-full border border-white/5">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 text-xs font-medium tracking-wider rounded-full transition-all duration-300 ${activeFilter === filter
                    ? "bg-white text-black"
                    : "text-slate-500 hover:text-white"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* ================= Featured Banking Project ================= */}

          <a
            href="https://frontend-banking-eta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative md:col-span-2 md:row-span-2 rounded-2xl border border-cyan-500/20 bg-[#0a0a0a] overflow-hidden hover:-translate-y-2 hover:border-cyan-400/40 transition-all duration-500"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10"></div>

            <div className="relative p-10 flex flex-col justify-between h-full min-h-[560px]">

              <div>

                <span className="px-3 py-1 rounded-full text-xs uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Featured Project
                </span>

                <h2 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">
                  Banking
                  <br />
                  Management
                  <br />
                  <span className="text-cyan-400">
                    System
                  </span>
                </h2>

                <p className="mt-8 text-slate-400 max-w-2xl leading-8">
                  A production-ready MERN Stack banking application with
                  JWT authentication, HTTP-only cookies, secure money
                  transfers, transaction history, protected routes,
                  MongoDB integration and responsive dashboard.
                </p>

              </div>

              <div>

                <div className="flex flex-wrap gap-3 mb-8">

                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                    React
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                    Node.js
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                    Express
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                    MongoDB
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                    Tailwind CSS
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
                    JWT
                  </span>

                </div>

                <div className="flex gap-4">

                  <span className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold">
                    Live Demo
                  </span>

                  <span className="px-6 py-3 rounded-xl border border-white/10">
                    View Project →
                  </span>

                </div>

              </div>

            </div>

          </a>
          {/* ================= E-Commerce Project ================= */}

          <a
            href="#"
            className="group relative rounded-2xl border border-white/5 bg-[#0a0a0a] overflow-hidden hover:-translate-y-2 hover:border-cyan-400/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative p-8 flex flex-col justify-between min-h-[270px]">

              <div>

                <span className="text-xs text-cyan-400 tracking-widest uppercase">
                  Full Stack
                </span>

                <h3 className="text-3xl font-bold mt-5 mb-4">
                  E-Commerce Platform
                </h3>

                <p className="text-slate-400 leading-7">
                  Modern MERN e-commerce application featuring product
                  management, authentication, shopping cart, order
                  processing and responsive UI.
                </p>

              </div>

              <div>

                <div className="flex flex-wrap gap-2 mt-8">

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
                    React
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
                    Node.js
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
                    Express
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
                    MongoDB
                  </span>

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-slate-500 text-sm">
                    2026
                  </span>

                  <span className="flex items-center gap-2 text-cyan-400 font-medium group-hover:translate-x-2 transition">
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </span>

                </div>

              </div>

            </div>

          </a>
          {/* ================= AI Content Generator ================= */}

          <a
            href="#"
            className="group relative rounded-2xl border border-white/5 bg-[#0a0a0a] overflow-hidden hover:-translate-y-2 hover:border-cyan-400/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative p-8 flex flex-col justify-between min-h-[270px]">

              <div>

                <span className="text-xs text-cyan-400 tracking-widest uppercase">
                  AI Project
                </span>

                <h3 className="text-3xl font-bold mt-5 mb-4">
                  AI Content Generator
                </h3>

                <p className="text-slate-400 leading-7">
                  AI-powered web application for generating blogs,
                  marketing copy and social media content using modern
                  language models with a responsive interface.
                </p>

              </div>

              <div>

                <div className="flex flex-wrap gap-2 mt-8">

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
                    React
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
                    Node.js
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
                    OpenAI
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
                    Tailwind
                  </span>

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-slate-500 text-sm">
                    2025
                  </span>

                  <span className="flex items-center gap-2 text-cyan-400 font-medium group-hover:translate-x-2 transition">
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </span>

                </div>

              </div>

            </div>

          </a>



        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-24 lite-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-slate-500 text-sm mb-8">
            Interested in seeing more of my work?
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://github.com/Mluqman-main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition duration-300"
            >
              Explore GitHub

              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="mailto:your@email.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
            >
              Contact Me
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}