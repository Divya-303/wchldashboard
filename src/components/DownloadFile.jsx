import React, { useRef } from 'react';
// import { JsonToExcel } from "react-json-to-excel";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { useLocation } from "react-router-dom";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import { exportToExcel } from 'react-json-to-excel';
import { useReactToPrint } from 'react-to-print'; 

// const pdfConverter = require("jspdf");

const DownloadFile = (props) => {
    
    // var label = [];
    // let cases = [];
    // for (let state of props.state) {
    //     label.push(state.shortCode);
    //     cases.push(state.reportCase);
    // }

    // const data = [
    //     {State:"kerala", cases:"45"},
    //     {State:"Tamilnadu", cases:"101"},
    //     {State:"Mizoram", cases:"64"}
    // ]

    // const componentRef = useRef();
    const handlePrint = useReactToPrint({
        // content: () => componentRef.current,

    });

    
<div></div>

return (
    <div >
        <Dropdown as={NavItem} className="d-inline-block">
            <Dropdown.Toggle as={NavLink}> <FontAwesomeIcon icon={faEllipsisVertical} size="lg"/> </Dropdown.Toggle>
            <Dropdown.Menu className="profile-view w-10" >
                {/* <Dropdown.Item onClick={() => console.log('pdf clicked')}> <span className="user-action" >Pdf</span> </Dropdown.Item> */}
                <Dropdown.Item onClick={() => exportToExcel(props.state,props.type)}> <span className="user-action">Download</span> </Dropdown.Item>
                <Dropdown.Item onClick={() => handlePrint}> <span className="user-action">Print</span> </Dropdown.Item>
            </Dropdown.Menu> 
        </Dropdown>

    {/* <JsonToExcel
        title="Download as Excel"
        data={data}
        fileName="sample-file"
        btnClassName="custom-classname"
      /> */}
    </div>
    )
}

export default DownloadFile