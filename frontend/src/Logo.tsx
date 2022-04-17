import React from "react";
import QuickLinks from "./QuickLinks";
import ScrollTo from "./ScrollTo";
import Waves from "./waves.svg";

export default function Logo(props: any) {
	return (
		<div style={{ background: "#FFF8E1", height: "95vh", width: "100%", position: "relative" }}>
			<div
				className="CenterContainer"
				style={{
					paddingTop: "20vh",
				}}>
				<img style={{ width: "min(95vh, 95vw)" }} src="logo.png" alt="" />
			</div>

			<div
				className="CenterContainer"
				style={{
					fontFamily: "Lobster, cursive",
					fontSize: "max(2vw, 2vh)",
					paddingTop: 25,
					color: "#424242",
				}}>
				ReactJS — NodeJS — PSQL — Java — C++ — C#
			</div>
			<QuickLinks />
			<ScrollTo
				style={{ position: "absolute", top: "55vh", height: 48 }}
				target={"AboutMe"}
			/>
			<img
				draggable={false}
				style={{
					bottom: 0,
					position: "absolute",
					userSelect: "none",
				}}
				src={Waves}
				alt=""
			/>
		</div>
	);
}
