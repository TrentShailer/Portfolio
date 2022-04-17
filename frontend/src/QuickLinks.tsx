import React from "react";
import RetroButton from "./RetroButton";
import RetroText from "./RetroText";
import { BrowserView, MobileView } from "react-device-detect";

export default function QuickLinks() {
	return (
		<div
			style={{
				position: "absolute",
				top: "max(2vw, 2vh)",
				left: "max(2vw, 2vh)",
			}}>
			<BrowserView>
				<div className="ColumnContainer">
					<RetroButton
						offset={0}
						href="mailto:professional@trentshailer.com"
						size={"210px"}>
						Contact
					</RetroButton>
					<RetroButton offset={-30} href="https://github.com/TrentShailer" size={"180px"}>
						Github
					</RetroButton>
				</div>
			</BrowserView>
			<MobileView>
				<div className="ColumnContainer">
					<RetroText
						offset={0}
						offsetY={0}
						href="mailto:professional@trentshailer.com"
						size={"min(30vw, 30vh)"}
						depth={5}>
						Contact
					</RetroText>
					<RetroText
						offset={0}
						offsetY={0}
						href="https://github.com/TrentShailer"
						size={"min(25vw, 25vh)"}
						depth={5}>
						Github
					</RetroText>
				</div>
			</MobileView>
		</div>
	);
}
