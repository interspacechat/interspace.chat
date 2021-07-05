import React, { useState, useEffect, useContext } from 'react'
import { FloatingSpaceContext } from '../../contexts/FloatingSpaceContext'
import WidgetBot from '@widgetbot/react-embed'

function ChatInstance () {
  const [discordRoom, setDiscordRoom] = useState('692409996083855501')
  const { currentFloatingSpaces } = useContext(FloatingSpaceContext)
  const space = currentFloatingSpaces

  useEffect(() => {
    {
      window.StatusWidget(
        'eth-cc',
        document.getElementById('status-chat-widget')
      )
    }
  }, [])

  return (
    <div
      style={{
        width: '100%',
        height: '95%',
        position: 'relative',
        overflow: 'hidden',
        margin: '0 auto'
      }}
      id='status-chat-widget'
    ></div>
  )
}

export default ChatInstance
