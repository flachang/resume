import { Work as WorkType } from '../types';

type WorkProps = {
	work: WorkType;
};

export const Work = ({ work }: WorkProps) => {
	return (
		<section className="work-section">
			<h2 className="section-title">{work.title}</h2>
			<div className="work-list">
				{work.list.map((item) => (
					<article key={item.company} className="work-item">
						<header className="item-headline">
							<h3 className="work-company">{item.company}</h3>
							<span className="item-date">{item.during_date}</span>
						</header>
						<p className="work-meta">
							<strong>{item.position}</strong>
							<span>{item.org}</span>
						</p>
						<ul className="resume-list">
							{item.highlights.map((highlight) => (
								<li key={highlight}>{highlight}</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	);
};
