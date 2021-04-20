const white = '#FFFFFF'
const black = '#000000'
const gray = '#e6e7ec'
const green = '#78FFBE'
const purple = '#CFA6FF'
const yellow = '#FCE96A'
const blue = '#031695'

const themeLight = {
  background: black,
  body: gray,
  highlight: green
}

const themeDark = {
  background: black,
  body: gray,
  highlight: green
}

const theme = mode => (mode === 'light' ? themeLight : themeDark)

export default theme
