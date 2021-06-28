import React, { useState } from 'react'
import TimezonePicker from 'react-timezone'
import styled from '@emotion/styled'

const InstanceContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-template-rows: 1fr auto;
  li {
    font-family: 'Roboto Mono', monospace;
    background-color: #aaaaaa;
    color: '#310C4FDD';
  }
  input {
    border-radius: 1rem !important;
    background-color: #ffffffcc !important;
    font-family: 'Roboto Mono', monospace !important;
  }
  @media (max-width: 500px) {
    height: 100vh;
  }
`

function CalendarInstance () {
  const [timezone, changeTimezone] = useState('Europe/London')
  return (
    <InstanceContainer>
      <iframe
        title='Schedule'
        src={`https://calendar.google.com/calendar/embed?src=mndjqf9dhc3ski784qloec28e4%40group.calendar.google.com&ctz=${timezone}`}
        height='80%'
        width='100%'
        style={{
          border: '0px'
        }}
      />
      <p
        style={{
          textAlign: 'center',
          color: '#000',
          marginTop: '1rem',
          fontWeight: '500',
          paddingBottom: '0.5rem'
        }}
      >
        Please select your timezone
      </p>
      <TimezonePicker
        value={timezone}
        onChange={picktimezone => changeTimezone(picktimezone)}
        inputProps={{
          placeholder: 'Select your Timezone...',
          name: 'picktimezone'
        }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          margin: '0 auto',
          width: '70%',
          height: '300px',
          cursor: 'pointer',
          borderRadius: '1rem'
        }}
      />
    </InstanceContainer>
  )
}

export default CalendarInstance
