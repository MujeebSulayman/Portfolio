'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'About',
		path: '#about',
	},
	{
		title: 'Projects',
		path: '#projects',
	},
	{
		title: 'Contact',
		path: '#contact',
	},
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Lock body scroll when menu is open
	useEffect(() => {
		if (navbarOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [navbarOpen]);

	return (
		<>
			{/* Backdrop overlay */}
			{navbarOpen && (
				<div 
					className="fixed inset-0 bg-black/60 backdrop-blur-sm z-10"
					onClick={() => setNavbarOpen(false)}
				/>
			)}

			<nav
				className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
					scrolling || navbarOpen ? 'bg-[#121212]/90 backdrop-blur-md' : 'bg-transparent'
				}`}>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-16'>
						{/* Logo */}
						<Link
							href='/'
							className='text-2xl md:text-3xl text-white font-semibold hover:text-gray-300 transition-colors'>
							TheHemjay
						</Link>

						{/* Desktop Navigation */}
						<div className='hidden md:block'>
							<div className='ml-10 flex items-center space-x-8'>
								{navLinks.map((link) => (
									<NavLink
										key={link.path}
										href={link.path}
										title={link.title}
									/>
								))}
							</div>
						</div>

						{/* Mobile menu button */}
						<div className='md:hidden'>
							<button
								onClick={() => setNavbarOpen(!navbarOpen)}
								className='inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800/50 focus:outline-none'>
								{navbarOpen ? (
									<XMarkIcon className='h-6 w-6' />
								) : (
									<Bars3Icon className='h-6 w-6' />
								)}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div
					className={`md:hidden transition-all duration-300 ease-in-out absolute w-full ${
						navbarOpen
							? 'opacity-100 translate-y-0'
							: 'opacity-0 -translate-y-full pointer-events-none'
					}`}>
					<div className='px-4 pt-2 pb-3 space-y-1 bg-[#121212] shadow-lg border-t border-gray-800'>
						{navLinks.map((link) => (
							<a
								key={link.path}
								href={link.path}
								onClick={() => setNavbarOpen(false)}
								className='block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all'>
								{link.title}
							</a>
						))}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
