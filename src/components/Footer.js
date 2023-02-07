import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MailChimpForm from "./MailChimpForm";
import logo from "../img/logo-no-background.png";
import navIcon1 from "../img/nav-icon1.svg";
import navIcon2 from "../img/github-icon.png";
import navIcon3 from "../img/twitter-icon.png";
import navIcon4 from "../img/showcase-icon-bg.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={logo} className="logo" alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
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
            <p>CopyRight 2023. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
