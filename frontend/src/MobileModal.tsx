import React from "react";
import PropTypes from "prop-types";
import RetroButton from "./RetroButton";
import { Link } from "./DynamicData";
import RetroText from "./RetroText";

function MobileModal(props: any) {
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
					width: "95vw",
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
						margin: "20px 20px 20px 20px",
						width: "calc(95vw - 40px)",
						height: "max-content",
						overflowY: "auto",
					}}>
					<div
						style={{
							fontFamily: "Big Shoulders Display",
							fontSize: `min(calc(100vw / ${
								props.project.title.length / 1.7
							}), 30px)`,
							color: "#424242",
						}}>
						{props.project.title}
					</div>
					<div
						style={{
							fontFamily: "Big Shoulders Display",
							fontSize: 16,
							marginLeft: 16,
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
							fontSize: 14,
							marginTop: 14,
							lineHeight: 1.6,
							color: "#424242",
						}}>
						{props.project.description}
					</div>
					<div
						className="RowContainer"
						style={{
							justifyContent: "center",
							alignContent: "center",
							flexWrap: "wrap",
							marginTop: 10,
						}}>
						{props.project.images.map((url: string) => {
							return (
								<img
									style={{
										marginLeft: 5,
										marginRight: 5,
										marginTop: 10,
										marginBottom: 10,
										width: `40vw`,
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
								<RetroText
									key={link.url}
									href={link.url}
									size={`${125 * (link.label.length / 6)}px`}
									offset={0}
									offsetY={-50 * (link.label.length / 9)}
									depth={7}>
									{link.label}
								</RetroText>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

MobileModal.propTypes = {
	project: PropTypes.object.isRequired,
	setShow: PropTypes.func.isRequired,
};

export default MobileModal;
