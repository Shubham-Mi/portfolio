export interface PersonalInfo {
	name: string;
	role: string;
	email: string;
	location: string;
	github: string;
	linkedin: string;
	bio: string;
}

export interface Stat {
	value: number;
	suffix: string;
	label: string;
}

export interface SkillGroup {
	category: string;
	skills: string[];
}

export interface Experience {
	company: string;
	role: string;
	period: string;
	location: string;
	bullets: string[];
}

export interface Project {
	name: string;
	description: string;
	tags: string[];
	featured?: boolean; // if true, shown in homepage section (up to 6)
	slug?: string; // "base-convertor" → /project/base-convertor
	deploymentUrl?: string; // Vercel origin — used only by next.config.ts for rewrites
	thumbnail?: string; // "/thumbnails/base-convertor.png" — gradient placeholder if absent
	github?: string;
	live?: string; // external link fallback when no slug
}

export const personalInfo: PersonalInfo = {
	name: "Shubham Mittal",
	role: "Backend Engineer",
	email: "shubhammittal2001@zohomail.in",
	location: "Ahmedabad, Gujarat, India",
	github: "https://github.com/Shubham-Mi",
	linkedin: "https://linkedin.com/in/shubham-mittal-701220193",
	bio: "I'm a Backend Engineer with 3+ years of experience building scalable systems and APIs for high-volume SaaS applications. At tinyco.ai, I've scaled infrastructure to handle 75M+ emails/day, led a database migration that cut query latency by 80%, and shipped a workflow automation engine used in production. I care deeply about reliability, performance, and clean architecture.",
};

export const typedRoles: string[] = [
	"Backend Engineer",
	"API Architect",
	"Distributed Systems",
	"System Builder",
];

export const stats: Stat[] = [
	{ value: 75, suffix: "M+", label: "emails per day" },
	{ value: 3, suffix: "+", label: "years experience" },
	{ value: 2, suffix: "", label: "companies" },
];

export const skillGroups: SkillGroup[] = [
	{
		category: "Languages",
		skills: ["Java", "C++", "Python", "JavaScript"],
	},
	{
		category: "Frameworks",
		skills: ["Spring Boot", "React.js", "Node.js", "Express.js"],
	},
	{
		category: "Databases",
		skills: ["PostgreSQL", "MySQL", "Redis"],
	},
	{
		category: "DevOps / Cloud",
		skills: ["AWS", "Docker", "Kubernetes"],
	},
	{
		category: "Tools",
		skills: ["Git", "Jenkins", "GitLab CI"],
	},
	{
		category: "APIs",
		skills: ["REST", "GraphQL"],
	},
];

export const experiences: Experience[] = [
	{
		company: "tinyco.ai",
		role: "Backend Engineer",
		period: "Jun 2023 – Present",
		location: "Remote",
		bullets: [
			"Architected and scaled an email delivery platform handling 75M+ emails/day, improving reliability, throughput, and performance under high load.",
			"Led migration from PostgreSQL to ClickHouse, reducing dashboard query latency by 80% and lowering infrastructure costs by 25%.",
			"Built and launched a workflow automation engine supporting marketing activity triggers, conditional branching, merge tags, and multistep automation flows.",
			"Developed a Retention.com integration to identify anonymous website visitors, sync leads daily, and enable credit-based billing with auto top-up.",
			"Designed and shipped a self-serve list cleaning platform with integrated payments, automated processing pipelines, and email suppression.",
			"Extended public REST APIs for external integrations, including dynamic audience APIs and API-triggered automations.",
		],
	},
	{
		company: "IBM ISL",
		role: "Software Engineering Intern",
		period: "Jul 2022 – Jan 2023",
		location: "Bangalore, India",
		bullets: [
			"Researched and evaluated device connectivity protocols (Bluetooth, BLE, Wi-Fi) to support feature development in MaaS360.",
			"Built a prototype Android application to analyse and visualise connectivity behaviour, enabling faster product experimentation.",
		],
	},
];

/**
 * Sample Project
{
  name: "Base Convertor",
  description: "Convert numbers between binary, octal, decimal, and hexadecimal with instant results.",
  tags: ["React", "TypeScript", "Vite", "Vercel"],
  featured: true,
  slug: "base-convertor",
  deploymentUrl: "https://base-convertor-one.vercel.app",
  github: "https://github.com/Shubham-Mi/base-convertor",
}
 */

export const projects: Project[] = [];
