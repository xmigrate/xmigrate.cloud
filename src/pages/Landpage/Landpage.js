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
  FaWindows,
  FaMedium
} from "react-icons/fa";
import {
  MdMoving
} from "react-icons/md"
import { Link } from "react-router-dom";
import "./Landpage.scss";

export default class Landpage extends Component {
  render() {
    return (
      <div className="Landpage">
        {/* Top Navigation Bar  */}
        <Navbar expand="lg" className="sticky-top NavCl">
          <Navbar.Brand className="navbar-brand col-xs-2">
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
            <Form id="basic-nav-dropdown" className="d-flex">
              <ul className="navbar-nav">
                <li className="limargin mt-1">
                  <a href="https://docs.xmigrate.cloud/en/latest/" target="_blank">Documentation</a>
                </li>
                <li className="limargin mt-1">
                  <a href="https://medium.com/xmigrateoss" target="_blank">Blog</a>
                </li>
              </ul>
              <a href="https://github.com/iamvishnuks/xmigrate/discussions" target="_blank">
                <Button variant="secondary Gitbtn limargin ">
                  Get Started on Github <span className="ml-2"><FaGithub size={22} /></span>
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
                from anywhere to cloud and cloud to anywhere seamlessly.
              </p>
              <a
                href="https://github.com/iamvishnuks/xmigrate"
                target="_blank"
              >
                <div className="btn bt-pr1 btn-outline-primary btn-md btn-main mr-1 px-4" >

                  Start Migrate
                </div>
              </a>
              <a
                href="https://youtu.be/FISJaoUIiOM"
                target="_blank"
              >
                <div className="btn bt-pr2 btn-outline-primary btn-md px-4" >

                  View Demo

                </div>
              </a>
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
            <Col md="auto" className="banner text-mid-1">
              <h1 className="banner-txt2">
                Xmigrate supports all 3 major public cloud providers
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
          <Row className="justify-content-md-center mt-4 icons-all">
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
                  className="cardFeatures p-3 m-3 "
                >
                  <Card.Body className="iconcard">
                    <div className="clicon p-3">
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
                  className="cardFeatures p-3 m-3 "
                >
                  <Card.Body className="iconcard">
                    <div className=" clicon p-3">
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
                  className="cardFeatures p-3 m-3 "
                >
                  <Card.Body className="iconcard">
                    <div className="clicon p-3">
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
                  className="cardFeatures p-3 m-3 "
                >
                  <Card.Body className="iconcard">
                    <div className="clicon p-3">
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
                  className="cardFeatures p-3 m-3 "
                >
                  <Card.Body className="iconcard">
                    <div className="clicon p-3">
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
                  className="cardFeatures p-3 m-3 "
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
                  className=" p-3 m-3 premium-change "
                >
                  <Row>
                    <Col className="premiumcol" md={{ span: 6, offset: 6 }}> <Button className="btn-premium" variant="primary" size="sm">Premium</Button></Col>
                  </Row>
                  <Card.Body className="iconcard premiumCardBody">
                    <div className="clicon p-2">

                      <Row>
                        <Col md={{ span: 6, offset: 3 }}><FaStepForward size={50} /></Col>
                      </Row>

                    </div>
                    <Card.Title className="CardTit">Interrupt Handling</Card.Title>
                    <Card.Text className="lead">Capability to resume your failed migration from last successful checkpoints</Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "18rem" }}
                  className="p-3 m-3 premium-change "
                >
                  <Row>
                    <Col className="premiumcol" md={{ span: 6, offset: 6 }} > <Button className="btn-premium" variant="primary" size="sm">Premium</Button></Col>
                  </Row>
                  <Card.Body className="iconcard premiumCardBody">
                    <div className="clicon p-2">

                      <Row>
                        <Col md={{ span: 6, offset: 3 }}><FaSortAmountUp size={50} /></Col>
                      </Row>


                    </div>
                    <Card.Title className="CardTit">Bandwidth Control</Card.Title>
                    <Card.Text className="lead">
                      Control bandwidth usage while you are migrating your
                      servers
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              {/* {upcoming feature cards added */}
              <Row className="justify-content-center p-2">
                <Card
                  style={{ width: "18rem" }}
                  className=" p-3 m-3 comingsoon-change "
                >
                  <Row>
                    <Col className="premiumcol" md={{ span: 6, offset: 6 }}> <Button className="btn-premium" variant="primary" size="sm">Coming soon</Button></Col>
                  </Row>
                  <Card.Body className="iconcard premiumCardBody">
                    <div className="clicon p-2">

                      <Row>
                        <Col md={{ span: 6, offset: 3 }}><FaWindows size={50} /></Col>
                      </Row>

                    </div>
                    <Card.Title className="CardTit">Windows migration</Card.Title>
                    <Card.Text className="lead">Migration of IIS windows servers will be supported in xmigrate soon</Card.Text>
                  </Card.Body>
                </Card>
                {/* ----- */}
                <Card
                  style={{ width: "18rem" }}
                  className="p-3 m-3 comingsoon-change "
                >
                  <Row>
                    <Col className="premiumcol" md={{ span: 6, offset: 6 }} > <Button className="btn-premium" variant="primary" size="sm">Coming soon</Button></Col>
                  </Row>
                  <Card.Body className="iconcard premiumCardBody">
                    <div className="clicon p-2">

                      <Row>
                        <Col md={{ span: 6, offset: 3 }}><MdMoving size={50} /></Col>
                      </Row>


                    </div>
                    <Card.Title className="CardTit">Live migration</Card.Title>
                    <Card.Text className="lead">
                      Be DR ready with xmigrates cutting edge live migration tech
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="6">
              <div class="form-head">
                <form class="form" action="" netlify>
                  <p class="form-title">Sign in up for Beta</p>
                  <h3 class="form-sub-title">start your 30-day free trial</h3>

                  <div class="input-container">
                    <label class="form-label">Full name</label>
                    <input class="form-input" type="text" placeholder="Enter Your Full Name" />
                    <span>
                    </span>
                  </div>
                  <div class="input-container">
                    <label class="form-label">Email</label>
                    <input class="form-input" type="email" placeholder="Enter Your Email" />
                    <span>
                    </span>
                  </div>
                  <div class="input-container">
                    <label class="form-label">Organization</label>
                    <input class="form-input" type="text" placeholder="Enter Your Organization" />
                  </div>
                  <div class="input-container">
                    <button type="submit" class="submit">
                      Get started
                    </button>
                  </div>
                </form>

              </div>
            </Col>
            <Col md="6">
              <div class="pattern" >
                <svg  viewBox="0 0 697 486" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_0_3)">
                    <path d="M30.2104 220.379L2.84238 210.415" stroke="#0082FF" stroke-width="2" />
                    <path d="M29.1436 158.205L3.92117 143.639" stroke="#0082FF" stroke-width="2" />
                    <path d="M28.0897 95.6754L5.77918 76.9491" stroke="#0082FF" stroke-width="2" />
                    <path d="M26.1465 32.7027L7.42578 10.3856" stroke="#0082FF" stroke-width="2" />
                    <path d="M30.8942 467.629L3.52625 477.593" stroke="#0082FF" stroke-width="2" />
                    <path d="M31.637 405.802L2.95512 410.861" stroke="#0082FF" stroke-width="2" />
                    <path d="M31.4634 344.064H2.33905" stroke="#0082FF" stroke-width="2" />
                    <path d="M31.2898 282.296L2.60792 277.237" stroke="#0082FF" stroke-width="2" />
                    <path d="M81.1789 285.924L53.811 275.96" stroke="#0082FF" stroke-width="2" />
                    <path d="M80.1098 223.758L54.8874 209.192" stroke="#0082FF" stroke-width="2" />
                    <path d="M79.0582 161.229L56.7477 142.503" stroke="#0082FF" stroke-width="2" />
                    <path d="M77.1151 98.2475L58.3943 75.9304" stroke="#0082FF" stroke-width="2" />
                    <path d="M74.284 34.7435L59.7218 9.51365" stroke="#0082FF" stroke-width="2" />
                    <path d="M82.6032 471.356L53.9213 476.415" stroke="#0082FF" stroke-width="2" />
                    <path d="M82.4296 409.618H53.3053" stroke="#0082FF" stroke-width="2" />
                    <path d="M82.256 347.84L53.5741 342.781" stroke="#0082FF" stroke-width="2" />
                    <path d="M132.147 351.477L104.779 341.513" stroke="#0082FF" stroke-width="2" />
                    <path d="M131.078 289.303L105.856 274.737" stroke="#0082FF" stroke-width="2" />
                    <path d="M130.024 226.774L107.714 208.048" stroke="#0082FF" stroke-width="2" />
                    <path d="M128.081 163.792L109.36 141.475" stroke="#0082FF" stroke-width="2" />
                    <path d="M125.25 100.288L110.688 75.0583" stroke="#0082FF" stroke-width="2" />
                    <path d="M123.356 36.1935L113.395 8.81744" stroke="#0082FF" stroke-width="2" />
                    <path d="M133.398 475.162H104.274" stroke="#0082FF" stroke-width="2" />
                    <path d="M133.224 413.394L104.543 408.335" stroke="#0082FF" stroke-width="2" />
                    <path d="M183.114 417.022L155.746 407.058" stroke="#0082FF" stroke-width="2" />
                    <path d="M182.047 354.857L156.825 340.291" stroke="#0082FF" stroke-width="2" />
                    <path d="M180.993 292.328L158.683 273.602" stroke="#0082FF" stroke-width="2" />
                    <path d="M179.05 229.346L160.329 207.029" stroke="#0082FF" stroke-width="2" />
                    <path d="M176.219 165.833L161.657 140.603" stroke="#0082FF" stroke-width="2" />
                    <path d="M174.325 101.738L164.364 74.362" stroke="#0082FF" stroke-width="2" />
                    <path d="M171.549 37.0027L166.492 8.31245" stroke="#0082FF" stroke-width="2" />
                    <path d="M184.193 478.939L155.512 473.88" stroke="#0082FF" stroke-width="2" />
                    <path d="M234.082 482.576L206.714 472.612" stroke="#0082FF" stroke-width="2" />
                    <path d="M233.013 420.402L207.791 405.836" stroke="#0082FF" stroke-width="2" />
                    <path d="M231.961 357.873L209.651 339.147" stroke="#0082FF" stroke-width="2" />
                    <path d="M230.016 294.891L211.295 272.574" stroke="#0082FF" stroke-width="2" />
                    <path d="M227.187 231.387L212.625 206.157" stroke="#0082FF" stroke-width="2" />
                    <path d="M225.291 167.292L215.33 139.916" stroke="#0082FF" stroke-width="2" />
                    <path d="M222.517 102.557L217.46 73.8663" stroke="#0082FF" stroke-width="2" />
                    <path d="M221.771 0.749268V29.8822" stroke="#0082FF" stroke-width="2" />
                    <path d="M283.981 485.956L258.759 471.39" stroke="#0082FF" stroke-width="2" />
                    <path d="M282.927 423.426L260.617 404.7" stroke="#0082FF" stroke-width="2" />
                    <path d="M280.984 360.445L262.263 338.128" stroke="#0082FF" stroke-width="2" />
                    <path d="M278.154 296.932L263.592 271.702" stroke="#0082FF" stroke-width="2" />
                    <path d="M276.26 232.837L266.299 205.461" stroke="#0082FF" stroke-width="2" />
                    <path d="M273.484 168.102L268.427 139.411" stroke="#0082FF" stroke-width="2" />
                    <path d="M272.74 66.3031V95.4361" stroke="#0082FF" stroke-width="2" />
                    <path d="M275.454 1.25189L270.396 29.9422" stroke="#0082FF" stroke-width="2" />
                    <path d="M333.896 488.971L311.586 470.245" stroke="#0082FF" stroke-width="2" />
                    <path d="M331.953 425.99L313.232 403.673" stroke="#0082FF" stroke-width="2" />
                    <path d="M329.122 362.485L314.56 337.255" stroke="#0082FF" stroke-width="2" />
                    <path d="M327.228 298.391L317.267 271.015" stroke="#0082FF" stroke-width="2" />
                    <path d="M324.452 233.655L319.395 204.964" stroke="#0082FF" stroke-width="2" />
                    <path d="M323.706 131.848V160.981" stroke="#0082FF" stroke-width="2" />
                    <path d="M326.422 66.8057L321.364 95.4961" stroke="#0082FF" stroke-width="2" />
                    <path d="M329.108 2.40698L319.147 29.7831" stroke="#0082FF" stroke-width="2" />
                    <path d="M382.919 491.543L364.198 469.226" stroke="#0082FF" stroke-width="2" />
                    <path d="M380.088 428.03L365.526 402.8" stroke="#0082FF" stroke-width="2" />
                    <path d="M378.194 363.935L368.233 336.559" stroke="#0082FF" stroke-width="2" />
                    <path d="M375.421 299.2L370.364 270.509" stroke="#0082FF" stroke-width="2" />
                    <path d="M381.82 4.17302L367.258 29.4029" stroke="#0082FF" stroke-width="2" />
                    <path d="M374.675 197.393V226.526" stroke="#0082FF" stroke-width="2" />
                    <path d="M377.391 132.351L372.333 161.041" stroke="#0082FF" stroke-width="2" />
                    <path d="M380.074 67.9609L370.113 95.337" stroke="#0082FF" stroke-width="2" />
                    <path d="M431.057 493.584L416.495 468.354" stroke="#0082FF" stroke-width="2" />
                    <path d="M429.163 429.489L419.202 402.113" stroke="#0082FF" stroke-width="2" />
                    <path d="M426.387 364.754L421.33 336.063" stroke="#0082FF" stroke-width="2" />
                    <path d="M432.789 69.7269L418.227 94.9568" stroke="#0082FF" stroke-width="2" />
                    <path d="M435.42 6.4994L416.699 28.8165" stroke="#0082FF" stroke-width="2" />
                    <path d="M425.641 262.947V292.079" stroke="#0082FF" stroke-width="2" />
                    <path d="M428.357 197.905L423.299 226.595" stroke="#0082FF" stroke-width="2" />
                    <path d="M431.043 133.506L421.082 160.882" stroke="#0082FF" stroke-width="2" />
                    <path d="M480.131 495.034L470.17 467.658" stroke="#0082FF" stroke-width="2" />
                    <path d="M477.355 430.299L472.298 401.608" stroke="#0082FF" stroke-width="2" />
                    <path d="M483.757 135.272L469.195 160.502" stroke="#0082FF" stroke-width="2" />
                    <path d="M486.386 72.0533L467.665 94.3704" stroke="#0082FF" stroke-width="2" />
                    <path d="M488.085 9.3179L465.774 28.0442" stroke="#0082FF" stroke-width="2" />
                    <path d="M476.609 328.491V357.624" stroke="#0082FF" stroke-width="2" />
                    <path d="M479.325 263.449L474.267 292.139" stroke="#0082FF" stroke-width="2" />
                    <path d="M482.011 199.05L472.05 226.426" stroke="#0082FF" stroke-width="2" />
                    <path d="M528.322 495.853L523.265 467.162" stroke="#0082FF" stroke-width="2" />
                    <path d="M534.723 200.825L520.161 226.055" stroke="#0082FF" stroke-width="2" />
                    <path d="M537.354 137.598L518.633 159.915" stroke="#0082FF" stroke-width="2" />
                    <path d="M539.051 74.8718L516.74 93.5981" stroke="#0082FF" stroke-width="2" />
                    <path d="M539.819 12.5334L514.596 27.0999" stroke="#0082FF" stroke-width="2" />
                    <path d="M527.578 394.045V423.178" stroke="#0082FF" stroke-width="2" />
                    <path d="M530.292 329.003L525.234 357.693" stroke="#0082FF" stroke-width="2" />
                    <path d="M532.978 264.604L523.017 291.98" stroke="#0082FF" stroke-width="2" />
                    <path d="M585.692 266.37L571.13 291.6" stroke="#0082FF" stroke-width="2" />
                    <path d="M588.323 203.152L569.602 225.469" stroke="#0082FF" stroke-width="2" />
                    <path d="M590.02 140.416L567.709 159.142" stroke="#0082FF" stroke-width="2" />
                    <path d="M590.786 78.0873L565.563 92.6538" stroke="#0082FF" stroke-width="2" />
                    <path d="M591.539 16.0605L564.171 26.0246" stroke="#0082FF" stroke-width="2" />
                    <path d="M578.544 459.59V488.723" stroke="#0082FF" stroke-width="2" />
                    <path d="M581.26 394.548L576.202 423.238" stroke="#0082FF" stroke-width="2" />
                    <path d="M583.946 330.149L573.985 357.525" stroke="#0082FF" stroke-width="2" />
                    <path d="M636.66 331.924L622.098 357.154" stroke="#0082FF" stroke-width="2" />
                    <path d="M639.289 268.697L620.568 291.014" stroke="#0082FF" stroke-width="2" />
                    <path d="M640.986 205.961L618.675 224.687" stroke="#0082FF" stroke-width="2" />
                    <path d="M641.754 143.632L616.531 158.199" stroke="#0082FF" stroke-width="2" />
                    <path d="M642.507 81.6144L615.139 91.5785" stroke="#0082FF" stroke-width="2" />
                    <path d="M643.248 19.7877L614.566 24.8465" stroke="#0082FF" stroke-width="2" />
                    <path d="M632.229 460.102L627.171 488.792" stroke="#0082FF" stroke-width="2" />
                    <path d="M634.912 395.703L624.951 423.079" stroke="#0082FF" stroke-width="2" />
                    <path d="M687.627 397.469L673.065 422.699" stroke="#0082FF" stroke-width="2" />
                    <path d="M690.258 334.251L671.537 356.568" stroke="#0082FF" stroke-width="2" />
                    <path d="M691.955 271.515L669.644 290.241" stroke="#0082FF" stroke-width="2" />
                    <path d="M692.723 209.186L667.5 223.753" stroke="#0082FF" stroke-width="2" />
                    <path d="M693.473 147.159L666.105 157.123" stroke="#0082FF" stroke-width="2" />
                    <path d="M694.217 85.3324L665.535 90.3912" stroke="#0082FF" stroke-width="2" />
                    <path d="M694.043 23.5944H664.918" stroke="#0082FF" stroke-width="2" />
                    <path d="M685.881 461.248L675.92 488.624" stroke="#0082FF" stroke-width="2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_3">
                      <rect width="697" height="486" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Col md="6">
                    <img src="Assets/images/Screen3.png" alt="Your Image" class="image-on-pattern" />
                </Col>
              </div>
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
            <Col md="9">
              <Row>
                <Col xs={{ order: "first" }}>
                  <ul className="footer-list lead pt-4 mt-1">
                    <li> <a href="#Home">Home</a></li>
                    <li> <a href="#feature">Features</a></li>
                    <li> <a href="https://github.com/xmigrate/xmigrate/discussions/" target="_blank">Community</a></li>
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
                  <p className="pt-4 mt-1 lead"> &#169; 2022@xmigrate.cloud</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
