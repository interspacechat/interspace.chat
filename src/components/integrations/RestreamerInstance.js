import React from "react"

function RestreamerInstance() {
	return (
		<iframe
			src="https://ingest.interspace.chat:8081/player.html"
			name="restreamer-player"
			width="800"
			height="450"
			scrolling="no"
			frameborder="0"
			webkitallowfullscreen="true"
			mozallowfullscreen="true"
			allowfullscreen="true"></iframe>
	)
}

export default RestreamerInstance
