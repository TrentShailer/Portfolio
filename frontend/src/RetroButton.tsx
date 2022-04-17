import React, { ReactElement, useEffect, useState } from "react";
import PropTypes from "prop-types";

function RetroButton(props: any) {
	const [step, setStep] = useState<number>(0);
	const [depth, setDepth] = useState<ReactElement[]>();
	let timeouts: any = [];
	useEffect(() => {
		let depthObjects: ReactElement[] = [];
		for (let i = 0; i <= step; i++) {
			if (i === step) {
				depthObjects.push(
					<g
						key={i}
						transform="matrix(3.0789,-0.124952,7.58053e-17,1.43913,-6316.22,575.944)">
						<text
							x={2150 - 2 * i}
							y={625 + props.offset - 2 * i}
							style={{
								fontFamily: "Lobster, cursive",
								fontSize: 128 / (props.children.length / 6),
								fill: "none",
								stroke: "rgb(66,66,66)",
								strokeWidth: 20 / (props.children.length / 6),
							}}>
							{props.children}
						</text>
						<text
							x={2150 - 2 * i}
							y={625 + props.offset - 2 * i}
							style={{
								fontFamily: "Lobster, cursive",
								fontSize: 128 / (props.children.length / 6),
								fill: "rgb(255,236,179)",
								stroke: "none",
							}}>
							{props.children}
						</text>
					</g>
				);
			} else
				depthObjects.push(
					<g
						key={i}
						transform="matrix(3.0789,-0.124952,7.58053e-17,1.43913,-6316.22,575.944)">
						<text
							x={2150 - 2 * i}
							y={625 + props.offset - 2 * i}
							style={{
								fontFamily: "Lobster, cursive",
								fontSize: 128 / (props.children.length / 6),
								fill: "none",
								stroke: "rgb(33,33,33)",
								strokeWidth: 20 / (props.children.length / 6),
							}}>
							{props.children}
						</text>
						<text
							x={2150 - 2 * i}
							y={625 + props.offset - 2 * i}
							style={{
								fontFamily: "Lobster, cursive",
								fontSize: 128 / (props.children.length / 6),
								fill: "rgb(33,33,33)",
								stroke: "none",
							}}>
							{props.children}
						</text>
					</g>
				);
			setDepth(depthObjects);
		}
	}, [step, props.children, props.size, props.offset]);

	const handleEnter = () => {
		for (let i = 0; i < timeouts.length; i++) {
			clearTimeout(timeouts[i]);
		}

		for (let i = 0; i < 10; i++) {
			timeouts.push(
				setTimeout(() => {
					setStep(i);
				}, 10 * i)
			);
		}
	};
	const handleExit = () => {
		for (let i = 0; i < timeouts.length; i++) {
			clearTimeout(timeouts[i]);
		}

		for (let i = 0; i <= 10; i++) {
			timeouts.push(
				setTimeout(() => {
					setStep(10 - i);
				}, 10 * i)
			);
		}
	};

	return (
		<a
			href={props.href}
			target="_blank"
			rel="noopener noreferrer"
			style={props.style}
			onMouseEnter={handleEnter}
			onMouseLeave={handleExit}>
			<svg
				width={props.size}
				height="100%"
				viewBox={`0 0 350 150`}
				style={{ strokeLinejoin: "round", userSelect: "none", cursor: "pointer" }}>
				<g transform="matrix(1,0,0,1,0,-475)">
					<g id="contact" transform="matrix(0.23,0,0,0.5,-4.5,15)">
						{depth}
					</g>
				</g>
			</svg>
		</a>
	);
}

RetroButton.propTypes = {
	size: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	href: PropTypes.string.isRequired,
	offset: PropTypes.number.isRequired,
};

export default RetroButton;
