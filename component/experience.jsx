"use client";
import { Row, Col, Container } from "react-bootstrap";
import Style from "./experience.module.css";
import { React } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function Experience() {
  return (
    <Container fluid id="experience" className={Style.main}>
      <Container>
        <div style={{ padding: "30px 0px" }}>
          <Row>
            <Col lg={12}>
              <h2 className={Style.head}>Experience</h2>
              <ScrollAnimation animateIn="fadeIn">
                <h1 className={Style.headOne}>My Work Experience</h1>
              </ScrollAnimation>
              <Row style={{ marginTop: "20px" }}>
                <Col lg={12}>
                  <div
                    data-aos="flip-up"
                    data-aos-duration="700"
                    className={Style.cardMain}>
                    <Row>
                      <Col lg={4}>
                        <div className={Style.cardOne}>
                          <h2 className={Style.textOne}>
                            Frontend Web & Graphic Designer
                          </h2>
                          <p className={Style.textTwo}>
                            September 2020 - Present
                          </p>
                        </div>
                      </Col>
                      <Col lg={8}>
                        <div className={Style.cardTwo}>
                          <h2 className={Style.textThree}>
                            Company :{" "}
                            <span style={{ color: "#0788ff" }}>
                              PERFECT Footwear Ltd.
                            </span>
                          </h2>
                          <p className={Style.textFour}>
                            Website Design, Landing Page Design, Software
                            Design, UI/UX, Social Media Branding Design, Banner
                            Design, Logo Design, Product Catalog Design, Card
                            Design, Letterhead Pad Design, Poster Design,
                            Document Editing, Company Software & Server
                            Handling, IT Support.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={12}>
                  <div
                    data-aos="flip-up"
                    data-aos-duration="700"
                    className={Style.cardMain}>
                    <Row>
                      <Col lg={4}>
                        <div className={Style.cardOne}>
                          <h2 className={Style.textOne}>Web Designer</h2>
                          <p className={Style.textTwo}>
                            January 2019 - December 2019
                          </p>
                        </div>
                      </Col>
                      <Col lg={8}>
                        <div className={Style.cardTwo}>
                          <h2 className={Style.textThree}>
                            Company :{" "}
                            <span style={{ color: "#0788ff" }}>
                              Creative IT Institute
                            </span>
                          </h2>
                          <p className={Style.textFour}>
                            Responsive Web Design, PSD to HTML, Landing Page
                            Design, Website Design.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col lg={12}>
                  <div
                    data-aos="flip-up"
                    data-aos-duration="700"
                    className={Style.cardMain}>
                    <Row>
                      <Col lg={4}>
                        <div className={Style.cardOne}>
                          <h2 className={Style.textOne}>IT Intern</h2>
                          <p className={Style.textTwo}>
                            August 2018 - November 2018
                          </p>
                        </div>
                      </Col>
                      <Col lg={8}>
                        <div className={Style.cardTwo}>
                          <h2 className={Style.textThree}>
                            Company :{" "}
                            <span style={{ color: "#0788ff" }}>
                              Jamuna Bank Limited
                            </span>
                          </h2>
                          <p className={Style.textFour}>
                            IT Support, Software Handling, Computer Hardware.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}
