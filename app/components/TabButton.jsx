import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
	const buttonClasses = active
		? 'text-white border-b-2 border-blue-500'
		: 'text-[#ADB1B8] border-b-2 border-transparent hover:text-white hover:border-blue-500';
	return (
		<button onClick={selectTab}>
			<p
				className={`mr-3 font-semibold text-sm hover:text-white ${buttonClasses}`}>
				{children}
			</p>
		</button>
	);
};

export default TabButton;
