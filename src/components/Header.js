import React, { useContext } from "react"
import styled from "@emotion/styled"
import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext"

import { useTheme } from "../contexts/ThemeContext"
import Credits from "./Credits"
import EthturinSidebar from "./EthturinSidebar"

import LightOn from "../img/light-on.png"
import LightOff from "../img/light-off.png"

const HelpStyled = styled.button`
	display: block;
	padding: 0.2rem;
	white-space: nowrap;
	max-width: 50px;
	text-align: left;
	color: ${(props) => props.theme.body};
	background-color: ${(props) => props.theme.background};
	cursor: pointer;
	padding: 0.2rem;
	border: none;
	:hover {
		background-color: ${(props) => props.theme.highlight};
	}
`

const HeaderContainer = styled.div`
	position: fixed;
	width: 100%;
	top: 0px;
	left: 20px;
	display: grid;
	grid-gap: 0.2rem;
	grid-template-rows: repeat(2, auto);
	padding: 1rem;
`

const LogoSpan = styled.span`
	display: grid;
	grid-template-columns: auto auto;
`

const Logotext = styled.h2`
	margin: 0;
	font-size: 18px;
`

const Logolink = styled.a`
	width: 100px;
	text-decoration-line: none;
	padding-bottom: 2rem;
`

const LightSwitch = styled.button`
	position: fixed;
	top: 88vh;
	right: 2rem;
	justify-self: start;
	align-self: flex-start;
	border: 0px;
	background: unset;
	cursor: pointer;
	font-size: 26px;
`

const Header = () => {
	const { addFloatingSpace } = useContext(FloatingSpaceContext)
	const themeState = useTheme()
	return (
		<HeaderContainer>
			<LogoSpan>
				<Logolink href="/">
					<Logotext>ethturin.interspace.chat</Logotext>
				</Logolink>
				<LightSwitch onClick={() => themeState.toggle()}>
					{themeState.light ? (
						<img src={LightOn} alt="light-theme" />
					) : (
						<img src={LightOff} alt="dark-theme" />
					)}
				</LightSwitch>
			</LogoSpan>
			<HelpStyled onClick={() => addFloatingSpace("help")}>Help</HelpStyled>
			<Credits />
			<EthturinSidebar />
		</HeaderContainer>
	)
}

export default Header
