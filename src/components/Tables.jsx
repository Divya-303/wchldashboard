import React from 'react';
import Table from 'react-bootstrap/Table';
import cases from './../../src/data/cases.js';



function TableEntry() {

  const column = Object.keys(cases[0]);


  const TDData =() =>{
    return cases.map((data, index)=>{
      console.log(data, index);
      return(
          <tr className='table-row'>{
                column.map((v)=>{return <td><a href='' link='' className='cases-link'>{data[v]} </a></td>})
              } 
              {/* <a href='' link=''> <FontAwesomeIcon icon={faCircleCheck} size="sm" style={{color: "#3974db",}} /></a> */}
          </tr> 
      )
    })
  }

  return (
    <>
    <Table className="table" size="sm" responsive="lg" >
      <thead className='table-head'>
      {/* <tr>{THData()}</tr> */}
        <tr>
          <th>Sl.No.</th>
          <th>Event</th>
          <th>Reported</th>
          <th>Resolved</th>
        </tr>
      </thead>
        <tbody>
        {TDData()}
        </tbody>
    </Table>

    </>
  );
}

export default TableEntry;