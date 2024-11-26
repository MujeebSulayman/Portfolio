'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const SOCIAL_LINKS = {
	github: {
		url: 'https://github.com/MujeebSulayman',
		icon: '/github-icon.svg',
		label: 'GitHub',
		username: '@MujeebSulayman',
	},
	twitter: {
		url: 'https://twitter.com/TheHemjay',
		icon: '/x.svg',
		label: 'Twitter',
		username: '@TheHemjay',
	},
	linkedin: {
		url: 'https://www.linkedin.com/in/sulayman-abdul-mujeeb-299909214/',
		icon: '/linkedin-icon.svg',
		label: 'LinkedIn',
		username: 'Sulayman Abdul-Mujeeb',
	},
};

const EmailSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setError('');

		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};

		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error('Failed to send message');
			}

			setEmailSubmitted(true);
			e.target.reset();
		} catch (error) {
			setError('Failed to send message. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section
			id='contact'
			className='relative py-20 px-4'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid md:grid-cols-2 gap-8 relative'>
					{/* Left Column - Contact Info */}
					<div className='bg-gradient-to-r from-blue-500/5 to-purple-500/5 p-8 rounded-2xl backdrop-blur-sm border border-gray-800'>
						<h2 className='text-3xl font-bold text-white mb-8'>
							Let's Connect
						</h2>

						<p className='text-gray-400 mb-8'>
							Ready to discuss your next project or explore opportunities? Reach
							out through any of these channels or send me a direct message.
						</p>

						<div className='space-y-6'>
							{Object.entries(SOCIAL_LINKS).map(
								([key, { url, icon, label, username }]) => (
									<Link
										key={key}
										href={url}
										target='_blank'
										className='flex items-center p-4 bg-[#1c1c1c] rounded-xl hover:bg-gray-800/50 transition-all group'>
										<div className='w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg'>
											<Image
												src={icon}
												alt={`${label} Icon`}
												width={24}
												height={24}
												className='opacity-70 group-hover:opacity-100 transition-opacity'
											/>
										</div>
										<div className='ml-4'>
											<h3 className='text-white font-medium'>{label}</h3>
											<p className='text-gray-400 text-sm'>{username}</p>
										</div>
									</Link>
								)
							)}

							<div className='flex items-center p-4 bg-[#1c1c1c] rounded-xl'>
								<div className='w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg'>
									<EnvelopeIcon className='w-6 h-6 text-gray-400' />
								</div>
								<div className='ml-4'>
									<h3 className='text-white font-medium'>Email</h3>
									<p className='text-gray-400 text-sm'>
										sulaymanmujeeb6@gmail.com
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column - Contact Form */}
					<div className='bg-gradient-to-r from-blue-500/5 to-purple-500/5 p-8 rounded-2xl backdrop-blur-sm border border-gray-800'>
						{emailSubmitted ? (
							<div className='h-full flex flex-col items-center justify-center text-center'>
								<div className='w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4'>
									<svg
										className='w-8 h-8 text-green-500'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M5 13l4 4L19 7'
										/>
									</svg>
								</div>
								<h3 className='text-2xl font-bold text-white mb-2'>
									Message Sent!
								</h3>
								<p className='text-gray-400'>
									I&apos;ll get back to you as soon as possible.
								</p>
							</div>
						) : (
							<form
								className='space-y-6'
								onSubmit={handleSubmit}>
								<div>
									<label className='text-white text-sm font-medium mb-2 block'>
										Your Email
									</label>
									<input
										type='email'
										name='email'
										required
										className='w-full px-4 py-3 bg-[#1c1c1c] border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-gray-100'
										placeholder='name@example.com'
									/>
								</div>
								<div>
									<label className='text-white text-sm font-medium mb-2 block'>
										Subject
									</label>
									<input
										type='text'
										name='subject'
										required
										className='w-full px-4 py-3 bg-[#1c1c1c] border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-gray-100'
										placeholder="What&apos;s this about?"
									/>
								</div>
								<div>
									<label className='text-white text-sm font-medium mb-2 block'>
										Message
									</label>
									<textarea
										name='message'
										required
										rows={4}
										className='w-full px-4 py-3 bg-[#1c1c1c] border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-gray-100 resize-none'
										placeholder="Let&apos;s talk about your project..."
									/>
								</div>
								{error && <p className='text-red-500 text-sm'>{error}</p>}
								<button
									type='submit'
									disabled={isLoading}
									className='w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50'>
									{isLoading ? 'Sending...' : 'Send Message'}
								</button>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default EmailSection;
