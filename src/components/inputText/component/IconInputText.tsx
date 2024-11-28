import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";

const IconInputText = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <SubHeading value="Icon" />
      <div className="card-body p-12 m-auto bg-[#fff] max-w-[500px] rounded-lg border-[#f1f1f4] border flex flex-col gap-6">
        <div className="input">
          <i className="ki-outline ki-magnifier"></i>
          <input placeholder="Input with icon" type="text" value="" />
        </div>
        <div className="input">
          <input placeholder="Right icon" type="text" value="" />
          <button className="btn btn-icon">
            <i className="ki-outline ki-setting-4"></i>
          </button>
        </div>
        <div className="input">
          <i className="ki-outline ki-magnifier"></i>
          <input placeholder="Both icons" type="text" value="" />
          <button className="btn btn-icon">
            <i className="ki-outline ki-setting-4"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IconInputText;
