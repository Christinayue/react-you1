import React from "react";
import NavBar from "./NaviBar";
import { Container, Row, Col } from "react-bootstrap";
import "./ResumePage.css";
import jadie1 from "../picture/jadie1.png";
import nexpay from "../picture/Nexpay.png";
import jadie2 from "../picture/jadie2.png";
import link1 from "../picture/icon-test.svg";
import jiangren3 from "../picture/jiangren3.png";
import jiangren2 from "../picture/jiangren2.png";
import hotel2 from "../picture/hotel2.png";
import hotel3 from "../picture/hotel3.png";
class Resume extends React.Component {
    render() {
        return (
            <div>
                <div><NavBar /></div>
                <Row >
                    <Col xs={{ span: 12 }} md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }} className="paper">
                        <div className="Firstsection-resume">
                            <div className="title">
                                <h1>Resume</h1>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-title">
                                <h3>Experience</h3>
                            </div>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="item-title">
                                        Frontend Developer
                                    </div>
                                    <span className="item-period">
                                        Sept 2019 - March 2020
                                    </span>
                                    <span className="item-small">
                                        Nexpay
                                    </span>
                                    <a href="https://www.nexpay.com.au/" target="_blank" rel="noopener noreferrer" className="icon-link"><img src={link1} alt="github" />
                                    </a>
                                    <Row>
                                        <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                                            <a href="https://highlighter.ytml.com.au/" target="_blank" rel="noopener noreferrer" className="jaidePicture">
                                                <img src={jadie1} alt="jadie1" className="jadie1" />
                                            </a>
                                            <a href="https://highlighter.ytml.com.au/" target="_blank" rel="noopener noreferrer" className="jaidePicture">
                                                <img src={jadie2} alt="jadie1" className="jadie1" />
                                            </a>
                                        </Col>
                                        <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 4 }} style={{ marginTop: "20px" }}>
                                            <p>
                                                1. New website building with JavaScript, CSS, HTML, jQuery, and Node.js. React for frontend, node.js for backend, Azure for Authentification for login, database for account contacts.<br />
                                                2. Experience in the use of Photoshop, paint.net to design the layout of the web page and different animations. And then use the CSS technique to accomplish at least 20 character animations.<br />
                                                3. Input excel file and data into the Azure with notepad++ and SSMS which establish the whole database.<br />
                                                4. Assistance with back-end operations on Restful API design and implementation including the transfer of data with AJAX and JSON, and authentication and authorization .<br />
                                                5. Using Git and Bitbucket to collaborate with team members.<br />
                                                6. Making all the animations successfully operate on the frontend websites and help them responsive to different size screen.<br />
                                                7. Experience with build dependency management tools, including npm, webpack.<br />

                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="item-title">
                                        Fullstack Developer
                                    </div>
                                    <span className="item-period">
                                        Dec 2018 - Sept 2019
                                    </span>
                                    <span className="item-small">
                                        Jiangren
                                    </span>
                                    <a href="https://jrtalent.com.au/" target="_blank" rel="noopener noreferrer" className="icon-link"><img src={link1} alt="github" />
                                    </a>
                                    <Row>
                                        <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                                            <a href="https://jrtalent.com.au/" target="_blank" rel="noopener noreferrer" className="jaidePicture">
                                                <img src={jiangren2} alt="jiangren2" className="jadie1" />
                                            </a>
                                            <a href="https://jiangren.com.au/" target="_blank" rel="noopener noreferrer" className="jaidePicture">
                                                <img src={jiangren3} alt="jiangren1" className="jadie1" />
                                            </a>
                                        </Col>
                                        <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 4 }} style={{ marginTop: "50px" }}>
                                            <p>
                                                1. Worked on a variety of projects for different divisions using React, HTML, CSS, and JavaScript. (jiangren.com.au).<br />
                                                2. Worked with UI designers to translate Axure picture to the real-world applications.<br />
                                                3. Used Node.js and MongoDB as backend and database.<br />
                                                4. Mastered the GitKraken to communicate with other teammates and being familiar with version control (Git, Bitbucket, GitHub) to submit projects.<br />

                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="item-title">
                                        Graduate Project
                                    </div>
                                    <span className="item-period">
                                        June 2019 - Sept 2019
                                    </span>
                                    <span className="item-small">
                                        SlipperHotel
                                    </span>
                                    <a href="https://github.com/Christinayue/Final_project" target="_blank" rel="noopener noreferrer" className="icon-link"><img src={link1} alt="github" />
                                    </a>
                                    <Row>
                                        <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }}>
                                            <a href="https://github.com/Christinayue/Final_project/blob/master/report.pdf" target="_blank" rel="noopener noreferrer" className="jaidePicture">
                                                <img src={hotel2} alt="jiangren2" className="jadie1" />
                                            </a>
                                            <a href="https://github.com/Christinayue/Final_project/blob/master/report.pdf" target="_blank" rel="noopener noreferrer" className="jaidePicture">
                                                <img src={hotel3} alt="jiangren1" className="jadie1" />
                                            </a>
                                        </Col>
                                        <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 4 }} style={{ marginTop: "200px" }}>
                                            <p>
                                                1. Designed all the user interface with Axure.<br />
                                                2. Accomplished all the web pages and web responsive design. (React)<br />
                                                3. Integrated API to display the information on the websites.<br />

                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={{ span: 6, offset: 3 }}>
                        <p style={{ textAlign: "center", marginTop: "70px", color: "rgba(51, 42, 42, 0.7)" }}><span>Australia IT Professional Community</span> <span style={{ color: "rgba(34, 110, 148, 0.8)" }}>UNSW Master</span></p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Resume;
