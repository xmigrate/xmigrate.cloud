import React, { Component } from "react";
import {
  form,
  Navbar,
  Container,
  Col,
  Row,
  Image,
  Card,
  Button,
} from "react-bootstrap";
import { FaGithub, FaYoutube, FaSpotify, FaSlackHash,FaLock,FaLinux,FaFingerprint,FaPaperPlane,FaMapMarkedAlt,FaLayerGroup,FaStepForward,FaSortAmountUp} from "react-icons/fa";
import { Link } from "react-router-dom";
import Twitter from "../../Components/TwitterComponent/Twitter";
import "./Landpage.scss";
//   import screen from './images/screen.png'

export default class Landpage extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
    };
  }
  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "notop") {
          this.setState({ status: "notop" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }
  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }
  render() {

    
    return (
      <div className="Landpage">
        {/* Top Navigation Bar  */}
        <Navbar
          style={{
            backgroundColor: this.state.status === "top" ? "" : "white",
          }}
          className="navbar navbar-expand-lg navbar-light sticky-top flex-md-nowrap pl-5 "
        >
          <div class="navbar-brand col-md-3 col-lg-2" href="#">
            <strong>x</strong>migrate
          </div>
          <button
            class="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="navbar-nav mr-auto pl-4">
            <li class="nav-item dropdown"></li>
          </ul>
          <form class="form-inline my-2 my-lg-0 pr-5 rightli">
            <ul class="navbar-nav">
              <li class="pr-5 "><a href="#Home">Home</a></li>
              <li class="pr-5 "><a href="#feature">Features</a></li>
              <li class="pr-5 "><a href="#Community">Community</a></li>
            </ul>
          </form>
        </Navbar>
        <Container id="Home" fluid>
          <Row className="justify-content-md-center">
            <Col md="auto" className="banner pt-5">
              <h1 className="banner-txt">
                An Open-source Cross Cloud Migration Tool
              </h1>
              <p className="lead">
                Xmigrate enables your IT team to plan and move your
                infrastructrure, network, subnet, VM's <br />
                across cloud and onprem to cloud easily!
              </p>
              <Link className="btn btn-primary btn-md mr-1 " to="/home">
                Try now
              </Link>
              <Link className="btn btn-outline-primary btn-md " to="/home">
                Get Demo
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="8" className="banner pt-5">
              <div className="boxshad">
                <Image src="Assets/images/screen.png" fluid />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto" className="banner pt-5">
              <h1 className="banner-txt2">
                Xmigrate now supports all 3 favourite public cloud providers
              </h1>
              <p class="lead">
                We are rigourosly testing and rolling out updates to our
                Xmigrate tool every week.
                <br />
                Xmigrate team invite everyone to give this tool a try and give
                feedback.
                <br />
                We are inviting each one of your contribution to build this tool
                to a stable version.
              </p>
            </Col>
          </Row>
          <Row  className="justify-content-md-center">
            <Col md="8" className="banner pt-5">
              <Row>
                <Col md="4">
                  <Image
                    src="Assets/images/Google_Cloud_Platform-Logo.wine.png"
                    fluid
                  />
                </Col>
                <Col md="4">
                  <Image
                    src="Assets/images/Amazon_Web_Services-Logo.wine.png"
                    fluid
                  />
                </Col>
                <Col md="4">
                  <Image
                    src="Assets/images/Microsoft_Azure-Logo.wine.png"
                    fluid
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row id="feature" className="HomeColo p-5 justify-content-md-center">
            <Col >
              <Row>
                <Col >
                  <Row>
                    <Col>
                      <h3 className="banner-txt2">
                        Cross-Migrate using Xmigrate <span role="img" aria-label="Happy">😀</span>
                      </h3>
                      <p class="lead">
                        The following are the features of Xmigrate tool now and
                        will be rolled out in future.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col class="featureClass" >
                    <div  style={{color: '#1da1f2'}} class="p-3">
                    <FaLock size={40} />
                    </div>
                      <h6 className="banner-txt3">Data Privacy</h6>
                      <p class="lead">
                        Xmigrate tool will be deployed in your environment and
                        no data is send to any third party for any purpose
                      </p>
                    </Col>
                    <Col class="featureClass">
                    <div  style={{color: '#1da1f2'}} class="p-3">
                    <FaLinux size={40} />
                    </div>
                      <h6 className="banner-txt3">Migration of Linux VM's</h6>
                      <p class="lead">
                        Xmigrate has the capability to migrate Linux VM's from
                        onprem to cloud or cloud to cloud
                      </p>
                    </Col>
                    <Col class="featureClass" >
                    <div  style={{color: '#1da1f2'}} class="p-3">
                    <FaPaperPlane size={40} />
                    </div>
                      <h6 className="banner-txt3">Agentless Migration</h6>
                      <p className="lead">
                        Xmigrate doesn't need any agents to be installed on the
                        VM's which needs to be migrated
                      </p>
                    </Col>
                    <Col class="featureClass" >
                    <div  style={{color: '#1da1f2'}} class="p-3">
                    <FaFingerprint size={40} />
                    </div>
                      <h6 className="banner-txt3">Environment Footprinting</h6>
                      <p class="lead">
                        Efficiently discover the environment of the hosts which
                        needs to be migrated
                      </p>
                    </Col>
                    </Row>
                    <Row>
                    <Col class="featureClass" >
                    <div  style={{color: '#1da1f2'}} class="p-3">
                    <FaMapMarkedAlt size={40} />
                    </div>
                      <h6 className="banner-txt3">Blueprint Dashboard</h6>
                      <p className="lead">
                        Design the Cloud environment easily from Blueprint
                        console with footprint data
                      </p>
                    </Col>
                    <Col class="featureClass" >
                    <div  style={{color: '#1da1f2'}} class="p-3">
                    <FaLayerGroup size={40} />
                    </div>
                      <h6 className="banner-txt3">
                        Manage multiple environments
                      </h6>
                      <p className="lead">
                        Create and manage multiple environments by creating
                        multiple projects in Xmigrate
                      </p>
                    </Col>
                    <Col class="featureClass" >
                    <div  style={{color: '#1da1f2'}} class="p-3">
                    <FaStepForward size={40} />
                    </div>
                      <h6 className="banner-txt3">VM to container migration</h6>
                      <p className="lead">Migrate your VM's to containers</p>
                    </Col>
                    <Col class="featureClass" >
                    <div  style={{color: '#1da1f2'}} class="p-3">
                    <FaSortAmountUp size={40} />
                    </div>
                      <h6 className="banner-txt3">Bandwidth Control</h6>
                      <p className="lead">Control bandwidth usage whilw you are migrating your servers</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>  
          </Row>

          <Twitter />
          {/* Community */}
          <div id="Community" className="HomeColo justify-content-md-center p-5">
            <Row>
              <Col md="12" className="banner pt-5">
                <h1 className="banner-txt2">
                  Learn more and get involved with community
                </h1>
                <p className="lead">
                  Join the conversation and help shape the evolution of
                  <br />
                  Xmigrate, Here are fews ways to get started
                </p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Card
                  style={{ width: "10rem" }}
                  className="shadow border-light px-3"
                >
                  <Card.Body className="iconcard">
                    <FaSlackHash size={50} />
                    Slack
                  </Card.Body>
                </Card>
                <a href="https://xmigrate.slack.com">
                <Button
                  className="mt-3 txtbtn"
                  variant="outline-primary"
                  size="md"
                  block
                >
                  JOIN SLACK
                </Button>
                </a>
              </Col>
              <Col md="auto">
                <Card
                  style={{ width: "10rem" }}
                  className="shadow border-light px-3"
                >
                  <Card.Body className="iconcard">
                    <FaYoutube size={50} />
                    Youtube
                  </Card.Body>
                </Card>
                <Button
                  className="mt-3 txtbtn"
                  variant="outline-primary"
                  size="md"
                  block
                >
                  VISIT YOUTUBE
                </Button>
              </Col>

              <Col md="auto">
                <Card
                  style={{ width: "10rem" }}
                  className="shadow border-light px-3"
                >
                  <Card.Body className="iconcard">
                    <FaGithub size={50} />
                    Github
                  </Card.Body>
                </Card>
                <a href="https://github.com/xmigrate/xmigrate.cloud">
                <Button
                  className="mt-3 txtbtn"
                  variant="outline-primary"
                  size="md"
                  block
                
                >
                VISIT GITHUB 
                </Button></a> 
              </Col>
              <Col md="auto">
                <Card
                  style={{ width: "10rem" }}
                  className="shadow border-light px-3"
                >
                  <Card.Body className="iconcard">
                    <FaSpotify size={50} />
                    Spotify
                  </Card.Body>
                </Card>
                <Button
                  className="mt-3 txtbtn"
                  variant="outline-primary"
                  size="md"
                  block
                >
                  VISIT SPOTIFY
                </Button>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto" className="banner pt-5">
                <p class="lead">
                  You can also join us every other week for our community
                  meeting call to dicuss <strong>xmigrate</strong>
                </p>
              </Col>
            </Row>
          </div>
          {/* Footer */}
          <Row className="justify-content-md-center">
            <Col md="8">
              <Row>
                <p className="footer-brand pt-3">
                  <strong>x</strong>migrate
                </p>
              </Row>
              <hr />
              <Row>
                <ul className="footer-list lead">
                  <li>Home</li>
                  <li>Features</li>
                  <li>Download</li>
                  <li>Community</li>
                </ul>
              </Row>  
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
