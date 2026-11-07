import { Education as EducationType } from '../types';

type EducationProps = {
	education: EducationType;
};

export const Education = ({ education }: EducationProps) => {
	return (
		<section className="education-section">
			<h2 className="section-title">{education.title}</h2>
			<div className="education-list">
				{education.list.map((item) => (
					<div key={item.school} className="education-item">
						<div className="item-headline">
							{item.school && <div className="education-school">{item.school}</div>}
							{item.during_date && (
								<span className="item-date">{item.during_date}</span>
							)}
						</div>
						{item.major && <div className="education-major">{item.major}</div>}
					</div>
				))}
			</div>
		</section>
	);
};
