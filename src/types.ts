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

export interface Skills {
	title: string;
	list?: string[];
}

export interface ResumeData {
	info: Info;
	education: Education;
	skills: Skills;
}

