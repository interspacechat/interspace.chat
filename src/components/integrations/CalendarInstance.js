import React, { useState } from 'react'
import TimezonePicker from 'react-timezone'
import styled from '@emotion/styled'

const InstanceContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-template-rows: 1fr auto;
  li {
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    background-color: #aaaaaa;
    color: '#310C4FDD';
  }
  input {
    border-radius: 1rem !important;
    background-color: #ffffffcc !important;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif !important;
  }
`

function CalendarInstance () {
  const [timezone, changeTimezone] = useState('Europe/London')
  return (
    <InstanceContainer>
      <iframe
        title='Schedule'
        src={`https://calendar.google.com/calendar/embed?src=mndjqf9dhc3ski784qloec28e4%40group.calendar.google.com&ctz=${timezone}`}
        style={{
          height: '80%',
          width: '100%',
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
          cursor: 'pointer',
          borderRadius: '1rem'
        }}
      />
    </InstanceContainer>
  )
}

export default CalendarInstance
