"use client";
import { Row, Col, Container } from "react-bootstrap";
import Style from "./work.module.css";
import Image from "next/image";
import Link from "next/link";
import { React } from "react";
import Carousel from "react-grid-carousel";
import ScrollAnimation from "react-animate-on-scroll";

export default function Work() {
  return (
    <Container fluid id="work" className={Style.main}>
      <Container>
        <div style={{ padding: "30px 0px" }}>
          <Row>
            <Col lg={12}>
              <h2 className={Style.head}>Work</h2>
              <ScrollAnimation animateIn="fadeIn">
                <h1 className={Style.headOne}>My Works</h1>
              </ScrollAnimation>
              <Row style={{ marginTop: "50px" }}>
                <Col lg={12}>
                  <Carousel
                    cols={3}
                    rows={1}
                    gap={0}
                    autoplay={3000}
                    loop
                    responsiveLayout={[
                      {
                        breakpoint: 1200,
                        cols: 3,
                        autoplay: 2000,
                        loop: true,
                      },
                      {
                        breakpoint: 750,
                        cols: 1,
                        autoplay: 2000,
                        loop: true,
                      },
                      {
                        breakpoint: 575,
                        cols: 1,
                        autoplay: 2000,
                        loop: true,
                      },
                      {
                        breakpoint: 499,
                        cols: 1,
                        autoplay: 2000,
                        loop: true,
                      },
                    ]}>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>Footwear Website</h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, Next Js, Bootstrap, Tailwindcss
                          </p>
                          <Link
                            href="https://perfectfootwear.ltd/"
                            target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/perfect.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>
                            Printing & Packaging Website
                          </h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, Next Js, Bootstrap, Tailwindcss
                          </p>
                          <Link href="https://tashdid.com.bd/" target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/tashdid.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>
                            Shoe Trading Website
                          </h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, Next Js, Bootstrap, Tailwindcss
                          </p>
                          <Link
                            href="https://junainatrading.llc/"
                            target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/junainatrading.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>Landing Page</h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, jQuiry, Bootstrap
                          </p>
                          <Link href="/works/Bloom.jpg" target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/Bloom.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>Dashboard</h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, Next Js, Material UI
                          </p>
                          <Link href="/works/Dashboard.jpg" target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/Dashboard.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>Inventory Software</h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, Next Js, Material UI
                          </p>
                          <Link href="/works/Inventory.jpg" target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/Inventory.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>Landing Page</h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, jQuiry, Bootstrap
                          </p>
                          <Link href="/works/restaurant.jpg" target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/restaurant.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>Landing Page</h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, jQuiry, Bootstrap
                          </p>
                          <Link href="/works/Waxom.jpg" target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/Waxom.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>Landing Page</h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, jQuiry, Bootstrap
                          </p>
                          <Link href="/works/Hospital.jpg" target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/Hospital.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>Landing Page</h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, jQuiry, Bootstrap
                          </p>
                          <Link href="/works/Apps.jpg" target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/Apps.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>Landing Page</h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, jQuiry, Bootstrap
                          </p>
                          <Link href="/works/Beatles.jpg" target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/Beatles.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>Landing Page</h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, jQuiry, Bootstrap
                          </p>
                          <Link href="/works/Bootstrap.jpg" target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/Bootstrap.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>Landing Page</h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, jQuiry, Bootstrap
                          </p>
                          <Link href="/works/MYFOLIO.jpg" target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/MYFOLIO.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>Landing Page</h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, jQuiry, Bootstrap
                          </p>
                          <Link href="/works/Pax.jpg" target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/Pax.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className={Style.book}>
                        <div className={Style.text}>
                          <h2 className={Style.textOne}>Landing Page</h2>
                          <p className={Style.textTwo}>
                            HTML, CSS, jQuiry, Bootstrap
                          </p>
                          <Link href="/works/Agency.jpg" target="_blank">
                            <h2 className={Style.textThree}>View</h2>
                          </Link>
                        </div>
                        <div className={Style.cover}>
                          <Image
                            className={Style.cardPic}
                            height={450}
                            width={320}
                            src="/works/Agency.jpg"
                            alt="SHAGOTO"
                          />
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>
              <Row style={{ marginTop: "50px" }}>
                <Col lg={12}>
                  <Row style={{ marginTop: "20px" }}>
                    <Col data-aos="zoom-in-right" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic1}
                            height={450}
                            width={320}
                            src="/design/Fox.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Vector Design</p>
                          <p className={Style.title}>Adobe Illustrator</p>
                        </div>
                      </div>
                    </Col>
                    <Col data-aos="zoom-in" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic1}
                            height={450}
                            width={320}
                            src="/design/Fly.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Vector Design</p>
                          <p className={Style.title}>Adobe Illustrator</p>
                        </div>
                      </div>
                    </Col>
                    <Col data-aos="zoom-in-left" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic1}
                            height={450}
                            width={320}
                            src="/design/Rope.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Vector Design</p>
                          <p className={Style.title}>Adobe Illustrator</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginTop: "50px" }}>
                <Col lg={12}>
                  <Row style={{ marginTop: "20px" }}>
                    <Col data-aos="zoom-in-right" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic1}
                            height={450}
                            width={320}
                            src="/design/Jack.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Logo Design</p>
                          <p className={Style.title}>Adobe Illustrator</p>
                        </div>
                      </div>
                    </Col>
                    <Col data-aos="zoom-in" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic1}
                            height={450}
                            width={320}
                            src="/design/Jacksfit.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Logo Design</p>
                          <p className={Style.title}>Adobe Illustrator</p>
                        </div>
                      </div>
                    </Col>
                    <Col data-aos="zoom-in-left" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic1}
                            height={450}
                            width={320}
                            src="/design/Jacks.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Logo Design</p>
                          <p className={Style.title}>Adobe Illustrator</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginTop: "50px" }}>
                <Col lg={12}>
                  <Row style={{ marginTop: "20px" }}>
                    <Col data-aos="zoom-in-right" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic1}
                            height={450}
                            width={320}
                            src="/design/design1.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Vector Design</p>
                          <p className={Style.title}>Adobe Illustrator</p>
                        </div>
                      </div>
                    </Col>
                    <Col data-aos="zoom-in" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic1}
                            height={450}
                            width={320}
                            src="/design/design2.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Vector Design</p>
                          <p className={Style.title}>Adobe Illustrator</p>
                        </div>
                      </div>
                    </Col>
                    <Col data-aos="zoom-in-left" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic1}
                            height={450}
                            width={320}
                            src="/design/design3.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Vector Design</p>
                          <p className={Style.title}>Adobe Illustrator</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginTop: "50px" }}>
                <Col lg={12}>
                  <Row style={{ marginTop: "20px" }}>
                    <Col data-aos="zoom-in-right" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic1}
                            height={450}
                            width={320}
                            src="/design/Dangler1.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Dangler Design</p>
                          <p className={Style.title}>Adobe Illustrator</p>
                        </div>
                      </div>
                    </Col>
                    <Col data-aos="zoom-in" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic1}
                            height={450}
                            width={320}
                            src="/design/Dangler2.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Dangler Design</p>
                          <p className={Style.title}>Adobe Illustrator</p>
                        </div>
                      </div>
                    </Col>
                    <Col data-aos="zoom-in-left" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic1}
                            height={450}
                            width={320}
                            src="/design/Dangler3.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Dangler Design</p>
                          <p className={Style.title}>Adobe Illustrator</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginTop: "50px" }}>
                <Col lg={12}>
                  <Row style={{ marginTop: "20px" }}>
                    <Col data-aos="zoom-in-right" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic2}
                            height={450}
                            width={320}
                            src="/design/Brand1.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Product Branding Design</p>
                          <p className={Style.title}>Adobe Photoshop</p>
                        </div>
                      </div>
                    </Col>
                    <Col data-aos="zoom-in" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic2}
                            height={450}
                            width={320}
                            src="/design/Brand2.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Product Branding Design</p>
                          <p className={Style.title}>Adobe Photoshop</p>
                        </div>
                      </div>
                    </Col>
                    <Col data-aos="zoom-in-left" lg={4}>
                      <div className={Style.card}>
                        <b>
                          <Image
                            className={Style.cardPic2}
                            height={450}
                            width={320}
                            src="/design/Brand3.jpg"
                            alt="SHAGOTO"
                          />
                        </b>
                        <div className={Style.content}>
                          <p className={Style.title}>Product Branding Design</p>
                          <p className={Style.title}>Adobe Photoshop</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}
