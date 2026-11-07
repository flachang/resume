import { Thanks as ThanksType } from '../types';

type ThanksProps = {
	thanks: ThanksType;
};

export const Thanks = ({ thanks }: ThanksProps) => {
	if (!thanks.text) {
		return null;
	}

	return (
		<section className="thanks-section">
			<h2 className="section-title">{thanks.title}</h2>
			<p className="thanks-text">{thanks.text}</p>
		</section>
	);
};
