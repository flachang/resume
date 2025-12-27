import { Education as EducationType } from '../types';

type EducationProps = {
	education: EducationType;
};

export const Education = ({ education }: EducationProps) => {
	return (
		<div className="education-section">
			<h2 className="section-title">{education.title}</h2>
			<div className="education-list">
				{education.list.map((item, index) => (
					<div key={index} className="education-item">
						{item.school && (
							<div className="education-school">{item.school}</div>
						)}
						<div className="education-details">
							{item.major && (
								<span className="education-major">{item.major}</span>
							)}
							{item.during_date && (
								<span className="education-date">{item.during_date}</span>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

