import React, { useState, useEffect, useContext } from "react";
import { FloatingSpaceContext } from "../../contexts/FloatingSpaceContext";
import WidgetBot from '@widgetbot/react-embed'

function ChatInstance() {
  const [discordRoom, setDiscordRoom] = useState("692409996083855501");
  const { currentFloatingSpaces } = useContext(FloatingSpaceContext);
  const space = currentFloatingSpaces;

  useEffect(() => {
    if (space.indexOf("main-room") > -1) {
      setDiscordRoom("692423172020240444");
    } else if (space.indexOf("lobby") > -1) {
      setDiscordRoom("692423341046366208");
    } else if (space.indexOf("mentor-ring") > -1) {
      setDiscordRoom("692423431777681488");
    } else if (space.indexOf("claim poap token") > -1) {
      setDiscordRoom("693135339249991701");
    } else {
      setDiscordRoom("692409996083855501");
    }
    return console.log(discordRoom);
  }, [space, discordRoom]);

  return (
    <div style={{backgroundColor: '#1D1D1D', color: '#fff', width: '100%', height: '95%', position: 'relative', overflowY: 'auto'}}>
    <WidgetBot
    server="729675474665603133"
    channel="823383734664691712"
    width="100%"
    height="100%"
  />
  </div>
  );
}

export default ChatInstance;
