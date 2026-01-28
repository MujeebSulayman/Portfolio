"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";

const projectsData = [
	{
		id: 14,
		title: 'Hemivent',
		description:
			'A decentralized event management platform built on blockchain technology. Enables organizers to create and manage events with secure payment processing and ticket distribution through smart contracts.',
		image: '/images/project/Hemivent.jpg',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/Dapp-event-app',
		previewUrl: 'https://dapp-event-app.vercel.app/',
	},
	{
		id: 4,
		title: 'NFT Mart',
		description:
			'A full-featured NFT marketplace deployed on Sepolia testnet. Supports NFT minting, trading, ownership transfers, and marketplace management through smart contracts.',
		image: '/images/project/nftmart.jpg',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/nft-mart',
		previewUrl: 'https://nft-mart-seven.vercel.app/',
	},
	{
		id: 27,
		title: 'NFT Mart',
		description:
			"An advanced Ethereum-focused arbitrage and MEV bot that scans decentralized exchanges (DEXs) for profitable opportunities, simulates execution, and submits bundles directly to builders using Flashbots. Designed for production-ready deployment post-Merge, it leverages flash loans, priority fee boosting, and real-time monitoring to maximize profit while maintaining on-chain safety.",
		image: '/images/project/flashbot.png',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/HemSniper',
		previewUrl: 'https://hem-sniper.vercel.app/',
	},
	{
		id: 16,
		title: 'HemDex',
		description:
			'A decentralized token exchange platform similar to Uniswap, deployed on Sepolia testnet. Enables seamless ERC-20 token swaps with automated market-making functionality.',
		image: '/images/project/Tokenswap.jpg',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/Token-Swap',
		previewUrl: 'https://hemdex.vercel.app/',
	},
	{
		id: 17,
		title: 'HemToken-ICO',
		description:
			'An ERC-20 token sale platform deployed on the Hardhat testnet. Implements token creation, distribution, and auction functionality through smart contracts.',
		image: '/images/project/TokenSale.jpg',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/HemToken-ICO',
		previewUrl: 'https://hem-token-ico.vercel.app/',
	},
	{
		id: 1,
		title: 'HemProperty',
		description:
			'A decentralized real estate platform built on Ethereum. Features property listing, buying, selling, and review systems powered by smart contracts, ensuring transparent and secure transactions.',
		image: '/images/project/hemproperty.png',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/HemProperty',
		previewUrl: 'https://hem-property.vercel.app/',
	},
	{
		id: 2,
		title: 'HemDealersip',
		description:
			'A decentralized car dealership application powered by Web3 technologies. Supports seamless vehicle listing, cross-chain transactions using the Across protocol, and secure ownership transfers through Ethereum smart contracts.',
		image: '/images/project/hemDealer.png',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/Car-dealership-dapp',
		previewUrl: 'https://car-dealership-dapp.vercel.app/',
	},
	{
		id: 20,
		title: 'HemShop',
		description:
			'A Web3-powered e-commerce platform built with Next.js, TypeScript, and Ethereum smart contracts. Features crypto payments, NFT integration for product authenticity, decentralized marketplace functionality, and comprehensive seller/product management systems.',
		image: '/images/project/hemshop.png',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/HemShop-dApp',
		previewUrl: 'https://hemshop.vercel.app/',
	},
	{
		id: 15,
		title: 'People Utility Token',
		description:
			'A blockchain technology website developed to showcase and promote a utility token prior to its launch. Features token information, roadmap, and whitepaper integration.',
		image: '/images/project/1.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/PUT',
		previewUrl: 'https://peopleutilitytoken.vercel.app/',
	},
	{
		id: 19,
		title: 'Steely',
		description:
			'An immersive 3D virtual exhibition platform developed for a PhD research project. Features interactive art displays and virtual gallery spaces that simulate real-world exhibition experiences.',
		image: '/images/project/2.PNG',
		tag: ['All', 'Web2'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 23,
		title: 'Brain3',
		description:
			'A sophisticated NFT marketplace UI showcase featuring modern design elements, complex gradients, and responsive layouts. Demonstrates advanced CSS implementation and creative visual solutions.',
		image: '/images/project/Brain3.jpg',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Brain3-Dapp-UI',
		previewUrl: 'https://brain3-dapp-ui.vercel.app/',
	},
	{
		id: 5,
		title: 'whisperChain',
		description:
			'A decentralized messaging platform built on Ethereum that enables encrypted, private messaging with built-in payment capabilities. WhisperChain combines blockchain technology with IPFS for secure, censorship-resistant communication.',
		image: '/images/project/whisperChain.png',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/WhisperChain',
		previewUrl: 'https://whisper-chain-five.vercel.app/',
	},
	{
		id: 18,
		title: 'Admin Dashboard',
		description:
			'A comprehensive CRUD admin interface featuring dynamic data visualization with charts, color customization tools, rich text editing capabilities, and transaction management systems.',
		image: '/images/project/10.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Admin-Dashboard',
		previewUrl: 'https://hemdash.netlify.app/',
	},
	{
		id: 24,
		title: 'Destro Shopping App',
		description:
			'A modern food delivery application featuring an intuitive user interface and integrated payment gateway. Demonstrates efficient state management and secure transaction processing.',
		image: '/images/project/3.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Destro-Shopping-App',
		previewUrl: 'https://hem-destro.vercel.app/',
	},

	{
		id: 22,
		title: 'Anime',
		description:
			'An anime discovery platform showcasing API integration skills. Features a curated collection of anime titles with detailed information and a user-friendly browsing experience.',
		image: '/images/project/5.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Anime-collections/',
		previewUrl: 'https://hemanime.vercel.app/',
	},
	{
		id: 8,
		title: 'Travel Guide App',
		description:
			'A comprehensive travel guide for Ibadan, featuring local attractions, cultural insights, and travel recommendations. Helps visitors explore and navigate the city effectively.',
		image: '/images/project/6.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Travel-App',
		previewUrl: 'https://hemtravel.vercel.app/',
	},
	{
		id: 26,
		title: 'HemFit',
		description:
			'A comprehensive fitness platform featuring over 5,000 exercises with detailed instructions and demonstration videos. Helps users achieve their fitness goals through structured workouts.',
		image: '/images/project/7.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/fitness-app',
		previewUrl: 'https://hemfit.netlify.app/',
	},
	{
		id: 11,
		title: 'My Portfolio',
		description:
			'A personal portfolio website showcasing my projects and skills. Built with modern web technologies and featuring responsive design, smooth animations, and optimal performance.',
		image: '/images/project/portfolio.png',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/New-Portfolio',
		previewUrl: 'https://thehemjay.vercel.app/',
	},
	{
		id: 12,
		title: 'HemNote',
		description:
			'An AI-powered prompt sharing platform enabling users to discover, create, and share creative prompts. Features user authentication, prompt management, and community interaction.',
		image: '/images/project/11.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Notebook',
		previewUrl: 'https://hemnote.vercel.app/',
	},
	{
		id: 7,
		title: 'Emagify AI',
		description:
			'An AI-powered image manipulation tool offering features like color restoration, image resizing, background removal, and object removal. Leverages advanced AI algorithms for precise results.',
		image: '/images/project/12.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Emagify-AI',
		previewUrl: 'https://emagify-ai.vercel.app/',
	},
	{
		id: 21,
		title: 'TheSocials',
		description:
			'A social media platform inspired by Instagram, enabling users to share posts and memories. Features user authentication, content management, and interactive social features.',
		image: '/images/project/4.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Social-Application',
		previewUrl: 'https://hem-destro.vercel.app/',
	},
	{
		id: 3,
		title: 'Decentralized Job Board',
		description:
			'A decentralized job board platform built on Ethereum. Features job listing, application management, and secure payment processing through smart contracts.',
		image: '/images/project/job.png',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/Decentralized-Job-Board',
		previewUrl: 'https://decentralized-job-board.vercel.app/',
	},
	{
		id: 13,
		title: 'Nectr',
		description:
			'NECTR - a modern token ecosystem where you can earn rewards by staking your tokens! This is a complete platform that combines cryptocurrency staking with social features and news updates.',

		image: '/images/project/home.png',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/NECTR',
		previewUrl: 'https://nectr-gilt.vercel.app/',
	},
	{
		id: 9,
		title: 'Faktora AI',
		description:
			'Faktora is a sophisticated AI-powered web3 application that combines cutting-edge technologies for a comprehensive blockchain and AI experience.',
		image: '/images/project/faktora.png',
		tag: ['All', 'AI', 'Web3'],
		gitUrl: '',
		previewUrl: 'https://app.faktora.ai',
	},
	{
		id: 25,
		title: 'Vow3 AI',
		description:
			'Vow3 is a framework that enables AI agents to make covenants, allowing complex economic/social/political interactions in the agentic world such as: Uncollateralized loans to AI agents, Employment agreements where compensation is guaranteed upon completion, Political alliance towards a common goal.',
		image: '/images/project/vow3.png',
		tag: ['All', 'AI', 'Web3'],
		gitUrl: '',
		previewUrl: 'https://vow3-mujeebsulaymans-projects.vercel.app/',
	},
];

projectsData.sort((a, b) => a.id - b.id);

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        Featured Projects
      </h2>
      <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-12">
        A collection of projects showcasing my expertise in Web2, Web3 and AI
        Agent development, from decentralized applications to modern web
        solutions.
      </p>
      <div className="text-gray-300 flex flex-row font-sans justify-center items-center gap-4 mb-12">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          active={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web2"
          active={tag === "Web2"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web3"
          active={tag === "Web3"}
        />
        <ProjectTag onClick={handleTagChange} name="AI" active={tag === "AI"} />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgURL={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            tag={project.tag}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
