import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ProjectCard = ({
	imgURL,
	title,
	description,
	gitUrl,
	previewUrl,
	tag,
}) => {
	return (
		<div className='group bg-[#1c1c1c] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl'>
			<div
				className='h-48 md:h-72 relative'
				style={{
					background: `url(${imgURL})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
				<div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
					<Link
						href={gitUrl}
						className='h-12 w-12 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
						<CodeBracketIcon className='h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
					</Link>
					<Link
						href={previewUrl}
						className='h-12 w-12 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
						<EyeIcon className='h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
					</Link>
				</div>
			</div>
			<div className='p-6'>
				<div className='flex justify-between items-center mb-3'>
					<h2 className='text-xl font-semibold text-white'>{title}</h2>
					<span className='px-3 py-1 text-xs bg-[#2d2d2d] text-gray-300 rounded-full'>
						{tag.filter((t) => t !== 'All')[0]}
					</span>
				</div>
				<p className='text-gray-400 text-md leading-relaxed'>{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
