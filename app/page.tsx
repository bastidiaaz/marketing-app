import { Card } from './components/Card';
import profile from './assets/profile-thumbnail.png';

export default function Home() {
	return (
		<div className="home">
			<section className="components align-center justify-center">
				<Card
					profile={profile.src}
					name="Sarah Dole"
					username="sarahdole"
					content="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
				/>
			</section>
		</div>
	);
}
