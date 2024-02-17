
import HeroSection from './components/HeroSection';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-[#121212]'>
			<div className='container mx-auto px-12 py-4 mt-16 lg:mt-8'>
				<HeroSection />
		 	</div>
		</main>
	);
}
