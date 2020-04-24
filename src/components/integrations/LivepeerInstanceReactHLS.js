import React from "react"
import ReactHLS from "react-hls"
import styled from "@emotion/styled"

const LivepeerContainer = styled.div`
	display: block;
	margin: 0 auto;
`

function LivepeerInstance() {
	return (
		<LivepeerContainer>
			<ReactHLS
				width="100%"
				height="100%"
				url="https://video.interspace.chat/stream/ethturin.m3u8"
				allowfullscreen
				frameBorder="0"
			/>
		</LivepeerContainer>
	)
}

export default LivepeerInstance
