import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import calls from "../data/calls";

const SelectBox = (props) => {
  const [selectVal, setSelectVal] = useState("");
  const handleValueChange = (e) => {
    setSelectVal(e.target.value);
    // if(props.type === 'calls') {
    // props.getValue(e.target.value);
    // }
  };
  return (
    <div>
      {/* <Form.Select aria-label="Select Box" className={"form-width " + props.type} value={selectVal} onChange={e=> handleValueChange(e)}> */}
      <Form.Select
        aria-label="Select Box"
        className="form-width calls"
        value={selectVal}
        onChange={(e) => handleValueChange(e)}
      >
        <option disabled>{props.option}</option>
        {props.call.map((data, index) => (
          <option key={index} value={data.code}>
            {data.type}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default SelectBox;
