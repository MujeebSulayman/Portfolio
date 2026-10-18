"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";

const TAGS = ["All", "Web3", "AI", "Web2"];
const PAGE_SIZE = 9;

const scrollToProjects = (delay) => {
	setTimeout(() => {
		document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
	}, delay);
};

const ProjectsSection = ({ initialTag = "All" }) => {
	const router = useRouter();
	const pathname = usePathname();
	const [tag, setTag] = useState(initialTag);
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		const pathTag = pathname.slice(1).toLowerCase();
		const match = TAGS.find((t) => t.toLowerCase() === pathTag);
		if (match) {
			setTag(match);
			scrollToProjects(300);
		} else if (pathname === "/") {
			setTag("All");
		}
		if (window.location.hash === "#projects") {
			scrollToProjects(100);
		}
	}, [pathname]);

	const handleTagChange = (newTag) => {
		setTag(newTag);
		setShowAll(false);
		router.push(newTag === "All" ? "/" : `/${newTag.toLowerCase()}`, { scroll: false });
		scrollToProjects(100);
	};

	const filteredProjects = projects.filter((project) => project.tag.includes(tag));
	const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, PAGE_SIZE);

	return (
		<section id="projects" className="py-20 sm:py-28">
			<div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
				<SectionHeading index="02" label="Work" title="Featured projects" className="!mb-0">
					A collection of projects showcasing my expertise in Web2, Web3 and AI Agent
					development.
				</SectionHeading>
				<div
					role="tablist"
					className="glass inline-flex max-w-full gap-1 self-start overflow-x-auto rounded-full p-1 lg:self-auto">
					{TAGS.map((name) => (
						<ProjectTag
							key={name}
							name={name}
							count={projects.filter((p) => p.tag.includes(name)).length}
							onClick={handleTagChange}
							isSelected={tag === name}
						/>
					))}
				</div>
			</div>

			<div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
				{visibleProjects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgURL={project.image}
						gitUrl={project.gitUrl}
						previewUrl={project.previewUrl}
						tag={project.tag}
					/>
				))}
			</div>

			{filteredProjects.length > PAGE_SIZE && (
				<div className="mt-12 flex justify-center">
					<button
						onClick={() => {
							if (showAll) scrollToProjects(0);
							setShowAll(!showAll);
						}}
						className="btn btn-glass glass">
						{showAll ? "Show fewer" : `Show all ${filteredProjects.length} projects`}
					</button>
				</div>
			)}
		</section>
	);
};

export default ProjectsSection;
