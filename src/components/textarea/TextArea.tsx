import React, { useState } from "react";

const TextArea = () => {
  const [value, setValue] = useState(""); // State to manage textarea value

  const handleChange = (e: any) => {
    setValue(e.target.value); // Update state on input change
  };

  return (
    <div className="w-full">
      <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5 max-w-[500px] ps-7">
        <label htmlFor="example-textarea" className="form-label max-w-32">
          Example Label
        </label>
        <div className="flex flex-col w-full gap-1">
          <textarea
            id="example-textarea"
            className="textarea border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Text"
            rows={6}
            value={value}
            onChange={handleChange}
          ></textarea>
          <span className="text-xs text-gray-500">Hint text goes here</span>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
