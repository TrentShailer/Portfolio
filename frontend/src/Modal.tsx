import React, { useEffect, useState } from "react";
import Emitter from "./Emitter";
import DesktopModal from "./DesktopModal";
import MobileModal from "./MobileModal";
import { Project } from "./DynamicData";
import { isMobile } from "react-device-detect";

export default function Modal() {
	const [projectData, setProjectData] = useState<Project>();
	const [opacity, setOpacity] = useState(0);
	const [show, setShow] = useState(false);

	useEffect(() => {
		Emitter.removeListener("OpenModal");
		Emitter.on("OpenModal", (data: any) => {
			let project: Project = data.project;
			console.log(project);
			setProjectData(project);
			setShow(true);
		});
	}, []);

	useEffect(() => {
		if (show === false) {
			setOpacity(0);
			setTimeout(() => {
				setProjectData(undefined);
			}, 300);
		} else {
			setOpacity(1);
		}
	}, [show]);

	return (
		<div
			style={{
				position: "fixed",
				transition: "opacity 300ms ease-in-out",
				opacity: opacity,
				zIndex: 12,
			}}>
			{projectData ? (
				<div
					style={{
						width: "100vw",
						height: "100vh",
						background: "rgba(0, 0, 0, 0.5)",
					}}>
					{isMobile ? (
						<MobileModal setShow={setShow} project={projectData} />
					) : (
						<DesktopModal setShow={setShow} project={projectData} />
					)}
				</div>
			) : null}
		</div>
	);
}
