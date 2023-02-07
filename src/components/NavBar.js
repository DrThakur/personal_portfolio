import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../img/logo-no-background.png";
import navIcon1 from "../img/nav-icon1.svg";
import navIcon2 from "../img/github-icon.png";
import navIcon3 from "../img/twitter-icon.png";
import navIcon4 from "../img/showcase-icon-bg.png";
const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/drankitkumarthakur/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={navIcon1} alt="linkedIn-icon" />
              </a>
              <a
                href="https://github.com/DrThakur"
                rel="noreferrer"
                target="_blank"
              >
                <img src={navIcon2} alt="github-icon" />
              </a>
              <a
                href="https://twitter.com/DrthakurG"
                rel="noreferrer"
                target="_blank"
              >
                <img src={navIcon3} alt="twitter-icon" />
              </a>
              <a
                href="https://www.showwcase.com/drthakur"
                rel="noreferrer"
                target="_blank"
              >
                <img src={navIcon4} alt="showcase-icon" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
