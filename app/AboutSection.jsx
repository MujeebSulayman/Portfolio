import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
	return (
		<section className='text-white mt-10'>
			<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
				<Image
					src='/images/my-image.JPG'
                    alt='my-image'
					width={400}
					height={400}
					className='rounded-full'
				/>
				<div>
					<h2 className='text-3xl font-bold text-gray-300 mb-4'>About Me</h2>
					<p className='text-base font-normal font-sans text-gray-400 mb-4'>
						I'm a frontend developer with over 3 years of experience in the
						industry. I have a bachelor's degree in Foreign Language
						Studies. I'm passionate about creating beautiful and functional
						websites and web applications with JavaScript, React, and Node.js. I'm always looking for new
						challenges and opportunities to learn and grow as a developer. I work
						well as part of a team and I'm always looking for ways to improve my skills and knowledge. It's always exciting to use my skills and knowledge to
						create beautiful and functional websites and web applications.
					</p>
                    <div className='flex gap-4 flex-row mt-8 flex-wrap'>
                        <span>Skills</span>
                        <span>Education</span>
                        <span>Experience</span>
                    </div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
