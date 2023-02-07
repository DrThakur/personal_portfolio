import React from "react";
import { Col, Button } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, gitHub, demo }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="imgUrl" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <Button
              className="btn"
              variant="light"
              href={gitHub}
              target="_blank"
            >
              GitHub
            </Button>
            <Button className="btn" variant="light" href={demo} target="_blank">
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
