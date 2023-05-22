import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BarChart from './BarChart';
// import states from "../data/states";
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
    const [key, setKey] = useState('total_cases');
  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3" justify
    >
        {/* fill */}
      <Tab eventKey='total_cases' title="Total Cases">
      <Row className="gy-2">  
      <Col xl={7}>
      <Card className="p-3 card-design">
      <div className="mb-2">
      <h5 className="fw-bold title-text">District</h5>
          {/* <BarChart state={states}/>   */}
          <BarChart state={districts} type='statelevel' className='scroll-box'/>  
      </div>
      </Card>
      </Col>
      <Col xl={5}>
      <Card className="mt-3 p-3 card-design">
<h5 className="fw-bold title-text">Signal</h5>
<Row className="pt-1 gy-4">
        {signals.map((data, index) => (
          <div xs={6} sm={6} xl={3} key={data.id} className="col-case">
          <Cards key={data.id}
            name={data.name}
            icon={data.icon}
            color={data.color}
            count={data.count} 
            type="Signals" />
          </div>
        ))}
        </Row>
        </Card>
        </Col>
     </Row>
      </Tab>

        <Tab eventKey="case_details" title="Case Details">
        <Row className="gy-3">
        <Col xs={12} xl={6}>
        <Card className="p-3 card-design h-100">
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
        <Col xs={12} xl={6}>
        <Card className="p-3 card-design">
      <div className="mb-2">
      <h5 className="fw-bold title-text">Call Analytics </h5>
          <DoughnutChart />
      </div>
      
      
      </Card>
        </Col>
        </Row>
      </Tab>


      <Tab eventKey="call_details" title="Call Details">
        <Row className="gy-3">

        <Col xl={12}> 
    <Card className="p-3 card-design">
    <h5 className="fw-bold title-text">Reported Calls </h5>
        <LineChart type='line' />
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

    </Row>
      </Tab>

      <Tab eventKey='call_response_time' title="Call Response Time">
      <h5 className="text-center">Call response Time </h5>
        </Tab>
    
    </Tabs> 
  )
}

export default TabPanel;