import React from "react"
import styled from "@emotion/styled"
import Collapsible from "react-collapsible"

const VrStyled = styled.nav`
  text-align: left;

  .Collapsible__trigger {
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.background};
    cursor: pointer;
    padding: 0.2rem;
    :hover {
      background-color: ${(props) => props.theme.highlight};
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
      color: ${(props) => props.theme.highlight};}
    }
  }
`

const StyledListItem = styled.li`
	list-style-type: none;
	padding: 1rem;
`

const Vr = () => {
	return (
		<VrStyled>
			<Collapsible trigger="Vr">
				<p>VR Space:</p>
				<ul>
					<StyledListItem>
						Visit an Italian Crypto Art Exhibition in Cryptovoxels:{" "}
						<a
							href="https://www.cryptovoxels.com/play?coords=NW@72W,76S"
							target="_blank"
							rel="noopener noreferrer">
							CR(Y)PTALY
						</a>{" "}
					</StyledListItem>
				</ul>
			</Collapsible>
		</VrStyled>
	)
}

export default Vr
