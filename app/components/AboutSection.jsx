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
			<ul className='list-disc pl-2 text-base font-normal font-sans text-gray-300 mb-4'>
				<li>JavaScript/TypeScript</li>
				<li>Blockchain Development: Solidity, Hardhat, Remix, Ethers.js.</li>
				<li>Smart Contracts: ERC20, ERC721</li>
				<li>NextJs</li>
				<li>ReactJS</li>
				<li>
					Smart Contract Security: Reentrancy attacks, Integer overflows, Gas
					optimizations Development Tools: Git, Docker
				</li>
			</ul>
		),
	},
	{
		title: 'Experience',
		id: 'experience',
		content: (
			<ul className='list-disc pl-2'>
				<li className='text-base font-normal font-sans text-gray-400 mb-8'>
					<b className='text-gray-200 font-sans'>Oxgital</b>
					<div className='m-2'>
						<h3 className='py-2'> 2023 - 2024</h3>

						<ul className='list-disc pl-2 text-base font-normal font-sans text-gray-300'>
							<li>
								Developed and maintained web applications using JavaScript and
								ReactJS.
							</li>
							<li>
								Collaborated with a team of 5 developers to enhance software
								features and improve user satisfaction.
							</li>
							<li>
								Implemented unit testing and code reviews, achieving a
								significant reduction in bugs and improving overall code
								quality.
							</li>
							<li>
								Assisted in optimizing application performance, resulting in a
								20% decrease in server response times.
							</li>
						</ul>
					</div>
				</li>
				<li className='text-base font-normal font-sans text-gray-400 mb-4'>
					<b className='text-gray-200 font-sans'>Ooumart</b>
					<div className='m-4'>
						<h3 className='py-2'>2022-2023</h3>
						<p className='mb-8'>
							I developed a multi vendor e-commerce web application to make
							sales easier for students in my university. Which made me receive
							the award of the most creative student of the year (2022/2023)
							graduating set.
						</p>
					</div>
				</li>
				<li className='text-base font-normal font-sans text-gray-400 mb-4'>
					<b className='text-gray-200 font-sans'>Freelance Projects</b>
					<div className='m-4'>
						<h3 className='py-2'>2019 - Present</h3>
						<p className='mb-8'>
							I have worked with various clients on multiple projects including
							e-commerce website, SaaS softwares and other business related web
							applications. I also colaborate with designers and backend
							developers to create visual appealing and user friendly web
							application that meets the client requirements.
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
				<li>Dapp Mentor Academy</li>
				<li>Oxgital Professional Frontend Developer</li>
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
						I’m an experienced blockchain developer with over 4 years in
						software development, skilled in JavaScript, Solidity, ReactJS,
						TypeScript, and NextJs. Specialized in building EVM-compatible
						blockchain solutions and deploying on Ethereum network. Adept at
						designing and deploying secure, scalable decentralized applications
						(dApps) and smart contracts across multiple blockchain networks. A
						proven leader with hands-on experience in multi-chain solutions,
						driving growth in the blockchain community, and fostering innovation
						in Web3 technologies.
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
