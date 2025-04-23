"use client";
import { Row, Col, Container, Button } from "react-bootstrap";
import Image from "next/image";
import Style from "./about.module.css";

export default function About() {
  return (
    <Container fluid id="about" className={Style.main}>
      <Container>
        <div style={{ padding: "30px 0px" }}>
          <Row>
            <Col lg={12}>
              <Row>
                <Col lg={4}>
                  <div data-aos="zoom-in" className={Style.left}>
                    <Image
                      height={500}
                      width={330}
                      src="/shagoto 2.png"
                      alt="SHAGOTO"
                    />
                  </div>
                </Col>
                <Col lg={8}>
                  <div className={Style.right}>
                    <h2 className={Style.head}>About Me</h2>
                    <h1 className={Style.headOne}>I am Available for</h1>
                    <h1 className={Style.headTwo}>Frontend Web Design</h1>
                    <h1 className={Style.headTwo}>UI/UX Design</h1>
                    <h1 className={Style.headTwo}>Graphic Design</h1>
                    <h1 className={Style.headOne}>Projects</h1>
                    <p className={Style.body}>
                      I am Shagoto Bhakat. I am a frontend web designer with an
                      experience of 7 years. I design all kinds of website and
                      software with Reactjs and Nextjs. I also design with
                      Bootstrap, Material UI, Tailwindcss, Chakra-ui, Theme-ui,
                      Ant design and various kinds of Animations. I am currently
                      working as a Web & Graphics Designer on an IT company. If
                      you need any kind of graphics and web related service,
                      just give me a knock. I will be there for you and I am
                      always ready to assist you and eager to collaborate on
                      exciting projects!
                    </p>
                    <Button className={Style.cv}>
                      <a
                        className={Style.resume}
                        href="/Shagoto Bhakat CV resume.pdf"
                        download="Shagoto Bhakat CV resume.pdf">
                        Download Resume
                      </a>
                    </Button>
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
