import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Emitter from "./Emitter";

function Project(props: any) {
	const [scale, setScale] = useState("scale(1)");
	const [boxShadow, setBoxShadow] = useState("0px 0px 10px rgba(0, 0, 0, 0.3)");

	const handleEnter = () => {
		setScale("scale(1.05)");
		setBoxShadow("5px 5px 30px rgba(0, 0, 0, 0.2)");
	};
	const handleExit = () => {
		setScale("scale(1)");
		setBoxShadow("0px 0px 10px rgba(0, 0, 0, 0.3)");
	};
	const handleClick = () => {
		Emitter.emit("OpenModal", { project: props.project });
	};

	return (
		<div
			onMouseEnter={handleEnter}
			onMouseLeave={handleExit}
			onClick={handleClick}
			style={{
				cursor: "pointer",
				width: 300,
				height: 300,
				background: "#fff",
				margin: 25,
				borderRadius: 5,
				padding: 5,
				boxShadow: boxShadow,
				position: "relative",
				zIndex: 11,
				transition: "transform 300ms ease-in-out, box-shadow 300ms ease-in-out",
				transform: scale,
			}}>
			<div
				style={{
					width: "100%",
					height: "75%",
					background: "#fff",
					borderRadius: 3,
					zIndex: -2,
				}}>
				<img
					style={{ borderRadius: 3 }}
					width="100%"
					height="100%"
					src={props.project.images.length > 0 ? props.project.images[0] : ""}
					alt=""
				/>
			</div>
			<div className="CenterContainer" style={{ top: 200, position: "absolute" }}>
				<svg
					width={64}
					height={64}
					viewBox="0 0 48 48"
					version="1.1"
					style={{
						fillRule: "evenodd",
						clipRule: "evenodd",
						strokeLinejoin: "round",
						strokeMiterlimit: 2,
					}}>
					<circle cx="24" cy="24" r="24" fill="#fff" />
				</svg>
				<svg
					style={{ position: "absolute" }}
					width={props.project.iconSize}
					height={props.project.iconSize}
					viewBox="0 0 24 24">
					<path fill="#424242" d={props.project.icon} />
				</svg>
			</div>
			<div
				className="CenterContainer"
				style={{ height: 75, width: "100%", left: 0, position: "absolute" }}>
				<TitleText>{props.project.title}</TitleText>
			</div>
		</div>
	);
}

function TitleText(props: any) {
	return (
		<div
			style={{
				width: "100%",
				fontFamily: "Lobster, cursive",
				textAlign: "center",
				fontSize: `min(36px, 36px / ${props.children.length / 16})`,
				textOverflow: "ellipsis",
				...props.style,
			}}>
			{props.children}
		</div>
	);
}

Project.propTypes = { project: PropTypes.object.isRequired };

export default Project;
