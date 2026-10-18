import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import SocialIcon from './SocialIcon';
import { SOCIAL_LINKS } from '../data/site';

const Footer = () => {
	return (
		<footer className='mx-auto max-w-6xl px-4 pb-8 sm:px-6'>
			<div className='glass flex flex-col items-center justify-between gap-4 rounded-[28px] px-6 py-5 sm:flex-row sm:rounded-full sm:py-3 sm:pl-6 sm:pr-3'>
				<p className='text-sm text-zinc-500'>© 2026 Sulayman Abdul-Mujeeb. All rights reserved.</p>
				<div className='flex items-center gap-1'>
					{SOCIAL_LINKS.map(({ key, label, url }) => (
						<a
							key={key}
							href={url}
							target='_blank'
							rel='noopener noreferrer'
							aria-label={label}
							className='grid h-10 w-10 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/[0.07] hover:text-white'>
							<SocialIcon name={key} />
						</a>
					))}
					<a
						href='#home'
						aria-label='Back to top'
						className='ml-1 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:bg-white/[0.07] hover:text-accent'>
						<ArrowUpIcon className='h-4 w-4' />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
