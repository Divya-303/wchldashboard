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
import CurveChart from "../components/CurveChart";

const Cards = (props) => {
    const { [props.icon]: Icon } = Icons;
    // const handleMouseEnter = (e) => {
    //     e.target.classList.add("hover");
    //   }
    //   const handleTransitionEnd = (e) => {
    //     e.target.classList.remove("hover");
    //   }




  return (
    <Card className={(props.type === 'Signals' || props.type ==='District-signals') ? 'border-end' : 'card-design'}>
    {/* <Card className={props.type === 'Signals' ? 'border-end' : ((props.type ==='District-signals') ? 'border-end-d' : 'card-design')}> */}

         {/* <Card className="border-end" onMouseEnter={handleMouseEnter}
    onTransitionEnd={handleTransitionEnd}> */}
    <Card.Body className={props.type ==='District-signals' ? 'd-no-padding' : ''}>
      {/* <Card.Title>{props.count}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{props.name}</Card.Subtitle>
      <Card.Text className='text-end'> */}
        {/* {props.icon} */}
        {/* <FontAwesomeIcon icon={faEnvelope} size="3x"/>
      </Card.Text> */}


      <Container>
    <Row className="gy-2 d-flex justify-content-center align-items-center">
{/* {props.type === 'Cases' && 
      <>
    <Col xs={12} xl={6} className='text-start'>
    <FontAwesomeIcon className="icon-color" icon={Icon} size="3x"/>
    </Col>
    <Col xs={12} xl={6} className='text-end case-text'>
            <h4 className='fw-bolder'>{props.count}</h4>
            <h6 className='fw-bolder'>{props.name}</h6>
    </Col>
    </>
    } */}
    {/* </Row>
    </Container>

    <Container>
    <Row className="gy-3"> */}
    {props.type === "Timer" && 
      <>
    <Col xs={12} xl={8} className="align-self-center"> 
    <div className="timer-data">
    <div className="text-center icon-style bg-light mt-0 mb-3 p-1 border border-light rounded-circle" style={{color: props.chart.backgroundColor}}>
    <FontAwesomeIcon icon={Icon} />
    </div>
    <h3 className="mt-0 text-dark "> {props.count} </h3>
    <h4 className="mt-0 title-text text-truncate"> {props.title} </h4>
    <p className="text-muted mb-0 text-truncate"> {props.sub} </p>
    </div>
    </Col>
    <Col xs={12} xl={4} className="align-self-center"> 
        <CurveChart data={props.chart} />
    </Col>
    </>
}

{props.type === "Signals" && 
<>
  <Col xs={12} xl={5} className='text-start rounded-circle bg-soft d-flex justify-content-center align-items-center'>
    <FontAwesomeIcon icon={Icon} size="2xl" style={{color: props.color}} />
    </Col>
    <Col xs={12} xl={7} className='text-end mx-auto pe-0'>
            <h4 className='fw-bolder card-count'>{props.count}</h4>
            <h6 className='fw-bolder card-name'>{props.name}</h6>
    </Col>
    </>
}

{props.type === "District-signals" && 
<>
  <Col xs={6} xl={2} className='text-start rounded-circle bg-soft d-flex justify-content-center align-items-center'>
    <FontAwesomeIcon icon={Icon} size="2xl" style={{color: props.color}} />
    </Col>
    <Col xs={12} xl={12} className='text-center'>
    <h4 className='fw-bolder d-signal-name'>{props.name}</h4> 
    <h6 className='fw-bolder d-signal-count'> {props.count}</h6>
    
    </Col>
    {/* <Col xs={6} xl={5} className='text-end mx-auto pe-0'>
      
    </Col> */}
    </>
}
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