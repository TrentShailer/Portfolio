import React, { useEffect, useState } from "react";

function support_format_webp() {
	var elem = document.createElement("canvas");

	if (!!(elem.getContext && elem.getContext("2d"))) {
		// was able or not to get WebP representation
		return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
	} else {
		// very old browser like IE 8, canvas not supported
		return false;
	}
}

export default function Noise() {
	const [noise, setNoise] = useState({});
	useEffect(() => {
		if (support_format_webp()) {
			setNoise({ backgroundImage: "url('noise.webp')" });
		} else {
			setNoise({ backgroundImage: "url('noise.png')" });
		}
	}, []);
	return (
		<div
			style={{
				position: "absolute",
				top: 0,
				width: "100%",
				height: "100%",
				zIndex: 10,
				pointerEvents: "none",
				opacity: 0.2,
				...noise,
			}}
		/>
	);
}
