import React from "react";
import PropTypes from "prop-types";
import { Link } from "./DynamicData";
import RetroButton from "./RetroButton";

function DesktopModal(props: any) {
	return (
		<div
			className="CenterContainer"
			style={{
				position: "absolute",
				alignContent: "center",
				height: "100%",
			}}>
			<div
				onClick={() => {
					props.setShow(false);
				}}
				style={{
					cursor: "pointer",
					width: "100vw",
					height: "100vh",
					position: "absolute",
					zIndex: 13,
				}}
			/>
			<div
				style={{
					width: "80vw",
					height: "max-content",
					background: "#fff",
					borderRadius: 5,
					boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
					zIndex: 14,
					position: "relative",
				}}>
				<div
					onClick={() => {
						props.setShow(false);
					}}
					style={{
						position: "absolute",
						top: 10,
						right: 10,
						cursor: "pointer",
					}}>
					<svg width="24" height="24" viewBox="0 0 24 24">
						<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
					</svg>
				</div>
				<div
					style={{
						margin: "30px 30px 40px 40px",
						width: "calc(80vw - 80px)",
						height: "max-content",
						overflowY: "auto",
					}}>
					<div
						style={{
							fontFamily: "Big Shoulders Display",
							fontSize: 48,
							color: "#424242",
						}}>
						{props.project.title}
					</div>
					<div
						style={{
							fontFamily: "Big Shoulders Display",
							fontSize: 24,
							marginLeft: 24,
							color: "#424242",
						}}>
						{props.project.tech.map((tech: string) => {
							if (tech !== props.project.tech[props.project.tech.length - 1])
								return `${tech} — `;
							return tech;
						})}
					</div>
					<div
						style={{
							fontFamily: "Roboto, sans-serif",
							fontSize: 16,
							marginTop: 24,
							lineHeight: 1.8,
							color: "#424242",
						}}>
						{props.project.description}
					</div>
					<div
						className="RowContainer"
						style={{ justifyContent: "space-around", flexWrap: "wrap" }}>
						{props.project.images.map((url: string) => {
							return (
								<img
									style={{
										margin: "25px 10px 25px 10px",
										width: `calc(50vw / ${props.project.images.length})`,
									}}
									key={url}
									src={url}
									alt=""
								/>
							);
						})}
					</div>
					<div className="RowContainer">
						{props.project.links.map((link: Link) => {
							return (
								<RetroButton
									key={link.url}
									href={link.url}
									size={`${125 * (link.label.length / 6)}px`}
									offset={-50 * (link.label.length / 9)}>
									{link.label}
								</RetroButton>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

DesktopModal.propTypes = {
	project: PropTypes.object.isRequired,
	setShow: PropTypes.func.isRequired,
};

export default DesktopModal;
