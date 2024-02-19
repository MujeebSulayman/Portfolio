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
				<li>HTML</li>
				<li>CSS</li>
				<li>Tailwind</li>
				<li>JavaScript</li>
				<li>Three.Js</li>
				<li>React.Js</li>
				<li>Node.Js</li>
			</ul>
		),
	},
	{
		title: 'Experience',
		id: 'experience',
		content: (
			<ul className='list-disc pl-2'>
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
				<li className='text-base font-normal font-sans text-gray-400 mb-4'>
					<b className='text-gray-200 font-sans'>Ooumart</b>
					<div className='m-4'>
						<h3 className='py-2'>2022-2023</h3>
						<p className='mb-8'>
							I developed a multi vendor e-commerce web application to make
							sales easier for students in my university. Which made me receive
							the award of the most creative student of the year (2023/2024)
							graduating set.
						</p>
					</div>
				</li>
				<li className='text-base font-normal font-sans text-gray-400 mb-4'>
					<b className='text-gray-200 font-sans'>Oxgital</b>
					<div className='m-4'>
						<h3 className='py-2'>2023 - Present</h3>
						<p className='mb-8'>
							I work as a software engineer at Oxgital, i lead the team of 3 which
							our primary objective is deliver outstanding result.
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
				<li>Mern Stack Practitioneer</li>
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
					src='/images/my-image.JPG'
					alt='my-image'
					width={400}
					height={400}
					className='rounded-full'
				/>
				<div>
					<h2 className='text-3xl font-bold flex text-gray-300 mb-4 mt-12 items-start justify-start'>
						About Me
					</h2>
					<p className='text-base font-normal font-sans text-gray-400 mb-4'>
						I&apos;m a frontend developer with over 3 years of experience in the
						industry. I have a bachelor&apos;s degree in Foreign Language
						Studies. I&apos;m passionate about creating beautiful and functional
						websites and web applications with JavaScript, React, and Node.js.
						I&apos;m always looking for new challenges and opportunities to
						learn and grow as a developer. I work as part of a team and
						I&apos;m always looking for ways to improve my skills and knowledge.
						It&apos;s always exciting to use my skills and knowledge to create
						beautiful and functional websites and web applications.
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
