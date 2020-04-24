import React from "react"

function RestreamerInstance() {
	return (
		<iframe
			src="http://161.35.72.191:8081/player.html"
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
