"use client";
import { Row, Col, Container } from "react-bootstrap";
import Style from "./service.module.css";
import Image from "next/image";
import { React } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function Service() {
  return (
    <Container fluid id="service" className={Style.main}>
      <Container>
        <div style={{ padding: "30px 0px" }}>
          <Row>
            <Col lg={12}>
              <h2 className={Style.head}>Service</h2>
              <ScrollAnimation animateIn="fadeIn">
                <h1 className={Style.headOne}>My Services</h1>
              </ScrollAnimation>
              <Row style={{ marginTop: "30px" }}>
                <Col lg={4} md={6}>
                  <div data-aos="fade-right" className={Style.cardMain}>
                    <Image
                      className={Style.cardPic}
                      height={450}
                      width={320}
                      src="/web.jpg"
                      alt="SHAGOTO"
                    />
                    <div className={Style.cardText}>
                      <h2 className={Style.textOne}>Frontend Web Design</h2>
                      <p className={Style.textTwo}>
                        PSD to HTML, Landing Page, Website, Software Dashboard
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6}>
                  <div data-aos="fade-up" className={Style.cardMain}>
                    <Image
                      className={Style.cardPic}
                      height={450}
                      width={320}
                      src="/uiux.jpg"
                      alt="SHAGOTO"
                    />
                    <div className={Style.cardText}>
                      <h2 className={Style.textOne}>UI/UX</h2>
                      <p className={Style.textTwo}>
                        Landing Page, Website, Software Dashboard, Mobile App
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={3} className={Style.extraOne}></Col>
                <Col lg={4} md={6}>
                  <div data-aos="fade-left" className={Style.cardMain}>
                    <Image
                      className={Style.cardPic}
                      height={450}
                      width={320}
                      src="/graphic.jpg"
                      alt="SHAGOTO"
                    />
                    <div className={Style.cardText}>
                      <h2 className={Style.textOne}>Graphic Design</h2>
                      <p className={Style.textTwo}>
                        Branding, Logo, Banner, Poster, Visting Card, Letterhead
                        Pad, Catalog, Vector Art
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={3} className={Style.extraOne}></Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}
