'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
	const [animate, setAnimate] = useState(false);

	const handleAnimationStart = () => {
		setAnimate(true);
	};

	const handleAnimationComplete = () => {
		setAnimate(false);
	};

	return (
		<section className='pt-20'>
			<div className='grid grid-cols-1 lg:grid-cols-12'>
				<div className='col-span-7 place-self-center'>
					<h1 className='text-white mb-4 text-5xl lg:text-5xl font-extrabold'>
						<span className=' font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
							Hello,{' '}
						</span>
						<TypeAnimation
							sequence={[
								"I'm Mujeeb.",
								1000,
								"I'm a website developer.",
								1000,
								'I wield the power of Javascript.',
								1000,
							]}
							wrapper='span'
							speed={50}
							style={{ fontSize: '45px' }}
							repeat={Infinity}
							onAnimationStart={handleAnimationStart}
							onAnimationComplete={handleAnimationComplete}
						/>
					</h1>
					<p className='text-gray-400 text-md lg:text-lg py-4 font-sans'>
						Bringing ideas to life, I create captivating web applications that
						leave a lasting impression and deliver seamless digital experiences.
					</p>
					<div>
						<Link
							href='https://www.linkedin.com/in/sulayman-abdul-mujeeb-299909214/'
							className='px-6 inline-block py-3 sm:w-fit rounded-md mr-4 font-sans font-semibold bg-gray-400 hover:bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-gray-500 text-gray-900 hover:text-white'>
							Hire Me
						</Link>
						<Link
							href='https://drive.google.com/file/d/16VjjJ34UrzSKr7nzsfo8ATw8DNTSt1xI/view?usp=sharing'
							className='px-1 inline-block py-1 sm:w-fit rounded-md font-sans font-semibold bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'>
							<span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
								Download CV
							</span>
						</Link>
					</div>
				</div>
				<div className='col-span-5 place-self-center'>
					<div
						className={`rounded-full w-[400px] h-[500px] lg:w-[500px] relative ${
							animate ? 'animate' : ''
						}`}>
						<Image
							src='/images/banner.GIF'
							width={480}
							height={600}
							alt='hero-banner'
							className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
