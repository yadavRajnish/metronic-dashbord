import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";

const DisableInputText = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <SubHeading value="Disabled" />
      <div className="card-body p-12 max-w-[500px] bg-[#fff] m-auto rounded-lg border-[#f1f1f4] border">
        <div className="flex justify-center gap-4 lg:p-2">
          <input
            className="input"
            disabled
            placeholder="Disabled state"
            type="text"
            value=""
          />
        </div>
      </div>
    </div>
  );
};

export default DisableInputText;
