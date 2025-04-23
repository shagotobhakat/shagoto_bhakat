"use client";
import { Row, Col, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";
import Style from "./header.module.css";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <Container fluid id="home" className={`main ${scrolled ? "new" : ""}`}>
      <Container>
        <Row>
          <Col lg={12}>
            {["xl"].map((expand) => (
              <Navbar
                expanded={expanded}
                onToggle={setExpanded}
                key={expand}
                expand={expand}>
                <Navbar.Brand href="/">
                  <div className={Style.logoPic}>
                    <Image
                      className={Style.logo}
                      height={90}
                      width={60}
                      src="/logo.png"
                      alt="SHAGOTO"
                    />
                  </div>
                  <div className={Style.logoText}>
                    <h1 className={Style.name}>Shagoto Bhakat</h1>
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end">
                  <Offcanvas.Header closeButton></Offcanvas.Header>
                  <Offcanvas.Body className={Style.navbar}>
                    <Nav>
                      <Link
                        onClick={closeMenu}
                        className={Style.nav}
                        href="#home">
                        Home
                      </Link>
                      <Link
                        onClick={closeMenu}
                        className={Style.nav}
                        href="#about">
                        About
                      </Link>
                      <Link
                        onClick={closeMenu}
                        className={Style.nav}
                        href="#skill">
                        Skill
                      </Link>
                      <Link
                        onClick={closeMenu}
                        className={Style.nav}
                        href="#service">
                        Service
                      </Link>
                      <Link
                        onClick={closeMenu}
                        className={Style.nav}
                        href="#work">
                        Work
                      </Link>
                      <Link
                        onClick={closeMenu}
                        className={Style.nav}
                        href="#experience">
                        Experience
                      </Link>
                      <Link
                        onClick={closeMenu}
                        className={Style.nav}
                        href="#contact">
                        Contact
                      </Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Navbar>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
