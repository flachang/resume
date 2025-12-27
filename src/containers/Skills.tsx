import { Skills as SkillsType } from '../types';

type SkillsProps = {
	skills: SkillsType;
};

export const Skills = ({ skills }: SkillsProps) => {
	return (
		<div className="skills-section">
			<h2 className="section-title">{skills.title}</h2>
			{skills.list && skills.list.length > 0 && (
				<div className="skills-list">
					{skills.list.map((skill, index) => (
						<span key={index} className="skill-item">
							{skill}
						</span>
					))}
				</div>
			)}
		</div>
	);
};

