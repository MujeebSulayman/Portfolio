'use client';
import React, { useState } from 'react';
import { EnvelopeIcon, ArrowUpRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import SectionHeading from './SectionHeading';
import SocialIcon from './SocialIcon';
import { EMAIL, SOCIAL_LINKS } from '../data/site';

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

	const channels = [
		...SOCIAL_LINKS.map(({ key, label, username, url }) => ({
			key,
			label,
			value: username,
			href: url,
			icon: <SocialIcon name={key} className='h-[18px] w-[18px]' />,
		})),
		{
			key: 'email',
			label: 'Email',
			value: EMAIL,
			href: `mailto:${EMAIL}`,
			icon: <EnvelopeIcon className='h-5 w-5' />,
		},
	];

	return (
		<section id='contact' className='py-20 sm:py-28'>
			<SectionHeading index='03' label='Contact' title="Let's connect">
				Ready to discuss your next project or explore opportunities? Reach out through any of
				these channels or send me a direct message.
			</SectionHeading>

			<div className='grid gap-5 lg:grid-cols-[1fr_1.2fr]'>
				<div className='glass rounded-[32px] p-3 sm:p-4'>
					<p className='label px-3 pb-3 pt-2'>Channels</p>
					<ul className='space-y-2'>
						{channels.map(({ key, label, value, href, icon }) => (
							<li key={key}>
								<a
									href={href}
									target={key === 'email' ? undefined : '_blank'}
									rel='noopener noreferrer'
									className='glass-inset group flex items-center gap-4 rounded-2xl p-3 transition-colors hover:border-white/10 hover:bg-white/[0.03] sm:p-4'>
									<span className='grid h-11 w-11 flex-none place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-zinc-300 transition-colors group-hover:text-accent'>
										{icon}
									</span>
									<div className='min-w-0 flex-1'>
										<p className='text-sm font-medium text-zinc-100'>{label}</p>
										<p className='truncate text-sm text-zinc-500'>{value}</p>
									</div>
									<ArrowUpRightIcon className='h-4 w-4 flex-none text-zinc-600 transition-colors group-hover:text-accent' />
								</a>
							</li>
						))}
					</ul>
				</div>

				<div className='glass rounded-[32px] p-6 sm:p-8'>
					{emailSubmitted ? (
						<div className='flex h-full min-h-[360px] flex-col items-center justify-center text-center'>
							<div className='mb-5 grid h-16 w-16 place-items-center rounded-full bg-accent/10 text-accent ring-1 ring-inset ring-accent/25'>
								<CheckIcon className='h-8 w-8' />
							</div>
							<h3 className='text-2xl font-medium tracking-tight text-zinc-50'>Message sent</h3>
							<p className='mt-2 text-zinc-400'>
								I&apos;ll get back to you as soon as possible.
							</p>
						</div>
					) : (
						<form className='space-y-5' onSubmit={handleSubmit}>
							<p className='label'>Send a message</p>
							<div>
								<label htmlFor='email' className='mb-2 block text-sm font-medium text-zinc-300'>
									Your email
								</label>
								<input
									id='email'
									type='email'
									name='email'
									required
									className='field glass-inset'
									placeholder='name@example.com'
								/>
							</div>
							<div>
								<label htmlFor='subject' className='mb-2 block text-sm font-medium text-zinc-300'>
									Subject
								</label>
								<input
									id='subject'
									type='text'
									name='subject'
									required
									className='field glass-inset'
									placeholder="What's this about?"
								/>
							</div>
							<div>
								<label htmlFor='message' className='mb-2 block text-sm font-medium text-zinc-300'>
									Message
								</label>
								<textarea
									id='message'
									name='message'
									required
									rows={5}
									className='field glass-inset resize-none'
									placeholder="Let's talk about your project..."
								/>
							</div>
							{error && <p className='text-sm text-red-400'>{error}</p>}
							<button
								type='submit'
								disabled={isLoading}
								className='btn btn-accent w-full disabled:opacity-50'>
								{isLoading ? 'Sending...' : 'Send message'}
							</button>
						</form>
					)}
				</div>
			</div>
		</section>
	);
};

export default EmailSection;
