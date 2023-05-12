import React , { useState, useMemo }from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Image from "react-bootstrap/Image";
import cases from '../data/cases';
import DataPagination from './DataPagination';

const ListGroups = () => {
  // console.log('cases',cases.slice(0,5));
  // /${logo}
  // require(`../assets/images/login-side.jpg.png`).default
  const [results, setResults] = useState(cases);
  // setResults(cases);
  const [currentPage, setCurrentPage] = useState(1);
  const filtered = useMemo(() => {
    var filteredResult = results;
    // console.log('fs new', filteredResult);
    // console.log('fs', filteredResult.slice(0,5));
    return filteredResult.slice(
      (currentPage - 1) * 5,
      (currentPage - 1) * 5 + 5
    );
  }, [results, currentPage]);

  const caseList = () => {
    // console.log('fs', filtered);
  return filtered.map((data, i) => {
    const img = require(`../assets/images/child-cases/${data.image}.webp`);
    return <ListGroup.Item key={i} className="d-flex justify-content-between align-items-start">
        <div className="ms-2 d-flex align-items-center">
          {/* <img src={img} alt="cases" className='case-img me-2'/> */}
          <Image src={img} alt="cases" className='case-img me-2' />  
          <div className="case-title">{data.name}</div>
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
    <div className="d-flex flex-row justify-content-end pt-1 px-3">
    <DataPagination total={cases.length}
                    itemsPerPage={5}
                    currentPage={currentPage}
                    onPageChange={(page) => setCurrentPage(page) }/>
    </div>
    </div>
  )
}

export default ListGroups;