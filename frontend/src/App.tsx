import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Copyright from "./Copyright";
import About from "./About";
import Projects from "./Projects";
import { DynamicData } from "./DynamicData";
import axios from "axios";
import Noise from "./Noise";
import Modal from "./Modal";

function App() {
	const [dynamicData, setDynamicData] = useState<DynamicData>({
		about: ["", "", ""],
		projects: [],
	});
	useEffect(() => {
		axios
			.get(
				"https://raw.githubusercontent.com/TrentShailer/Static-Files/master/Portfolio/projects.json"
			)
			.then((response) => {
				setDynamicData(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
				let defaultData: DynamicData = {
					about: ["", "Something went wrong while fetching data", ""],
					projects: [],
				};

				setDynamicData(defaultData);
			});
	}, []);

	return (
		<div style={{ width: "100%", height: "max-content", position: "relative" }}>
			<Modal />
			<Noise />
			<Logo />
			<About data={dynamicData.about} />
			<Projects projects={dynamicData.projects} />
			<Copyright />
		</div>
	);
}

export default App;
