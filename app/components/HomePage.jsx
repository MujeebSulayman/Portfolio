import AboutSection from './AboutSection';
import EmailSection from './EmailSection';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import ProjectsSection from './ProjectsSection';

const HomePage = ({ initialTag = 'All' }) => {
	return (
		<>
			<Navbar />
			<main className='mx-auto min-h-screen max-w-6xl px-4 sm:px-6'>
				<HeroSection />
				<AboutSection />
				<ProjectsSection initialTag={initialTag} />
				<EmailSection />
			</main>
			<Footer />
		</>
	);
};

export default HomePage;
