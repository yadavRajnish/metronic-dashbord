import React, { useState } from "react";

const Selector = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div className="w-full max-w-80">
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
        <label className="form-label max-w-32">Example Label</label>
        <div className="flex flex-col w-full gap-1">
          <select
            className="select"
            name="select"
            value={selectedValue}
            onChange={handleChange}
          >
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <span className="text-xs text-gray-500">
            Selected: {selectedValue || "None"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Selector;
