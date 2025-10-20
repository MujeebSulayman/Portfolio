"use client";
import React from "react";
import Image from "next/image";
import { useState, useTransition } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#1c1c1c] p-5 rounded-lg">
          <h3 className="text-lg font-bold text-white mb-3">
            Frontend Development
          </h3>
          <ul className="list-none space-y-2">
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              React.js / Next.js
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              TypeScript / JavaScript
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              TailwindCSS / SCSS
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Redux / Context API
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              REST APIs
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Framer Motion
            </li>
          </ul>
        </div>

        <div className="bg-[#1c1c1c] p-5 rounded-lg">
          <h3 className="text-lg font-bold text-white mb-3">
            Blockchain Development
          </h3>
          <ul className="list-none space-y-2">
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Solidity / Smart Contracts
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Hardhat
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Ethers.js / Wagmi
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              IPFS
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              MetaMask / WalletConnect
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              DeFi / NFT / Cross Chain Protocols
            </li>
          </ul>
        </div>

        <div className="bg-[#1c1c1c] p-5 rounded-lg">
          <h3 className="text-lg font-bold text-white mb-3">Smart Contracts</h3>
          <ul className="list-none space-y-2">
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              ERC20 / ERC721 / ERC1155
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Diamond Standard (EIP-2535)
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              OpenZeppelin Contracts
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Gas Optimization
            </li>
          </ul>
        </div>

        <div className="bg-[#1c1c1c] p-5 rounded-lg">
          <h3 className="text-lg font-bold text-white mb-3">AI Development</h3>
          <ul className="list-none space-y-2">
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
              LLM Integration (OpenAI, Anthropic)
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
              Vector Databases & Embeddings
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
              AI Agent Development
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
              Prompt Engineering
            </li>
            <li className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
              AI Application Architecture
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="space-y-6">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
          
          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 top-3 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold">AS</span>
            </div>
            <div className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 border-l-4 border-blue-500 p-6 hover:from-blue-900/20 hover:to-purple-900/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Lead Smart Contract Developer</h3>
              <p className="text-blue-400 text-sm mb-1 font-medium">Assetrix, Lagos</p>
              <p className="text-blue-300 text-xs mb-4">2025 - Present</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm leading-relaxed">Implemented upgradeable smart contracts leveraging EIP-2535 (Diamond Standard) and EIP-712 signature verification, delivering modular contract upgrades and secure investor interactions across $500K+ in tokenized RWA assets</span>
            </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm leading-relaxed">Integrated Blockradar infrastructure into smart contracts, enabling non-custodial wallet creation, stablecoin deposits, and seamless RWA transaction flows with multi-chain support</span>
            </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm leading-relaxed">Engineered smart contract–based investor protection mechanisms, including milestone-based escrow, refund processes, and emergency fund recovery, to ensure transparency and safeguard capital in tokenized real estate</span>
            </li>
          </ul>
            </div>
          </div>

          <div className="relative pl-16 pb-8">
            <div className="absolute left-0 top-3 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold">FA</span>
            </div>
            <div className="bg-gradient-to-r from-purple-900/10 to-pink-900/10 border-l-4 border-purple-500 p-6 hover:from-purple-900/20 hover:to-pink-900/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Blockchain & AI Developer</h3>
              <p className="text-purple-400 text-sm mb-1 font-medium">Faktora, Switzerland</p>
              <p className="text-purple-300 text-xs mb-4">2024 - 2025</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-400 mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm leading-relaxed">Developed and deployed Solidity smart contracts powering an AI-driven DeFi platform, handling 70K+ real-time transactions monthly with optimized execution and reduced latency by 40%</span>
        </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-400 mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm leading-relaxed">Integrated protocols and blockchain infrastructure (Coinbase SDK, Zora, custom Solidity contracts) to enable secure authentication, automated on-chain operations, and 99.9% transaction reliability</span>
              </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-purple-400 mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm leading-relaxed">Designed multi-agent smart contract workflows with AI-driven analysis models, enabling autonomous execution of complex DeFi strategies, predictive transaction insights across 5+ protocols, and a 30% improvement in liquidity management efficiency</span>
              </li>
            </ul>
          </div>
          </div>

          <div className="relative pl-16">
            <div className="absolute left-0 top-3 w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold">V3</span>
          </div>
            <div className="bg-gradient-to-r from-pink-900/10 to-blue-900/10 border-l-4 border-pink-500 p-6 hover:from-pink-900/20 hover:to-blue-900/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Blockchain Developer</h3>
              <p className="text-pink-400 text-sm mb-1 font-medium">Vow3</p>
              <p className="text-pink-300 text-xs mb-4">2023 - 2024</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-pink-400 mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm leading-relaxed">Engineered and deployed Solidity smart contracts on multi-chain networks, enabling 500+ covenant transactions with secure role-based access control and Chainlink Functions integration</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-pink-400 mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm leading-relaxed">Developed a Web3-enabled frontend with Next.js and Web3.js, allowing users to seamlessly create, manage, and visualize covenants with wallet integration and responsive UI</span>
        </li>
      </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2 text-base font-normal font-sans text-gray-300 mb-4">
        <li>Web3 Development - Dapp Mentor Academy</li>
        <li>Professional Frontend Development - Oxgital</li>
        <li>Smart Contract Security - Blockchain Council</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  console.log(isPending);

  return (
    <section id="about" className="text-white py-10">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative mx-auto max-w-lg">
          {/* Animated background glow */}
          <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          
          {/* Main image container */}
          <div className="relative">
            {/* Floating decorative elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full animate-bounce opacity-80 shadow-lg shadow-blue-500/50"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-3 h-3 sm:w-5 sm:h-5 bg-purple-500 rounded-full animate-pulse opacity-80 shadow-lg shadow-purple-500/50"></div>
            <div className="absolute top-1/2 -left-4 sm:-left-6 w-3 h-3 sm:w-4 sm:h-4 bg-pink-500 rounded-full animate-ping opacity-80 shadow-lg shadow-pink-500/50"></div>
            <div className="absolute top-1/4 -right-4 sm:-right-6 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse opacity-80 shadow-lg shadow-green-500/50"></div>
            
            {/* Main image container */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden shadow-2xl border-4 border-gray-800/30">
        <Image
          src="/images/portfolio-image.jpg"
                alt="Sulay - Full-stack Blockchain Developer"
                width={448}
                height={448}
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                priority
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-full border border-white/10"></div>
            </div>
          </div>
          
          {/* Status indicator */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold shadow-xl border border-green-400/30 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="hidden sm:inline">Available for work</span>
              <span className="sm:hidden">Available</span>
            </div>
          </div>
          
          {/* Ethereum-focused floating icons with labels */}
          <div className="absolute top-8 -left-6 sm:top-12 sm:-left-12">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg animate-float">
              <span className="text-white text-lg sm:text-2xl">🔷</span>
            </div>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
              Ethereum
            </div>
          </div>
          
          <div className="absolute top-16 -right-6 sm:top-20 sm:-right-12" style={{animationDelay: '0.5s'}}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg animate-float">
              <span className="text-white text-lg sm:text-2xl">📄</span>
            </div>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
              Smart Contracts
            </div>
          </div>
          
          <div className="absolute bottom-16 -left-4 sm:bottom-20 sm:-left-8" style={{animationDelay: '1s'}}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg animate-float">
              <span className="text-white text-lg sm:text-2xl">🔄</span>
            </div>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
              DeFi Protocols
            </div>
          </div>
          
          <div className="absolute bottom-8 -right-4 sm:bottom-12 sm:-right-8" style={{animationDelay: '1.5s'}}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg animate-float">
              <span className="text-white text-lg sm:text-2xl">⚡</span>
            </div>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
              Web3 Development
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold flex text-gray-300 mb-4 mt-8 sm:mt-12 items-start justify-start">
            About Me
          </h2>
          <p className="text-sm sm:text-base font-normal font-sans text-gray-400 mb-4">
            Full-stack blockchain developer with 4+ years of experience in Web3
            and modern web development. Specialized in building decentralized
            applications (dApps) and AI agents.
            Passionate about creating secure, scalable solutions that bridge the
            gap between traditional web applications and blockchain technology.
            Experienced in DeFi protocols, On-chain AI agents, and cross-chain
            applications.
          </p>

          <div className="flex flex-col sm:flex-row justify-start mt-6 sm:mt-8 gap-2 sm:gap-3">
            <button
              onClick={() => handleTabChange("skills")}
              className={`group relative flex items-center justify-center space-x-2 px-3 py-2 sm:px-4 sm:py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                tab === "skills"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-gray-600/50"
              }`}
            >
              <span className="text-base sm:text-lg">⚡</span>
              <span className="text-xs sm:text-sm font-semibold">Skills & Expertise</span>
              {tab === "skills" && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl animate-pulse"></div>
              )}
            </button>
            
            <button
              onClick={() => handleTabChange("experience")}
              className={`group relative flex items-center justify-center space-x-2 px-3 py-2 sm:px-4 sm:py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                tab === "experience"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-gray-600/50"
              }`}
            >
              <span className="text-base sm:text-lg">🚀</span>
              <span className="text-xs sm:text-sm font-semibold">Professional Journey</span>
              {tab === "experience" && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl animate-pulse"></div>
              )}
            </button>
            
            <button
              onClick={() => handleTabChange("certification")}
              className={`group relative flex items-center justify-center space-x-2 px-3 py-2 sm:px-4 sm:py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                tab === "certification"
                  ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg shadow-pink-500/25"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-gray-600/50"
              }`}
            >
              <span className="text-base sm:text-lg">🎓</span>
              <span className="text-xs sm:text-sm font-semibold">Certifications</span>
              {tab === "certification" && (
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-xl animate-pulse"></div>
              )}
            </button>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
