"use client";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Style from "./banner.module.css";
import Type from "./typewriter";

export default function Banner() {
  return (
    <Container fluid className={Style.main}>
      <Container>
        <div style={{ padding: "50px 0px" }}>
          <Row>
            <Col lg={12}>
              <Row>
                <Col lg={8}>
                  <div className={Style.left}>
                    <h1 className={Style.headOne}>I am Shagoto Bhakat</h1>
                    <h1 className={Style.headTwo}>
                      I am a <Type></Type>{" "}
                    </h1>
                    <p className={Style.body}>
                      Hello everyone, I love design and I am very much
                      interested in designing. I can assure the best of me and
                      also dedicate my work talent towards to achieve the goal.
                    </p>
                    <Link
                      href="https://www.linkedin.com/in/shagoto-bhakat-24b5bb219/"
                      target="_blank">
                      <div className={Style.icon}>
                        <Image
                          height={20}
                          width={20}
                          src="/linkedin.png"
                          alt="linkedin"
                        />
                      </div>
                    </Link>
                    <Link
                      href="https://www.behance.net/shagotobhakat"
                      target="_blank">
                      <div className={Style.icon}>
                        <Image
                          height={20}
                          width={20}
                          src="/behance.png"
                          alt="behance"
                        />
                      </div>
                    </Link>
                    <Link
                      href="https://dribbble.com/Shagoto007"
                      target="_blank">
                      <div className={Style.icon}>
                        <Image
                          height={20}
                          width={20}
                          src="/dribbble.png"
                          alt="dribbble"
                        />
                      </div>
                    </Link>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className={Style.card}>
                    <div className={Style.content}>
                      <div className={Style.back}>
                        <div className={Style.backContent}>
                          <Image
                            height={400}
                            width={330}
                            src="/shagoto 1.png"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </div>
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
