import React from 'react';

const Footer = () => {
	return (
		<footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
			<div className='container p-12 flex justify-between'>
				<span children='font-sans'>LOGO</span>
				<p className='text-gray-400 font-sans'>
					© 2024. Developed with 2 cups of ☕. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
