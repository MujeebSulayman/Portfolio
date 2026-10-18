const SectionHeading = ({ index, label, title, children, className = '' }) => {
	return (
		<div className={`mb-12 ${className}`}>
			<p className='label'>
				<span className='text-accent'>{index}</span>
				<span className='mx-2 text-zinc-700'>/</span>
				{label}
			</p>
			<h2 className='mt-4 text-4xl font-medium tracking-[-0.03em] text-zinc-50 sm:text-5xl'>
				{title}
			</h2>
			{children && (
				<p className='mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg'>
					{children}
				</p>
			)}
		</div>
	);
};

export default SectionHeading;
