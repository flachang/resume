export type ContactType = 'phone' | 'wechat' | 'email' | 'github' | 'linkedin';

export interface Contact {
	type: ContactType;
	value: string | number;
}

export interface Info {
	name: string;
	contacts: Contact[];
	description: string;
}

export interface EducationItem {
	school: string;
	during_date: string;
	major: string;
}

export interface Education {
	title: string;
	list: EducationItem[];
}

export interface SkillGroup {
	category: string;
	items: string[];
}

export interface Skills {
	title: string;
	groups: SkillGroup[];
}

export interface ProjectItem {
	name: string;
	link?: string;
	role: string;
	actions: string[];
	results: string[];
}

export interface Projects {
	title: string;
	list: ProjectItem[];
}

export interface WorkItem {
	company: string;
	during_date: string;
	position: string;
	org: string;
	highlights: string[];
}

export interface Work {
	title: string;
	list: WorkItem[];
}

export interface Thanks {
	title: string;
	text: string;
}

export interface ResumeData {
	info: Info;
	education: Education;
	skills: Skills;
	projects: Projects;
	work: Work;
	thanks: Thanks;
}
