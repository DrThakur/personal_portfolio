import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../img/color-sharp2.png";
import projImg1 from "../img/Disney-coverimage.png";
import projImg2 from "../img/youtube-coverimage.png";
import projImg3 from "../img/menuwebsite-coverimage.png";
import projImg4 from "../img/textutility-coverimage.png";
import projImg5 from "../img/matrimonial-coverimage.png";
import projImg6 from "../img/scrollablewebsite-coverimage.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Disney+ Clone",
      description: "React.js, Redux, Firebase",
      imgUrl: projImg1,
      gitHub: "https://github.com/DrThakur/disney_clone",
      demo: "https://disneyplus-clone-e2aff.web.app/login",
    },
    {
      title: "YouTube Clone",
      description: "React.js, RapidAPI, Firebase",
      imgUrl: projImg2,
      gitHub: "https://github.com/DrThakur/youtube_clone",
      demo: "https://clone-c0019.web.app/",
    },
    {
      title: "Restaurant Menu",
      description: "HTML ,CSS, JavaScript",
      imgUrl: projImg3,
      gitHub: "https://github.com/DrThakur/Restaurant-website",
      demo: "https://menuwebsite.netlify.app/",
    },
    {
      title: "TextUtitliy WebApp",
      description: "React.js, Bootstrap, HTML, Netlify",
      imgUrl: projImg4,
      gitHub: "https://github.com/DrThakur/TextUtils",
      demo: "https://myracttextutils.netlify.app/",
    },
    {
      title: "Gadbandhan.com- Matrimonial Website",
      description: "HTML, CSS, Bootstrap",
      imgUrl: projImg5,
      gitHub: "https://github.com/DrThakur/Gadhbandhan.com",
      demo: "https://gadhbandhan.netlify.app/",
    },
    {
      title: "Scrollable Website",
      description: "HTML, CSS, JavaScript",
      imgUrl: projImg6,
      gitHub: "https://github.com/DrThakur/scrollable-website",
      demo: "https://scrollablewebsite.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Have a look at my latest work below.</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container defaultActiveKey="first" id="projects-tabs">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first" title="Home">
                    Tab One
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" title="Profile">
                    Tab Two
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" title="Contact">
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Projects Coming Soon...</Tab.Pane>
                <Tab.Pane eventKey="third">Projects Coming Soon...</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background-img"
      />
    </section>
  );
};

export default Projects;
