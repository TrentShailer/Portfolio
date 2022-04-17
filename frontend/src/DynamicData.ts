interface DynamicData {
	about: string[];
	projects: Project[];
}

interface Project {
	icon: string;
	title: string;
	tech: string[];
	links: Link[];
	images: string[];
	description: string;
}

interface Link {
	label: string;
	url: string;
}

export type { DynamicData, Project, Link };
