import React from "react";
import { Col, Row } from "react-bootstrap";
import{GrGraphQl} from "react-icons/gr";
import {FaAws} from "react-icons/fa";
import {FaDocker} from "react-icons/fa";
import {FaJenkins} from "react-icons/fa";
function Familiar() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
     <Col xs={4} md={2} className="tech-icons">
        <GrGraphQl />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
        <FaJenkins />
      </Col>
    </Row>
  );
}

export default Familiar;