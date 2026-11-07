import { Skills as SkillsType } from '../types';

type SkillsProps = {
	skills: SkillsType;
};

export const Skills = ({ skills }: SkillsProps) => {
	return (
		<section className="skills-section">
			<h2 className="section-title">{skills.title}</h2>
			<ul className="resume-list">
				{skills.groups.map((group) => (
					<li key={group.category}>
						<strong>{group.category}：</strong>{group.items.join('，')}
					</li>
				))}
			</ul>
		</section>
	);
};
