import React from 'react';
import { CodeBracketIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

const isRealLink = (url) => url && url !== '/';

const ProjectCard = ({ imgURL, title, description, gitUrl, previewUrl, tag }) => {
	return (
		<article className='glass group flex h-full flex-col rounded-[28px] p-2.5 transition duration-300 hover:-translate-y-1 hover:border-white/[0.14]'>
			<div className='glass-inset relative aspect-[16/10] overflow-hidden rounded-[20px]'>
				<img
					src={imgURL}
					alt={title}
					loading='lazy'
					className='h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]'
				/>
				<div className='absolute left-3 top-3 flex flex-wrap gap-1.5'>
					{tag
						.filter((t) => t !== 'All')
						.map((t) => (
							<span
								key={t}
								className='glass-strong rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-200'>
								{t}
							</span>
						))}
				</div>
			</div>

			<div className='flex flex-1 flex-col px-3 pb-3 pt-5'>
				<h3 className='text-xl font-medium tracking-tight text-zinc-50'>{title}</h3>
				<p
					title={description}
					className='mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-zinc-400'>
					{description}
				</p>
				<div className='mt-6 flex gap-2'>
					{isRealLink(previewUrl) && (
						<a
							href={previewUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-primary btn-sm'>
							Live preview <ArrowUpRightIcon className='h-3.5 w-3.5' />
						</a>
					)}
					{isRealLink(gitUrl) && (
						<a
							href={gitUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-glass btn-sm border border-white/10'>
							<CodeBracketIcon className='h-4 w-4' /> Code
						</a>
					)}
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;
