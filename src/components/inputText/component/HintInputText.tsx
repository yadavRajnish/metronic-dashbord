import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";

const HintInputText = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <SubHeading value="Hint" />
      <div className="card-body p-12 m-auto bg-[#fff] max-w-[500px] rounded-lg border-[#f1f1f4] border">
        <div className="w-full">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-32">Example Label</label>
            <div className="flex flex-col w-full gap-1">
              <input
                className="input"
                name="email"
                placeholder="Enter email address--"
                type="text"
                value={value}
                onChange={handleChange}
              />
              <span className="form-hint">Hint text goes here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HintInputText;
