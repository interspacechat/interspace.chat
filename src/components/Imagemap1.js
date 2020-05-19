import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import Moebius from "../img/moebius.mp4";

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";
function SvgImagemap(props) {
  const [playing, toggleVideo] = useState(true);

  const playVideo = () => toggleVideo(true);
  const stopVideo = () => toggleVideo(false);

  const { addFloatingSpace, currentFloatingSpaces } = useContext(
    FloatingSpaceContext
  );
  const space = currentFloatingSpaces;

  const openInNewTab = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  const poap = () => {
    if (space.indexOf("claim poap token") > -1) {
      window.alert(
        "To claim your Solidity Summit POAP token, please write a private message to @franzihei on Gitter, including a short note on what you liked best about the event. You will then receive a link to redeem your POAP badge."
      );
    } else {
      window.alert(
        "To claim your Solidity Summit POAP token, please write a private message to @franzihei on Gitter, including a short note on what you liked best about the event. You will then receive a link to redeem your POAP badge."
      );
    }
  };

  return (
    <div onMouseEnter={stopVideo} onMouseLeave={playVideo}>
      {playing ? <div>playing</div> : <div>stop</div>}
    </div>
  );
}

export default SvgImagemap;
