import React from "react";
import styled from "styled-components";

const Screen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  animation: fade 0.4s ease-in forwards;
  background: rgb(7, 35, 59);
  background: linear-gradient(
    90deg,
    rgb(2, 10, 17) 46%,
    rgba(5, 12, 22, 1) 100%
  );
`;

const Design = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function LoadingScreen() {
  return (
    <Screen>
      <Design>
        <div className="solar-system">
          <div className="sun">
            <h2 className="load">Loading...</h2>
            <div className="corona"></div>
          </div>

          <div className="orbit mercury-orbit">
            <div className="planet mercury"></div>
          </div>

          <div className="orbit venus-orbit">
            <div className="planet venus"></div>
          </div>

          <div className="orbit earth-orbit">
            <div className="planet earth">
              <div className="moon"></div>
            </div>

            <div className="iss">
              <div className="iss-panels"></div>
            </div>
          </div>

          <div className="orbit mars-orbit">
            <div className="planet mars"></div>
          </div>

          <div className="stars">
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
            <div className="star star-5"></div>
          </div>
        </div>
      </Design>
    </Screen>
  );
}
