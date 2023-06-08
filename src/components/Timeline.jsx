import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faHourglass,
  faUpRightFromSquare,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
  return (
    <Container fluid className="activity">
      <Row className="mt-3 activity-info">
        <Col xs={12} xl={3} className="d-flex">
          <div className="task-icon d-flex justify-content-center align-items-center">
            {" "}
            <FontAwesomeIcon
              icon={faCheckDouble}
              size="lg"
              style={{ color: "#00cab8" }}
            />{" "}
          </div>
          <div className="task-title my-auto"> Task Finished </div>
          <div className="task-date my-auto"> 2 days ago </div>
        </Col>
      </Row>
      <Row className="mt-3 activity-info">
        <Col xs={12} xl={3}>
          <div className="task-icon d-flex justify-content-center align-items-center">
            {" "}
            <FontAwesomeIcon
              icon={faHourglass}
              size="lg"
              style={{ color: "#08a8ef" }}
            />
          </div>
          <div className="task-title my-auto"> Task Overdue </div>
          <div className="task-date my-auto"> 2 days ago </div>
        </Col>
      </Row>
      <Row className="mt-3 activity-info">
        <Col xs={12} xl={3}>
          <div className="task-icon d-flex justify-content-center align-items-center">
            {" "}
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              size="lg"
              style={{ color: "#416eee" }}
            />
          </div>
          <div className="task-title my-auto"> New Task </div>
          <div className="task-date my-auto"> 50 Min ago </div>
        </Col>
      </Row>
      <Row className="mt-3 activity-info">
        <Col xs={12} xl={3}>
          <div className="task-icon d-flex justify-content-center align-items-center">
            {" "}
            <FontAwesomeIcon
              icon={faSquareArrowUpRight}
              size="lg"
              style={{ color: "#1b3f90" }}
            />
          </div>
          <div className="task-title my-auto"> New Lead </div>
          <div className="task-date my-auto"> 3 Hours ago </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Timeline;
