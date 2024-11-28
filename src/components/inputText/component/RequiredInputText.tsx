import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";

const RequiredInputText = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <SubHeading value="Required" />
      <div className="card-body p-12 m-auto bg-[#fff] max-w-[500px] rounded-lg border-[#f1f1f4] border">
        <div className="w-full">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label flex items-center gap-1 max-w-32">
              Example Label
              <span className="text-danger">*</span>
            </label>
            <input
              className="input"
              name="email"
              placeholder="Enter email address"
              type="text"
              value={value}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequiredInputText;
