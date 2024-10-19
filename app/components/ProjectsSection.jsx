'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { useState } from 'react';

const projectsData = [
	{
		id: 1,
		title: 'People Utility Token',
		description:
			'People Utility Token(PUT) is a blockchain tech website which is developed to mainly promote the token at first before the launch',
		image: '/images/project/1.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/PUT',
		previewUrl: 'https://peopleutilitytoken.vercel.app/',
	},
	{
		id: 14,
		title: 'Hemivent',
		description:
			'Hemivent is an web3 dApp that allow users to to create an event but stored on the blockchain, Event organisers pay an amount of fee to use the platform and users can also pay for an event on the website',
		image: '/images/project/Hemivent.jpg',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/Dapp-event-app',
		previewUrl: 'https://dapp-event-app.vercel.app/',
	},
	{
		id: 2,
		title: 'Steely',
		description:
			'Steely is a 3D virtual exhibition project developed for a client doing her PhD, the aim and objective of her having the website is to exhibit her art online for users to feel the reality on the wall.',
		image: '/images/project/2.PNG',
		tag: ['All', 'Web2'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 3,
		title: 'Brain3',
		description:
			'Brain3 is a UI for and NFT dApp, the website doesnt have any web3 functionality. It is just a sleek UI to test my CSS skills, I contains so may unique style, gradient and image to ',
		image: '/images/project/nft.jpg',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Brain3-Dapp-UI',
		previewUrl: 'https://brain3-dapp-ui.vercel.app/',
	},
	{
		id: 17,
		title: 'HemDex',
		description:
			'HemDex is an ERC-20 fullstack web3 dApp that allows users to swap one token to another, see it a Uniwsap type of project, they both perform similar task. The contract is deployed on sepolia testnet',
		image: '/images/project/Tokenswap.jpg',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/Token-Swap',
		previewUrl: 'https://hemdex.vercel.app/',
	},
	{
		id: 4,
		title: 'Admin Dashboard',
		description:
			'HemDash is a CRUD web application developed with so many features designed in it. Ranging from color picker to pie chart, to bar chart which also has editor feature and customer transaction section. ',
		image: '/images/project/10.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Admin-Dashboard',
		previewUrl: 'https://hemdash.netlify.app/',
	},
	{
		id: 15,
		title: 'NFT Mart',
		description:
			'Nft Mart is the is web3 base dApp deployed on Sepolia testnet, explore, trade, and create unique digital assets they can also transfer nft ownership, mint nft, delete nft all on the the website',
		image: '/images/project/nftmart.jpg',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/nft-mart',
		previewUrl: 'https://nft-mart-seven.vercel.app/',
	},
	{
		id: 5,
		title: 'Destro Shopping App',
		description:
			'The project was developed as a side project which my objective is to enhance my knowledge in designing user friendly food delivery application and also intgrating payment gateway.',
		image: '/images/project/3.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Destro-Shopping-App',
		previewUrl: 'https://hem-destro.vercel.app/',
	},
	{
		id: 6,
		title: 'TheSocials',
		description:
			'TheSocial is a social medial application where users can share thought and memories, more like Instagram application.',
		image: '/images/project/4.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Social-Application',
		previewUrl: 'https://hem-destro.vercel.app/',
	},
	{
		id: 7,
		title: 'Anime',
		description:
			"I'm not really a big fan of anime, i gave myself the challenge to design a user friendly application where people can browse the latest anime movie and also to test how proficient i am in consuming APIs.",
		image: '/images/project/5.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Anime-collections/',
		previewUrl: 'https://hemanime.vercel.app/',
	},
	{
		id: 16,
		title: 'HemToken-ICO',
		description:
			'This project is an ERC-20 base project, my initial onjective of this dApp to to create my token, auction a specific amount for users to hold which i was able to achieve, The contract is deployed on hardhat testnet ',
		image: '/images/project/TokenSale.jpg',
		tag: ['All', 'Web3'],
		gitUrl: 'https://github.com/MujeebSulayman/HemToken-ICO',
		previewUrl: 'https://hem-token-ico.vercel.app/',
	},
	{
		id: 8,
		title: 'Travel Guide App',
		description:
			'HemTravel is a web application that allows people visiting Ibadan to know more about the place',
		image: '/images/project/6.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Travel-App',
		previewUrl: 'https://hemtravel.vercel.app/',
	},
	{
		id: 9,
		title: 'HemFit',
		description:
			'HemFit is an exercise website that allows users to perform different types exercise, we have up to 5000 exervise listen up on the website with instructions and videos on how to perform them. ',
		image: '/images/project/7.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/fitness-app',
		previewUrl: 'https://hemfit.netlify.app/',
	},

	{
		id: 10,
		title: 'Virtual Exhibition',
		description:
			'Steely is a 3D virtual exhibition project developed for a client doing her PhD, the aim and objective of her having the website is to exhibit her art online for users to feel the reality on the wall.',
		image: '/images/project/8.PNG',
		tag: ['All', 'Web2'],
		gitUrl: '/',
		previewUrl: '/',
	},
	{
		id: 11,
		title: 'My Portfolio',
		description:
			"Yep, You are looking at the portfolio, I'm always looking for ways to improve my skills and knowledge. It's always exciting to use my skills and knowledge to create beautiful and functional websites and web applications.",
		image: '/images/project/9.png',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/New-Portfolio',
		previewUrl: 'https://thehemjay.vercel.app/',
	},
	{
		id: 12,
		title: 'HemNote',
		description:
			'Discover & Share AI-Powered Prompts. HemNote is an open-source AI prompting tool for modern world to discover, create and share creative prompts',
		image: '/images/project/11.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Notebook',
		previewUrl: 'https://hemnote.vercel.app/',
	},
	{
		id: 13,
		title: 'Emagify AI',
		description:
			'Emagify AI is an AI web app that allow users to restore old image color, resize image, remove background and also remove object from Picture',
		image: '/images/project/12.PNG',
		tag: ['All', 'Web2'],
		gitUrl: 'https://github.com/MujeebSulayman/Emagify-AI',
		previewUrl: 'https://emagify-ai.vercel.app/',
	},
];

const ProjectsSection = () => {
	const [tag, setTag] = useState('All');
	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	return (
		<>
			<h2 className='text-center text-4xl font-sans font-bold text-gray-200 mt-12 mb-6'>
				My Projects
			</h2>
			<div className='text-gray-300 flex flex-row font-sans justify-center items-center gap-4 mb-6 py-6'>
				<ProjectTag
					onClick={handleTagChange}
					name='All'
					active={tag === 'All'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name='Web2'
					active={tag === 'Web2'}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name='Web3'
					active={tag === 'Web3'}
				/>
			</div>
			<div className='grid md:grid-cols-3 gap-8 md:gap-12'>
				{filteredProjects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgURL={project.image}
						gitUrl={project.gitUrl}
						previewUrl={project.previewUrl}
					/>
				))}
			</div>
		</>
	);
};

export default ProjectsSection;
