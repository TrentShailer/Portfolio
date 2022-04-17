import React, { Ref, useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import RetroText from "./RetroText";
import IconBackground from "./IconBackground.svg";
import ScrollTo from "./ScrollTo";
import SectionTitle from "./SectionTitle";
import PropTypes from "prop-types";
import Waves from "./waves-orange.svg";

function About(props: any) {
	const [containerWidth, setContainerWidth] = useState("20vw");
	const wavesRef = useRef<any>();

	useEffect(() => {
		if (isMobile) {
			setContainerWidth("60vw");
		}
	}, []);

	return (
		<div
			style={{
				width: "100%",
				height: "max-content",
				paddingBottom: wavesRef.current ? wavesRef.current.height * 1.5 : 300,
				background: "#009688",
				paddingTop: 50,
				position: "relative",
			}}>
			<div id={"AboutMe"} className="CenterContainer">
				<SectionTitle>ABOUT ME</SectionTitle>
			</div>
			<div
				className="RowContainer"
				style={{
					justifyContent: "space-around",
					flexWrap: "wrap",
				}}>
				<div
					className="ColumnContainer"
					style={{
						marginTop: "5vh",
						width: containerWidth,
						height: "100%",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<div style={{ position: "relative" }} className="CenterContainer">
						<img width="50%" src={IconBackground} alt="" />
						<svg
							style={{ position: "absolute" }}
							width="66%"
							height="66%"
							viewBox="0 0 24 24">
							<path
								fill="#FFF8E1"
								d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z"
							/>
						</svg>
					</div>
					<div
						style={{
							textAlign: "center",
							fontFamily: "Lobster, cursive",
							color: "#fff",
							fontSize: 48,
						}}>
						Education
					</div>
					<div
						style={{
							textAlign: "center",
							color: "#fff",
							lineHeight: "1.4",
							fontSize: 18,
							whiteSpace: "pre-wrap",
						}}>
						{props.data[0]}
					</div>
				</div>

				<div
					className="ColumnContainer"
					style={{
						marginTop: "5vh",
						width: containerWidth,
						height: "100%",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<div style={{ position: "relative" }} className="CenterContainer">
						<img width="50%" src={IconBackground} alt="" />
						<svg
							style={{ position: "absolute", marginTop: -10 }}
							width="66%"
							height="66%"
							viewBox="0 0 24 24">
							<path
								fill="#FFF8E1"
								d="M22 14H21C21 10.13 17.87 7 14 7H13V5.73C13.6 5.39 14 4.74 14 4C14 2.9 13.11 2 12 2S10 2.9 10 4C10 4.74 10.4 5.39 11 5.73V7H10C6.13 7 3 10.13 3 14H2C1.45 14 1 14.45 1 15V18C1 18.55 1.45 19 2 19H3V20C3 21.11 3.9 22 5 22H19C20.11 22 21 21.11 21 20V19H22C22.55 19 23 18.55 23 18V15C23 14.45 22.55 14 22 14M21 17H19V20H5V17H3V16H5V14C5 11.24 7.24 9 10 9H14C16.76 9 19 11.24 19 14V16H21V17M10.7 14C11.1 14.39 11.1 15.05 10.7 15.45L9.97 16.18L8.5 17.65L6.3 15.45C5.9 15.05 5.9 14.39 6.3 14C6.71 13.58 7.36 13.58 7.77 14L8.5 14.72L9.23 14C9.64 13.58 10.29 13.58 10.7 14M17.7 14C18.1 14.39 18.1 15.05 17.7 15.45L16.97 16.18L15.5 17.65L13.3 15.45C12.9 15.05 12.9 14.39 13.3 14C13.71 13.58 14.36 13.58 14.77 14L15.5 14.72L16.23 14C16.64 13.58 17.29 13.58 17.7 14Z"
							/>
						</svg>
					</div>
					<div
						style={{
							textAlign: "center",
							fontFamily: "Lobster, cursive",
							color: "#fff",
							fontSize: 48,
						}}>
						Robotics
					</div>
					<div
						style={{
							textAlign: "center",
							color: "#fff",
							lineHeight: "1.4",
							fontSize: 18,
							whiteSpace: "pre-wrap",
						}}>
						{props.data[1]}
					</div>
				</div>

				<div
					className="ColumnContainer"
					style={{
						marginTop: "5vh",
						width: containerWidth,
						height: "100%",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<div style={{ position: "relative" }} className="CenterContainer">
						<img width="50%" src={IconBackground} alt="" />
						<svg
							style={{ position: "absolute" }}
							width="66%"
							height="66%"
							viewBox="0 0 24 24">
							<path
								fill="#FFF8E1"
								d="M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z"
							/>
						</svg>
					</div>
					<div
						style={{
							textAlign: "center",
							fontFamily: "Lobster, cursive",
							color: "#fff",
							fontSize: 48,
						}}>
						Programming
					</div>
					<div
						style={{
							textAlign: "center",
							color: "#fff",
							lineHeight: "1.4",
							fontSize: 18,
							whiteSpace: "pre-wrap",
						}}>
						{props.data[2]}
					</div>
				</div>
			</div>
			<ScrollTo style={{ marginTop: 50, height: 48 }} target="Projects" />
			<img
				ref={wavesRef}
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

About.propTypes = {
	data: PropTypes.array.isRequired,
};

export default About;
