import React, { Fragment, useContext } from "react";
import styled from "styled-components";

import { BrowserView, MobileView } from "react-device-detect";

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";

import Room from "./Room";
import JitsiInstanceMobile from "./integrations/JistiInstanceMobile";

const Headline = styled.h6`
  color: whitesmoke;
  font-weight: 600;
  font-size: 1.3rem;
  padding: 1rem;

  a {
    font-weight: 100;
    color: black;
    background-color: #00ffbf;
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    background-color: black;
  }
`;

const SpaceSelector = styled.nav`
  padding-bottom: 1rem;
  width: 100%;

  @media (max-width: 600px) {
    background-color: black;
    padding: 0px;
    min-height: 10vh;
  }
`;

const SpaceInfo = styled.div`
  text-align: center;
  padding-top: 1rem;
  margin: 0 auto;
  font-size: 1rem;
  z-index: 100;
  div {
    color: violet;
  }
`;

const Descripton = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  background-color: black;
  z-index: 1;
  margin: 0px;
  font-size: 0.8rem;
  padding-bottom: 0.4rem;
  p {
    padding: 0.5rem;
    margin: 0px;
  }

  a {
    padding: 0px;
  }
`;

const CurrentSpace = styled.span`
  color: whitesmoke;
`;

const MobileContainer = styled.div`
  background: black;
  justify-content: center;
`;

const MobileSelectorContainer = styled.div`
  background: black;
  box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 0);
  justify-content: center;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 0.2rem;
`;

const Space = () => {
  const { currentFloatingSpaces, addFloatingSpace } = useContext(
    FloatingSpaceContext
  );

  let displayedJoinedSpaces;
  if (currentFloatingSpaces.length > 0) {
    if (currentFloatingSpaces.length > 2) {
      let nameCount = currentFloatingSpaces.length;
      displayedJoinedSpaces =
        currentFloatingSpaces.slice(0, nameCount - 2).join(", ") +
        ", " +
        currentFloatingSpaces.slice(nameCount - 2, nameCount).join(" & ");
    } else {
      displayedJoinedSpaces = currentFloatingSpaces.join(" & ");
    }
  }

  const openInNewTab = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <SpaceSelector>
      <BrowserView>
        <span>
          <SpaceInfo>
            {displayedJoinedSpaces ? (
              <Fragment>
                You're in the{" "}
                <CurrentSpace>{displayedJoinedSpaces}</CurrentSpace>!
              </Fragment>
            ) : (
              <Fragment>
                <div>Click on a portal</div>
              </Fragment>
            )}
          </SpaceInfo>
        </span>
        <div>
          <div className="m-grid-container">
            <svg
              className="frame"
              // xmlns:svg='http://www.w3.org/2000/svg'
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="1 1 36 40"
              id="svg"
            >
              <g id="shapes">
                <path
                  className="path-hex "
                  d="M 19,5 L 33,13 L 33,29 L 19,37 L 5,29 L 5,13 L 19,5 z "
                  id="octagon"
                />
                <path
                  className="path-hex "
                  d="M 19,5 L 5,29 L 33,29 L 19,5 z "
                  id="triange-up"
                />
                <path
                  className="path-hex "
                  d="M 5,13 L 19,37 L 33,13 L 5,13 z "
                  id="triange-down"
                />
                <path
                  className="path-hex inner"
                  d="M 19,13 L 12,17 L 12,25 L 19,29 L 26,25 L 26,17 L 19,13 z "
                  id="octagon-inner"
                />
                <path
                  className="path-hex "
                  d="M 12,25 L 19,5 L 26,25 L 12,25 z "
                  id="path2894"
                />
                <path
                  className="path-hex "
                  d="M 19,37 L 12,17 L 26,17 L 19,37 z "
                  id="path2896"
                />
                <path className="path-hex " d="M 5,13 L 33,29" id="line-6-3" />
                <path className="path-hex " d="M 5,29 L 33,13" id="line-6-2" />
                <path className="path-hex " d="M 19,5 L 19,37" id="line=-1-3" />
                <path
                  className="path-hex "
                  d="M 5,29 L 19,13 L 26,25 L 5,29 z "
                  id="path2904"
                />
                <path
                  className="path-hex "
                  d="M 33,29 L 19,13 L 12,25 L 33,29 z "
                  id="path2906"
                />
                <path
                  className="path-hex "
                  d="M 33,13 L 12,17 L 19,29 L 33,13 z "
                  id="path2908"
                />
                <path
                  className="path-hex "
                  d="M 5,13 L 19,29 L 26,17 L 5,13 z "
                  id="path2910"
                />
              </g>
            </svg>
            <div
              id="c0"
              className="circle row-1 c-center c-1 click-zone"
              onClick={() => openInNewTab("https://portal.interspace.chat")}
            >
              <span className="roomName">Launch new capsule</span>
            </div>
            <div
              id="c1"
              className="circle row-2 c-right click-zone"
              onClick={() => addFloatingSpace("capsule2")}
            >
              <span className="roomName">Capsule 2</span>
            </div>
            <div
              id="c2"
              className="circle row-6 c-right click-zone"
              onClick={() => openInNewTab("https://ethturin.com/")}
            >
              <span className="roomName">ETHTurin</span>
            </div>
            <div
              id="c3"
              className="circle row-7 c-center click-zone"
              onClick={() => openInNewTab("https://interspace.noncon.org")}
            >
              <span className="roomName">NonCon</span>
            </div>
            <div
              id="c4"
              className="circle row-6 c-left click-zone"
              onClick={() => openInNewTab("https://interspace.metagame.wtf")}
            >
              <span className="roomName">Metagame</span>
            </div>
            <div
              id="c5"
              className="circle row-2 c-left click-zone"
              onClick={() => addFloatingSpace("capsule1")}
            >
              <span className="roomName">Capsule 1</span>
            </div>

            <div
              id="c6"
              className="circle row-2 c-center click-zone"
              onClick={() => addFloatingSpace("discord chat")}
            >
              <span className="roomName">Discord chat</span>
            </div>

            <div id="c7" className="circle row-3 c-center-right"></div>

            <div id="c8" className="circle row-5 c-center-right"></div>
            <div
              id="c9"
              className="circle row-6 c-center click-zone"
              onClick={() => addFloatingSpace("loft.radio")}
            >
              <span className="roomName">loft.radio</span>
            </div>
            <div id="c10" className="circle row-5 c-center-left"></div>
            <div id="c11" className="circle row-3 c-center-left"></div>

            <div
              id="c12"
              className="circle row-4 c-center click-zone"
              onClick={() => addFloatingSpace("youtube")}
            >
              <span className="roomName">SpaceX launch</span>
            </div>
          </div>
          {/*
        <span className="mapInstructions">
          Click a location to join a conversation.
        </span>
        */}
        </div>
      </BrowserView>
      <MobileView>
        <MobileContainer>
          <Headline>
            Welcome to{" "}
            <a
              href="https://interspace.chat"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              interspace.chat
            </a>
          </Headline>
          <Descripton>
            <p> Click below to enter the videochat</p>

            <a href="https://breakout.interspace.chat">or open a new room</a>
          </Descripton>
          <MobileSelectorContainer>
            <Room roomName="capsule1" />
            <Room roomName="capsule2" />
          </MobileSelectorContainer>
          <JitsiInstanceMobile />
        </MobileContainer>
      </MobileView>
    </SpaceSelector>
  );
};

export default Space;
