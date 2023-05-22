import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
// import calls from "../data/calls";

const SelectBox = (props) => {
    const [selectVal, setSelectVal] = useState("");
    const handleValueChange = (e) => {
        setSelectVal(e.target.value);
        // if(props.type === 'calls') {
        // props.getValue(e.target.value);
        // }
    }
  return (
    <div> 
    {/* <Form.Select aria-label="Select Box" className={"form-width " + props.type} value={selectVal} onChange={e=> handleValueChange(e)}> */}
    <Form.Select aria-label="Select Box" className="form-width calls" value={selectVal} onChange={e=> handleValueChange(e)}>
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