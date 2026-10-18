import { redirect } from 'next/navigation';
import HomePage from '../components/HomePage';

export default function TagPage({ params }) {
	const { tag } = params;
	const validTags = ["web2", "web3", "ai"];

	if (!validTags.includes(tag?.toLowerCase())) {
		redirect('/');
	}

	const tagCapitalized = tag.toLowerCase() === "ai"
		? "AI"
		: tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();

	return <HomePage initialTag={tagCapitalized} />;
}
