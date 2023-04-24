import React from "react";
import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import cases from '../data/cases';
import Col from 'react-bootstrap/Col';
import Cards from "../components/Cards";
import Card from 'react-bootstrap/Card';
import DatePickerRange from "../components/DatePickerRange";
import SelectBox from "../components/SelectBox";
import calls from "../data/calls";
// import Maps from "../components/Maps";
import map from '../assets/images/india-map.png';
// import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
// import PieChart from "../components/PieChart";
import timer from "../data/timer";
import ListGroups from "../components/ListGroups";
import Tables from "../components/Tables";
import Footer from "../components/Footer";
import signals from './../data/signals';
import BarChart from "../components/BarChart";


const Dashboard = () => {
return(
    <>
    <Header />
    {/* <SideMenu /> */}

    <Container fluid className="page-container bg-color">
      
      <Row className="mt-3 gy-3">

      <Col xl={5}>  {/*col2*/}
      <Card className="p-3 card-design">
      <h5 className="fw-bold title-text">Select Criteria to View Report</h5>
      <Row className="gy-3"> 
    <Col xs={12} xl={6}> 
    <DatePickerRange />
    </Col>
    <Col xs={12} xl={6}> 
    <SelectBox size="sm" option='Type of calls' call={calls}/>
    </Col>
    </Row>
    </Card>
      </Col>

      <Col xl={7}>  {/*col3*/}
        <Row className="">
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
        </Row>
      </Col>

      


      </Row>

      
    
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

    <Row className="mt-3 gy-3">
        <>
    {/* {cases.map((data, index) => (
        <Col xs={12} sm={6} xl={3} key={data.id} className="col-case">
        <Cards key={data.id}
      name={data.name}
      count={data.count}
      icon={data.icon} type={"Cases"} />
      </Col>
      ))} */}
      </>
      {/* <div className="ms-auto w-50 mb-3">
       </div> */}

      <Col xs={12} xl={9}>
      <Card className="p-2 card-design">
      <div className="mb-2">
      <h5 className="fw-bold title-text">All state Report: </h5>
          <BarChart />
      </div>
      </Card>

      </Col>

      <Col xs={12} xl={3}>  {/*col1*/}
      <Card className="p-2 card-design">
      <div className="mb-2">
      <h5 className="fw-bold title-text">Call Analytics: </h5>
          <DoughnutChart />
      </div>
      
      
      </Card>
      </Col>

      

      

      

     


       {/*<Col xs={12} lg={3}><Cards /></Col>
      <Col xs={12} lg={3}><Cards /></Col>
      <Col xs={12} lg={3}><Cards /></Col> */}
    </Row>
    <Row className="mt-3 gy-3">
    <Col xs={12} xl={5}>
        <Card className="p-3 card-design h-100">
        <h5 className="fw-bold title-text">Cases Reported in 2024</h5>
        <img src={map} className="img-fluid rounded-start map-height" alt="Map Pic" />
        {/* <Maps /> */}
        </Card>
    </Col>
    <Col xs={12} xl={3}>
    <Row className="gy-3"> 
    <Col xl={12}> 
    <Card className="p-3 card-design">
    <h5 className="fw-bold title-text">(State) Calls reported </h5>
        <LineChart />
    </Card>
    </Col>
    <Col xl={12}> 
    <Cards key={2}
      icon = {"faPhone"}
      count={"0m:27s"}
      title={"Avg. Speed Of Answer"}
      sub={"Call answered avg. speed (time period)"} 
      chart={timer[0]}
      type={"Timer"} />
    </Col>
    <Col xl={12}> 
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
    <Col xs={12} xl={4}>
    <Card className="p-3 card-design h-100">
    <h5 className="fw-bold title-text">Category of Cases</h5>
        {/* <DoughnutChart /> */}
        {/* <Tables /> */}
        <ListGroups />
    </Card>
    </Col>
    </Row>
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

    {/* to analyse call taker performance*/}
  <Row className="mt-3 gy-3">
    <Col xs={12} xl={7}>
      <Card className="p-3 card-design">
        <h5 className="fw-bold title-text"> Calls Taker Performance </h5>
        <Tables />
      </Card>
      </Col>
      
      <Col xs={12} xl={5}></Col>
    </Row>

    </Container>
    <Footer />
    </>
);
}

export default Dashboard; 


