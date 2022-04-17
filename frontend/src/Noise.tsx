import React from "react";

export default function Noise() {
	return (
		<div
			style={{
				position: "absolute",
				top: 0,
				width: "100%",
				height: "100%",
				zIndex: 10,
				pointerEvents: "none",
				backgroundImage: "url('noise.png')",
				opacity: 0.2,
			}}
		/>
	);
}
