import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import cases from '../data/cases';

const ListGroups = () => {
  // /${logo}
  // require(`../assets/images/login-side.jpg.png`).default
  const caseList = () => {
  return cases.map((data, i) => {
    const img = require(`../assets/images/child-cases/${data.image}.png`);
    return <ListGroup.Item key={i} className="d-flex justify-content-between align-items-start">
        <div className="ms-2 d-flex align-items-center">
          <img src={img} alt="cases" className='case-img me-2'/>
          <div className="case-title fw-bold">{data.name}</div>
          {/* Cras justo odio */}
        </div>
        <div className="d-flex align-items-center">
        <div className="p-2 bg-report flex-fill"> 
        {/* <Badge pill className='badge-soft-bg'> */}
        {data.count}
        {/* </Badge> */}
        </div>
        <div className="p-2 bg-resolve flex-fill"> 
          {/* <Badge pill className='badge-soft-bg'> */}
          {data.solved}
          {/* </Badge> */}
        </div>
        {/* / */}
       </div>
    </ListGroup.Item>
  });
  }

  return (
    <div>
    <ListGroup variant="flush" className='list-group-style'>
    <ListGroup.Item className="d-flex justify-content-between align-items-start bg-light">
        <div className="ms-2 me-auto">
          <div className="p-2 fw-bold">Event</div>
        </div>
        <div className="d-flex align-items-center">
        <div className="p-2 bg-report flex-fill"> 
          Reported 
          </div>
          <div className="p-2 bg-resolve flex-fill"> 
           Resolved 
          </div>
        </div>
      </ListGroup.Item>
      {caseList()}
    </ListGroup>
    </div>
  )
}

export default ListGroups;