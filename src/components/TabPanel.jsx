import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import BarChart from './BarChart';
import states from "../data/states";
import districts from '../data/districtsUP';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from "../components/Cards";
import signals from './../data/signals';
import Card from 'react-bootstrap/Card';
import DoughnutChart from "../components/DoughnutChart";
import LineChart from "../components/LineChart";
import timer from "../data/timer";
import ListGroups from "../components/ListGroups";

const TabPanel = () => {
    const [key, setKey] = useState('case_details');
  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="sub-tab" 
    >
      {/* justify */}
        {/* fill */}
      <Tab eventKey='case_details' title={<div><span className="font-icon"><FontAwesomeIcon icon={faCircleInfo} /> </span><span className="icon-label">Case Details</span></div>}>
      <Card className="p-3 card-design bg-group-sub">
      {/* <Row className="gy-2">  
      <Col xl={7}>
    <Tab eventKey='total_cases' title="Case Details"> */}
      <Row className="gy-3">  

      <Col xs={12} xl={2}>
      {/* <Card className="p-3 card-design h-100"> */}
      {/* <h5 className="fw-bold title-text">Signal</h5> */}
      <Row className="pt-1 gy-4">
        {signals.map((data, index) => (
          <Col xs={12} sm={6} md={3} xl={12} key={data.id} className="col-case">
          <Cards key={data.id} name={data.name} icon={data.icon} color={data.color} count={data.count} type="District-signals" />
          </Col>
        ))}
        </Row>
        {/* </Card> */}
        </Col>

      <Col sm={12} xl={5}>
      <Card className="p-3 card-design">
      <div className="mb-2">
      <h5 className="fw-bold title-text">District</h5>
      
          {/* <BarChart state={states}/>   */}
          <BarChart state={districts} type='statelevel' height='630'className='scroll-box'/>  
      </div>
      </Card>
      </Col>

      <Col xs={12} xl={5}>
        <Row className="p-0">
        <Col xl={12}>
        <Card className="p-3 card-design sub-case-list">
        {/* <Row className="gy-3">
        <Col xs={12} xl={6}> */}
        <h5 className="fw-bold title-text mb-3">Category of Cases</h5>
        {/* </Col>
        {service === true  && 
        <Col xs={12} xl={6} className="mb-2">
        <SelectBox  size="sm" type="services" option='Select Services' call={services}/>
        </Col>
        }
        </Row> */}
        {/* <DoughnutChart /> */}
        {/* <Tables /> */}
        <ListGroups />
      </Card>
        </Col>
        <Col xl={12}>
          <Card className="p-3 mt-4 card-design">
        <div className="mb-2">
        <h5 className="fw-bold title-text">Case Analytics </h5>
            <DoughnutChart height='154px'/>
        </div>
        </Card>
      </Col>
        </Row>
     
    
   
     </Col>

    </Row>
     </Card>
  </Tab>


{/* 2ND TAB */}

  {/* <Tab eventKey="case_details" title={<div><span className="font-icon"><FontAwesomeIcon icon={faCircleInfo} /> </span><span className="icon-label">Case Details</span></div>}>
    <Row className="gy-3">
        <Col xs={12} xl={6}>
        <Card className="p-3 card-design h-100"> */}
    {/* <Row className="gy-3">
    <Col xs={12} xl={6}> */}
    {/* <h5 className="fw-bold title-text mb-3">Category of Cases</h5> */}
    {/* </Col>
    {service === true  && 
        <Col xs={12} xl={6} className="mb-2">
        <SelectBox  size="sm" type="services" option='Select Services' call={services}/>
        </Col>
    }
    </Row> */}
        {/* <DoughnutChart /> */}
        {/* <Tables /> */}
        {/* <ListGroups />
    </Card>
        </Col>
        <Col xs={12} xl={6}>
        <Card className="p-3 card-design">
      <div className="mb-2">
      <h5 className="fw-bold title-text">Call Analytics </h5>
          <DoughnutChart />
      </div>
      </Card>
        </Col>
    </Row>
  </Tab> */}


  <Tab eventKey="call_details" title={<div><span className="font-icon"><FontAwesomeIcon icon={faSquarePhone} /> </span><span className="icon-label">Call Details</span></div>}>
  <Card className="p-3 card-design bg-group-sub">
    <Row className="gy-3">

    <Col xl={12}> 
    <Card className="p-3 card-design">
    <h5 className="fw-bold title-text">Reported Calls </h5>
        <LineChart type='line' height="155"/>
    </Card>
    </Col> 

        <Col xl={12}> 
    <Row className="pt-2 gy-3">
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
    </Row>
    </Col>

    <Col xl={12}>
    <Card className="mt-2 p-3 card-design">
        <div className="mb-2">
        <h5 className="fw-bold title-text">Call response Time </h5>
          <LineChart type='curve' state={states} height="155"/>
        </div>
      </Card>
    </Col>

    </Row>
    </Card>
      </Tab>
{/* 
      <Tab eventKey='call_response_time' title="Call Response Time">
    
        </Tab> */}

    
    </Tabs> 
  )
}

export default TabPanel;