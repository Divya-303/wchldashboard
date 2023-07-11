import React, { useState } from "react";
import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Cards from "../components/Cards";
import Card from "react-bootstrap/Card";
import DatePickerRange from "../components/DatePickerRange";
import SelectBox from "../components/SelectBox";
import ReactSlider from "react-slider";
import calls from "../data/calls";
import Maps from "../components/Maps";
import LineChart from "../components/LineChart";
import timer from "../data/timer";
import ListGroups from "../components/ListGroups";
import Footer from "../components/Footer";
import signals from "./../data/signals";
import BarChart from "../components/BarChart";
import states from "../data/states";
// import Dropdown from "react-bootstrap/Dropdown";
// import NavItem from "react-bootstrap/NavItem";
// import NavLink from "react-bootstrap/NavLink";
// import { exportToExcel } from 'react-json-to-excel';
// import { useLocation } from "react-router-dom";

// import RadialChart from "../components/RadialChart";
// import Timeline from "../components/Timeline";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faChartSimple,
  faMagnifyingGlassChart
} from "@fortawesome/free-solid-svg-icons";
import TabPanel from "../components/TabPanel";
import DownloadFile from "../components/DownloadFile";

const Dashboard = () => {
  const [key, setKey] = useState("national_level");
  
  // const location = useLocation();
  // console.log(location.state);
  // const [service, setServive] = useState(false);
  // const selectedValue = val => {
  //      val === 'c03' ? setServive(true) : setServive(false);
  //   }
  // Set your tooltip color here
  // const entering = (e) => {
  //   console.log(e);
  //   e.children[0].style.borderTopColor = 'green';
  //   e.children[1].style.backgroundColor = 'green';
  // };


  // const HandleClick = ({content}) => {
  //   const location = useLocation();
  //   console.log(location.state);
  //   console.log(content);
  // }

  return (
    <>
      <Header />
      {/* <SideMenu /> */}

      <Container fluid className="page-container bg-color">
        <Row className="form-filter gy-1 justify-content-end">
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            {/* <Form.Label>Date Range</Form.Label> */}
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={
                <Tooltip className="form-tooltip-bottom">
                  <strong>Date Range</strong>.
                </Tooltip>
              }
            >
              <div>
                <DatePickerRange />
              </div>
            </OverlayTrigger>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            {/* <Form.Label>Type of Calls</Form.Label> */}
            {/* show={true} */}
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={
                <Tooltip className="form-tooltip-bottom">
                  <strong>Type of Calls</strong>.
                </Tooltip>
              }
            >
              <div>
                {/* getValue={selectedValue} */}
                <SelectBox
                  size="sm"
                  type="calls"
                  option="Type of calls"
                  call={calls}
                />
              </div>
            </OverlayTrigger>
          </Col>
          {/* <Col xs={12} sm={12} md={12} lg={4} xl={4}> 
        <Form.Label>Age Range</Form.Label>
        <OverlayTrigger
          key="bottom"
          placement="bottom"
          overlay={
            <Tooltip className="form-tooltip-bottom">
              <strong>Age Range</strong>.
            </Tooltip>
          }
        >
          <div className="age-range">
          <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    defaultValue={[0, 100]}
    ariaLabel={['Lower thumb', 'Upper thumb']}
    ariaValuetext={state => `Thumb value ${state.valueNow}`}
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    pearling
    minDistance={1}
/>
</div> */}
          {/* 
    </OverlayTrigger>
      </Col>  */}
        </Row>

        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
          unmountOnExit={true}
          className="mt-4 main-tab"
        >
          {/* icon-tab */}
          {/* fill */}
          <Tab
            eventKey="national_level"
            title={
              <span>
                <FontAwesomeIcon className="pe-2" icon={faChartSimple} />
                National Level Statistics
              </span>
            }
          >
            <Card className="p-3 pt-4 card-design bg-group-main">
              <Row className="gy-2">
                <Col xl={12}>
                  <Row className="gy-4">
                    <Col xs={12} xl={2}>
                      <Row className="gy-4">
                        <Col lg={4} xl={12}>
                          <Card className="card-flush h-100">
                            <Card.Header className="pt-3 mb-1">
                              {/* <div className="d-flex flex-center rounded-circle card-icon-call icon-bg-color">  */}
                              {/* text-center  icon-style bg-light mt-0 mb-3 p-1 border border-light  */}
                              <div className="d-flex justify-content-center align-items-center case-icon text-white rounded-circle">
                                <FontAwesomeIcon icon={faBullhorn} />
                              </div>
                            </Card.Header>

                            <Card.Body className="d-flex align-items-center py-0">
                              <div className="d-flex align-items-center case-report">
                                <span className="fs-report text-white fw-bold d-block mx-3">
                                  1.2k
                                </span>
                                <div className="fw-bold text-white mt-2 cr-name">
                                  <span className="d-block">Cases</span>
                                  <span>Reported</span>
                                </div>
                              </div>
                            </Card.Body>
                            <Card.Footer>
                              <div className="fw-bold text-white py-2">
                                <span className="fs-resolve d-block">935</span>
                                <span className="opacity-50">
                                  Cases Resolved
                                </span>
                              </div>
                            </Card.Footer>
                          </Card>
                        </Col>
                        <Col lg={8} xl={12}>
                          {/* pt-xl-3  */}
                          <Row className="gy-4">
                            {signals.map((data, index) => (
                              <Col
                                xs={6}
                                xl={12}
                                key={data.id}
                                className="col-case"
                              >
                                <Cards
                                  key={data.id}
                                  name={data.name}
                                  icon={data.icon}
                                  color={data.color}
                                  count={data.count}
                                  type="Signals"
                                />
                              </Col>
                            ))}
                          </Row>
                        </Col>
                      </Row>
                    </Col>

                    <Col xs={12} xl={10}>
                      <Row className="gy-2">
                        <Col xl={12}>
                          <Card className="p-3 card-design">
                            <Row>
                            <Col>
                              <h5 className="fw-bold title-text"> All state Cases </h5>
                            </Col>  
                            <Col className="d-flex justify-content-end align-content-end">
                              <DownloadFile state={states} type='state cases'/>
                            </Col>
                            </Row>
                              <BarChart state={states} type="national" height="228" />

                          </Card>
                        </Col>
                        <Col xl={12}>
                          <Row className="py-3 gy-4">
                            <Col xs={12} xl={8}>
                              <Col xl={12}>
                                <Row className="gy-4 avg-time">
                                  <Col xs={12} md={6} lg={6} xl={6}>
                                    <Cards
                                      key={1}
                                      icon={"faPhone"}
                                      count={"0m:27s"}
                                      title={"Avg. Speed Of Answer"}
                                      sub={
                                        "Call answered avg. speed (time period)"
                                      }
                                      chart={timer[0]}
                                      type="Timer"
                                    />
                                  </Col>
                                  <Col xs={12} md={6} lg={6} xl={6}>
                                    <Cards
                                      key={2}
                                      icon={"faClock"}
                                      count={"4m:30s"}
                                      title={
                                        "Avg. Time Taken To Close The Call"
                                      }
                                      sub={
                                        "Avg. time taken to close the call (time period)"
                                      }
                                      chart={timer[1]}
                                      type="Timer"
                                    />
                                  </Col>
                                </Row>
                              </Col>

                              <Col xl={12}>
                                <Card className="mt-4 p-3 card-design">
                                  <Row> <Col> <h5 className="fw-bold title-text"> Call response Time </h5> </Col>
                                        <Col className="d-flex justify-content-end align-content-end">
                                        <DownloadFile state={states} type='state response'/> </Col>
                                  </Row>
                                  <LineChart type="curve" state={states} height="183" />
                                </Card>
                              </Col>

                            </Col>
                            <Col xs={12} xl={4}>
                              <Card className="p-3 card-design main-case-list">
                                <Row className="gy-3">
                                  <Col xs={12} xl={6}>
                                    <h5 className="fw-bold title-text mb-3">
                                      Category of Cases
                                    </h5>
                                  </Col>
                                </Row>
                                <ListGroups />
                              </Card>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Tab>
          <Tab
            eventKey="state_level"
            title={
              <span>
                <FontAwesomeIcon
                  className="pe-2"
                  icon={faMagnifyingGlassChart}
                />
                State Level Statistics
              </span>
            }
          >
            <Card className="p-3 py-4 card-design bg-group-main">
              <Row className="gy-4">
                <Col xs={12} xl={4}>
                  <Card className="p-3 card-design">
                    <h5 className="fw-bold mb-0 title-text">
                      Reported Cases in State
                    </h5>
                    {/* <Image src={map} className="img-fluid rounded-start img-map" alt="Map Pic" />   */}

                  </Card>
                  <Maps />
                </Col>
                <Col xs={12} xl={8}>
                  <Card className="p-3 card-design map-details h-100 bg-color-sub">
                    <TabPanel />
                  </Card>
                </Col>
              </Row>
            </Card>
          </Tab>

          {/* <Row className="mt-3 gy-3"> */}
          {/* to analyse call taker performance*/}
          {/* <Col xs={12} xl={6}>
      <Card className="p-3 card-design h-100">
        <h5 className="fw-bold title-text mb-3"> Calls Taker Performance </h5>
        <Tables />
      </Card>
      </Col> */}
          {/* new edits-ASHNA- */}
          {/* <Col xs={12} xl={3}>
      <Card className="p-3 card-design h-100">
        <h5 className="fw-bold title-text mb-3"> Latest Activity </h5>
        <RadialChart /> 
        <Timeline />
      <div> 
      </div>
      </Card>
    </Col> */}

          {/* </Row> */}
        </Tabs>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
