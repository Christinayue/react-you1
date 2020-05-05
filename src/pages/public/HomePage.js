import React from "react";
import NavBar from "./NaviBar";
import "./HomePage.css";
import { Row, Col } from "react-bootstrap";
import Icon1 from "./github.svg";
import Icon2 from "./linkedin.svg";


class Home extends React.Component {
  render() {
    return (
      <div>

        <div><NavBar /></div>
        <Row >
          <Col xs={{ span: 12 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} className="paper">
            <Row className="Firstsection" >
              <Col xs={{ span: 6, offset: 3 }} md={{ span: 4, offset: 1 }} className="Photo">
              </Col>
              <Col xs={{ span: 6, offset: 3 }} md={{ span: 5, offset: 1 }} className="Title">
                <h1 className="Name">Yue Xiong</h1>
                <h6 className="Name">  Frontend Developer | Fullstack Developer</h6>
                <p className="totalIcon">
                  <a href="https://github.com/Christinayue" target="_blank" rel="noopener noreferrer" className="icon"><img src={Icon1} alt="github" /></a>
                  <a href="https://www.linkedin.com/in/yue-xiong-450172177/" target="_blank" rel="noopener noreferrer" className="icon"><img src={Icon2} alt="linkedin" /></a>
                </p>
              </Col>
            </Row>
            <Row className="introduce">
              <Col xs={{ span: 12 }} md={{ span: 6 }} >
                <h3 className="aboutme">About <span style={{ color: "rgba(34, 110, 148, 0.8)" }}>Me</span></h3>
                <p className="text">Excellent frontend developer who can also design the wonderful web pages according to the customer’s demand. I am a faster learner and learning new techniques quickly, as well as having good communication skills.
                In addition, I have a foundation in architectural design and a strong interest in designing and implementing a website.</p>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }} >
                <ul className="text1">
                  <li><span className="title1">Age:</span> <span className="value">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25</span></li>
                  <li><span className="title1">Residence:</span> <span className="value">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Australia</span></li>
                  <li><span className="title1">Address:</span> <span className="value">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kingsford</span></li>
                  <li><span className="title1">E-mail:</span> <span className="value" style={{ color: "rgba(34, 110, 148, 0.8)" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1564488470@qq.com</span></li>
                  <li><span className="title1">Phone:</span> <span className="value">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+0414037786</span></li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <p style={{ textAlign: "center", marginTop: "70px", color: "rgba(51, 42, 42, 0.7)" }}><span>Australia IT Professional Community</span> <span style={{ color: "rgba(34, 110, 148, 0.8)" }}>UNSW Master</span></p>
          </Col>
        </Row>
      </div >
    );
  }
}

export default Home;