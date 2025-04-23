"use client";
import { Row, Col, Container } from "react-bootstrap";
import Style from "./skill.module.css";
import Image from "next/image";
import { React } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function Skill() {
  return (
    <Container fluid id="skill" className={Style.main}>
      <Container>
        <div style={{ padding: "30px 0px" }}>
          <Row>
            <Col lg={12}>
              <h2 className={Style.head}>Skill</h2>
              <ScrollAnimation animateIn="fadeIn">
                <h1 className={Style.headOne}>My Skills</h1>
              </ScrollAnimation>
              <Row style={{ marginTop: "30px" }}>
                <Col lg={4} md={4}>
                  <div data-aos="fade-right" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/html.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>HTML5</h2>
                  </div>
                  <div data-aos="fade-right" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/css.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>CSS</h2>
                  </div>
                  <div data-aos="fade-right" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/scss.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>SCSS</h2>
                  </div>
                  <div data-aos="fade-right" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/javascript.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>JavaScript</h2>
                  </div>
                  <div data-aos="fade-right" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/react.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>React JS</h2>
                  </div>
                  <div data-aos="fade-right" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/next.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Next JS</h2>
                  </div>
                  <div data-aos="fade-right" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/jquery.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>jQuery</h2>
                  </div>
                  <div data-aos="fade-right" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/mysql.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>MySQL</h2>
                  </div>
                </Col>
                <Col lg={4} md={4}>
                  <div data-aos="fade-up" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/oracle.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Oracle</h2>
                  </div>
                  <div data-aos="fade-up" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/firebase.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Firebase</h2>
                  </div>
                  <div data-aos="fade-up" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/github.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>GitHub</h2>
                  </div>
                  <div data-aos="fade-up" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/git.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Git</h2>
                  </div>
                  <div data-aos="fade-up" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/psd.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>PSD to HTML</h2>
                  </div>
                  <div data-aos="fade-up" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/bootstrap.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Bootstrap</h2>
                  </div>
                  <div data-aos="fade-up" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/material.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Material UI</h2>
                  </div>
                  <div data-aos="fade-up" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/tailwindcss.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Tailwindcss</h2>
                  </div>
                </Col>
                <Col lg={4} md={4}>
                  <div data-aos="fade-left" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/ant.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Ant Design</h2>
                  </div>
                  <div data-aos="fade-left" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/xd.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Adobe XD</h2>
                  </div>
                  <div data-aos="fade-left" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/figma.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Figma</h2>
                  </div>
                  <div data-aos="fade-left" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/photoshop.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Adobe Photoshop</h2>
                  </div>
                  <div data-aos="fade-left" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/illustrator.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Adobe Illustrator</h2>
                  </div>
                  <div data-aos="fade-left" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/indesign.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Adobe Indesign</h2>
                  </div>
                  <div data-aos="fade-left" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/webflow.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Webflow</h2>
                  </div>
                  <div data-aos="fade-left" className={Style.icon}>
                    <Image
                      height={40}
                      width={40}
                      src="/skills/canva.png"
                      alt="SHAGOTO"
                    />
                    <h2 className={Style.name}>Canva</h2>
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
