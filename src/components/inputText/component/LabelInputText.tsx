import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";

const LabelInputText = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <SubHeading value="Label" />
      <div className="card-body p-12 bg-[#fff] max-w-[500px] m-auto rounded-lg border-[#f1f1f4] border">
        <div className="w-full">
          <div className="flex items-baseline flex-wrap lg:flex-nowrap gap-2.5">
            <label className="form-label max-w-32">Example Label</label>
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

export default LabelInputText;
