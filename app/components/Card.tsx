import { memo } from 'react';
import Image from 'next/image';

interface CardProps {
	profile: string;
	name: string;
	username: string;
	content: string;
}

export const Card = memo(function Card({ profile, name, username, content }: CardProps) {
	return (
		<article 
			className="card flex flex-col w-[340px] bg-white p-6 rounded-lg shadow-sm items-start gap-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
			role="article"
			aria-labelledby={`card-title-${username}`}
			tabIndex={0}
		>
			<header className="card__profile flex flex-row items-center gap-4 self-stretch">
				<Image 
					src={profile} 
					alt={`Profile picture of ${name}`}
					width={48}
					height={48}
					className="flex justify-center items-center rounded-full object-cover"
					loading="lazy"
					decoding="async"
				/>
				<div className="card__profile__info flex flex-col items-start gap-[1px] flex-1">
					<h2 
						id={`card-title-${username}`}
						className="text-lg font-semibold self-stretch text-neutral-900 text-justify"
					>
						{name}
					</h2>
					<p className="text-sm font-normal text-neutral-600" aria-label={`Username: ${username}`}>
						@{username}
					</p>
				</div>
			</header>
			<section className="card__content" aria-label="Testimonial content">
				<p className="text-base text-left font-normal text-neutral-600 self-stretch">
					{content}
				</p>
			</section>
		</article>
	);
});
