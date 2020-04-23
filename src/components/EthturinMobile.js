import React, { useContext } from "react"
import styled from "@emotion/styled"

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext"

const ImagemapContainer = styled.div`
	margin: 0 auto;
	padding-top: 3rem;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: repeat(4, auto);

	width: 80vw;
	img {
		max-width: 80px;
		height: auto;
		justify-self: center;
	}
	div {
		max-width: 150px;
		&:hover {
			.portal {
				filter: saturate(0%);
			}
			cursor: pointer;
		}
	}
	.title {
		opacity: 1;
		z-index: 1;
		align-self: center;
	}
	.portal {
		transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
	}
`

const Cell1 = styled.div`
	display: grid;
`

const Cell2 = styled.div`
	display: grid;
`

const Cell3 = styled.div`
	display: grid;
`

const Cell4 = styled.div`
	display: grid;
	grid-row: 2;
	grid-column: 2;
`

const Cell5 = styled.div`
	display: grid;
	grid-row: 3;
	grid-column: 1;
`

const Cell6 = styled.div`
	display: grid;
	grid-row: 3;
	grid-column: 2;
`

const Cell7 = styled.div`
	display: grid;
	grid-row: 3;
	grid-column: 3;
`

const Cell8 = styled.div`
	display: grid;
`

const Cell9 = styled.div`
	display: grid;
`

const Cell10 = styled.div`
	display: grid;
`

const BottomLinks = styled.span`
	grid-row: 4 / span 1;
	grid-column: 1 / span 3;
	justify-self: center;
	display: grid;
	grid-template-columns: repeat(2, 91px);
	justify-items: space-between;
	align-items: center;
	padding-top: 2rem;
	align-self: flex-end;
`

const EthturinMobile = () => {
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
			openInNewTab("https://discord.gg/pyJMZG5")
		}
	}

	return (
		<ImagemapContainer>
			<Grid>
				<Cell2
					onClick={() =>
						openInNewTab("https://portal.interspace.chat/conference-room")
					}>
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
				<Cell3
					onClick={() =>
						openInNewTab("https://portal.interspace.chat/mentor-ring")
					}>
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
				<Cell4 onClick={() => openInNewTab("https://ethturin.com")}>
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
				<Cell6 onClick={() => openInNewTab("https://ethturin.com/agenda")}>
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
				<Cell7
					onClick={() => openInNewTab("https://breakout.interspace.chat/")}>
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
					<Cell9 onClick={() => openInNewTab("https://discord.gg/pyJMZG5")}>
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

export default EthturinMobile
