import React from "react";
import PropTypes from "prop-types";

function ScrollTo(props: any) {
	return (
		<div
			className="CenterContainer"
			style={{
				...props.style,
			}}>
			<div
				style={{
					width: 48,
					height: 48,
					borderRadius: "50%",
					cursor: "pointer",
					background: "rgba(0, 0, 0, 0.2)",
				}}
				onClick={() => {
					let element: Element | null = document.getElementById(props.target);
					if (element) {
						element.scrollIntoView({ behavior: "smooth", block: "start" });
					}
				}}>
				<svg width="48" height="48" viewBox="0 0 24 24">
					<path
						fill="#fff"
						d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z"
					/>
				</svg>
			</div>
		</div>
	);
}

ScrollTo.propTypes = { target: PropTypes.string.isRequired, style: PropTypes.any };

export default ScrollTo;
