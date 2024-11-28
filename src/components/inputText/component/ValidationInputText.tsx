import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";

const ValidationInputText = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <SubHeading value="Validation" />
      <div className="card-body p-12 m-auto bg-[#fff] max-w-[500px] rounded-lg border-[#f1f1f4] border flex flex-col gap-6">
        <input
          className="input"
          placeholder="Default state"
          type="text"
          value=""
        />
        <input
          className="input border-danger"
          placeholder="Error state"
          type="text"
          value=""
        />
        <input
          className="input border-success"
          placeholder="Success state"
          type="text"
          value=""
        />
      </div>
    </div>
  );
};

export default ValidationInputText;
