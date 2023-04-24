import React from "react";
import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import cases from '../data/cases';
import Col from 'react-bootstrap/Col';
//import Cards from "../components/Cards";
import Card from 'react-bootstrap/Card';
import DatePickerRange from "../components/DatePickerRange";
// import Maps from "../components/Maps";
import map from '../assets/images/india-map.png';
// import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
// import PieChart from "../components/PieChart";
import Tables from "../components/Tables";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import signals from './../data/signals';
import BarChart from "../components/BarChart";


const Dashboard = () => {
return(
    <>
    <Header />
    {/* <SideMenu /> */}

    <Container fluid className="bg-color">
      
      <Row className="mt-2 gy-2">

      <Col xl={5}>  {/*col2*/}
      <Card className="p-2 card-design">
      <div className="w-50 mb-2">
      <h6 className="fw-bold">Cases Reported Between The Range: </h6>
      {/* <DatePickerRange /> */}
      </div>
      </Card>
          {/* <DoughnutChart /> */}
      </Col>

      <Col xl={7}>  {/*col3*/}
        <Row>
        {signals.map((data, index) => (
          <Col xs={12} sm={6} xl={3} key={data.id} className="col-case">
          <Cards key={data.id}
            name={data.name}
            icon={data.icon}
            color={data.color}
            count={data.count} />
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

    <Row className="mt-2 gy-2">
        <>
    {/* {cases.map((data, index) => (
        <Col xs={12} sm={6} xl={3} key={data.id} className="col-case">
        <Cards key={data.id}
      name={data.name}
      count={data.count}
      icon={data.icon} />
      </Col>
      ))} */}
      </>

      <Col xs={12} xl={9}>
      <Card className="p-2 card-design">
      <div className="mb-2">
      <h6 className="fw-bold">All state Report: </h6>
          <BarChart />
      </div>
      </Card>

      </Col>

      <Col xs={12} xl={3}>  {/*col1*/}
      <Card className="p-2 card-design">
      <div className="mb-2">
      <h6 className="fw-bold">Call Analytics: </h6>
          <DoughnutChart />
      </div>
      </Card>
      </Col>

      

      

      

     


       {/*<Col xs={12} lg={3}><Cards /></Col>
      <Col xs={12} lg={3}><Cards /></Col>
      <Col xs={12} lg={3}><Cards /></Col> */}
    </Row>
    <Row className="mt-3 gy-3">
    <Col xs={12} xl={6}>
        <Card className="p-3 card-design">
        <h5 className="card-title fw-bold">Cases Reported in 2024</h5>
        <img src={map} className="img-fluid rounded-start map-height" alt="Map Pic" />
        {/* <Maps /> */}
        </Card>
    </Col>
    <Col xs={12} xl={3}>
    <Card className="p-3 card-design">
    <h5 className="card-title fw-bold">Cases Reported Month Wise</h5>
        <LineChart />
    </Card>
    </Col>
    <Col xs={12} xl={3}>
    <Card className="p-3 card-design">
    <h5 className="card-title fw-bold">Reported Cases</h5>
        {/* <DoughnutChart /> */}
        {/* <Tables /> */}
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
  <Row className="mt-2 gy-3">
    <Col xs={12} xl={7}>
      <Card className="p-3 card-design">
        <h5 className="card-title fw-bold"> Calls Taker Performance </h5>
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


