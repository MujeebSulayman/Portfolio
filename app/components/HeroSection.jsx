'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

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
						<button className='px-6 py-3 font-sans rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-400 to-pink-600 hover:bg-slate-200 text-gray-100'>
							Hire Me
						</button>
						<button className='px-6 py-3 font-sans rounded-full bg-gradient-to-br from-blue-500 via-purple-500 hover:bg-slate-800 text-gray-100 border mt-3'>
							Download CV
						</button>
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
