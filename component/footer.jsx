"use client";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Style from "./footer.module.css";
import React, { useEffect, useState } from "react";

export default function Footer() {
  return (
    <Container fluid id="contact" className={Style.main}>
      <Container>
        <div style={{ padding: "30px 0px" }}>
          <Row>
            <Col lg={12}>
              <Row>
                <Col lg={4}>
                  <div className={Style.icon}>
                    <Image
                      height={30}
                      width={30}
                      src="/phone.png"
                      alt="SHAGOTO"
                    />
                    <p className={Style.textTwo}>+880 1741148841</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className={Style.icon}>
                    <Image
                      height={30}
                      width={30}
                      src="/gmail.png"
                      alt="SHAGOTO"
                    />
                    <p className={Style.textTwo}>shagoto.bhakat@gmail.com</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className={Style.icon}>
                    <Image
                      height={30}
                      width={30}
                      src="/address.png"
                      alt="SHAGOTO"
                    />
                    <p className={Style.textTwo}>Dhaka, Bangladesh</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Row>
                <Col lg={4}>
                  <Link
                    href="https://www.linkedin.com/in/shagoto-bhakat-24b5bb219/"
                    target="_blank">
                    <div className={Style.icon}>
                      <Image
                        height={30}
                        width={30}
                        src="/linkedin.png"
                        alt="linkedin"
                      />
                      <p className={Style.textTwo}>Linkedin</p>
                    </div>
                  </Link>
                </Col>
                <Col lg={4}>
                  <Link
                    href="https://www.behance.net/shagotobhakat"
                    target="_blank">
                    <div className={Style.icon}>
                      <Image
                        height={30}
                        width={30}
                        src="/behance.png"
                        alt="behance"
                      />
                      <p className={Style.textTwo}>Behance</p>
                    </div>
                  </Link>
                </Col>
                <Col lg={4}>
                  <Link href="https://dribbble.com/Shagoto007" target="_blank">
                    <div className={Style.icon}>
                      <Image
                        height={30}
                        width={30}
                        src="/dribbble.png"
                        alt="dribbble"
                      />
                      <p className={Style.textTwo}>Dribbble</p>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}
