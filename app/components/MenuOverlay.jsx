import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links }) => {
	return (
		<ul className='flex flex-col items-center justify-center gap-y-8'>
			{links.map((link, index) => {
				return (
					<li>
						<NavLink
							key={index}
							href={link.path}
							title={link.title}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default MenuOverlay;
