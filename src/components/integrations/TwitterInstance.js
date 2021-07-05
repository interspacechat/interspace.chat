import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import styled from '@emotion/styled'

const InstanceContainer = styled.div`
  width: 100%;
  height: 100%;
  div {
    overflow-y: scroll;
    height: 90%;
  }
  @media (max-width: 500px) {
    height: 100vh;
  }
`

const TwitterInstance = () => {
  return (
    <InstanceContainer>
      <TwitterTimelineEmbed
        sourceType='profile'
        screenName='ethcc'
        options={{
          tweetLimit: '10'
        }}
        theme='light'
        noHeader='true'
        noBorders='true'
        noFooter='true'
        style={{}}
      />
    </InstanceContainer>
  )
}

export default TwitterInstance
