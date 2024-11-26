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
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center"
				>
					<div className="inline-block px-3 py-1 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-gray-800">
						<span className="text-gray-400 text-base">
							Full Stack & Web3 Developer
						</span>
					</div>

					<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
						Bridging Web2 to
						<br />
						<TypeAnimation
							sequence={[
								'Web3',
								2000,
								'DeFi',
								2000,
								'Blockchain',
								2000,
								'The Future',
								2000,
							]}
							wrapper="span"
							speed={50}
							className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
							repeat={Infinity}
						/>
					</h1>

					<p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10">
						Crafting modern web applications with blockchain integration. 
						Specialized in building secure, scalable solutions that connect 
						traditional web services with decentralized technologies.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link 
							href="#projects"
							className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-all duration-200"
						>
							Explore Projects
						</Link>
						<Link 
							href="#contact"
							className="px-8 py-4 rounded-lg border border-gray-700 text-gray-300 hover:border-purple-500 hover:text-white transition-all duration-200"
						>
							Let's Connect
						</Link>
					</div>

					{/* Stats */}
					<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-gray-800">
							<h3 className="text-2xl font-bold text-white mb-1">20+</h3>
							<p className="text-gray-400 text-sm">Total Projects</p>
						</div>
						<div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-gray-800">
							<h3 className="text-2xl font-bold text-white mb-1">10+</h3>
							<p className="text-gray-400 text-sm">Web3 Projects</p>
						</div>
						<div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-gray-800">
							<h3 className="text-2xl font-bold text-white mb-1">15+</h3>
							<p className="text-gray-400 text-sm">Smart Contracts</p>
						</div>
						<div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-gray-800">
							<h3 className="text-2xl font-bold text-white mb-1">4+</h3>
							<p className="text-gray-400 text-sm">Years Experience</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
