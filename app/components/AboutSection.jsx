'use client';
import React from 'react';
import Image from 'next/image';
import { useState, useTransition } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='bg-[#1c1c1c] p-5 rounded-lg'>
					<h3 className='text-lg font-bold text-white mb-3'>
						Frontend Development
					</h3>
					<ul className='list-none space-y-2'>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
							React.js / Next.js
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
							TypeScript / JavaScript
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
							TailwindCSS / SCSS
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
							Redux / Context API
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
							REST APIs
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-blue-500 rounded-full mr-2'></span>
							Framer Motion
						</li>
					</ul>
				</div>

				<div className='bg-[#1c1c1c] p-5 rounded-lg'>
					<h3 className='text-lg font-bold text-white mb-3'>
						Blockchain Development
					</h3>
					<ul className='list-none space-y-2'>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-purple-500 rounded-full mr-2'></span>
							Solidity / Smart Contracts
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-purple-500 rounded-full mr-2'></span>
							Hardhat
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-purple-500 rounded-full mr-2'></span>
							Ethers.js / Wagmi
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-purple-500 rounded-full mr-2'></span>
							IPFS / TheGraph
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-purple-500 rounded-full mr-2'></span>
							MetaMask / WalletConnect
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-purple-500 rounded-full mr-2'></span>
							DeFi / NFT / DAO Protocols
						</li>
					</ul>
				</div>

				<div className='bg-[#1c1c1c] p-5 rounded-lg'>
					<h3 className='text-lg font-bold text-white mb-3'>Smart Contracts</h3>
					<ul className='list-none space-y-2'>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>
							ERC20 / ERC721 / ERC1155
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>
							Diamond Standard (EIP-2535)
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>
							OpenZeppelin Contracts
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>
							Gas Optimization
						</li>
					</ul>
				</div>

				<div className='bg-[#1c1c1c] p-5 rounded-lg'>
					<h3 className='text-lg font-bold text-white mb-3'>
						Development Tools
					</h3>
					<ul className='list-none space-y-2'>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-yellow-500 rounded-full mr-2'></span>
							Git / GitHub
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-yellow-500 rounded-full mr-2'></span>
							VS Code / Remix IDE
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-yellow-500 rounded-full mr-2'></span>
							Docker
						</li>
						<li className='flex items-center text-gray-300 text-sm'>
							<span className='w-2 h-2 bg-yellow-500 rounded-full mr-2'></span>
							Jest / Mocha / Chai
						</li>
					</ul>
				</div>
			</div>
		),
	},
	{
		title: 'Experience',
		id: 'experience',
		content: (
			<ul className='list-disc pl-2'>
				<li className='text-base font-normal font-sans text-gray-400 mb-4'>
					<b className='text-gray-200 font-sans'>Blockchain Developer</b>
					<h3 className='py-2'>2023 - Present</h3>
					<ul className='list-disc pl-2 text-base font-normal font-sans text-gray-300'>
						<li>
							Developed and deployed multiple DeFi and NFT projects on Ethereum
							and other EVM chains
						</li>
						<li>
							Implemented secure smart contracts following best practices and
							industry standards
						</li>
						<li>
							Built full-stack dApps with Web3 integration and wallet
							connectivity
						</li>
						<li>Optimized smart contracts for gas efficiency and security</li>
					</ul>
				</li>

				<li className='text-base font-normal font-sans text-gray-400 mb-8'>
					<b className='text-gray-200 font-sans'>
						Oxgital - Frontend Developer
					</b>
					<div className='m-2'>
						<h3 className='py-2'>2023 - 2024</h3>
						<ul className='list-disc pl-2 text-base font-normal font-sans text-gray-300'>
							<li>Led frontend development using React.js and Next.js</li>
							<li>Implemented responsive designs and optimized performance</li>
							<li>
								Collaborated with cross-functional teams to deliver high-quality
								solutions
							</li>
							<li>
								Reduced bug rates by 40% through comprehensive testing
								implementation
							</li>
						</ul>
					</div>
				</li>

				<li className='text-base font-normal font-sans text-gray-400 mb-4'>
					<b className='text-gray-200 font-sans'>Freelance Developer</b>
					<div className='m-4'>
						<h3 className='py-2'>2019 - Present</h3>
						<p className='mb-8'>
							Delivered custom web solutions for diverse clients, specializing
							in e-commerce platforms, SaaS applications, and Web3 integrations.
							Focused on creating scalable, user-friendly applications with
							modern technologies and best practices.
						</p>
					</div>
				</li>
			</ul>
		),
	},
	{
		title: 'Certification',
		id: 'certification',
		content: (
			<ul className='list-disc pl-2 text-base font-normal font-sans text-gray-300 mb-4'>
				<li>Web3 Development - Dapp Mentor Academy</li>
				<li>Professional Frontend Development - Oxgital</li>
				<li>Smart Contract Security - Blockchain Council</li>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	console.log(isPending);

	return (
		<section className='text-white py-10'>
			<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
				<Image
					src='/images/portfolio-image.jpg'
					alt='my-image'
					width={400}
					height={100}
					className='rounded-full'
				/>
				<div>
					<h2 className='text-3xl font-bold flex text-gray-300 mb-4 mt-12 items-start justify-start'>
						About Me
					</h2>
					<p className='text-base font-normal font-sans text-gray-400 mb-4'>
						Full-stack blockchain developer with 4+ years of experience in Web3
						and modern web development. Specialized in building decentralized
						applications (dApps) using Solidity, React.js, and Next.js.
						Passionate about creating secure, scalable solutions that bridge the
						gap between traditional web applications and blockchain technology.
						Experienced in DeFi protocols, NFT marketplaces, and cross-chain
						applications.
					</p>

					<div className='flex flex-row justify-start mt-8 gap-4 flex-wrap'>
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}>
							{''}
							Skills{''}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('experience')}
							active={tab === 'experience'}>
							{''}
							Experience{''}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('certification')}
							active={tab === 'certification'}>
							{''}
							Certification{''}
						</TabButton>
					</div>
					<div className='mt-8'>
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
