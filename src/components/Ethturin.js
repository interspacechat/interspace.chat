import React, { useContext } from "react"
import styled from "@emotion/styled"

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext"

const ImagemapContainer = styled.div`
	width: 50vw;
	margin: auto auto;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: repeat(4, auto);
	img {
		max-width: 100%;
		height: auto;
	}
	div {
		&:hover {
			.portal {
				filter: saturate(0%);
			}
			cursor: pointer;
		}
	}
	.title {
		opacity: 0;
		z-index: 1;
		height: auto;
	}
	.portal {
		transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
	}
`

const Cell1 = styled.div`
	display: grid;
	grid-row: 1 / span 2;
	grid-column: 1;
	.title {
		transform: translate(66px, 250px);
	}
	&:hover .title {
		opacity: 1;
	}
	.portal {
		align-self: center;
	}
`

const Cell2 = styled.div`
	display: grid;
	grid-row: 1;
	grid-column: 2;
	.title {
		transform: translate(-17px, 250px);
	}
	.portal {
		align-self: center;
		margin-left: 50px;
	}
	&:hover .title {
		opacity: 1;
	}
`

const Cell3 = styled.div`
	margin-left: 3rem;
	display: grid;
	grid-row: 1;
	grid-column: 3;
	.title {
		transform: translate(-60px, 250px);
	}
	&:hover .title {
		opacity: 1;
	}
	.portal {
		transform: translate(0px, 100px);
	}
`

const Cell4 = styled.div`
	display: grid;
	grid-row: 2;
	grid-column: 2;
	.portal {
		place-self: center;
	}
	.title {
		justify-self: center;
		transform: translate(0px, 150px);
	}
	&:hover .title {
		opacity: 1;
	}
`

const Cell5 = styled.div`
	display: grid;
	grid-row: 3 / span 2;
	grid-column: 1;
	justify-self: center;
	align-self: start;
	.title {
		transform: translateX(119px);
	}
	&:hover .title {
		opacity: 1;
	}
`

const Cell6 = styled.div`
	display: grid;
	grid-row: 3;
	grid-column: 2;
	justify-self: center;

	.title {
		transform: translateX(30px);
	}
	&:hover .title {
		opacity: 1;
	}
`

const Cell7 = styled.div`
	display: grid;
	margin-left: 3rem;
	grid-row: 2 / span 3;
	grid-column: 3;
	&:hover .title {
		opacity: 1;
	}
	.title {
		align-self: end;
		transform: translate(-94px, 183px);
	}
	.portal {
		align-self: center;
	}
`

const Cell8 = styled.div`
	display: grid;
	place-content: center;
	.portal {
		place-self: center;
	}
	&:hover .title {
		opacity: 1;
	}
`

const Cell9 = styled.div`
	display: grid;
	place-content: center;
	.portal {
		justify-self: center;
	}
	&:hover .title {
		opacity: 1;
	}
`

const Cell10 = styled.div`
	display: flex;
	justify-self: center;
	&:hover .title {
		opacity: 1;
	}
`

const BottomLinks = styled.span`
	display: grid;
	grid-template-columns: 1fr 1fr;
`

const Ethturin = () => {
	const { addFloatingSpace, currentFloatingSpaces } = useContext(
		FloatingSpaceContext
	)
	const space = currentFloatingSpaces

	const openInNewTab = (url) => {
		let win = window.open(url, "_blank")
		win.focus()
	}

	const poap = () => {
		if (space.indexOf("claim poap token") > -1) {
			window.alert(
				"To claim your POAP token paste your wallet address along with your role(s) at noncon (speaker, organizer, volunteer, attendee) in the #claim-poap-token discord channel and you will receive a PM with a link to redeem."
			)
		} else {
			window.alert(
				"To claim your POAP token paste your wallet address along with your role(s) at noncon (speaker, organizer, volunteer, attendee) in the #claim-poap-token discord channel and you will receive a PM with a link to redeem."
			)
			addFloatingSpace("claim poap token")
		}
	}

	return (
		<ImagemapContainer>
			<Grid>
				<Cell1
					onClick={() =>
						openInNewTab("https://www.cryptovoxels.com/play?coords=NW@72W,76S")
					}>
					<img
						className="title"
						src={require("../img/ethturin-elements/1-cryptaly.png")}
						alt=""
					/>
					<img
						className="portal"
						src={require("../img/ethturin-elements/stop-covid-19.png")}
						alt="stop-covid-19-videochat"
					/>
				</Cell1>
				<Cell2 onClick={() => addFloatingSpace("conference-room")}>
					<img
						className="title"
						src={require("../img/ethturin-elements/2-conference-room.png")}
						alt=""
					/>
					<img
						className="portal"
						src={require("../img/ethturin-elements/conference-room.png")}
						alt="conference-room-videochat"
					/>
				</Cell2>
				<Cell3 onClick={() => addFloatingSpace("mentor-ring")}>
					<img
						className="title"
						src={require("../img/ethturin-elements/3-mentor-ring.png")}
						alt=""
					/>
					<img
						className="portal"
						src={require("../img/ethturin-elements/mentor-ring.png")}
						alt="mentor-ring-videochat"
					/>
				</Cell3>
				<Cell4 onClick={() => addFloatingSpace("VHackathon ETH Turin")}>
					<img
						className="title"
						src={require("../img/ethturin-elements/4-v-hackathon.png")}
						alt=""
					/>
					<img
						className="portal"
						src={require("../img/ethturin-elements/v-hackathon.png")}
						alt="ETH Turin logo"
					/>
				</Cell4>
				<Cell5 onClick={() => addFloatingSpace("livestream")}>
					<img
						className="title"
						src={require("../img/ethturin-elements/5-livestream.png")}
						alt=""
					/>
					<img
						className="portal"
						src={require("../img/ethturin-elements/livestreams.png")}
						alt="ETH Turin livestreams"
					/>
				</Cell5>
				<Cell6 onClick={() => addFloatingSpace("calendar")}>
					<img
						className="title"
						src={require("../img/ethturin-elements/6-schedule.png")}
						alt=""
					/>
					<img
						className="portal"
						src={require("../img/ethturin-elements/schedule.png")}
						alt="schedule"
					/>
				</Cell6>
				<Cell7 onClick={() => addFloatingSpace("new room")}>
					<img
						className="title"
						src={require("../img/ethturin-elements/7-create-room.png")}
						alt=""
					/>
					<img
						className="portal"
						src={require("../img/ethturin-elements/new-room.png")}
						alt="create your own videochat room"
					/>
				</Cell7>
				<BottomLinks>
					<Cell8 onClick={() => poap()}>
						<img
							className="title"
							src={require("../img/ethturin-elements/8-poap.png")}
							alt=""
						/>
						<img
							className="portal"
							src={require("../img/ethturin-elements/poap.png")}
							alt="proof of attendance logo"
						/>
					</Cell8>
					<Cell9 onClick={() => addFloatingSpace("discord chat")}>
						<img
							className="title"
							src={require("../img/ethturin-elements/9-discord-chat.png")}
							alt=""
						/>
						<img
							className="portal"
							src={require("../img/ethturin-elements/discord-chat.png")}
							alt="discord chat"
						/>
					</Cell9>
				</BottomLinks>
			</Grid>
		</ImagemapContainer>
	)
}

export default Ethturin
