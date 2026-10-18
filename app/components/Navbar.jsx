'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { NAV_LINKS, RESUME_URL } from '../data/site';
import Logo from './Logo';

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [active, setActive] = useState('home');

	// Highlight the link for whichever section is in view
	useEffect(() => {
		const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean);
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActive(entry.target.id);
				});
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	// Lock body scroll when menu is open
	useEffect(() => {
		document.body.style.overflow = navbarOpen ? 'hidden' : 'unset';
	}, [navbarOpen]);

	return (
		<header className='fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4'>
			{navbarOpen && (
				<div
					className='fixed inset-0 -z-10 bg-black/50 md:hidden'
					onClick={() => setNavbarOpen(false)}
				/>
			)}

			<nav className='glass-strong mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full pl-2 pr-2 sm:pl-3'>
				<Link
					href='/'
					className='flex items-center gap-2.5 rounded-full pr-2'>
					<Logo className='h-9 w-9 drop-shadow-[0_6px_14px_rgb(76_125_255/0.35)]' />
					<span className='text-[17px] font-medium tracking-tight text-zinc-100'>
						thehemjay
					</span>
				</Link>

				<div className='hidden items-center gap-1 md:flex'>
					{NAV_LINKS.map(({ title, id }) => (
						<a
							key={id}
							href={`#${id}`}
							className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
								active === id ? 'pill-active' : 'text-zinc-400 hover:text-white'
							}`}>
							{title}
						</a>
					))}
				</div>

				<div className='flex items-center gap-2'>
					<a
						href={RESUME_URL}
						target='_blank'
						rel='noopener noreferrer'
						className='btn btn-glass btn-sm hidden border border-white/10 sm:inline-flex'>
						Resume
					</a>
					<a
						href='#contact'
						className='btn btn-accent btn-sm hidden sm:inline-flex'>
						Hire me
					</a>
					<button
						onClick={() => setNavbarOpen(!navbarOpen)}
						aria-label={navbarOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={navbarOpen}
						className='grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:bg-white/[0.07] hover:text-white md:hidden'>
						{navbarOpen ? <XMarkIcon className='h-5 w-5' /> : <Bars3Icon className='h-5 w-5' />}
					</button>
				</div>
			</nav>

			{/* Mobile Navigation */}
			<div
				className={`glass-strong mx-auto mt-2 max-w-6xl rounded-3xl p-2 transition-all duration-300 md:hidden ${
					navbarOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
				}`}>
				{NAV_LINKS.map(({ title, id }) => (
					<a
						key={id}
						href={`#${id}`}
						onClick={() => setNavbarOpen(false)}
						className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
							active === id ? 'pill-active' : 'text-zinc-400 hover:text-white'
						}`}>
						{title}
					</a>
				))}
				<div className='mt-2 grid grid-cols-2 gap-2 border-t border-white/[0.06] pt-2'>
					<a
						href={RESUME_URL}
						target='_blank'
						rel='noopener noreferrer'
						className='btn btn-glass btn-sm border border-white/10'>
						Resume <ArrowUpRightIcon className='h-3.5 w-3.5' />
					</a>
					<a
						href='#contact'
						onClick={() => setNavbarOpen(false)}
						className='btn btn-accent btn-sm'>
						Hire me
					</a>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
