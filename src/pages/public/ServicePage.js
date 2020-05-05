import React from "react";
import NavBar from "./NaviBar";
import { Row, Col } from "react-bootstrap";
import "./ResumePage.css";
import webicon from "../picture/webdesignnew.svg";
import photoicon from "../picture/data.svg";
import management from "../picture/creativity_icon.png";
import responsive from "../picture/responsive1.svg";
class Home extends React.Component {
    render() {
        return (
            <div>
                <div><NavBar /></div>
                <Row >
                    <Col xs={{ span: 12 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} className="paper">
                        <div className="Firstsection-resume">
                            <div className="title">
                                <h1>Service</h1>
                            </div>
                        </div>
                        <Row>
                            <Col xxs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 1, offset: 1 }}>
                                <img src={webicon} alt="icon" />
                            </Col>
                            <Col xxs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 1, offset: 2 }}>
                                <img src={photoicon} alt="icon" />
                            </Col>
                            <Col xxs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 1, offset: 2 }}>
                                <img src={management} alt="icon" style={{ width: 100, height: 100 }} />
                            </Col>
                            <Col xxs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 1, offset: 2 }}>
                                <img src={responsive} alt="icon" />
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