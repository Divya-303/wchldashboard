import React from 'react';
import Form from 'react-bootstrap/Form';
// import calls from "../data/calls";

const SelectBox = (props) => {
  return (
    <div> 
    <Form.Select aria-label="Select Box" className="form-width">
    <option disabled>{props.option}</option>
    {props.call.map((data,index) => (
         <option key={index} value={data.code}>{data.type}</option>
    ))}
    {/* <option value="1">Calls related to children landing at 1098</option>
    <option value="2">Calls landing at 112 forwarded to 1098</option>
    <option value="3">Calls forwarded from 1098 to 112</option> */}
  </Form.Select>
  </div>
  )
}

export default SelectBox;