import React from "react"
import ReactDOM, { hydrate, render } from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

import WebFont from "webfontloader"

import "./styles/init.css"

WebFont.load({
	google: {
		families: ["Fira+Code:300,400,500,700", "monospace"],
	},
})

const rootElement = document.getElementById("root")

rootElement.hasChildNodes()
	? hydrate(<App />, rootElement)
	: render(<App />, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
