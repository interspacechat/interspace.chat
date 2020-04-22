import React from "react";
import ReactHLS from "react-hls";
import styled from "@emotion/styled";

const LivepeerContainer = styled.div`
  display: inherit;
  max-width: 95%;
  max-height: auto;
  margin: 0 auto;
`;

function LivepeerInstance() {
  return (
    <LivepeerContainer>
      <ReactHLS
        width="100%"
        height="100%"
        url="https://video.interspace.chat/stream/ethturin.m3u8"
        allowfullscreen
      />
    </LivepeerContainer>
  );
}

export default LivepeerInstance;
