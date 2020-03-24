import React from 'react';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';

const HelpStyled = styled.nav`
	text-align: left;
	.Collapsible__trigger {
		color: black;
		background-color: whitesmoke;
		cursor: pointer;
		padding: 0.2rem;
		:hover {
			background-color: #00ffbf;
		}
	}
	.Collapsible__contentOuter {
		max-width: 300px;
		:hover {
			.Collapsible__contentInner {
			}
		}
	}
	.Collapsible__contentInner {
		padding: 0.5rem;
		a {
			color: #00ffbf;
		}
	}
`;

const StyledListItem = styled.li`
	list-style-type: none;
	padding: 1rem;
`;

const Donate = () => {
	return (
		<HelpStyled>
			<Collapsible trigger='Donate'>
				<p>General usage:</p>
				<ul>
					<StyledListItem>
            Donate to interspace via <a href='https://gitcoin.co/grants/516/interspacechat'>Gitcoin Grants</a>{' '}
					</StyledListItem>
				</ul>
			</Collapsible>
		</HelpStyled>
	);
};

export default Help;
