'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0 w-full h-full">
				<div className="absolute top-[20%] left-[10%] w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
				<div className="absolute top-[40%] right-[20%] w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
			</div>

			{/* Grid Pattern Overlay */}
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center"
				>


					<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
						Innovating Across
						<br />
						<TypeAnimation
							sequence={[
								'Blockchain',
								2000,
								'DeFi',
								2000,
								'RWA',
								2000,
							]}
							wrapper="span"
							speed={50}
							className="text-lemon-500"
							repeat={Infinity}
						/>
					</h1>

					<p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10">
						Bridge traditional software with
						decentralized technologies while exploring emerging areas like AI-driven DeFi automation and intelligent
						blockchain agents.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link
							href="#projects"
							className="px-8 py-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all duration-200"
						>
							Explore Projects
						</Link>
						<a
							href="https://drive.google.com/file/d/1Na5lcGN7zMc_slTRaQD-QbrIIXOIJPDL/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-4 rounded-lg bg-green-600 text-white font-medium hover:bg-green-500 transition-all duration-200 flex items-center space-x-2"
						>

							<span>Download Resume</span>
						</a>

					</div>

					{/* Stats */}
					<div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
						<div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-800">
							<h3 className="text-2xl font-bold text-white mb-1">18+</h3>
							<p className="text-gray-400 text-sm">Blockchain Projects</p>
						</div>

						<div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-800">
							<h3 className="text-2xl font-bold text-white mb-1">25+</h3>
							<p className="text-gray-400 text-sm">Frontend Projects</p>
						</div>
						<div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-800">
							<h3 className="text-2xl font-bold text-white mb-1">6+</h3>
							<p className="text-gray-400 text-sm">Years Experience</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
