import React, { Component } from "react";
import {
  Form,
  Navbar,
  Container,
  Col,
  Row,
  Image,
  Card,
  Button,
} from "react-bootstrap";
import {
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaSlackHash,
  FaLock,
  FaLinux,
  FaFingerprint,
  FaPaperPlane,
  FaMapMarkedAlt,
  FaLayerGroup,
  FaStepForward,
  FaSortAmountUp,
  FaMedium
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Landpage.scss";

export default class Landpage extends Component {
  render() {
    return (
      <div className="Landpage">
        {/* Top Navigation Bar  */}
        <Navbar expand="lg" className="sticky-top NavCl">
          <Navbar.Brand className="navbar-brand col-xs-2 ml-5 mt-3">
            <img
              src="Assets/images/logoSm.png"
              width="150"
              height="40"
              className="d-inline-block align-top"
              alt="xmigrate logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end "
            id="basic-navbar-nav"
          >
            <Form inline id="basic-nav-dropdown">
              <ul className="navbar-nav">
                <li className="mr-5 ">
                  <a href="https://medium.com/xmigrateoss" target="_blank">Documentation</a>
                </li>
                <li className="mr-5 ">
                  <a href="https://medium.com/xmigrateoss" target="_blank">Blog</a>
                </li>
              </ul>
              <a href="https://github.com/iamvishnuks/xmigrate/discussions" target="_blank">
                <Button variant="secondary Gitbtn mr-5 ">
                  Get Started on Github <FaGithub size={20} />
                </Button>
              </a>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Container id="Home" fluid>
          <Row className="justify-content-md-center">
            <Col md="auto" className="banner pt-5">
              <h1 className="banner-txt">
                An Open-source Cross Cloud Migration Tool
              </h1>
              <p className="lead">
                Xmigrate(pronounced as cross-migrate) is an opensource tool for
                migrating your VM's <br />
                from anywhere to cloud and cloud to anywhere seemlesly.
              </p>
              <Link className="btn btn-primary btn-md mr-1 px-4" to="/home">
                Start Migrate
              </Link>
              <Link className="btn btn-outline-primary btn-md px-4" to="/home">
                View Demo
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="8" className="banner pt-5">
              <div className="boxshad">
                <Image src="Assets/images/Screen2.gif" fluid />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto" className="banner pt-5">
              <h1 className="banner-txt2">
                Xmigrate will soon supports all 3 major public cloud providers
              </h1>
              <p className="lead">
                We are rigourosly testing and rolling out updates to our
                Xmigrate tool every week. Xmigrate team invite everyone to
                <br /> give this tool a try and give feedback. We are inviting
                each one of your contribution to build this tool to a stable
                version.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-4">
            <Col md="6" className="banner pb-3 mb-5">
              <Row>
                <Col md="4">
                  <Image
                    src="Assets/images/Cloud.png"
                    fluid
                  />
                </Col>
                <Col md="4">
                  <Image
                    src="Assets/images/aws.png"
                    fluid
                  />
                </Col>
                <Col md="4">
                  <Image
                    src="Assets/images/Azure.png"
                    fluid
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row id="feature" className="HomeColo p-5 justify-content-md-center">
            <Col>
             
                  <Row className="justify-content-md-center">
                    <Col md="auto" className="banner pt-5">
                      <h3 className="banner-txt2">
                        Cross-Migrate using Xmigrate{" "}
                        <span role="img" aria-label="Happy">
                          😀
                        </span>
                      </h3>
                      <p className="lead">
                        The following are the features and advantages of
                        Xmigrate tool now and will be rolled out in future.
                      </p>
                    </Col>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Card
                      style={{ width: "18rem" }}
                      className=" border-light p-3 m-3"
                    >
                      <Card.Body className="iconcard">
                        <div  className="clicon p-3">
                          <FaLock size={50} />
                        </div>
                        <Card.Title className="CardTit">Data Privacy</Card.Title>
                        <Card.Text className="lead">
                          Xmigrate tool will be deployed in your environment and
                          no data is send to any third party for any purpose
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card
                      style={{ width: "18rem" }}
                      className=" border-light p-3 m-3"
                    >
                      <Card.Body className="iconcard">
                        <div  className=" clicon p-3">
                          <FaLinux size={50} />
                        </div>
                        <Card.Title className="CardTit">Migration of Linux VM's</Card.Title>
                        <Card.Text className="lead">
                          Xmigrate has the capability to migrate Linux VM's from
                          onprem to cloud or cloud to cloud
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    <Card
                      style={{ width: "18rem" }}
                      className=" border-light p-3 m-3"
                    >
                      <Card.Body className="iconcard">
                        <div  className="clicon p-3">
                          <FaPaperPlane size={50} />
                        </div>
                        <Card.Title className="CardTit">Agentless Migration</Card.Title>
                        <Card.Text className="lead">
                          Xmigrate doesn't need any agents to be installed on
                          the VM's which needs to be migrated
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    <Card
                      style={{ width: "18rem" }}
                      className=" border-light p-3 m-3"
                    >
                      <Card.Body className="iconcard">
                        <div  className="clicon p-3">
                          <FaFingerprint size={50} />
                        </div>
                        <Card.Title className="CardTit">Environment Footprinting</Card.Title>
                        <Card.Text className="lead" >
                          Efficiently discover the environment of the hosts
                          which needs to be migrated
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
                  <Row className="justify-content-md-center">
                    <Card
                      style={{ width: "18rem" }}
                      className=" border-light p-3 m-3"
                    >
                      <Card.Body className="iconcard">
                        <div  className="clicon p-3">
                          <FaMapMarkedAlt size={50} />
                        </div>
                        <Card.Title className="CardTit">Blueprint Dashboard</Card.Title>
                        <Card.Text className="lead">
                          Design the Cloud environment easily from Blueprint
                          console with footprint data
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    <Card
                      style={{ width: "18rem" }}
                      className=" border-light p-3 m-3"
                    >
                      <Card.Body className="iconcard">
                        <div className="clicon p-3">
                          <FaLayerGroup size={50} />
                        </div>
                        <Card.Title className="CardTit">Manage environments</Card.Title>
                        <Card.Text className="lead">
                          Create and manage multiple environments by creating
                          multiple projects in Xmigrate
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    <Card
                      style={{ width: "18rem" }}
                      className=" border-light p-3 m-3"
                    >
                      <Card.Body className="iconcard">
                        <div  className="clicon p-3">
                          <FaStepForward size={50} />
                        </div>
                        <Card.Title className="CardTit">VM to container migration</Card.Title>
                        <Card.Text className="lead">Manage your VM's to containers</Card.Text>
                      </Card.Body>
                    </Card>

                    <Card
                      style={{ width: "18rem" }}
                      className=" border-light p-3 m-3"
                    >
                      <Card.Body className="iconcard">
                        <div  className="clicon p-3">
                          <FaSortAmountUp size={50} />
                        </div>
                        <Card.Title className="CardTit">Bandwidth Control</Card.Title>
                        <Card.Text className="lead">
                          Control bandwidth usage while you are migrating your
                          servers
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Row>
             
            </Col>
          </Row>

          {/* Community */}
          <div id="Community" className="justify-content-md-center p-5">
            <Row>
              <Col md="12" className="banner pt-5">
                <h1 className="banner-txt2">
                  Learn more and get involved with the community
                </h1>
                <p className="lead">
                  Join the conversation and help shape the evolution of
                  Xmigrate, Here are fews ways to get started
                </p>
              </Col>
            </Row>
            <Row className="justify-content-ls-center pt-4 pb-3 ">
              <Col md={{ span: 4, offset: 4 }}>
                <Row>
              <Col xs="3" className=" iconCommunity ">
                <a href="https://twitter.com/xmigrateOSS" target="_blank">
                  <FaTwitter size={60} />
                </a>
              </Col>
              <Col xs="3" className=" iconCommunity">
                <a
                  href="https://www.youtube.com/channel/UCJc96kOu0tNhDtp7FT91ENg"
                  target="_blank"
                >
                  <FaYoutube size={60} />
                </a>
              </Col>
              <Col xs="3" className=" iconCommunity">
                <a
                  href="https://github.com/iamvishnuks/xmigrate/discussions"
                  target="_blank"
                >
                  <FaGithub size={60} />
                </a>
              </Col>
              <Col xs="3" className="iconCommunity">
                <a
                  href="https://medium.com/xmigrateoss"
                  target="_blank"
                >
                  <FaMedium size={60} />
                </a>
              </Col>
              </Row>
              </Col>
            </Row>
            <Row >
              <Col md="12" className="banner pt-3">
                <p className="lead">
                  You can also join us every other week for our community
                  meeting call to dicuss <strong>xmigrate</strong>
                </p>
              </Col>
            </Row>
          </div>
          {/* Footer */}
          <Row className="justify-content-md-center footer">
            <Col md="8">
              <Row>
                <Col xs={{ order: "first" }}>
                  <ul className="footer-list lead pt-3">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Community</li>
                  </ul>
                </Col>
                <Col >
                  <p className="footer-brand pt-3">
                    <img
                      src="Assets/images/logoSm.png"
                      width="150"
                      height="40"
                      className="d-inline-block align-top"
                      alt="Xmigrate logo"
                    />
                  </p>
                </Col>
                <Col xs={{ order: "last" }} >
                  <p className="pt-3 lead"> &#169; 2020@xmigrate.cloud</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
