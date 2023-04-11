import React from "react";
import Header from "../components/Header";
// import SideMenu from "../components/SideMenu";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import cases from '../data/cases';
import Col from 'react-bootstrap/Col';
import Cards from "../components/Cards";
import Card from 'react-bootstrap/Card';
// import Maps from "../components/Maps";
import map from '../assets/images/india-map.png';
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
// import PieChart from "../components/PieChart";
import Tables from "../components/Tables";
import Footer from "../components/Footer";


const Dashboard = () => {
return(
    <>
    <Header />
    {/* <SideMenu /> */}
    <Container fluid className="bg-color">
    <Row className="mt-3 gy-3">
        <>
    {cases.map((data, index) => (
        <Col xs={12} sm={6} xl={3} key={data.id} className="col-case">
        <Cards key={data.id}
      name={data.name}
      count={data.count}
      icon={data.icon} />
      </Col>
      ))}
      </>
      {/* <Col xs={12} lg={3}><Cards /></Col>
      <Col xs={12} lg={3}><Cards /></Col>
      <Col xs={12} lg={3}><Cards /></Col>
      <Col xs={12} lg={3}><Cards /></Col> */}
    </Row>
    <Row className="mt-3 gy-3">
    <Col xs={12} xl={5}>
        <Card className="p-3 card-design">
        <h5 className="card-title fw-bold">Cases Reported in 2023-2024</h5>
        <img src={map} className="img-fluid rounded-start map-height" alt="Map Pic" />
        {/* <Maps /> */}
        </Card>
    </Col>
    <Col xs={12} xl={4}>
    <Card className="p-3 card-design">
    <h5 className="card-title fw-bold">Cases Reported Month Wise</h5>
        <BarChart />
    </Card>
    </Col>
    <Col xs={12} xl={3}>
    <Card className="p-3 card-design">
    <h5 className="card-title fw-bold">Resolved Reported Cases</h5>
        <DoughnutChart />
    </Card>
    </Col>
    </Row>
    {/* <Row className="mt-3">
    <Col>
    <Tables />
    </Col>  
    </Row> */}
    </Container>
    <Footer />
    </>
);
}

export default Dashboard; 


