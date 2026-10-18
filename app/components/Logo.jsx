// Monogram "H": two pillars joined by a rising bridge (Web2 to Web3).
const Logo = ({ className = 'h-9 w-9' }) => (
	<svg viewBox='0 0 32 32' aria-hidden='true' className={className}>
		<rect width='32' height='32' rx='9' className='fill-accent' />
		<path
			d='M10.5 9.5v14M21.5 8.5v14M10.5 18.25l11-4.5'
			fill='none'
			stroke='#fff'
			strokeWidth='4.25'
			strokeLinecap='round'
		/>
	</svg>
);

export default Logo;
