import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
	const buttonStyles = isSelected
	? 'border-purple-200'
	: 'text-[#ADB7BE] border-slate-600 hover:border-white';
	return (
		<button
			className={`${buttonStyles} rounded-lg border-2 px-3 py-2 md:px-8 md:py-2 text-lg cursor-pointer`}
			onClick={() => onClick(name)}>
			{name}
		</button>
	);
};

export default ProjectTag;
