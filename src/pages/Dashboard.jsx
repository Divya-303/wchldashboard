import React, { useState, useEffect } from "react";
import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import cases from '../data/cases';
import Col from 'react-bootstrap/Col';
import Cards from "../components/Cards";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import DatePickerRange from "../components/DatePickerRange";
import SelectBox from "../components/SelectBox";
import Button from 'react-bootstrap/Button';
import calls from "../data/calls";
// import Maps from "../components/Maps";
import Image from "react-bootstrap/Image";
import map from '../assets/images/india-map.webp';
// import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
// import PieChart from "../components/PieChart";
import timer from "../data/timer";
import ListGroups from "../components/ListGroups";
import Tables from "../components/Tables";
import Footer from "../components/Footer";
import signals from './../data/signals';
import services from "../data/services";
import BarChart from "../components/BarChart";
import states from "../data/states";
import RadialChart from "../components/RadialChart";
import Timeline from "../components/Timeline";
import Nav from 'react-bootstrap/Nav';

// Total Call Cards
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faChartSimple, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';

import TabPanel from "../components/TabPanel";

const Dashboard = () => {
  const [key, setKey] = useState('national_level');
  // const [service, setServive] = useState(false);
  // const selectedValue = val => {
  //      val === 'c03' ? setServive(true) : setServive(false);
  //   }
return(
    <>
    <Header />
    {/* <SideMenu /> */}

    <Container fluid className="page-container bg-color">
 
    <Tabs 
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mt-4 main-tab">
      {/* icon-tab */}
        {/* fill */}
        {/* <div><span className="font-icon"><FontAwesomeIcon icon={faCircleDot} /> </span><span className="icon-label">National Level Statistics</span></div> */}
      <Tab eventKey='national_level' title={<span><FontAwesomeIcon className="pe-2" icon={faChartSimple} />National Level Statistics</span>}>
      <Card className="p-3 pt-4 card-design bg-group">
      <Row className="gy-2">


  {/* <Col xl={12}> 
    <h3 className="fw-bold header-title">National Level Statistics</h3>
  </Col> */}
  <Col xl={12}>
  <Row className="gy-2"> 
      <Col xs={12} xl={2}>  
      <Row className="gy-2"> 
      <Col xl={12}>  
      <Card className="card-flush h-100">
      <Card.Header className="pt-3 mb-1">
        {/* <div className="d-flex flex-center rounded-circle card-icon-call icon-bg-color">  */}
        {/* text-center  icon-style bg-light mt-0 mb-3 p-1 border border-light  */}
        <div className="d-flex justify-content-center align-items-center case-icon text-white rounded-circle">
        <FontAwesomeIcon  icon={faBullhorn} />
        </div>
    </Card.Header>

    <Card.Body className="d-flex align-items-center py-0">
    <div className="d-flex align-items-center">
      <span className="fs-report text-white fw-bold d-block mx-3">1.2k</span>
      <div className="fw-bold text-white mt-2">
        <span className="d-block">Cases</span>
        <span className>Reported</span>
      </div>            
    </div>
  </Card.Body>
  <Card.Footer>
    <div className="fw-bold text-white py-2">
      <span className="fs-resolve d-block">935</span>
      <span className="opacity-50">Cases Resolved</span>
    </div>          
  </Card.Footer>
</Card>
</Col>
<Col xl={12}> 
      <Row className="pt-3 gy-4">
        {signals.map((data, index) => (
          <Col xs={6} xl={12} key={data.id} className="col-case">
          <Cards key={data.id}
            name={data.name}
            icon={data.icon}
            color={data.color}
            count={data.count} 
            type="Signals" />
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
      <div className="mb-2">
      <h5 className="fw-bold title-text">All state Cases</h5>
          {/* <BarChart state={states}/> */}
          <BarChart state={states} type='national' height='228px'/>
      </div>
      </Card>
      </Col>
      <Col xl={12}>
        <Row className="py-3 gy-2">  
<Col xs={12} xl={8}>
  <Col xl={12}>
<Row className="gy-3 avg-time">
    <Col xs={12} xl={6}> 
    <Cards key={1}
      icon = {"faPhone"}
      count={"0m:27s"}
      title={"Avg. Speed Of Answer"}
      sub={"Call answered avg. speed (time period)"} 
      chart={timer[0]}
      type="Timer" />
    </Col>
    <Col xs={12} xl={6}> 
    <Cards key={2}
      icon = {"faClock"}
      count={"4m:30s"}
      title={"Avg. Time Taken To Close The Call"}
      sub={"Avg. time taken to close the call (time period)"} 
      chart={timer[1]}
      type="Timer" />
    </Col>
            </Row>
            </Col>

            <Col xl={12}> 
    <Card className="mt-4 p-3 card-design">
        {/* <div className="mb-2"> */}
        <h5 className="fw-bold title-text">Call response Time </h5>
          <LineChart type='curve' state={states} height="183"/>
        {/* </div> */}
      </Card>
      </Col>
</Col>
<Col xs={12} xl={4}>
<Card className="p-3 card-design case-list">
    <Row className="gy-3">
    <Col xs={12} xl={6}>
    <h5 className="fw-bold title-text mb-3">Category of Cases</h5>
    </Col>
    {/* {service === true  && 
        <Col xs={12} xl={6} className="mb-2">
        <SelectBox  size="sm" type="services" option='Select Services' call={services}/>
        </Col>
    } */}
    </Row>
        {/* <DoughnutChart /> */}
        {/* <Tables /> */}
        <ListGroups type="main-level"/>
    </Card>
</Col>
        </Row>
        </Col>
</Row>
</Col>
      {/* <Card className="p-3 card-design">
      <h5 className="fw-bold title-text mb-3">Select Criteria to View Report</h5>
      <Row className="gy-3"> 
      <Col xl={12} className="mb-2">
        <Form.Label>Date Range</Form.Label>
    <DatePickerRange />
    </Col>
    <Col xl={12} className="mb-2"> 
    <Form.Label>Type of Calls</Form.Label>
    <SelectBox  size="sm" type="calls" option='Type of calls' call={calls} getValue={selectedValue}/>
    </Col>
    <Col xl={12} className="mb-2"> 
    <Button className="btn-sm float-end btn-style" variant="primary" type="submit">
        View
    </Button>
    </Col>
    </Row>
    </Card> */}
    </Row> 
    </Col>
      </Row>

      </Card> 

    </Tab>
    
    {/* for signal-cards */}
    {/* <Row className="mt-1 gy-1">

    {signals.map((data, index) => (
        <Col xs={12} sm={6} xl={3} key={data.id}>
        <Cards key={data.id}
            name={data.name}
            icon={data.icon}
            color={data.color}
            count={data.count} />
        </Col>
      ))}

    </Row> */}

    {/* <Row className="mt-3 gy-3"> */}
         {/*  <>
  {cases.map((data, index) => (
        <Col xs={12} sm={6} xl={3} key={data.id} className="col-case">
        <Cards key={data.id}
      name={data.name}
      count={data.count}
      icon={data.icon} type={"Cases"} />
      </Col>
      ))}
      </> */}
      {/* <div className="ms-auto w-50 mb-3">
       </div> */}
 <Tab eventKey='state_level' title={<span><FontAwesomeIcon className="pe-2" icon={faMagnifyingGlassChart} />State Level Statistics</span>}>
<Card className="p-3 py-4 card-design bg-group">
      <Row className="gy-2">


  {/* <Col xl={12}> 
    <h3 className="fw-bold header-title">State Level Statistics</h3>
  </Col> */}
<Col xs={12} xl={5}>
        <Card className="p-3 card-design">
        <h5 className="fw-bold title-text">Reported Cases in State</h5>
        {/* <img src={map} className="img-fluid rounded-start img-map" alt="Map Pic" /> */}
        <Image src={map} className="img-fluid rounded-start img-map" alt="Map Pic" />  
        {/* <Maps /> */}
        </Card>
    </Col>

    <Col xs={12} xl={7}> 
    <Card className="p-3 card-design map-details h-100">
        {/* <h5 className="fw-bold title-text">Cases Reported in 2024</h5> */}
        {/* <Row className="gy-3">
        {signals.map((data, index) => (
          <Col xs={12} sm={6} xl={3} key={data.id} className="col-case">
          <Cards key={data.id}
            name={data.name}
            icon={data.icon}
            color={data.color}
            count={data.count} 
            type="Signals" />
          </Col>
        ))}
        </Row> */}
        {/* <Row className="mt-3 gy-3">
        <Col xs={12} xl={6}>
      <Card className="p-2 card-design">
      <div className="mb-2">
      <h5 className="fw-bold title-text">Call Analytics: </h5>
          <DoughnutChart />
      </div>
      
      
      </Card>
      </Col>
      <Col xs={12} xl={6}> 
    <Card className="p-3 card-design">
    <h5 className="fw-bold title-text"> (State) Reported Calls </h5>
        <LineChart type='line' />
    </Card>
    </Col>
            </Row> */}
            {/* <Row className="mt-3 gy-3">
            <Col xs={12} xl={6}> 
    <Cards key={1}
      icon = {"faPhone"}
      count={"0m:27s"}
      title={"Avg. Speed Of Answer"}
      sub={"Call answered avg. speed (time period)"} 
      chart={timer[0]}
      type={"Timer"} />
    </Col>
    <Col xs={12} xl={6}> 
    <Cards key={2}
      icon = {"faClock"}
      count={"4m:30s"}
      title={"Avg. Time Taken To Close The Call"}
      sub={"Avg. time taken to close the call (time period)"} 
      chart={timer[1]}
      type={"Timer"} />
    </Col>
            </Row> */}
<TabPanel />
            </Card>
      </Col>
     

      

      

      

     


       {/*<Col xs={12} lg={3}><Cards /></Col>
      <Col xs={12} lg={3}><Cards /></Col>
      <Col xs={12} lg={3}><Cards /></Col> */}
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


    

    {/* <Row className="mt-3">
    <Col>
    <Tables />
    </Col>  
    </Row> */}

    {/* for call taker performance */}
    {/* <Row className="mt-2 gy-3">
    <Col xs={12} xl={7}>
      <Card className="p-3 card-design">
        <h5 className="card-title fw-bold"> Calltaker Performance </h5>
        <Tables />
      </Card>
      </Col>
      
      <Col xs={12} xl={5}></Col>
    </Row> */}

    
  {/* <Row className="mt-3 gy-3">
  
      
      <Col xs={12} xl={5}></Col>
    </Row> */}
</Tabs>

    </Container>
    <Footer />
    </>
);
}

export default Dashboard; 


