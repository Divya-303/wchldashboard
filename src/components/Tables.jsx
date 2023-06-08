import React from "react";
import Table from "react-bootstrap/Table";
import calltakers from "./../data/calltaker.js";
import ProgressBar from "react-bootstrap/ProgressBar";

function TableEntry() {
  const column = Object.keys(calltakers[0]);

  const TDData = () => {
    return calltakers.map((data, i) => {
      var name = data.Name.split(" ");
      var initial;
      if (name[1] !== undefined) {
        initial = name[0].charAt(0) + name[1].charAt(0);
      } else {
        initial = name[0].charAt(0);
      }
      return (
        <tr key={"row-" + i} className="table-row">
          {column.map((v, j) => {
            return (
              <>
                {v !== "ID" && (
                  <td key={"col-" + j}>
                    {v === "Name" && (
                      <div className="avatar-box thumb-sm align-self-center me-2">
                        <span className="avatar-title bg-soft-pink rounded-circle">
                          {initial}
                        </span>{" "}
                      </div>
                    )}
                    {/* new edits */}
                    {v === "Adherence" ? data[v] + "%" : data[v]}
                    {v === "Adherence" && (
                      <div className="progress-Info">
                        {" "}
                        <ProgressBar now={data[v]} isChild="false" />{" "}
                      </div>
                    )}
                  </td>
                )}
              </>
            );
          })}
        </tr>
      );
    });
  };

  return (
    <>
      <Table className="table" size="sm" responsive="lg">
        <thead className="table-head">
          <tr>
            <th>NAME</th>
            <th>TOTAL CALLS</th>
            <th>CALLS ANSWERED</th>
            <th>AVG. SPEED OF ANSWER</th>
            <th>ADHERENCE %</th>
          </tr>
        </thead>
        <tbody>{TDData()}</tbody>
      </Table>
    </>
  );
}

export default TableEntry;
