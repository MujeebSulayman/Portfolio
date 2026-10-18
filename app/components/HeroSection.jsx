"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowRightIcon,
  ArrowDownTrayIcon,
  ArrowUpRightIcon,
  CubeTransparentIcon,
  BuildingLibraryIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { projects } from "../data/projects";
import { RESUME_URL } from "../data/site";

const STATS = [
  { value: "18+", label: "Blockchain projects" },
  { value: "25+", label: "Frontend projects" },
  { value: "6+", label: "Years experience" },
];

const FOCUS = [
  { icon: CubeTransparentIcon, label: "Smart contracts" },
  { icon: BuildingLibraryIcon, label: "DeFi & RWA" },
  { icon: CpuChipIcon, label: "AI agents" },
];

const recent = projects.slice(0, 4);

const HeroSection = () => {
  return (
    <section
      id="home"
      className="grid items-center gap-12 pb-20 pt-32 sm:pt-40 lg:min-h-screen lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="mt-8 text-[clamp(3rem,8vw,5.75rem)] font-medium leading-[0.95] tracking-[-0.045em] text-zinc-50">
          Innovating
          <br />
          across
          <br />
          <TypeAnimation
            sequence={[
              "Blockchain.",
              2000,
              "DeFi.",
              2000,
              "RWA.",
              2000,
              "AI agents.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-accent"
            repeat={Infinity}
          />
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
          I bridge traditional software with decentralized technologies while
          exploring emerging areas like AI-driven DeFi automation and
          intelligent blockchain agents.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#projects" className="btn btn-primary">
            Explore projects <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-glass glass"
          >
            <ArrowDownTrayIcon className="h-4 w-4" /> Download resume
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {FOCUS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 text-sm text-zinc-400"
            >
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
                <Icon className="h-4 w-4" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      >
        <div className="glass rounded-[32px] p-5 sm:p-6">
          <div className="mt-5 grid grid-cols-3 gap-2">
            {STATS.map(({ value, label }) => (
              <div key={label} className="glass-inset rounded-2xl p-3 sm:p-4">
                <p className="text-2xl font-medium tracking-tight text-zinc-50 sm:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-[11px] leading-tight text-zinc-500 sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p className="label mt-7">Recently shipped</p>
          <ul className="mt-3 space-y-2">
            {recent.map((project) => (
              <li key={project.id}>
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-inset group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:border-white/10 hover:bg-white/[0.03]"
                >
                  <img
                    src={project.image}
                    alt=""
                    className="h-10 w-14 flex-none rounded-lg object-cover object-top ring-1 ring-white/10"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-zinc-100">
                      {project.title}
                    </p>
                    <p className="truncate font-mono text-[11px] text-zinc-500">
                      {project.tag.filter((t) => t !== "All").join(" · ")}
                    </p>
                  </div>
                  <ArrowUpRightIcon className="h-4 w-4 flex-none text-zinc-600 transition-colors group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="label mt-5 text-center !text-zinc-600">
          Solidity · TypeScript · Next.js · MCP
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
