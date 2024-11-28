import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";

const DefaultSizeInputText = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <SubHeading value="Sizes - Default" />
      <div className="card-body p-12 m-auto bg-[#fff] max-w-[500px] rounded-lg border-[#f1f1f4] border flex flex-col gap-6">
        <label className="input input-sm">
          <i className="ki-outline ki-magnifier"></i>
          <input placeholder="Small" type="text" value="" />
          <button className="btn btn-icon">
            <i className="ki-outline ki-setting-4"></i>
          </button>
        </label>
        <label className="input">
          <i className="ki-outline ki-magnifier"></i>
          <input placeholder="Default" type="text" value="" />
          <button className="btn btn-icon">
            <i className="ki-outline ki-setting-4"></i>
          </button>
        </label>
        <label className="input input-lg">
          <i className="ki-outline ki-magnifier"></i>
          <input placeholder="Large" type="text" value="" />
          <button className="btn btn-icon">
            <i className="ki-outline ki-setting-4"></i>
          </button>
        </label>
      </div>
    </div>
  );
};

export default DefaultSizeInputText;
