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
    <div className='group bg-[#1f1f1f] rounded-2xl shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2'>
      <div className='relative h-48 md:h-56 overflow-hidden'>
        <img 
          src={imgURL} 
          alt={title} 
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center space-x-4'>
          <Link 
            href={gitUrl} 
            target='_blank'
            className='bg-white/10 hover:bg-black/60 rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100'>
            <CodeBracketIcon className='h-6 w-6 text-white' />
          </Link>
          <Link 
            href={previewUrl} 
            target='_blank'
            className='bg-white/10 hover:bg-black/60 rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100'>
            <EyeIcon className='h-6 w-6 text-white' />
          </Link>
        </div>
      </div>
      <div className='flex flex-col flex-grow p-5'>
        <div className='flex justify-between items-start mb-3'>
          <h3 className='text-xl font-bold text-white flex-grow pr-2'>{title}</h3>
          <span className='bg-[#2d2d2d] text-gray-300 text-xs px-3 py-1 rounded-full ml-2'>
            {tag.filter((t) => t !== 'All')[0]}
          </span>
        </div>
        <p className='text-gray-400 text-sm leading-relaxed flex-grow mb-4'>
          {description}
        </p>
        <div className='flex justify-between items-center'>
          <div className='flex space-x-2'>
            <Link 
              href={gitUrl} 
              target='_blank'
              className='text-gray-300 hover:text-white text-sm flex items-center'>
              <CodeBracketIcon className='h-4 w-4 mr-1' />
              GitHub
            </Link>
            <Link 
              href={previewUrl} 
              target='_blank'
              className='text-gray-300 hover:text-white text-sm flex items-center'>
              <EyeIcon className='h-4 w-4 mr-1' />
              Preview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
