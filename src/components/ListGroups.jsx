import React, { useState, useMemo } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import cases from "../data/cases";
import DataPagination from "./DataPagination";

const ListGroups = () => {
  // console.log('cases',cases.slice(0,5));
  const [results, setResults] = useState(cases);
  // setResults(cases);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const filtered = useMemo(() => {
    // if(props.type === "main-level") {
    //   setPerPage(6);
    // } else {
    //   setPerPage(5);
    // }
    var filteredResult = results;
    // console.log('fs new', filteredResult);
    // console.log('fs', filteredResult.slice(0,5));
    return filteredResult.slice(
      (currentPage - 1) * perPage,
      (currentPage - 1) * perPage + perPage
    );
  }, [results, currentPage, perPage]);

  const caseList = () => {
    // console.log('fs', filtered);
    // use filtered for pagination
    return filtered.map((data, i) => {
      const img = require(`../assets/images/child-cases/${data.image}.webp`);
      return (
        <ListGroup.Item
          key={i}
          className="d-flex justify-content-between align-items-start sm-screen"
        >
          <div className="ms-2 d-flex align-items-center">
            <Image src={img} alt="cases" className="case-img me-2" />
            <div className="case-title">{data.name}</div>
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
      );
    });
  };

  return (
    <div>
      <ListGroup variant="flush" className="list-group-style">
        <ListGroup.Item className="d-flex justify-content-between align-items-start bg-light sm-screen">
          <div className="ms-2 me-auto">
            <div className="p-2 fw-bold">Event</div>
          </div>
          <div className="d-flex align-items-center">
            <div className="p-2 bg-report flex-fill">Reported</div>
            <div className="p-2 bg-resolve flex-fill">Resolved</div>
          </div>
        </ListGroup.Item>
        {caseList()}
      </ListGroup>
      <div className="d-flex flex-row justify-content-end pt-2 pb-0 px-3">
        <DataPagination
          total={cases.length}
          itemsPerPage={perPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default ListGroups;
