const domain = 'breakout.interspace.chat'

export const JitsiInstances = ['main-room', 'lobby', 'mentor-ring']

export const RoomURLs = {
  'main-room': {
    jitsi: {
      domain,
      roomName: 'main-room'
    },
    mozillaHub: {
      externalUrl: 'https://hubs.mozilla.com/nKCuNrg/house-of-defiance'
    },
    youtube: {
      videoId: 'pLq2xC_wGMg',
      externalUrl: 'https://youtu.be/X5k8Cbr0d44'
    }
  },
  lobby: {
    jitsi: {
      domain,
      roomName: 'lobby'
    },
    mozillaHub: {
      externalUrl: 'https://hubs.mozilla.com/nKCuNrg/house-of-defiance'
    },
    youtube: {
      videoId: 'X5k8Cbr0d44',
      externalUrl: 'https://youtu.be/X5k8Cbr0d44'
    }
  },
  'mentor-ring': {
    jitsi: {
      domain,
      roomName: 'mentor-ring'
    },
    mozillaHub: {
      externalUrl: 'https://hubs.mozilla.com/nKCuNrg/house-of-defiance'
    },
    youtube: {
      videoId: 'X5k8Cbr0d44',
      externalUrl: 'https://youtu.be/X5k8Cbr0d44'
    }
  }
}

export const RoomNames = Object.keys(RoomURLs)
