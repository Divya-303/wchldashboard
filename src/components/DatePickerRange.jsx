import React, { useState } from "react";
import moment from "moment";
import DateRangePicker from "react-bootstrap-daterangepicker";
import Form from "react-bootstrap/Form";

const DatePickerRange = () => {
  const [dates, setDatesState] = useState({
    startDate: "",
    endDate: "",
  });

  const setDates = (e, { startDate, endDate }) => {
    setDatesState({
      startDate: startDate.format("DD-MM-YYYY"),
      endDate: endDate.format("DD-MM-YYYY"),
    });
  };

  const ranges = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 7 Days": [moment().subtract(6, "days"), moment()],
    "Last 30 Days": [moment().subtract(29, "days"), moment()],
    "This Month": [moment().startOf("month"), moment().endOf("month")],
    "Last Month": [
      moment().subtract(1, "month").startOf("month"),
      moment().subtract(1, "month").endOf("month"),
    ],
  };
  return (
    <div>
      <DateRangePicker
        onApply={setDates}
        initialSettings={{
          startDate: "01/01/2023",
          endDate: "12/04/2023",
          ranges: ranges,
        }}
      >
        <Form.Control type="text" className="form-width date-range-input" />
      </DateRangePicker>
    </div>
  );
};

export default DatePickerRange;
