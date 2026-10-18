import React from 'react';

const ProjectTag = ({ name, count, onClick, isSelected }) => {
	return (
		<button
			role='tab'
			aria-selected={isSelected}
			className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-5 ${
				isSelected ? 'pill-active' : 'text-zinc-400 hover:text-white'
			}`}
			onClick={() => onClick(name)}>
			{name}
			<span className={`font-mono text-[11px] ${isSelected ? 'text-accent' : 'text-zinc-600'}`}>
				{count}
			</span>
		</button>
	);
};

export default ProjectTag;
