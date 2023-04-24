import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faPersonCircleQuestion, faPersonDigging, faPersonBurst, faPersonHarassing } from '@fortawesome/free-solid-svg-icons';
//import { faPhone, faEnvelope, faCommentSms, faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
//import * as Icons from '@fortawesome/fontawesome-free-regular';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const Cards = (props) => {
    const { [props.icon]: Icon } = Icons;
    // const handleMouseEnter = (e) => {
    //     e.target.classList.add("hover");
    //   }
    //   const handleTransitionEnd = (e) => {
    //     e.target.classList.remove("hover");
    //   }




  return (
    <Card className="border-end">
         {/* <Card className="border-end" onMouseEnter={handleMouseEnter}
    onTransitionEnd={handleTransitionEnd}> */}
    <Card.Body>
      {/* <Card.Title>{props.count}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{props.name}</Card.Subtitle>
      <Card.Text className='text-end'> */}
        {/* {props.icon} */}
        {/* <FontAwesomeIcon icon={faEnvelope} size="3x"/>
      </Card.Text> */}


      <Container>
    <Row>
    <Col xs={12} xl={5} className='text-start rounded-circle bg-soft align-items-center'>
    <FontAwesomeIcon className='pt-3 ms-2' icon={Icon} size="2xl" style={{color: props.color}} />
    </Col>
    <Col xs={12} xl={7} className='text-end align-items-center'>
            <h4 className='fw-bolder card-count'>{props.count}</h4>
            <h6 className='fw-bolder card-name'>{props.name}</h6>
    </Col>
    </Row>

    {/* edit starts */}
    {/* <Row> 
       <Col xs={12} xl={6} className='icon-class'>
        <FontAwesomeIcon icon={Icon} size="3x" style={{color: props.color}}/>
       </Col>
       <Col xs={12} xl={6} className='text-end'>
       <h6 className='card-signal-name'>{props.name}</h6>
       <h4 className='card-signal-number'> {props.count}</h4>
      </Col>
    </Row> */}
    {/* edit ends */}
    </Container>
      {/* <div class="media d-flex">
                <div class="align-self-center">
                  <i class="icon-pencil primary font-large-2 float-left"></i>
                </div>
                <div class="media-body text-right">
                  <h3>278</h3>
                  <span>New Posts</span>
                </div>
              </div> */}
      {/* <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link> */}
    </Card.Body>
  </Card>
  )
}

export default Cards;