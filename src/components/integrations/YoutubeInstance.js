import React, { useState, useEffect, useContext } from "react"
import { FloatingSpaceContext } from "../../contexts/FloatingSpaceContext"

function YoutubeInstance({ roomData }) {
	const [youtubeRoom, setYoutubeRoom] = useState("3oeI5GYC43A")
	const { currentFloatingSpaces } = useContext(FloatingSpaceContext)
	const space = currentFloatingSpaces

	useEffect(() => {
		if (space.indexOf("stop-covid-19") > -1) {
			setYoutubeRoom("3oeI5GYC43A")
		} else if (space.indexOf("conference-room") > -1) {
			setYoutubeRoom("3oeI5GYC43A")
		} else if (space.indexOf("mentor-ring") > -1) {
			setYoutubeRoom("3oeI5GYC43A")
		} else {
			setYoutubeRoom("3oeI5GYC43A")
		}
		return console.log(youtubeRoom)
	}, [space, youtubeRoom])
	return (
		<iframe
			title="Youtube Livestream"
			width="100%"
			height="100%"
			src={`https://www.youtube.com/embed/${youtubeRoom}`}
			frameBorder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	)
}

export default YoutubeInstance
