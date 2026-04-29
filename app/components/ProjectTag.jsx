import React from 'react';

const ProjectTag = ({ name, onClick, isSelected, count }) => {
	const buttonStyles = isSelected
	? 'border-purple-200 text-white'
	: 'text-[#ADB7BE] border-slate-600 hover:border-white';
	return (
		<button
			className={`${buttonStyles} rounded-lg border-2 px-3 py-2 md:px-6 md:py-2 text-lg cursor-pointer flex items-center gap-2`}
			onClick={() => onClick(name)}>
			{name}
			{count !== undefined && (
				<span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isSelected ? 'bg-purple-500 text-white' : 'bg-slate-700 text-[#ADB7BE]'}`}>
					{count}
				</span>
			)}
		</button>
	);
};

export default ProjectTag;
