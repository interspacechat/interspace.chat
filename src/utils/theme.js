const white = '#FFFFFF'
const black = '#000000'
const gray = '#e6e7ec'
const green = '#78FFBE'
const purple = '#CFA6FF'
const yellow = '#dab544'
const blue = '#082d75'

const themeLight = {
  background: white,
  body: black,
  highlight: blue
}

const themeDark = {
  background: white,
  body: black,
  highlight: blue
}

const theme = mode => (mode === 'light' ? themeLight : themeDark)

export default theme
