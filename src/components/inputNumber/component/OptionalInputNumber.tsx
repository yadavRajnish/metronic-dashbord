import React, { useState } from "react";
import SubHeading from "../../heading/SubHeading";
import { InputMask } from "primereact/inputmask";

const OptionalInputNumber = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <SubHeading value="Optional" />
      <div className="card-body p-12 max-w-[500px] bg-[#fff] m-auto rounded-lg border-[#f1f1f4] border">
        <div className="flex justify-center gap-4 lg:p-2">
          <InputMask
            value={value}
            onChange={e => setValue(e.target.value)}
            mask="(999) 999-9999? x99999"
            placeholder="(999) 999-9999? x99999"
            className="!input"
          />
        </div>
      </div>
    </div>
  );
};

export default OptionalInputNumber;
