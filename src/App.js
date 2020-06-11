import React from "react"
import styled from "@emotion/styled"
import { BrowserView } from "react-device-detect"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "./contexts/ThemeContext"

import Space from "./components/Space"
import FloatingRoomWindow from "./components/FloatingRoomWindow"
import RootContextProvider from "./contexts/RootContext"
import SpaceContext from "./contexts/SpaceContext"

import Header from "./components/Header"

const Wrapper = styled("div")`
	color: ${(props) => props.theme.body};
	background-color: ${(props) => props.theme.background};
	max-width: 100vw;
	min-height: 100%;

	a {
		color: ${(props) => props.theme.highlight};
	}
`

function App() {
	return (
		<ThemeProvider>
			<Global
				styles={css`
					* {
						margin: 0px;
						padding: 0px;
						font-family: "Fira Code", monospace;
						font-weight: 300;
						font-size: 14px;
					}
					body {
						margin: 0px;
						padding: 0px;
						color: whitesmoke;
						background-color: #e6e7ec;
					}
					.hidden {
						opacity: 0;
						filter: url(#blur0);
					}
					.click-zone {
						transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

						& :hover {
							cursor: pointer;
							/** 
			filter: url(#turbulence);
			**/
							stroke: white;
							& .hidden {
								opacity: 1;
							}
						}
					}
					.click-zone-mobile {
						transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

						& :focus {
							filter: url(#turbulence);

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
			<Wrapper className="App">
				<RootContextProvider>
					<SpaceContext>
						<Space />
					</SpaceContext>
					<FloatingRoomWindow />
				</RootContextProvider>
			</Wrapper>
		</ThemeProvider>
	)
}

export default App
