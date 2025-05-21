import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function LoadingScreen() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <div className="solarmain">
            <div className="solar">
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
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
