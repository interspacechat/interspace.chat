import React, { useEffect, useContext, useReducer } from "react"
import styled from "styled-components"
import { Rnd } from "react-rnd"

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext"

import LoftRadioInstance from "./integrations/LoftRadioInstance"
import YoutubeInstance from "./integrations/YoutubeInstance"
import ChatInstance from "./integrations/ChatInstance"
import CalendarInstance from "./integrations/CalendarInstance"
import HubInstance from "./integrations/HubInstance"
import RoomInstance from "./integrations/RoomInstance"
import LivestreamLinkInstance from "./integrations/LivestreamLinksInstance"

import AboutInstance from "./external-sites/AboutInstance"
import LivepeerInstance from "./integrations/LivepeerInstance"
import RestreamerInstance from "./integrations/RestreamerInstance"
import DonateInstance from "./external-sites/DonateInstance"
import RaffleInstance from "./external-sites/RaffleInstance"
import HelpInstance from "./external-sites/HelpInstance"
import VHackathonInstance from "./external-sites/VHackathonInstance"
import GitcoinInstance from "./external-sites/GitcoinInstance"

import { RoomNames } from "../utils/constants"
import LaunchNewRoom from "./LaunchNewRoom"

const width = window.innerWidth / 2
const height = window.innerHeight / 2

const SpaceHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	.windowKey {
		font-size: 18px;
		font-weight: 600;
		color: ${(props) => props.theme.body};
	}
`
const SpaceHeaderElement = styled.div`
	margin: 0.5rem;
`
const SpaceContainer = styled.div`
	position: relative;
	z-index: 100;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`

const SpaceContent = styled.div`
	width: 100%;
	flex: 1;
	cursor: auto;
	div {
		color: #ffffff;
	}
`

const spaceContainerStyle = {
	padding: "15px",
	paddingTop: "0px",
	// backdropFilter: "blur(4px)",
	cursor: "all-scroll",
	pointerEvents: "all",
	boxShadow:
		"0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
	"&:active iframe": {
		pointerEvents: "none",
	},
}

const Closer = styled.div`
	opacity: 0.7;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
	&::before {
		content: "×"; // here is your X(cross) sign.
		color: #fff;
		font-family: Arial, sans-serif;
		font-weight: bold;
		font-size: 30px;
	}
`

function getFloatingRoomWindow(windowKey) {
	if (windowKey === "loft.radio") {
		return <LoftRadioInstance />
	} else if (RoomNames.indexOf(windowKey) > -1) {
		return <RoomInstance space={windowKey} />
	} else if (windowKey === "VHackathon ETH Turin") {
		return <VHackathonInstance />
	} else if (windowKey === "Gitcoin") {
		return <GitcoinInstance />
	} else if (windowKey === "discord chat") {
		return <ChatInstance />
	} else if (windowKey === "new room") {
		return <LaunchNewRoom />
	} else if (windowKey === "claim poap token") {
		return <ChatInstance />
	} else if (windowKey === "calendar") {
		return <CalendarInstance />
	} else if (windowKey === "youtube") {
		return <YoutubeInstance />
	} else if (windowKey === "hubs") {
		return <HubInstance />
	} else if (windowKey === "about") {
		return <AboutInstance />
	} else if (windowKey === "livepeer") {
		return <RestreamerInstance />
	} else if (windowKey === "raffle") {
		return <RaffleInstance />
	} else if (windowKey === "donate") {
		return <DonateInstance />
	} else if (windowKey === "help") {
		return <HelpInstance />
	} else if (windowKey === "livestream") {
		return <LivestreamLinkInstance />
	} else if (windowKey === null) {
		return null
	}
}

function zIndexesReducer(state, action) {
	return {
		...state,
		[action.key]: action.value,
	}
}

function FloatingRoomWindow() {
	const { currentFloatingSpaces, closeFloatingSpace } = useContext(
		FloatingSpaceContext
	)

	const space = currentFloatingSpaces

	const [zIndexes, setZIndexes] = useReducer(zIndexesReducer, {})
	const maxZ = Object.values(zIndexes).reduce((acc, el) => Math.max(acc, el), 1)

	useEffect(() => {
		let tempMax = maxZ
		currentFloatingSpaces.forEach((space) => {
			if (!zIndexes[space]) {
				setZIndexes({ key: space, value: ++tempMax })
			}
		})
	}, [currentFloatingSpaces, maxZ, zIndexes])

	function setWindowFocus(windowKey) {
		setZIndexes({ key: windowKey, value: maxZ + 1 })
	}

	const setStartingCoordinatesX = (windowKey) => {
		let windowOriginX = 20
		if (windowKey === "discord chat") {
			windowOriginX = width
		} else if (windowKey === "claim poap token") {
			windowOriginX = width / 2
		} else if (windowKey === "calendar") {
			windowOriginX = width
		} else if (
			windowKey === "youtube" ||
			windowKey === "livepeer" ||
			windowKey === "livestream"
		) {
			windowOriginX = 20
		} else if (
			windowKey === "VHackathon ETH Turin" ||
			windowKey === "Gitcoin"
		) {
			windowOriginX = width / 3
		} else if (
			windowKey === "help" ||
			windowKey === "new room" ||
			windowKey === "loft.radio" ||
			windowKey === "claim poap token"
		) {
			windowOriginX = width / 2
		} else {
			windowOriginX = 20
		}
		return windowOriginX
	}
	const setStartingCoordinatesY = (windowKey) => {
		let windowOriginY = 40
		if (
			windowKey === "VHackathon ETH Turin" ||
			windowKey === "Gitcoin" ||
			windowKey === "discord chat"
		) {
			windowOriginY = 40
		} else if (windowKey === "calendar") {
			windowOriginY = height + 10
		} else if (
			windowKey === "youtube" ||
			windowKey === "livepeer" ||
			windowKey === "livestream"
		) {
			windowOriginY = height + 10
		} else if (
			windowKey === "help" ||
			windowKey === "new room" ||
			windowKey === "livestream" ||
			windowKey === "loft.radio" ||
			windowKey === "claim poap token"
		) {
			windowOriginY = height / 2
		} else {
			windowOriginY = 40
		}
		return windowOriginY
	}

	const setFloatingwindowColor = (windowKey) => {
		let bgColor = "#eeeeeedd"

		if (windowKey === "stop-covid-19") {
			bgColor = "#ff8383dd"
		} else if (windowKey === "mentor-ring") {
			bgColor = "#78ffbedd"
		} else if (windowKey === "conference-room") {
			bgColor = "#cfa6ffdd"
		} else if (
			windowKey === "discord chat" &&
			space.indexOf("stop-covid-19") > -1
		) {
			bgColor = "#ff8383dd"
		} else if (
			windowKey === "discord chat" &&
			space.indexOf("conference-room") > -1
		) {
			bgColor = "#cfa6ffdd"
		} else if (
			windowKey === "discord chat" &&
			space.indexOf("mentor-ring") > -1
		) {
			bgColor = "#78ffbedd"
		} else if (
			(windowKey === "youtube" ||
				windowKey === "livepeer" ||
				windowKey === "livepeer") &&
			space.indexOf("stop-covid-19") > -1
		) {
			bgColor = "#ff8383dd"
		} else if (
			(windowKey === "youtube" ||
				windowKey === "livepeer" ||
				windowKey === "livepeer") &&
			space.indexOf("conference-room") > -1
		) {
			bgColor = "#cfa6ffdd"
		} else if (
			(windowKey === "youtube" ||
				windowKey === "livepeer" ||
				windowKey === "livestream") &&
			space.indexOf("mentor-ring") > -1
		) {
			bgColor = "#78ffbedd"
		} else if (windowKey === "calendar") {
			bgColor = "#ffa9a9dd"
		} else if (windowKey === "new room") {
			bgColor = "#8200ffdd"
		} else if (windowKey === "claim poap token") {
			bgColor = "#ff00e1dd"
		} else if (windowKey === "Gitcoin") {
			bgColor = "#0038FFdd"
		} else if (windowKey === "discord chat") {
			bgColor = "#0FCEA9dd"
		} else if (windowKey === "VHackathon ETH Turin") {
			bgColor = "#00ffecdd"
		} else {
			bgColor = "#822BFFdd"
		}
		return bgColor
	}

	const setStartingWidth = (windowKey) => {
		let windowWidth = width - 20
		if (windowKey === "Gitcoin" || windowKey === "VHackathon ETH Turin") {
			windowWidth = width * 1.3
		} else {
			windowWidth = width - 20
		}
		return windowWidth
	}

	const setStartingHeight = (windowKey) => {
		let windowHeight = height - 20
		if (windowKey === "Gitcoin" || windowKey === "VHackathon ETH Turin") {
			windowHeight = height * 1.8
		} else {
			windowHeight = height - 20
		}
		return windowHeight
	}

	return currentFloatingSpaces.map((windowKey) => (
		<Rnd
			key={windowKey}
			default={{
				x: setStartingCoordinatesX(windowKey),
				y: setStartingCoordinatesY(windowKey),
				width: setStartingWidth(windowKey),
				height: setStartingHeight(windowKey),
			}}
			style={{
				...spaceContainerStyle,
				backgroundColor: setFloatingwindowColor(windowKey),
				zIndex: zIndexes[windowKey] || 1,
			}}
			onDragStart={() => setWindowFocus(windowKey)}
			cancel={".nodrag"}>
			<SpaceContainer>
				<SpaceHeader>
					<SpaceHeaderElement onClick={() => closeFloatingSpace(windowKey)}>
						<Closer />
					</SpaceHeaderElement>
					<SpaceHeaderElement className="windowKey">
						{windowKey}
					</SpaceHeaderElement>
					<SpaceHeaderElement></SpaceHeaderElement>
				</SpaceHeader>
				<SpaceContent className="nodrag">
					{getFloatingRoomWindow(windowKey)}
				</SpaceContent>
			</SpaceContainer>
		</Rnd>
	))
}

export default FloatingRoomWindow
