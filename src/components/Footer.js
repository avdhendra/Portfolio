import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,

} from "react-icons/ai";
import{SiCodechef,SiLeetcode} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3> Developed by Avdhendra Singh</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AS</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/avdhendra"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
         
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/avdhendra-singh-6906791b1/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
             <li className="social-icons">
              <a
                href="https://leetcode.com/avdhendra/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>
            
             <li className="social-icons">
              <a
                href="https://www.codechef.com/users/avdhendrasingh"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiCodechef />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
