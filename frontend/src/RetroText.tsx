import React, { ReactElement, useEffect, useState } from "react";
import PropTypes from "prop-types";

function RetroText(props: any) {
	const [depth, setDepth] = useState<ReactElement[]>();
	useEffect(() => {
		let depthObjects: ReactElement[] = [];
		for (let i = 0; i < props.depth; i++) {
			depthObjects.push(
				<g
					key={i}
					transform="matrix(3.0789,-0.124952,7.58053e-17,1.43913,-6316.22,575.944)">
					<text
						x={2080 + props.offset + 2 * (i + 1)}
						y={575 + props.offsetY + 2 * (i + 1)}
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
						x={2080 + props.offset + 2 * (i + 1)}
						y={575 + props.offsetY + 2 * (i + 1)}
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
	}, [props.depth, props.children, props.size, props.offset, props.offsetY]);

	return (
		<a href={props.href} style={props.style} target="_blank" rel="noopener noreferrer">
			<svg
				width={props.size}
				height="100%"
				viewBox={`0 0 300 150`}
				style={{ strokeLinejoin: "round", userSelect: "none" }}>
				<g transform="matrix(1,0,0,1,0,-475)">
					<g id="contact" transform="matrix(0.22888,0,0,0.493415,-4.57759,15.082)">
						{depth}
						<g transform="matrix(3.0789,-0.124952,7.58053e-17,1.43913,-6316.22,575.944)">
							<text
								x={`${2080 + props.offset}px`}
								y={`${575 + props.offsetY}px`}
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
								x={`${2080 + props.offset}px`}
								y={`${575 + props.offsetY}px`}
								style={{
									fontFamily: "Lobster, cursive",
									fontSize: 128 / (props.children.length / 6),
									fill: "rgb(255,236,179)",
									stroke: "none",
								}}>
								{props.children}
							</text>
						</g>
					</g>
				</g>
			</svg>
		</a>
	);
}

RetroText.propTypes = {
	size: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	depth: PropTypes.number.isRequired,
	offset: PropTypes.number.isRequired,
	offsetY: PropTypes.number.isRequired,
	href: PropTypes.string,
};

export default RetroText;
