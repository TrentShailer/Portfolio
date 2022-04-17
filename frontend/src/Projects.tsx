import React from "react";
import Copyright from "./Copyright";
import RetroText from "./RetroText";
import SectionTitle from "./SectionTitle";
import Project from "./Project";
import { Project as ProjectType } from "./DynamicData";
import PropTypes from "prop-types";

function Projects(props: any) {
	return (
		<div
			style={{
				height: "max-content",
				paddingBottom: 100,
				background: "#FFA726",
				position: "relative",
			}}>
			<div id={"Projects"} className="CenterContainer">
				<SectionTitle>PROJECTS</SectionTitle>
			</div>
			<div
				className="RowContainer"
				style={{ justifyContent: "space-around", flexWrap: "wrap" }}>
				{props.projects.map((project: ProjectType) => {
					return <Project key={project.title} project={project} />;
				})}
			</div>
		</div>
	);
}

Projects.propTypes = { projects: PropTypes.array.isRequired };
export default Projects;
