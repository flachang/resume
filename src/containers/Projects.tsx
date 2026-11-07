import { Projects as ProjectsType } from '../types';

type ProjectsProps = {
	projects: ProjectsType;
};

export const Projects = ({ projects }: ProjectsProps) => {
	return (
		<section className="projects-section">
			<h2 className="section-title">{projects.title}</h2>
			<div className="project-list">
				{projects.list.map((project) => (
					<article key={project.name} className="project-item">
						<h3 className="project-name">
							{project.name}
							{project.link && (
								<a
									className="project-link"
									href={project.link}
									target="_blank"
									rel="noreferrer noopener"
								>
									{project.link}
								</a>
							)}
						</h3>
						<p className="field-label">角色</p>
						<p className="field-value">{project.role}</p>
						<p className="field-label">行动</p>
						<ul className="resume-list">
							{project.actions.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
						<p className="field-label">结果</p>
						<ul className="resume-list">
							{project.results.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	);
};
