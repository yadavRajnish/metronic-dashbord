import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";

const BasicInputText = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <SubHeading value="Basic" />
      <div className="card-body p-12 max-w-[500px] bg-[#fff] m-auto rounded-lg border-[#f1f1f4] border">
        <div className="flex justify-center gap-4 lg:p-2">
          <input
            className="input max-w-72"
            name="text"
            placeholder="Text Input"
            type="text"
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInputText;
