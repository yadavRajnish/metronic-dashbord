import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import "./style.css";

const DatePicker = () => {
  const [date, setDate] = useState(null);
  return (
    <div className="flex-auto max-w-80">
      <div className="flex-auto ">
        <label htmlFor="buttondisplay" className="font-bold block mb-2">
          Button Display
        </label>
        <Calendar
          id="buttondisplay"
          value={date}
          onChange={e => setDate(e.value)}
          showIcon
          className="calendar-custom"
          style={{ borderRadius: "0" }}
        />
      </div>
    </div>
  );
};

export default DatePicker;
