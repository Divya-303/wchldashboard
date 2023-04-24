import React from 'react';
import Table from 'react-bootstrap/Table';
// import cases from './../../src/data/cases.js';
import calltakers from './../data/calltaker.js';



function TableEntry() {

  

  const column = Object.keys(calltakers[0]);


  const TDData =() =>{
    return calltakers.map((data, i)=>{
      var name = data.ID.split(" ");
      var initial ;
      if (name[1]!== undefined) {
        initial = name[0].charAt(0) + name[1].charAt(0);
      } else {
        initial = name[0].charAt(0);
      }
      console.log(name);
      console.log(initial);
      return(
          <tr key={"row-"+i} className='table-row'>{
                column.map((v, j)=>{return <td key={"col-"+j}>{data[v]}</td>})
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
          <th></th>
          <th>Name</th>
          <th>Total Calls</th>
          <th>Calls Answered</th>
          <th>Avg.Speed of answer</th>
          <th>Adherence %</th>
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