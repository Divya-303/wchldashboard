import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    const stickyFooterStyle = {
        backgroundColor: "rgb(235 228 228 / 27%)",
        fontSize: "13px",
        color: "black",
        borderTop: "1px solid rgb(225 220 220 / 12%)",
        textAlign: "center",
        paddingTop: "15px",
        paddingBottom: "30px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "30px",
        width: "100%"
      };
  return (
    <Container>
        <Row>
          <Col style={stickyFooterStyle} sm={12}>
            &copy; Copyright 2023 - 2024 | C-DAC |
            info@cdac.in  
            {/* <a
              href="#"
              target="_blank"
              rel="noopener nonreferrer"
            >
              {" "}
             C-DAC
            </a> */}
          </Col>
        </Row>
      </Container>
  )
}

export default Footer