import Link from 'next/link';

const NavLink = ({ href, title }) => {
	return (
		<Link
			href={href}
			className='text-gray-300 hover:text-white font-medium transition-colors duration-300'>
			{title}
		</Link>
	);
};

export default NavLink;
