import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from './contexts/ThemeContext'

import WebFont from 'webfontloader'

import './styles/init.css'

WebFont.load({
  google: {
    families: ['Montserrat:100,300,400,500,600,700', 'sans-serif']
  }
})

ReactDOM.render(
  <ThemeProvider>
    <Global
      styles={css`
        * {
          margin: 0px;
          padding: 0px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: 14px;
        }
        body {
          margin: 0px;
          padding: 0px;
          color: whitesmoke;
          background-color: #1d1d1d;
        }
        .hidden {
          opacity: 0;
          filter: url(#blur0);
        }
        .inactive {
          filter: url(#saturate);
        }
        .click-zone {
          transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

          & :hover {
            transition: 4s cubic-bezier(0.2, 0.8, 0.2, 1);
            cursor: pointer;
            filter: url(#hueRotate);
          }

          & .hidden {
            opacity: 1;
          }
        }
        .click-zone-mobile {
          transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

          & :focus {
            transition: 4s cubic-bezier(0.2, 0.8, 0.2, 1);
            cursor: pointer;
            filter: hue-rotate(90deg);

            & .hidden {
              opacity: 1;
            }
          }
        }
        .click-link {
          transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
          & :hover {
            cursor: pointer;
            fill: #fce96a;
          }
        }
        .title :hover {
          fill: black;
        }
      `}
    />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
