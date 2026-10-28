"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { RESUME_URL } from "../data/site";

const RESULTS = [
  { value: "$500K+", label: "Tokenized RWA assets secured" },
  { value: "70K+", label: "Transactions a month at Faktora" },
  { value: "99.9%", label: "Transaction reliability" },
  { value: "40%", label: "Lower execution latency" },
];

const FOCUS = [
  "DeFi infrastructure",
  "RWA tokenization",
  "Web3 payments",
  "AI-driven DeFi",
  "Blockchain agents",
];

const EXPERIENCE = [
  {
    initials: "NE",
    role: "Technical Lead",
    company: "Nerve Esports",
    url: "https://staging.nerve-esports.com/",
    period: "2026 – Present",
    current: true,
    stack: ["Technical leadership", "Tournament platform", "Esports"],
    points: [
      "Leading engineering and technical direction for Nerve Esports, a competitive gaming organization and tournament platform",
      "Overseeing the platform's tournament registration, match schedules, live results, stats and team rosters",
    ],
  },
  {
    initials: "OX",
    role: "AI Educator",
    company: "Oxtech Academy",
    url: "https://oxtechacademy.com/",
    location: "Nigeria",
    period: "2026 – Present",
    current: true,
    stack: ["Artificial Intelligence", "Hands-on projects", "Mentorship"],
    points: [
      "Teaching the Artificial Intelligence program at Oxtech Academy, a tech academy and learning hub in Nigeria",
      "Helping beginners and career switchers move past tutorials to practical, job-ready AI skills through hands-on projects",
    ],
  },
  {
    initials: "AS",
    role: "Lead Smart Contract Developer",
    company: "Assetrix",
    location: "Lagos",
    period: "2025 – 2026",
    stack: ["EIP-2535", "EIP-712", "Blockradar", "RWA"],
    points: [
      "Implemented upgradeable smart contracts leveraging EIP-2535 (Diamond Standard) and EIP-712 signature verification, delivering modular contract upgrades and secure investor interactions across $500K+ in tokenized RWA assets",
      "Integrated Blockradar infrastructure into smart contracts, enabling non-custodial wallet creation, stablecoin deposits, and seamless RWA transaction flows with multi-chain support",
      "Engineered smart contract–based investor protection mechanisms, including milestone-based escrow, refund processes, and emergency fund recovery, to ensure transparency and safeguard capital in tokenized real estate",
    ],
  },
  {
    initials: "FA",
    role: "Blockchain & AI Developer",
    company: "Faktora",
    location: "Switzerland",
    period: "2024 – 2025",
    stack: ["Solidity", "Coinbase SDK", "Zora", "Multi-agent AI"],
    points: [
      "Developed and deployed Solidity smart contracts powering an AI-driven DeFi platform, handling 70K+ real-time transactions monthly with optimized execution and reduced latency by 40%",
      "Integrated protocols and blockchain infrastructure (Coinbase SDK, Zora, custom Solidity contracts) to enable secure authentication, automated on-chain operations, and 99.9% transaction reliability",
      "Designed multi-agent smart contract workflows with AI-driven analysis models, enabling autonomous execution of complex DeFi strategies, predictive transaction insights across 5+ protocols, and a 30% improvement in liquidity management efficiency",
    ],
  },
  {
    initials: "V3",
    role: "Blockchain Developer",
    company: "Vow3",
    period: "2023 – 2024",
    stack: ["Chainlink Functions", "Next.js", "Web3.js"],
    points: [
      "Engineered and deployed Solidity smart contracts on multi-chain networks, enabling 500+ covenant transactions with secure role-based access control and Chainlink Functions integration",
      "Developed a Web3-enabled frontend with Next.js and Web3.js, allowing users to seamlessly create, manage, and visualize covenants with wallet integration and responsive UI",
    ],
  },
];

const SKILLS = [
  {
    title: "Frontend",
    items: [
      "React.js / Next.js",
      "TypeScript / JavaScript",
      "TailwindCSS / SCSS",
      "Redux / Context API",
      "REST APIs",
      "Framer Motion",
    ],
  },
  {
    title: "Blockchain",
    items: [
      "Solidity / Smart Contracts",
      "Hardhat",
      "Ethers.js / Viem",
      "IPFS",
      "DeFi / Cross Chain Protocols",
      "Real World Assets (RWA)",
    ],
  },
  {
    title: "Contract standards",
    items: [
      "ERC20 / ERC721 / ERC1155",
      "EIP-2535 (Diamond)",
      "EIP-2771 (Meta-txs)",
      "EIP-712 (Typed signing)",
      "EIP-3156 (Flash loans)",
    ],
  },
  {
    title: "AI",
    items: [
      "LLM Integration (OpenAI, Anthropic)",
      "Vector Databases & Embeddings",
      "AI Agent Development",
      "Prompt Engineering",
      "AI Application Architecture",
    ],
  },
];

const CERTIFICATIONS = [
  { title: "Web3 Development", issuer: "Dapp Mentor Academy" },
  { title: "Professional Frontend Development", issuer: "Oxgital" },
  { title: "Smart Contract Security", issuer: "Blockchain Council" },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const SubHeading = ({ label, meta }) => (
  <div className="mb-8 flex items-center gap-4">
    <p className="label !text-zinc-300">{label}</p>
    <span className="h-px flex-1 bg-white/[0.07]" />
    <p className="label">{meta}</p>
  </div>
);

const Intro = () => (
  <div className="grid gap-4 lg:grid-cols-12">
    <motion.div
      {...reveal}
      className="glass rounded-[32px] p-2.5 lg:col-span-4 lg:row-span-2"
    >
      <div className="relative mx-auto aspect-[4/5] h-full max-h-[560px] w-full overflow-hidden rounded-[24px] lg:aspect-auto lg:max-h-none lg:min-h-[480px]">
        <Image
          src="/images/portfolio-image.jpg"
          alt="Sulayman Abdul-Mujeeb, full-stack blockchain developer"
          fill
          sizes="(min-width: 1024px) 380px, 90vw"
          className="object-cover object-top"
          priority
        />
        <div className="glass-strong absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-zinc-50">
              Sulayman Abdul-Mujeeb
            </p>
            <p className="truncate text-xs text-zinc-400">
              Full-stack blockchain developer
            </p>
          </div>
          <span className="inline-flex flex-none items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-white">
            Open to work
          </span>
        </div>
      </div>
    </motion.div>

    <motion.div
      {...reveal}
      transition={{ ...reveal.transition, delay: 0.1 }}
      className="glass flex flex-col rounded-[32px] p-6 sm:p-10 lg:col-span-8"
    >
      <p className="label">
        <span className="text-accent">01</span>
        <span className="mx-2 text-zinc-700">/</span>
        About me
      </p>
      <h2 className="mt-6 text-[clamp(1.75rem,3.6vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.03em] text-zinc-50">
        I build secure, scalable systems that bridge traditional software with{" "}
        <span className="text-accent">decentralized technology.</span>
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
        I’m a full-stack software engineer specializing in blockchain with over
        4 years of experience building smart contracts and decentralized
        applications on Ethereum. I’ve built end-to-end dapps including smart
        contracts, backend services, and modern web interfaces, and I’m
        exploring AI-driven DeFi automation and intelligent blockchain agents.
      </p>
      <div className="mt-auto flex flex-col gap-6 pt-8 sm:flex-row sm:items-end sm:justify-between">
        <ul className="flex flex-wrap gap-2">
          {FOCUS.map((item) => (
            <li
              key={item}
              className="glass-inset rounded-full px-3 py-1.5 text-[13px] text-zinc-300"
            >
              {item}
            </li>
          ))}
        </ul>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-glass btn-sm flex-none self-start border border-white/10"
        >
          <ArrowDownTrayIcon className="h-4 w-4" /> Resume
        </a>
      </div>
    </motion.div>

    <motion.ul
      {...reveal}
      transition={{ ...reveal.transition, delay: 0.2 }}
      className="grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-4"
    >
      {RESULTS.map(({ value, label }) => (
        <li
          key={label}
          className="glass flex flex-col justify-between rounded-[28px] p-5 sm:p-6"
        >
          <p className="text-3xl font-medium tracking-[-0.03em] text-zinc-50 sm:text-4xl">
            {value}
          </p>
          <p className="mt-6 text-[13px] leading-snug text-zinc-500">{label}</p>
        </li>
      ))}
    </motion.ul>
  </div>
);

const Experience = () => (
  <div>
    <SubHeading label="Experience" meta={`${EXPERIENCE.length} roles`} />
    <ol className="space-y-4">
      {EXPERIENCE.map(
        (
          {
            initials,
            role,
            company,
            url,
            location,
            period,
            current,
            stack,
            points,
          },
          i,
        ) => (
          <motion.li
            key={company}
            {...reveal}
            className="relative grid gap-3 md:grid-cols-[170px_1fr] md:gap-10"
          >
            <div className="md:pt-8">
              <p className="font-mono text-sm text-zinc-300">{period}</p>
              {location && (
                <p className="mt-1 text-sm text-zinc-500">{location}</p>
              )}
              {current && (
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent ring-1 ring-inset ring-accent/20">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  Current
                </span>
              )}
            </div>

            <div className="relative md:pl-10">
              <span
                className={`absolute bottom-[-1rem] left-0 top-0 hidden w-px bg-white/[0.08] md:block ${
                  i === EXPERIENCE.length - 1 ? "!bottom-auto h-10" : ""
                }`}
              />
              <span
                className={`absolute left-[-4.5px] top-9 hidden h-2.5 w-2.5 rounded-full md:block ${
                  current
                    ? "bg-accent ring-4 ring-accent/20"
                    : "bg-zinc-600 ring-4 ring-zinc-900"
                }`}
              />

              <div className="glass rounded-[28px] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-accent/10 font-mono text-sm font-bold text-accent ring-1 ring-inset ring-accent/20">
                    {initials}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl font-medium tracking-tight text-zinc-50">
                      {role}
                    </h3>
                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-0.5 inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-accent"
                      >
                        {company}
                        <ArrowUpRightIcon className="h-3.5 w-3.5 text-zinc-600 transition-colors group-hover:text-accent" />
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm text-zinc-400">{company}</p>
                    )}
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400 sm:text-[15px]"
                    >
                      <span className="mt-[9px] h-1 w-3 flex-none rounded-full bg-accent/70" />
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-5">
                  {stack.map((item) => (
                    <li
                      key={item}
                      className="glass-inset rounded-full px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.li>
        ),
      )}
    </ol>
  </div>
);

const Toolkit = () => (
  <div>
    <SubHeading label="Toolkit" meta="Skills & certifications" />
    <motion.div {...reveal} className="glass rounded-[32px] p-2">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map(({ title, items }, i) => (
          <div key={title} className="glass-inset rounded-[24px] p-5 sm:p-6">
            <p className="label">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 text-lg font-medium tracking-tight text-zinc-50">
              {title}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[13px] text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ul className="mt-2 grid gap-2 md:grid-cols-3">
        {CERTIFICATIONS.map(({ title, issuer }) => (
          <li
            key={title}
            className="glass-inset flex items-center gap-4 rounded-[24px] p-4 sm:p-5"
          >
            <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
              <AcademicCapIcon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium text-zinc-100">{title}</p>
              <p className="mt-0.5 text-[13px] text-zinc-500">{issuer}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="space-y-20 py-20 sm:space-y-24 sm:py-28">
      <Intro />
      <Experience />
      <Toolkit />
    </section>
  );
};

export default AboutSection;
