import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import cases from './../../src/data/cases.js';


function TableEntry() {

  const column = Object.keys(cases[0]);

  // to get table head data <th>
  const THData =()=>{
    return column.map((data)=>{
        return <th key={data}>{data}</th>
    })
  }

  // to get table data <td>
  const TDData =() =>{
    return cases.map((data)=>{
      return(
          <tr>{
                column.map((v)=>{return <td>{data[v]}</td>})
              }
          </tr>
      )
    })
  }

  return (
    <>
    <Table className="table" striped bordered hover size="sm" responsive="lg" variant="primary">
        <thead>
         <tr>{THData()}</tr>
        </thead>
        <tbody>
        {TDData()}
        </tbody>
       </Table>

    

    {/* <Table striped hover size="sm" responsive="lg" variant="primary">
      <thead>
        <tr>
          <th>Event</th>
          <th>Reported cases</th>
          <th>Resolved cases</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Child Missing</td>
          <td>1550</td>
          <td>895</td>
        </tr>
        <tr>
          <td>Harassment</td>
          <td>1705</td>
          <td>1023</td>
        </tr>
        <tr>
          <td>Child Labour</td>
          <td>133</td>
          <td>99</td>
        </tr>
        <tr>
          <td>Home Violence</td>
          <td>203</td>
          <td>86</td>
        </tr>
        <tr>
          <td>Early marriage</td>
          <td>110</td>
          <td>59</td>
        </tr>
        <tr>
          <td>Domestic Abuse</td>
          <td>520</td>
          <td>269</td>
        </tr>
      </tbody>
    </Table> */}
    
     {/* <Button variant="outline-dark">+Add</Button>{' '} */}
    </>
  );
}

export default TableEntry;