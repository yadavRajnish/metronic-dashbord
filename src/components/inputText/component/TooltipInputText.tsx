import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";

const TooltipInputText = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <SubHeading value="Tooltip" />
      <div className="card-body p-12 max-w-[500px] bg-[#fff] m-auto rounded-lg border-[#f1f1f4] border">
        {/* <div className="flex justify-center gap-4 lg:p-2">
          <input
            className="input max-w-72"
            name="text"
            placeholder="Text Input"
            type="text"
            value={value}
            onChange={handleChange}
          />
        </div> */}
        <label className="input">
          <input placeholder="Right icon" type="text" value="" />
          <span className="leading-none" data-tooltip="#my_tooltip">
            <i className="ki-outline ki-information-4"></i>
          </span>
        </label>
        <div className="tooltip" id="my_tooltip">
          Hey, a delightful tooltip is here!
        </div>
      </div>
    </div>
  );
};

export default TooltipInputText;
