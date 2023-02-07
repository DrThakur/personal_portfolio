import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
// import meter1 from "../img/meter1.svg";
// import meter2 from "../img/meter2.svg";
// import meter3 from "../img/meter3.svg";
import colorSharp from "../img/color-sharp.png";
import htmlLogo from "../img/html-image.png";
import cssLogo from "../img/css-image.png";
import jsLogo from "../img/js-image.png";
import bootstrapLogo from "../img/bootstrap-logo.png";
import reactLogo from "../img/react-image.png";
import reduxLogo from "../img/redux-image.png";
import firebaseLogo from "../img/firebase-image.png";
import githubLogo from "../img/github-image.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                iste error, fugit maiores eveniet minima ipsum quae ex. Eum,
                est?
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={htmlLogo} alt="Img1" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={cssLogo} alt="Img2" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={jsLogo} alt="Img3" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={bootstrapLogo} alt="Img4" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={reactLogo} alt="Img5" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={reduxLogo} alt="Img6" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={githubLogo} alt="Img7" />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <img src={firebaseLogo} alt="Img8" />
                  <h5>Firebase</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background-img"
      />
    </section>
  );
};

export default Skills;
